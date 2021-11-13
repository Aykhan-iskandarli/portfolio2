import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import profile from "../../image/profil/prof.jpg";

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="sidebar_section">
      <div className={open? "sidebar mobSidebar":"sidebar"}>
        <nav>
          <div className="profil">
            <div className="profil_img">
              <img src={profile} alt="" />
            </div>
          </div>
          <ul className="menuList">
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={()=>{setOpen(false)}}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={()=>{setOpen(false)}}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolios" activeClassName="active" onClick={()=>{setOpen(false)}}>
                Portfolios
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="active" onClick={()=>{setOpen(false)}}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={()=>{setOpen(false)}}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={open ? "hamburger open":"hamburger"} onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Sidebar;
