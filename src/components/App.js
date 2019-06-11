import React, { Component, Fragment } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Lucas Romagnoli",
        avatar:
          "https://avatars0.githubusercontent.com/u/20566858?s=400&u=ab6d27094e435dc147e736094f8cd4096081708d&v=4",
        time: "há 3 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Dandara Cardoso Barbosa",
        avatar:
          "https://scontent.fgyn3-2.fna.fbcdn.net/v/t1.0-9/58444074_2280965582002100_3064859001381453824_n.jpg?_nc_cat=106&_nc_oc=AQkZ1D-ECoxLZo9Qjj4nZbB9PmXBf1LChgkUM2LyLb87vMLEjRmF59LALdBNdQm9Ym1p2csS-eqD8pOxyiJr4BTs&_nc_ht=scontent.fgyn3-2.fna&oh=c65100f2ed8451c72ea2b72d367454de&oe=5D964FA7",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed,Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis  ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}
