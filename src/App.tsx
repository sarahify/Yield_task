import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <AuthLayout
                children={
                  <Routes>
                    <Route path="/login" element={<SignInPage />} />
                  </Routes>
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
