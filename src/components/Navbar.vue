<template>
      <!--Navbar-->
    <nav class="navbar navbar-expand-lg shadow-lg px-3 px-md-5">
        <div class="container-fluid">         
           <a class="navbar-brand">
            <img src="../assets/logo.png" class="">
           </a>

           <!--Toggle button for mobile nav-->
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
           aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
           
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav ps-3 pt-2 pb-2">
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  me-2" to="/about-us">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/admissions">Admissions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/students">Students</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2" to="/programmes">Programme</router-link>
          </li>
         <li class="nav-item">
            <router-link class="nav-link me-2" to="/research">Research</router-link>
          </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/collaboration">Collaboration</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/career">Career</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/enquiry">Enquiry</router-link>
          </li>
        </ul>
      </div>
        </div>
    </nav>
</template>

<script>
export default 
{

}
</script>

<style>
.navbar-brand img
{
    width: 120px;
    height: 50px;
}
</style>