import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">LOGO</a>
 

  <div class=" navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item lock">
        <a class="nav-link " href="#"><i style={{color:"white"}} class="fa-solid fa-lock "></i>
</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-white" href="#"><span style={{color:"white"}} class="navbar-toggler-icon"></span></a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}
