const HOST = process.env.HOST;

export const getSortedJobsData = async () => {
  const res = await fetch(`${HOST}/api/jobs`);
  const data = await res.json();

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
  const res = await fetch(`${HOST}/api/slugs`);
  const data = await res.json();

  return data.map((job: { id: string }) => {
    return {
      params: { id: job.id },
    };
  });
}

export async function getJobData(id: string) {
  const res = await fetch(`${HOST}/api/jobs/${id}`);

  const data = await res.json();
  return data;
}
