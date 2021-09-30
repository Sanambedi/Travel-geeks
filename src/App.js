import './App.css';
import Navbar from './elements/Navbar/Navbar';
import Jumbotron from './elements/Jumbotron/Jumbotron';
import Busanimation from './elements/BusAnime/Busanimation';
import Upcoming from './elements/UpcomingEvents/Upcoming';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Busanimation/>
      <Upcoming/>
    </div>
  );
}

export default App;
