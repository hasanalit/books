import styled from 'styled-components';
import dateImg from '../Assets/Images/date.png'

function Main(){
    return(
        <Wrapper>
            <main className='main'>
                <div className='main-top'>
                    <h5 className='main-top-heading'>Showing 18 Result(s)</h5>
                    <button className='main-top-btn'>
                        <img className='main-top-img' src={dateImg} alt="date-img" />
                        <p className='main-top-text'>Order by newest</p>
                    </button>
                </div>
                <div className='section'>
                    <div className='main-left'>
                        <h3 className='main-bookmark-heading'>Bookmarks</h3>
                        <p className='main-bookmark-text'>If you don’t like to read, you haven’t found the right book</p>
                    </div>
                    <div className='main-right'></div>
                </div>
            </main>
        </Wrapper>
    );
}

export default Main;

const Wrapper = styled.div`
.main-top {
    display: grid;
    width: 90%;
    margin: 20px 0px 20px 343px;
    gap: 800px;
    grid-template-columns: 142px 165px;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
}

.main-top-heading {
    margin: 0;
    margin-top: 6px;
}

.main-top-btn {
    display: flex;
    align-items: center;
    width: 165px;
    height: 34px;
    background: #A6B0C3;
    border-radius: 4px;
    border: 0px solid #fff;
}

.main-top-img {
    margin-left: 16px;
}

.main-top-text {
    margin: 0px 8px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

/* BOTTOM */
.section {
    display: grid;
    margin: 0 auto;
    /* gap: 800px; */
    width: 90%;
    grid-template-columns: 270px auto;
}

.main-left {
    box-sizing: border-box;
    min-height: 1038px;
    background: #FFFFFF;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
    padding: 25px;
}

.main-bookmark-heading{
    margin: 0;
    margin-bottom: 5px;
    width: 125px;
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
}

.main-bookmark-text {
    margin: 0;
    width: 190px;
    height: 44px;
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 14px;
    line-height: 155.6%;
    color: #000000;
}
`