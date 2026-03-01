import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
import Home from "./pages/Home";
import WatchVideo from "./pages/WebVideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/watch/:videoId" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
