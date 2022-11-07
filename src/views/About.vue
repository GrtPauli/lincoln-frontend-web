<template>
<div>
  <div class="about-header">
    <div class="about-header-overlay">
        <h1>ABOUT US</h1>
        <div class="line mb-4"></div>
        <p class="fs-3">Get to know us better</p>
    </div>
</div> 

<AboutSectionTwo/>
<AboutSectionThree/>
<AboutSectionFour/>
<AboutSectionFive/>
<AboutFinalSection/>
</div>
</template>

<script>
import AboutSectionTwo from '../components/AboutSectionTwo.vue'
import AboutSectionThree from '../components/AboutSectionThree.vue'
import AboutSectionFour from '../components/AboutSectionFour.vue'
import AboutSectionFive from '../components/AboutSectionFive.vue'
import HomeFinalSection from '../components/HomeFinalSection.vue'
import AboutFinalSection from '../components/AboutFinalSection.vue'

export default 
{   
    components:{
        AboutFinalSection, AboutSectionTwo, AboutSectionThree, AboutSectionFour, AboutSectionFive, HomeFinalSection
    }
}
</script>

<style>

.about-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/abt-us.webp);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.about-header-overlay
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
.about-header-overlay .line
{
    width: 10%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}

@media (max-width: 991px) {
    .about-header
    {
        height: 50vh;
    }
}
@media (max-width: 767px) 
{
    .about-header
    {
        height: 40vh;
    }

}
</style>