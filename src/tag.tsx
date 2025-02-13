import React from "react";
import cc from "./classnames";

interface TagProps {
  text: string;
  remove: any;
  disabled?: boolean;
  className?: string;
}

export default function Tag({ text, remove, disabled, className }: TagProps) {
  const handleOnRemove = e => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={cc("rti--tag", className)}>
      <span className="rti--tag__text">{text}</span>
      {!disabled && (
        <button
          type="button"
          onClick={handleOnRemove}
          aria-label={`remove ${text}`}
        >
          <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path
              d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        </button>
      )}
    </span>
  );
}
