import * as types from '../action-types';

let initState = {list: []};
export default function (state = initState, action) {
    switch (action.type) {
        case types.SET_HOME_LIST:
            return {list: action.payload};
        default:
            return state;
    }
}