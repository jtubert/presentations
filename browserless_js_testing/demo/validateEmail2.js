// if you don't want to bother invoking rhino with -opt -1 you 
// can also set the optimization level before loading scripts
Packages.org.mozilla.javascript.Context.
    getCurrentContext().setOptimizationLevel(-1);




load("env_rhino.js");

//load html to test
window.location = "http://localhost:8888/slides/validateEmail2.html";