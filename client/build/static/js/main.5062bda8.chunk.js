(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";var n=a(7),l=a(8),r=a(11),s=a(9),c=a(12),i=a(0),o=a.n(i),m=a(61),u=a(62),p=a(63),d=a(64),E=a(6),h=a.n(E),g={runTests:function(){return h.a.get("/api/tests")},callPost:function(e){var t=e?e.split(","):[""];return t=t.map(function(e){return e.trim()}),h.a.post("/api/images",{images:t})},getBooks:function(){return h.a.get("/api/books")},getBook:function(e){return h.a.get("/api/books/"+e)},deleteBook:function(e){return h.a.delete("/api/books/"+e)},saveBook:function(e){return h.a.post("/api/books",e)}};function f(e){var t=e.classes,a=e.fluid,n=e.children;return o.a.createElement("div",{className:"".concat(t," container").concat(a?"-fluid":"")},n)}function b(e){var t=e.fluid,a=e.children,n=e.extraClass;return o.a.createElement("div",{className:"row".concat(t?"-fluid":""," ").concat(n||"")},a)}function v(e){var t=e.size,a=e.children,n=e.extraClass,l=e.ref;return o.a.createElement("div",{ref:l,className:t?t.split(" ").map(function(e){return"col-"+e}).join(" ")+" ".concat(n||""):" ".concat(n||"")},a)}a(50);var y=function(e){return console.log(e.cpu),o.a.createElement("div",null,o.a.createElement("hr",{className:"hr"}))};var k=function(){return o.a.createElement(b,{extraClass:"jumbo"},o.a.createElement(v,{size:"md-6",extraClass:"order-last order-md-first"},o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("strong",{className:"page-headline"},"psyKrop API")," ",o.a.createElement("br",null)," Is a non opinionated non bias A.I that returns insight about images, primarily an ",o.a.createElement("em",null,"Aesthetic balance score"),"."),o.a.createElement("p",null)),o.a.createElement("p",null),o.a.createElement("h4",null,"Base URL"),o.a.createElement("p",null,"Make all API calls to "),o.a.createElement("div",{className:"url"},"https://psykrop-api.herokuapp.com/")),o.a.createElement(v,{extraClass:"text-right pt-1 ",size:"md-6"},o.a.createElement("div",null,o.a.createElement("a",{href:"https://coveralls.io/github/ronerlih/psykrop-api?branch=master"},o.a.createElement("img",{src:"https://coveralls.io/repos/github/ronerlih/psykrop-api/badge.svg?branch=master",alt:"Coverage Status"})),o.a.createElement("img",{src:"https://api.travis-ci.com/ronerlih/psykrop-api.svg?branch=master",alt:"build badge - contiues deployment"}),o.a.createElement("span",null," "),o.a.createElement("img",{src:"https://img.shields.io/badge/release-alpha-cornflowerblue",alt:"alpha badge"})),o.a.createElement("div",{className:"pt-1"},o.a.createElement("a",{href:"https://www.psykrop.com/",target:"_black"},"About psyKrop")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://apps.apple.com/in/app/psykrop/id1398529702",target:"_black"},"iOS app")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://www.psykrop.com/try-on-web.html",target:"_black"},"Web widget"))))},R=a(25);function w(){return o.a.createElement("div",null,o.a.createElement(b,null,o.a.createElement(v,{extraClass:"endpoint-title"},o.a.createElement("p",null),o.a.createElement("h4",null,"/images endpoint"),o.a.createElement("p",null,"A post request with an array of image urls will return an array of insights about each image."))))}var T=function(){return o.a.createElement("div",null,o.a.createElement("h5",null,"Options"),o.a.createElement("ul",null,o.a.createElement("li",null,"Optionally you can order results acording to thier Aesthetic score by adding a sort parameter to the call.",o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Ascending order: ",o.a.createElement("span",{style:{color:"#09b107"}},"https://psykrop-api.herokuapp.com/?order=ascending"),o.a.createElement("br",null),o.a.createElement("em",null,"(with an array of image urls in the request body)")),o.a.createElement("li",null,"Descending order: ",o.a.createElement("span",{style:{color:"#09b107"}},"https://psykrop-api.herokuapp.com/?order=descending"),o.a.createElement("br",null),o.a.createElement("em",null,"(with an array of image urls in the request body)"))))),o.a.createElement("h5",null,"Response data points: (TBD)"),o.a.createElement("ul",{style:{color:"#ddd"}},o.a.createElement("li",null,o.a.createElement("strong",null,"balanceAllCoefficients"),": image balance-harmony percent (0-100)"),o.a.createElement("li",null,o.a.createElement("strong",null,"distanceToCenter"),": mean balance point distance to image center (in pixels)"),o.a.createElement("li",null,o.a.createElement("strong",null,"averageRGBColor"),": average color (r,g,b) value"),o.a.createElement("li",null,o.a.createElement("strong",null,"red_channel"),":",o.a.createElement("ul",null,o.a.createElement("li",null,"balancePercent: channel balance percent (0-100)"),o.a.createElement("li",null,"distanceToCenter: weighted mean balance point distance to image center (in pixels)"),o.a.createElement("li",null,"centerPoint: weighted mean center Point"),o.a.createElement("li",null,"imageMoments: image moments point [Array]"))),o.a.createElement("li",null,o.a.createElement("strong",null,"green_channel"),": same data points for the green channel"),o.a.createElement("li",null,o.a.createElement("strong",null,"blue_channel"),": same data points for the blue channel")),o.a.createElement("h5",null,"Error messages"),"broken or unprocessed link will return status 200 (ok) in the response, the image response data will display the eror message.")},N=a(10),j=a.n(N),C=function(){return o.a.createElement("div",null,o.a.createElement("h5",null,"Request format"),o.a.createElement("div",{className:"code"},"POST /api/images?sort=[order]"),"BODY (in json format below, excepts also url encoded, form, and text mime types)",o.a.createElement(j.a,{id:"json-pretty-body",valueStyle:"color:white",data:{images:["url-to-img.file"]}}))};a(53);function O(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}a(54);var x=function(e){return o.a.createElement("button",{type:"button",style:e.style,className:"btn btn-primary ",onClick:e.onclick,"aria-label":"test"},e.children)},P=function(e){return o.a.createElement("div",null,o.a.createElement("h5",null,"Try it out:"),o.a.createElement("span",null,"Add comma seperated image urls (.JPG, JPEG, .PNG)"),o.a.createElement(O,{value:e.postUrl,onChange:e.handleInputChange,name:"postUrl",placeholder:"image url"}),o.a.createElement(x,{onclick:e.callPost,style:{marginTop:20}},"call psyKrop api"),e.postLoading?o.a.createElement("i",{className:"fa fa-circle-notch fa-spin spinner "}):"",o.a.createElement("p",null))},z=function(e){return o.a.createElement("div",{ref:e.myRef,style:{borderRadius:"5px"}},o.a.createElement("h5",{style:{marginTop:5,marginRight:5,display:"inline-block"}},"Response "),o.a.createElement("div",{className:"code"},e.children),o.a.createElement(j.a,{id:"json-pretty",valueStyle:"color:white",data:e.data}))},I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).callPost=function(){a.setState({postLoading:!0}),g.callPost(a.state.postUrl).then(function(e){a.setState({postResults:e,postLoading:!1}),window.scrollTo({top:a.state.myRef.current.parentNode.offsetTop,behavior:"smooth"})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(R.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&g.saveDOC({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.state={results:"",postLoading:!1,postUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",myRef:e.myRef},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement(b,null,o.a.createElement(v,{size:"md-6 "},o.a.createElement(P,{postLoading:this.state.postLoading,callPost:this.callPost,postUrl:this.state.postUrl,handleInputChange:this.handleInputChange}),o.a.createElement(C,null),o.a.createElement(T,null)),o.a.createElement(v,{size:"md-6",extraClass:"results-to-scroll-to",name:"results-to-scroll-to"},this.state.postResults?o.a.createElement(z,{myRef:this.state.myRef,data:this.state.postResults.data},this.state.postResults.status):"")))}}]),t}(i.Component),A=function(e){return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement("h4",null,"Visual tests"),o.a.createElement("p",null,"Get insight on a batch of preselected images to see results"),o.a.createElement(x,{onclick:e.runTests},"run visual tests"),e.loading?o.a.createElement("i",{className:"fa fa-circle-notch fa-spin spinner test-spinner"}):"")},S=function(e){var t=e.results;return o.a.createElement("div",null,o.a.createElement("h5",{style:{marginTop:15}},"Image mats"),t.map(function(e,t){return o.a.createElement(f,{key:t,style:{border:"1px solid black"},classes:"images-container"},o.a.createElement(b,null,o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.imageFeedback,alt:"imageFeedback"}),o.a.createElement("h6",null,"image centers (insight)")),o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.edge,alt:"edge"}),o.a.createElement("h6",null,"Edge mat")),o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.ratedPixels,alt:"rated pixels"}),o.a.createElement("h6",null,"rated pixels mat"))),o.a.createElement(b,null,o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.red_channel.url,alt:"red channel"}),o.a.createElement("h6",null,"red mat")),o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.green_channel.url,alt:"green channel"}),o.a.createElement("h6",null,"green mat")),o.a.createElement(v,{size:"lg-4"},o.a.createElement("img",{className:"img-tests",src:"images/"+e.blue_channel.url,alt:"blue channel"}),o.a.createElement("h6",null,"blue mat"))),o.a.createElement("h6",null,"imgID: ",e.id))}))},B=function(e){var t=e.visualTestsRef,a=e.results;return o.a.createElement("div",{style:{borderRadius:"5px"},ref:t},o.a.createElement("h5",{style:{marginTop:15}},"Results sample"),o.a.createElement("div",{class:"code"},"200"),o.a.createElement(j.a,{id:"json-pretty",valueStyle:"color:white",data:a}))},_=function(e){var t=e.results,a=e.visualTestsRef;return o.a.createElement(b,null,o.a.createElement(v,{size:"md-6 "},t?o.a.createElement(S,{results:t}):""),o.a.createElement(v,{size:"md-6 "},t?o.a.createElement(B,{visualTestsRef:a,results:t}):""))},U=(a(55),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).runTests=function(){a.setState({loading:!0}),g.runTests().then(function(e){console.log(a.visualTestsRef),a.setState({results:e.data,loading:!1}),window.scrollTo({top:a.visualTestsRef.current.parentNode.offsetTop,behavior:"smooth"})}).catch(function(e){return console.log(e)})},a.state={results:"",loading:!1,postUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"},a.myRef=o.a.createRef(),a.visualTestsRef=o.a.createRef(),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(f,{fluid:!0},o.a.createElement(k,null),o.a.createElement(I,{myRef:this.myRef}),o.a.createElement(y,null),o.a.createElement(A,{runTests:this.runTests,loading:this.state.loading}),o.a.createElement(_,{visualTestsRef:this.visualTestsRef,results:this.state.results}))}}]),t}(i.Component));var L=function(e){var t=e.children;return o.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};var D=function(){return o.a.createElement(f,{fluid:!0},o.a.createElement(b,null,o.a.createElement(v,{size:"md-12"},o.a.createElement(L,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};a(56);var F=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand ",href:"/"},"psyKrop API service"))};a(57);var G=function(e){return console.log(e.cpu),o.a.createElement("div",{className:e.cpu?"alert alert-info alert-dismissible":"alert alert-info alert-dismissible fadeOut",role:"alert"},"Running on core ",e.cpu,o.a.createElement("button",{type:"button",className:"close",onClick:e.onclick,"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={authenticated:!1,loading:!1,ssr:!!e.ssr},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.state.ssr?m.a:u.a;return o.a.createElement(e,null,o.a.createElement("div",null,o.a.createElement(F,null),o.a.createElement(p.a,null,o.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(U,e)}}),o.a.createElement(d.a,{component:D})),(this.state.cpu,""),o.a.createElement(G,{cpu:this.state.cpu?this.state.cpu.data:"",onclick:this.removeInfo})))}}]),t}(o.a.Component);t.a=q},27:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),l=a(16),r=a.n(l),s=a(17);e?r.a.render(n.a.createElement(s.a,null),document.getElementById("root")):r.a.hydrate(n.a.createElement(s.a,null),document.getElementById("root"))}.call(this,a(18))},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){}},[[27,1,2]]]);
//# sourceMappingURL=main.5062bda8.chunk.js.map