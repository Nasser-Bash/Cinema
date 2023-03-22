const intialvalue = {lang : 'en'}
export const Languages = (state = intialvalue,action)=>{
                switch (action.type) {
                    case 'English':
                        return {lang:action.data}; 
                    case 'Arabic':
                        return {lang:action.data}; 
                    default:
                        return state;
                } 
}