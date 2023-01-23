(this["webpackJsonpdata-structures"]=this["webpackJsonpdata-structures"]||[]).push([[51,81],{228:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,s){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof s&&!s(e))return e;for(var r,i=o.length;-1!==t.code.indexOf(r=n(a,i));)++i;return o[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,s=Object.keys(t.tokenStack);!function o(i){for(var u=0;u<i.length&&!(r>=s.length);u++){var l=i[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=s[r],p=t.tokenStack[c],g="string"===typeof l?l:l.content,d=n(a,c),f=g.indexOf(d);if(f>-1){++r;var k=g.substring(0,f),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(f+d.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof l?i.splice.apply(i,[u,1].concat(m)):l.content=m}}else l.content&&o(l.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},321:function(e,n,t){"use strict";var a=t(228);function r(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=r,r.displayName="handlebars",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.b58783ec.chunk.js.map