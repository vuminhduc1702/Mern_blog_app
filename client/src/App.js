import "./App.css";
import HomePage from "./pages/HomePage";
import EditingBlogPage from "./pages/EditingBlogPage";
import NewBlogPage from "./pages/NewBlogPage";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<EditingBlogPage />} />
        <Route path="/new" element={<NewBlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
