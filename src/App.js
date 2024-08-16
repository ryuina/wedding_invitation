import './App.css';
import Title from "./components/title";
import Greeting from "./components/greeting";
import Photos from "./components/gallery";
import Location from "./components/location";
import Share from "./components/share";
import Song from "./assets/song.mp3";
import CongratulatoryMoney from "./components/congratulatoryMoney";
import Acknowledge from "./components/acknowledge";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <audio autoPlay loop>
          <source src={Song} />
        </audio>
        <Title />
        <Greeting />
        <Photos />
        <Location />
        <CongratulatoryMoney />
        <Acknowledge />
        <Share />
      </header>
    </div>
  );
}

export default App;
