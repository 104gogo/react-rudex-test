export const LOGIN = 'LOGIN';

export function login(user) {
    return {
        type: LOGIN,
        user
    }
}
