(this["webpackJsonpreact-portfolio.1"]=this["webpackJsonpreact-portfolio.1"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var r={"./proj-1.png":14,"./proj-2.png":15,"./proj-3.png":16,"./proj-4.png":17,"./proj-5.png":18,"./proj-6.png":19,"./proj-7.png":20};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id=13},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-1.ba04985b.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-2.0f6b3eb6.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-3.962faef5.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-4.48bc7d07.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-5.1e6c0be8.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-6.aa6c6715.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/proj-7.ac839fe0.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(6),s=n.n(i),o=(n(12),n(2));var l=function(e){return Object(r.jsx)("div",{id:"header",children:Object(r.jsxs)("div",{class:"container",children:[Object(r.jsxs)("a",{href:"https://github.com/MahmoudAbdulrhman/my-porfolio",id:"header-title",children:["Mahmoud",Object(r.jsx)("a",{href:"https://github.com/MahmoudAbdulrhman/my-porfolio",children:"."}),"Abdulrhman"]}),Object(r.jsx)("ul",{id:"header-nav",children:e.children})]})})};var d=function(e){var t=e.categories,n=void 0===t?[]:t,a=e.setCurrentCategory,i=e.currentCategory;return Object(c.useEffect)((function(){var e;document.title=(e=i.name).charAt(0).toUpperCase()+e.slice(1)}),[i]),Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{id:"header-nav",className:"flex-row",children:n.map((function(e){return Object(r.jsx)("li",{className:"mx-1 ".concat(i.name===e.name&&"navActive"),children:Object(r.jsx)("a",{onClick:function(){a(e)},href:"#"+e.name,children:e.name})},e.name)}))})})},j=n(3),b=n(5);var u=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],d=s[1],u=n.name,h=n.email,m=n.message;function A(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"requires a valid email")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||a(Object(b.a)(Object(b.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(r.jsx)("div",{id:"content",children:Object(r.jsx)("div",{class:"post-container",children:Object(r.jsxs)("div",{class:"post",children:[Object(r.jsx)("div",{class:"post-author",children:Object(r.jsx)("h1",{children:"Contact me"})}),Object(r.jsxs)("form",{id:"contact-form",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"form-control",type:"text",name:"name",defaultValue:u,onBlur:A})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"form-control",type:"email",name:"email",defaultValue:h,onBlur:A})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{className:"form-control textmessage",name:"message",defaultValue:m,onBlur:A,rows:"7"})]}),l&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:l})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{"data-testid":"button",className:"btn btn-outline-dark mt-4",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})})})},h=n.p+"static/media/defaultPhoto.d36c7004.JPG";var m=function(){return Object(r.jsx)("div",{id:"content",children:Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"about",children:[Object(r.jsx)("div",{class:"about-author",children:Object(r.jsx)("img",{className:"defaultPhoto",src:h,alt:"Me at an event"})}),Object(r.jsx)("h3",{class:"post-title",children:"About Me"}),Object(r.jsxs)("div",{class:"post-content",children:[Object(r.jsx)("p",{children:"My name is Mahmoud Abdulrhman, my friends and family call me 'Moe'.  I am a sales advisore ."}),Object(r.jsx)("p",{children:"Currently, I am pursuing Full Stack Web Development at UC Berkeley Extension."})]})]})})})};var A=function(e){var t=e.project,c=e.i;return Object(r.jsxs)("div",{className:"flex-container",children:[Object(r.jsx)("div",{className:"flex-row",children:Object(r.jsx)("h3",{children:t.name})}),Object(r.jsx)("div",{className:"flex-row",children:Object(r.jsx)("p",{children:t.description})}),Object(r.jsx)("div",{className:"flex-row",children:Object(r.jsx)("img",{src:n(13)("./proj-".concat(c+1,".png")).default,alt:"project completed by myself"})}),Object(r.jsxs)("div",{className:"flex-row",children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:t.link,target:"blank",children:"Visit Deployed Application"})}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:t.github,target:"blank",children:"Visit Github Repository"})})]})]})};var O=function(){var e=Object(c.useState)([{name:"TransCard",desciption:"Travel with ease with our new contactless virtual train ticket, transferCard.",link:"https://transfercard.herokuapp.com/",github:"https://github.com/itsrheine/transferCard"},{name:"Travel Dashboard",desciption:"Travel Search Engine",link:"https://itsrheine.github.io/Travel-Dashboard/",github:"https://github.com/MahmoudAbdulrhman/Travel-Dashboard"},{name:"Tech Blog",description:"Social media-like blog for Tech professionals",link:" https://mahmoudabdulrhman.github.io/tech-blog/",github:"https://github.com/MahmoudAbdulrhman/tech-blog"},{name:"Note Taker",description:"Virtual Notepad",link:"https://murmuring-spire-94172.herokuapp.com/",github:"https://github.com/MahmoudAbdulrhman/note-taker"},{name:"Budget Tracker",description:"Web & Mobile Interactive budget Tracker",link:"https://hidden-anchorage-26025.herokuapp.com/",github:"https://github.com/MahmoudAbdulrhman/-Budget-_Tracker-_-PWA-"},{name:"Weather Dashboard",description:"OpenWeather API Web Application",link:"https://mahmoudabdulrhman.github.io/Weather-Dashboard/",github:"https://github.com/MahmoudAbdulrhman/Weather-Dashboard"},{name:"Team Profile Generator",description:"Node based generator producing a web output",link:"https://drive.google.com/file/d/1ob6g_fjY8XxvYGdIZAxM7VYQpcVfF-7J/view",github:"https://github.com/MahmoudAbdulrhman/team-profile-generator"}]),t=Object(o.a)(e,1)[0];return Object(r.jsx)("div",{id:"content",children:Object(r.jsx)("div",{class:"post-container",children:Object(r.jsxs)("div",{class:"post",children:[Object(r.jsx)("div",{class:"post-author",children:Object(r.jsx)("h1",{children:"Portfolio"})}),Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(A,{project:e,i:t})}))})]})})})},g=n.p+"static/media/resume.f1acf8f2.pdf";var p=function(){return Object(r.jsx)("div",{id:"content",children:Object(r.jsx)("div",{class:"post-container",children:Object(r.jsx)("div",{class:"post",children:Object(r.jsxs)("div",{class:"post-author",children:[Object(r.jsx)("h1",{children:"Resume"}),Object(r.jsx)("a",{href:g,target:"blank",children:"View PDF Version"}),Object(r.jsx)("br",{})]})})})})};var x=function(e){var t=e.currentCategory;return Object(r.jsx)("div",{children:function(){switch(t.name){case"Portfolio":return Object(r.jsx)(O,{});case"Contact":return Object(r.jsx)(u,{});case"Resume":return Object(r.jsx)(p,{});default:return Object(r.jsx)(m,{})}}()})};var f=function(){return Object(r.jsx)("div",{id:"footer",children:Object(r.jsx)("div",{class:"container",children:Object(r.jsxs)("div",{class:"column",children:[Object(r.jsx)("h4",{children:"Connect with Me"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"https://github.com/MahmoudAbdulrhman",target:"blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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",alt:"github"})}),Object(r.jsx)("a",{href:"linkedin.com/in/mahmoud-abdulrhman-93964328",target:"blank",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAGWklEQVR4nO2dW2wUVRjHf2d2Z9ttaSmYlFIaUCGWthRBCjzAg5fgJcYAUWIUETSAGp9UAqgxwcQEubyaAMaEIGhUgkUDMSHRBzSBABKg5WLwRiilSMXUbdl2p3N8OFMKAu3O7M4OnT2/ZLNNdv5nOuff853zfWd2ChqNRqPRaDQajUaj0Wg0mnxBZKWVNc0xkvZ8EHNBPACyCijOStt3Dp0gzoP8GSkbiRuNrKnrybTRzA1Y3fQ0sB64N+O2hhKCX0GuZG39rsya8cqCLyOMr1kH4q1MfoEhjxQbideuYo2wvcgNzyfWna8QcgVXm9d6lntSqbCz0+tJQ4kw5rO2ttG1zPWJ1jTH6JYnkYx3rQ0zUvxOnIluJ2b3IShpz9edfwuEvIckc93K3BsgxDzXmrzBzoEBkmmuNXmD0eBa4eEsoz1o8gQ5xq0i6uEsw1wrpA22BbYNSJAShAGGAUZU/RwOXPeNFwPcYVtgdYOVAjulzADHABOiJkQLlBF5iL9XbVuQSiJSXSyZWcHyWWOoH1OMAJpbO9ny4wU+OdCKlBLMwrw0wb8rljZY3YhUF5++WMPC6RU3fDx9XCnTx5Xy4H1lLNp2CikEmEaYwlFa+He1tgVWiiUzK27q/OtZOL2CFxpGOSGq17df507FRwNssFO8MnvwhcGyWZXOJK0NyCISpE195eDbAlOqSkD2Kk2e4XvAzb8udYePBggQBsdbEoMeefxCwpl8s7NBN5TwzwBDrfM//unCoIdu2t+icgIjv1ZA4KsBUYiabD14kc8Otd32sK0HWtlxuE0lZDoPyCLCgEgMaUoWbTvFD79cYfnsSupGF2NLONaSYPP+FrYfbkOaRSobzrMcALwE3dVN7ubV3hT09oDVo5aa10oRkWujJFSliA8nuepT/686YoIRUe+2rQwQAhAq5kdM8nHy7cM/A3q6bv+ZlICEXht6rRs/ixUNrh+IPr20VWIn7f7zSdlvvhBOQTASaOjzdwQk/3V3fGFJ5nppq7BnW/3v18rgOB3vvIyo83JGaABh0Pczyo8eTus48fr32dGnroLVTWlU8uyMch6pHsGUqhLKS2IMj0e4nEhxOZHi5MVO9p3+m71N7ZzvSKp5KGJCNJbTERGSmc9B2kSsq7zxUBXvPXE3pYU3X155SYzykhi1o4t5Zmo5qV7J1gOtfPDdH5zr6FIjKFqgRkUOCNW6r5gke16bzIb5E27Z+bfCjAiWzarkxLszeKK6VM09VrJ/teYzoTHAEIKdSyfxWM1IT/rSwijfvjqZxTPKIZVUu3g5qGSFxoBVj47l8dq7MmojYgg2P1fN1Mq4ylusjG9+HpTQGPD+k9m5ObsgavD5S3WYsvvGxNEnQmOAGcleMlc9qogFU8v7l7E+EhoDss3KOeOc8om/u3ThWoY6HGtJsLepndaObkYUmTSMLWHOxJEUmun/vd0/ZhjV5XHO/ONk0z7lBqEyoNuyWbrjNNsPtamkSgi1kLEtxpaZbHl+oqtV0uzxZZw51O6rAaEJQVLC4m2n2H7kMhQUO69h197PJQye2nSMPU3tabc5e/xwFYJ8DEOhMeCro5f44uhfqhhnxiESU7WdiKlu+jILSRlxXt5+io5kehNrTUWxU8jzj9AYsH7fn/31nFuFC6fOc6nLZtvBi2m1OaIoel011R9CY8CJC52qfjNQDccZEemGoZFFJmoS0QYMiJTQY9mojZ0B8gHDSPtODYCyoqjT/9qALKE2YS53ptI6OiL836kLhQFu+0mNljuDUBgwlNEGBIw2IGC0AQGjDQgYbUDAaAMCRhsQMNqAgNEGBIw2IGC0AQGjDQgYbUDAaAMCRhsQMNqAAcjBhpj/N2bd7psvudLnul23+GvA/7/zlWt9rtv1gBcDEqTzbLS+byt6JVN9rttVdLgVeJkDBn/4Q/7ium+8GHDEgyZPEIfdKjw8uFW6fkB13iDY7Vbi3oAr3V8DZ13rws9vFPCNW5F7A7Y0pBBylWtd2JHiTS//0sRbIra2fhdSbPSkDSfrWFfnOvxAJplwvHYViA2e9WFBsp7Cune8yjNPtt8+OQ9pbwAmZNzW0OIsUqzw+pffR3aqHcsPm4yMz1PPzxfTgCq8POT7ziYBnAd5BGE00n51N1sa0rvNWqPRaDQajUaj0Wg0Go1GowH+A1Sy1HAblXtNAAAAAElFTkSuQmCC",alt:"linkedin"})})]})]})})})};n(21);var v=function(){var e=Object(c.useState)([{name:"About"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}]),t=Object(o.a)(e,1)[0],n=Object(c.useState)(t[0]),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{children:Object(r.jsx)(d,{id:"header-title",categories:t,setCurrentCategory:s,currentCategory:i})}),Object(r.jsx)("main",{children:Object(r.jsx)(x,{currentCategory:i})}),Object(r.jsx)(f,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),w()}],[[22,1,2]]]);
//# sourceMappingURL=main.61b5ebbe.chunk.js.map