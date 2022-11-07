<template>
<div class="pt-5">
<div class="row align-items-center justify-content-center g-0 vm py-2 mt-5">
    <div class="card col-8 shadow col-lg-4 col-xl-3 ms-5" id="" style="width: 35rem;">
    <div class="card-body py-4 px-4"> 
        <img src="../assets/v.png" class="img-fluid">
        <h2 class="text-white">VISION</h2>
        <div class="line mb-3"></div>
        <p class="text-white">To be a leading private research institution so as to serve as a valuable resource for industry and society and remain a source of pride. To formulate appropriate solutions for human problems as well as support the livelihood of the society.</p>
    </div>
    </div>

    <div class="card col-8 shadow col-lg-4 col-xl-3 m-4" id="" style="width: 35rem;">
    <div class="card-body py-4 px-4"> 
        <img src="../assets/m.png" class="img-fluid">
        <h2 class="text-white">MISSION</h2>
        <div class="line mb-3"></div>
        <p class="text-white">To promote the development of research activities involving innovative studies along with the development of creative and scholarly activities. To facilitate the planning and development of novel proposals to secure extra mural funding for proper execution research work; and To organize appropriate and systematic dissemination of the research work and scholarly achievements of the faculty members and research scholars.</p>
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
.vm
{
    background-color: rgba(0, 0, 0, 0.9);
}
.vm .card
{
    background: black;
    color: white;
    height: 350px;
}
.vm .card p
{
    font-size: 15px;
}
.vm .card img
{
    height: 80px;
    width: 80px;
}
.vm .card .card-body
{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: justify;
}
.vm .card .card-body .line
{
    width: 25%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.vm .card .card-body .line-r
{
    width: 50%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>