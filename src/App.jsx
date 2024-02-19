import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Navbar from "./component/Navbar"
import HomePage from "./page/HomePage"
import MenuPage from "./page/MenuPage"
import Footer from "./component/Footer"
import ContactPage from "./page/ContactPage"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/menu" element={<MenuPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
