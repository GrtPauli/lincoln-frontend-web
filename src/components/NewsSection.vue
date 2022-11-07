<template>
<div>
    <div class="news-section pt-5 pb-4">
    <div class="sectionHead text-center">
        <h2>LATEST NEWS</h2>
        <div class="line mb-4"></div>
        <p class="fs-5 mb-4 px-3">What’s new ?. Stay up to date with the latest news,  research  and projects at LCMST</p>
    </div>
    <div class="row align-items-center justify-content-center g-0">
    <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/construct.png" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>

   <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/quality.png" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>

    <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/row-of-young-adults-at-work.jpg" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>

        <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/rustic-old-book-open-at-centre.jpg" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>

   <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/motto-pic.png" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>

    <div class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img src="../assets/why.webp" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">Lorem ipsum dolor sit amet.</h2>
        <p class="dateInfo">October 20, 2022 @ 4:25 pm</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>
    </div>
</div>

<!-- <div class="row align-items-center justify-content-center g-0 mt-5 mb-5">
<div class="col-11 col-lg-4 col-xl-5 p-3 colQOne me-lg-4 mb-lg-0 mb-5">
   <div class="colQOne-Text">
    <h3 class="text-white ">Undergraduate</h3>
   </div>

   <div class="btns ms-3">
    <button class="btn-1 me-3">Learn More</button>
    <button class="btn-2">Find Your Course</button>
   </div>
</div>

<div class="col-11 col-lg-4 col-xl-5 p-3 colQTwo">
   <div class="colQTwo-Text">
    <h3 class="text-white ">Postgraduate</h3>
   </div>

   <div class="btns ms-3">
    <button class="btn-1 me-3">Learn More</button>
    <button class="btn-2">Find Your Course</button>
   </div>
</div>
</div> -->

</div>
</template>

<script>
export default 
{

}
</script>

<style>
.colQTwo
{
    background-color: black;
    display: flex;
    justify-content: center;
}
.colQTwo-Text
{
    height: 20px;
}
.colQTwo .btns
{
    display: flex;
}
.colQTwo .btns button
{
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: white;
    font-family: "Raleway-Light";
}
.colQTwo .btns .btn-1
{
    background-color: rgba(255, 255, 255, 0.4);
}
.colQTwo .btns .btn-2
{
    background-color: red;
}


.colQOne
{
    background-color: red;
    display: flex;
    justify-content: center;
}
.colQOne-Text
{
    height: 20px;
}
.colQOne .btns
{
    display: flex;
}
.colQOne .btns button
{
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: white;
    font-family: "Raleway-Light";
}
.colQOne .btns .btn-1
{
    background-color: rgba(255, 255, 255, 0.4);
}
.colQOne .btns .btn-2
{
    background-color: black;
}
.moreBtn
{
    color: red;
    text-decoration: none;
}
.moreBtn i
{
    font-size: 15px;
}
.sectionHead .line
{
    width: 15%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>