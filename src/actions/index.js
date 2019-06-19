import jsonPlaceholder from '../apis/jsonPlaceholder'

export const FETCH_POST = 'FETCH_POST';

export const fetchPost = ()=> async dispatch=>{
    const response = await jsonPlaceholder.get('./posts')
    
    dispatch({type:FETCH_POST,response:response})
};