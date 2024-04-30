import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {

const [name, setName] = useState()
const [email, setEmail] = useState()
const [age, setAge] = useState()
const navigate = useNavigate();

const Submit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:1000/createUsers',{name:name, email:email, age:age})
    .then(result=>{
        console.log(result)
        navigate('/')
    })

    .catch(err => console.error(err))
}

  return (

    <>

<div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
      <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Submit}>
        <h2>Add User</h2>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Name" 
    onChange={(e) => setName(e.target.value)}
    />
     </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" 
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" className="form-control"
    onChange={(e) => setAge(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>

</div>
    
    </>
  )
}

export default CreateUsers