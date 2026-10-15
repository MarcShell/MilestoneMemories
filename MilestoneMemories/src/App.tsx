import Map, { NavigationControl } from 'react-map-gl/maplibre';
import Navbar from './components/Navbar';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

const apiKey = import.meta.env.VITE_MAPTILER_KEY;

function App() {
	return (
		<div className="App">
			<Navbar />
			<Map
				initialViewState={{
					longitude: 16.62662018,
					latitude: 49.2125578,
					zoom: 14,
				}}
				style={{ width: '100%', height: 'calc(100vh - 77px)' }}
				mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
			>
				<NavigationControl position="top-left" />
			</Map>
		</div>
	);
}

export default App;
