// import styled from 'styled-components'

const Wrapper = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  gap: 1rem;

  label {
    position: absolute;
    color: whitesmoke;
    text-transform: capitalize;
    font-size: 20px;
    top: 0;
    left: 0;
    transition: all 0.5s;
  }
  input {
    padding: 6px;
    padding-block: 9px;
    font-size: 20px;
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
      font-size: 14px;
      top: -10px;
      color: var(--primary-color);
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    border-bottom: 1px solid #fff;
    -webkit-text-fill-color: #fff;
    /* -webkit-box-shadow: 0 0 0px 1000px #000 inset; */
    transition: background-color 5000s ease-in-out 0s;
    padding: 6px;
    padding-block: 9px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: white;
    border-bottom: 1px solid #fff;
    outline: none;
  }
`

export default Wrapper
