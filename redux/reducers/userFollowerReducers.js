import { USER_FOLLOWER } from "./type"

const initialState = []
const userFollowerReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type){
        case USER_FOLLOWER:
            return payload
        default:
            return state
    }
    
}
export default userFollowerReducer