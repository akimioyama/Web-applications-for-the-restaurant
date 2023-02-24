import './styles/main.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main'
import { Menu } from './pages/Menu'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/menu' element={<Menu />}/>
    </Routes>
  );
}

export default App;
