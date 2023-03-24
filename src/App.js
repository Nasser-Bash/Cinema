
import React , {createContext,useState,useEffect} from 'react'
import AllRouters from "./Componets/AllRouters";
import { HashRouter } from "react-router-dom";
import Header from "./Componets/Layout/Header";
import Footer from "./Componets/Layout/Footer";
import { useTranslation } from 'react-i18next';
import "./Componets/API";
import SearchComponet from "./Componets/widgets/searchComponet";
import ScrollToTop from "./Componets/widgets/ScrollToTop";
import Fade from 'react-reveal/Fade';
export  const SearchContext = createContext();
function App() {
  const [searchview, setsearchview] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);
  return isLoading ? (
    <div className='loader'>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        </div>
    ):( <Fade> <div className="App">
      <SearchContext.Provider value={searchview}>
      <HashRouter>
        <ScrollToTop/>
       {!searchview && (
         <SearchComponet/>
       )}
        <Header searchview={searchview} setsearchview={setsearchview} />

            <AllRouters searchview={searchview} setsearchview={setsearchview}/>
            <Footer/>
       </HashRouter>  
      </SearchContext.Provider>
      
    </div>
    </Fade>
  );
}

export default App;
