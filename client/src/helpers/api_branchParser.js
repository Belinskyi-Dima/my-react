
const api_branchParser = (data) => {

    if (data === undefined || data === null) {
        return [{
            value: 'N',
            label: 'No values',
      }]
    } else {
        return data.reduce((acc, item) => { 

            acc.push({
                value: `${item.num}`, 
                label: `${item.num}  ${item.city.ru} ${item.street.ru} ${item.street_number}`
            })
            return acc

        }, []) 
    } 
} 


export default api_branchParser; 