export const USER_STATE_CHANGED = 'USER_STATE_CHANGED';

// define our action function
export function userStateChanged(user) {
    return {
        type: USER_STATE_CHANGED, // required
        user: user ? user.toJSON() : null, // the response from Firebase: if a user exists, pass the serialized data down, else send a null value.
    };
}