import React from 'react'
import {  Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className='footer text-light text-center mt-5'>
          <Container className=''>
          <ul className=' Services    d-lg-flex d-block  justify-content-around text-white mb-5 '>
                          <li><Link to="/" className='nav-link '>{t('Home')}</Link></li>
                          <li><Link  className='nav-link'>{t('Our Services')}</Link></li>
                          <li><Link  className='nav-link'>{t('Support')}</Link></li>
                          <li><Link  className='nav-link'>{t('Terms and Condition')}  </Link></li>
                          <li><Link  className='nav-link'>{t('Contact Us')}</Link></li>
                          <li><Link  className='nav-link'>{t('About Us')}</Link></li>
          </ul>
          <div className='social d-flex justify-content-center mb-3'>
                        <a href='# ' className='nav-link mx-2'><FontAwesomeIcon icon={faFacebookF} /></a>
                        
                        <a href='#' className='nav-link mx-2'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href='#' className='nav-link mx-2'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='#' className='nav-link mx-2'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
           
                    <Link to="/"><img className='logo' src='/images/logo.png'/></Link>
                    <span className='copyright'>
                    <p className=' text-center mt-4'>Copyright ©2022 All rights reserved | This template is made with by <strong>Nasser Bash</strong>
                   <a href='https://nasseribrahim.000webhostapp.com/'> <img className='nasser-bash ms-1' src='/images/NB.png'/></a>
                    </p>
                    </span>

                
            </Container>
            
    </div>
  )
}

export default Footer