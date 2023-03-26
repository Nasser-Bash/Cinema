import React,{ useState , useEffect } from "react";
import { Form , Container, Row, Button , Dropdown , Col } from 'react-bootstrap'
import { useSelector ,useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {getgenres,filtering} from "../../redux/action/MoivesAction";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark ,faFilter } from "@fortawesome/free-solid-svg-icons";
function Filter({moviesType,setdatainput,datainput}) {
    const { t, i18n } = useTranslation();
    const [genres, setgenres] = useState([]);
    const [genreids, setgenreids] = useState([]);
    const [currentYear, setcurrentYear] = useState(0);
    const [startYear, setstartYear] = useState(1900);
    const [slectedYear, setslectedYear] = useState('');
    const [filterData, setfilterData] = useState([]);
    const [isDisabled, setisDisabled] = useState();
    const [position, setposition] = useState();
    const [isactive, setisactive] = useState();
    const mobileFilter = (active)=>{
      setisactive(active);
    }
    const Dispatch = useDispatch();
    const ALLgenreslist = useSelector((state)=>state.geners.generslist);
    const applang = useSelector((state)=>state.languages.lang);
    const moviedata = useSelector((state)=>state.movies.movies);
       const checkHandler = (e) => {
        if(e.target.checked){
          setgenreids([...genreids,parseInt(e.target.value)]);
         
      }else{
        const filter = genreids.filter((genreid) => genreid != e.target.value);
        setgenreids(filter);
      }
      
     
      }
       const handelfilter = async(e,page)=>{
        e.preventDefault();
        Dispatch(filtering(applang,slectedYear,genreids.map((id)=>id),page,moviesType));
        setdatainput({ year:slectedYear, id : genreids.map((id)=>id)})
        
      }
       
      let years = [];
      for (let i =currentYear ; i >= startYear; i--) {
        years.push(i);
    }
 

  useEffect(() => {
    window.onscroll= function () {
      const section = document.querySelector('.mobile-filtirng');
      if ( window.scrollY > section.offsetTop-300  ) {
        setposition(true)
      } 
      else{
        setposition(false)
      }
     
    }
  }, []);
    useEffect(() => {
        setgenres(ALLgenreslist);
      }, [ALLgenreslist]);
    useEffect(() => {
        setcurrentYear(new Date().getFullYear());
        Dispatch(getgenres(applang));
      }, [applang]);
      useEffect(() => {
        setfilterData(datainput);
       
      }, [datainput]);
  return (
    <>
    <div  className='filter d-sm-block d-none p-3  mb-5 '>
        <Form className=' d-flex ' onSubmit={handelfilter}>
          <h4 className=" my-auto mb-3 px-1 text-white">{t("Filter")} : </h4>
      <Dropdown className=" mb-2 me-2 ms-2">
      <Dropdown.Toggle variant=""  id="dropdown-basic">
      {t("Select Year")}
    </Dropdown.Toggle>
      <Dropdown.Menu className="p-3 ">
        <Row style={{width:'400px'}} className="p-2  ">
       
        {years.map((year)=>{
                return(
                  <Col md={4} key={year}>
                <Form.Check
                        name="year"
                        onChange={(e)=>setslectedYear(e.target.value)}
                        value={year}
                        type="radio"
                        label={year}

                      />
              </Col>
              )})
            }
        
        </Row>

      </Dropdown.Menu>
      </Dropdown>


       <Dropdown className=" mb-2">
      <Dropdown.Toggle variant=""  id="dropdown-basic">
      {t("select genres")}
    </Dropdown.Toggle>
      <Dropdown.Menu className="p-3  ">
        <Row style={{width:'400px'}} className="p-2  ">
        {genres.map((genre)=>{
                return(
                  <Col md={4} key={genre.id}>
                <Form.Check
                        name="genersid"
                        onChange={checkHandler}
                        value={genre.id} 
                        type="checkbox"
                        id={genre.id}
                        label={genre.name}

                      />
                </Col> 
              )})
            }
        
        </Row>

      </Dropdown.Menu>
      </Dropdown>

     
     <Button disabled={isDisabled} type="submit" className={ ` ${applang ==='ar' ? 'me-auto' : 'ms-auto'}`} variant="">{t("filter")}</Button>
     
        </Form>
    </div>
            

    <div  className="d-sm-none  d-block mobile-filtirng text-white ">     
    <FontAwesomeIcon className={`open-mobile-filter p-3 ${position===true ? 'd-block' : 'd-none'}`} onClick={()=>mobileFilter(true)}  icon={faFilter}/>
    <div className={`mobile-filter d-sm-none  d-block ${isactive === true ? "active" :""}`} >
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
        <h6> {t("Select Year")}:</h6>
        <Slider
  aria-label="years"
  defaultValue={2023}
  valueLabelDisplay="auto"
 
  name="year"
  onChange={(e)=>setslectedYear(e.target.value)}
  step={1}
  marks
  min={1900}
  max={2023}
/>

        </Form>
    </div>
     </div>  
    </>
    
  )
}

export default Filter