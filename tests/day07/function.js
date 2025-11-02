function getgoto(url, timeout, wait) {
    console.log("".concat(url, " with ").concat(timeout, " add ").concat(wait));
}
//optional values should e decalred at last in the function, if not it woruld throw error
getgoto('google', 2000, "check");
getgoto("leaftaps", 2000);
