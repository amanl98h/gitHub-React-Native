import { USER_FOLLOWING } from "./type"

const initialState = []
const userFollowingReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type){
        case USER_FOLLOWING:
            return payload
        default:
            return state
    }
    
}

export default userFollowingReducer