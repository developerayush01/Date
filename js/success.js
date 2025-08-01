const successStories = [
  {
    coupleName: "Ravi & Sneha",
    image: "https://images.pexels.com/photos/20507078/pexels-photo-20507078.jpeg", 
    location: "Kathmandu, Nepal",
    review: "We found each other in just two months—something our families still call a miracle. AyushMatch didn’t just connect us; it aligned our values, our dreams, and gave us the confidence to take the biggest step of our lives. From the moment we spoke, it felt like we were destined to meet. Now every morning begins with gratitude and every night ends with a prayer for those still searching."
  },
  {
    coupleName: "Sushant & Manisha",
    image: "https://images.pexels.com/photos/31820501/pexels-photo-31820501.jpeg",
    location: "Pokhara, Nepal",
    review: "To be honest, I didn’t expect much when I signed up. But when I came across Manisha’s profile, something clicked. Our conversations felt effortless, and slowly, a bond began to grow. What impressed me most was how the platform respected our cultural values while giving us space to truly get to know each other. Now, we’re not just a couple—we’re partners in every journey, building a future with trust and joy."
  },
  {
    coupleName: "Arjun & Kritika",
    image: "https://images.pexels.com/photos/7334002/pexels-photo-7334002.jpeg",
    location: "Butwal, Nepal",
    review: "Meeting Kritika changed everything. We started as strangers—cautious but curious. Over time, we found comfort in our shared goals and deep respect for one another’s families. AyushMatch gave us more than just a match; it gave us a direction. We got to know each other with dignity and trust. Today, we stand strong, not just as husband and wife, but as soulmates who once simply clicked a profile."
  },
  {
    coupleName: "Bibek & Anusha",
    image: "https://images.unsplash.com/photo-1738840273420-8ae5c4750f5a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Biratnagar, Nepal",
    review: "We met through horoscope matching, which initially drew our families’ attention. But what followed was a beautiful bond that grew stronger with every conversation. Our parents met, and everything just felt so natural. It felt like fate had planned every step. AyushMatch didn’t just introduce us—it brought two families together, helped us fall in love the traditional way, and gave us the confidence that this was truly meant to be."
  },
  {
    coupleName: "Dipesh & Roshni",
    image: "https://images.unsplash.com/photo-1730116309939-10a01fdf1edb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Lalitpur, Nepal",
    review: "We tried many platforms before this, but nothing ever felt genuine—until AyushMatch. From the start, we were guided with care, and every feature respected our values. Our chats turned into phone calls, calls into meetings, and meetings into something real. In a world full of dating distractions, this platform gave us focus. Today, we’re not just married; we’re best friends, partners in growth, and forever thankful for this divine connection."
  }
];


let successHTML = "";
successStories.forEach(story => {
  successHTML += `
    <div class="swiper-slide feed1">
      <div class="feed2">
        <img src="${story.image}" alt="${story.coupleName}" />
        <div class="feed11">
          <p class="f1">${story.review}</p>
          <br />
          <h4>${story.coupleName}</h4>
          <p class="location">${story.location}</p>
        </div>
      </div>
    </div>`;
});

document.querySelector(".feedback").innerHTML = successHTML;
