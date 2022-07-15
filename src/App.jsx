import { Routes, Route } from "react-router-dom";
import { LogIn, Register, Dashboard } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
