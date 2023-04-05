import Home from "./Home"
import About from "./About"
import  Contact from "./Contact"
import Services from "./Services"
import {BrowserRouter , Routes ,Route} from "react-router-dom" 
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import Error from "./Error"
import GoToTop from "./Component/GoToTop"

const App = () => {
  const theme = {
    colors: {
      heading: "rgh(24 24 29)",
      text: "rgh(24 24 29)",
      white: "#fff",
      black: "212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;*",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {smallmobile:"490px",small_mobile:"534px", mobile:"768px" , tab:"998px"},  
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
      <Footer />
      </BrowserRouter>
   
    </ThemeProvider>
  )
}

export default App
