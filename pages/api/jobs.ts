import type { NextApiRequest, NextApiResponse } from 'next';
import { jobs } from '../../data';

type ResponseData =
  | {
      id: number;
      date: string;
      title: string;
      contentHtml: string;
      params: { id: string };
    }[]
  | string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    return res.status(200).json(jobs as ResponseData);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json(error as string);
  }
}
