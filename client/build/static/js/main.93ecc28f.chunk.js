(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(57)},30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),l=n.n(c),o=n(6),s=n(7),i=n(9),u=n(8),m=n(10),d=n(63),f=n(64),p=n(62),h=n(61),b=n(12);n(30);n(31);var E=function(e){return r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.onclick,"aria-label":"test"},e.children)},v=n(11),g=n.n(v),k={runTests:function(){return g.a.get("/api/tests")},getBooks:function(){return g.a.get("/api/books")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)}};function y(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function j(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function N(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(50);function O(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}n(51);var w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:""},n.loadAPI=function(){},n.runTests=function(){k.runTests().then(function(e){n.setState({results:e})}).catch(function(e){return console.log(e)})},n.deleteDoc=function(e){k.deleteDoc(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.title&&n.state.author&&k.saveDOC({title:n.state.title,author:n.state.author,synopsis:n.state.synopsis}).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(j,null,r.a.createElement(N,{size:"md-6"},r.a.createElement("h4",null,"Test Dashboard"))),r.a.createElement(j,null,r.a.createElement(N,{size:"md-6"},r.a.createElement(E,{onclick:this.runTests},"run tests"),this.state.results.data?r.a.createElement("div",{className:"details-container"},r.a.createElement("kbd",{className:"details "},this.state.results.data)):r.a.createElement("span",null))))}}]),t}(a.Component),B=n(59);var D=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},T=(a.Component,{headers:{xhrFields:{withCredentials:!0}}}),x={loginUser:function(e){return g.a.post("/api/user/",e,T)},signup:function(e){return g.a.post("/api/user/signup",e,T)},authenticateUser:function(){return g.a.post("/api/user/authenticate/",T)}},I=n(60);a.Component,a.Component;var z=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(j,null,r.a.createElement(N,{size:"md-12"},r.a.createElement(D,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};n(55);var A=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand ",href:"/"},"psycrop API service"))};n(56);var F=function(e){return console.log(e.cpu),r.a.createElement("div",{className:e.cpu?"alert alert-info alert-dismissible":"alert alert-info alert-dismissible fadeOut",role:"alert"},"Running on core ",e.cpu,r.a.createElement("button",{type:"button",className:"close",onClick:e.onclick,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={authenticated:!1,loading:!1,ssr:!!e.ssr},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.state.ssr?d.a:f.a;return r.a.createElement(e,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(w,e)}}),r.a.createElement(h.a,{component:z})),(this.state.cpu,""),r.a.createElement(F,{cpu:this.state.cpu?this.state.cpu.data:"",onclick:this.removeInfo})))}}]),t}(r.a.Component);l.a.hydrate(r.a.createElement(P,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.93ecc28f.chunk.js.map