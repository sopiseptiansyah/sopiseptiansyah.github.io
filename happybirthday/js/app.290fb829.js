!function(e){function t(t){for(var o,i,u=t[0],c=t[1],f=t[2],s=0,p=[];s<u.length;s++)i=u[s],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=c;a.push([54,1]),n()}({112:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);n(39),n(70),n(72),n(74),n(86),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(98),n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112);window.onload=function(){$("#trigger").click(function(){var e=!1;navigator.getUserMedia({audio:!0},function(t){window.persistAudioStream=t;var n=new AudioContext,o=n.createMediaStreamSource(t),r=n.createAnalyser();o.connect(r),r.fftSize=1024;var a=new Uint8Array(r.frequencyBinCount);!function t(){var n;requestAnimationFrame(t),r.getByteFrequencyData(a);for(var o=0;o<155;o++)n=Math.floor(a[o])-Math.floor(a[o])%5;e||(n<=125&&($("#blow").text("Ayo, Lebih keras tiupnya!"),$(".flame").css("opacity",.4),$(".flame").css("opacity",.9)),n>125&&($("#blow").text("Terima kasih sudah tiup lilinnya yaa"),$(".flame").css("opacity",.75),$(".flame").css("opacity",.5),$(".flame").css("opacity",0),e=!0,setTimeout(function(){$("#ModalHappy").modal("show")},2e3)))}()},function(e){console.log(e)})}),$("#ModalHappy").on("hidden.bs.modal",function(){$(".pyro").removeClass("hidden"),setTimeout(function(){$(".cake").fadeOut(),setTimeout(function(){$(".img-riska").fadeIn()},1500)},1500)})}}});
//# sourceMappingURL=app.290fb829.js.map