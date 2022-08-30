import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  max-width: 100%;
  padding: 1.6rem;
  background: ${variables.colors.gray500};
  border-radius: ${variables.borderRadios};
  border: 2px solid ${variables.colors.gray400};
  gap: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .task-info {
    display: flex;
    gap: 1.6rem;
    flex: 1;
    .check-box {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      border: 2px solid ${variables.colors.blue300};
      transition: ${variables.transitions};
      cursor: pointer;
      &:hover {
        border: 2px solid ${variables.colors.blue500};
        background: ${`${variables.colors.blue300}40`};
      }
    }
    > .content {
      flex: 1;
      > p {
        color: ${variables.colors.gray200};
        transition: ${variables.transitions};
        font-size: 1.4rem;
      }
    }
  }

  &.checked {
    border: 2px solid ${variables.colors.gray500};

    .task-info {
      display: flex;
      gap: 1.6rem;

      .check-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${variables.colors.purple300};
        background: ${variables.colors.purple300};
        transition: ${variables.transitions};
        cursor: pointer;
        color: ${variables.colors.white};
        > svg {
          font-size: 1.4rem;
        }
        &:hover {
          border: 2px solid ${variables.colors.purple500};
          background: ${variables.colors.purple500};
        }
      }
      > .content {
        > p {
          color: ${variables.colors.gray300};
          transition: ${variables.transitions};

          text-decoration: line-through;
        }
      }
    }
  }

  > .remove {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: ${variables.transitions};
    > svg {
      font-size: 1.6rem;
      color: ${variables.colors.gray300};
    }

    &:hover {
      background: ${variables.colors.gray400};

      > svg {
        color: ${variables.colors.red500};
      }
    }
  }
`;
