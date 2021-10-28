import Navbar from '../elements/Navbar/Navbar';
import Jumbotron from '../elements/Jumbotron/Jumbotron';
import Busanimation from '../elements/BusAnime/Busanimation';
import Upcoming from '../elements/UpcomingEvents/Upcoming';
import About from '../elements/AboutSection/About';
import Footer from '../elements/footer/Footer';

function HomePage() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Busanimation/>
      <Upcoming/>
      <About/>
      <Footer/>
    </div>
  );
}

export default HomePage;
