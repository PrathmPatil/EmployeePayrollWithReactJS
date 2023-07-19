import React, { useEffect, useState } from 'react'
import style from '../Input/FindByName.module.css'
import Tablestyle from '../Table/Table.module.css'
import axios from 'axios'

function FindByName({searchprop}) {

      const[inputName,setName]=useState({
        name:""
      })
      function SetName(e){
        setName({...inputName,name:e.target.value})
      }
      //check by id
      const[Id,setId]=useState({
        id:0
      })
      function SetId(e)
      {
        setId({...Id,id:e.target.value})
      }
      //pass data to table
      const[tableData,setTable]=useState({
        name:"",
        profileImage:"",
        gender:"",
        department:[],
        salary:"",
        date:"",
        note:"",
        id:""
      })
      function resetSearch(){
        setTable({...tableData, name:"",
        profileImage:"",
        gender:"",
        department:[],
        salary:"",
        date:"",
        note:"",
        id:""})
      }
      const[data,setData]=useState([])
        useEffect(()=>{async function Data(){ 
            const getData=await axios.get("http://localhost:3000/data/")
            let showData=getData.data
            setData({...data,showData})
        }Data()
    },[])
    function Submit(){
      const newid=parseInt(Id.id)
      inputName.name? (data.showData?.filter((i)=>{i.Name===(inputName.name)?setTable({...tableData,name:i.Name,profileImage:i.Profile,gender:i.Gender,department:JSON.parse(i.Department),salary:i.Salary,date:i.Date,note:i.Note,id:i.id}):(console.log("No"))}))
      :
      (data.showData?.filter((i)=>{i.id===(newid)?setTable({...tableData,name:i.Name,profileImage:i.Profile,gender:i.Gender,department:JSON.parse(i.Department),salary:i.Salary,date:i.Date,note:i.Note,id:i.id}):(console.log("No"))}))
       // find by name
       // find by id   
    }
  return (
    <div className={style.main}>
        <div className={style.box}>
            <label htmlFor="text" className={style.label}>Enter Data</label>
            <input type="text" className={style.in} onChange={SetName} placeholder='Name ex="Sumit"'/>
            <input type="number" className={style.in} onChange={SetId} placeholder='Id ex=1' />
            <div className={style.button}>
            <button className={style.submit} onClick={Submit}>Search</button>
            <button className={style.submit} onClick={searchprop}>Back</button>
            <button className={style.submit} onClick={resetSearch}>Reset</button>
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
            </tr>
          </thead>
          <tbody className={Tablestyle.table_body}>
            <tr>
              <td></td>
            <td>{tableData.name}</td>
            <td>{tableData.gender}</td>
            <td>{tableData.department}</td>
            <td>{tableData.salary}</td>
            <td>{tableData.date}</td>
            </tr> 
          </tbody>
        </table>
      </div>
    )
}

export default FindByName
