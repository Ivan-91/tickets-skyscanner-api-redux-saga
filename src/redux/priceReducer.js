import { getPrices } from "../api"
import { updateObjectInArray } from "../helpers/object-helper"
import { REQUEST_TICKETS, SET_DATE, SET_PRICES, REQUEST_DATE, LIKE, DISLIKE, IS_LIKED } from "./types"

const initialState = {

        tickets:[],
        date: '2021-09-01',
        likedItems: []
        
    
    
}
export const setTicketsReducer = (state=initialState, action) => {
        switch (action.type) {
                case IS_LIKED:
                        return {
                                ...state,
        likedItems: action.isLiked===true?[...state.likedItems, action.id] 
        : state.likedItems.filter(id=>id!=action.id)
                        }
                
               

        case SET_PRICES:
                return {...state, tickets:action.tickets}
        
        default: return state
}
}
export const setDateReducer = (state=initialState, action)=>{
        if(action.type=== SET_DATE){
                return {...state, date:action.payload}
        }
        return state
}

export const setLikeReducer = (state=initialState, action)=>{
        switch (action.type) {
                case IS_LIKED:
                        return {
                                ...state,
        likedItems: action.isLiked===true?[...state.likedItems, action.id] 
        : state.likedItems.filter(id=>id!=action.id)
                        }
                
                default: return state
}
}
        

//export const setDate = (date)=> ({type:SET_DATE, date})
export const setTickets = (tickets) => ({type:SET_PRICES, tickets})
// export const getPricesThunk = () => (dispatch) => {
//         getPrices.then((response)=> {
//     dispatch(setPrices(response.data.Quotes))
//     console.log('woking thunk', response.data.Quotes)
//         }).catch((error)=> {
//                 console.error(error);
//         });

// }

export const requestPrices = () =>({type: REQUEST_TICKETS})
//export const requestDate = (date) =>({type: REQUEST_DATE, date})