(this.webpackJsonparogyam=this.webpackJsonparogyam||[]).push([[0],{44:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/patient2.fb655485.png"},52:function(e,t,a){e.exports=a.p+"static/media/loc_mark.97b6c35c.png"},56:function(e,t,a){e.exports=a(90)},61:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(26),r=a.n(l),c=(a(61),a(6)),i=a(7),s=a(11),u=a(10),m=a(28),h=a(12),p=(a(44),a(17)),g=a.n(p),f=a(32),d=a.n(f),E=a(50),v=a.n(E),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={showSideNav:!1},e.handleSideNavToggle=function(){e.setState((function(e){return{showSideNav:!e.showSideNav}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"header",style:{position:"relative"}},o.a.createElement(v.a,{handleSideNavToggle:this.handleSideNavToggle,logo:"https://wallpaperplay.com/walls/full/b/d/1/58065.jpg",showSideNav:this.state.showSideNav,logoStyles:{height:"65px",width:"85px",valign:"center",position:"center"},navBarStyles:{boxShadow:"10"},linkStyles:{color:"blue",fontWeight:"bold"}},o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("a",{href:"/"}),o.a.createElement("h7",null,"Welcome ",g.a.auth().currentUser.displayName),o.a.createElement("img",{alt:"profile picture",height:"25px",width:"25px",src:g.a.auth().currentUser.photoURL}),o.a.createElement("button",{onClick:function(){return g.a.auth().signOut()}},"Sign out!"),o.a.createElement("a",{href:"/"})))}}]),a}(n.Component),y=a(5),S=a.n(y),j=a(95),O=a(96),C=a(91),k=a(94),w=a(2),A=a.n(w);a(78);A.a.initializeApp({apiKey:"AIzaSyBwBqWKrsQo44jyp-tvv-4CXrsmE6uU1Vg",authDomain:"project-arogyam.firebaseapp.com",databaseURL:"https://project-arogyam.firebaseio.com",projectId:"project-arogyam",storageBucket:"project-arogyam.appspot.com",messagingSenderId:"309132614366",appId:"1:309132614366:web:dbe8f327134f151d2ac04f",measurementId:"G-G82PVKL5TQ"}),A.a.analytics();var N=A.a.firestore(),T=(A.a,a(55)),M=(a(84),a(51)),D=a.n(M),I=a(52),x=a.n(I),U=(a(85),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onChange=function(t){var a=t.currentTarget.value;console.log(a),e.props.onChange&&e.props.onChange(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"basemaps-container"},o.a.createElement("select",{value:this.props.basemap,onChange:this.onChange},o.a.createElement("option",{value:"osm"},"OSM"),o.a.createElement("option",{value:"hot"},"OSM HOT"),o.a.createElement("option",{value:"dark"},"DARK"),o.a.createElement("option",{value:"cycle"},"CYCLE MAP")))}}]),a}(o.a.Component)),P=a(92),z=a(93),B=(a(86),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[]},console.log("contructor"),n}return Object(i.a)(a,[{key:"render",value:function(){return console.log("render"),console.info(this.state.data),o.a.createElement(P.a,null,this.state.data.map((function(e){return o.a.createElement(z.a,{key:e.properties,data:e},o.a.createElement(k.a,null,"CEN_2001 : ",e.properties.CEN_2001," ",o.a.createElement("br",null),"SUB_DIST : ",e.properties.SUB_DIST," ",o.a.createElement("br",null),"TYPE     : ",e.properties.TYPE," ",o.a.createElement("br",null),"STATE    : ",e.properties.STATE," ",o.a.createElement("br",null),"NAME     : ",e.properties.NAME," ",o.a.createElement("br",null),"DISTRICT : ",e.properties.DISTRICT))})))}},{key:"componentDidMount",value:function(){this.props.url&&this.fetchData(this.props.url),console.log("did mount")}},{key:"componentWillUnmount",value:function(){console.log("will unmount")}},{key:"fetchData",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({data:e.features})}),(function(e){console.error(e)}))}}]),a}(o.a.Component)),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onChange=function(t){var a=t.currentTarget.value;console.log(a),e.props.onChange&&e.props.onChange(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"month-container"},o.a.createElement("select",{value:this.props.basemap,onChange:this.onChange},o.a.createElement("option",{value:"all"},"ALL"),o.a.createElement("option",{value:"1"},"January"),o.a.createElement("option",{value:"2"},"February"),o.a.createElement("option",{value:"3"},"March"),o.a.createElement("option",{value:"4"},"April"),o.a.createElement("option",{value:"5"},"May"),o.a.createElement("option",{value:"6"},"June"),o.a.createElement("option",{value:"7"},"July"),o.a.createElement("option",{value:"8"},"August"),o.a.createElement("option",{value:"9"},"September"),o.a.createElement("option",{value:"10"},"October"),o.a.createElement("option",{value:"11"},"November"),o.a.createElement("option",{value:"12"},"Decemebr")))}}]),a}(o.a.Component);S.a.Icon.Default.imagePath="https://unpkg.com/leaflet@1.5.0/dist/images/";var L=S.a.icon({iconUrl:D.a,iconSize:[50,50],popupAnchor:[2,-40],shadowSize:[42,42]}),G=S.a.icon({iconUrl:x.a,iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[48,48],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[48,48]}),J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={location:null,center:[11.833778,75.968628],lat:11.833262,lng:75.969977,zoom:10,basemap:"osm",count:0,geojsonvisible:!1,month:"all"},e.onBMChange=function(t){e.setState({basemap:t})},e.onMonChange=function(t){console.log("month",t),N.collection("patient").get().then((function(a){var n={lobb:[],m:2};a.forEach((function(e){var a=e.data();"all"!==t?"true"===a.flag&&a.month===t&&null!=a.lat&&(console.log("mon,name",a.name),n.lobb.push(a)):"true"===a.flag&&null!=a.lat&&(console.log("all,name",a.name),n.lobb.push(a))})),e.setState({location:n})}))},e.onGeojsonToggle=function(t){e.setState({geojsonvisible:t.currentTarget.checked})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mountedg"),N.collection("patient").get().then((function(t){var a={lobb:[],m:2};t.forEach((function(e){var t=e.data();"true"===t.flag&&null!=t.lat&&(console.log("first name",t.name),a.lobb.push(t))})),e.setState({location:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=[this.state.lat,this.state.lng],t=this.state.zoom;return this.state.location&&console.log("hhh",this.state.location.lobb),o.a.createElement("div",null,o.a.createElement(R,{month:this.state.month,onChange:this.onMonChange}),o.a.createElement(j.a,{className:"mapstyle",zoom:t,center:e},o.a.createElement(T.a,{className:"custom-style",inputPlaceholder:"Search Locations",showPopup:!0,closeResultsOnClick:!0,provider:"OpenStreetMap",providerOptions:{region:"wayanad"},markerIcon:G,position:"topleft",zoom:15,showMarker:!0}),o.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:{osm:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",hot:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",cycle:"https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}[this.state.basemap]}),o.a.createElement(U,{basemap:this.state.basemap,onChange:this.onBMChange}),o.a.createElement("div",{className:"geojson-toggle"},o.a.createElement("label",{htmlFor:"layertoggle"},"Toggle Geojson "),o.a.createElement("input",{type:"checkbox",name:"layertoggle",id:"layertoggle",value:this.state.geojsonvisible,onChange:this.onGeojsonToggle})),this.state.geojsonvisible&&o.a.createElement(B,{url:"geojson.json"}),this.state.location&&this.state.location.lobb.map((function(e,t){var a=e.lat,n=e.long,l=e.age,r=e.name,c=e.score;return o.a.createElement(C.a,{position:[a,n],icon:L,key:t},o.a.createElement(k.a,null,"Name : ",r," , Age : ",l,", Score : ",c))}))))}}]),a}(n.Component),W=(n.Component,a(87),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={students:[{id:1,name:"Wasif",age:21,email:"wasif@email.com"},{id:2,name:"Ali",age:19,email:"ali@email.com"},{id:3,name:"Saad",age:16,email:"saad@email.com"},{id:4,name:"Asad",age:25,email:"asad@email.com"}],location:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mountedg"),N.collection("patient").get().then((function(t){var a={lobb:[],m:2};t.forEach((function(e){var t=e.data();a.lobb.push(t)})),e.setState({location:a}),console.log("loc",e.state.location)})).catch((function(e){return console.log(e)}))}},{key:"renderTableHeader",value:function(){if(this.state.location)return Object.keys(this.state.location.lobb[0]).map((function(e,t){return o.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"renderTableData",value:function(){return this.state.location&&this.state.location.lobb.map((function(e,t){var a=e.name,n=e.age,l=e.score,r=e.flag;return o.a.createElement("tr",{key:t},o.a.createElement("td",null,t),o.a.createElement("td",null,a),o.a.createElement("td",null,n),o.a.createElement("td",null,l),o.a.createElement("td",null,r))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{id:"title"},"Users"),o.a.createElement("table",{id:"students"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Sl NO"),o.a.createElement("th",null,"NAME"),o.a.createElement("th",null,"AGE"),o.a.createElement("th",null,"SCORE"),o.a.createElement("th",null,"STATUS")),this.renderTableData())))}}]),a}(n.Component)),_=a(37),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={notsc:0,posi:0,nega:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mountedg"),N.collection("patient").get().then((function(t){t.forEach((function(t){var a=t.data();"Not Scanned"===a.flag?e.setState({notsc:e.state.notsc+1}):"true"===a.flag?e.setState({posi:e.state.posi+1}):"false"===a.flag&&e.setState({nega:e.state.nega+1})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.createElement(_.a,{chartType:"PieChart",width:"1200px",height:"400px",loader:n.createElement("div",null,"Loading Chart"),data:[["Task","Hours per Day"],["Not Consulted",this.state.notsc],["Positive",this.state.posi],["Negative",this.state.nega]],options:{title:"User Statistics",is3D:!0},rootProps:{"data-testid":"2"}})}}]),a}(n.Component),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={jan:0,feb:0,mar:0,apr:0,may:0,jun:0,jul:0,aug:0,sep:0,oct:0,nov:0,dec:0,njan:0,nfeb:0,nmar:0,napr:0,nmay:0,njun:0,njul:0,naug:0,nsep:0,noct:0,nnov:0,ndec:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mountedg"),N.collection("patient").get().then((function(t){t.forEach((function(t){var a=t.data();console.log("flagf",a.flag),"true"===a.flag?"1"===a.month?e.setState({jan:e.state.jan+1}):"2"===a.month?e.setState({feb:e.state.feb+1}):"3"===a.month?e.setState({mar:e.state.mar+1}):"4"===a.month?e.setState({apr:e.state.apr+1}):"5"===a.month?e.setState({may:e.state.may+1}):"6"===a.month?e.setState({jun:e.state.jun+1}):"7"===a.month?e.setState({jul:e.state.jul+1}):"8"===a.month?e.setState({aug:e.state.aug+1}):"9"===a.month?e.setState({sep:e.state.sep+1}):"10"===a.month?e.setState({oct:e.state.oct+1}):"11"===a.month?e.setState({nov:e.state.nov+1}):"12"===a.month&&e.setState({dec:e.state.dec+1}):"false"===a.flag&&("1"===a.month?e.setState({njan:e.state.njan+1}):"2"===a.month?e.setState({nfeb:e.state.nfeb+1}):"3"===a.month?e.setState({nmar:e.state.nmar+1}):"4"===a.month?e.setState({napr:e.state.napr+1}):"5"===a.month?e.setState({nmay:e.state.nmay+1}):"6"===a.month?e.setState({njun:e.state.njun+1}):"7"===a.month?e.setState({njul:e.state.njul+1}):"8"===a.month?e.setState({naug:e.state.naug+1}):"9"===a.month?e.setState({nsep:e.state.nsep+1}):"10"===a.month?e.setState({noct:e.state.noct+1}):"11"===a.month?e.setState({nnov:e.state.nnov+1}):"12"===a.month&&e.setState({ndec:e.state.ndec+1}))}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log("count njul",this.state.jul),n.createElement(_.a,{className:"bar",width:"1200px",height:"400px",chartType:"Bar",loader:n.createElement("div",null,"Loading Chart"),data:[["Month","Positive","Negative"],["Jan",this.state.jan,this.state.njan],["Feb",this.state.feb,this.state.nfeb],["Mar",this.state.mar,this.state.nmar],["Apr",this.state.apr,this.state.napr],["May",this.state.may,this.state.nmay],["Jun",this.state.jun,this.state.njun],["Jul",this.state.jul,this.state.njul],["Aug",this.state.aug,this.state.naug],["Sept",this.state.sep,this.state.nsep],["Oct",this.state.oct,this.state.noct],["Nov",this.state.nov,this.state.nnov],["Dec",this.state.dec,this.state.ndec]],options:{chart:{title:"Patient Count Bar Chart",subtitle:"2020"}},rootProps:{"data-testid":"2"}})}}]),a}(n.Component),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[g.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!0}}},e.componentDidMount=function(){g.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t}),console.log("user",t)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.isSignedIn?o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement("h1",null,"AROGYAM"),o.a.createElement("ul",{className:"header"},o.a.createElement("li",null,o.a.createElement(m.b,{to:"/mapi"},"Map")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/barchart"},"Bar Chart")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/piechart"},"Pie Chart")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/datatable"},"Manage Users")),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null),o.a.createElement("li",null,"Welcome ",g.a.auth().currentUser.displayName),o.a.createElement("img",{alt:"profile picture",height:"25px",width:"25px",src:g.a.auth().currentUser.photoURL}),o.a.createElement("li",null),o.a.createElement("button",{onClick:function(){return g.a.auth().signOut()}},"Sign out!"))),o.a.createElement("div",{className:"content"},o.a.createElement(h.a,{path:"/mapi",component:J}),o.a.createElement(h.a,{path:"/barchart",component:K}),o.a.createElement(h.a,{path:"/piechart",component:F}),o.a.createElement(h.a,{path:"/datatable",component:W}))):o.a.createElement(d.a,{uiConfig:this.uiConfig,firebaseAuth:g.a.auth()}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.a6983dd8.chunk.js.map