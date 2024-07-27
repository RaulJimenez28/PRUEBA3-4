import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { AguaterosPage, JugadoresPage, SuplentePage } from "../pages"
import { GymPage } from "../../gyms/pages/GymPage"
import { Footer } from "../../ui/components/Footer"


export const JugadoresRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Navigate to= "/titulares"/>} />
        <Route path = "titulares" element = {<JugadoresPage/>}/>
        <Route path = "suplentes" element = {<SuplentePage/>}/>
        <Route path = "aguateros" element = {<AguaterosPage/>}/>
        <Route path = "gyms" element = {<GymPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
