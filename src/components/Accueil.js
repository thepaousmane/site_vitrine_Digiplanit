
import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react'
import React from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/accueil.css'
// import { NavLink } from "react-router-dom";
import Footer from './Footer.js'
import filiale from './Filiale.js'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img_tech from '../assets/illustration_tech.png'
import logo from '../assets/Logo1.png'
// import Header from './Header'
function Accueil() {
    React.useEffect(() => {
      const c = document.getElementById("canvas_1");
      const ctx = c.getContext("2d");
      ctx.strokeStyle = "rgb(255, 139, 0)";
      ctx.fillStyle = "rgb(255, 139, 0)";
      ctx.lineWidth = 5;
      ctx.moveTo(0, 0);
      ctx.lineTo(220, 493);
      // ctx.lineTo(1200, 1700);
      ctx.stroke();
    });
    //w:225
    //h:414
    React.useEffect(() => {
     const c2 = document.getElementById("canvas_2");
      const ctx2 = c2.getContext("2d");
      ctx2.strokeStyle = "rgb(255, 139, 0)";
      ctx2.fillStyle = "rgb(255, 139, 0)";
      ctx2.lineWidth = 5;
      ctx2.moveTo(225, 0);
      ctx2.lineTo(0, 414);
      // ctx.lineTo(1200, 1700);
      ctx2.stroke();
    });
    React.useEffect(() => {
      const c3 = document.getElementById("canvas_3");
      const ctx3 = c3.getContext("2d");
      ctx3.strokeStyle = "rgb(255, 139, 0)";
      ctx3.fillStyle = "rgb(255, 139, 0)";
      ctx3.lineWidth = 5;
      ctx3.moveTo(40, 0);
      ctx3.lineTo(40, 2060);
      ctx3.stroke();
    });

    React.useEffect(() => {
      const c4 = document.getElementById("canvas_4");
      const ctx4 = c4.getContext("2d");
      ctx4.strokeStyle = "rgb(255, 139, 0)";
      ctx4.fillStyle = "rgb(255, 139, 0)";
      ctx4.lineWidth = 5;
      ctx4.moveTo(0, 35);
      ctx4.lineTo(1250, 35);
      ctx4.stroke();
    });
    // w:800
    // h:30
    React.useEffect(() => {
      const c5 = document.getElementById("canvas_5");
      const ctx5 = c5.getContext("2d");
      ctx5.strokeStyle = "rgb(0, 0, 0)";
      ctx5.fillStyle = "rgb(0, 0, 0)";
      ctx5.lineWidth = 5;
      ctx5.moveTo(0, 15);
      ctx5.lineTo(800, 15);
      ctx5.stroke();
    });

    // w:50
    // h:100

    React.useEffect(() => {
      const c6 = document.getElementById("canvas_6");
      const ctx6 = c6.getContext("2d");
      ctx6.strokeStyle = "rgb(0, 0, 0)";
      ctx6.fillStyle = "rgb(0, 0, 0)";
      ctx6.lineWidth = 5;
      ctx6.moveTo(50, 0);
      ctx6.lineTo(0, 100);
      ctx6.stroke();
    });

    // w:800
    // h:30
    React.useEffect(() => {
      const c7 = document.getElementById("canvas_7");
      const ctx7 = c7.getContext("2d");
      ctx7.strokeStyle = "rgb(255, 139, 0)";
      ctx7.fillStyle = "rgb(255, 139, 0)";
      ctx7.lineWidth = 5;
      ctx7.moveTo(0, 15);
      ctx7.lineTo(800, 15);
      ctx7.stroke();
    });

    // w:50
    // h:100
    React.useEffect(() => {
      const c8 = document.getElementById("canvas_8");
      const ctx8 = c8.getContext("2d");
      ctx8.strokeStyle = "rgb(255, 139, 0)";
      ctx8.fillStyle = "rgb(255, 139, 0)";
      ctx8.lineWidth = 5;
      ctx8.moveTo(50, 0);
      ctx8.lineTo(0, 100);
      ctx8.stroke();
    });

return(
  <div>
    {/* <Header /> */}
    
    <CCarousel controls indicators>
      <CCarouselItem>
      <CImage className="d-block w-100" src={img1} alt="slide 1" width="1440" height="590"/>
        <CCarouselCaption className="d-none d-md-block">
        <div className="description">
          First slide label
          Some representative placeholder content for the first slide.
          <a href={filiale}>voir plus</a>

          {/* <NavLink className="navbar-item"activeClassName="is-active" to="/filiale.js"exact>Home</NavLink> */}
        </div>
        </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage className="d-block w-100" src={img2} alt="slide 2" width="1440" height="590"/>
            <CCarouselCaption className="d-none d-md-block">
            <div className="description">
              Second slide label
              Some representative placeholder content for the first slide.
            </div>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
          <CImage className="d-block w-100" src={img3} alt="slide 3" width="1440" height="590"/>
            <CCarouselCaption className="d-none d-md-block">
            <div className="description">
              Third slide label
              Some representative placeholder content for the first slide.
            </div>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
        
        <h1>Nos filiales</h1>

        <div className="align_tech">
          <div className='text_tech'>
            <h4>I-tech</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus varius libero. Nulla non elementum metus. Nam lacinia id purus vel efficitur. Phasellus eu dui vel mauris interdum imperdiet ut at tortor. Praesent elit elit, maximus nec iaculis quis, sodales at arcu. Duis elementum erat sed tincidunt posuere.</p>
          </div>
          <div className='img_tech'>
            <img src={img_tech} alt="tech" width="640" height="439" />
          </div>
        </div>
  
  
        <div className="align_evenementiel">
            <div className='img_evenementiel'>
              <img src={img_tech} alt="slide 3" width="640" height="439"/>
            </div>
            <div className='text_evenementiel'>
              <h4>Evenementiel</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus varius libero. Nulla non elementum metus. Nam lacinia id purus vel efficitur. Phasellus eu dui vel mauris interdum imperdiet ut at tortor. Praesent elit elit, maximus nec iaculis quis, sodales at arcu. Duis elementum erat sed tincidunt posuere.</p>
            </div>
        </div>  

        <div className="align_immobilier">
            <div className='text_immobilier'>
              <h4>Immobilier</h4>
            </div>
            <div className='img_immobilier'>
              <img src={img_tech} alt="slide 3" width="640" height="439"/>
            </div>
        </div>
        <div className="cl_vision"> 
          <div class="notre_vision"> Notre vision</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus varius libero. Nulla non elementum metus. Nam lacinia id purus vel efficitur. Phasellus eu dui vel mauris interdum imperdiet ut at tortor. Praesent elit elit, maximus nec iaculis quis, sodales at arcu. Duis elementum erat sed tincidunt posuere. Mauris nibh tellus, commodo id blandit efficitur, congue id sem. Duis lacinia nisl sed nisi cursus porta. Etiam a leo venenatis, finibus metus nec, congue est. Nam pharetra metus neque, sed convallis tortor hendrerit vitae. Mauris pharetra tortor purus, vitae dignissim velit consequat eget. Vivamus nec mi ex.</p>
        </div>
        <div className="cl_equipe"> 
          <div class="notre_equipe"> Notre équipe</div>
          {/* <img src={logo} alt="logo" className='cl_logo' width="200" height="100" /> */}
          <div className="cl_profils"> 
            <div className='profil_1 profil'>
              <img src={logo} alt="logo" className='profil' width="200" height="250" />
              <p className='descript_profil_1'> Monsieur Kanfoudy directeur Ressource humaine et coordonateur</p>
            </div>
            <div className='profil_2 profil'>
              <img src={logo} alt="logo" className='cl_logoXXX' width="200" height="250" />
              <p className='descript_profil_1'> Monsieur Thiakane directeur Ressource humaine et coordonateur</p>
            </div>
            <div className='profil_3 profil'>
              <img src={logo} alt="logo" className='cl_logoXXX' width="200" height="250" />
              <p className='descript_profil_1'> Madame Kanfoudy directeur Ressource humaine et coordonateur</p>
            </div>
            <div className='profil_4 profil'>
              <img src={logo} alt="logo" className='cl_logoXXX' width="200" height="250" />
              <p className='descript_profil_4'> Monsieur Kanfoudy directeur Ressource Monsieur Kanfoudy directeur Ressource humaine et coordonateur</p>
            </div>
            <div className='profil_5 profil'>
              <img src={logo} alt="logo" className='cl_logoXXX' width="200" height="250" />
              <p className='descript_profil_1'> Monsieur Kanfoudy directeur Ressource humaine et coordonateur</p>
            </div>           
              <div className='profil_6 profil'>
              <img src={logo} alt="logo" className='cl_logoXXX' width="200" height="250" />
              <p className='descript_profil_1'> Monsieur Kanfoudy directeur Ressource humaine et coordonateur</p>    
            </div>
          </div>
        </div>
        <div className='cl_canvas_vert'>
              <canvas
                id="canvas_1"
                className="canvas_1"
                width="220"
                height="493"
              >
            </canvas>
            </div>
            <div className='cl_canvas_vert'>
            <canvas
                id="canvas_2"
                className="canvas_2"
                width="225"
                height="414"
              >
            </canvas>
            </div>
            <div className='cl_canvas_vert'>
            <canvas
              id="canvas_3"
              className="canvas_3"
              width="80"
              height="2060"
            >
              </canvas> 
            </div>
            <div className='cl_canvas_hori'>
            <canvas
              id="canvas_4"
              className="canvas_4"
              width=" 1250"
              height="70"
            >
            </canvas>
          </div>
          <div className='cl_canvas_hori'>
            <canvas
              id="canvas_5"
              className="canvas_5"
              width="800"
              height="30"
            >
            </canvas>
          </div>
          <div className='cl_canvas_vert'>
              <canvas
                id="canvas_6"
                className="canvas_6"
                width="50"
                height="100"
              >
            </canvas>
          </div>
          <div className='cl_canvas_vert'>
              <canvas
                id="canvas_7"
                className="canvas_7"
                width="800"
                height="30"
              >
            </canvas>
            </div>
            <div className='cl_canvas_vert'>
              <canvas
                id="canvas_8"
                className="canvas_8"
                width="50"
                height="100"
              >
            </canvas>
          </div>
        <Footer />
    </div>
  )

  }

  export default Accueil