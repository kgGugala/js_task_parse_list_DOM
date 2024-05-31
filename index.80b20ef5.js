var r,t=document.querySelector("ul");function a(r){return r.replace("$","").replace(",","")}(r=Array.from(t.children)).sort(function(r,t){var e=parseFloat(a(r.getAttribute("data-salary")));return parseFloat(a(t.getAttribute("data-salary")))-e}),r.forEach(function(r){return t.appendChild(r)});
//# sourceMappingURL=index.80b20ef5.js.map
