import { ICourse } from "@/shared/types";
import { filterCoursesByTag } from "@/shared/lib/helpers.ts";
import styles from "./styled.module.scss";

interface Props {
  data: ICourse[];
  currentTag: string;
}

export function CoursesList(props: Props) {
  const { data, currentTag } = props;
  const courses = filterCoursesByTag(data, currentTag);

  return (
    <ul className={styles.courses}>
      {courses.map(course => (
        <li className={styles.course} key={course.id}>
          <div
            className={styles.head}
            style={{ backgroundColor: course.bgColor }}
          >
            <img
              className={""}
              src={course.image}
              width={144}
              height={144}
              alt={`Картинка курса ${course.name}`}
            />
          </div>
          <p className={styles.title}>{course.name}</p>
        </li>
      ))}
    </ul>
  );
}
