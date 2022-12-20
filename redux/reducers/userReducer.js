import { USER } from "./type"

const initialState = []
const userReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type){
        case USER:
            return payload
        default:
            return state
    }
    
}
export default userReducer;