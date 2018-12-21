export default function(state=null, action) {
    switch(action.type) {
        case 'DELETE_MOVIE': 
            return (action) => {
               return action.payload
            };
            break;
    }
    return state;
}