
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Filiale from './components/Filiale'
import Accueil from './components/Accueil'
import ContactezNous from './components/ContactezNous'
import QuiSommesNous from './components/QuiSommesNous'
import './styles/header.css'
import logo from './assets/Logo1.png'

function App() {
  return (
  <div>
      <div className="cl_header"> 
      <div className="logo">
          <img src={logo} className="logo" width="230" height="80" alt="logo"/>
      </div>
			<BrowserRouter>
				<div className="contain_header_D">
					<div className='Acceuil'>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div className='Nos_filiales'>
						<NavLink to="/Filiale" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Nos filiales
						</NavLink>
					</div>
					<div className='Qui_sommes_nous'>
						<NavLink to="/QuiSommesNous" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Qui sommes nous ?
						</NavLink>
					</div>
					<div className='Contactez_nous'>
						<NavLink to="/ContactezNous" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contactez-nous
						</NavLink>
					</div>
				</div>
                <Routes>
					<Route exact path="/" element={<Accueil />} />
					<Route exact path="/QuiSommesNous" element={<QuiSommesNous />} />
					<Route exact path="/Filiale" element={<Filiale />} />
					<Route exact path="/ContactezNous" element={<ContactezNous />} />
				</Routes>
			</BrowserRouter>
    
        </div>
  
  
    {/* <Header />
    <Accueil />
    <QuiSommesNous/> */}
  </div>
  );
}

export default App;
