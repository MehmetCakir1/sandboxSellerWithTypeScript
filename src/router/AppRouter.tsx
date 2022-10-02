import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Details from "../pages/Details"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Services from "../pages/Services"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter