import react, { useState,useEffect } from "react";
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"

const EditUser=()=>{

    const navigate=useNavigate()
    const { id } = useParams();
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

      useEffect(() => {
        loadUser();
      }, []);

      const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`);
        navigate("/")
      }

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
      };

    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
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
export default EditUser