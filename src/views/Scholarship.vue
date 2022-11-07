<template>
    <div>
    <div class="sch-header mb-5">
        <div class="sch-header-overlay">
            <h1>SCHOLARSHIP</h1>
            <div class="line mb-4"></div>
            <p class="fs-3">Apply For Scholarship</p>
        </div>
    </div> 

    <ScholarshipForm/>
  </div>
</template>

<script>
import ScholarshipForm from '../components/ScholarshipForm.vue'

export default 
{
    components: 
    {
        ScholarshipForm
    }
}
</script>

<style>
.sch-header
{
    position: relative;
    overflow: hidden;
    height: 80vh;
    background-image: url(../assets/mortar-board-graduation-diploma.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.sch-header-overlay
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
.sch-header-overlay .line
{
    width: 10%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>