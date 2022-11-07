<template>
  <div class="container-fluid motto-bg mb-5">
    <div class="motto-bg-overlay">
        <h1>EDUCATION FOR ALL<br>IMPACTING LIVES</h1>
    </div>
  </div>
</template>

<script>
export default 
{

}
</script>

<style>
.motto-bg
{
    background-image: url(../assets/motto-pic.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 120px;
    height: 70vh;
    position: relative;
    overflow: hidden;
}
.motto-bg-overlay
{
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}
</style>