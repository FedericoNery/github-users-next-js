import { NextApiRequest, NextApiResponse } from 'next';

export async function responseHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  endpoint: string
) {
  if (req.method === 'GET') {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
