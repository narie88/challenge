(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{40:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),i=n(16),l=n(1),u=n(7),s=n(3);function p(){var e=Object(u.a)(["\n\tmargin-right: 20px;\n\ttext-transform: uppercase;\n\tfont-weight: 600;\n\tcolor: ",";\n\tbackground-color: ",";\n"]);return p=function(){return e},e}function m(){var e=Object(u.a)(["\n\tdisplay: flex;\n"]);return m=function(){return e},e}function f(){var e=Object(u.a)(["\n\tmargin-bottom: 30px;\n"]);return f=function(){return e},e}var d=s.c.header(f()),h=s.c.ul(m()),b=s.c.li(p(),(function(e){return e.selected?"white":"black"}),(function(e){return e.selected?"#f1c40f":"white"})),v=Object(l.e)((function(e){var t=e.location.pathname;return r.a.createElement(d,null,r.a.createElement(h,null,r.a.createElement(b,{selected:"/"===t},r.a.createElement(i.b,{to:"/"},"Prices")),r.a.createElement(b,{selected:"/exchanges"===t},r.a.createElement(i.b,{to:"/exchanges"},"Exchanges")),r.a.createElement(b,{selected:"/coins"===t},r.a.createElement(i.b,{to:"/coins"},"Coins"))))})),g=n(9),E=n.n(g),x=n(11),k=n(12),O=n(13),w=n(15),y=n(14);function j(){var e=Object(u.a)(["\n\tfont-weight: bold;\n"]);return j=function(){return e},e}var S=s.c.span(j()),R=function(e){var t=e.coins;e.error;return e.loading?r.a.createElement("span",null,"Loading..."):r.a.createElement(a.Fragment,null,t&&t.length>0&&r.a.createElement(a.Fragment,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(S,null,"# ",e.rank," "),e.name," / ",e.symbol)}))))},F=n(38),C=n.n(F).a.create({baseURL:"https://api.coinpaprika.com/v1"}),D=function(){return C.get("tickers")},L=function(){return C.get("exchanges")},M=function(){return C.get("coins")},U=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={coins:null,error:null,loading:!0},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:t=e.sent,n=t.data,this.setState({coins:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({error:"ERROR"});case 11:return e.prev=11,this.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.coins,n=e.error,a=e.loading;return r.a.createElement(R,{coins:t,error:n,loading:a})}}]),n}(r.a.Component),z=function(e){var t=e.tickers;e.error;return e.loading?r.a.createElement("span",null,"Loading..."):r.a.createElement(a.Fragment,null,t&&t.length>0&&r.a.createElement(a.Fragment,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",null,e.name," /"),r.a.createElement("span",null,e.symbol," :"),r.a.createElement("span",null,"$",e.quotes.USD.price))}))))},A=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={tickers:null,error:null,loading:!0},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:t=e.sent,n=t.data,this.setState({tickers:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({error:"ERROR!"});case 11:return e.prev=11,this.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.tickers,n=e.error,a=e.loading;return r.a.createElement(z,{tickers:t,error:n,loading:a})}}]),n}(r.a.Component);function _(){var e=Object(u.a)(["\n\tdisplay: block;\n\tmargin-bottom: 20px;\n\tcolor: blue;\n\ttext-decoration: underline;\n"]);return _=function(){return e},e}function B(){var e=Object(u.a)(["\n\twidth: 400px;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n\twhite-space: nowrap;\n"]);return B=function(){return e},e}function I(){var e=Object(u.a)(["\n\tdisplay: block;\n\tfont-weight: bold;\n\tfont-size: 15px;\n"]);return I=function(){return e},e}var J=s.c.strong(I()),W=s.c.p(B()),q=s.c.a(_()),H=function(e){var t=e.name,n=e.description,c=e.isWebsite,o=e.website;return r.a.createElement(a.Fragment,null,r.a.createElement(J,null,t),r.a.createElement(W,null," ",n," "),c&&r.a.createElement(q,{href:o,target:"_blank"},o))},N=function(e){var t=e.exchanges;e.error;return e.loading?r.a.createElement("span",null,"Loading.."):r.a.createElement(a.Fragment,null,t&&t.length>0&&r.a.createElement(a.Fragment,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(H,{name:e.name,description:e.description,isWebsite:e.website_status,website:e.website_status&&e.links.website}))}))))},P=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:null,name:null,decription:null,website:null,error:null,loading:!0},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:t=e.sent,n=t.data,this.setState({data:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({error:"ERROR!"});case 11:return e.prev=11,this.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,n=e.name,a=e.description,c=e.website,o=e.error,i=e.loading;return r.a.createElement(N,{data:t,description:a,name:n,website:c,error:o,loading:i})}}]),n}(r.a.Component),$=function(){return r.a.createElement(i.a,null,r.a.createElement(v,null),r.a.createElement(l.a,{path:"/",exact:!0,component:A}),r.a.createElement(l.a,{path:"/exchanges",component:P}),r.a.createElement(l.a,{path:"/coins",exact:!0,component:U}))},G=n(39);function K(){var e=Object(u.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    \n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        padding:30px;\n    }\n    h1 {\n      font-size:32px;\n      margin-bottom:30px;\n    }\n"]);return K=function(){return e},e}var Q=Object(s.a)(K(),G.a);var T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Coin Explorer"),r.a.createElement($,null),r.a.createElement(Q,null))},V=document.getElementById("root");o.a.render(r.a.createElement(T,null),V)}},[[40,1,2]]]);
//# sourceMappingURL=main.9e653eeb.chunk.js.map