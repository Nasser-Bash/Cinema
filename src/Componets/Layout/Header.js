import React ,{useState , useEffect}from 'react'
import {  Container , Navbar  } from 'react-bootstrap'
import Menu from "../widgets/Menu";
import { useDispatch } from "react-redux";
import { searchmovies  , applanguage} from "../../redux/action/MoivesAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import MobileHeader from "./MobileHeader";
function Header({setsearchview}) {
  const { t, i18n } = useTranslation();
  const [activeNav, setactiveNav] = useState(false);
  const [searchBar, setsearchBar] = useState(null);
  const Dispatch = useDispatch();
  const changeNavColor = ()=>{
   if(window.scrollY >=50){
    setactiveNav(true)
   }
    else{
      setactiveNav(false)
    }
  }
  const openSearchBar = (active)=>{
    setsearchBar(active);
 
  }
  const closeSearchBar = (active)=>{
    setsearchBar(active);
    setsearchview(true);
  }
  const search = (word)=>{
    if(word ===""){
      setsearchview(true)
    }else{  
      Dispatch(searchmovies(word));
      setsearchview(false)
  }
}
const changelang =(e)=>{
  i18n.changeLanguage(e.target.value);
  Dispatch(applanguage(e.target.value));
}
  useEffect(() => {
    changeNavColor()
    window.addEventListener("scroll", changeNavColor)
  }, []);
  return (
   <>
    { /* search header*/ 
      searchBar &&  (
        <div  className="search-Header ">
       <Navbar variant="dark">
        <Container className="">
        <TextField
          className='w-75'  
           id="standard-basic"
          label={t("search movies")}
          variant="standard"
          onChange={(e)=>search( e.target.value)} />
        <i onClick={()=>closeSearchBar(false)} className='nav-link ' style={{color: 'white',
        fontSize:'1.3em',cursor:'pointer'}}>
          <FontAwesomeIcon icon={faXmarkCircle}/>
          </i>
        </Container>
        </Navbar>
       </div>
    ) /* end search header*/} 
    {!searchBar && (
      <>
        <div  className={`Header d-lg-block d-none ${activeNav===true ? 'active-navbar' : ''}`}>
        <Navbar variant="dark" >
        <Container fluid className=''>
         <Link to="/"> <Navbar.Brand className=''><img src='/images/logo.png'/></Navbar.Brand></Link>
        <Menu />
        <i style={{cursor:'pointer' }} className='nav-link text-white' onClick={()=>openSearchBar(true)}><FontAwesomeIcon icon={faSearch}/></i>
        <FormControl variant="standard" sx={{  minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{t("Language")}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Language"
          onChange={changelang}
          defaultValue="en"
        >

            <MenuItem  className='text-white' selected value="en" >{t("english")}</MenuItem>
          <MenuItem className='text-white'  value="ar">{t("arabic")}</MenuItem>
        </Select>
      </FormControl>
        </Container>
         </Navbar>    
         
        </div>
        <MobileHeader openSearchBar={openSearchBar} setactiveNav={setactiveNav} activeNav={activeNav}/>
      </>
        )  
        }
     </>
  )
}

export default Header