

export default function countNestedItems (obj) {

    if(typeof obj !== 'object'){
        return 'Please enter a valid object!'
    }

    const newObj = {};

    for(let key in obj){
        if(typeof obj[key] === 'object'){

            if(!Array.isArray(obj[key])){
                typeof newObj['object'] === 'undefined' ? newObj['object'] = 1 : newObj['object'] = (newObj['object'] + 1)
            } else typeof newObj['array'] === 'undefined' ? newObj['array'] = 1 : newObj['array'] = (newObj['array'] + 1)
       

            const nestObj = (countNestedItems(obj[key]))
           

            for (let key in nestObj) {
                if (typeof newObj[key] === 'undefined') {
                    newObj[key] = 0;
                } 
                newObj[key] += nestObj[key]
                
                
            }

        } 
        else {
            const newItem = typeof obj[key]
            typeof newObj[newItem] === 'undefined' ? newObj[newItem] = 1 : newObj[newItem] = (newObj[newItem] + 1)
        }

    }

    return newObj

}
