"use strict";(self.webpackChunklug_creative_world=self.webpackChunklug_creative_world||[]).push([[116],{5479:function(e,s,a){a.r(s),a.d(s,{default:function(){return _}});var r=a(4165),t=a(5861),i=a(9439),c=a(8322),n=a(7764),l=a(428),o=a(1933),d=a(1687),h=a(6355),u=a(1087),x=a(3310),p=a(2791),m=a(184),j=(0,p.memo)((function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{id:"articlelist",children:(0,m.jsxs)("div",{className:"list_wrapper",children:[(0,m.jsx)(u.rU,{className:"link",to:"/article/".concat(e.article._id),children:(0,m.jsx)("h3",{children:e.article.title})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:e.article.categories[0]})," ",(0,m.jsx)("span",{children:"---"}),(0,m.jsx)("span",{children:new Date(e.article.createdAt).toLocaleDateString("en-US",{month:"short",day:"2-digit"})})]})]})})})})),f=(0,p.memo)((function(){var e=(0,p.useState)(),s=(0,i.Z)(e,2),a=s[0],f=s[1],_=(0,p.useState)(!1),g=(0,i.Z)(_,2),v=g[0],N=g[1],b=(0,p.useState)(""),w=(0,i.Z)(b,2),k=w[0],Z=w[1],S=(0,p.useState)(""),y=(0,i.Z)(S,2),C=y[0],P=y[1],U=(0,p.useState)([]),T=(0,i.Z)(U,2),B=T[0],L=T[1],E=(0,p.useState)(0),F=(0,i.Z)(E,2),H=F[0],I=F[1],D=(0,p.useState)(!0),Q=(0,i.Z)(D,2),A=Q[0],R=Q[1],z=(0,p.useCallback)((function(){R(!A)}),[A]);(0,p.useEffect)((function(){console.log("waiting"),O()}),[]);var J,O=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.P5)(H);case 3:if(s=e.sent,console.log(s),L(s),console.log(s.length),I(H+s.length),0!==s.length){e.next=10;break}return e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),V=(0,o.useQuery)("topdata",d.ry),X=V.data,M=(V.error,V.isLoading,V.refetch,(0,o.useQuery)("catsdata",d.Qv)),W=M.data,q=(M.error,M.isLoading),G=(0,o.useQuery)("topauthorsdata",d.bu),K=G.data;G.error,G.isLoading;console.log(K),(0,p.useEffect)((function(){function e(){return(e=(0,t.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d._H)(k);case 2:s=e.sent,f(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),(0,p.useEffect)((function(){function e(){return(e=(0,t.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.fd)(C);case 2:s=e.sent,f(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]);return v?v&&(J=a):J=B,q||!B?(0,m.jsx)(x.Z,{}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{id:"dashboard",children:[(0,m.jsx)(n.Z,{showBottomBoxShadow:!0,sideBarHandle:z,sidebar:A}),(0,m.jsxs)("div",{className:"dashboard_wrapper",children:[(0,m.jsxs)("div",{className:A?"show_left":"dashboard_left",children:[(0,m.jsxs)("div",{className:"search_div",children:[(0,m.jsx)("input",{className:"search",type:"text",name:"",value:C,onChange:function(e){return P(e.target.value)},placeholder:"Search by article title..."}),(0,m.jsx)(h.U41,{className:"search_icon",onClick:function(e){e.preventDefault(),N(!0)}})]}),(0,m.jsxs)("div",{id:"categories",children:[(0,m.jsx)("h1",{children:"Categories"}),(0,m.jsx)("ul",{children:W&&W.map((function(e){return(0,m.jsx)("li",{value:e,onClick:function(){var s;s=e,N(!0),Z(s),R(!0),console.log(s)},className:"link",children:e},e.id)}))})]}),(0,m.jsxs)("div",{id:"toppost",children:[(0,m.jsx)("h1",{children:"Top Posts"}),(0,m.jsx)("ul",{children:X&&X.map((function(e){return(0,m.jsx)("li",{className:"link",children:(0,m.jsx)(j,{article:e})},e.id)}))})]}),(0,m.jsxs)("div",{className:"top_authors",children:[(0,m.jsx)("h2",{children:"Top Authors"}),(0,m.jsx)("div",{className:"authors_contain",children:K&&K.map((function(e){return(0,m.jsx)(u.rU,{to:"/profile/".concat(e.id),children:(0,m.jsx)("img",{src:e.profilePic?"data:image/png;base64,".concat(e.profilePic):l,alt:"top_author_profile"})},e.name)}))})]})]}),(0,m.jsxs)("div",{className:A?"dashboard_right":"show_right",children:[J.map((function(e){return(0,m.jsx)(c.Z,{articles:e},e._id)})),";"]})]})]})})})),_=f},8322:function(e,s,a){a.d(s,{Z:function(){return v}});var r=a(4165),t=a(5861),i=a(9439),c=a(6355),n=a(7692),l=a(6856),o=a(8820),d=a(7689),h=a(1087),u=a(2791),x=a(428),p=a.p+"static/media/articlepic.0678e7a45e58ee833e93.jpg",m=a(1687),j=a(3855),f=a(6969),_=a(184),g=(0,u.memo)((function(e){var s=e.articles,a=(0,d.s0)(),g=(0,j.I0)(),v=localStorage.getItem("user"),N=JSON.parse(v)._id===s.authorId,b=(0,u.useState)(0),w=(0,i.Z)(b,2),k=w[0],Z=w[1],S=(0,u.useState)(!1),y=(0,i.Z)(S,2),C=y[0],P=y[1],U=(0,u.useState)("Not Flagged"),T=(0,i.Z)(U,2),B=T[0];T[1];function L(){return E.apply(this,arguments)}function E(){return(E=(0,t.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C?(Z(k-1),P(!C)):(Z(k+1),P(!C)),e.next=3,(0,m.AS)(s._id);case 3:a=e.sent,P(a.liked),Z(a.likes);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.useEffect)((function(){if(void 0!==s._id){var e=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.nN)(s._id);case 3:a=e.sent,Z(a.likes),P(a.liked),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[s._id]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"article_post",children:(0,_.jsxs)("div",{id:"article_card_wrapper",children:[(0,_.jsx)("div",{className:"article_card_about",children:(0,_.jsxs)("ul",{children:[(0,_.jsx)(h.rU,{to:"/profile/".concat(s.authorId),className:"article_card_linker",children:(0,_.jsxs)("li",{children:[s.authorProfilePic?(0,_.jsx)("img",{src:"data:image/png;base64,".concat(s.authorProfilePic),alt:""}):(0,_.jsx)("img",{src:x,alt:"profile"})," ",(0,_.jsx)("span",{children:s.author})]})}),(0,_.jsx)("li",{children:new Date(s.createdAt).toLocaleDateString("en-US",{month:"short",day:"2-digit"})}),(0,_.jsxs)("li",{className:"show_on",children:[s.timeTakenToReadPost," min read"]}),(0,_.jsx)("li",{className:"show_on",children:B})]})}),(0,_.jsxs)("div",{className:"article_card_mid",children:[(0,_.jsxs)("div",{className:"letter_part",children:[(0,_.jsx)(h.rU,{className:"article_card_linker",to:"/article/".concat(s._id),children:(0,_.jsx)("h2",{children:s.title})}),(0,_.jsx)("p",{children:s.description})]}),(0,_.jsx)("div",{className:"img_part",children:null!==s.descPhoto?(0,_.jsx)("img",{src:"data:image/png;base64,".concat(s.descPhoto),alt:"article_img_blob"}):(0,_.jsx)("img",{src:p,alt:"default_img"})})]}),(0,_.jsxs)("div",{className:"article_reactions",children:[(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)("span",{className:"card_topic",children:s.categories[0]})}),(0,_.jsx)("li",{children:(0,_.jsxs)("span",{className:"show_of",children:[s.timeTakenToReadPost," min read"]})}),(0,_.jsx)("li",{children:(0,_.jsx)("span",{className:"show_of",children:B})}),(0,_.jsxs)("li",{children:[k," likes"]})]}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("a",{href:"/",children:(0,_.jsx)(c.ZH2,{className:"article_card_icons hvr-float-shadow"})}),C?(0,_.jsx)("li",{children:(0,_.jsx)(o.L7p,{onClick:L,className:"article_card_icons hvr-float-shadow"})}):(0,_.jsx)("li",{children:(0,_.jsx)(n.UZT,{onClick:L,className:"article_card_icons hvr-float-shadow"})}),!N&&(0,_.jsx)("li",{children:(0,_.jsx)(c.ZNz,{onClick:function(){(0,m.j8)(s._id)},className:"article_card_icons hvr-float-shadow"})}),N&&(0,_.jsx)("li",{children:(0,_.jsx)(l.FH3,{onClick:function(){(0,m.jX)(s._id)},className:"article_card_icons hvr-float-shadow"})}),N&&(0,_.jsx)("li",{children:(0,_.jsx)(n.y4V,{onClick:function(){g((0,f.Vx)({id:s._id,title:s.title,body:s.body,timeTakenToReadPost:s.timeTakenToReadPost,description:s.description,categories:s.categories[0],isUpdate:!0})),a("/writepage")},className:"article_card_icons hvr-float-shadow"})})]})]})]})})})})),v=g},7764:function(e,s,a){a.d(s,{Z:function(){return _}});var r=a(4165),t=a(5861),i=a(9439),c=a(2791),n=a(5236),l=a(428),o=a(71),d=a(1578),h=a(6355),u=a(1087),x=a(1687),p=a(3855),m=a(8613),j=a(184),f=(0,c.memo)((function(e){var s=(0,c.useState)({}),a=(0,i.Z)(s,2),f=a[0],_=a[1],g=(0,c.useState)(!1),v=(0,i.Z)(g,2),N=v[0],b=v[1],w=(0,p.I0)(),k=["topbar",e.showBottomBoxShadow?"bottom-box-shadow":""].join(" "),Z=localStorage.getItem("user"),S=JSON.parse(Z);(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.FQ)(S._id);case 2:s=e.sent,_(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[S._id]);var y=(0,c.useCallback)((function(){w((0,m.xz)(N))}));function C(){b(!N),y()}return(0,j.jsxs)("section",{className:k,children:[(0,j.jsxs)("div",{className:"container",children:[(0,j.jsxs)("div",{className:"logo-1",children:[(0,j.jsx)(u.rU,{to:"/dashboard",children:(0,j.jsx)("img",{className:"img1",src:n,alt:"lancaster-logo"})}),e.showText?(0,j.jsx)("span",{className:"logo-text",children:e.logoText}):(0,j.jsx)(u.rU,{to:"/dashboard",className:"home_link",children:(0,j.jsxs)("span",{className:"logo-text other_small",children:["Scholar",(0,j.jsx)("span",{className:"colored_part",children:"Scribe"})]})})]}),(0,j.jsxs)("ul",{className:"navbar",children:[e.showButton?(0,j.jsx)("li",{children:(0,j.jsx)("button",{className:"publish-button hvr-wobble-top",onClick:e.publishClick,children:"Publish"})}):(0,j.jsx)("li",{children:(0,j.jsxs)(u.rU,{to:"/writepage",className:"write",children:[(0,j.jsx)(o.tUd,{className:"write_icon"}),(0,j.jsx)("span",{className:"write_link hvr-wobble-top",children:"Write"})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)("div",{className:"bg__change",children:[(0,j.jsx)("input",{type:"checkbox",className:"checkbox",onClick:C}),(0,j.jsxs)("label",{for:"checkbox",className:"checkbox__label",children:[(0,j.jsx)(h.Mei,{className:"fa-sun"}),(0,j.jsx)(h.TLr,{className:"fa-moon"}),(0,j.jsx)("span",{class:"check__ball",onClick:C})]})]})}),e.profile?(0,j.jsx)("li",{children:(0,j.jsx)(u.rU,{to:"/",children:(0,j.jsx)("button",{className:"publish-button hvr-wobble-top",onClick:e.logoutClick,children:"Logout"})})}):(0,j.jsx)("li",{children:(0,j.jsx)(u.rU,{to:"/profile/".concat(S._id),children:f.profilePicture?(0,j.jsx)("img",{className:"img4",src:"data:image/png;base64,".concat(f.profilePicture),alt:""}):(0,j.jsx)("img",{className:"img4",src:l,alt:""})})})]})]}),e.sidebar?e.showBottomBoxShadow&&(0,j.jsx)(d.Xlk,{className:"topbar_panel",onClick:e.sideBarHandle}):e.showBottomBoxShadow&&(0,j.jsx)(d.mtd,{className:"topbar_panel",onClick:e.sideBarHandle})]})})),_=f},428:function(e,s,a){e.exports=a.p+"static/media/profilevactor.4779aeafa6e57abc3cd1.jpg"}}]);
//# sourceMappingURL=116.af1145ea.chunk.js.map