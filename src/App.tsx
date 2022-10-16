import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./Components/Menu/Menu";
import { Home } from "./Routes/Home/home";
import { Profile } from "./Routes/Profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
