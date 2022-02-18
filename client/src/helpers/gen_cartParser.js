
import ls_getter from './ls_getter';




const gen_cartParser = (obj_to_update, operation) => {
    
        const ls_products = ls_getter(); 

        const { id: new_id, size: new_size } = obj_to_update; 
        const n_size = new_size[0]; 
     
        let new_products = [];  

    

        if (ls_products.length === 0) {

            new_products.push(obj_to_update);
            return new_products; 
        }



        if (operation === 'add') {

            if (ls_products.find(item => item.id === new_id) !== undefined) {
                ls_products.forEach(item => {

                    if (item.id === new_id) {


                        let s = item.size.find(i => i.name === n_size.name); 
                        let sl = item.size.filter(i => i.name !== n_size.name); 

                        if (s === undefined) {
                            new_products.push({
                                id: item.id, 
                                size: [...item.size, n_size], 
                            });  

                        } else { 
                            new_products.push({
                                id: item.id, 
                                size: [...sl, {name: s.name, quantity: s.quantity + 1}], 
                            }); 

                        } 
                    } else {
                        new_products.push(item);
                    }
                })

                return new_products; 

            } else {

                ls_products.push(obj_to_update); 
                return ls_products; 
            }
        }



        if (operation === 'del') {
        
            if (ls_products.find(item => item.id === new_id) !== undefined) {
                ls_products.forEach(item => { 

                    let count = item.size.reduce((acc, i) => acc + Number(i.quantity), 0);

                    if (item.id === new_id && count >= 2) { 

                        item.size.forEach(i => {
                            if (i.name === obj_to_update.size[0].name) {
                                i.quantity = Number(i.quantity) - 1; 
                                new_products.push(item); 
                            }           
                        });
                    } else {
                        new_products.push(item);
                    }
                }) 

                return new_products; 
            } else {

                return ls_products; 
            }
        }



        if (operation === 'delWhole') { 

            let leftp = ls_products.filter(i => i.id !== obj_to_update.id);

            ls_products.forEach(item => {
                if (item.id === obj_to_update.id) {

                    if (item.size.length > 1) {
                        let sl = item.size.filter(i => i.name !== n_size.name); 
                        new_products = [...leftp, {id: item.id, size: sl}]; 

                    } else {
                        if (leftp.length > 0) {
                            new_products = leftp;
                        } else {
                            new_products = []; 
                        }
                    }
                }
            })

            return new_products;
        }
}

export default gen_cartParser; 