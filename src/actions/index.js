import jsonPlaceholder from '../apis/jsonPlaceholder'

export const FETCH_POST = 'FETCH_POST';
export const FETCH_USER = 'FETCH_USER';

export const fetchPost = ()=> async dispatch=>{
    const response = await jsonPlaceholder.get('./posts')
    
    dispatch({type:FETCH_POST,response:response.data})
};



export const fetchUser = (id) => async dispatch=> {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: FETCH_USER, response: response.data});
};