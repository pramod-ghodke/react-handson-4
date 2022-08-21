
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/style.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navs from './Components/Navs';
import Student from './Components/Student';





function App() {
  return (
    <div className="App">
   <h1 className='mt-3 mb-3'>React Router</h1>
  
   <BrowserRouter>
    <Navs/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/student' element={<Student/>}/>
    <Route path='/contact' element={<Contact/>}/>

  

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
