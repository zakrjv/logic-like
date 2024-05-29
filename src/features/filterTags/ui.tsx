import React from "react";
import { ICoursesByTag } from "@/shared/types";
import styles from "./styled.module.scss";

interface Props {
  data: ICoursesByTag;
  currentTag: string;
  setCurrentTag: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterTags(props: Props) {
  const { data, currentTag, setCurrentTag } = props;

  const handleTagClick = (tag: string) => {
    setCurrentTag(tag);
  };

  return (
    <ul className={styles.tags}>
      {Object.keys(data).map(tag => (
        <li
          className={`${styles.item} ${currentTag === tag ? styles.itemCurrent : ""}`}
          key={tag}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
