let banner=document.querySelector(".banner");
const bannerImage=[
    "images/banner/pexels-picjumbo-com-55570-196664.jpg",
    "images/banner/pexels-pixabay-415351.jpg",
    "images/banner/pexels-shihabnymur-712520.jpg",
    "images/banner/pexels-trungnguyenphotog-1630068.jpg",
]
banner.style.backgroundImage=`url('${bannerImage[0]}')`;
let index=0
setInterval(() => {
        banner.style.backgroundImage = `url('${bannerImage[index]}')`; // change image
        index = (index + 1) % bannerImage.length;
}, 2000);