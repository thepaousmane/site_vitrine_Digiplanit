import '../styles/accueil.css'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
function Accueil(){
return(
  <div>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={img1} alt="slide 1"/>
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={img2} alt="slide 2"/>
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={img3} alt="slide 3"/>
        </CCarouselItem>
      </CCarousel>
  </div>
)

//   var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("custom-slider");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
//     return(
//         <div>
//             <div class="slide-container">
//                 <div class="custom-slider fade">
//                     <div class="slide-index">1 / 3</div>
//                     <img class="slide-img" src={img1} width="230" height="80" alt="image_x"/>
//                     <div class="slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//                 </div>
//                 <div class="custom-slider fade">
//                     <div class="slide-index">2 / 3</div>
//                     <img class="slide-img" src={img2} width="230" height="80" alt="image_x" />
//                     <div class="slide-text">Nullam luctus aliquam ornare. </div>
//                 </div>
//                 <div class="custom-slider fade">
//                     <div class="slide-index">3 / 3</div>
//                     <img class="slide-img" src={img3} width="230" height="80" alt="image_x" />
//                     <div class="slide-text">Praesent lobortis libero sed egestas suscipit.</div>
//                 </div>
//                 <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//                 <a class="next" onclick="plusSlides(1)">&#10095;</a>
//             </div>
//             <br/>
//             <div class="slide-dot">
//                 <span class="dot" onclick="currentSlide(1)"></span> 
//                 <span class="dot" onclick="currentSlide(2)"></span> 
//                 <span class="dot" onclick="currentSlide(3)"></span> 
//             </div>
//          </div>
//     )
}

export default Accueil