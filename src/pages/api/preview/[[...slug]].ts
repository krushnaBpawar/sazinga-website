import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.slug as string[];
  const destination = query ? "/" + query.join("/") : "/";
  res.setDraftMode({ enable: true });
  res.writeHead(307, { Location: destination });
  res.end();
}
