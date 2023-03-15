import styled from 'styled-components'

const Wrapper = styled.section`
  width: 1000px;
  min-height: 600px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 3rem;
  padding-bottom: 5rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: whitesmoke;
  position: relative;

  .header {
    /* position: relative; */
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
    button {
      border: none;
      background-color: transparent;
      color: whitesmoke;
    }
    .dropdown-menu {
      position: absolute;
      right: 0;
      bottom: -100px;
      background-color: #1a2029;
      padding-block: 1rem;
      padding-inline: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .hidden {
      display: none;
    }
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 2rem;
      font-weight: 500;
    }
  }
  .logo {
    width: 70px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  aside {
    display: ${(props) => (props.isDisplayed ? 'none' : 'block')};
    position: absolute;
    left: 0;
    top: 120px;
    bottom: 0;
    /* border: 1px solid rgba(255, 255, 255, 0.25); */
    padding: 2rem;

    height: 400px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      li > a {
        color: white;
        font-size: 18px;
        display: flex;
        gap: 1rem;
        align-items: center;
      }
    }
    .icon {
      font-size: 24px;
    }
  }

  .content-window {
    margin-left: ${(props) => (props.isDisplayed ? '0' : '25%')};
  }
`
export default Wrapper
