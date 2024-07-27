import {Route,Routes} from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import { JugadoresRoutes } from '../jugadores/routes/JugadoresRoutes'


export const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path = "/*" element = {<JugadoresRoutes/>}/> 
        <Route path = "login" element = {<LoginPage/>}/>
      </Routes>

    </>
  )
}

