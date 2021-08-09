class Razors
{
    constructor(nodes)
    {
        this.nodes=nodes 
    }
   //LENGTH MISSING HOWAND WHY TO USE GETTER AND SETTER

   
   setStyle(style) {
    for (const [key, value] of Object.entries(style)) {
      this.nodes.foreach((node) => {
        node.style[key] = value;
      });
    }
    return this;
  }

  addClass(className) {
    this.nodes.foreach((node) => {
      node.classList.add(className);
    });

    return this;
  }

  removeClass(className) {
    this.nodes.foreach((node) => {
      node.classList.remove(className);
    });

    return this;
  }

  on(event, callback) {
    this.nodes.foreach((node) => {
      node.addEventListener(event, callback);
    });
  }
  
  off(event, callback) {
    this.nodes.foreach((node) => {
      node.removeEventListener(event, callback);
    });
  }

  setProps(name, value) {
   
    this.nodes.foreach((node) => {
      node.setAttribute(name, value);
    });

    return this;
  }

  //value function missing 

  // timer function is missing 

}


function razor(selector) {
    const nodeList = document.querySelectorAll(selector);
     return new Razor(nodeList);
  }

  razor.setState = function (key, value, storageType = false) {
    if (storageType) {
      sessionStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  };
  razor.getState = function (key, storageType = false) {
    if (storageType) {
      return sessionStorage.getItem(key);
    } else {
      return localStorage.getItem(key);
    }
  };
  razor.api = function (url, obj) {
    const promise= fetch(url, obj);
    return promise;
  };
  
  razor.setState("aS","mohan",true)
