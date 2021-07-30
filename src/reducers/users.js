import { RECEIVED_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVED_USERS:
            return {
                ...state,
                ...action.users
            }
            break;
    
        default:
            return state
            break;
    }
}