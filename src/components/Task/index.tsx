import { ReactNode, useState } from "react";
import classNames from "classnames";

//? styles
import * as Styles from "./styles";

//? images
import { Check, Trash } from "phosphor-react";

//? types
import { infoTask } from "../../App";

interface TaskProps {
  tasks: infoTask;
  onDeleted: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export function Task({ tasks, onDeleted, onCompleted }: TaskProps) {
  const { id, content, isCompleted } = tasks;

  const handleIsCompleted = () => {
    onCompleted(tasks.id);
  };
  const handleDelete = () => {
    alert(tasks.id);
    onDeleted(tasks.id);
  };

  return (
    <Styles.Container className={classNames({ checked: isCompleted })}>
      <div className="task-info">
        <button className="check-box" onClick={handleIsCompleted}>
          {isCompleted ? <Check /> : ""}
        </button>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
      <button className="remove" onClick={() => onDeleted(tasks.id)}>
        <Trash />
      </button>
    </Styles.Container>
  );
}
