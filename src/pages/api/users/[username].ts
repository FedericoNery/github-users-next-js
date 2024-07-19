import { responseHandler } from '@/lib/api-utils';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;
  responseHandler(req, res, `https://api.github.com/users/${username}`)
}
