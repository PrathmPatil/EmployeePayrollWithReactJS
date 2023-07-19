import Tablestyle from "../Table/Table.module.css"
import search from "../Image/search icon.png"
import axios from "axios"
import { useState, useEffect } from "react"



function Table({searchprop,propes,edit,obj1}) {  
  
  function Delete(id){
      axios.delete(`http://localhost:3000/data/${id}`)
    console.log("data deleted")
  }

  // const stopId=()=>{
  //   obj1()
  // }
  const[info,setInfo]=useState([])
  //use for table
    useEffect(()=>{async function fetchData(){
     try {
       const response = await axios.get('http://localhost:3000/data');
       setInfo(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
    }
    fetchData()},[])

return (
  <div>
    <div className={Tablestyle.fullform}>
      <div className={Tablestyle.title}>
        <div className={Tablestyle.left_title}>
          <h3>Employee Payroll</h3>
        </div>
        <div className={Tablestyle.right_title}>
          <div className={Tablestyle.box_i}>
            <img id={Tablestyle.search_icon} src={search} onClick={()=>{
              searchprop()
              }}  alt="" />
          </div>
          <button className={Tablestyle.box_t} onClick={()=>{
            // stopId();
            propes()    
          }} >
            <h1>+ </h1>
            <h4>Add User</h4>
          </button>
        </div>
      </div>

      <table className={Tablestyle.table}>
        <thead>
          <tr className={Tablestyle.table_headers}>
            <th className={Tablestyle.profile_pic}></th>
            <th className={Tablestyle.name_col}>NAME</th>
            <th className={Tablestyle.gender_col}>GENDER</th>
            <th className={Tablestyle.department_col}>DEPARTMENT</th>
            <th className={Tablestyle.salary_col}>SALARY</th>
            <th className={Tablestyle.start_date_col}>START DATE</th>
            <th className={Tablestyle.action_col}>ACTION</th>
          </tr>
        </thead>
        <tbody className={Tablestyle.table_body}>
          {

            info.map(i=>
              
               (<tr>       
          <td><img src={i.Profile} style={{border:"2px solid black", height:"20px", width:"20px"}}  alt=""/></td>
          <td>{i.Name}</td>
          <td>{i.Gender}</td>
          <td> {JSON.parse(i.Department)?.map((i)=>i+" ")}</td>
          <td>{i.Salary}</td>
          <td>{i.Date}</td>
          <td>
            <img id={Tablestyle.search_icon} onClick={()=>{propes();edit(i.id)} }  src= "https://w7.pngwing.com/pngs/613/900/png-transparent-computer-icons-editing-delete-button-miscellaneous-angle-logo.png" />
            <img id={Tablestyle.search_icon} onClick={()=>Delete(i.id)} src= "https://w7.pngwing.com/pngs/271/838/png-transparent-computer-icons-delete-icon-white-text-logo.png"/>
          </td>
        </tr>) 
        )
       }
        </tbody>
      </table>
    </div>
  </div>
)
}

export default Table


