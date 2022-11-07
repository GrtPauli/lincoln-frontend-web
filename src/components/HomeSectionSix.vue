<template>
  <div class="container bg-primary o-holder px-5 py-5 my-5">
    <div class="o-holder-head">
    <h1 class="text-white text-center mb-3">WHY LINCOLN</h1>
    <div class="line2 mb-5"></div>
    </div>

      <div class="o-one">
            <h1 class="text-white"><span class="number-order">O1.</span> Scholarships</h1>
             <p class="text-white">
              Up to 80% Scholarships are provided for outstanding local and international<br>  students who demonstrate academic excellence, high intellectual capacity<br> and strong character.
            </p>
      </div>
      <div class="line mb-5"></div>

      <div class="o-one">
          <h1 class="text-white "><span class="number-order">O2.</span>Flexible Study Mode</h1>
            <p class="text-white">
          LUC is utilizing technology for conducting flexible study mode for its <br>students which help them pursue their studies beside their other interests.            </p>
      </div>
      <div class="line mb-5"></div>

      
      <div class="o-one">
          <h1 class="text-white"><span class="number-order">O3.</span>Instalment Plans</h1>
            <p class="text-white">

        LUC has made it easier for students to pursue their dreams and empower <br> them to be able to compete in the job market by providing a wide range of<br> instalment plans that help them pay their tuition fees on batches.</p>      </div>
      <div class="line mb-5"></div>
      
  </div>
</template>

<script>
export default 
{

}
</script>

<style>
.o-holder-head
{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.o-holder-head .line2
{
    width: 20%;
    background-color: white;
    height: 5px;
    border-radius: 50px;
}
.o-holder
{
  border-radius: 50px;
}
.o-holder .line
{
    width: 100%;
    background-color: white;
    height: 5px;
    border-radius: 50px;
}
.o-one
{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.number-order
{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}
</style>