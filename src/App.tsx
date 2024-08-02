import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./page/Auth/Login/Login";
import Register from "./page/Auth/Register/Register";
import { ToastContainer } from "react-toastify";
import { PublicRoute } from "./router/route";
import { Layout } from "./page";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {PublicRoute.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path="/Register" element={<Register /> } /> */}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
