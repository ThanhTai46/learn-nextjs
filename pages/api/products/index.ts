// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      name: string;
      body: string;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(404).json({ message: "method not support" });
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseJson = await response.json();

  res.status(200).json(responseJson);
}
