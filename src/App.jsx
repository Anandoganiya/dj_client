import { Routes, Route } from "react-router-dom";
import { LogIn, Register } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>dashboard</div>}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;