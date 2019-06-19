import {FETCH_POST} from '../actions'

export default (state=[], action)=>{
   switch(action.type){
       case FETCH_POST:
           return action.response;
    default:
        return state;
   }
}