// import styled from 'styled-components'

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #262626; */

  .form-box {
    width: 70%;
  }
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 0.6px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    label {
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1.5px;
    }
    input {
      color: white;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 1px;
      padding: 8px 20px;
      border: 1px solid lightslategray;
      border-radius: 2px;
      background-color: #2f2c2c;
      width: 100%;
      /* background-color: #1a2029; */
    }
  }
  .icon-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    .icon-btn {
      background-color: transparent;
      color: white;
      border: none;
      padding: 0;
      margin: 0;
      .icon {
        height: 31px;
        width: 31px;
      }
      /* padding-block: 8px; */
    }
  }
`

export default FormWrapper
