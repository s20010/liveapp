(this.webpackJsonpliveapp=this.webpackJsonpliveapp||[]).push([[0],{26:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),i=(n(26),n(11)),u=n.n(i),d=n(12),o=n(13),l=n(7),h=n(20),j=n(19),b=n(47),p=n(14),f=n.n(p),v=n(1),O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={url:null,data:{address1:null,address2:null,address3:null}},a.url="https://zipcloud.ibsnet.co.jp/api/search",a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.title="\u90f5\u4fbf\u691c\u7d22"}},{key:"getData",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()(this.state.url).then((function(t){return t.json()})).then((function(t){return t.results[0]})).then((function(t){var n=t.address1,a=t.address2,r=t.address3;e.setState({data:{address1:n,address2:a,address3:r}})}));case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("\u90f5\u4fbf\u756a\u53f7\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059");case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"\u90f5\u4fbf\u756a\u53f7\u3092\u5165\u529b"}),Object(v.jsx)(x,{eito:this.live.bind(this)}),Object(v.jsx)(k,{onClick:this.Click.bind(this)}),Object(v.jsx)(g,{data:this.state.data})]})}},{key:"Click",value:function(){this.getData()}},{key:"live",value:function(t){var e=this.url+"?zipcode="+t.target.value;this.setState({url:e})}}]),n}(r.a.Component),x=function(t){return Object(v.jsx)("input",{type:"number",onChange:t.eito})},k=function(t){return Object(v.jsx)(b.a,{onClick:function(){return t.onClick()},variant:"contained",color:"secondary",children:"\u691c\u7d22"})},g=function(t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h3",{children:t.data.address1}),Object(v.jsx)("h3",{children:t.data.address2}),Object(v.jsx)("h3",{children:t.data.address3})]})},C=O,m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.5d628196.chunk.js.map