import { jobs } from '../data';

const HOST = process.env.HOST;

export const getSortedJobsData = async () => {
  // const res = await fetch(`${HOST}/api/jobs`);
  // const data = await res.json();
  const data = [...jobs];

  type DateType = {
    date: string;
  };

  // Sort posts by date
  return data.sort((a: DateType, b: DateType) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export async function getAllJobSlugs() {
  // const res = await fetch(`${HOST}/api/jobs`);
  // const data = await res.json();
  const data = [...jobs];

  return data.map((job: { id: number }) => {
    return {
      params: { id: job?.id?.toString() },
    };
  });
}

export async function getJobData(id: string) {
  // const res = await fetch(`${HOST}/api/jobs/${id}`);
  // const data = await res.json();
  const data = [...jobs];
  type ResponseData = {
    id: number;
    date: string;
    title: string;
    contentHtml: string;
  };
  const job = jobs.find(
    (job: { id: number }) => job.id.toString() === id
  ) as ResponseData;

  return job;
}
