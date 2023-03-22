import React from "react";
import { Form , Row, Button , Dropdown , Col } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Mobilefilter({genres,handelfilter,checkHandler,years,setslectedYear,isactive,mobileFilter}) {
  const { t, i18n } = useTranslation();
  const applang = useSelector((state)=>state.languages.lang);
  return (
    <div className={`mobile-filter d-md-none  d-block ${isactive === true ? "active" :""}`} >
       <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>mobileFilter(false)} className='close p-3' icon={faXmark}/>
            <Form className='  p-2 px-3' onSubmit={handelfilter}>
          <div className="d-flex mb-4">
          <h4 className=" my-auto text-white">{t("Filter")} : </h4>
        <Button type="submit" className={ `my-auto ${applang ==='ar' ? 'me-auto' : 'ms-auto'}`} variant="">{t("filter")}</Button>
          </div>
        <div className="filter-by-genres">
            <h6> {t("Select genres")}:</h6>
            <ul className="list-unstyled">
            <Row  className="p-2">
        {genres.map((genre)=>{
                return(
                  <Col xs={6}>
                       <li className="">
                <Form.Check
                        name="genersid"
                        onChange={checkHandler}
                        value={genre.id} 
                        type="checkbox"
                        id={genre.id}
                        label={genre.name}
                      />
                      </li>
                </Col> 
              )})
            }
              </Row>
            </ul>
        </div>
       
        <div className="filter-by-years">
            <h6> {t("Select Year")}:</h6>
            <ul className="list-unstyled">
            <Row  className="p-2">
        {years.map((year)=>{
                return(
                  <Col xs={4}>
                       <li className="">
                <Form.Check
                        name="year"
                        onChange={(e)=>setslectedYear(e.target.value)}
                        value={year}
                        type="radio"
                        label={year}
                      />
                      </li>
                </Col> 
              )})
            }
              </Row>
            </ul>
        </div>
        </Form>
    </div>
  )
}

export default Mobilefilter