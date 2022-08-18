import type { NextApiRequest, NextApiResponse } from 'next';
import { jobs } from '../../data';

type ResponseData =
  | {
      id: string;
    }[]
  | string;

const slugs = [...jobs.map((job) => ({ id: job?.id?.toString() }))];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    return res.status(200).json(slugs as ResponseData);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json(error as string);
  }
}
