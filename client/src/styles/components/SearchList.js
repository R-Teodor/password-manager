import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    color: #808080;
    :hover {
      background-color: #1a2029;
    }
  }
  h1 {
    color: white;
  }

  .item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: red;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  }
`

export default Wrapper
