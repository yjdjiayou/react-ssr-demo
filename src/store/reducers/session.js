import * as types from '../action-types';
let initState = {
  user:null,//当前登陆的用户
  success:null,//成功的消息
  error:null//错误消息
};
export default function(state=initState,action){
   switch(action.type){
       case types.SET_SESSION:
         return action.payload;//整体覆盖
       default:
         return state;
   }
}