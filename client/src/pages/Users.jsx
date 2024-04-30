import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Users = () => {

  //this is to delete
  const handleDelete = (id) => {
    axios.delete('http://localhost:1000/deleteUser/'+id)
    .then(res => {console.log(res)
            window.location.reload()
    })
    .catch(err => console.log(err))

  }


  const [users, setUsers] = useState([ ])

  useEffect(() => {
    axios.get("http://localhost:1000")
    .then(result => setUsers(result.data))
    .catch(err => console.error(err))
  },[])

  return (
    <>
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-item-center'>
      <div className='w-50 bg-white rounded p-3'>
<Link to="/create" className='btn btn-success'>
  Add New
</Link>
<table className='table'>
<thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {
    users.map((user)=>{
     return <tr>
        <td key={user._id}>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td><Link to={`/update/${user._id}`} className='btn btn-success'>
  Edit
</Link>
        <button className='btn btn-danger' onClick={(e)=> handleDelete(user._id)}>Delete</button>
        </td>
      </tr>
    })
  }
</tbody>
</table>

      </div>
    </div>
 </> )
}

export default Users