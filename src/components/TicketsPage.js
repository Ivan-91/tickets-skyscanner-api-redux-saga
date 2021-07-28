import React, { useEffect } from 'react'
import styled from 'styled-components'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import plane from '../assets/plane.png'
import like from '../assets/like.png'
import dislike from '../assets/unlike.png'
import morearrow from '../assets/morearrow.png'
import arrow1 from '../assets/arrow1.png'

import logoutIcon from '../assets/log-out.png'
import ellipse from '../assets/Ellipse.png'
import Scrollbar from './ScrollBar'
import { useDispatch, useSelector } from 'react-redux'
import FlightDatePicker from './DatePicker'
import { REQUEST_DATE, LIKE, DISLIKE, IS_LIKED, LOGOUT_REQUEST } from '../redux/types'
import isAuth from '../useAuthStatus'
import { formatDate } from '../helpers/date-format'
//import { useAuthStatus } from '../useAuthStatus'






const TicketsPage = (props) => {

  const {tickets, likedItems} = useSelector(state => state.tickets)

  const {date} = useSelector(state => state.setDate)
  const dispatch = useDispatch()

    useEffect(() => {

      (isAuth) ? dispatch({type: REQUEST_DATE, payload: '2021-09-01'}) : console.log('dkl')
      
          
    }, [dispatch])

    const logOut = () => {
      dispatch({ type: LOGOUT_REQUEST });
    };



    const setLike = (ticketId) => {
      dispatch({
        type:LIKE,
        id: ticketId
      })
      dispatch({
        type: IS_LIKED,
        isLiked: true,
        id: ticketId
      })
    }
    const setDisLike = (ticketId) => {
      dispatch({
        type:DISLIKE,
        id: ticketId
      })
      dispatch({
        type: IS_LIKED,
        isLiked: false,
        id: ticketId
      })
    }

    



    if(!isAuth) {
      props.history.push("/login");
         window.location.reload();
    }
      
    return (
        <>
                  <Logout onClick={logOut} href='/login'>
            <h1>Выйти</h1>
            <div><img src={logoutIcon} alt='img'/></div>
            
            </Logout>
      <Container>
        <Wrapper>
          <Title>
            <div><h1>Вылеты</h1></div>
            <Image><img src={morearrow} alt='->'/></Image>
            <div><h1>SVO - JFK</h1></div>
            
            <FlightDatePicker/>
          </Title>

          <Slider>
              <Image><img src={img1} alt='img'/></Image>
              <Image><img src={img2} alt='img'/></Image>
              <Image><img src={img3} alt='img'/></Image>
              <Image><img src={img1} alt='img'/></Image>
              
              

          </Slider>
          <Text>
          <h2>Добавлено в Избранное:&nbsp;&nbsp;</h2><h1>{`${likedItems.length}`}</h1> <h2>&nbsp;рейсов</h2>
          </Text>
          <Scrollbar 
            style={{ width: '100%', height: 500 }}
            
            >
                {!tickets.Quotes ? <div>no tickets </div>: tickets.Quotes.map((el, key)=><div key={el.QuoteId}>
        <Race>
            <Icon>
            <img src={plane} alt='img'/>
            </Icon>
            <Info>
                <h1>Moscow (SVO) <img src={arrow1} alt='->'/> New York City (JFK)</h1>
                <h2>{formatDate(date)} &mdash; {el.QuoteDateTime.slice(-8, -3)}</h2>
                <h2>{tickets.Carriers[el.QuoteId-1].Name}</h2>
            </Info>
            <PriceContainer>
                {likedItems.some(id=>id===el.MinPrice) ? <Like onClick={()=> setDisLike(el.MinPrice)} > <img src={like} alt='img'/>  </Like>
                          : <Like onClick={()=> setLike(el.MinPrice)} > <img src={dislike} alt='img'/>  </Like>
              }
                <Price>
                    <h3>Price: </h3>
                    <h4>{el.MinPrice}</h4>
                </Price>


            </PriceContainer>
        </Race>
        <Border></Border>
        </div>            
                )}
        

        
      </Scrollbar>
        </Wrapper>
      </Container>
      </>
    );
}

const Logout = styled.a`
    
    color: #1157A7;
    display: flex;
    justify-content: flex-end;
    h1{
        font-weight: 400;
        margin-right: 20px;
        font-size: 20px;
    line-height: 22px;
    }
    margin-right: 31px;
    margin-top: 26px;
    text-decoration: none

`

const Wrapper = styled.div`
position: relative;
  padding: 70px 40px 54px 40px;
  color: #424242;
  ::after {
    content: '';
    position: absolute;
width: 10px;
height: 149px;
right: 40px;
top: 131px;

background: linear-gradient(270deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 83.85%);}
::before {
    content: '';
    position: absolute;
width: 10px;
height: 149px;
left: 40px;
top: 131px;

background: linear-gradient(-270deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 83.85%);}



`


const Container = styled.div`
margin:auto;
width: 680px;
height: 895px;
margin-top: 70px;


background: #FFFFFF;
box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
border-radius: 20px;
`

const Title = styled.div`
  height: 38;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  h1 {
    font-size: 32px;
    line-height: 37px;
  }
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 22px;
    color: #1157a7;
  }
  align-items: center;
`;

const Slider = styled.div`
//position: relative;
height: 180px;
margin-top: 24px;
    display: flex;
    //align-items: flex-start;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    
  }
  
`

const Image = styled.div`
margin-right: 2px;
margin-left: 2px;
:hover{
  box-shadow: 0px 4px 0px #99A0A3;
}
`
const Text = styled.div`
display: flex;
    font-weight: 300;
font-size: 17px;
line-height: 22px;
margin-left: 10px;
h1{
  font-weight: 700;
font-size: 17px;
line-height: 22px;
color: #1157A7;
/* or 129% */

letter-spacing: -0.408px;
}
h2{
  font-weight: 300;
font-size: 17px;
line-height: 22px;
/* or 129% */

letter-spacing: -0.408px;
}
`

const Race = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    margin-top: 20px;
    margin-left: 19px;
    
h1 {
    font-weight: 300;
    font-size: 17px;
    line-height: 22px;
  }
  h2 {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
  }
  h3 {
    font-weight: 300;
    font-size: 11px;
    line-height: 22px;
    margin-top: 3px;
  }
  h4{
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    margin-left: 8px;
    
  }
  h5{
    color: whitesmoke;
    //font-weight: 300;
  }

`

const Border = styled.div`
margin-top: 20px;
    width: 580px;
height: 1px;
background: rgba(135, 135, 135, 0.2);
border-radius: 8px;
transform: matrix(1, 0, 0, -1, 0, 0);
`

const Icon = styled.div`
    background-image: url(${ellipse});
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 24px;
`

const Info = styled.div`
  margin-right: 69px;
`
const Price = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    margin-top: 22px;
`
const PriceContainer = styled.div`
    
    
`
const Like = styled.div`
    margin-left: 63px;
    height: 18px;
    cursor: pointer;
`


export default TicketsPage
