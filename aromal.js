 class RazorNodeList {
    constructor(nodeList) {
      this.nodeList = nodeList;
    }
  
    get length() {
      return this.nodeList.length;
    }
    
    #forEachNode(callback) {
      this.nodeList.forEach(callback);
    }

    setStyle(style) {
      for (const [key, value] of Object.entries(style)) {
        this.#forEachNode((node) => {
          node.style[key] = value;
        });
      }
      return this;
    }
   
    addClass(className) {
      this.#forEachNode((node) => {
        node.classList.add(className);
      });
  
      return this;
    }
 
    removeClass(className) {
      this.#forEachNode((node) => {
        node.classList.remove(className);
      });
  
      return this;
    }
 
    on(event, callback) {
      this.#forEachNode((node) => {
        node.addEventListener(event, callback);
      });
    }

    off(event, callback) {
      this.#forEachNode((node) => {
        node.removeEventListener(event, callback);
      });
    }
   
    setProps(name, value) {
      if (typeof name !== 'string' || typeof value !== 'string') {
        throw new Error('Both name and value should be of type string');
      }
      this.#forEachNode((node) => {
        node.setAttribute(name, value);
      });
  
      return this;
    }
  
    value(inputValue) {
      if (typeof inputValue === 'string') {
        this.#forEachNode((node) => {
          node.value = inputValue;
        });
  
        return this;
      } else if (typeof inputValue === 'undefined') {
        return this.nodeList[0]?.value;
      } else {
        throw new Error(`Type of inputValue cannot be ${typeof inputValue}`);
      }
    }

  }
  
  function $razor(selector) {
    const nodeList = document.querySelectorAll(selector);
    return new RazorNodeList(nodeList);
  } 

  $razor.setState = function (key, value, useSessionStorage = false) {
    if (typeof key !== 'string' || typeof value !== 'string') {
      throw new Error('Both key and value should be of type string');
    }
    if (useSessionStorage) {
      sessionStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  };

$razor.getState = function (key, useSessionStorage = false) {

    if (typeof key !== 'string') {
      throw new Error('Key should be of type string');
    }
    if (useSessionStorage) {
      return sessionStorage.getItem(key);
    } else {
      return localStorage.getItem(key);
    }
  };

  $razor.api = function (url, options) {
    return fetch(url, options);
  };
  