import React ,{useState , useEffect}from 'react'
import {  Container , Form, Navbar ,FloatingLabel } from 'react-bootstrap'
import MobileMenu from "../widgets/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
function MobileHeader({activeNav,openSearchBar,setactiveNav}) {
  const { t, i18n } = useTranslation();
  const [isactive, setisactive] = useState();
  const openhandelclick = ()=>{
    setisactive(!isactive)
    setactiveNav(true)
  }

  return (
    <>
      <div  className={`Header d-lg-none d-block ${activeNav===true ? 'active-navbar' : ''}`}>
      <Navbar variant="dark" >
      <Container fluid>
    
      <div className='   mobile-menu-button'>
      <Hamburger color="#ffff" size={30} toggled={isactive} toggle={openhandelclick} />
      
    </div>
       <Link to="/"> <Navbar.Brand className=''><img src='/images/logo.png'/></Navbar.Brand></Link>
    <i onClick={()=>openSearchBar(true)} style={{cursor:'pointer' }} className='nav-link text-white' ><FontAwesomeIcon icon={faSearch}/></i>
      </Container>
       </Navbar>    
       <MobileMenu  isactive={isactive} />
      </div>
   </>
  )
}

export default MobileHeader