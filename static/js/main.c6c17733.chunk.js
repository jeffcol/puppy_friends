(this.webpackJsonppuppy_friends=this.webpackJsonppuppy_friends||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),s=(a(12),a(3)),p=a(4),o=a(6),u=a(5),l=(a(13),function(e){var t=e.name,a=e.email,n=e.imgp,c=e.img,i=e.cardS;return r.a.createElement("div",{className:"bg-green dib br3 ma2 pa3 grow w-auto ",id:"Card"},r.a.createElement("img",{src:c,alt:n,className:i}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f6"},t),r.a.createElement("p",null,a)))}),m=function(e){var t=e.puppies,a=e.imgp,n=e.cardS;return r.a.createElement("div",{className:"flex flex-wrap justify-between mw8"},t.map((function(e,c){return r.a.createElement(l,{key:c,email:t[c].email,name:t[c].name,imgp:a,img:"/puppy_friends"+"/img/".concat(c,".jpg"),cardS:n})})))},d=function(e){var t=e.updPuppy;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",className:"pa2 b--orange",placeholder:"Look for puppy",onChange:t}))},h=(a(14),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updPuppy=function(e){n.setState({search:e.target.value})},n.state={puppies:[],imgp:"puppies",cardS:"mw5 h5",search:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({puppies:t})}))}},{key:"render",value:function(){var e=this,t=this.state.puppies.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));return 0===this.state.puppies.length?r.a.createElement("h1",null,"Without puppies"):r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"flex flex-column tc"},r.a.createElement("h1",{className:"f1"},"Puppy Friends"),r.a.createElement(d,{updPuppy:this.updPuppy}),r.a.createElement(m,{puppies:t,cardS:this.state.cardS,imgp:this.state.imgp})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("main",{className:"tc"},r.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c6c17733.chunk.js.map