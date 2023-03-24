import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import {  applanguage} from "../../redux/action/MoivesAction";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
function MobileMenu({handelMenu , isactive}) {
  const { t, i18n } = useTranslation();
  const Dispatch = useDispatch();
  const changelang =(e)=>{
    i18n.changeLanguage(e.target.value);
    Dispatch(applanguage(e.target.value));
  }
  return (
    <div className={`mobile-menu ${isactive===true ?'active' : 'fuck u '}`} >
        <div className='d-flex justify-content-between p-3'>
        <Link to="/"> <Navbar.Brand className=''><img src='/images/logo.png'/></Navbar.Brand></Link>
            <FontAwesomeIcon onClick={()=>handelMenu(false)} className='close' icon={faXmark}/>
        </div>
            <div className='menu p-2'>
            <ul className='list-unstyled  rounded '>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/ar" className='nav-link p-3'>{t('Arabic Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/en" className='nav-link p-3'>{t('English Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/ja" className='nav-link p-3'>{t('Japanese Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/tr" className='nav-link p-3'>{t('Turkey Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/hi" className='nav-link p-3'>{t('Hindi Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/ko" className='nav-link p-3'>{t('Korean Movies')}</Link></li>
                <li className='' onClick={()=>handelMenu(false)}> <Link to="/movie/type/es" className='nav-link p-3'>{t('Spanish Movies')}</Link></li>
            </ul>
            <FormControl variant="standard" className='w-100 p-3  rounded' sx={{  minWidth: 120 }}>
      <InputLabel className='p-3'  id="demo-simple-select-standard-label">{t("Language")}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Language"
        onChange={changelang}
      >
          <MenuItem className='text-white' value="en" selected>{t("english")}</MenuItem>
        <MenuItem className='text-white' value="ar">{t("arabic")}</MenuItem>
      </Select>
           </FormControl>
            </div>
    </div>
  )
}

export default MobileMenu