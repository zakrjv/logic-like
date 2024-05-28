import { ICourse } from "@/shared/types";

export function getTagsList(courses: ICourse[]): ICourse["tags"] {
  return Array.from(new Set(courses.flatMap(obj => obj.tags)));
}

export function filterCoursesByTag(courses: ICourse[], tag: string): ICourse[] {
  if (tag === "all") return courses;
  return courses.filter(obj => obj.tags.includes(tag));
}
