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
