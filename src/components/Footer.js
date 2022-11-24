import logo from '../assets/Logo1.png'
import '../styles/footer.css'
function Footer(){
    return(
        <div>
            <footer>
        <div class="cl_logo_footer">
          <img src={logo} alt="logo" className='cl_logo_footeXXXr' width="230" height="250" />
        </div>
        <div className="cl_dtl_footer">
          <div className="navigation">
          <h6>Navigation</h6>
            <p>Accueil</p>
            <p>Nos filiales</p>
            <p>Nous contacter</p>
            <p>Qui sommes-nous</p>
          </div>
          <div className="Réseaux sociaux">
            <h6>Réseaux sociaux</h6>
            <img src={logo} alt="logo" className='profil' width="50" height="50" />
            <img src={logo} alt="logo" className='profil' width="50" height="50" />
            <img src={logo} alt="logo" className='profil' width="50" height="50" />
          </div>
          <div className="Politique de confidentialité">
            <h6>Politique de confidentialité</h6>
          </div>
        </div>
        <div className="formulaire">
          <h4>Inscrivez-vous à notre mailing list</h4>
          <form class="row g-1">
            <div class="col-md-3">
              <label for="Nom" class="form-label">Nom</label>
              <input required type="text" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-3">
              <label for="Prénom" class="form-label">Prénom</label>
              <input required type="text" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-8">
              <label for="inputEmail4" class="form-label">Email</label>
              <input required type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </form> 
          </div>
      </footer>

        </div>
    )
}

export default Footer;