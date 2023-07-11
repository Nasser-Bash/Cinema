import React from 'react'
import { Container } from 'react-bootstrap'

function HeroSection2({img,title,content}) {
  return (
    <div className='hero-section mb-4'>
                <img src={`/images/${img}`}/>
                <div className='hero-contnet '>
                <Container>
                        <h1>{title}</h1> 
                        <p>{content}</p>
                </Container>
    </div>
  </div>
  )
}

export default HeroSection2