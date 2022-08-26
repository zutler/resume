export type UserDataType = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zipcode: string;
  };
  phone: string;
  website: string;
};

export type JobType = {
  id: number;
  date: { from: string; to: string | null };
  title: string;
  company: string;
  contentHtml: string;
};

export type AllJobsDataType = {
  id: number;
  date: { from: string; to: string };
  title: string;
  company: string;
  location: string;
}[];

export type SkillsType = {
  languages: string[];
  frameworks: string[];
  databases: string[];
  editors: string[];
  bundlers: string[];
  cms: string[];
  grids: string[];
  uiframeworks: string[];
  tools: string[];
}[];
