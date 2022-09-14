import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth, AlreadyAuth } from "./context/RequireAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./global";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AlreadyAuth>
                <Login />
              </AlreadyAuth>
            }
          />
          <Route
            path="/home"
            exact
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
