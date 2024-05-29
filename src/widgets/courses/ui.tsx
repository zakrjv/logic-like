import { useEffect, useState } from "react";
import { FilterTags } from "@/features/filterTags";
import { CoursesList } from "@/features/coursesList";
import { getCourses } from "@/shared/api/base.ts";
import { filterCoursesByTag } from "@/shared/lib/helpers.ts";
import { ALL } from "@/shared/lib/contants.ts";
import { ICourse } from "@/shared/types";
import styles from "./styled.module.scss";

export function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [currentTag, setCurrentTag] = useState(ALL);
  const coursesByTag = filterCoursesByTag(courses);

  useEffect(() => {
    const getData = async () => {
      const res = await getCourses();
      setCourses(res);
    };
    getData();
  }, []);

  return (
    <section className={styles.courses}>
      {!courses.length ? (
        "No data"
      ) : (
        <>
          <FilterTags
            data={coursesByTag}
            currentTag={currentTag}
            setCurrentTag={setCurrentTag}
          />
          <CoursesList data={coursesByTag} currentTag={currentTag} />
        </>
      )}
    </section>
  );
}
