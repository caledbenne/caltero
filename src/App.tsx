import { BrowserRouter } from 'react-router-dom';
import { AboutComponent, Hero, Navbar } from './components';

function App() {


  return (
    <BrowserRouter basename="/caltero/">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <AboutComponent/>
        {/* <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
