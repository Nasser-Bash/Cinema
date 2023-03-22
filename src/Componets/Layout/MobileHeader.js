import React ,{useState , useEffect}from 'react'
import {  Container , Form, Navbar ,FloatingLabel } from 'react-bootstrap'
import MobileMenu from "../widgets/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
function MobileHeader({activeNav,openSearchBar}) {
  const { t, i18n } = useTranslation();
  const [isactive, setisactive] = useState();
  const handelMenu = (active)=>{
    setisactive(active);
  }
  return (
    <>
      <div  className={`Header d-lg-none d-block ${activeNav===true ? 'active-navbar' : ''}`}>
      <Navbar variant="dark" >
      <Container fluid>
      <div className=' p-2  mobile-menu-button'onClick={()=>handelMenu(true)}>
        <span className='mobile-menu-buttom-1'></span>
        <span className='mobile-menu-buttom-2'></span>
        <span className='mobile-menu-buttom-3'></span>
      </div>
       <Link to="/"> <Navbar.Brand className=''><img src='/images/logo.png'/></Navbar.Brand></Link>
    <i onClick={()=>openSearchBar(true)} style={{cursor:'pointer' }} className='nav-link text-white' ><FontAwesomeIcon icon={faSearch}/></i>
      </Container>
       </Navbar>    
       <MobileMenu  isactive={isactive} handelMenu={handelMenu}/>
      </div>
   </>
  )
}

export default MobileHeader