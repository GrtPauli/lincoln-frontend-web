<template>
  <div>
        <div class="sch-form-header">
            <h2 class="text-center">SCHOLARSHIP FORM</h2>
            <div class="line mb-4"></div>
            <p class="fs-4 mb-3">Fill this form as detailed as possible.</p>
        </div>

        <div class="form-holder">
            <form class="sch-form shadow">
                <div class="pb-4">
         <p class="ms-5 mb-4 mt-4 text-primary">All Fields are necessary, leaving out any information reduces your chances!</p>
            <div class="sch-formRow  px-5">
            <div class="input-fields">
                <div class="rowCol me-5">
                    <p>Full Name</p>
                    <input type="text" name="full-name" id="full-name" class="full-name"> 
                </div>
                <div class="rowCol">
                    <p>Phone Number</p>
                    <input type="number" name="phone-number" id="phone-number" class="phone-number"> 
                </div>
                <div class="rowCol mt-4 me-5">
                    <p>Email Address</p>
                    <input type="email" name="email" id="email" class="email"> 
                </div>
                <div class="rowCol mt-4">
                    <p>Alternate Email</p>
                    <input type="email" name="alt-email" id="alt-email" class="alt-email"> 
                </div>
                <div class="rowCol mt-4 me-5">
                    <p>Zip/Postal Code</p>
                    <input type="number" name="zip-code" id="zip-code" class="zip-code"> 
                </div>
                <div class="rowCol mt-4">
                    <p>Country</p>
                    <select name="country" id="country" class="px-3">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>
                <div class="rowCol mt-4 me-5">
                    <p>State/Province</p>
                    <input type="text" name="state" id="state" class="state"> 
                </div>
                <div class="rowCol mt-4">
                    <p>Programme Applied</p>
                    <input type="text" name="programme" id="programme" class="programme"> 
                </div>
                <div class="rowCol mt-4 me-5">
                    <p>Parent/Guardian Full Name</p>
                    <input type="text" name="pgfullname" id="pgfullname" class="pgfullname"> 
                </div>
                <div class="rowCol mt-4">
                    <p>Parent/Guardian Occupation</p>
                    <input type="text" name="pgoccupation" id="pgoccupation" class="pgoccupation"> 
                </div>
                </div>
                
                <p class="mt-4">Address</p>
                <textarea name="address" id="address"></textarea>
                <p class="mt-4">Reason for Scholarship</p>
                <textarea name="address" id="address"></textarea>
                <p class="mt-4">How would you contribute to the society after your study if you get this scholarship?</p>
                <textarea name="address" id="address"></textarea>
            </div>
                <div class="btn-holder mt-4">
                    <button class="btn sch-btn btn-primary btn-lg rounded-pill px-4 text-white">APPLY</button>
                </div>
            </div>

            </form>
        </div>
  </div>
</template>

<script>
export default 
{

}
</script>

<style>
.btn-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Raleway-Light";
}
.sch-form
{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sch-formRow p
{
    font-family: "Raleway-Bold";
    text-transform: uppercase;
}
.sch-formRow textarea
{
    width: 100%;
    height: 100px;
    resize: none;
}
.input-fields
{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.sch-form input, select
{
    margin: 0;
    width: 400px;
    height: 40px;
    border: 1px solid rgb(112, 109, 109);
    border-radius: 50px;
}
.form-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
}
.sch-form-header
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.sch-form-header .line
{
    width: 18%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>