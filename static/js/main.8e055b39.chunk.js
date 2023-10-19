(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),c=(i(14),i(9)),n=i(2),l=(i(15),i(1)),r=i(7),o=(i(16),i(17),i(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,target:"_blank",rel:"noreferrer",children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=i(8),b=i.n(j);var h=function(e){var t=e.name,i=e.value,a=e.label,s=void 0===a?t:a,c=e.placeholder,r=void 0===c?"Enter ".concat(s):c,d=e.required,m=void 0!==d&&d,j=e.onChange,h=void 0===j?function(){}:j,u=e.isNotValidImgURL,O=void 0!==u&&u,g=e.isNotValidImdbUrl,p=void 0!==g&&g,v=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),w=Object(n.a)(v,1)[0],x=Object(l.useState)(!1),f=Object(n.a)(x,2),N=f[0],M=f[1],U=N&&m&&!i;return Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:w,children:s}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:w,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":U||O||p}),placeholder:r,value:i,onChange:function(e){return h(e.target.value)},onBlur:function(){return M(!0)}})}),U&&Object(o.jsx)("p",{className:"help is-danger",children:"".concat(s," is required")}),(O||p)&&Object(o.jsx)("p",{className:"help is-danger",children:"".concat(s," is not valid")})]})},u=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(n.a)(i,2),s=a[0],c=a[1],r=Object(l.useState)(""),d=Object(n.a)(r,2),m=d[0],j=d[1],b=Object(l.useState)(""),u=Object(n.a)(b,2),O=u[0],g=u[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),w=v[0],x=v[1],f=Object(l.useState)(""),N=Object(n.a)(f,2),M=N[0],U=N[1],I=Object(l.useState)(""),y=Object(n.a)(I,2),T=y[0],_=y[1],B=Object(l.useState)(!1),S=Object(n.a)(B,2),k=S[0],z=S[1],A=Object(l.useState)(!1),V=Object(n.a)(A,2),D=V[0],C=V[1],Y=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,F=!m||!w||!M||!T;return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),z(!Y.test(w)),C(!Y.test(M)),Y.test(w)&&Y.test(M)&&(t({title:m,description:O,imgUrl:w,imdbUrl:M,imdbId:T}),j(""),g(""),x(""),U(""),_(""),z(!1),C(!1),c((function(e){return e+1})))},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(h,{name:"title",label:"Title",value:m,onChange:j,required:!0}),Object(o.jsx)(h,{name:"description",label:"Description",value:O,onChange:g}),Object(o.jsx)(h,{name:"imgUrl",label:"Image URL",value:w,onChange:x,isNotValidImgURL:k,required:!0}),Object(o.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:M,onChange:U,isNotValidImdbUrl:D,required:!0}),Object(o.jsx)(h,{name:"imdbId",label:"Imdb ID",value:T,onChange:_,required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:F,children:"Add"})})})]},s)},O=function(){var e=Object(l.useState)(r),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.8e055b39.chunk.js.map