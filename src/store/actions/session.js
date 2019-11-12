import * as types from '../action-types';
export default {
    login(user){
      return function(dispatch,getState,request){
        return request.post('/api/login',user).then(function(result){
           let data  = result.data;//响应体
           dispatch({
               type:types.SET_SESSION,
               payload:data.data
           });
        });
      }
    },
    logout(){
      return function(dispatch,getState,request){
        return request.get('/api/logout').then(function(result){
           let data  = result.data;//响应体
           dispatch({
               type:types.SET_SESSION,
               payload:data.data
           });
           //退出之后自动跳转到登陆页
           //dispatch(push('/login'));
        });
      }
    },
    getUser(){
      return function(dispatch,getState,request){
        return request.get('/api/user').then(function(result){
           let data  = result.data;//响应体
           dispatch({
               type:types.SET_SESSION,
               payload:data.data
           });
        });
      }
    }
}