import React, {useState } from 'react'
import style from '../Form/Form.module.css'
import axios from 'axios'

function Form({propes,obj1,id,Update,setUpdate,tableToForm}) {
  const image1="https://www.maxpixel.net/static/photo/640/Young-Smile-Portrait-Ai-Generated-Man-Teeth-7833751.jpg" 
  const image2="https://neural.love/cdn/ai-photostock/1ed68c89-472f-6826-b8e9-499a4e26e94d/0.jpg?Expires=1693526399&Signature=SVIZq9FsFH7V4pTO3rnquexmRif~avh5jKgZ3eHW0WEj9~KHziHJBo1z26jICuDY~E0-iLjCFWdALeiC7tq6FLDzKB0FQQluGw2W4Jhd629zv8trfFD4e1UpLujrYCp7IprdcrRDIzk1dCL~zxScd1aDfaQZx4waYhmtk1AwlmboOCPcRfrXtb4o~zeUxv8igGGzKyPvvxpmCgqBsbCrnCZDHy8Gjouy1m-oFh61-mCTuapFfZ6rHGqjd85zo~TU26HPvrVRV8XeZ0RTlRQWF8e3QwZ8Yw-GWIvF2Xx90V-2~qRUlGi314fJXPAHclowdGcDWnyZWIcPoYN6wHrkWQ__&Key-Pair-Id=K2RFTOXRBNSROX" 
  const image3="https://img.etimg.com/thumb/msid-96622207,width-650,height-488,imgsize-17564,,resizemode-75/ai-women.jpg"
  const image4="https://neural.love/cdn/ai-photostock/1ed54ee4-e3a8-6970-8ca6-2d8936e2256f/1.jpg?Expires=1693526399&Signature=r2wLOm~mEv521JTuJvDhhwwORuPX5wmT-reJW9SFkYSH7w5MZW97UkeJ040IHuCW2z5U0yYxZJbH2ROKV6Eg1dG6GvJumsskeWZgokxmk6IawnJf-ktImBUSrrQSB8mctjj8PqombIVZljmvxHOq1RwM~DyIYmpZ4RcPzCpI4ZH~TKTINwohq3OYMftssSoDYXRIjXUtHjYz5nFEpsxmMQPKJ4otm9tCMcschUQCFOIl2~Pz4QN3E8DNe-Bi7fWQF2aZx811kxIisjw6SlwQjLlLgP4wnPMtm9b5TQCiUNx6xzMWGA1KNSJLy1k2woURilaAgtkAGmhzyWZVWLs9xw__&Key-Pair-Id=K2RFTOXRBNSROX" 
  
  const[Info,SetInfo]=useState({
    name:'',
    profile:'',
    gender:'',
    department:[],
    salary:'',
    date:'',
    note:''
  })
  //set info form for updation
  
  function setName(e){
    setUpdate({...Update,name:e.target.value})
    SetInfo({...Info,name:e.target.value})
  }
  function setProfile(e){
    setUpdate({...Update,profile:e.target.value})
    SetInfo({...Info,profile:e.target.value})
  }
  function setGender(e){
    setUpdate({...Update,gender:e.target.value})
    SetInfo({...Info,gender:e.target.value})
  }
  function setDepartment(e){
    const data=e.target.value
    const datacheck=e.target.checked
    SetInfo(preData=>({
      ...preData,department:datacheck?
      [...preData.department,data]:preData.department.filter(checkedDepartment=>checkedDepartment !== data)
    }))
    setUpdate({...Update,department:datacheck?[...Update.department,data]:Update.department.filter((i)=> i!==data)})

  }
  function setSalary(e){
    setUpdate({...Update,salary:e.target.value})
    SetInfo({...Info,salary:e.target.value})
  }
  function setDate(e){
    setUpdate({...Update,date:e.target.value})
    SetInfo({...Info,date:e.target.value})
  }
  function setNote(e){
    setUpdate({...Update,note:e.target.value})
    SetInfo({...Info,note:e.target.value})
  }  
let deptStringify=JSON.stringify(Info.department)
const Submit=async()=>{
const objForPost={
  Name:Info.name,
  Profile:Info.profile,
  Gender:Info.gender,
  Department:deptStringify,
  Salary:Info.salary,
  Date:Info.date,
  Note:Info.note
}
//post data to json-server
tableToForm?await axios.post("http://localhost:3000/data",objForPost):await axios.put(`http://localhost:3000/data/${id}`,obj1)

}
  return (
        <form className={style.main}>
        <div className={style.data} id={style.my_Form}>
        <div class={style.form_head}>
          <h2>Employee Payroll Form</h2>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Name</h3>
          </div>
          <div class={style.form_data}>
            <input type="text" id={style.get_name} name="name"  value={Update.name} onChange={setName}  />
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Profile Image</h3>
          </div>
          <div class={style.form_data}>
            <div class={style.inner_data}>
              <input type="radio" name="profile" value={image1} checked={Update.profile===image1}   onChange={setProfile}  />
              <img class={style.profile} src={image1} alt="profile1" />
            </div>
            <div class={style.inner_data}>
              <input type="radio" name="profile" value={image2} checked={Update.profile===image2} 
               onChange={setProfile} />
              <img class={style.profile} src={image2} alt="profile1" />
            </div>
            <div class={style.inner_data}>
              <input type="radio" name="profile" value={image3} checked={Update.profile===image3}  onChange={setProfile} />
              <img class={style.profile} src={image3} alt="profile1" />
            </div>
            <div class={style.inner_data}>
              <input type="radio" name="profile" value={image4}checked={Update.profile===image4}  onChange={setProfile} />
              <img class={style.profile} src={image4} alt="profile1" />
            </div>
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Gender</h3>
          </div>
          <div class={style.form_data}>
            <div class={style.inner_data} id="gender_male">
              <input type="radio" id="male" name="gender" value="male" checked={Update.gender==="male"}   onChange={setGender}/>
              <label for="gender">Male</label>
            </div>
            <div class={style.inner_data} id="gender_female">
              <input type="radio" id="female" name="gender" value="female" checked={Update.gender==="female"}  onChange={setGender}/>
              <label for="gender">Female</label>
            </div>
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Department</h3>
          </div>
          <div class={style.form_data}>
            <div class={style.inner_data} id="department_hr">
              <input type="checkbox" name="department" value="HR" checked={Update.department.includes("HR")}  onChange={setDepartment} />
              <label htmlFor="department">HR</label>
            </div>
            <div class={style.inner_data} id="department_finance">
              <input type="checkbox" name="department" value="Finance" checked={Update.department.includes("Finance")}   onChange={setDepartment} />
              <label htmlFor="department">Finance</label>
            </div>
            <div class={style.inner_data} id="department_sales">
              <input type="checkbox" name="department" value="Sales"  checked={Update.department.includes("Sales")} onChange={setDepartment} />
              <label htmlFor="department">Salse</label>
            </div>
            <div class={style.inner_data} id="department_engineer">
              <input type="checkbox" name="department" value="Engineer" checked={Update.department.includes("Engineer")}  onChange={setDepartment}  />
              <label htmlFor="department">Engineer</label>
            </div>
            <div class={style.inner_data} id="department_other">
              <input type="checkbox" name="department" value="Other" checked={Update.department.includes("Other")} onChange={setDepartment}  />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Salary</h3>
          </div>
          <div class={style.form_data}>
            <select class={style.select_data} name="salary" id="s_select" value={Update.salary}  onChange={setSalary}> 
              <option value="">Select Salary</option>
              <option value="0-10000">0-10000</option>
              <option value="10001-20000">10001-20000</option>
              <option value="20001-30000">20001-30000</option>
              <option value="30001-40000">30001-40000</option>
              <option value="40001-50000">40001-50000</option>
              <option value="50001-60000">50001-60000</option>
              <option value="60001-70000">60001-70000</option>
              <option value="70001-80000">70001-80000</option>
              <option value="80001-90000">80001-90000</option>
              <option value="90001-100000">90001-100000</option>
            </select>
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Start Date</h3>
          </div>
          <div class={style.form_data}>
          <input type="date"  value={Update.date} onChange={setDate} />
          </div>
        </div>
        <div class={style.form_layout}>
          <div class={style.form_title}>
            <h3>Notes</h3>
          </div>
          <div class={style.form_data}>
            <textarea name="about" id={style.notes} cols="30" rows="10"  value={Update.note} onChange={setNote} ></textarea>
          </div>
        </div>
        <div class={style.form_layout} id={style.button_id}>
          <div class={style.form_title}>
            <button type="reset" id={style.cancel} onClick={propes} >Cancel</button>
          </div>
          <div class={style.form_data} id={style.button_id2}>
            <button type="submit" id={style.submit_data} onClick={()=>{
              propes();
              Submit()
            }} >Submit</button>
            <button type="reset" id={style.reset_data}>Reset</button>
          </div>
        </div>
      </div>    
    </form>
  )
}

export default Form
