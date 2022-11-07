<template>
  <div class="pt-5">
    <div class="sectionHead text-center">
        <h2>INFO CENTER</h2>
        <div class="line mb-4"></div>
        <p class="fs-5 mb-4 px-3">What’s new ?. Stay up to date with the latest news, events, blogs and activities at LCMST</p>
    </div>
    <div class="info-links-holder">
        <p class="first-link" role="button" @click="showInfo(`news`)" id="news">NEWS</p>
        <p role="button" @click="showInfo(`events`)" id="events">EVENTS</p>
        <p role="button" @click="showInfo(`blogs`)" id="blogs">BLOGS</p>
        <p role="button" @click="showInfo(`activities`)" id="activities">STUDENTS & STAFF ACTIVITIES</p>
    </div>
    <div class="baseline-holder">
        <div class="baseline"></div>
    </div>

    <div class="row align-items-center justify-content-center mt-5 g-0" id="infoRow">
    <div v-for="info in genArr" :key="info" class="card col-8 shadow col-lg-4 col-xl-3 mb-4 mx-4" id="" style="width: 22rem;">
    <img :src="require(`@/assets/${info.imgSrc}`)" style="height: 13rem;" class="card-img-top">
    <div class="card-body"> 
        <h2 class="fs-5">{{info.title}}</h2>
        <p class="dateInfo">{{info.dateInfo}}</p>
        <a href="" class="moreBtn">Read More <i class="bi bi-chevron-double-right"></i></a>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default 
{
    data()
    {
       return{
        genArr : [],
        newsArr : [
            {
                imgSrc: "construct.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "quality.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "row-of-young-adults-at-work.jpg",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "rustic-old-book-open-at-centre.jpg",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "motto-pic.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "why.webp",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            }
        ],

        eventsArr : [
            {
                imgSrc: "construct.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "quality.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            }
        ],

        blogsArr : [
            {
                imgSrc: "quality.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            }
        ],

        activitiesArr: [
            {
                imgSrc: "construct.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            },
            {
                imgSrc: "quality.png",
                title: "Lorem ipsum dolor sit amet.",
                dateInfo: "October 20, 2022 @ 4:25 pm"   
            }
        ]

       } 
    },

    created()
    {
        this.genArr = this.newsArr
    },

    methods:
    {
        showInfo(infoId)
        {
            const infoRow = document.getElementById("infoRow")
            const info_id = document.getElementById(infoId)


            if(infoId == "events")
            {
                infoRow.style.opacity = "0"
                info_id.style.color="red"
                document.getElementById("news").style.color = "black"
                document.getElementById("blogs").style.color = "black"
                document.getElementById("activities").style.color = "black"
                setTimeout(() =>
                {
                    this.genArr = this.eventsArr
                    infoRow.style.opacity = "1" 
                }, 1000)
            }
            else if(infoId == "blogs")
            {
                infoRow.style.opacity = "0"
                info_id.style.color="red"
                document.getElementById("news").style.color = "black"
                document.getElementById("events").style.color = "black"
                document.getElementById("activities").style.color = "black"
                setTimeout(() =>
                {
                    this.genArr = this.blogsArr
                    infoRow.style.opacity = "1" 
                }, 1000)  
            }
            else if(infoId == "activities")
            {
                infoRow.style.opacity = "0"
                info_id.style.color="red"
                document.getElementById("news").style.color = "black"
                document.getElementById("events").style.color = "black"
                document.getElementById("blogs").style.color = "black"
                setTimeout(() =>
                {
                    this.genArr = this.activitiesArr
                    infoRow.style.opacity = "1" 
                }, 1000)  
            }
            else if(infoId == "news")
            {
                infoRow.style.opacity = "0"
                info_id.style.color="red"
                document.getElementById("activities").style.color = "black"
                document.getElementById("events").style.color = "black"
                document.getElementById("blogs").style.color = "black"
                setTimeout(() =>
                {
                    this.genArr = this.newsArr
                    infoRow.style.opacity = "1" 
                }, 1000)  
            }
            
        }
    }
}
</script>

<style>
.info-links-holder
{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.info-links-holder p
{
    font-family: "Raleway-Bold";
    font-size: 20px;
    transition: 0.5s all ease;
}
#infoRow
{
    transition: 0.5s all ease;
}
.first-link
{
    color: red;
}
.baseline-holder
{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 105px;
}
.baseline
{
    background-color: black;
    width: 100%;
    height: 5px;
}
.sectionHead
{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.sectionHead .line
{
    width: 13%;
    background-color: red;
    height: 5px;
    border-radius: 50px;
}
</style>