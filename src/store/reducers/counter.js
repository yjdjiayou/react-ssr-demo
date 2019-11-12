import * as types from '../action-types';
let initState = {number:0};
export default function(state=initState,action){
   switch(action.type){
       case types.INCREMENT:
         return {number:state.number+1};
       default:
         return state;
   }
}