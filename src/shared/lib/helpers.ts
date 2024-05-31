import { ICourse, ICoursesByTag } from "@/shared/types";
import { TAG_ALL } from "@/shared/lib/contants.ts";

export function groupCoursesByTags(courses: ICourse[]): ICoursesByTag {
  return courses.reduce<ICoursesByTag>(
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
    { [TAG_ALL]: courses },
  );
}
