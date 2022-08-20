import { jobs } from '../data';
import { JobType } from '../types';

export const getSortedJobsData = () => {
  type DataProp = JobType[];

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
  }) as DataProp;

  return data;
};

export const getAllJobSlugs = () => {
  type DataProp = {
    params: { id: string };
  }[];

  const data = [...jobs].map((job) => ({
    params: { id: job.id.toString() },
  })) as DataProp;

  return data;
};

export const getJobData = (id: string) => {
  type DataProp = JobType;

  const data = [...jobs].find(
    (job: { id: number }) => job.id.toString() === id
  ) as DataProp;

  return data;
};
