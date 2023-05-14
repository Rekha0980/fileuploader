import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Cards from './Components/Card';
import CaseStudy from './Components/Casestusy';
import Blogs from './Components/Blogs';
import Items from './Components/Services';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
     <About/>  
     {/* <Items/>
     <Cards/>   */}
     {/* <CaseStudy/> 
     <Blogs/> */}
    
    </div>
  );
}

export default App;
