const AOFReducer = (state = false, action) => {
    switch(action.type){
        case 'AOF_CLICK':
            return !state;
        default:
            return state;
    };
};

export default AOFReducer;