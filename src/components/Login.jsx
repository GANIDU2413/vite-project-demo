import { useState } from "react";

function Login() {
    const [loginData,setLoginData]=useState({
        userName:"",
        password:"",
        confirmpassword:"",
    })

    const [errors,setErrors]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(loginData);
        if(loginData.password === loginData.confirmpassword){
            console.log(loginData);
            setErrors("")
            if (loginData.password.length<8) {
                setErrors("password length is not enough")
            }
        }else {
            setErrors("password doesn't matching");
            console.log("password doesn't matching");
        }
    }

    return ( 
       <>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <label>
                User name : <input required type="text" onChange={(e)=>(setLoginData({...loginData,userName:e.target.value}))}/><br />
            </label>
            <p style={{color:'red'}}>{errors}</p>

            <label>
                Password : <input required type="password" onChange={(e)=>(setLoginData({...loginData,password:e.target.value}))}/>
                <br />
            </label>
            <label>
                Confirm Password : <input required type="password" onChange={(e)=>(setLoginData({...loginData,confirmpassword:e.target.value}))}/> <br />
            </label>
            <label><input type="submit" value="Submit" /></label>
        </form>
       </> 
     );
}

export default Login;