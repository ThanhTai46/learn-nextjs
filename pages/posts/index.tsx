import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

export interface PostListPageProps {
  posts: any[];
}
const PostListPage = ({ posts }: PostListPageProps) => {
  return (
    <div>
      Post List Page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};
