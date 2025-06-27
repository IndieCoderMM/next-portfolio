declare type Profile = {
  fullName: string;
  bio: string;
  description: string;
  resumeURL: string;
};

declare type Technology = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

declare type Skill = {
  name: string;
  logoURL: string;
};

declare type SkillGroup = {
  id: string;
  title: string;
  imageURL: string;
  list: Skill[];
};
