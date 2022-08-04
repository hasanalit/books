import {NavLink} from 'react-router-dom';
import homeLogo from '../Assets/Images/home-logo.png'
import searchLogo from '../Assets/Images/search.png'
import sun from '../Assets/Images/sun.png'
import styled from 'styled-components';


function Header() {
    return (
        <Wrapper>
        <header className='header'>
        <img src={homeLogo} alt="logos" />
        <div className='search-section'>
          <img src={searchLogo} alt="search-logos" />
          <input
          type="text"
          className='search-input'
          placeholder='Search books' />
        </div>
        <div className='header_left'>
          <img src={sun} alt="sun-logo" />
          <button className='btn'>
          <NavLink className={'navLink'} to='/'>Logout</NavLink>
          </button>
        </div>
      </header>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
.navLink {
    padding: 11px 23px;
    background: #0D75FF;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
}

.header {
    display: grid;
    width: 90%;
    margin: 10px auto;
    /* gap: 1.8rem; */
    grid-template-columns: 226px auto 140px;
}

.search-section {
    display: flex;
    align-items: center;
    margin-left: 56px;
    margin-right: 105px;
    width: 670px;
}

.search-input {
    margin-left: 13px;
    color: #0000003D;
    border: 0px solid #fff;
}

.header_left {
    display: flex;
    align-items: center;
}

.btn {
    margin: 0px 15px;
    background: transparent;
    border: 0px;
}
`