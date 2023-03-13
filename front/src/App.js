import "./styles/main.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Menu } from "./pages/Menu";
import { Acc } from "./pages/Acc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/acc" element={<Acc />} />
    </Routes>
  );
}

export default App;
