import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  background: ${variables.colors.gray700};
  position: relative;
  padding: 7.2rem 0 8rem;
`;

export const FormContainer = styled.div`
  position: absolute;
  bottom: calc(-5.4rem / 2);
  width: min(77.6rem, 100%);
  padding: 0 2rem;

  > form {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 1fr 90px;
    width: 100%;
    > input {
      padding: 1.6rem;
      height: 5.4rem;
      background: ${variables.colors.gray500};
      color: ${variables.colors.white};
      border-radius: ${variables.borderRadios};
      border: 0;
      resize: none;

      &:focus-visible {
        outline: ${variables.colors.purple300} solid 1px;
        box-sizing: border-box;
        border: none;
      }
      &::placeholder {
        color: ${variables.colors.gray300};
        font-size: 1.6rem;
      }
    }
    > .button {
      padding: 1.6rem;
      transition: ${variables.transitions};
      background: ${variables.colors.blue500};
      border-radius: ${variables.borderRadios};
      color: ${variables.colors.gray100};
      cursor: pointer;
      font-weight: bold;
      transition: ${variables.transitions};
      > strong {
        display: flex;
        justify-content: space-between;
        gap: 0.8rem;
        font-size: 1.4rem;
        font-weight: 700;
        > svg {
          font-size: 1.6rem;
        }
      }

      &:hover {
        background: ${variables.colors.blue300};
      }

      &.disabled {
        opacity: 0.8;
        cursor: no-drop;
        background: ${variables.colors.blue500};
        &:hover {
          background: ${variables.colors.blue500};
        }
      }
    }
  }

  @media (max-width: 425px) {
    bottom: calc(-5.4rem);
    > form {
      grid-template-columns: 1fr;
    }
  }
`;
