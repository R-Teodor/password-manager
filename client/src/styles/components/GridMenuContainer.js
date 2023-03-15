import styled from 'styled-components'

const Wrapper = styled.div`
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
`
export default Wrapper
