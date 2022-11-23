import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>

        <Route path="/login" element={ <Login /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
