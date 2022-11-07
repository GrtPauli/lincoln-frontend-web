<template>
  <div class="home-section-two pt-5">
        <div class="container-lg mt-5">
        <div class="section-header">
            <h2 class="text-center">WHY CHOOSE US?</h2>
            <div class="line mb-4"></div>
            <p class="fs-4"></p>
        </div>
        </div>

    <div class="row-holder">
            <div class="row my-4 align-items-center justify-content-center c-over g-0">
                <div class="col-10 col-lg-4 col-xl-4 col-md-4">
                    <div class="card border-0">
                        <div class="card-body">
                    <div class="c-us-background-img">
                        <img src="../assets/guy.png" class="img-fluid">
                        <div class="c-us-overlay  pt-3">
                            <h2 class="text-white main-title">LIFE PROGRAMS</h2>
                            <p class="text-white sub-title">Study with us and gain dual certificate <br>from Lincoln Nigeria and Malaysia.</p>
                        </div>
                    </div>                    
                    </div>
                    </div>
                </div>

                <div class="col-10 col-lg-4 col-xl-4 sec-col col-md-4 ms-lg-0 me-lg-0">
                    <div class="card border-0">
                    <div class="card-body">
                    <div class="c-us-background-img">
                        <img src="../assets/girl.png" class="img-fluid">
                        <div class="c-us-overlay pt-3">
                            <h2 class="text-white main-title">CERTIFICATE</h2>
                            <p class="text-white sub-title">We focus on quality education with <br> 80%  practical in all our programs.</p>
                        </div>
                    </div>                  
                    </div>
                    </div>
                </div>

                
            <div class="col-10 col-lg-4 col-xl-4 col-md-4">
                <div class="card border-0">
                <div class="card-body ">
                    <div class="c-us-background-img">
                        <img src="../assets/guy2.png" class="img-fluid">
                        <div class="c-us-overlay  pt-3">
                            <h2 class="text-white main-title">SCOLARSHIP</h2>
                            <p class="text-white sub-title">Study with us and grab the opportunity <br> for 25%  to 100% scholarship.</p>
                        </div>
                    </div>              
                    </div>
                </div>
            </div>
            </div>
    </div>


<!-- <div class=" mt-5">
        <div class="section-header">
            <h2 class="text-center">WHY CHOOSE US?</h2>
            <div class="line"></div>
        </div>
 <div class="row align-items-center justify-content-center mt-5">
    <div class="col-10 col-lg-4 mb-5">
        <div class="c-us-background-img">
            <img src="../assets/girl.png" class="img-fluid">
            <div class="c-us-overlay pt-3">
                <h2 class="text-white main-title">CERTIFICATE</h2>
                <p class="text-white sub-title">We focus on quality education with <br> 80%  practical in all our programs.</p>
            </div>
        </div>
    </div>

        <div class="col-10 sec-col col-lg-4 mb-5">
        <div class="c-us-background-img">
            <img src="../assets/guy.png" class="img-fluid">
            <div class="c-us-overlay  pt-3">
                <h2 class="text-white main-title">LIFE PROGRAMS</h2>
                <p class="text-white sub-title">Study with us and gain dual certificate <br>from Lincoln Nigeria and Malaysia.</p>
            </div>
        </div>
    </div>

        <div class="col-10 col-lg-4 mb-5">
        <div class="c-us-background-img">
            <img src="../assets/guy2.png" class="img-fluid">
            <div class="c-us-overlay  pt-3">
                <h2 class="text-white main-title">SCOLARSHIP</h2>
                <p class="text-white sub-title">Study with us and grab the opportunity <br> for 25%  to 100% scholarship.</p>
            </div>
        </div>
    </div>
 </div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.c-over
{
    overflow: hidden;
}
.home-section-two
{
    overflow: hidden;
}
.c-us-background-img
{
    position: relative;
    overflow: hidden;
}
.c-us-background-img img
{
    border-radius: 50px;
}
.c-us-overlay
{
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    bottom: 0;
    padding-left: 10px;
    border-radius: 0px 20px 20px 0px;
    margin-bottom: 50px;
    width: 95%;
    height: 25%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.c-us-overlay h2
{
    font-size: 18px;
}
.c-us-overlay p
{
    font-size: 16px;
} 
.sec-col
{
    transform: translateY(10%);
}
.section-header
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.section-header .line
{
    width: 18%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.row-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.row-holder .row
{
    width: 80%;
    padding-bottom: 50px;
    height: 100%;
}
@media (max-width: 1300px) {
    .c-us-overlay h2
    {
        font-size: 20px;
    }
    .c-us-overlay p
    {
        font-size: 17px;
    }
}
@media (max-width: 1230px) {
    .c-us-overlay h2
    {
        font-size: 20px;
    }
    .c-us-overlay p
    {
        font-size: 16px;
    }
}
@media (max-width: 1170px) {
    .c-us-overlay h2
    {
        font-size: 20px;
    }
    .c-us-overlay p
    {
        font-size: 15px;
    }
}

@media (max-width: 1110px) {
    .c-us-overlay
    {
        padding-left: 8px;
    }
}
@media (max-width: 1080px) {
    .c-us-overlay h2
    {
        font-size: 18px;
    }
    .c-us-overlay p
    {
        font-size: 14px;
    }
    .c-us-overlay
    {
        padding-left: 8px;
    }
}
@media (max-width: 1030px) {
    .c-us-overlay h2
    {
        font-size: 18px;
    }
    .c-us-overlay p
    {
        font-size: 13px;
    }
    .c-us-overlay
    {
        padding-left: 8px;
    }
}
@media (max-width: 950px) {
    .c-us-overlay h2
    {
        font-size: 18px;
    }
    .c-us-overlay p
    {
        font-size: 11px;
    }
    .c-us-overlay
    {
        padding-left: 8px;
    }
}
@media (max-width: 830px) {
    .c-us-overlay h2
    {
        font-size: 14px;
    }
    .c-us-overlay p
    {
        font-size: 10px;
    }
    .c-us-overlay
    {
        padding-left: 8px;
    }
}

@media (max-width: 767px)
{
    .sec-col
    {
        transform: translateY(0%);
    }
}
@media (max-width: 767px) and (min-width: 680px) {
.row-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.row-holder .row
{
    width: 65%;
}
.c-us-overlay h2
{
    font-size: 20px;
}
.c-us-overlay p
{
    font-size: 16px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}
@media (max-width: 679px) and (min-width: 600px) {

.c-us-overlay h2
{
    font-size: 20px;
}
.c-us-overlay p
{
    font-size: 14px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}
@media (max-width: 599px) and (min-width: 540px) {
.c-us-overlay h2
{
    font-size: 20px;
}
.c-us-overlay p
{
    font-size: 13px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}
@media (max-width: 539px) and (min-width: 500px) {
.c-us-overlay h2
{
    font-size: 16px;
}
.c-us-overlay p
{
    font-size: 12px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}

@media (max-width: 499px){
.c-us-overlay h2
{
    font-size: 20px;
}
.c-us-overlay p
{
    font-size: 14px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}
@media (max-width: 410px){
.c-us-overlay h2
{
    font-size: 16px;
}
.c-us-overlay p
{
    font-size: 12px;
}
.c-us-overlay
{
    padding-left: 10px;
}
}
/*
@media (max-width: 991px) {

    .row-holder
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .row
    {
        width: 90%;
    }
} */
</style>