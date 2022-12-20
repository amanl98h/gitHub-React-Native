import { USER_REPOS } from "./type"

const initialState = []
const userReposReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type){
        case USER_REPOS:
            return payload
        default:
            return state
    }
    
}

export default userReposReducer