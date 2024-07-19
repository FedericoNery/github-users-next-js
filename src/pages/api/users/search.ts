import { responseHandler } from '@/lib/api-utils';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { term } = req.query;
  responseHandler(req, res, `https://api.github.com/search/users?q=${term}`);
}
