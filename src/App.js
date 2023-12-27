
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Faq from './Faq';

function App() {
  return (
    <div className="bg-black bg-opacity-80 bg-cover bg-[url('./hero2.jpg')] bg-blend-darken ">
      
        <Navbar/>
        <Hero/>
        <Faq/>
        <Footer/>
        
      
    </div>
  );
}

export default App;
