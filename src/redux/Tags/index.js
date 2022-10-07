import * as types from './action.type.js';

const INIT_STATE = {
    tag_name: "",
}

const TagReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.TAGNAME:
            return { ...state, tag_name: action.payload };

        default:
            return state;
    }
}

export default TagReducer;