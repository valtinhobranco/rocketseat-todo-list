import { ReactNode } from "react";
import { infoTask } from "../../App";

//? styles
import * as Styles from "./styles";

import { Task } from "../Task";
//? images
import ClipBoard from "../../assets/images/svg/clipboard.svg";

interface MainTaskProps {
  tasks: infoTask[];
  onDeleted: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export function MainTask({ tasks, onDeleted, onCompleted }: MainTaskProps) {
  const taskCountTotal = tasks.length;
  const taskCompleted = tasks.filter((task) => task.isCompleted).length;
  return (
    <Styles.Container>
      <header>
        <div className="task-count">
          <strong>
            Tarefas criadas
            <span>{taskCountTotal}</span>
          </strong>
        </div>
        <div className="task-count">
          <strong>
            Concluídas
            <span>
              {taskCompleted} de {taskCountTotal}
            </span>
          </strong>
        </div>
      </header>
      {tasks.length === 0 ? (
        <Styles.TaskContainer>
          <img src={ClipBoard} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </Styles.TaskContainer>
      ) : (
        <Styles.TaskItemsContainer>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                tasks={task}
                onDeleted={onDeleted}
                onCompleted={onCompleted}
              />
            );
          })}
        </Styles.TaskItemsContainer>
      )}
    </Styles.Container>
  );
}
