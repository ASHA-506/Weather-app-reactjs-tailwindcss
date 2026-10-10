import { Route, Routes } from "react-router-dom"
import Weather from "./pages/Weather"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Weather/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
