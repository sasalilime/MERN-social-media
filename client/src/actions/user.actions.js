import axios from "axios";


export const GET_USER = "GET_USER";


export const getUser = (userId) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${userId}`)
            .then((res) => {
                dispatch({type: GET_USER, playload: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    };
};