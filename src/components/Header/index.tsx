import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

import RocketToDoLogo from "../../assets/images/svg/rocket-to-do-logo.svg";

//? styles
import * as Styles from "./styles";
import classNames from "classnames";

//? icons
import { PlusCircle } from "phosphor-react";

interface HeaderProps {
  onAddTask: (taskContent: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState<string>("");
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <Styles.Container>
      <header>
        <img src={RocketToDoLogo} alt="" />
      </header>
      <Styles.FormContainer>
        <form onSubmit={handleAddTask}>
          <input
            value={title}
            onChange={handleChangeTitle}
            placeholder="Adicione uma nova tarefa"
            required
          />
          <button
            type="submit"
            className={classNames("button", { disabled: title === "" })}
          >
            <strong>
              Criar
              <PlusCircle />
            </strong>
          </button>
        </form>
      </Styles.FormContainer>
    </Styles.Container>
  );
}
