
import './App.css';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom'
import Login from './Page/Login';
import Home from './Components/Home';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Components/Home' element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`
