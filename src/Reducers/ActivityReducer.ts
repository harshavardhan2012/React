import { DispatchActivityActionTypes,ACTIVITY_FAIL,ACTIVITY_LOADING,ACTIVITY_SUCCESS, Activity } from "../Actions/ActionTypes";

interface IActivityState
{
    loading:boolean
    activities?: Activity[]
}

const ActivityState:IActivityState={
    loading:false
}

const ActivityReducer = (state:IActivityState=ActivityState,action:DispatchActivityActionTypes):IActivityState => {
   switch(action.type)
   {
       case ACTIVITY_LOADING:
            return {
                loading:true
            };
        case ACTIVITY_FAIL:
            return {
                loading:false
            };
        case ACTIVITY_SUCCESS:
            return {
                loading:false,
                activities:action.payload
            }
        default:
            return state;
            
   }
}

export default ActivityReducer;