<template>
  <div>
    <div class="research-header">
        <div class="research-header-overlay">
            <h1>RESEARCH</h1>
            <div class="line mb-4"></div>
            <p class="fs-3">Research and Development</p>
        </div>
    </div> 

    <ResearchSectionTwo/>
  </div>
</template>

<script>
import ResearchSectionTwo from '../components/ResearchSectionTwo.vue'
import ResearchSectionThree from '../components/ResearchSectionThree.vue'

export default {
    components:{
        ResearchSectionTwo,ResearchSectionThree
    }

}
</script>

<style>
.research-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/research.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.research-header-overlay
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
.research-header-overlay .line
{
    width: 10%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>