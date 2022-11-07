<template>
  <div class="recognitions-accreditations home-recog pt-5 mt-5">
    <div class="ra-header mb-5">
    <h2 class="text-center">RECOGNITIONS & ACCREDITATIONS</h2>
    <div class="line"></div>
    </div>
    <div class="hol">
        <div class="recog-holder">
                <div class="recognitions pt-3 row justify-content-center align-items-center g-0">
                    <div class="col-lg-2 col-md-3 col-6">
                    <img src="../assets/AIU.png" class="border">
                    </div>
                    <div class="col-lg-2 col-md-3 col-6">
                    <img src="../assets/IAOU.png" class="border">
                    </div>
                    <div class="col-lg-2 col-md-3 col-6 mt-5 mt-md-0">
                    <img src="../assets/WHO.png" class="border">
                    </div>
                    <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                    <img src="../assets/WCU.png" class="border">
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mt-5 mt-lg-0">
                    <img src="../assets/SGS.png" class="border">
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mt-5 mt-lg-0">
                    <img src="../assets/RWU.png" class="border">
                    </div>
                </div>
        </div>
    </div>

  </div>
</template>

<script>
export default 
{

}
</script>

<style>
.hol
{
    display: flex;
    align-items: center;
    justify-content: center; 
}
.ra-header
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.ra-header .line
{
    width: 18%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.recog-holder
{
    
}
.home-recog .recognitions img
{
    height: 150px;
    width: 150px;
    border-radius: 10px;
    transition: 0.5s all ease;
}
.home-recog .recognitions img:hover
{
    transform: translateY(-20%);
    box-shadow:  -3px -3px 7px rgba(0, 0, 0, 0.453),  3px 3px 5px rgba(94, 104, 122, .288);
}
</style>