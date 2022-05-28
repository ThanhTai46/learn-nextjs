import React from "react";

const Test = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
export default Test;
