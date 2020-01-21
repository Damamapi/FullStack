function capital(s) {
    let first = s.charAt(0).toUpperCase();
    let rest = s.substr(1, s.length).toLowerCase();
    return first + rest;
}