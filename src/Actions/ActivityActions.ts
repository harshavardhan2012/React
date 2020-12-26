import { Dispatch } from "redux";
import axios from 'axios';
import {DispatchActivityActionTypes,ACTIVITY_FAIL,ACTIVITY_LOADING,ACTIVITY_SUCCESS} from './ActionTypes';


export const GetActivities = () => async (dispatch:Dispatch<DispatchActivityActionTypes>) => {
    try{
        dispatch({
            type:ACTIVITY_LOADING
        });

        const res = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');
        console.log(res.data)
        await delay(5000);
        dispatch({
            type: ACTIVITY_SUCCESS,
            payload:res.data
        });

    }
    catch(e)
    {
        dispatch({
            type:ACTIVITY_FAIL
        });
    }
}

function delay(seconds:number)
{
    return new Promise(resolve => setTimeout(resolve,seconds));
}