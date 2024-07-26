import React, { useEffect, useState } from 'react'
import styles from "./body.module.css"
import axios from "axios"
import Pagination from '../pagination/pagination'
import CardWrapper from '../cardWrapper/cardWrapper'

const Body = () => {
  let api ="https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";
    
  let [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [cityFilter,setCityFilter] = useState("")

  // console.log(typeFilter)
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(api);
        setData(res.data);
      //  console.log(res.data);
      } catch (error) {
        console.log(alert("failed to fetch data"));
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

useEffect(() => {
    (async function () {
      try {
        if (search !== "") {
          let res = await axios.get(`${api}?search=${search}`)
          setData(res.data)
          setTypeFilter("")
          setCityFilter("")
        }
        else if(typeFilter !== "") {
          let res = await axios.get(`${api}?filter=${typeFilter}`)
          setData(res.data)
          setCityFilter("")
          setSearch("")
        }
        else if(cityFilter !== "") {
          let res = await axios.get(`${api}?location=${cityFilter}`)
          setData(res.data)
          setTypeFilter("")
          setSearch("")
        }
        else {
          let res = await axios.get(api);
          setData(res.data);
        //  console.log(res.data)
        }
      } catch (error) {
         alert("no result for search type");
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,typeFilter,cityFilter]);  

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
    // const [allData,setAllData] = useState([])
    // // const getData = async () => { 
    // // }
    // useEffect(() => { 
    //     (async function(){ 
    //         const res = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`)
    //         setAllData(res.data)
    //         console.log(res.data)
    //     }())
    // },[])

  return (
      <div className={ styles.parent}>
      <form onSubmit={(e) => { 
        e.preventDefault()
        setSearch(e.target.search.value)
      }}
        className={styles.flexForSelectAndInput}>
              <div className={styles.cityAndTypeSelectOptions}>
          <select onChange={(e)=>setCityFilter(e.target.value)} name="filerByType" id="">
                  <option style={{display:"none"}}>Filter by city</option>
                  <option value="Pune">Pune</option>                
                  <option value="Mumbai">Mumbai</option>                
                  <option value="Varanasi">Varanasi</option>                
                  <option value="Goa">Goa</option>
                  <option value="Rishikesh">Rishikesh</option>    
                  <option value="Kerala">Kerala</option>    
                  <option value="Delhi">Delhi</option>    
                  <option value="Chennai">Chennai</option>    
                  <option value="Hyderabad">Hyderabad</option>    
          </select>
          <select onChange={(e)=>setTypeFilter(e.target.value)} name="filerByDate" id="">
                  <option style={{display:"none"}} value="">Filter by Type</option>
                  <option value="Yoga">Yoga</option>                
                  <option value="Meditation">Meditation</option>                
                  <option value="Detox">Detox</option>                
          </select>
              </div>
              <div>
                  <input name='search' type="text" placeholder='Search Retreats by title'/>
              </div>
          </form>
          <CardWrapper data={ currentRecords} />
          <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Body

// https://stackoverflow.com/questions/68760114/pagination-in-react-with-first-next-previous-last