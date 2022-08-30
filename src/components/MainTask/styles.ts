import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  width: min(77.6rem, 100%);
  padding: 0 2rem;
  margin: 0 auto;
  > header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 9rem;
    border-bottom: 1px solid ${variables.colors.gray400};
    padding-bottom: 2.4rem;
    > .task-count {
      > strong {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        gap: 0.8rem;
        > span {
          background: ${variables.colors.gray400};
          border-radius: ${variables.borderRadios};
          padding: 0.2rem 0.8rem;
          font-size: 1.2rem;
          font-weight: bold;
          color: ${variables.colors.gray200};
        }
      }

      &:nth-child(1) {
        > strong {
          color: ${variables.colors.blue300};
        }
      }
      &:nth-child(2) {
        > strong {
          color: ${variables.colors.purple300};
        }
      }
    }
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  padding: 6.4rem;

  > p {
    text-align: center;
  }
`;

export const TaskItemsContainer = styled.div`
  display: grid;
  gap: 1.2rem;
  margin: 2.4rem 0;
`;
