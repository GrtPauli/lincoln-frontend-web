<template>
  <div class="home">
    <HomeIntro/>
    <HomeSectionTwo/>
    <HomeSectionThree/>
    <Features/>
    <HomeSectionSix/>
    <HomeInfoSection/>
    <HomeFinalSection/>
  </div>
</template>

<script>
import HomeIntro from '../components/HomeIntro.vue'
import HomeSectionTwo from '../components/HomeSectionTwo.vue'
import HomeSectionThree from '../components/HomeSectionThree.vue'
import NewsSection  from '../components/NewsSection.vue'
import ActivitiesSection from '../components/ActivitiesSection.vue'
import HomeFinalSection from '../components/HomeFinalSection.vue'
import Features from '../components/Features.vue'
import HomeSectionSix from '../components/HomeSectionSix.vue'
import HomeInfoSection from '../components/HomeInfoSection.vue'

export default 
{
  name: 'Home',
  components: 
  {
    HomeIntro, HomeSectionTwo, HomeSectionThree, HomeSectionSix, HomeInfoSection, Features, NewsSection, ActivitiesSection, HomeFinalSection
  }
}
</script>
