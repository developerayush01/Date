const successStories = [
  {
    coupleName: "Ravi & Sneha",
    image: "https://images.pexels.com/photos/1408354/pexels-photo-1408354.jpeg", 
    location: "Kathmandu, Nepal",
    review: "We found each other in just 2 months! This platform brought our families together and made our union a reality. Grateful forever!"
  },
  {
    coupleName: "Sushant & Manisha",
    image: "https://images.pexels.com/photos/1005020/pexels-photo-1005020.jpeg",
    location: "Pokhara, Nepal",
    review: "I was skeptical at first, but everything changed when I met Manisha. AyushMatch made it all possible!"
  },
  {
    coupleName: "Arjun & Kritika",
    image: "https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg",
    location: "Butwal, Nepal",
    review: "From strangers to soulmates. The process was simple, safe, and respectful to our traditions."
  },
  {
    coupleName: "Bibek & Anusha",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    location: "Biratnagar, Nepal",
    review: "We met through horoscope matching on this site. Our families instantly clicked. Feels like destiny!"
  },
  {
    coupleName: "Dipesh & Roshni",
    image: "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    location: "Lalitpur, Nepal",
    review: "In a world full of dating apps, this one felt real. We were guided with care, and now we’re life partners!"
  }
];

successStories.forEach(story=>{
    let success=document.querySelector(".wrap");
    success.innerHTML+=`
    <div class="swiper-slide feed1">
            <div class="feed2">
              <img src="${story.image}" alt="" />
              <div class="feed11">
                <p class="f1">
                  ${story.review}
                </p>
                <br />
                <h4>
                ${story.coupleName}</h4>
              </div>
            </div>
          </div>
    `
})