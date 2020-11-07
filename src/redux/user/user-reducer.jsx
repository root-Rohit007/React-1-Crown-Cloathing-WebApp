import {UserActionTypes} from './user.types'
 //setting up intitial state of reducer

const INITIAL_STATE = {
    currentUser : null
}


//If state is never initiallised  
//Then it will be assigned to initial state
const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        
        case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser : action.payload
            }

        default : 
            return state
        // If action dosent matches to our case then we will return state as it is
    }
}


export default userReducer;