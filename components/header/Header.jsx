import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

 import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import logo from "../../src/assets/movix-logo.svg"


 


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
     window.scrollTo(0,0)
    }, [location])
    

  const controlNavbar = () =>{
       
       if(window.scrollY > 240){
        if(window.scrollY > lastScrollY && !mobileMenu){
          setShow("hide")
        }else{
          setShow("show");
        }
       
       }else{
        setShow("top");
       }
       setLastScrollY(window.scrollY)
  };
  useEffect(() => {
           window.addEventListener("scroll", controlNavbar)
           return () =>{
            window.removeEventListener("scroll", controlNavbar)
           }
  }, [lastScrollY])
  



    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
        setShowSearch(false)
      }
      // setTimeout(() => {
      //   setShowSearch(false)
      // }, 1000);
    };

    

    const openSearch = () =>{
      setMobileMenu(false)
      setShowSearch(true)
    }

    const openMobileMenu = () =>{
      setMobileMenu(true)
      setShowSearch(false)
    }


    const navigationHandler = (type) =>{
         if(type === "movie"){
            navigate("explore/movie")
         }else{
          navigate("explore/tv")
         }
         setMobileMenu(false)
    }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}> 
          <ContentWrapper>
            <div className="logo" onClick={ () =>  navigate("/")}>
              <img src={logo} alt="" />
            </div>
            <ul className="menuItems">
              <li className="menu-item" onClick={ () => navigationHandler("movie")}>Movies</li>
              <li className="menu-item" onClick={ () => navigationHandler("tv")}>TV Showes</li>
              <li className="menu-item  mobile-last-li">
                <HiOutlineSearch  onClick={openSearch}/>
              </li>
            </ul>
            <div className="mobileMenuItems">
              <HiOutlineSearch  onClick={openSearch}/>
              {mobileMenu ? <VscChromeClose   onClick={()=>    setMobileMenu(false) }/> : <SlMenu  onClick={openMobileMenu}/>}
            </div>
          </ContentWrapper>
         { showSearch && <div className="searchBar">
          <div className="searchInput">
              <input
                type="text"
                placeholder="Search for Movies or TV showes..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={searchQueryHandler}
              />
              <VscChromeClose   onClick={()=>    setShowSearch(false) }/>
            </div>
          </div>}
        </header>
    );
};

export default Header;