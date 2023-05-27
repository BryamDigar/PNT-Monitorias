import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Monitorias } from './pages/Monitorias';
import { Reservas } from './pages/Reservas';
import { Menu } from './pages/Menu';
import { Default } from './pages/Default';
export const MonitoriasApp = () => {

    return (
        <div>
            <h1>Routes</h1>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Menu/>}/>
                <Route path='monitorias' element={<Monitorias/>}/>
                <Route path='Reservas' element={<Reservas/>}/>
                <Route path='*' element={<Default/>}/>
                </Route>
            </Routes>
        </div>
    )

}