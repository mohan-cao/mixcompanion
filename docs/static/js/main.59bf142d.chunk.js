(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),s=(n(81),n(20)),c=n(21),l=n(24),u=n(16),m=n(22),p=(n(82),n(51)),f=n.n(p),h=n(19),y=n.n(h),d=n(36),g=n(70),v={"1A":[8,0],"1B":[8,1],"2A":[3,0],"2B":[3,1],"3A":[10,0],"3B":[10,1],"4A":[5,0],"4B":[5,1],"5A":[0,0],"5B":[0,1],"6A":[7,0],"6B":[7,1],"7A":[2,0],"7B":[2,1],"8A":[9,0],"8B":[9,1],"9A":[4,0],"9B":[4,1],"10A":[11,0],"10B":[11,1],"11A":[6,0],"11B":[6,1],"12A":[1,0],"12B":[1,1]};function b(e,t){if(401===e.status)throw e.status;if(200!==e.status){if(t&&t.error&&t.error.message)throw t.error.message;throw e.status}}var k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toString",value:function(){return this.message}}]),t}(Object(g.a)(Error));function w(e,t){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(y.a.mark(function e(t,n){var r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n}}).catch(function(e){throw new k("Either your internet connection sucks, or Spotify's API is down..")});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e,t,n){var r=window.crypto.getRandomValues(new Uint32Array(1))[0],a="https://accounts.spotify.com/authorize?response_type=token";return a+="&redirect_uri="+t,a+="&client_id="+e,n&&(a+="&scopes="+(Array.isArray(n)?n.join(" "):n)),a+="&state="+r,new Promise(function(e,t){var n=window.open(a,"Login with Spotify","width=800,height=600");window.spotifyCallback=function(a,o,i){i=parseInt(i),n.close(),i!==r?t("Nonce is invalid, expected: ".concat(r," but got ").concat(i)):e({token:a,expires:o})}})}function x(){return(x=Object(d.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/recommendations/available-genre-seeds",e.next=3,w("https://api.spotify.com/v1/recommendations/available-genre-seeds",t);case 3:if(200===(n=e.sent).status){e.next=6;break}return e.abrupt("return",Promise.reject());case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(y.a.mark(function e(t,n,r){var a,o,i;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",Promise.reject("No search terms provided"));case 2:return a="https://api.spotify.com/v1/search?q="+n+"&type="+r,console.debug(a),e.next=6,w(a,t);case 6:return o=e.sent,e.next=9,o.json();case 9:return i=e.sent,b(o,i),e.abrupt("return",i);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return(C=Object(d.a)(y.a.mark(function e(t,n){var r,a,o,i,s,c,l,u,m,p,f,h,g;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.genres,a=n.bpm,o=void 0===a?120:a,i=n.key,s=n.songs,c=n.artist,l=function(e){return e.replace(/\s*\((.*)\)\s*/g,function(e,t){return' artist:"'.concat(t,'" ')})},u=function(e){if(!Array.isArray(e))throw new k(400);var t=e.map(function(e){return e.hasOwnProperty("artists")&&e.artists.items.length?e.artists.items.map(function(e){return e.id}).slice(0,1).join(""):""}).join(",");if(!t)throw new k("No artists found using your search terms");return"&seed_artists="+t},m=function(e){if(!Array.isArray(e))throw new k(400);var t=e.map(function(e){return e.hasOwnProperty("tracks")&&e.tracks.items.length?e.tracks.items.map(function(e){return e.id}).slice(0,1).join(""):""}).join(",");if(!t)throw new k("No tracks found using your search terms");return"&seed_tracks="+t},"https://api.spotify.com/v1/recommendations",p="https://api.spotify.com/v1/recommendations?",Array.isArray(o)&&2===o.length?p+="min_tempo="+o[0]+"&max_tempo="+o[1]:p+="min_tempo="+(o-10)+"&max_tempo="+(o+10),e.prev=7,!s){e.next=15;break}return e.next=11,Promise.all((Array.isArray(s)?s:[s]).map(function(e){return j(t,l(e),"track")}));case 11:f=e.sent,p+=m(f),e.next=27;break;case 15:if(!c){e.next=22;break}return e.next=18,Promise.all((Array.isArray(c)?c:[c]).map(function(e){return j(t,e,"artist")}));case 18:h=e.sent,p+=u(h),e.next=27;break;case 22:if(!r){e.next=26;break}p+="&seed_genres="+(Array.isArray(r)?r.join(","):r),e.next=27;break;case 26:return e.abrupt("return",Promise.reject("No search terms!"));case 27:e.next=36;break;case 29:if(e.prev=29,e.t0=e.catch(7),"number"!==typeof e.t0||400!==e.t0){e.next=35;break}return e.abrupt("return",Promise.reject("Server fucked up"));case 35:return e.abrupt("return",Promise.reject(e.t0));case 36:return e.next=38,Promise.all((i?Array.isArray(i)?i:[i]:[]).map(function(){var e=Object(d.a)(y.a.mark(function e(n){var r,a,o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=p+"&min_key="+v[n][0]+"&max_key="+v[n][0],r+="&min_mode="+v[n][1]+"&max_mode="+v[n][1],console.debug(r),e.next=5,w(r,t);case 5:return a=e.sent,e.next=8,a.json();case 8:return o=e.sent,b(a,o),e.abrupt("return",{key:n,value:o});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 38:return e.t1=function(e,t){return e.hasOwnProperty(t.key)?e:(e[t.key]=t.value,e)},e.t2={},g=e.sent.reduce(e.t1,e.t2),e.abrupt("return",g);case 42:case"end":return e.stop()}},e,null,[[7,29]])}))).apply(this,arguments)}var S=n(143),O=n(151),M=n(148),N=n(145),T=n(153),G=n(40),P=n(60),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedGenre,n=e.availableGenres,r=e.onChange,o=e.onRefreshClicked,i=e.style;return a.a.createElement(S.a,{style:i},a.a.createElement(O.a,{shrink:!0,htmlFor:"genre",style:{whiteSpace:"nowrap"}},a.a.createElement("span",{style:{verticalAlign:"top"}},"Genre"),a.a.createElement("div",{style:{display:"inline",marginLeft:4},onClick:function(){return o()}},a.a.createElement(G.a,{icon:P.a,style:{color:"#393"}}))),a.a.createElement(M.a,{style:{minWidth:70,flex:1},multiple:!0,input:a.a.createElement(N.a,{name:"genre"}),value:t,onChange:function(e){return r(e.target.value)}},n&&n.length>0?n.map(function(e){return a.a.createElement(T.a,{key:e,value:e},e.replace(/-/g," "))}):a.a.createElement(T.a,null,"No genres available")))}}]),t}(a.a.PureComponent),D=n(5),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,n=e.classes,r=e.camelotKey,o=e.onChange,i=e.style;return a.a.createElement(S.a,{style:i},a.a.createElement(O.a,{shrink:!0,htmlFor:"key"},"Key"),a.a.createElement(M.a,{input:a.a.createElement(N.a,{name:"key"}),name:"key",value:r,onChange:function(e){return o(e)}},a.a.createElement(T.a,{disabled:!0,className:n.group},"Minor keys"),t.camelotMinorKey.map(function(e){return a.a.createElement(T.a,{key:e,className:n.item,value:e},e)}),a.a.createElement(T.a,{disabled:!0,className:n.group},"Major keys"),t.camelotMajorKey.map(function(e){return a.a.createElement(T.a,{key:e,className:n.item,value:e},e)})))}}]),t}(a.a.PureComponent);_.camelotMinorKey=["1A","2A","3A","4A","5A","6A","7A","8A","9A","10A","11A","12A"],_.camelotMajorKey=["1B","2B","3B","4B","5B","6B","7B","8B","9B","10B","11B","12B"];var W=Object(D.a)(function(e){return{item:{paddingLeft:e.spacing(3)},group:{fontWeight:e.typography.fontWeightMedium,opacity:1},MenuItem:{paddingLeft:e.spacing(3)},MenuGroup:{fontWeight:e.typography.fontWeightMedium,opacity:1,cursor:"default","&:hover":{backgroundColor:"transparent !important"}}}})(_),L=n(147),q=n(154),K=n(50);function R(e){var t=e.min,n=e.max,o=e.height,i=e.selectedBpm,s=e.onBpmChange,c=e.onLongPress;return a.a.createElement("div",null,a.a.createElement(O.a,{style:{width:"100%"},shrink:!0},"BPM"),a.a.createElement("div",{style:{display:"flex",height:o}},a.a.createElement(q.a,Object.assign({},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=Object(r.useState)(!1),a=Object(K.a)(n,2),o=a[0],i=a[1];return Object(r.useEffect)(function(){var n;return o?n=setTimeout(e,t):clearTimeout(n),function(){clearTimeout(n)}},[e,t,o]),{onMouseDown:function(){return i(!0),!0},onMouseUp:function(){return i(!1),!0},onMouseLeave:function(){return i(!1),!0},onTouchStart:function(){return i(!0),!0},onTouchEnd:function(){return i(!1),!0}}}(c,500),{orientation:"vertical",min:t,max:n,value:i,onChange:function(e,t){return s(e,t)},valueLabelDisplay:"auto"}))))}var z=n(149),F={Track:"Never Gonna Give You Up, Robot Rock, Bad (Michael Jackson)",Artist:"Kanye West, Jimi Hendrix",Genre:"Pop, Rock, Country"},J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.type,r=e.value,o=e.onChange,i=e.GenreSelector,s=t.flex?{flex:t.flex}:{flexGrow:t.flexGrow,flexBasis:t.flexBasis,flexShrink:t.flexShrink};return a.a.createElement(S.a,{style:t},a.a.createElement(O.a,{shrink:!0,style:{whiteSpace:"nowrap"}},"Type"),a.a.createElement(M.a,{value:n,onChange:function(e){return o({type:e.target.value})},style:{marginRight:5}},a.a.createElement(T.a,{value:"Track"},"Track"),a.a.createElement(T.a,{value:"Artist"},"Artist"),a.a.createElement(T.a,{value:"Genre"},"Genre")),"Genre"===n?i:a.a.createElement(z.a,{value:r,onChange:function(e){return o({query:e.target.value})},style:s,placeholder:F[n],InputLabelProps:{shrink:!0,disableAnimation:!1},label:"Search"}))}}]),t}(a.a.PureComponent);J.defaultProps={type:"Track"};var U=n(71),H=n(66),V=function(e){var t=e.childrenWidth,n=e.children,r=e.style,o=Object(H.a)(),i=Object(K.a)(o,2),s=i[0],c=i[1];return a.a.createElement("div",{ref:s,style:{width:"100%",display:"flex",justifyContent:"center"}},a.a.createElement("div",{style:Object(U.a)({width:Math.floor(c/t)*t,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"},r)},n))},Y=n(69),$={A:[30,60],B:[70,90]},Q=["6","5","4","3","2","1","12","11","10","9","8","7"],X={"12A":"12A - Db Minor","1A":"1A - Ab Minor","2A":"2A - Eb Minor","3A":"3A - Bb Minor","4A":"4A - F Minor","5A":"5A - C Minor","6A":"6A - G Minor","7A":"7A - D Minor","8A":"8A - A Minor","9A":"9A - E Minor","10A":"10A - B Minor","11A":"11A - F# Minor","12B":"12B - E Major","1B":"1B - B Major","2B":"2B - F Major","3B":"3B - D Major","4B":"4B - Ab Major","5B":"5B - Eb Major","6B":"6B - Bb Major","7B":"7B - F Major","8B":"8B - C Major","9B":"9B - G Major","10B":"10B - D Major","11B":"11B - A Major"},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Math.max(0,Q.indexOf(e.slice(0,-1)))*(360/Q.length),r=$[e.slice(-1)];return"hsla(".concat(n,", ").concat(r[0],"%, ").concat(r[1],"%, ").concat(t,")")},ee=function(e){var t=Math.max(0,Q.indexOf(e.slice(0,-1)))*(360/Q.length),n=$[e.slice(-1)];return"hsl(".concat(t,", ").concat(n[0],"%, ").concat(.3*n[1],"%)")},te=function(){return a.a.createElement("div",{style:{margin:"0 auto",backgroundColor:"black",width:"100%",height:"6em",color:"white",boxSizing:"content-box"}},a.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement("h1",{style:{fontSize:"2em",margin:0}},"No results")))};function ne(e){var t=e.data,n=e.rowPadding,r=e.onArtistClicked,o=void 0===r?null:r,i=e.onSongClicked,s=void 0===i?null:i;if("object"!==typeof t)return a.a.createElement(te,null);var c=Object.keys(t).reduce(function(e,r){var i=Z(r),c=ee(r),l=function(e,t,n){if(!e||!e.tracks||e.tracks.length<1)return a.a.createElement("div",null);var r=function(e,t){return function(r){n&&(r.preventDefault(),n(e,t))}};return e.tracks.sort(function(e,t){return t.popularity-e.popularity}).map(function(e){return a.a.createElement("div",{key:e.id,className:"result-box",style:{backgroundImage:"url(".concat(e.album?e.album.images[0].url:"",")")}},a.a.createElement("div",{className:"result-vinyl"},a.a.createElement("div",{className:"song-details"},a.a.createElement("div",null,a.a.createElement("h1",{className:"artist-name"},e.artists.map(function(e,n){return a.a.createElement("a",{className:"artist-name",key:e.id+""+n,href:e.external_urls.spotify,onClick:(r=e,function(e){t&&(e.preventDefault(),t(r))}),target:"_blank",rel:"noreferrer noopener"},e.name);var r}).reduce(pe,[])),a.a.createElement("h2",{className:"song-name"},a.a.createElement("a",{className:"song-name",href:e.external_urls.spotify,onClick:r(e,e.artists[0]),target:"_blank",rel:"noreferrer noopener"},e.name))))),a.a.createElement("div",{className:"result-vinyl-outer"}),a.a.createElement("div",{className:"result-vinyl-inner"}),a.a.createElement("div",{className:"result-vinyl-dot"}))})}(t[r],o,s);return l.length&&e.push.apply(e,[a.a.createElement("div",{key:r,className:"key-row",style:{backgroundColor:i,color:c,marginBottom:n}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement("h1",{style:{fontSize:"2em",margin:0}},X[r])))].concat(Object(Y.a)(l))),e},[]);return c.length?c:a.a.createElement(te,null)}var re=n(150);function ae(e){var t=e.open,n=e.error,r=e.onClose;return a.a.createElement(re.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,onClose:r,autoHideDuration:6e3,ContentProps:{"aria-describedby":"message-id"},message:a.a.createElement("span",{id:"message-id"},"Error: ",n," ")})}var oe,ie,se=n(68),ce=function(e,t){return e+(t?"B":"A")},le=120,ue=1,me=!1,pe=function(e,t){return 0===e.length?e.push(t):e.push(a.a.createElement("br",{key:e.length+1}),t),e},fe=(oe=1,ie=12,function(e,t){return t=e+t,(t%=ie-oe+1)<oe&&(t+=ie),t});function he(){var e=this,t=f.a.parse(window.location.hash);if(t){var n=t.access_token,r=t.expires_in;if(function(e,t,n){if(window.opener&&window.opener.spotifyCallback){try{window.opener.spotifyCallback(e,t,n)}catch(r){this.setNewToken(e,t)}return!0}return!1}(n,r,t.state));else if(n&&r){var a=(new Date).getTime()+1e3*parseInt(r)*.9;this.setNewToken(n,a)}else{var o=window.localStorage.getItem("token"),i=window.localStorage.getItem("expires");(new Date).getTime()<parseInt(i)&&this.setState({token:o,expires:i})}window.history.replaceState(null,null," ");var s=t.search;if(s){var c=function(e){try{var t=JSON.parse(atob(e));return Array.isArray(t[0])||"number"===typeof t[0]?"number"!==typeof t[1]||t[1]<1||t[1]>12?{}:!Array.isArray(t[3])&&"string"!==typeof t[3]||!Array.isArray(t[4])&&"string"!==typeof t[4]?{}:{selectedBpm:t[0],number:parseInt(t[1]),isMinor:!!t[2],type:t[3],query:t[4]}:{}}catch(n){return console.error(n),{}}}(s);Object.keys(c).length>0&&(console.log(c),this.setState(c,function(){return e.state.token&&e.startSearch()}),window.location.hash+=(window.location.hash?"&search=":"search=")+s)}}}var ye=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={number:ue,isMinor:me,token:null,expires:0,availableGenres:["country","classical","rock","pop","blues","r-n-b"],results:null,selectedBpm:le,type:"Track",query:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){he.bind(this)()}},{key:"setNewToken",value:function(e,t){window.localStorage.getItem("token")!==e&&(window.localStorage.setItem("token",e),window.localStorage.setItem("expires",t),this.setState({token:e,expires:(new Date).getTime()+t}))}},{key:"getToken",value:function(){var e=this;E("4a4e5068f705407480266c7e7c8d7dfa","https://www.mohancao.me/mix-companion").then(function(t){var n=t.token,r=t.expires;e.setNewToken(n,r)})}},{key:"setKey",value:function(e){var t,n=(t=e.target.value,[parseInt(t.slice(0,-1)),"b"===t.slice(-1).toLowerCase()]);this.setState({number:n[0]?n[0]:ue,isMinor:n[1]?n[1]:me})}},{key:"getGenres",value:function(){var e=this;(function(e){return x.apply(this,arguments)})(this.state.token).then(function(t){return e.setState({availableGenres:t.genres})}).catch(function(t){401===t?e.getToken():e.setState({error:""+t})})}},{key:"startSearch",value:function(){var e=this,t=this.state,n=t.token,r=t.selectedBpm,a=t.number,o=t.isMinor,i=t.type,s=t.query,c="";"Genre"===i&&s&&s.length&&s.length>5&&(c+="Sorry, can't have more than 5 genres. "),c?this.setState({error:c}):function(e,t){return C.apply(this,arguments)}(n,{genres:"Genre"===i?s:null,bpm:r,key:[ce(a,o),ce(fe(a,-1),o),ce(fe(a,1),o),ce(a,!o)],songs:"Track"===i?s.split(",").map(function(e){return e.trim()}):null,artist:"Artist"===i?s.split(",").map(function(e){return e.trim()}):null}).then(function(t){var n=f.a.parse(window.location.hash);n.search=function(e){var t=e.selectedBpm,n=e.number,r=e.isMinor,a=e.type,o=e.query;return btoa(JSON.stringify([t,n,r,a,o]))}({selectedBpm:r,number:a,isMinor:o,type:i,query:s}),window.location.hash=f.a.stringify(n),e.setState({results:t})}).catch(function(t){401===t?e.getToken():e.setState({error:""+t})})}},{key:"handleBpmChange",value:function(e,t){e.shiftKey&&"number"===typeof this.state.selectedBpm?t=[this.state.selectedBpm,t]:Array.isArray(t)&&t[0]===t[1]&&(t=t[0]),this.setState({selectedBpm:t})}},{key:"handleSongClick",value:function(e,t){this.setState({type:"Track",query:e.name+" ("+t.name+")"})}},{key:"handleArtistClick",value:function(e){this.setState({type:"Artist",query:e.name})}},{key:"setSearchTerms",value:function(e){var t=e.query,n=e.type;n?this.setState({type:n,query:""}):this.setState({query:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.number,r=t.isMinor,o=t.token,i=t.results,s=t.availableGenres,c=t.selectedBpm,l=t.type,u=t.query,m=t.error;return o?a.a.createElement("div",{className:"App"},a.a.createElement(ae,{open:!!m,error:m,onClose:function(){return e.setState({error:null})}}),a.a.createElement("div",{className:"search"},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"70%",flex:"1 1 auto",overflow:"auto"}},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(W,{style:{flexDirection:"row",flex:"0 0 auto",alignItems:"center"},camelotKey:ce(n,r),onChange:function(t){return e.setKey(t)}}),a.a.createElement(J,{style:{flexDirection:"row",flex:"1 1 150px",minWidth:"150px",alignItems:"center",marginLeft:5},type:l,value:u,onChange:function(t){return e.setSearchTerms(t)},GenreSelector:a.a.createElement(I,{style:{flexDirection:"row",flex:"1 1 auto",alignItems:"center",marginLeft:5},selectedGenre:"Genre"===l&&Array.isArray(u)?u:[],availableGenres:s,onChange:function(t){return t.length<=5&&e.setState({query:t})},onRefreshClicked:function(){return e.getGenres()}})})),a.a.createElement("div",{style:{marginTop:5}},a.a.createElement(L.a,{style:{width:"100%"},color:"primary",variant:"contained",onClick:function(){return e.startSearch()}},"Start search"))),a.a.createElement("div",{style:{flex:"0 1 auto"}},a.a.createElement(R,{onLongPress:function(){return"ontouchstart"in document.documentElement&&e.handleBpmChange({},[50,250])},selectedBpm:c,onBpmChange:function(t,n){return e.handleBpmChange(t,n)},height:75,min:0,max:300}))),a.a.createElement("div",{className:"suggest-bar"},"Getting recommendations for ",a.a.createElement("span",{style:{color:"#AEA"}},l.toLowerCase(),"s"),u?a.a.createElement("span",null," like\xa0",a.a.createElement("span",{style:{color:"#EAA"}},Array.isArray(u)?a.a.createElement("span",null,u.join(", ")):a.a.createElement("span",null,u.split(",").reduce(function(e,t){return 0===e.length?(e.push(a.a.createElement("span",null,t)),e):(e.push(a.a.createElement("span",{style:{color:"white"}},", and "),a.a.createElement("span",null,t)),e)},[])))):"",Array.isArray(c)&&2===c.length?a.a.createElement("span",null," and only tracks that are ",a.a.createElement("span",{style:{color:"#AAE"}},c[0])," to ",a.a.createElement("span",{style:{color:"#AAE"}},c[1]," bpm")," "):"number"===typeof c?a.a.createElement("span",null," for tracks with ",a.a.createElement("span",{style:{color:"#AAE"}},c," (\xb1 10) bpm")," "):""),a.a.createElement("div",{style:{padding:"20px 0",display:"flex",justifyContent:"center"}},i?a.a.createElement(V,{childrenWidth:210,style:{backgroundColor:"rgba(0, 0, 0, 0.2)"}},a.a.createElement(ne,{data:i,rowPadding:0,onSongClicked:function(t,n){return e.handleSongClick(t,n)},onArtistClicked:function(t){return e.handleArtistClick(t)}})):a.a.createElement("div",null))):a.a.createElement("div",{className:"App",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},a.a.createElement(L.a,{variant:"outlined",onClick:function(){return e.getToken()},className:"loginBtn"},a.a.createElement(G.a,{icon:se.a,style:{marginRight:5}}),"Login to Spotify to use this app"))}}]),t}(a.a.Component),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(ye,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mix-companion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/mix-companion","/service-worker.js");de?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ge(t,e)})}}()},76:function(e,t,n){e.exports=n(111)},81:function(e,t,n){},82:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.59bf142d.chunk.js.map