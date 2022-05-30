// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
// type Data = {
//   name: string;
// };
export const config = {
  api: {
    bodyParser: false,
  },
};
const proxy = httpProxy.createProxyServer();
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    req.headers.cookie = "";
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        const { accesToken, expiredAt } = JSON.parse(body);

        console.log({ accesToken, expiredAt });
        console.log("res from proxied server:", body);
        res.end("my response to cli");
      });
    };
    proxy.once("proxyRes", () => {
      resolve(true);
    });

    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: false,
    });
  });
  // res.status(200).json({ name: "ALL PAth" });
}
