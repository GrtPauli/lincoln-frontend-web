<template>
    <div>
<div class="pr-header mb-5">
    <div class="pr-header-overlay">
        <h1>PROGRAMMES</h1>
        <div class="line mb-4"></div>
        <p class="fs-3">Checkout our programmes</p>
    </div>
</div> 

<ProgrammesSectionTwo/>
<AboutSectionFive/>
<ProgrammesSectionThree/>
  </div>
</template>

<script>
import ProgrammesSectionTwo from '../components/ProgrammesSectionTwo.vue'
import ProgrammesSectionThree from '../components/ProgrammesSectionThree.vue'
import AboutSectionFive from '../components/AboutSectionFive.vue'

export default 
{
    components:{
        ProgrammesSectionTwo, ProgrammesSectionThree, AboutSectionFive
    }
}
</script>

<style>
.pr-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/laptop-on-desk-from-above.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.pr-header-overlay
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
.pr-header-overlay .line
{
    width: 13%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>