import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getPrices } from '../api';
import { setTickets } from '../redux/priceReducer';
import { REQUEST_DATE, SET_DATE,  LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_FINISH, LOGOUT_FINISH, INIT_USERDATA } from '../redux/types';
 

export default function* sagaWatcher() {

  yield takeEvery(REQUEST_DATE, sagaDate)
  yield takeLatest(LOGIN_REQUEST, watchLogin)
  yield takeLatest(LOGOUT_REQUEST, watchLogout)
  
}


export function* sagaDate( pay ) {
  yield put({
    type:SET_DATE,
    payload:pay.payload
  })

  const response = yield call(fetchTickets, pay.payload);

  

  yield put(setTickets(response))
}


async function fetchTickets(date){
  const response = await getPrices(date)
  return response.data
  
}

// side effect
function* watchLogin(action) {
  const { username, password } = action.payload;

  let userData = { username, password }

    const authValues = {
      apiToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRoYW5nIGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.RwCuXkEg2S1027iFOO3k59f8LFPXNdPrKjvAlLSzIo4",
        ...userData    };

    localStorage.setItem("auth", JSON.stringify(authValues));
  

  yield put({
    type: LOGIN_FINISH,
    payload: userData
  });
}

function* watchLogout(action) {
  localStorage.removeItem("auth");
  yield put({
    type: LOGOUT_FINISH
  });
}

export function* initUserData() {
  const userData = JSON.parse(localStorage.getItem("auth"));
  if (userData) {
    yield put({
      type: INIT_USERDATA,
      payload: userData
    });
  }
}

