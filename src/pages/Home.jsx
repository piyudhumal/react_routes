import React from 'react'
import { Header } from './Header'

export const Home = () => {
  return (
    <div>
        <Header/>
        <div class="banner_section layout_padding">
            <div class="container">
               <div id="banner_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">coffee</h1>
                                 <h5 class="tasty_text">Tasty Of DozeCafe</h5>
                                 <p class="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                                 <div class="btn_main">
                                    <div class="about_bt"><a href="#">About Us</a></div>
                                    <div class="callnow_bt active"><a href="#">Call Now</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">coffee</h1>
                                 <h5 class="tasty_text">Tasty Of DozeCafe</h5>
                                 <p class="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                                 <div class="btn_main">
                                    <div class="about_bt"><a href="#">About Us</a></div>
                                    <div class="callnow_bt active"><a href="#">Call Now</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_img"><img src="images/banner-img.png"/></div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">coffee</h1>
                                 <h5 class="tasty_text">Tasty Of DozeCafe</h5>
                                 <p class="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                                 <div class="btn_main">
                                    <div class="about_bt"><a href="#">About Us</a></div>
                                    <div class="callnow_bt active"><a href="#">Call Now</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i class="fa fa-arrow-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i class="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>
        </div>
  )
}