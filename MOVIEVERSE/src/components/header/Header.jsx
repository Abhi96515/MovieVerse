import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/Moviex-images/movix-logo.svg";


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
       window.scrollTo(0,0)
    },[location])
 
    const controlNavbar = ()=>{
          if(window.scrollY >200){
           
            if(window.scrollY > lastScrollY && !mobileMenu){
              setShow('hide')
            }else{
              setShow('show')
            }
          }else{
            setShow('top')
          }
          setLastScrollY(window.scrollY)
        }
    useEffect(()=> {
      window.addEventListener("scroll",controlNavbar )
      return ()=>{
        window.removeEventListener("scroll",controlNavbar )
      }
    },[lastScrollY])

    const seachQuerySelector=(event)=>{
      if(event.key==='Enter'& query.length>0){
        navigate(`/search/${query}`)
      }
    }

    const openSearch=()=>{
      setMobileMenu(false)
      setShowSearch(true)
    }
    const openMobileMenu=()=>{
      setMobileMenu(true) 
      setShowSearch(false)
    }

    const nevigationHandler=(type)=>{
        if(type==="movie"){
          navigate("/explore/movie")
        }else{
          navigate("/explore/tv")
        }
        setMobileMenu(false)
    }
    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
         <ContentWrapper>
         <div className="logo">
            <img src={logo} alt="" onClick={()=>navigate("/")} />
          </div>
          <ul className="menuItems">
            <li className="menuItem"onClick={()=>nevigationHandler("movie")} >Movie</li>
            <li className="menuItem"onClick={()=>nevigationHandler("tv")} >TV shows</li>
            <li className="menuItem">
              <HiOutlineSearch  onClick={openSearch}/>
            </li>
          </ul>

          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu? (
               <VscChromeClose onClick={()=>setMobileMenu(false)}/>
            ) : ( 
               <SlMenu onClick={openMobileMenu}/>
            ) }
          </div>
          </ContentWrapper>
          {showSearch && (
            <div className="searchBar">
              <ContentWrapper>
              <div className="searchInput">
                  <input type="text" 
                        placeholder='Search for a tv show or movie....'
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyUp={seachQuerySelector}
                  />
                  <VscChromeClose onClick={()=> setShowSearch(false)}/>
             
          </div>
              </ContentWrapper>
            </div>
          )}
          
        
        </header>
    );
};

export default Header;