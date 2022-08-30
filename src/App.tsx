import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//? components
import { Header } from "./components/Header";
import { MainTask } from "./components/MainTask";

//? styles
import * as Styles from "./styles";

//? types
export interface infoTask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [taskItems, setTaskItems] = useState<infoTask[]>([]);

  const addTaskItems = (taskContent: string) => {
    setTaskItems([
      ...taskItems,
      {
        id: uuidv4(),
        content: taskContent,
        isCompleted: false,
      },
    ]);
  };

  function removeTaskItem(taskId: string) {
    const selectTask = taskItems.filter((task) => task.id !== taskId);
    setTaskItems(selectTask);
  }
  function toggleTaskCompleted(taskId: string) {
    const selectTask = taskItems.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskItems(selectTask);
  }
  return (
    <Styles.Container>
      <Header onAddTask={addTaskItems} />
      <MainTask
        tasks={taskItems}
        onDeleted={removeTaskItem}
        onCompleted={toggleTaskCompleted}
      />
    </Styles.Container>
  );
}
