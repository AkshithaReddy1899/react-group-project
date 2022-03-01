import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MissionsPage from './components/missions/MissionsPage';
import ProfilePage from './components/ProfilePage';
import RocketsPage from './components/rockets/RocketsPage';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<RocketsPage />} />
      <Route path="/mission" element={<MissionsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </div>
);

export default App;
