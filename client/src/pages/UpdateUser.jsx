import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {

  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:1000/getUser/"+id)
    .then(result => {
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
      //console.log(result)
    })
    .catch(err => console.error(err))
  },[])

  const Update = (e) =>{
        e.preventDefault()
    axios.put('http://localhost:1000/updateUser/'+id,{name, email, age})
    .then(result=>{
      //window.alert("see me here2")
          console.log(result)
        navigate('/')
    })
    .catch(err => console.error(err))
  }


  return (
    
    <>

    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
          <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={Update}>
            <h2>Update User</h2>
      <div className="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
       
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input type="email" className="form-control" id="exampleInputPassword1" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Age</label>
        <input type="text" className="form-control" value={age}
        onChange={(e) => setAge(e.target.value)}
        />
      </div>
    
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
            </div>
    
    </div>
        
        </>
  )
}

export default UpdateUser