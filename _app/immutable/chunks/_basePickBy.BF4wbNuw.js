import{c as b,e as v,k as O,g as P,j as F,l as M,m,t as _,n as o}from"./_baseUniq.P9brck0W.js";import{aP as w,aC as A,aQ as E,aR as N,aS as R,aT as x,aU as S,aV as T,aW as C,aX as h,aY as G,aZ as L}from"./state.Bw4wwf0I.js";var l=1/0,X=17976931348623157e292;function Y(n){if(!n)return n===0?n:0;if(n=w(n),n===l||n===-l){var a=n<0?-1:1;return a*X}return n===n?n:0}function q(n){var a=Y(n),r=a%1;return a===a?r?a-r:a:0}function $(n){var a=n==null?0:n.length;return a?b(n):[]}var I=Object.prototype,z=I.hasOwnProperty,p=A(function(n,a){n=Object(n);var r=-1,e=a.length,t=e>2?a[2]:void 0;for(t&&E(a[0],a[1],t)&&(e=1);++r<e;)for(var f=a[r],i=N(f),s=-1,u=i.length;++s<u;){var d=i[s],g=n[d];(g===void 0||R(g,I[d])&&!z.call(n,d))&&(n[d]=f[d])}return n});function V(n){var a=n==null?0:n.length;return a?n[a-1]:void 0}function B(n){return function(a,r,e){var t=Object(a);if(!x(a)){var f=v(r);a=O(a),r=function(s){return f(t[s],s,t)}}var i=n(a,r,e);return i>-1?t[f?a[i]:i]:void 0}}var K=Math.max;function Q(n,a,r){var e=n==null?0:n.length;if(!e)return-1;var t=r==null?0:q(r);return t<0&&(t=K(e+t,0)),P(n,v(a),t)}var k=B(Q);function U(n,a){var r=-1,e=x(n)?Array(n.length):[];return F(n,function(t,f,i){e[++r]=a(t,f,i)}),e}function y(n,a){var r=S(n)?M:U;return r(n,v(a))}function W(n,a){return n<a}function Z(n,a,r){for(var e=-1,t=n.length;++e<t;){var f=n[e],i=a(f);if(i!=null&&(s===void 0?i===i&&!T(i):r(i,s)))var s=i,u=f}return u}function j(n){return n&&n.length?Z(n,C,W):void 0}function D(n,a,r,e){if(!h(n))return n;a=m(a,n);for(var t=-1,f=a.length,i=f-1,s=n;s!=null&&++t<f;){var u=_(a[t]),d=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(t!=i){var g=s[u];d=void 0,d===void 0&&(d=h(g)?g:G(a[t+1])?[]:{})}L(s,u,d),s=s[u]}return n}function c(n,a,r){for(var e=-1,t=a.length,f={};++e<t;){var i=a[e],s=o(n,i);r(s,i)&&D(f,m(i,n),s)}return f}export{W as a,Z as b,U as c,c as d,j as e,$ as f,k as g,p as h,q as i,V as l,y as m,Y as t};
