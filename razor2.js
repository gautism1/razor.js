class Razor {
    constructor(class_name)
    {
        this.element=document.getElementsByClassName(class_name);
    }
}

Razor.prototype.setState = function (key, value, bool) {
    if (bool == false) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    else sessionStorage.setItem(key, value);
}

Razor.prototype.getState = function (key, bool) {
    if (bool == false) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    else return sessionStorage.getItem(key);
}

Razor.prototype.api = function (apis, obj) {
    let res = fetch(apis, obj);
    return res;
}
var razor = new Razor();

razor.setState("ram", "shyam", true)

