import React from 'react'
import { Header } from './Header'

export const About = () => {
  return (
    <div>
        <Header/>
        
      <div class="client_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
               <h1 class="about_taital">About Our shop</h1>
                  <div class="bulit_icon"><img src="images/bulit-icon.png"/></div>
               </div>
            </div>
            <div class="client_section_2">
               <div class="client_taital_main">
                  <div class="client_left">
                     <div class="client_img"><img src="images/client-img1.png"/></div>
                  </div>
                  <div class="client_right">
                     <h3 class="moark_text">Joy Moark</h3>
                     <p class="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
               <div class="client_taital_main">
                  <div class="client_left">
                     <div class="client_img"><img src="images/client-img2.png"/></div>
                  </div>
                  <div class="client_right">
                     <h3 class="moark_text">Mihacal</h3>
                     <p class="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
               <div class="client_taital_main">
                  <div class="client_left">
                     <div class="client_img"><img src="images/client-img3.png"/></div>
                  </div>
                  <div class="client_right">
                     <h3 class="moark_text">Uliya den</h3>
                     <p class="client_text">now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text, </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
    </div>
    
  )
}
