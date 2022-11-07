<template>
  <div>
    <div class="container-fluid j-us py-5">
        <h2 class="text-white">JOIN US TODAY</h2>
        <div class="line mb-4"></div>
        <p class="text-white fs-4 mb-4 text-center">Apply for our scholarship programmes</p>
        <router-link to="/scholarship" class="btn sch-btn btn-primary btn-lg rounded-pill px-4 text-white">Apply Now</router-link>        
    </div>
  </div>
</template>

<script>
export default 
{

}
</script>

<style>
.j-us
{
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.j-us .line
{
    width: 13%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.j-us .sch-btn
{
    padding-top: 12px;
    font-family: "Raleway-Light";
    padding-bottom: 12px;
}
</style>