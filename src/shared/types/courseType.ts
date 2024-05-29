export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface ICoursesByTag {
  [tag: string]: ICourse[];
}
