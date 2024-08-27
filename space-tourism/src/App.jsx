import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main.layout";
import { Home, Destination, Crew, Technology } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
