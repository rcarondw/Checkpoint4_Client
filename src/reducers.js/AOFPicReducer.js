const AOFPicReducer = (state = "", action) => {
    switch(action.type){
        case 'SELECTED_PIC':
            return action.payload;
        default:
            return state;
    };
};

export default AOFPicReducer;