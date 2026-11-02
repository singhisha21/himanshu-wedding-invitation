import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingInvitation from "@/pages/WeddingInvitation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeddingInvitation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
