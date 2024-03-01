export interface IUser {
  age: number;
  DOB: Date;
  gender: "Male" | "Female";
  github: string;
  linkedin: string;
  twitter: string;
  username: string;
}

export const DATA: IUser[] = [
  {
    age: 25,
    DOB: new Date("1997-08-06"),
    gender: "Male",
    github: "https://github.com/john_doe123",
    linkedin: "https://www.linkedin.com/in/john_doe123",
    twitter: "https://twitter.com/john_doe123",
    username: "john_doe123",
  },
  {
    age: 22,
    DOB: new Date("1999-08-23"),
    gender: "Female",
    github: "https://github.com/katedee87",
    linkedin: "https://www.linkedin.com/in/katedee87",
    twitter: "https://twitter.com/katedee87",
    username: "katedee87",
  },
  {
    age: 27,
    DOB: new Date("1993-06-25"),
    gender: "Male",
    github: "https://github.com/jaret123",
    linkedin: "https://www.linkedin.com/in/jaret123",
    twitter: "https://twitter.com/jaret123",
    username: "jaret123",
  },
  {
    age: 22,
    DOB: new Date("1998-08-12"),
    gender: "Male",
    github: "https://github.com/jacob123",
    linkedin: "https://www.linkedin.com/in/jacob123",
    twitter: "https://twitter.com/jacob123",
    username: "jacob123",
  },
  {
    age: 25,
    DOB: new Date("1994-120-26"),
    gender: "Female",
    github: "https://github.com/jess123",
    linkedin: "https://www.linkedin.com/in/jess123",
    twitter: "https://twitter.com/jess123",
    username: "jess123",
  },
  {
    age: 21,
    DOB: new Date("1996-05-16"),
    gender: "Female",
    github: "https://github.com/jane_doe123",
    linkedin: "https://www.linkedin.com/in/jane_doe123",
    twitter: "https://twitter.com/jane_doe123",
    username: "jane_doe123",
  },
];
