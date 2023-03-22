import React,{ useState , useEffect } from "react";
import { Form , Container, Row, Button , Dropdown , Col } from 'react-bootstrap'
import { useSelector ,useDispatch} from "react-redux";
import {getgenres,filtering} from "../../redux/action/MoivesAction";
import { useTranslation } from 'react-i18next';
import { isDisabled } from "@testing-library/user-event/dist/utils";
function Filter({searchview,moviesType,setdatainput,datainput}) {
    const { t, i18n } = useTranslation();
    const [genres, setgenres] = useState([]);
    const [genreids, setgenreids] = useState([]);
    const [currentYear, setcurrentYear] = useState(0);
    const [startYear, setstartYear] = useState(1900);
    const [slectedYear, setslectedYear] = useState('');
    const [filterData, setfilterData] = useState([]);
    const [isDisabled, setisDisabled] = useState();
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
        const filteringByRate = (e)=>{  
        if(e.target.value ==='filterByRate'){
         const rating =  moviedata.sort((a, b)=> {
          return parseFloat(a.vote_average) - parseFloat(b.vote_average);
         
         })
        
        }
      }
      let years = [];
      for (let i =currentYear ; i >= startYear; i--) {
        years.push(i);
    }
    useEffect(() => {
        setgenres(ALLgenreslist);
      }, [ALLgenreslist]);
    useEffect(() => {
        setcurrentYear(new Date().getFullYear());
        Dispatch(getgenres(applang));
      }, [applang]);
      useEffect(() => {
        setfilterData(datainput);
       
        console.log(isDisabled);
      }, [datainput]);
  return (
    <>
    <div className='filter p-3  mb-5 '>
        <Form className='w-50' onSubmit={handelfilter}>
        <h4 className=" my-auto mb-3 px-1 text-white">{t("Filter")} : </h4>
          <Row>
      <Col><Dropdown className=" mb-2">
      <Dropdown.Toggle variant=""  id="dropdown-basic">
      {t("Select Year")}
    </Dropdown.Toggle>
      <Dropdown.Menu className="p-3 ">
        <Row style={{width:'400px'}} className="p-2  ">
       
        {years.map((year)=>{
                return(
                  <Col md={4}>
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
      </Dropdown></Col>


      <Col> <Dropdown className=" mb-2">
      <Dropdown.Toggle variant=""  id="dropdown-basic">
      {t("select genres")}
    </Dropdown.Toggle>
      <Dropdown.Menu className="p-3  ">
        <Row style={{width:'400px'}} className="p-2  ">
        {genres.map((genre)=>{
                return(
                  <Col md={4}>
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
      </Dropdown></Col>

      <Col> 
      <Dropdown className=" mb-2">
      <Dropdown.Toggle variant=""  id="dropdown-basic">
      {t("Select rating")}
    </Dropdown.Toggle>
      <Dropdown.Menu className="p-3 ">
                <Form.Check
                        name="rating"
                        onChange={filteringByRate}
                        value='filterByRate'
                        type="radio"
                        label='filterByRate'
                      />
                      
      </Dropdown.Menu>
      </Dropdown>
      </Col>
      <Col><Button disabled={isDisabled} type="submit" className={ ` ${applang ==='ar' ? '' : 'ms-auto'}`} variant="">{t("filter")}</Button></Col>
      </Row>
        </Form>
    </div>
    </>
    
  )
}

export default Filter