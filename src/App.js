import logo from './logo.svg';
import './App.css';
function App() {
  return (
<div>
      <nav className="fixed top-0 left-0 w-full bg-p-800 text-white">
        <ul className="flex justify-around mt-5 items-start mx-25 p-4">
        <li className= ""><a href  ="#G.N InSTitute"> </a></li> 
          <li className= "hover:text-black"><a href  ="#home"> Home</a></li>
         <li className="hover:text-black"><a href="#about">About</a></li>
          <li className="hover:text-black"><a href="#services">Services</a></li>
          <li className="hover:text-black"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id ="home" className="h-screen flex items-center justify-center bg-yellow-700  text-white">
    
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-green-500 text-white">
        About
      </section>
      <section id="services" className="h-screen flex items-center justify-center bg-red-500 text-white">
        Services
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-purple-500 text-white">
        Courses
      </section>
    </div>
  );
}

export default App;
