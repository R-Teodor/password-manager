// import styled from 'styled-components'

const Wrapper = styled.section`
  width: 400px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 10rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  h1 {
    text-align: center;
    color: antiquewhite;
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  fieldset {
    position: relative;
    display: flex;
    flex-direction: column;
    border: none;
    gap: 1rem;
    label {
      position: absolute;
      color: whitesmoke;
      text-transform: capitalize;
      font-size: 16px;
      top: 0;
      left: 0;
      transition: all 0.5s;
    }
    input {
      padding: 6px;
      padding-block: 9px;
      font-size: 16px;
      background: transparent;
      border: none;
      color: white;
      border-bottom: 1px solid #fff;
      outline: none;
      :hover {
        background: rgba(0, 0, 0, 0.2);
      }
      :focus ~ label,
      :valid ~ label {
        font-size: 12px;
        top: -10px;
        color: #03e9f4;
      }
    }
  }
  .btn {
    width: 300px;
    border: none;
    color: whitesmoke;
    margin: 0 auto;
    padding-block: 10px;
    background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
    border-radius: 4px;
    :hover {
      background-image: -webkit-linear-gradient(top, #6ea8de, #4a61d4);
    }
  }
  .btn-block {
  }
  a {
    cursor: pointer;
  }
`

export default Wrapper
