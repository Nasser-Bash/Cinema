import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
function Menu() {
  const { t, i18n } = useTranslation();
  return (
  
    <Nav className=" text-white">
     <Link to="/movie/type/ar" className='nav-link'>{t('Arabic Movies')}</Link>
     <Link to="/movie/type/en" className='nav-link'>{t('English Movies')}</Link>
     <Link to="/movie/type/ja" className='nav-link'>{t('Japanese Movies')}</Link>
     <Link to="/movie/type/ko" className='nav-link'>{t('Korean Movies')}</Link>
     <Link to="/movie/type/hi" className='nav-link'>{t('Hindi Movies')}</Link>
     <Link to="/movie/type/es" className='nav-link'>{t('Spanish Movies')}</Link>
     <Link to="/movie/type/tr" className='nav-link'>{t('Turkey Movies')}</Link>
    </Nav>
  
  )
}
export default Menu