import { Outlet } from "react-router";
import Header from "./components/Header";
import { cryptoAPI } from "./services/cryptoService";

function App() {
  return (
    <div className="fixed h-[100vh] overflow-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
