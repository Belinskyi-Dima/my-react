export const GET_USER_PAGES = 'GET_USER_PAGES'
export const getUserPages = (page) => {
   return {
      type: GET_USER_PAGES,
      payload: page
   }
}