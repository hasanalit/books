import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


function Home() {
  return (
    <Wrapper>
    <h1>Xush kelibsz!</h1>
    <button className='btn'>
      <NavLink className={'navLink'} to='/'>Behind</NavLink>
    </button>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
.navLink {
    text-decoration: none;
    color: #000;
}
`