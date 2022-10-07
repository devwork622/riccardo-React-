import * as types from './action.type.js';

export const GetTagName = (payload) => {
    return ({
        type: types.TAGNAME,
        payload
    });
}