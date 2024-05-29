import { useEffect, useState } from "react";
import { FilterTags } from "@/features/filterTags";
import { CoursesList } from "@/features/coursesList";
import { getCourses } from "@/shared/api/base.ts";
import { ICourse } from "@/shared/types";
import "./styled.scss";

export function Courses() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [currentTag, setCurrentTag] = useState("all");

  useEffect(() => {
    const getData = async () => {
      const res = await getCourses();
      setCourses(res);
    };
    getData();
  }, []);

  return (
    <section className={"courses"}>
      <FilterTags
        data={courses}
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
      />
      <CoursesList data={courses} currentTag={currentTag} />
    </section>
  );
}
