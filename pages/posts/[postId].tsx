import { useRouter } from "next/router";
import React from "react";

export interface PostDetailPageProps {}

const PostDetailPage = (props: PostDetailPageProps) => {
  const router = useRouter();
  return (
    <div>
      <h3>Post Detail Page</h3>
      <p>Query: {JSON.stringify(router.query)} </p>
    </div>
  );
};

export default PostDetailPage;
