export interface TProject {
  display: boolean;
  shortDescription: string;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  clientSide: {
    repositoryUrl: string;
    liveUrl: string;
  },
  serverSide: {
    repositoryUrl: string;
    liveUrl: string;
  },
  startingDate: string;
  endingDate: string;
  keyFeatures: string[];
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}


export interface TBlog {
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  images: string[];
  tags: string[];
  _id: string;
  __v: number;
}

export interface TSkill {
  name: string;
  description: string;
  icon: string;
  category: string;
  proficiency: string;
  yearsOfExperience: number;
  _id: string;
  __v: number;
}

export interface TPersonalInfo {
  name: string;
  age: number;
  maritalStatus: string;
  description: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    facebook: string;
  };
  shortPhoto: string;
  fullPhoto: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    website: string;
  }
  _id: string;
  __v: number;
}


export interface TEducation {
  degree: string;
  startDate: string;
  endDate: string;
  institution: {
    name: string;
    location: string;
    country: string;
  };
  description: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
  __v?: number;
}

export interface TExperience {
  post: string;
  startingDate: string;
  endingDate: string;
  company: {
    name: string;
    location: string;
    country: string;
  };
  workingDescription: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
}