function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("kyEFX",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"4q06v":"shoppinglist.a468276d.js","34wdi":"amazon_x1.626c9508.png","fc2DJ":"amazon_x2.104a65be.png","fmnQF":"white_book_x1.652b354e.png","hpc4r":"white_book_x2.15632d7d.png","e8Zm0":"black_book_x1.1d091ebd.png","lTPBQ":"black_book_x2.1f77f032.png","aint2":"books_x1.9d82d098.png","59gyi":"books_x2.80ece8cf.png","dKQml":"shoppinglist.93abcf94.js"}'));var a,l=i("7Y9D8");a=new URL(i("kyEFX").resolve("34wdi"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("fc2DJ"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("fmnQF"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("hpc4r"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("e8Zm0"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("lTPBQ"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("aint2"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("59gyi"),import.meta.url).toString(),i("6ZObK"),i("aKZyh"),i("8ygdg"),i("8BGGW");const m=document.querySelector(".container-markup"),b=document.querySelector(".container-pagination");let h,_,k;function v(e){if("BUTTON"!==e.target.nodeName)return;k=JSON.parse(localStorage.getItem("bookInfo"));const n=k.filter((n=>n._id!==e.target.id));localStorage.setItem("bookInfo",JSON.stringify(n)),k=n,0!==k.length?S(k,1):w()}function y(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const n=document.querySelectorAll(".pagination-btn");console.log(n),console.dir(e.target.id),console.log(k),S(k,e.target.id)}function S(e,t){let o=0;const r=t;let i=0,l=0;o=window.screen.width>767?3:4,i=(r-1)*o,l=Math.ceil(e.length/o),console.log(e),console.log(i),console.log(i+o),console.log(l),m.innerHTML="",m.innerHTML=e.slice(i,i+o).reduce(((e,{book_image:t,title:o,list_name:r,description:i,author:l,buy_links:u,_id:f})=>e+`\n      <div class="container-shopping-card">\n            <img class="shopping-card-img" src="${t}" alt="Without title">\n            <div>\n              <p class="shopping-card-title">${o}</p>\n              <p class="shopping-card-list-name">${r}</p>\n              <p class="shopping-card-description">${i}</p>\n              <div class="shopping-card-footer">\n                <p class="shopping-card-author">${l}</p>\n                <ul class="shopping-card-list">\n                  <li class="shopping-card-item">\n                    <a target="_blank" rel="noopener noreferrer" href="${u[0].url}">\n                      <img class="shopping-card-pic" srcset="\n                                    ${n(a)} 1x,\n                                    ${n(s)} 2x\n                                  " src="${n(a)}" alt="amazon" width="48" height="15" />\n                    </a>\n                  </li>\n                  <li class="shopping-card-item">\n                    <a target="_blank" rel="noopener noreferrer" href="${u[1].url}">\n                      <img class="shopping-card-pic" srcset="\n                                    ${n(c)} 1x,\n                                    ${n(p)} 2x\n                                  " src="${n(c)}" alt="white_book" width="28" height="27" />\n                    </a>\n                  </li>\n                  <li class="shopping-card-item">\n                    <a target="_blank" rel="noopener noreferrer" href="${u[4].url}">\n                      <img class="shopping-card-pic" srcset="\n                                    ${n(g)} 1x,\n                                    ${n(d)} 2x\n                                  " src="${n(g)}" alt="black_book" width="32" height="30" />\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <button type="button" id=${f} class="shopping-card-dump-btn">              \n            </button>\n          </div>\n    `),""),b.innerHTML="",l>1&&(b.innerHTML=function(e){let n="";for(let t=1;t<=e;t+=1)n+=`\n      <button type="button" id=${t} class="pagination-btn">${t}</button>    \n    `;return n}(l)),h=document.querySelector(".container-markup"),h.addEventListener("click",v),_=document.querySelector(".container-pagination"),_.addEventListener("click",y)}function w(){m.innerHTML="",m.innerHTML=`\n      <div class="container-shopping-empty">\n        <p class="shopping-empty-text">\n          This page is empty, add some books and proceed to order.\n        </p>\n        <img class="shopping-empty-img" srcset="${n(u)} 1x, ${n(f)} 2x"\n          src="${n(u)} alt="books" />\n      </div>\n    `}!function(){try{localStorage.getItem("bookInfo")&&localStorage.getItem("bookInfo").length>2?(k=JSON.parse(localStorage.getItem("bookInfo")),S(k,1)):w()}catch(e){n(l).Notify.failure("Set state error: ",e.message)}}();
//# sourceMappingURL=shoppinglist.a468276d.js.map
