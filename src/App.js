import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner, Contact, Footer, NavBar, Projects, Skills } from './components';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
