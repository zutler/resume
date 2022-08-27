import { education } from '../data/index';
import { EducationDataType } from '../types';

export const getSortedEducationData = () => {
  type DateType = {
    date: { from: string; to: string };
  };

  // Sort posts by date
  const data = [...education].sort((a: DateType, b: DateType) => {
    if (a?.date?.to < b?.date?.to) {
      return 1;
    } else {
      return -1;
    }
  }) as EducationDataType;

  return data;
};

export const getEducationSlugs = () => {
  type DataProp = {
    params: { id: string };
  }[];

  const data = [...education].map(item => ({
    params: { id: item.id.toString() },
  })) as DataProp;

  return data;
};
