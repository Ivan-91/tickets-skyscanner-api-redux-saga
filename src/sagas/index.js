import { apply, call, put, takeEvery } from 'redux-saga/effects';
import { getPrices } from '../api';
import { setDate, setTickets } from '../redux/priceReducer';
import { REQUEST_TICKETS, REQUEST_DATE, SET_DATE, SET_PRICES } from '../redux/types';
 

export default function* sagaWatcher() {

  yield takeEvery(REQUEST_DATE, sagaDate)
  
}


export function* sagaDate( pay ) {
  yield put({
    type:SET_DATE,
    payload:pay.payload
  })
  //const {clickdate} = payload;
    console.log('date saga run', pay.payload)

  const response = yield call(fetchTickets, pay.payload);
  yield console.log(response)

  

  yield put(setTickets(response))
}


async function fetchTickets(date){
  const response = await getPrices(date)
  console.log(date, 'здесь должна передаваться дата')
  return response.data
  
}