import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
