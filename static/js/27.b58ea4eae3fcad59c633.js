webpackJsonp([27],{cbFV:function(t,e){},rBDZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"cuntercontrolLog",data:function(){return{dateRange:"",currentPage:1,pageSize:10,totalRecords:0,pageList:[10,15,20],tableData:[]}},computed:{totalPageNumber:function(){var t;return 0===(t=Math.ceil(this.total/this.pageSize))?1:t},stationInfo:{get:function(){return this.$store.state.stationInfo}}},methods:{toggleTab:function(t){},getQueryBackControlLog:function(){var t=this;this.$http.get("/Receiving/queryBackControlLog",{params:{startTime:this.dateRange[0].format("yyyy-MM-dd"),endTime:this.dateRange[1].format("yyyy-MM-dd"),mn:this.stationId,pageNum:this.currentPage,pageSize:this.pageSize}}).then(function(e){0===e.data.code&&(console.log(e),t.tableData=e.data.content.dataList,t.totalRecords=e.data.content.totalRecords)})},paginationChange:function(t){this.currentPage=t,this.getQueryBackControlLog()},paginationSizeChange:function(t){this.pageSize=t,this.getQueryBackControlLog()}},mounted:function(){},created:function(){this.$store.commit("setShowlefttree",!0);var t=new Date((new Date).setDate((new Date).getDate()-1)),e=new Date;this.dateRange=[t,e]},watch:{stationInfo:function(t){t.length>0&&(this.stationId=t[0].nodeId,this.getQueryBackControlLog())}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cuntercontrolLog tapStyle secondary-page-mode"},[a("div",{staticClass:"secondary-toolbar"},[a("span",[t._v("时间选择 : ")]),t._v(" "),a("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v("  \n    "),a("el-button",{on:{click:function(e){return t.getQueryBackControlLog()}}},[a("i",{staticClass:"iconfont icon-sousuo"}),t._v("查询")])],1),t._v(" "),a("div",{staticClass:"currency-mode-wrap"},[a("yf-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.toggleTab}},[a("yf-tab-pane",{attrs:{label:"返控操作日志"}},[a("div",{staticClass:"tablebox",staticStyle:{height:"calc(100% - 35px)"}},[a("el-table",{attrs:{data:t.tableData,border:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"cn",label:"请求编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"命名描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operationUser",label:"操作用户"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operationTime",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"response",label:"请求应答"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result",label:"执行结果"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容"}})],1)],1),t._v(" "),a("div",{staticClass:"paginationBox"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,background:"",small:!0,"popper-class":"select-common-option","page-sizes":t.pageList,layout:"total,sizes,slot,->,prev, pager, next, jumper",total:t.totalRecords},on:{"size-change":t.paginationSizeChange,"current-change":t.paginationChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}},[a("span",{staticClass:"el-pagination__current"},[t._v("当前第"+t._s(t.currentPage)+"/"+t._s(t.totalPage)+"页")])])],1)]),t._v(" "),a("yf-tab-pane",{attrs:{label:"留样信息"}},[a("div",{staticClass:"tablebox"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"time",width:"160",label:"留样时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bottle",width:"160",label:"留样瓶号"}})],1)],1)])],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("cbFV")},"data-v-eee6ef44",null);e.default=r.exports}});
//# sourceMappingURL=27.b58ea4eae3fcad59c633.js.map