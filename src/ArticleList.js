import React from "react";
import ArticlePreview from "./ArticlePreview";

const articles = [
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "thestreet.com",
    title:
      "Potential UAW strike could heighten Tesla's competitive advantage",
    description:
      "The deadline for Ford (F) - Get Free Report, General Motors (GM) - Get Free Report and Stellantis (STLA) - Get Free Report to reach a deal with the United Auto Workers union is fast approaching. If the Big Three Detroit automakers can't come to an agreement w…",
    url: "<https://biztoc.com/x/95d1c8b958eea4ac>",
    urlToImage:
      "<https://c.biztoc.com/p/95d1c8b958eea4ac/s.webp>",
    publishedAt: "2023-09-13T19:30:07Z",
    content:
      "The deadline for Ford (F) - Get Free Report, General Motors (GM) - Get Free Report and Stellantis (STLA) - Get Free Report to reach a deal with the United Auto Workers union is fast approaching. If t… [+297 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Jeremiah Budin",
    title:
      "Lamborghini sends internet into a tailspin with viral image of its first-ever all-electric model: Thats a gorgeous car",
    description:
      "Why can't other brands make a really nice-looking EV SEDAN instead of all these clown cars they make now.",
    url: "<https://news.yahoo.com/lamborghini-sends-internet-tailspin-viral-210000603.html>",
    urlToImage:
      "<https://s.yimg.com/ny/api/res/1.2/gBqC6I7fLplHPNWGiRE6rw--/YXB>",
    publishedAt: "2023-09-12T21:00:00Z",
    content:
      "Lamborghinis have been some of the worlds most coveted luxury sports cars for decades, but the Italian company has shied away from the electric vehicle market until now. The company just unveiled a … [+2060 chars]",
  },
];

function ArticleList(){
  return (
    <div>
      {articles.map(article => (
       <ArticlePreview key={article.url} article={article}/>
      ))}
    </div>
  )
}

export default ArticleList