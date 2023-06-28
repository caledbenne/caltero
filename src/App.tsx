import { BrowserRouter } from 'react-router-dom';
import { AboutComponent, ContactsComponent, ExperiencesComponent, Hero, Navbar } from './components';

function App() {


  return (
    <BrowserRouter basename="/caltero/">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <AboutComponent/>
        <ExperiencesComponent/>
        <ContactsComponent/>
        {/* <Tech/>
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
