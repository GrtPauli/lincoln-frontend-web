<template>
    <div class="home-intro">
    <div class="slider">
        <div class="slide active" id="slideImg-1">
            <div class="slide-overlay">
                <div class="caption">
                    <h1>JOIN US FOR THE EDUCATION YOU DESERVE</h1>   
                <div class="underline mb-5"> 
                    <div class="line"></div>
                </div>
                <p class="lead">Education Just Meant For You</p>
                </div>
            </div>
        </div>
        <div class="slide" id="slideImg-2">
            <div class="slide-overlay">
                <div class="caption">
                    <h1>WE OFFER DUAL CERTIFICATE AT LINCOLN</h1>   
                <div class="underline mb-5"> 
                    <div class="line"></div>
                </div>
                <p class="lead">We Guarantee Dual Certification To All Our Students</p>
                </div>
            </div>
        </div>
        <div class="slide" id="slideImg-3">
            <div class="slide-overlay">
                <div class="caption">
                    <h1>STUDENTS ENJOY STUDYING AT LINCOLN</h1>   
                <div class="underline  mb-5"> 
                    <div class="line"></div>
                </div>
                <p class="lead">We Build And Nuture Our Students To Meet Industry Standard</p>
                </div>
            </div>
        </div>
     </div>

    <div class="controls px-5">
        <div class="prev px-5 me-5"><i class="bi bi-arrow-left-circle fs-1"></i></div>
        <div class="next px-5 ms-5"><i class="bi bi-arrow-right-circle fs-1"></i></div>
    </div>

    <div class="indicator">
    </div>
        <!-- <div class="bg-image pt-5">
        <div class="overlay pt-5 mt-4">
                <div class="main-theme">
                    <h1>JOIN US FOR THE EDUCATION YOU DESERVE</h1>   
                </div>

                <div class="underline mb-5"> 
                    <div class="line"></div>
                </div>

                <div class="sub-info">
                    <i class="bi bi-arrow-left-circle fs-1 me-5"></i>
                    <p class="lead fs-4">Education just meant for you</p>
                    <i class="bi bi-arrow-right-circle fs-1 ms-5"></i>
                </div>

                <div class="circles mt-5 pt-5">
                    <i class="bi bi-circle-fill me-2 first"></i>
                    <i class="bi bi-circle-fill me-2"></i>
                    <i class="bi bi-circle-fill me-2"></i>
                    <i class="bi bi-circle-fill me-2"></i>
                    <i class="bi bi-circle-fill me-2"></i>
                    <i class="bi bi-circle-fill"></i>
                </div>
        </div>
        </div> -->


    </div>
</template>

<script>
export default 
{
    mounted()
    {
        const slides=document.querySelector(".slider").children;
        const prev=document.querySelector(".prev");
        const next=document.querySelector(".next");
        const indicator=document.querySelector(".indicator");
        let index=0;

        prev.addEventListener("click",function(){
            prevSlide();
            updateCircleIndicator(); 
            resetTimer();
        })

        next.addEventListener("click",function(){
            nextSlide(); 
            updateCircleIndicator();
            resetTimer();
            
        })

        // create circle indicators
            function circleIndicator(){
                for(let i=0; i< slides.length; i++){
                    if(indicator.children.length != 3)
                    {
                        const div=document.createElement("div");
                            //div.innerHTML=i+1;
                            //div.setAttribute("onclick","indicateSlide(this)")
                            div.id=i;
                            if(i==0){
                                div.className="active";
                            }
                        indicator.appendChild(div);
                    }
                }
            }
            circleIndicator();

            // function indicateSlide(element){
            //     index=element.id;
            //     changeSlide();
            //     updateCircleIndicator();
            //     resetTimer();
            // }
            
            function updateCircleIndicator(){
                for(let i=0; i<indicator.children.length; i++){
                    indicator.children[i].classList.remove("active");
                }
                indicator.children[index].classList.add("active");
            }

        function prevSlide(){
            if(index==0){
                index=slides.length-1;
            }
            else{
                index--;
            }
            changeSlide();
        }

        function nextSlide(){
            if(index==slides.length-1){
                index=0;
            }
            else{
                index++;
            }
            changeSlide();
        }

        function changeSlide(){
                for(let i=0; i<slides.length; i++){
                    slides[i].classList.remove("active");
                }

            slides[index].classList.add("active");
        }

        function resetTimer(){
            // when click to indicator or controls button 
            // stop timer 
            clearInterval(timer);
            // then started again timer
            timer=setInterval(autoPlay,4000);
        }
        
        
        function autoPlay(){
            nextSlide();
            updateCircleIndicator();
        }

        let timer=setInterval(autoPlay,4000);
    }
}
</script>

<style>
.home-intro
{
   	height: 85vh;
	overflow:hidden;
	position: relative; 
}
.home-intro .slide .slide-overlay
{
    padding-top: 100px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
}
.home-intro .slide{
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	background-size: cover;
    background-repeat: no-repeat;
	background-position: center;
	z-index:1; 
	display:none;
	animation: slide 4s ease;
}
.home-intro .slide.active{
	display: flex;
}
#slideImg-1{
    background-image: url(../assets/grad-students-throwing-hats-in-the-air.jpg);
}
#slideImg-2
{
    background-image: url(../assets/img-2.png)
}
#slideImg-3
{
    background-image: url(../assets/students-enjoy.png)
}
@keyframes slide{
	0%{
		transform:scale(1.3);
	}
    80%
    {
        transform: scale(1);
    }
    90%
    {
		transform: scale(1);
    }
	100%{
		transform: scale(1);
	}
}
.underline .line
{
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
.home-intro .slide.active .caption .underline
{
    opacity: 0;
   	animation: lineAnim .7s ease forwards;
	animation-delay: 1.7s; 
}
.home-intro .slide.active .caption h1{
	opacity:0;
	animation: captionText .7s ease forwards;
	animation-delay:1.3s;
}
.home-intro .slide.active .caption p{
    font-size: 25px;
	opacity:0;
	animation: captionText .7s ease forwards;
	animation-delay:1s;
}
@keyframes lineAnim{
    0%{
        opacity: 0;
    }
    100%
    {
        opacity: 1;
    }
}
@keyframes captionText{
	0%{
		opacity:0; transform: translateY(-100px);
	}
	100%{
	 opacity:1; transform: translateY(0px);	
	}
}
.home-intro .indicator{
	position: absolute;
	left:50%;
	bottom:30px;
	z-index: 2;
	transform: translateX(-50%);
}

.home-intro .indicator div{
	display: inline-block;
	width:18px;
	height: 18px;
	color:#ffffff;
	background-color: white;
	border-radius:50%;
	text-align: center;
	line-height: 25px;
	margin:0 8px;
}

.home-intro .indicator div.active{
 background-color: red;
}
.home-intro .controls
{
    z-index: 2; 
    position: absolute;
    display: flex;
    align-items: flex-end;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    justify-content: space-around;
}
.home-intro .controls .prev,
.home-intro .controls .next{
     cursor:pointer;
    transition: all .5s ease;
    color: white;
}
.home-intro .controls .prev:hover,
.home-intro .controls .next:hover{
	color: red;
}
@media (max-width: 1000px) {
    .home-intro
    {
        height: 55vh;
    }
}
@media (max-width: 800px) {
    .home-intro
    {
        height: 55vh;
    }
}


@media (max-width: 768px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 25px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 20px;
    }
    #slideImg-3 .underline
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #slideImg-3 .underline .line
    {
        width: 90%;
    }
}
@media (max-width: 575px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 25px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 18px;
    }
    #slideImg-3 .underline
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #slideImg-3 .underline .line
    {
        width: 100%;
    }
}
@media (max-width: 550px) {
    .home-intro .slide .slide-overlay
    {
        padding-top: 60px;
    }
    .home-intro .slide.active .caption h1
    {
        font-size: 23px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 16px;
    }
}
@media (max-width: 500px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 20px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 14px;
    }
    .home-intro
    {
        height: 50vh;
    }
    .home-intro .slide .slide-overlay
    {
        padding-top: 80px;
    }
}
@media (max-width: 450px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 18px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 13px;
    }
    .home-intro
    {
        height: 45vh;
    }
}
@media (max-width: 400px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 17px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 12px;
    }
    .home-intro
    {
        height: 40vh;
    }
        .home-intro .slide .slide-overlay
    {
        padding-top: 50px;
    }
}
@media (max-width: 390px) {
    .home-intro .slide.active .caption h1
    {
        font-size: 16px;
    }
    .home-intro .slide.active .caption p
    {
        font-size: 12px;
    }
    .home-intro
    {
        height: 55vh;
    }

}
</style>