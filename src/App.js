
import './App.css'
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header"
import Services from "./Components/Services/Services";
import About from "./Components/About/About"

import MyProtfolio from "./Components/MyProtfolio/MyProtfolio"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience"

function App() {


  return (
    <div className="App" >
<Header/>
<Nav/>
<About/>
<Experience/>
<Services/>
<MyProtfolio/>
<Contact/> 
<Footer/>
    </div>
  );
}

export default App;
