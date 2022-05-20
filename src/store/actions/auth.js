export const authUser = (data) => async (dispatch) => {
  // console.log(data)
  dispatch({ type: 'auth/authUser', payload: data })
}
