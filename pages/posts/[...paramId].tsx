import { useRouter } from "next/router";
import React from "react";

export interface paramIdProps {}

const paramId = (props: paramIdProps) => {
  const router = useRouter();
  return (
    <div>
      <h3>Post paramId Page</h3>
      <p>Query: {JSON.stringify(router.query)} </p>
    </div>
  );
};

export default paramId;
