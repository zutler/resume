import { jobs } from '../data';

export const getSortedJobsData = async () => {
  type ResponseData =
    | {
        id: number;
        date: string;
        title: string;
        contentHtml: string;
      }[]
    | string;

  type DateType = {
    date: string;
  };

  // Sort posts by date
  const data = [...jobs].sort((a: DateType, b: DateType) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return data;
};

export async function getAllJobSlugs() {
  type ResponseData =
    | {
        id: string;
      }[]
    | string;

  const data = [...jobs].map((job) => ({
    params: { id: job.id.toString() },
  }));
  return data;
}

export async function getJobData(id: string) {
  type ResponseData =
    | {
        id: number;
        date: string;
        title: string;
        contentHtml: string;
      }
    | string;

  const data = [...jobs].find(
    (job: { id: number }) => job.id.toString() === id
  ) as ResponseData;

  return data;
}
