import react,{useState,useEffect} from "react"
import axios from "axios";
import {NavLink} from 'react-router-dom'
// import  {Link} from "react-router-dom"

const Home=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers()
        },[])


 const loadUsers=async()=>{
  
            const result=await axios.get("https://data-json-1.herokuapp.com/users")
            setUsers(result.data.reverse())
 }

 const deleteUser=async(id)=>{
await axios.delete(`https://data-json-1.herokuapp.com/users/${id}`)
loadUsers()
 }

    return(
        <div className="conatiner">
          <div className="py-4">
            <h1>HomePage</h1>
            <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">dob</th>
      <th scope="col">gender</th>
      <th scope="col">hobbies</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((user,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
     <td>{user.email}</td>
     <td>{user.phone}</td>
     <td>{user.dob}</td>
     <td>{user.gender}</td>
     <td>{user.hobbies}</td>

      <td>
      <NavLink exact to ="/users/add">
        <button class="btn btn-outline-primary mr-2">Add user</button>
        </NavLink>
<NavLink exact to ="/users/edit">
        <button class="btn btn-outline-primary mr-2">Edit</button>
        </NavLink>
        <button class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
    ))
   }
  </tbody>
</table>
          </div>
        </div>
    )
}

export default Home;