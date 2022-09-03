import {Routes,Route} from 'react-router-dom'
import MainPage1 from './page1/MainPage1'
import MainPage2 from './page2/MainPage2'
import MainPage3 from './page3/MainPage3'


const Main = ()=>{
   
    return <div>
    <Routes>
     <Route path="/minimo_1"  element={<MainPage1 /> } />
    <Route path="/minimo_2"  element={<MainPage2 />} />
   
    <Route path="/minimo_3" element={<MainPage3 />} />
     <Route path="/"  element={<MainPage1 /> } />
    </Routes>
    </div>
   
  
   
}
export default Main