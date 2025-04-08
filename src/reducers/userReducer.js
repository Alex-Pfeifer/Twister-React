import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";

const initialState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'

}

export const userReducer = (user = initialState, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...user, avatar: action.payload || user.avatar};
        case CHANGE_NAME:
            return {...user, name: action.payload || user.name}
        default:
            return user;
    }
}