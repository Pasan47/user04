import './App.css';
import Contact from './components/contact';
import Footer from './components/Footer';
import ContextProvider from './context/AppContext';


function App() {
  return (
   <>
  <ContextProvider>
      <Contact/>
      <Footer/>
   

  </ContextProvider>
 
 
   </>
   
  );
}

export default App;
