import React from "react";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  const { blogName, logoImage, aboutText, articles } = blogData;
  return (

    <div className="App">
      <Header blogName={blogName} />
      <About logoImage={logoImage} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;