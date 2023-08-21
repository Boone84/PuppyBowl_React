import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';
import AddPlayer from './components/AddPlayer.jsx';
import HomePage from './components/HomePage.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/players' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/add-player' element={<AddPlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

