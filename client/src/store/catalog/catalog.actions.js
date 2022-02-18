export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const getCategoriesSuccess = (categoriesData) => {
   return {
      type: GET_CATEGORIES_SUCCESS,
      payload: categoriesData
   }
}