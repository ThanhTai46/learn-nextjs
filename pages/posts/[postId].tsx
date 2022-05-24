import { useRouter } from "next/router";

import { GetStaticPaths, GetStaticProps } from "next";
import { GetStaticPropsContext } from "next";

export interface PostDetailProps {}

const PostDetailPage = (props: PostDetailProps) => {
  const router = useRouter();
  return (
    <div>
      <h3>Post Detail Page</h3>
      <p>Query: {JSON.stringify(router.query)} </p>
    </div>
  );
};

export default PostDetailPage;
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { postId: 1 },
      },
      {
        params: { postId: 2 },
      },
      {
        params: { postId: 3 },
      },
    ],
  };
};
export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Get Static Props", context.params.postId);

  return {
    props: {
      posts: data,
    },
  };
};
