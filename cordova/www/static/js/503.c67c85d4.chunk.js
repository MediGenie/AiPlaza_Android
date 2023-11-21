"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[503],{3009:function(e,n,t){t.d(n,{p:function(){return o}});var a=t(1413),r=t(885),c=t(2791),l=t(8806),i=t(1246),s=t(184),o=function(e){var n=e.accept,t=e.onChange,o=e.selected_file,d=(0,c.useState)({show:!1,message:""}),u=(0,r.Z)(d,2),f=u[0],m=u[1],p=function(e){m({show:!0,message:e})},x=(0,c.useId)();return(0,s.jsxs)("div",{className:"flex justify-end space-x-2.5",children:[(0,s.jsx)(l.V,{title:"\uc624\ub958",message:f.message,open:f.show,onClose:function(){m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{show:!1})}))}}),o&&(0,s.jsx)(i.W,{disabled:!0,className:"flex-1",value:o.name}),(0,s.jsx)("label",{htmlFor:x,className:"btn !px-10 cursor-pointer",children:"\ud30c\uc77c \uc5c5\ub85c\ub4dc"}),(0,s.jsx)("input",{type:"file",hidden:!0,value:"",id:x,accept:n,onChange:function(e){var a=function(e){return e?e.item(0):null}(e.target.files||void 0);if(null!==a){var r=function(e){return!n||n.split(",").includes(e.type)}(a);!1!==r?function(e){null===t||void 0===t||t(e)}(a):p("\ud30c\uc77c\uc758 \ud615\uc2dd\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")}else p("\ud30c\uc77c\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")}})]})}},3026:function(e,n,t){t.d(n,{p:function(){return l}});var a=t(1694),r=t.n(a),c=t(184),l=function(e){var n=e.label,t=e.required,a=e.className,l=e.children;return(0,c.jsxs)("div",{className:r()(a),children:[(0,c.jsx)("div",{className:"mb-2.5",children:(0,c.jsxs)("label",{className:"text-b2 font-bold",children:[n,t&&(0,c.jsx)("span",{className:"text-blue500",children:"*"})]})}),(0,c.jsx)("div",{children:l})]})}},7503:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(1413),r=t(885),c=t(2791),l=t(7689),i=t(242),s=t(9812),o=t(2524),d=t(8472),u=t(1708),f=t(1603),m=t(4306),p=t(8864),x=t(19),h=t(8806),b=t(5987),g=t(1694),v=t.n(g),j=t(2260),y=t(4189),N=t(6401),w=(0,c.createContext)(void 0);function Z(){var e=(0,c.useContext)(w);if(void 0===e)throw new Error("\ucd08\uae30\ud654 \uc774\ud6c4 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.");return e}var C=t(184),k=["image"],_=["image"],S=function(){var e=Z(),n=e.step,t=e.onChangeStep,s=e.data,o=s.content.title,d=(0,l.s0)(),u=(0,c.useState)({message:"",show:!1}),f=(0,r.Z)(u,2),m=f[0],p=f[1],x=function(e){p({message:e,show:!0})};return(0,C.jsxs)("div",{className:"bg-white grid grid-cols-3  items-center justify-between py-5 px-10 border-b border-gray200 sticky top-0 inset-x-0 z-30 overflow-hidden ",children:[(0,C.jsxs)("div",{className:"flex justify-start items-center space-x-[5px]",children:[(0,C.jsx)("button",{onClick:function(){return d(-1)},type:"button",children:(0,C.jsx)("img",{src:j.WG,className:"min-w-[20px] h-[20px]",alt:"\uc774\uc804"})}),(0,C.jsx)("h1",{className:"font-bold text-b1 break-words line-clamp-2",children:o||"\uc11c\ube44\uc2a4\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."})]}),(0,C.jsxs)("div",{className:"flex justify-center space-x-5",children:[(0,C.jsx)("div",{className:v()("w-6 h-6 rounded border flex font-medium items-center justify-center",{"border-blue500 text-blue500":1===n,"border-gray400 text-gray400 max-lg:hidden":1!==n}),children:"1"}),(0,C.jsx)("img",{className:"max-lg:hidden",src:1===n?j.jt:j.nh,alt:""}),(0,C.jsx)("div",{className:v()("w-6 h-6 rounded border flex font-medium items-center justify-center",{"border-blue500 text-blue500":2===n,"border-gray400 text-gray400 max-lg:hidden":2!==n}),children:"2"}),(0,C.jsx)("img",{className:"max-lg:hidden",src:2===n?j.jt:j.nh,alt:""}),(0,C.jsx)("div",{className:v()("w-6 h-6 rounded border flex font-medium items-center justify-center",{"border-blue500 text-blue500":3===n,"border-gray400 text-gray400 max-lg:hidden":3!==n}),children:"3"}),(0,C.jsx)("img",{className:"max-lg:hidden",src:3===n?j.jt:j.nh,alt:""}),(0,C.jsx)("div",{className:v()("w-6 h-6 rounded border flex font-medium items-center justify-center",{"border-blue500 text-blue500":4===n,"border-gray400 text-gray400 max-lg:hidden":4!==n}),children:"4"})]}),(0,C.jsxs)("div",{className:"flex absolute right-10 space-x-2.5",children:[n>1&&(0,C.jsx)("button",{className:"bg-gray400 text-white py-2 px-5 rounded font-medium",type:"button",onClick:function(){1!==n&&t(n-1)},children:"\uc774\uc804"}),(0,C.jsx)("button",{className:"bg-blue500 text-white py-2 px-5 rounded font-medium",type:"button",onClick:function(){switch(n){case 1:!function(){var e=s.content;(0,y.f)(e.title)?x("\uc11c\ube44\uc2a4 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):(0,y.f)(e.description)?x("\uc11c\ube44\uc2a4 \uc18c\uac1c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):(0,y.f)(e.thumbnail)?x("\uc378\ub124\uc77c\uc744 \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694."):(0,y.f)(e.email)?x("\ub2f4\ub2f9 \uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):(0,y.f)(e.price)||0===e.price?x("\uc11c\ube44\uc2a4 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):t(2)}();break;case 2:!function(){var e=s.page.data,n="";if(Object.values(e).forEach((function(e){e.columns.map((function(t){t.type===N.R.Color?(0,y.f)(t.color)&&(n=e.label+"\uc758 "+t.label):t.type===N.R.Image?(0,y.f)(t.image)&&(n=e.label+"\uc758 "+t.label):t.type===N.R.Rich||t.type===N.R.Sentence?((0,y.f)(t.content)||(0,y.f)(t.color))&&(n=e.label+"\uc758 "+t.label):t.type===N.R.Text&&((0,y.f)(t.content)||(0,y.f)(t.color))&&(n=e.label+"\uc758 "+t.label)}))})),!1===(0,y.f)(n))return x("".concat(n,"(\uc774)\uac00 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."));t(3)}();break;case 3:!function(){if((0,y.f)(s.service_file))return x("\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.");t(4)}();break;case 4:!function(){for(var e=0;e<s.form.length;e++){var n=s.form[e];if((0,y.f)(n.label.trim()))return x("\uc139\uc158 ".concat(e+1,"\uc758 \uc139\uc158\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."));for(var t=0;t<n.column.length;t++){var a=n.column[t];if((0,y.f)(a.label.trim()))return x("\uc139\uc158 ".concat(e+1,", ").concat(t+1," \ud56d\ubaa9\uc758 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."))}}var c=new FormData;c.append("content[title]",s.content.title),c.append("content[description]",s.content.description),s.content.thumbnail instanceof File&&c.append("THUMBNAIL",s.content.thumbnail),c.append("content[email]",s.content.email),c.append("content[price]",s.content.price.toString()),c.append("template",s.page.template);for(var l=function(e){var n="page[".concat(e,"]"),t=s.page.data[e];c.append("".concat(n,"[key]"),t.key),c.append("".concat(n,"[label]"),t.label);for(var a=function(e){var a=t.columns[e];if(a.type===N.R.Image){var l="PAGE_".concat(t.label,"_").concat(a.label),i=a.image,s=(0,b.Z)(a,k);i&&i instanceof File&&(c.append(l,i),c.append("".concat(n,"[column][").concat(e,"][image]"),l)),Object.entries(s).forEach((function(t){var a=(0,r.Z)(t,2),l=a[0],i=a[1];!1===(0,y.f)(i)&&c.append("".concat(n,"[column][").concat(e,"][").concat(l,"]"),i.toString())}))}else Object.entries(a).forEach((function(t){var a=(0,r.Z)(t,2),l=a[0],i=a[1];!1===(0,y.f)(i)&&c.append("".concat(n,"[column][").concat(e,"][").concat(l,"]"),i.toString())}))},l=0;l<t.columns.length;l++)a(l)},o=0;o<s.page.data.length;o++)l(o);s.service_file instanceof File&&c.append("SERVICE_FILE",s.service_file);for(var u=function(e){var n="form[".concat(e,"]"),t=s.form[e];c.append("".concat(n,"[label]"),t.label),c.append("".concat(n,"[description]"),t.description);for(var a=function(a){var l="".concat(n,"[column][").concat(a,"]"),i=t.column[a],s=i.image,o=(0,b.Z)(i,_);if(s&&s instanceof File){var d="SECTION_".concat(e,"_COLUMN_").concat(a);c.append(d,s),c.append("".concat(l,"[image]"),d)}Object.entries(o).forEach((function(e){var t=(0,r.Z)(e,2),l=t[0],i=t[1];c.append("".concat(n,"[column][").concat(a,"][").concat(l,"]"),JSON.stringify(i))}))},l=0;l<t.column.length;l++)a(l)},f=0;f<s.form.length;f++)u(f);i.j.update(s.service_id,c).then((function(){d("/provider/service/".concat(s.service_id))})).catch((function(e){return x(e.message)}))}()}},children:"\ub2e4\uc74c"})]}),(0,C.jsx)(h.V,{open:m.show,message:m.message,title:"\uc54c\ub9bc",onClose:function(){p((function(e){return(0,a.Z)((0,a.Z)({},e),{},{show:!1})}))}})]})},E=t(4942),O=t(3009),T=t(3026),I=t(2745),R=t(1246),F=function(){var e=Z(),n=e.onChangeData,t=e.data.content,r=function(e,r){n({content:(0,a.Z)((0,a.Z)({},t),{},(0,E.Z)({},e,r))})};return(0,C.jsxs)("div",{className:"container-sm py-10 space-y-5",children:[(0,C.jsx)("div",{className:"bg-white p-10 rounded border border-gray100",children:(0,C.jsx)(T.p,{label:"\uc11c\ube44\uc2a4 \uc81c\ubaa9",required:!0,children:(0,C.jsx)(R.W,{className:"block w-full",placeholder:"\uc11c\ube44\uc2a4 \uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",value:t.title,onChange:function(e){r("title",e.target.value)}})})}),(0,C.jsx)("div",{className:"bg-white p-10 rounded border border-gray100",children:(0,C.jsx)(T.p,{label:"\uc11c\ube44\uc2a4 \uc18c\uac1c",required:!0,children:(0,C.jsx)(I.o,{className:"block w-full",placeholder:"\uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc18c\uac1c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",value:t.description,onChange:function(e){r("description",e.target.value)}})})}),(0,C.jsx)("div",{className:"bg-white p-10 rounded border border-gray100",children:(0,C.jsxs)(T.p,{label:"\uc378\ub124\uc77c \ub4f1\ub85d",required:!0,children:[(0,C.jsx)("p",{className:"text-gray600 mb-2.5",style:{fontSize:14,lineHeight:"22px"},children:"\uc378\ub124\uc77c\uc5d0 \ud45c\uc2dc\ub420 \uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694."}),(0,C.jsx)(O.p,{accept:"image/png,image/jpeg,image/jpg",selected_file:t.thumbnail,onChange:function(e){var n=URL.createObjectURL(e),t=Object.assign(e,{url:n});r("thumbnail",t)}})]})}),(0,C.jsx)("div",{className:"bg-white p-10 rounded border border-gray100",children:(0,C.jsx)(T.p,{label:"\ub2f4\ub2f9 \uba54\uc77c \uc8fc\uc18c",required:!0,children:(0,C.jsx)(R.W,{className:"block w-full",placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \ubc1b\uc73c\uc2e4 \ub2f4\ub2f9\uc790\uc758 \uba54\uc77c\uc8fc\uc18c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",value:t.email,onChange:function(e){r("email",e.target.value)}})})}),(0,C.jsx)("div",{className:"bg-white p-10 rounded border border-gray100",children:(0,C.jsx)(T.p,{label:"\uc11c\ube44\uc2a4 \uae08\uc561",required:!0,children:(0,C.jsx)(R.W,{className:"block w-full",placeholder:"\uc11c\ube44\uc2a4 1\ud68c\ub2f9 \uc774\uc6a9\uae08\uc561\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",value:t.price,onChange:function(e){var n=e.target.value,t=parseInt(n);!1===isNaN(t)&&r("price",t)}})})})]})},L=t(6459),q=function(e){(0,L.Z)(e);var n=Z(),t=n.data,a=n.onChangeData;return(0,C.jsx)("div",{className:"container-sm py-10",children:(0,C.jsx)("div",{className:"p-10 bg-white rounded border border-gray100",children:(0,C.jsxs)(T.p,{label:"\uc11c\ube44\uc2a4\uc5d0 \uc774\uc6a9\ub420 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud574 \uc8fc\uc138\uc694.",required:!0,children:[(0,C.jsx)("p",{className:"text-b3 text-gray600 mb-2.5",children:"\ud30c\uc77c\uc740 \ucd94\ud6c4 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,C.jsx)(O.p,{selected_file:t.service_file,onChange:function(e){a({service_file:e})}})]})})})},D=function(){var e=Z().data.content;return(0,C.jsxs)("div",{className:"py-5 px-10 space-x-2.5 flex border-b-4 border-gray100",children:[(0,C.jsx)("div",{className:"bg-gray200 rounded-lg overflow-hidden min-w-[78px]",style:{width:78,height:78},children:(null===e||void 0===e?void 0:e.thumbnail)&&(0,C.jsx)("img",{src:e.thumbnail.url,className:"w-full h-full object-cover",alt:"\uc378\ub124\uc77c"})}),(0,C.jsxs)("div",{className:"max-w-[221px] max-xl:max-w-full overflow-hidden",children:[(0,C.jsx)("h2",{className:"text-b1 font-semibold break-words line-clamp-2",children:e.title||"\uc11c\ube44\uc2a4\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),(0,C.jsx)("p",{className:"text-b3 text-gray600 whitespace-pre-line break-words line-clamp-2",children:e.description||"\uc11c\ube44\uc2a4 \uc18c\uac1c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."})]})]})},A={1:"\uae30\ubcf8\uc815\ubcf4 \ub4f1\ub85d",2:"\uc18c\uac1c\ud398\uc774\uc9c0",3:"\ud30c\uc77c\ub4f1\ub85d",4:"\uc751\ub2f5\ud3fc \uc81c\uc791"},P=function(){var e=Z(),n=e.step,t=e.data.form,a=e.onChangeData;return(0,C.jsxs)("div",{className:"bg-white border-r border-gray200 relative w-full overflow-auto max-w-[390px] max-xl:max-w-full",children:[(0,C.jsxs)("div",{className:"bg-blue500 border-b border-gray200 flex justify-center items-center p-5 space-x-2.5",children:[(0,C.jsx)("div",{className:"w-6 h-6 border border-white rounded flex items-center justify-center",children:(0,C.jsx)("span",{className:"text-b3 font-medium text-white",children:n})}),(0,C.jsx)("h1",{className:"text-b3 text-white",children:A[n]||"\uc54c \uc218 \uc5c6\uc74c"})]}),(0,C.jsx)(D,{}),(0,C.jsx)("div",{className:"px-10 max-xl:hidden",children:4===n&&(0,C.jsx)(u.A,{changeSections:function(e){a({form:e})},sections:t})})]})};function M(e){var n=JSON.stringify(e);return JSON.parse(n)}var U=function(e){var n=e.initial_value,t=(0,c.useState)(1),l=(0,r.Z)(t,2),i=l[0],s=l[1],f=(0,c.useState)(n),h=(0,r.Z)(f,2),b=h[0],g=h[1],v=(0,c.useCallback)((function(e){s(e)}),[]),j=(0,c.useCallback)((function(e){g((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}),[]),y=(0,c.useCallback)((function(e){e===d.e.TEMPLATE_1&&g((function(n){return(0,a.Z)((0,a.Z)({},n),{},{page:(0,a.Z)((0,a.Z)({},n.page),{},{template:e,data:M(m.D)})})})),e===d.e.TEMPLATE_2&&g((function(n){return(0,a.Z)((0,a.Z)({},n),{},{page:(0,a.Z)((0,a.Z)({},n.page),{},{template:e,data:M(p.P)})})})),e===d.e.TEMPLATE_3&&g((function(n){return(0,a.Z)((0,a.Z)({},n),{},{page:(0,a.Z)((0,a.Z)({},n.page),{},{template:e,data:M(x.t)})})}))}),[]);return(0,C.jsx)(w.Provider,{value:{data:b,onChangeData:j,onChangeStep:v,step:i},children:(0,C.jsxs)("div",{className:"flex relative overflow-auto bg-gray50 max-xl:flex-col ",style:{height:"calc(100vh - 60px)"},children:[(0,C.jsx)(P,{}),(0,C.jsxs)("div",{className:"flex-1 h-full overflow-auto relative",children:[(0,C.jsx)(S,{}),(0,C.jsxs)("div",{className:"relative",style:{height:"calc(100% - 65px)"},children:[1===i&&(0,C.jsx)(F,{}),2===i&&(0,C.jsx)(o.e,{value:b.page.data,onChange:function(e){return g((function(n){return(0,a.Z)((0,a.Z)({},n),{},{page:(0,a.Z)((0,a.Z)({},n.page),{},{data:e})})}))},templateId:b.page.template,onChangeTemplateId:y}),3===i&&(0,C.jsx)(q,{}),4===i&&(0,C.jsx)("div",{className:"w-full h-full max-md:h-auto max-xl:flex max-xl:flex-col",children:(0,C.jsx)(u.G,{value:b.form,onChange:function(e){return g((function(n){return(0,a.Z)((0,a.Z)({},n),{},{form:e})}))}})})]})]})]})})},V=function(){var e=(0,l.UO)(),n=(0,c.useState)(null),t=(0,r.Z)(n,2),a=t[0],o=t[1],d=(0,c.useState)(void 0),u=(0,r.Z)(d,2),m=u[0],p=u[1],x=(0,l.s0)();return(0,c.useLayoutEffect)((function(){var n=!0;return e.id?i.j.getServiceFullData(e.id).then((function(e){n&&p(e)})).catch((function(e){n&&o(e.message)})):o("id \uac12\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),function(){n=!1}}),[e.id]),(0,f.V)(),"undefined"===typeof e.id?(0,C.jsx)(l.Fg,{to:"/404",replace:!0}):void 0===m?(0,C.jsxs)("div",{className:"bg-gray50 py-20",children:[(0,C.jsx)(h.V,{open:"string"===typeof a,title:"\uc54c\ub9bc",message:a,onClose:function(){x("/provider/service")}}),(0,C.jsx)(s.T,{})]}):(0,C.jsx)(U,{initial_value:m})}},6459:function(e,n,t){function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=503.c67c85d4.chunk.js.map