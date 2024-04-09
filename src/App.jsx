import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/quicksurfaces" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
