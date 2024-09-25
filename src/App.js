import './App.css';
import Title from "./components/title";
import Greeting from "./components/greeting";
import Photos from "./components/gallery";
import Location from "./components/location";
import Share from "./components/share";
import Song from "./assets/steal-the-show-inst.mp3";
import CongratulatoryMoney from "./components/congratulatoryMoney";
import Acknowledge from "./components/acknowledge";
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <audio autoPlay loop>
          <source src={Song} />
        </audio> */}
        <Title />
        <Greeting />
        <Introduction />
        <Photos />
        <Location />
        <CongratulatoryMoney />
        <Share />
      </header>
    </div>
  );
}

export default App;
