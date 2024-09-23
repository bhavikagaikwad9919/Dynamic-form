import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./main";
import HeaderNavBar from "./pages/HeaderNav";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderNavBar/>
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;