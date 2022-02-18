export const GET_FOOTER_PAGES = 'GET_FOOTER_PAGES'
export const getFooterPages = (page) => {
   return {
      type: GET_FOOTER_PAGES,
      payload: page
   }
}