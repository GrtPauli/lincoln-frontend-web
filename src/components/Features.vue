<template>
<div class="mb-5">
  <div class="news-section pt-5">
    <div class="sectionHead text-center">
        <h2>OUR FEATURES</h2>
        <div class="line mb-4"></div>
        <p class="fs-5 mb-4">Dive into our top-notch features at LCMST</p>
    </div>
  </div>

<div class="features-row-holder px-3">
 <div class="row align-items-center justify-content-center g-0 featuresRow">
    <div class="col-10 col-lg-4 col-xl-3 me-lg-5 me-md-4 mb-5" style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/library-books.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Library</p>
            </div>
        </div>
    </div>
      <div class="col-10 col-lg-4 col-xl-3 me-xl-5 mb-5" style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/sports.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Sports</p>
            </div>
        </div>
    </div>
      <div class="col-10 col-lg-4 col-xl-3 me-lg-5 me-md-4 me-xl-0 mb-5" style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/lab.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Laboratory</p>
            </div>
        </div>
    </div>

        <div class="col-10 col-lg-4 col-xl-3 me-xl-5 mb-5"  style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/serious-african-american-student-working-research.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Classroom</p>
            </div>
        </div>
    </div>
      <div class="col-10 col-lg-4 col-xl-3 me-lg-5 mb-5 me-md-4"  style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/entreprenuership.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Business & Entreprenuership</p>
            </div>
        </div>
    </div>
      <div class="col-10 col-lg-4 col-xl-3 mb-5"   style="width: 23rem;">
        <div class="background-img" role="button">
            <img src="../assets/research.jpg" class="img-fluid" alt="" srcset="">
            <div class="bg-overlay">
                <p class="text-white fs-4">Research</p>
            </div>
        </div>
    </div>
 </div>
</div>

  
</div>
</template>

<script>
export default {

}
</script>

<style>
.features-row-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.background-img img {
  transition: transform 1.5s, filter 1.5s ease-in-out;
  transform-origin: center center;
  filter: brightness(50%);
  border-radius: 10px;
  height: 100%;
  width: 500px;
}

/* The Transformation */
.background-img:hover img {
  filter: brightness(100%);
  transform: scale(1.3);
  border-radius: 10px;
}
.background-img
{
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}
.bg-overlay
{
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.news-section .sectionHead
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>