import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
   return (
      <div>
         <div class="header_section">
            <div class="container-fluid">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="index.html"><img src="images/logo.png" /></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ml-auto aa">

                        <li id='p'>
                           <a href=""><Link to={"/"}></Link></a>                      
                            </li>


                        <li id='a'>
                           <a href=""><Link to={"/about"}>ABOUT</Link></a>
                        </li>


                        <li id='b'>
                           <Link to={"/coffee"}>COFFEE</Link>
                        </li>



                        <li id='c'>
                           <Link to={"/blog"}>BLOG</Link>
                        </li>


                        <li id='d'>
                           <Link to={"/contact"}>CONTACT</Link>
                        </li>

                     </ul>

                     <form class="form-inline my-2 my-lg-0">
                        <div class="login_bt">
                           <ul>
                              <li><a href="#"><span class="user_icon"><i class="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                              <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                     </form>
                  </div>
               </nav>
            </div>

         </div>

      </div>


   )
}
