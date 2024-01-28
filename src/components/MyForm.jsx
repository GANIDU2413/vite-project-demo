import { useState } from "react";

function MyForm() {


    // form ekatama eka state ekk use krnw 
    const [formData,setFormData] = useState({
        userName:"",
        userBirthDate:"",
        age:"",
        email:"",
    })

//01 eka input field ekata eka state eka gane 
    //const [userName,setUserName]=useState("");
    //const [userBirthDate,setUserBirthDate]=useState("");

    const handleChangeName=(e)=>{
        setFormData({...formData,userName : e.target.value }); //object destructuring 
        
    }

    const handleChangeBirthDate=(e)=>{
        setFormData({...formData,userBirthDate : e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        //01 eka input field ekata eka state eka gane 
        //console.log('name : '+userName);
        //console.log('birthday : '+userBirthDate);


        //02 object ekak use krddi 
        console.log(formData);
    }
    return ( 
        <>
            <h1>MyForm</h1>
            <form onSubmit={handleSubmit}>
                <label >Name: <input type="text" onChange={handleChangeName}/></label>
                <label >Birthday: <input type="date" onChange={handleChangeBirthDate}/></label><br />
                <label >Age : <input type="number" /></label>
                <label >E-mail : <input type="email" /></label>
                <br />
                <label ><input type="submit" value="submit" /></label>
            </form>
        </>
     );
}

export default MyForm;