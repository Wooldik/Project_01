import { GET_LOGIN } from './../constans'


export const setLoginAction = (LoginIn) => {
	return (dispatch) => {

		dispatch({ type: GET_LOGIN, payload: LoginIn })
	}
}