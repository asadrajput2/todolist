(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},16:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(3),i=n(5),c=n(4),u=n(6),l=n(0),s=n.n(l),o=n(9),m=n.n(o),d=(n(8),n(1)),f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).state={list_arr:[]},n.addItem=n.addItem.bind(Object(d.a)(n)),n.removeItem=n.removeItem.bind(Object(d.a)(n)),n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"addItem",value:function(t){t.preventDefault(),this.setState(function(t){return this.input.value&&(t.list_arr.unshift(this.input.value),this.input.value=""),{list_arr:t.list_arr}})}},{key:"removeItem",value:function(t){this.setState(function(e){return e.list_arr.splice(t,1),{list_arr:e.list_arr}})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("form",{class:"form",onSubmit:this.addItem},s.a.createElement("input",{type:"text",ref:function(e){t.input=e},placeholder:"add item"}),s.a.createElement("button",{type:"submit"},"Add")),s.a.createElement("div",{class:"list"},this.state.list_arr.map(function(e,n,a){return s.a.createElement("div",{key:n,class:"item"},e,s.a.createElement("div",{class:"close",onClick:function(e){return t.removeItem(n)}},"\xd7"))})))}}]),e}(s.a.Component),p=function(t){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{class:"container"},s.a.createElement(f,null))}}]),e}(s.a.Component);m.a.render(s.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.553f9080.chunk.js.map