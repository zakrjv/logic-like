import React from "react";
import { ICourse } from "@/shared/types";
import { getTagsList } from "@/shared/lib/helpers.ts";
import "./filterTags.scss";

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
    <ul className={"tags"}>
      <li
        className={`tags_item ${currentTag === "all" ? "tags_item--current" : ""}`}
        onClick={() => handleTagClick("all")}
      >
        Все темы
      </li>

      {tags.map(tag => (
        <li
          className={`tags_item ${currentTag === tag ? "tags_item--current" : ""}`}
          key={tag}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
