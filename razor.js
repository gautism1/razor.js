
function razor(class_name)
{
    return document.getElementsByClassName('content');
}
console.log(razor('container').length)

$razor.prototype.addClass =(new_class)=>
{

    this.classList.add(new_class);

}
$razor.prototype.removeClass =(deleted_class)=>
{

    this.classList.remove(deleted_class);

}

$razor.prototype.setState = (key,value,bool)=>
{
    if (bool == false) {
                        window.localStorage.setItem(key, JSON.stringify(value));
                    }
                    else sessionStorage.setItem(key, value);
}

 $razor.prototype.getState =(key,bool)=>
 {
    if (bool == false) {
                        return JSON.parse(window.localStorage.getItem(key));
                    }
                    else return sessionStorage.getItem(key);
 }

 $razor.prototype.setStyle =(obj)=>
{
    console.log(obj)
    document.getElementsByClassName(class_name).style = obj;
}








var $razor = function (class_name) {
    let doc = this.document;
    let response = {};
    response = {

        length: () => {
            let a = doc.getElementsByClassName(class_name);
            console.log(a);
            return a;
        },

        addClassName: (classAdded) => {
            var ele = document.getElementsByClassName(class_name);
            ele.classList.add(classAdded);
        },

        setState: (key, value, bool) => {
            if (bool == false) {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
            else sessionStorage.setItem(key, value);
        }
        ,
        getState: (key, bool) => {
            if (bool == false) {
                return JSON.parse(window.localStorage.getItem(key));
            }
            else return sessionStorage.getItem(key);
        }
        ,
        setStyle: (obj) => {
            console.log(obj)
            document.getElementsByClassName(class_name).style = obj;
        }
    }
    return response;

}
console.log($razor('content').length())
