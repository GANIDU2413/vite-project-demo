import axios from "axios";
import { useState } from "react";
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


//react route 
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

  async function getBlogPost() {
    const [datas,SetDatas] = useState("");
    const _res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(_res.data);
  }


  getBlogPost();
  return(
    <>
      <h1>axios</h1>
    </>
  )
}

export default App