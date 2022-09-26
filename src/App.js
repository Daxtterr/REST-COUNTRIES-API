import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header.js";
import Cards from "../src/components/Cards.js";
import InformationPage from "./components/InformationPage";
import Error from "./components/Error";

function App() {
  return (
    <div className="dark:bg-slate-900 pb-10">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/countries/:name" element={<InformationPage />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
