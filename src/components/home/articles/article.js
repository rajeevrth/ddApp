import React, { Component } from "react";
import LATEST_ARTICLES from "./articleList";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: LATEST_ARTICLES
    };
  }
  render() {
    return (
      <div>
        {this.state.articles.map(item => (
          <article class="pv4 bt bb b--black-10 ph3 ph0-l">
            <div>
              <div class="flex flex-column flex-row-ns">
                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                  <h1 class="f3 athelas mt0 lh-title">{item.HEADLINE}</h1>
                  <p class="f5 f4-l lh-copy athelas">{item.MESSAGE}</p>
                </div>
                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                  {/* <img
                src="http://mrmrs.github.io/photos/cpu.jpg"
                class="db"
                alt="Photo of a dimly lit room with a computer interface terminal."
              /> */}
                </div>
              </div>
              <p class="f6 lh-copy gray mv0">
                By <span class="ttu">{item.BY}</span>
              </p>
              <time class="f6 db gray">{item.DATE}</time>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default Article;
