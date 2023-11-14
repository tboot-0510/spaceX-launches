import { Routes, Route } from "react-router-dom";
import LaunchesPage from "./pages/LaunchesPage";
import LaunchDetailsPage from "./pages/LauchDetails/LaunchDetailsPage";
import Page404 from "./pages/404Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LaunchesPage />} />
      <Route path="/launch/:id" element={<LaunchDetailsPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
