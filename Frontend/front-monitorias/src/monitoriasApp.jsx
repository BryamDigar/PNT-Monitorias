import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Monitores } from './pages/Monitores';
import { Reservas } from './pages/Reservas';
import { Inicio } from './pages/Inicio';
import { Default } from './pages/Default';
import { Monitorias } from './pages/Monitorias';
import { InfoMonitor } from './pages/InfoMonitor';
export const MonitoriasApp = () => {

    return (
        <div>
            <h1>Routes</h1>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Inicio/>}/>
                <Route path='monitores' element={<Monitores/>}/>
                <Route path='Reservas' element={<Reservas/>}/>
                <Route path='Monitorias' element={<Monitorias/>}/>
                <Route path='InfoMonitor' element={<InfoMonitor/>}/>
                <Route path='*' element={<Default/>}/>
                </Route>
            </Routes>
        </div>
    )

}