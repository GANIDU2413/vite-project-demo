import axios from "axios";
import { useState } from "react";
import { createBlogPost} from "./pages/api";
import NavBar from "./components/NavBar";
//import Profile from "./components/Profile"
//import MyForm from "./components/MyForm";
//import Login from "./components/Login";
//import {BrowserRouter, Routes, Route } from  "react-router-dom";
//import Home from "./pages/Home";
//import About from "./pages/about";
//import Contact from "./pages/Contact";
//import NotFound from "./pages/NotFound";


function App() {

  //map with ternery operator
// const data_arr = [
//   {
//     userName:"user1",
//     city:"city1",
//     mail:"1@mail.com",
//     isActive:true
// },
// {
//   userName:"user2",
//   city:"city2",
//   mail:"2@mail.com",
//   isActive:false
// },
// {
//   userName:"user3",
//   city:"city3",
//   mail:"3@mail.com",
//   isActive:true
// }];

//   return (
//     <>
//       {data_arr.map((user)=>(
//         <Profile
//           userName={user.userName}
//           city={user.city}
//           mail={user.mail}
//           isActive={user.isActive}
//         ></Profile>
//       ))

//       }
//     </>
//   )


// react route 
  // return(
  //   <>
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home></Home>}></Route>
  //       <Route path="/about" element={<About></About>}></Route>
  //       <Route path="/contact" element={<Contact></Contact>}></Route>
  //       <Route path="*" element={<NotFound></NotFound>}></Route>
  //     </Routes>
  //     </BrowserRouter>
  //   </>
  // )

  // const [data,setData] = useState("");
  // const [error,setError] = useState("");
  

  // useEffect(() => {
    // async function getBlogPost() {
    //   const _res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    //   setData(_res.data);
    //   console.log(_res.data);
    // }

    //getBlogPost();

  //   async function getData(){

  //     try {
  //       const _res = await getBlogPost();
  //       setData(_res.data);
  //       console.log(_res.data);
  //     } catch (error) {
  //       setError(error.message);
  //         console.log(error.message);
  //     }
      
  //   }
  //   getData();
  // }, [])
  
  
  // return(
  //   <>
  //     <h1>{data.title}</h1>
  //     <h2>{error}</h2>
  //     <p>{data.body}</p>
  //   </>
  // )
  // const [success,setSuccess] = useState("");
  // const [error,setError] = useState("");
  // const [loading,setLoading] = useState(false);

  // async function handleCreatePost() {
  //   try {
  //       setLoading(true);
  //       const _res=await createBlogPost();
  //       setLoading(false);
  //       setSuccess("successfully created!");
  //       console.log(_res);
      
  //   } catch (error) {
  //       setError(error.message);
  //       console.log(error.message);
  //   }
  // }
  // return(
  //   <>
  //     <h1>Create Blog Post</h1>
  //     <p style={{color:'red'}}>{error}</p>
  //     <p style={{color:'green'}}>{loading?"Loading...":success}</p>
  //     <button onClick={handleCreatePost}>Create Post</button>
  //   </>
  // );

  // x


}

export default App;
