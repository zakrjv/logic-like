import { ICoursesByTag } from "@/shared/types";
import styles from "./styled.module.scss";

interface Props {
  data: ICoursesByTag;
  currentTag: string;
}

export function CoursesList(props: Props) {
  const { data, currentTag } = props;

  return (
    <ul className={styles.courses}>
      {data[currentTag].map(course => (
        <li className={styles.course} key={course.id}>
          <div
            className={styles.head}
            style={{ backgroundColor: course.bgColor }}
          >
            <img
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
