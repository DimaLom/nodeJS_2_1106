(this.webpackJsonpbullsncows=this.webpackJsonpbullsncows||[]).push([[0],{47:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),u=(a(52),a(35)),s=a.n(u),i=a(38),o=a(24),m=a(25),d=a(32),p=a(31),v=a(59),E=a(60);function h(e){var t=e.initGame,a=e.guess;return l.a.createElement(v.a,null,l.a.createElement("h1",null,"\u0411\u044b\u043a\u0438 \u0438 \u041a\u043e\u0440\u043e\u0432\u044b"),l.a.createElement("h6",null,'\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0433\u0440\u0443 "\u0411\u044b\u043a\u0438 \u0438 \u041a\u043e\u0440\u043e\u0432\u044b"!'),l.a.createElement("p",null,'\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443, \u0436\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435! \u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u043d\u0430\u043a\u043e\u043c \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438, \u0432\u043d\u0438\u0437\u0443 \u0432\u0441\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e, \u0440\u0430\u0437\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439 "\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b" \u0438 \u0447\u0438\u0442\u0430\u0439!.'),l.a.createElement("p",null,l.a.createElement(E.a,{variant:"success",onClick:t},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!")),a.length>0&&l.a.createElement("strong",null,"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0437\u0430\u0433\u0430\u0434\u0430\u043b \u0447\u0438\u0441\u043b\u043e!"))}var f=a(61);function g(e){var t=e.bulls,a=e.cows,n=e.rounds,r=e.attempt;return l.a.createElement(v.a,{fluid:!0},l.a.createElement(f.a,null,l.a.createElement("h5",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),r.length>0&&l.a.createElement("p",null,"\u0422\u0432\u043e\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430 - ".concat(r)),l.a.createElement("p",null,"\u0422\u0432\u043e\u0438 \u0431\u044b\u043a\u0438 - ".concat(t)),l.a.createElement("p",null,"\u0422\u0432\u043e\u0438 \u043a\u043e\u0440\u043e\u0432\u044b - ".concat(a)),l.a.createElement("p",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0443\u043d\u0434\u043e\u0432 - ".concat(n))))}var b=a(63);function w(e){var t=e.initGame,a=e.showModal,n=e.checkWinner;return l.a.createElement(b.a,{show:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(b.a.Header,{closeButton:!0},l.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")),l.a.createElement(b.a.Body,null,l.a.createElement("h4",null,n?"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e! \u0422\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b!":"\u0423\u0432\u044b, \u0442\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b!"),l.a.createElement("p",null,"\u0414\u0430\u0432\u0430\u0439 \u043d\u0430\u0447\u043d\u0435\u043c \u0441\u043d\u0430\u0447\u0430\u043b\u0430?")),l.a.createElement(b.a.Footer,null,l.a.createElement(E.a,{variant:"success",onClick:t},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!")))}function y(e){var t=e.attempt,a=e.gameStatus,n=e.rounds,r=e.bulls,c=e.cows,u=e.initGame,s=e.showModal;return a&&n>0?l.a.createElement(g,{bulls:r,cows:c,rounds:n,attempt:t}):l.a.createElement(w,{initGame:u,showModal:s,checkWinner:n>0})}var S=a(45);var k=function(e,t){var a={bulls:0,cows:0};return Object(S.a)(e).forEach((function(e,n){+e===t[n]?a.bulls++:t.indexOf(+e)>=0&&a.cows++})),a},O=a(64),j=a(62);function C(e){return e.inputValid?l.a.createElement(j.a,{variant:"info"},'\u0425\u043c... \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442! \u0416\u043c\u0438 "\u0423\u0433\u0430\u0434\u0430\u0442\u044c"!'):l.a.createElement(j.a,{variant:"danger"},"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 ",l.a.createElement("strong",null,"\u0447\u0435\u0442\u044b\u0440\u0451\u0445\u0437\u043d\u0430\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),"! \u0411\u0443\u0434\u044c\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u0435\u0439!")}var G=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value;n.setState({value:t},(function(){n.validateInput(t)}))},n.handleSubmit=function(e){var t=n.props,a=t.guessNumber,l=t.checkAttempt,r=n.state.value,c=k(r,a);l(c.bulls,c.cows,r),n.setState({value:"",inputValid:!1}),e.preventDefault()},n.validateInput=function(e){var t=n.state.inputValid;t=e.match(/\b\d{4}\b/),n.setState({inputValid:t})},n.state={value:"",inputValid:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.inputValid;return this.props.guessNumber.length>0?l.a.createElement(O.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,{controlId:"userNumber"},l.a.createElement(O.a.Label,null,l.a.createElement(C,{inputValid:a})),l.a.createElement(O.a.Control,{type:"number",size:"sm",placeholder:"\u0422\u0432\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442?..",isInvalid:!a,isValid:a,value:t,onChange:this.handleChange,required:!0})),l.a.createElement(E.a,{disabled:!a,variant:"primary",type:"submit"},"\u0423\u0433\u0430\u0434\u0430\u0442\u044c")):l.a.createElement("p",null,'\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u0443\u0433\u0430\u0434\u044b\u0432\u0430\u0442\u044c, \u043d\u0430\u0436\u043c\u0438 "\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"!')}}]),a}(n.Component),I=a(65);function V(){return l.a.createElement(I.a,{variant:"flush",as:"ul"},l.a.createElement(I.a.Item,{as:"li"},"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0437\u0430\u0433\u0430\u0434\u044b\u0432\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0435\u0442\u044b\u0440\u0451\u0445\u0437\u043d\u0430\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),l.a.createElement(I.a.Item,{as:"li"},"\u0412\u044b \u0432\u0432\u043e\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442."),l.a.createElement(I.a.Item,{as:"li"},"\u0415\u0441\u043b\u0438 \u0446\u0438\u0444\u0440\u0430 \u0441\u043e\u0432\u043f\u0430\u043b\u0430, \u043d\u043e \u0441\u0442\u043e\u0438\u0442 \u043d\u0435 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u043c\u0435\u0441\u0442\u0435 - \u044d\u0442\u043e \u043a\u043e\u0440\u043e\u0432\u0430."),l.a.createElement(I.a.Item,{as:"li"},"\u0415\u0441\u043b\u0438 \u0446\u0438\u0444\u0440\u0430 \u0441\u043e\u0432\u043f\u0430\u043b\u0430 \u0438 \u0441\u0442\u043e\u0438\u0442 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u043c\u0435\u0441\u0442\u0435 - \u044d\u0442\u043e \u0431\u044b\u043a."),l.a.createElement(I.a.Item,{as:"li"},"\u041d\u0443\u0436\u043d\u043e \u0443\u0433\u0430\u0434\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u0441 5 \u043f\u043e\u043f\u044b\u0442\u043e\u043a."))}var A=a(66),M=a(67);function N(e){var t=e.guess,a=e.checkAttempt;return l.a.createElement(A.a,{defaultActiveKey:"0"},l.a.createElement(M.a,null,l.a.createElement(M.a.Header,null,l.a.createElement(A.a.Toggle,{as:E.a,variant:"link",eventKey:"1"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b")),l.a.createElement(A.a.Collapse,{eventKey:"1"},l.a.createElement(M.a.Body,null,l.a.createElement(V,null)))),l.a.createElement(M.a,null,l.a.createElement(M.a.Header,null,l.a.createElement(A.a.Toggle,{as:E.a,variant:"link",eventKey:"0"},"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430")),l.a.createElement(A.a.Collapse,{eventKey:"0"},l.a.createElement(M.a.Body,null,l.a.createElement(G,{guessNumber:t,checkAttempt:a})))))}var T=function(){for(var e=[];e.length<4;){var t=Math.floor(10*Math.random());e.indexOf(t)<0&&e.push(t)}return console.log("The guessing number: ".concat(e)),e};var x=function(e,t){return!(4===e&&t>0)},B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).initGame=function(){var t=T();e.setState({guess:t,attempt:[],bulls:0,cows:0,rounds:5,gameStatus:!0})},e.checkAttempt=function(){var t=Object(i.a)(s.a.mark((function t(a,n,l){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.rounds,c=x(a,r),t.next=4,e.setState((function(e){return{gameStatus:c,attempt:l,bulls:a,cows:n,rounds:e.rounds-1}}));case 4:c&&1!==r||e.postLog();case 5:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.postLog=function(){var t=e.state,a=t.guess,n=t.attempt,l=t.rounds,r=t.gameStatus;return fetch("/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({guess:a,attempt:n,rounds:l,gameStatus:r})}).then((function(e){return e.json()}))},e.state={guess:[],attempt:[],bulls:0,cows:0,rounds:5,gameStatus:!0},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.guess,a=e.attempt,n=e.bulls,r=e.cows,c=e.gameStatus,u=e.rounds;return l.a.createElement("div",{className:"container"},l.a.createElement(h,{initGame:this.initGame,guess:t}),l.a.createElement(y,{attempt:a,bulls:n,cows:r,gameStatus:c,rounds:u,initGame:this.initGame,showModal:!c||0===u}),l.a.createElement(N,{guess:t,checkAttempt:this.checkAttempt}))}}]),a}(n.Component);c.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.cf30845e.chunk.js.map