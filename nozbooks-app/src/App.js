import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth, AlreadyAuth } from "./context/RequireAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./global";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
