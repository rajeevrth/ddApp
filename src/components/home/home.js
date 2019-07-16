import React, { Component } from "react";
import APP from "../../const/const";
import Article from "./articles/article";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Space for Ad */}
        <section class="mw7 center">
          <h2 class="athelas ph3 ph0-l">{APP.APP_NAME}</h2>
          <Article />
        </section>
      </div>
    );
  }
}

export default Home;
