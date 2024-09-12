// const VideoCardContainer=document.querySelector(".videos-sec");
// let api_key="AIzaSyCS2uu78o1-7swd87jnlDo4uk2U1sLfp4g";
// let video_http="https://www.googleapis.com/youtube/v3/videos?";
// let channel_http="https://www.googleapis.com/youtube/v3/channels?";




// fetch(video_http + new URLSearchParams({
//     key:api_key,
//     part:'snippet',
//     chart:'mostPopular',
//     maxResults:120,
//     regionCode:'IN',
// }))

// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     data.items.forEach(item =>{
//         getChannelIcon(item);
//     })
// })

// .catch(err => console.log(err));

// const getChannelIcon = (video_data) => {
//     fetch(channel_http + new URLSearchParams({
//         key:api_key,
//         part:'snippet',
//         id:video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data =>{
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//         makeVideoCard(video_data);
//     })
// }




// const makeVideoCard=(data) =>{
//     VideoCardContainer.innerHTML+=`
//     <div class="videos" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
//         <div class="thumbnail">
//             <img src="${data.snippet.thumbnails.high.url}" alt="">
//         </div>
//         <div class="video-sec-bottom">
//             <img class="channel_logo" src="${data.channelThumbnail}" alt="" width="37" height="37">
//                         <div>
//                             <div class="title_info">
//                                 <h5>${data.snippet.title}</h5>
//                                 <img src="./img/3-dots.png" alt="" height="25">
//                             </div>
//                             <div class="channelname_verifysym">
//                                 <a>${data.snippet.channelTitle}</a>
//                                 <img src="./img/verified-symbol.png" alt="channel verified symbol" width="12"
//                                     height="12">
//                             </div>
//                             <div class="views_Upload_time">
//                                 <p id="views">224M views</p>
//                                 <p id="upload_time">2 years ago</p>
//                             </div>
//                         </div>
//                     </div>
//     </div>
//     `
// }



const VideoCardContainer = document.querySelector(".videos-sec");
let api_key = "AIzaSyCS2uu78o1-7swd87jnlDo4uk2U1sLfp4g";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 91,
    regionCode: 'IN',
}))

    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.items.forEach(item => {
            getChannelIcon(item);
        })
    })

    .catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        })
}

const makeVideoCard = (data) => {
    VideoCardContainer.innerHTML += `
    <div class="videos" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
        <div class="thumbnail">
            <img src="${data.snippet.thumbnails.high.url}" alt="">
        </div>
        <div class="video-sec-bottom">
            <img class="channel_logo" src="${data.channelThumbnail}" alt="" width="37" height="37">
                        <div>
                            <div class="title_info">
                                <h5>${data.snippet.title}</h5>
                                <img src="./img/3-dots.png" alt="" height="25">
                            </div>
                            <div class="channelname_verifysym">
                                <a>${data.snippet.channelTitle}</a>
                                <img src="./img/verified-symbol.png" alt="channel verified symbol" width="12"
                                    height="12">
                            </div>
                            <div class="views_Upload_time">
                                <p id="views">224M views</p>
                                <p id="upload_time">2 years ago</p>
                            </div>
                        </div>
                    </div>
    </div>
    `
}

var featuresclick = document.getElementsByClassName("features");
var sbclick = document.getElementsByClassName("sb-box");
var showmore = document.querySelector(".show-more");
var showless = document.querySelector(".show-less");
var remchannels = document.getElementsByClassName("extra-channels");



for (let i = 0; i < featuresclick.length; i++) {
    featuresclick[i].addEventListener("click", function () {
        var activef = document.getElementsByClassName("activef");
        for (let j = 0; j < activef.length; j++) {
            activef[j].classList.remove("activef");
        }
        this.classList.add("activef");
    });
}

for (let i = 0; i < sbclick.length; i++) {
    sbclick[i].addEventListener("click", function () {
        var activesb = document.getElementsByClassName("activesb");
        for (let j = 0; j < activesb.length; j++) {
            activesb[j].classList.remove("activesb");
        }
        this.classList.add("activesb");
    });
}

showmore.addEventListener("click", function () {
    for (let i = 0; i < remchannels.length; i++) {
        remchannels[i].classList.remove("channels-hide");
    }
    showmore.classList.add("channels-hide");
});

showless.addEventListener("click", function () {
    for (let i = 0; i < remchannels.length; i++) {
        remchannels[i].classList.add("channels-hide");
    }
    showmore.classList.remove("channels-hide");
    showless.classList.add("channels-hide");
});

function toggleSidebar() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Only toggle the sidebar if the screen size is less than 440px
    if (screenWidth < 440) {
        var sidebar = document.getElementById('sidebar');
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    }
}

// Function to check the screen width and hide/show sidebar accordingly
function checkScreenWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var sidebar = document.getElementById('sidebar');

    if (screenWidth < 440) {
        sidebar.style.display = 'none'; // Automatically hide the sidebar for small screens
    } else {
        sidebar.style.display = 'block'; // Show the sidebar for larger screens
    }
}

// Attach the toggleSidebar function to a button click event
var sidebarToggleBtn = document.getElementById('sidebar-icon');
sidebarToggleBtn.addEventListener('click', toggleSidebar);

// Check the screen width on page load and on window resize
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
