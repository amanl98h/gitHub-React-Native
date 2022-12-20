import axios from "axios"
import { API_USER } from "../config"
import { USER, USER_FOLLOWER, USER_FOLLOWING, USER_REPOS } from "../reducers/type";

export const getUser =(name)=>{
    return async(dispatch)=>{
        const res = await axios.get(API_USER+name);
        dispatch({
            type: USER,
            payload: res
        })
    }
}

export const getFollower=(name)=>{
    return async(dispatch)=>{
        const res = await axios.get(API_USER+name+'/followers');
        dispatch({
            type: USER_FOLLOWER,
            payload: res
        })
    }
}

export const getFollowing=(name)=>{
    return async(dispatch)=>{
        const res = await axios.get(API_USER+name+'/following');
        dispatch({
            type: USER_FOLLOWING,
            payload: res
        })
    }
}

export const getRepos=(name)=>{
    return async(dispatch)=>{
        const res = await axios.get(API_USER+name+'/repos');
        dispatch({
            type: USER_REPOS,
            payload: res
        })
    }
}