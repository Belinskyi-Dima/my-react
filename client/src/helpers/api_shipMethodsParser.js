
const api_shipMethodsParser = (data) => {

    return data.reduce((acc, item) => { 

        acc.push({
            value: `${item.name}`, 
            label: `${item.name}`, 
        })
        return acc

    }, []) 
} 


export default api_shipMethodsParser; 