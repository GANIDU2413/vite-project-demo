// import { Link } from "react-router-dom";
import "../pages/navBar.css";

function NavBar() {
    return ( 
        <>
            {/* <div className="" style={{display:"flex"}}>
                <p style={{margin:'20px'}}><Link to={"/"}>Home</Link></p>
                <p style={{margin:'20px'}}><Link to={"/about"}>About</Link></p>
                <p style={{margin:'20px'}}><Link to={"/contact"}>Contact</Link></p>
            </div> */}

            <p className="p1">hello world</p>
            <div className="navBarLeft">
                <span className="logo">
                    facebook
                </span>
                <p className="logo">hi</p>
            </div>
            
        </>
     );
}

export default NavBar;

