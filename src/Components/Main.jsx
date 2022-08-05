import styled from 'styled-components';
import dateImg from '../Assets/Images/date.png'
import axios from 'axios'
import {useState, useEffect } from 'react'

function Main(){

    const [data, setData] = useState([])
    let searchName = "python"
    let startIndex = 0


    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}&startIndex=${startIndex}`)
        .then(res => setData(res.data.items))
    }, );

    console.log(data);



    return(
        <Wrapper>
            {/* {data} */}
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
                    <ul className='main-right_books'>
                   {
                     data?.map(row => {
                        return(
                            <li key={row.id} className='main-right'>
                                <div className='right-list'>
                                <img className='main-right-img' src={row.volumeInfo.imageLinks.smallThumbnail} alt="main img" />
                                <h3 className='main-right-heading'>{row.volumeInfo.title}</h3>
                                <p className='main-right-text'>{row.volumeInfo.authors}</p>
                                <p className='main-right-date'>{row.volumeInfo.publishedDate}</p>
                                <div className='main-right-btn-section'>
                                    <button className='main-right-bookmark'>Bookmark</button>
                                    <button className='main-right-info'>More Info</button>
                                </div>
                                <button className='main-right-read'>Read</button>
                                </div>
                                </li>
                        )
                    })
                   }
                   </ul>

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
    margin: 20px auto;
    gap: 1053px;
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

.main-right {
    margin-left: 35px;
    margin-top: 33px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 300px;
    height: 460px;
    list-style: none;
}

.main-right_books {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.right-list {
    padding: 13px 17px;
}

.main-right-img {
    padding: 18px 24px;
    height: 202px;
}

.main-right-heading {
    margin: 0;
    margin-top: 19px;
    margin-bottom: 2px;
    width: 250px;
    height: 45px;
}

.main-right-text {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #757881;
    font-family: 'Noto Sans';
    width: 250px;
}

.main-right-date {
    margin: 0;
    margin-bottom: 9px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #757881;
    font-family: 'Noto Sans';
}

.main-right-btn-section {
    display: flex;
    align-items: center;
}

.main-right-bookmark {
    padding: 10px 31px;
    background: #FFD80D;
    border: 0px solid #fff;
    border-radius: 4px;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    font-style: normal;
}

.main-right-info {
    margin-left: 7px;
    padding: 10px 31px;
    background: rgba(13, 117, 255, 0.05);
    border-radius: 4px;
    border: 0px solid #fff;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #0D75FF;
    font-style: normal;
}

.main-right-read {
    margin-top: 5px;
    padding: 10px 113px;
    background: #75828A;
    border-radius: 4px;
    border: 0px solid #fff;
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}
`