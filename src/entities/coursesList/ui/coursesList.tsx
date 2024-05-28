import { ICourse } from "@/shared/types";
import "./coursesList.scss";
import { filterCoursesByTag } from "@/shared/lib/helpers.ts";

interface Props {
  data: ICourse[];
  currentTag: string;
}

export function CoursesList(props: Props) {
  const { data, currentTag } = props;
  const courses = filterCoursesByTag(data, currentTag);

  return (
    <ul className={"courses-list"}>
      {courses.map(course => (
        <li className={"courses-list_item"} key={course.id}>
          <div
            className={"courses-list_bg"}
            style={{ backgroundColor: course.bgColor }}
          >
            <img
              className={"courses-list_img"}
              src={course.image}
              width={144}
              height={144}
              alt={"Картинка курса"}
            />
          </div>
          <p className={"courses-list_title"}>{course.name}</p>
        </li>
      ))}
    </ul>
  );
}
