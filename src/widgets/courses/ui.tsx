import { useEffect, useState } from "react";
import { FilterTags } from "@/features/filterTags";
import { CoursesList } from "@/features/coursesList";
import { getCourses } from "@/shared/api/base.ts";
import { groupCoursesByTags } from "@/shared/lib/helpers.ts";
import { TAG_ALL } from "@/shared/lib/contants.ts";
import { ICourse } from "@/shared/types";
import styles from "./styled.module.scss";

export function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [currentTag, setCurrentTag] = useState(TAG_ALL);
  const coursesByTag = groupCoursesByTags(courses);

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
