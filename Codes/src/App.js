import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Category from "./pages/Category";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Start from "./pages/Start";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/category-3":
        title = "";
        metaDescription = "";
        break;
      case "/category-2":
        title = "";
        metaDescription = "";
        break;
      case "/category-1":
        title = "";
        metaDescription = "";
        break;
      case "/start":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/category-3" element={<Category1 />} />
      <Route path="/category-2" element={<Category2 />} />
      <Route path="/category-1" element={<Category3 />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  );
}
export default App;
