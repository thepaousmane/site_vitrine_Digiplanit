import '../styles/header.css'
import logo from '../assets/Logo.png'
function Header(){
    return(
        <div className="cl_header"> 
            <div className="logo">
                <img src={logo} className="logo" width="230" height="80" alt="logo"/>
            </div>
            <div className="contain_header_D">
                <div className="Acceuil">Acceuil</div>
                <div className="Nos_filiales">Nos filiales</div>
                <div className="Qui_sommes_nous">Qui sommes-nous</div>
                <div className="contactez_nous">contactez-nous</div>
            </div>
        </div>
        
    )
}
export default Header