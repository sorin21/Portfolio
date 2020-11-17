import React from "react";
import axios from "axios";
// import Link from "next/link";
import { Link } from "../routes";

import BaseLayout from "../components/layouts/BaseLayout";

const Portfolio = ({ posts }) => {
  const getPosts = posts => {
    return posts.map(post => {
      return (
        <li key={post.id} style={{ fontSize: "20px" }}>
          {/* <Link href={`/portfolio/[id]`} as={`/portfolio/${post.id}`}> */}
          <Link route={`/portfolio/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <BaseLayout>
      <h1>Portfolio</h1>
      <ul>{getPosts(posts)}</ul>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = response.data;
  } catch (error) {
    console.log("errorrr", error);
  }

  return {
    posts: posts.slice(0, 10)
  };
};

export default Portfolio;
