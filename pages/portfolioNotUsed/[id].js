import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      post = res.data;
    } catch (e) {
      console.error(e);
    }

    return { portfolio: post };
  }

  render() {
    const { portfolio } = this.props;
    // console.log("this.props.router", this.props.router);
    return (
      <BaseLayout>
        {/* <h1>Portfolio page with id {this.props.router.query.id}</h1> */}
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
