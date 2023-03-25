import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import {  applanguage} from "../../redux/action/MoivesAction";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useSelector } from "react-redux";
function MobileMenu({ isactive,closehandelclick}) {
  const applang = useSelector((state)=>state.languages.lang);
  const { t, i18n } = useTranslation();
  const Dispatch = useDispatch();
  const changelang =(e)=>{
    i18n.changeLanguage(e.target.value);
    Dispatch(applanguage(e.target.value));
  }
  return (
    <div className={`mobile-menu p-1 ${isactive===true ?'active' : ' '}`} >

       <Link to="/"> <Navbar.Brand className={`py-2 px-4 ${applang ==="ar" ? "float-start" : "float-end"}`}><img src='/images/logo.png'/></Navbar.Brand></Link>
       
            <div className='menu my-5 p-3'>
            <ul className='list-unstyled rounded '>
                <li className='' > <Link to="/movie/type/ar" onClick={closehandelclick} className='nav-link p-3'>{t('Arabic Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/en" onClick={closehandelclick} className='nav-link p-3'>{t('English Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/ja" onClick={closehandelclick} className='nav-link p-3'>{t('Japanese Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/tr" onClick={closehandelclick} className='nav-link p-3'>{t('Turkey Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/hi" onClick={closehandelclick} className='nav-link p-3'>{t('Hindi Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/ko" onClick={closehandelclick} className='nav-link p-3'>{t('Korean Movies')}</Link></li>
                <li className='' > <Link to="/movie/type/es" onClick={closehandelclick} className='nav-link p-3'>{t('Spanish Movies')}</Link></li>
            </ul>
            <FormControl variant="standard" className='language w-100 p-3  rounded' sx={{  minWidth: 120 }}>
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