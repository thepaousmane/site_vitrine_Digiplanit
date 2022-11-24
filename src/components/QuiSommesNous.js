import Footer from './Footer'
import '../styles/quiSommesNous.css'
import img_tech from '../assets/illustration_tech.png'
import img_appel from '../assets/appel.png'
import img_localisation from '../assets/localisation.png'
import img_message from '../assets/message.png'



function QuiSommesNous(){
    return(
        <div>
            <div className='cl_quiSommesNous'>
            <div className="quiSommesNous">
                <h1>DIGIPLANIT - Qui sommes-nous</h1>
            </div> 
            <div className="cl_notre_histoire">
                <div className='notre_histoire'>
                  <h3>notre histoire</h3>
                  <p>Aenean pellentesque tristique lacus. Etiam ultrices scelerisque neque quis placerat. Phasellus sed facilisis nibh. Praesent placerat molestie libero, eget tincidunt mauris elementum quis. Duis at consequat libero, sit amet eleifend velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae dolor quis nunc porta sodales vitae et massa. Quisque augue lorem, tristique ut ex nec, porta sodales quam.</p>
                </div>
                <div className="img_ntr_histr">
                     <img src={img_tech} alt="slide 3" width="640" height="439"/>
                </div>
            </div>
                <h1>Nos Filiales</h1>
            <div className='nosFiliales'>
                <div className='itech filiale'>
                    <h3 className='ST_itech soustitre'>I-tech</h3>
                    <p className='P_VP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lacus ipsum, eu ultricies eros volutpat id. Fusce malesuada felis purus, suscipit imperdiet nulla faucibus nec.</p>
                    <button className='VP_filiale' type="submit">Voir plus</button>
                </div>
                <div className='evenementiel filiale'>
                    <h3 className='ST_evens soustitre'>Evènementiel</h3>
                    <p className='P_VP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lacus ipsum, eu ultricies eros volutpat id. Fusce malesuada felis purus, suscipit imperdiet nulla faucibus nec.</p>
                    <button className='VP_filiale' type="submit">Voir plus</button>
                </div>
                <div className='immobilier filiale'>
                    <h3 className='ST_immo soustitre'>Immobilier</h3>
                    <p className='P_VP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lacus ipsum, eu ultricies eros volutpat id. Fusce malesuada felis purus, suscipit imperdiet nulla faucibus nec.</p>
                    <button className='VP_filiale' type="submit">Voir plus</button>
                </div>
            </div>
            <div className='Nous_contacter'>
                <h3>Comment-nous contacter ?</h3>
                <p>Lorem ipsum dolor sit amet, rem ipsum dolor sit amet, rem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor lacus ipsum, eu ultricies eros volutpat id. Fusce malesuada felis purus, suscipit imperdiet nulla faucibus nec.</p>
                <div className='infoContact'>
                    <div className='infoplus messagerie'>
                        <img src={img_message} alt='message' width='20' height='20' /> digiplanit@gmail.com
                    </div>
                    <div className='infoplus tel'>
                        <img src={img_appel} alt='message' width='20' height='20' /> +221 33 888 88 88 
                    </div>
                    <div className='infoplus localisation'>
                        <img src={img_localisation} alt='localisation' width='20' height='20' /> Localisation
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default QuiSommesNous;