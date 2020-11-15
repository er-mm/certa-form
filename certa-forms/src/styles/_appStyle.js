import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    > form {
      width: 80%;
      > button {
        width: 100%;
      }
    }
  }

  > section:first-child {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    > section {
      width: 400px;

      > form {
        > button {
          width: 95%;
        }
      }
    }

    > section:first-child {
      margin-right: 80px;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const FormWrapper = styled.section``;

