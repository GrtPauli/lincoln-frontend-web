<template>
  <div class="mb-5">
    <div class="row justify-content-center g-0 py-3 mt-5">
    <div class="col-11 col-md-8 col-lg-5 col-xl-4">
        <img src="../assets/florina.png" class="img-fluid c-pic shadow c-card">
        <div class="c-overlay  pb-1 pt-2">
            <h1 class="fs-6">Prof. Datuk Bibi Florina Binti Abdullah</h1>
            <h6>Pro-Chancellor of Lincoln University College, Malaysia.</h6>
        </div>
        <div class="accordion" id="chapters">
        <div class="accordion-item">
            <h2 class="accordion-header" id="hheading-1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                    Message From The Pro-Chancellor
                </button>
            </h2>
            <div id="chapter-1" class="accordion-collapse collapse show" 
            aria-labelledby="heading-1" data-bs-parent="#chapters">
            <div class="accordion-body">
                <p>First and foremost,
                I wish everyone to be in the best of health and condition, especially during this
                unfortunate event of Corona Virus Disease 2019 (COVID-19) that we are all facing.
                It is indeed a trying situation for all of us and I pray that we are all given the
                strength to endure hopefully we all get out of this better than ever and may all aspects
                of our lives are enhanced in all perspectives.
                On a good note, we are glad to be expanding in  Africa, especially in  Nigeria.
                It is indeed a great milestone for all of us especially in realizing the vision of
                Lincoln University College.    
                In Lincoln Nigeria, we aim to deliver the standards that are accepted and implemented
                worldwide, especially in the field of   Information Technology, Business, Engineering,
                Nursing, and other Health Science courses In doing so, we strive to support the effort 
                of the United Nation Sustainable development Goal (SDG) in Africa. our programs are 
                internationally recognized and accredited by the accreditation councils and higher 
                education authorities worldwide. Our programs include both theoretical learning and 
                practical learning with not less than 80% practical work and our experienced teaching 
                faculty emphasizes the enhancement of advanced and essential skills needed for the 
                student to impact lives and society. Thus, the program of study will prepare the 
                students for a professional career in nursing and we are committed to ensuring that 
                our students will also be ready for any kind of unexpected life challenges in the 
                future, such as COVID-19.
                Finally, for all students, the life of a knowledge-seeker will not be an easy one. We 
                are here with you throughout your journey and we will assist you in any way we can. 
                Be committed, steadfast, and diligent through all the situations that life may bring 
                you and it will all be worth it in the end.
                Thank you and I wish all of you the very best.</p>
            </div>
            </div>
        </div>
    </div>
    </div>

    <div class="col-11 col-md-8 col-lg-5 col-xl-4 ms-lg-5 mt-5 mt-lg-0">
        <img src="../assets/president-pics.png" class="img-fluid c-pic shadow c-card">
        <div class="c-overlay  pb-1 pt-2">
            <h1 class="fs-6">Dr Amiya Bhaumik</h1>
            <h6>President of Lincoln University College, Malaysia.</h6>
        </div>
        <div class="accordion" id="chapters">
        <div class="accordion-item">
            <h2 class="accordion-header" id="hheading-1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                    Message From The President
                </button>
            </h2>

            <div id="chapter-2" class="accordion-collapse collapse show" 
            aria-labelledby="heading-1" data-bs-parent="#chapters">
            <div class="accordion-body">
                <p>Dear Students,

On behalf of Lincoln University College Malaysia and Lincoln Nigeria, I thank you for taking an interest in Lincoln University and Lincoln College. I encourage you to explore our website and learn more about our fine university. We are very happy to become acquainted with you and to assist you to succeed and achieve your educational goal.



As the President of Lincoln University and  Colleges, it is my pleasure to share our Institution’s vision with you. Lincoln’s vision is to be an acclaimed institution of higher learning that provides world-class education with high capability in providing knowledgeable and skillful professionals along with artificial intelligence to serve the global society.

Our Philosophy is to make Quality education accessible to everyone without any limitation. It is our belief that everyone has the right to quality education no matter where you come from or your status.



While we are happy with the accomplishments of the establishment of Lincoln College of  Science Management and Technology in Nigeria, our vision is to be a global institution that makes a difference in peoples ‘ life and society and emerge as one of the major educational institutions that provide quality education to solve global problems and impact people’s lives and society at large.



All our programs in Lincoln are delivered with a minimum of 70 – 80 % practical knowledge skills and 20 % theory to prepare the student to solve the problem of the fast-changing global economy and create jobs to reduce the Unemployment rate in the Country.

Lastly, I would like to express my gratitude to all students for choosing Lincoln to further their studies. We will do our best to help the students by providing the education qualities and skills needed for you to turn into competent and skilled graduates with excellent attitudes.



Thank you.</p>
            </div>
            </div>
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
.accordion-body
{
    overflow-y: scroll;
    max-height: 300px;
}
.c-pic
{
    border-radius: 50px;
}
.c-card
{
    width: 100%;
}
.c-overlay
{
    transform: translateY(-200%);
    width: 410px;
    padding-left: 13px;
    z-index: 1;
    color: white;
    background-color: red;
    border-radius: 0px 50px 50px 0px;
}
.c-overlay h6
{
    font-family: "Raleway-Light";
    font-size: 15px;
}
@media (max-width: 450px) 
{
    .c-overlay
    {
        width: 400px;
        padding-left: 10px;
    }
}
@media (max-width: 440px) 
{
    .c-overlay
    {
        width: 370px;
        padding-left: 13px;
    }
    .c-overlay h6
    {
        font-size: 13px;
    }
}
@media (max-width: 420px) 
{
    .c-overlay
    {
        width: 350px;
        padding-left: 13px;
    }
    .c-overlay h6
    {
        font-size: 12.7px;
    }
}
@media (max-width: 380px) 
{
    .c-overlay
    {
        width: 330px;
        padding-left: 8px;
    }
    .c-overlay h6
    {
        font-size: 11.5px;
    }
}
@media (max-width: 360px) 
{
    .c-overlay
    {
        width: 310px;
        padding-left: 8px;
    }
    .c-overlay h6
    {
        font-size: 11.5px;
    }
}

</style>