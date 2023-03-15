import styled from 'styled-components'

const Wrapper = styled.section`
  width: 1000px;
  margin: 4rem auto;
  padding: 2rem;
  padding-top: 3rem;
  padding-bottom: 5rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: whitesmoke;
  .header {
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 400px;
  }

  .grid {
    width: 700px;
    padding-top: 3rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .utility-card {
    background-color: #1a2029;
    /* border: 1px solid whitesmoke; */
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 5px;
  }
  .icon-container {
    flex-shrink: 0;
    width: 90px;
  }
  .icon {
    width: 100%;
    object-fit: cover;
  }
  p {
    color: #808080;
  }
  @media (max-width: 1000px) {
    width: 600px;
  }
`
export default Wrapper
