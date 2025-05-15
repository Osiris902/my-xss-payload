{}.__proto__.toString = function(){ alert(document.cookie) };
console.log(obj);  // may trigger your override
