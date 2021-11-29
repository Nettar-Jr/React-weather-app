import './App.css';
import background from './BG.jpg';
import WeatherForm from './components/WeatherForm.jsx';
import 'weather-icons/css/weather-icons.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <WeatherForm />
    </div>
  );
}

export default App;
