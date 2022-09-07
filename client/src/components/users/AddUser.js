import React, { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const AddUser=()=>{

    const navigate=useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "", 
        phone: "",
        dob: "",
        gender:"",
        hobbies:"",
      });

      const { name, email, phone, dob, gender,hobbies } = user;

      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        
      };

      const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("https://data-json-1.herokuapp.com/users", user);
        navigate("/")
      }

    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your dob"
                name="dob"
                value={dob}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your gender"
                name="gender"
                value={gender}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your hobbies"
                name="hobbies"
                value={hobbies}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    )
}

export default AddUser