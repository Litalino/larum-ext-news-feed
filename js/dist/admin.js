(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat.app;var l=e.n(r);l().initializers.add("litalino/flarum-ext-news-feed",(function(){l().extensionData.for("litalino-news-feed").registerSetting({setting:"litalino-news-feed.FeedUrl",name:"FeedUrl",type:"url",label:l().translator.trans("flarum-ext-news-feed.admin.feedutltitle"),help:l().translator.trans("flarum-ext-news-feed.admin.feedurldesc"),placeholder:"Url of your Rss Feed"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map