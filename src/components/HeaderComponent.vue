<template>

<!-- Start Header Area -->
  <header class="header_area sticky-header">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light main_box">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <!-- <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a> -->
          <h6><b>Book Store</b></h6>
         <!--  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <!-- <ul class="nav navbar-nav menu_nav ml-auto">
              <router-link to="/cart">Cart | </router-link>
              <li class="nav-item"><router-link to="/"> Home</router-link>
              </li>
            </ul> -->
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
              <li class="nav-item">
                <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- End Header Area -->
</template>