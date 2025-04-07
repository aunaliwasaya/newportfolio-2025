import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";
import CodeupSolutions from "../pages/CodeupSolutions";



export default function SiteRoutes() {
  return (

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

{/* <Route path="/projects" element={<Projects />} /> */}
<Route path="/Certificates" element={<Products />} />
<Route path="/codeup" element={<CodeupSolutions />} />
<Route path="*" element={<PageNotFound />} />
</Routes>



  );
}
