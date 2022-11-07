<template>
<div class="pt-5">
<div class="row align-items-center justify-content-center g-0 vmr py-lg-3 py-5 mt-5">
    <div class="card col-10 shadow col-lg-4 col-xl-3 " id="" style="width: 25rem;">
    <div class="card-body py-5 px-5"> 
        <img src="../assets/v.png" class="img-fluid">
        <h2 class="text-white">VISION</h2>
        <div class="line mb-3"></div>
        <p class="text-white">To be a global institution that make different in peoples ‘s life and society.</p>
    </div>
    </div>

    <div class="card col-8 shadow col-lg-4 col-xl-3 m-4" id="" style="width: 25rem;">
    <div class="card-body py-5 px-3"> 
        <img src="../assets/m.png" class="img-fluid">
        <h2 class="text-white">MISSION</h2>
        <div class="line mb-3"></div>
        <p class="text-white">To make education accessible to everyone without any limitations and transform people and society through education.</p>
    </div>
    </div>

    <div class="card col-8 shadow col-lg-4 col-xl-3" id="" style="width: 25rem;">
    <div class="card-body py-5 px-5"> 
        <img src="../assets/r.png" class="img-fluid">
        <h2 class="text-white">RECOGNITION</h2>
        <div class="line-r mb-3"></div>
        <p class="text-white">To be a global institution that make different in peoples ‘s life and society.</p>
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
.vmr
{
    background-color: rgba(0, 0, 0, 0.9);
}
.vmr .card
{
    background: black;
    color: white;
    height: 300px;
}
.vmr .card p
{
    font-size: 15px;
}
.vmr .card img
{
    height: 80px;
    width: 80px;
}
.vmr .card .card-body
{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.vmr .card .card-body .line
{
    width: 25%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.vmr .card .card-body .line-r
{
    width: 50%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>