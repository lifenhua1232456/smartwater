webpackJsonp([96],{gki0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"",data:function(){return{dateRange:"",value:"",optionData:[]}},created:function(){this.$store.commit("setShowlefttree",!0)},mounted:function(){var e=this;this.$nextTick(function(){e.initEchart()})},methods:{initEchart:function(){this.$echarts.init(document.getElementById("echartbox")).setOption({title:{text:"水温变化趋势分析图",x:"center"},tooltip:{trigger:"item"},legend:{data:["水温","日均值"],y:"bottom"},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["2019/01/27","2019/01/28","2019/01/29","2019/01/30","2019/02/01","2019/02/02","2019/02/03","2019/02/04","2019/02/05","2019/02/06","2019/02/07","2019/02/08","2019/02/09","2019/02/10"]},yAxis:{type:"value",name:"监测值(℃)"},series:[{name:"日均值",type:"line",data:[11,11,15,13,12,13,10,12,11,16,13,8,10,12],markLine:{data:[{type:"average",name:"平均值"}]}},{symbolSize:10,name:"水温",data:[[0,11.2],[0,11.3],[0,11.4],[0,11.5],[0,11.6],[1,6.95],[2,7.58],[3,8.81],[4,8.33],[5,9.96],[6,7.24],[7,4.26],[8,10.84],[9,4.82],[10,5.68],[11,4.26],[12,10.84],[13,4.82],[14,5.68]],type:"scatter"}]})},selectChange:function(e){}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"singlePage secondary-page-mode"},[a("div",{staticClass:"secondary-toolbar"},[a("span",[e._v("时间选择 : ")]),e._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v("  \n        "),a("span",[e._v("监测项目 : ")]),e._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"120px"}},[a("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择"},on:{change:e.selectChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.optionData,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v("  \n        "),a("el-button",[a("i",{staticClass:"iconfont icon-sousuo"}),e._v("查询")])],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"currency-mode-wrap"},[t("div",{staticClass:"echartbox",attrs:{id:"echartbox"}})])}]};var i=a("VU/8")(n,s,!1,function(e){a("neyz")},null,null);t.default=i.exports},neyz:function(e,t){}});
//# sourceMappingURL=96.e2ecfa6a80f3ee69607e.js.map