const userReducer = (state = {}, action) => {
    if (action.payload === null || action.payload === undefined) {
        return state;
    }

    switch (action.type) {
        case "LOGIN":
            const x = Object.assign({}, state, {
                user: action.payload
            });
            return x.user
        default:
            return state;
    }
};

export default userReducer;
