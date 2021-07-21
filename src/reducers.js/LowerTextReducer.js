const LowerTextReducer = (state = "", action) => {
    switch(action.type){
        case 'LOWER_CHANGE':
            return action.payload;
        default:
            return state
    };
};

export default LowerTextReducer;