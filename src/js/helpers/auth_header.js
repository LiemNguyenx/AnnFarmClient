export function authHeader() {
    let token = JSON.parse(document.cookie.access_token);
    if (token) {
        return { 'Authorization': JSON.parse(document.cookie.token_type) + ' ' + user.token };
    } else {
        return {};
    }
}