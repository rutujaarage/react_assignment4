
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Student from './component/Student';
import Img from './component/Img';


function App() {
  return (
    
      <BrowserRouter>
             
     
        <Home />
       
        <Routes>
         <Route path='/' element={<Img/>} />
          <Route path='/student' element={<Student/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      
        </BrowserRouter>
    
  );
}

export default App;
