import { ICourse, ICoursesByTag } from "@/shared/types";
import { ALL } from "@/shared/lib/contants.ts";

export function filterCoursesByTag(courses: ICourse[]): ICoursesByTag {
  return courses.reduce(
    (acc, course) => {
      const tags = course.tags;

      tags.forEach(tag => {
        if (!acc[tag]) {
          acc[tag] = [];
        }
        acc[tag].push(course);
      });

      return acc;
    },
    { [ALL]: courses } as ICoursesByTag,
  );
}
