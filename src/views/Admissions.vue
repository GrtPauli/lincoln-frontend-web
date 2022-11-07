<template>
  <div>
    <div class="ad-header mb-5">
    <div class="ad-header-overlay">
        <h1>ADMISSIONS</h1>
        <div class="line mb-4"></div>
        <p class="fs-3">Apply to LCMST</p>
    </div>
</div> 

    <div class="container-fluid apply py-5">
        <h2 class="">HOW TO APPLY</h2>
        <div class="line mb-4"></div>
        <p class="fs-4 mb-4"> All students must fill up an Application Form available at the Admission Office or can apply Online</p>
        <button class="btn btn-primary btn-lg rounded-pill px-4 text-white">Apply Now</button>
    </div>

    <AdmissionsFinalSection/>
  </div>
</template>

<script>
import AdmissionsFinalSection from '../components/AdmissionsFinalSection.vue'

export default 
{
    components:{
        AdmissionsFinalSection
    }
}
</script>

<style>
.ad-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/grad-student-celebrating-diploma-up-in-sun.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.ad-header-overlay
{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
}
.ad-header-overlay .line
{
    width: 10%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.apply
{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.apply .line
{
    width: 13%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.apply button
{
    padding-top: 12px;
    font-family: "Raleway-Light";
    padding-bottom: 12px;
}
</style>