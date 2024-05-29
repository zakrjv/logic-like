import React from "react";
import { ICourse } from "@/shared/types";
import { getTagsList } from "@/shared/lib/helpers.ts";
import styles from "./styled.module.scss";

interface Props {
  data: ICourse[];
  currentTag: string;
  setCurrentTag: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterTags(props: Props) {
  const { data, currentTag, setCurrentTag } = props;
  const tags = getTagsList(data);

  const handleTagClick = (tag: string) => {
    setCurrentTag(tag);
  };

  return (
    <ul className={styles.tags}>
      <li
        className={`${styles.item} ${currentTag === "all" ? styles.itemCurrent : ""}`}
        onClick={() => handleTagClick("all")}
      >
        Все темы
      </li>

      {tags.map(tag => (
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
