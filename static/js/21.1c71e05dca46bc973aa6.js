webpackJsonp([21],{"4kFw":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"networkingMap",data:function(){return{}},methods:{createNetworkingMap:function(){this.$echarts.init(document.getElementById("networking-map")).setOption({})}},mounted:function(){this.createNetworkingMap()},created:function(){}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"networking-map"}})},staticRenderFns:[]};var n={name:"",components:{networkingMap:a("VU/8")(s,i,!1,function(t){a("EVuR")},"data-v-d17a0a56",null).exports},data:function(){return{currentTime:(new Date).format("yyyy-MM-dd hh:mm:ss"),currentTimer:null,abnormalList:[{id:"1",name:"生米",state:1,startTime:"2019-01-01 08:00:00",networkingRate:96,personnel:"吴境（宇星）",duration:"10天10小时10分钟10秒"},{id:"1",name:"橘子洲",state:2,startTime:"2019-01-01 08:00:00",networkingRate:86,personnel:"吴境（宇星）",duration:"10天10小时10分钟10秒"},{id:"3",name:"捞刀河",state:1,startTime:"2019-01-01 08:00:00",networkingRate:76,personnel:"吴境（宇星）",duration:"10天10小时10分钟10秒"}],classifyList:[{value:1,label:"地区"},{value:2,label:"运营商"},{value:3,label:"站点"}],classifyActive:0,timeType:[{value:"d",label:"当前"},{value:"j",label:"今日"},{value:"w",label:"本周"},{value:"m",label:"本月"},{value:"q",label:"本季度"}],timeActive:0}},methods:{createRealTimeData:function(){var t=this.$echarts.init(document.getElementById("real-time-data"));t.setOption({color:["#15c215","#d1def0","#ff3333"],tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:["55%","70%"],center:["60%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center",formatter:"{a|{d}}{b|%}\n{c|{b}}",rich:{a:{fontSize:24,fontWeight:700},b:{fontSize:16},c:{color:"#666",fontSize:14,lineHeight:20}}},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:93,name:"正常"},{value:12,name:"申请停运"},{value:23,name:"异常掉线"}]}]}),t.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}),t.on("mouseover",function(e){t.dispatchAction({type:"downplay",seriesIndex:0}),t.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex})}),t.on("mouseout",function(e){t.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex})})},toggleClassify:function(t,e,a){var s=a.currentTarget,i=s.parentNode.querySelector(".active-line");i.style.left=s.offsetLeft+"px",i.style.width=s.offsetWidth+"px",this.classifyActive=e},toggleTimeType:function(t,e){this.timeActive=e},createNetworkingRank:function(){this.$echarts.init(document.getElementById("networking-rank")).setOption({dataZoom:[{type:"slider",filterMode:"empty",start:0,end:100},{type:"inside",filterMode:"empty",start:0,end:100}],grid:{top:20,left:60,right:30,bottom:70},xAxis:{type:"category",data:["内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖南","湖北"],axisTick:{show:!1},axisLabel:{color:"#666"},axisLine:{lineStyle:{color:"#c6d1de"}}},yAxis:{type:"value",max:100,axisLabel:{formatter:"{value} %",color:"#666"},axisTick:{show:!1},axisLine:{lineStyle:{color:"#c6d1de"}}},series:[{data:[100,90,80,76,70,68,60,57,56,51,49,47,45,42,40,36,34,33,32,30],type:"bar",barWidth:20,itemStyle:{color:function(t){var e="";switch(t.dataIndex){case 0:e="#15c215";break;case 1:e="#1dc41d";break;case 2:e="#68d868";break;default:e="#70d970"}return e}}}]})}},computed:{showleftTree:function(){return this.$store.state.showleftTree}},watch:{showleftTree:function(t){var e=this.$echarts.init(document.getElementById("networking-rank"));setTimeout(function(){e.resize()},300)}},mounted:function(){var t=this;this.createRealTimeData(),setTimeout(function(){t.createNetworkingRank()},300)},created:function(){var t=this;this.$store.commit("setShowlefttree",!1),this.currentTimer=setInterval(function(){t.currentTime=(new Date).format("yyyy-MM-dd hh:mm:ss")},100)},beforeDestroy:function(){clearInterval(this.currentTimer)}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"statisPage"},[a("div",{staticClass:"page-top"},[a("div",{staticClass:"modular-left modular-box"},[t._m(0),t._v(" "),a("div",{staticClass:"modular-content"},[a("div",{staticClass:"current-time-wrap"},[a("span",[a("i",{staticClass:"el-icon-time"}),t._v(" 当前时间："+t._s(t.currentTime))]),t._v(" "),a("span",{staticClass:"real-data-btn link-btn"},[t._v("实时数据 >>")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),a("div",{staticClass:"modular-right modular-box"},[t._m(4),t._v(" "),a("div",{staticClass:"modular-content scrollSpecial"},[a("el-scrollbar",{staticStyle:{height:"100%"}},[a("ul",{staticClass:"abnormal-list"},t._l(t.abnormalList,function(e,s){return a("li",{key:s},[a("div",{staticClass:"list-head"},[a("i",{staticClass:"state-icon"}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),1===e.state?a("span",{staticClass:"state-t"},[t._v("停运")]):t._e(),t._v(" "),2===e.state?a("span",{staticClass:"state-y"},[t._v("异常")]):t._e(),t._v(" "),a("div",{staticClass:"line-wrap"},[a("a",{staticClass:"link-btn",attrs:{href:"javascript:;"}},[t._v("历史数据 >>")]),t._v(" "),a("a",{staticClass:"link-btn",attrs:{href:"javascript:;"}},[t._v("生成任务 >>")])])]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("span",[t._v("开始时间："+t._s(e.startTime))])]),t._v(" "),a("el-col",{attrs:{span:7}},[a("span",[t._v("今日联网率："+t._s(e.networkingRate)+"%")])]),t._v(" "),a("el-col",{attrs:{span:7}},[a("span",[t._v("运维：")])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("span",[t._v("持续时长："+t._s(e.duration))])]),t._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticStyle:{width:"80%","padding-top":"10px"}},[a("el-progress",{attrs:{percentage:e.networkingRate,"show-text":!1}})],1)]),t._v(" "),a("el-col",{attrs:{span:7}},[t._v(t._s(e.personnel))])],1)],1)}),0)])],1)])]),t._v(" "),a("div",{staticClass:"page-bottom"},[a("div",{staticClass:"modular-left modular-box"},[t._m(5),t._v(" "),a("div",{staticClass:"modular-content"},[a("networking-map")],1)]),t._v(" "),a("div",{staticClass:"modular-right modular-box"},[t._m(6),t._v(" "),a("div",{staticClass:"modular-content"},[a("div",{staticClass:"ranking-toolbar clearfix"},[a("div",{staticClass:"ranking-classify-group clearfix"},[a("i",{staticClass:"active-line"}),t._v(" "),t._l(t.classifyList,function(e,s){return a("div",{key:s,staticClass:"item",class:{active:t.classifyActive===s},on:{click:function(a){return t.toggleClassify(e,s,a)}}},[t._v(t._s(e.label))])})],2),t._v(" "),a("ul",{staticClass:"time-type-group"},t._l(t.timeType,function(e,s){return a("li",{key:s,class:{active:t.timeActive===s},on:{click:function(a){return t.toggleTimeType(e,s)}}},[t._v("\n                "+t._s(e.label)+"\n              ")])}),0)]),t._v(" "),a("div",{staticClass:"networking-rank",attrs:{id:"networking-rank"}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"modular-title"},[e("span",[this._v("实时联网统计")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"real-chart-wrap"},[a("div",{attrs:{id:"real-time-data"}}),t._v(" "),a("ul",{staticClass:"real-time-list"},[a("li",[t._v("点位总数：100")]),t._v(" "),a("li",[t._v("当前联网率")]),t._v(" "),a("li",[a("i",{staticClass:"on-line"}),t._v(" 在线：95")]),t._v(" "),a("li",[a("i",{staticClass:"outage-icon"}),t._v(" 申请停运：2")]),t._v(" "),a("li",[a("i",{staticClass:"abnormal-icon"}),t._v(" 异常掉线：3")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"analysis-text"},[this._v("\n           联网异常："),e("span",{staticClass:"text"},[this._v("有3个主要是X区（1个）、y区（1个）、z区（1个）、x运营商（2）个")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"analysis-text"},[this._v("\n           申请停运："),e("span",{staticClass:"text"},[this._v("有2个主要是X区（1个）、y区（1个）、x运营商（2）个")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"modular-title"},[e("span",[this._v("联网异常统计")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"modular-title"},[e("span",[this._v("实时联网率地图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"modular-title"},[e("span",[this._v("联网率排名")])])}]};var l=a("VU/8")(n,r,!1,function(t){a("TIvW")},"data-v-6c16032d",null);e.default=l.exports},EVuR:function(t,e){},TIvW:function(t,e){}});
//# sourceMappingURL=21.1c71e05dca46bc973aa6.js.map