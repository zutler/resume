import type { NextApiRequest, NextApiResponse } from 'next';
import { jobs } from '../../../data';

type ResponseData =
  | {
      id: number;
      date: string;
      title: string;
      contentHtml: string;
    }
  | string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { id } = req.query;
  const job = jobs.find(
    (job: { id: number }) => job.id.toString() === id
  ) as ResponseData;

  try {
    return res.status(200).json(job);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json(error as string);
  }
}
