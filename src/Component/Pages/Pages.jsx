import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Header from '../Header/Header'
import FindByName from '../Input/FindByName'
import Table from '../Table/Table'
import axios from 'axios'


function Pages() {
  //state for table and form 
  const[formAndTable,setPages1]=useState(false)
 const propes=()=>{
  setPages1(!formAndTable) 
  setUpdate({
    name:'',
    profile:'',
    gender:'',
    department:[],
    salary:'',
    date:'',
    note:'',
    id:''
  })
 }
 
 //state for table and findByName
 const[tableAndFind,setPages2]=useState(true)
 function searchprop(){
  setPages2(!tableAndFind)
 }
 //state for table to form
 const[id,setPages4]=useState(0)

const[tableToForm,setTableToForm]=useState(false)
//state for update
const edit=(id)=>{
  setTableToForm(!tableToForm)
  setPages4(id)
}
const[Update,setUpdate]=useState({
  name:'',
  profile:'',
  gender:'',
  department:[],
  salary:'',
  date:'',
  note:'',
  id:''
})
async function fetchData(){
  const Data=await axios.get(`http://localhost:3000/data/${id}`)
  const editData=Data.data
  setUpdate({...Update,name:editData.Name,profileImage:editData.Profile,gender:editData.Gender,department:JSON.parse(editData.Department),salary:editData.Salary,date:editData.Date,note:editData.Note,id:editData.id})
}
useEffect(()=>{
  tableToForm && fetchData()
},[tableToForm])

let Departments=JSON.stringify(Update.department)
let obj1={
  Name:Update.name,
  Profile:Update.profileImage,
  Gender:Update.gender,
  Department:Departments,
  Salary:Update.salary,
  Date:Update.date,
  Note:Update.note
}
  return (
    <div>
      <Header />
     {tableAndFind?(formAndTable?<Form propes={propes} obj1={obj1}  Update={Update} setUpdate={setUpdate} id={id}  edit={edit} />: <Table propes={propes} edit={edit} tableToForm={tableToForm} obj1={obj1} searchprop={searchprop} />):<FindByName  searchprop={searchprop} />}
      
    </div>
  )
}

export default Pages
