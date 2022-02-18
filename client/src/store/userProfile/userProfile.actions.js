export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const getUserProfile = (getUserProfile) => ({
  type: GET_USER_PROFILE,
  payload: getUserProfile,});

// export const fetchClient = (userData) => {
//   return (dispatch) => {
//     dispatch(fetchTeamsRequested());
//     fetch(`http://localhost:5000/api//customers/customer`, {
//       method: 'GET',
//     })
//       .then((response) => response.json())
//       .then(client => {
//         dispatch(clientProfileGetSuccess(userData));
//         console.log(client);
//       })
//   }
// }

export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const editUserProfile = (editUserProfile) => ({
  type: EDIT_USER_PROFILE,
  payload: editUserProfile,
});
