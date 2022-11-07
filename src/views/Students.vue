<template>
  <div>
    <div class="st-header mb-5">
        <div class="st-header-overlay">
            <h1>STUDENTS</h1>
            <div class="line mb-4"></div>
            <p class="fs-3">Students Arena</p>
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
.st-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/row-of-young-adults-at-work.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.st-header-overlay
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
.st-header-overlay .line
{
    width: 10%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>