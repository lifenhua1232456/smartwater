webpackJsonp([30],{"0quR":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),o=a.n(n),l=a("dwSH"),i={name:"",data:function(){return{dateRange:[],value:"",factorData:[],factorModel:[],tableData:[],tableHead:[],loading:!0,currentPage:1,pageSize:10,total:0,pageList:[10,20,30],fieldList:[]}},created:function(){this.init()},methods:{initTime:function(){var t=(new Date).setDate((new Date).getDate()-6),e=new Date;this.dateRange=[new Date(t).format("yyyy-MM-dd"),e.format("yyyy-MM-dd")]},selectChange:function(t){this.factorModel=t},search:function(){this.getTableData()},getfactorName:function(t){var e="";for(var a in this.factorData)t==this.factorData[a].projectCode&&(e=this.factorData[a].projectName);return e},init:function(){var t=this;this.initTime(),this.$http.post("/SiteManagement/index/query").then(function(e){if(0==e.data.code){t.factorData=e.data.content.dataList;for(var a=0;a<t.factorData.length;a++)t.factorModel.push(t.factorData[a].projectCode)}})},paginationSizeChange:function(t){this.pageSize=t,this.getTableData()},paginationChange:function(t){this.currentPage=t,this.getTableData()},getTableData:function(){var t=this;this.loading=!0,this.$http.get("/StatisticsAndAlarm/dataReports/queryDatasStageReports",{params:{startTime:this.dateRange[0],endTime:this.dateRange[1],stationCode:this.stationId,type:"day",factorCode:this.factorModel.join(","),pageNumber:this.currentPage,pageSize:this.pageSize}}).then(function(e){0==e.data.code&&(t.tableHead=JSON.parse(o()(t.factorModel)),t.tableData=e.data.content.dataList,t.total=e.data.content.totalRecords,t.loading=!1)})},exportExcel:function(){var t=this.$refs.table.$el.querySelector(".el-table__header");this.fieldList=["time"];for(var e=0;e<this.tableHead.length;e++)this.fieldList.push(this.tableHead[e]+"level");this.fieldList.push("level");var a={headerProp:this.fieldList.join(","),startTime:this.dateRange[0],endTime:this.dateRange[1],stationCode:this.stationId,type:"day",factorCode:this.factorModel.join(","),pattern:"yyyy-MM-dd"};Object(l.a)(t,"断面时段水质统计","","1","/StatisticsAndAlarm/exports/datasStageExcel",a)}},computed:{stationInfo:{get:function(){return this.$store.state.stationInfo}},totalPageNumber:function(){return Math.ceil(this.total/this.pageSize)}},watch:{stationInfo:function(t){t.length>0&&(this.stationId=t[0].nodeId,this.getTableData())}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scopePage threePadding"},[a("div",{staticClass:"toolbox"},[a("span",[t._v("时间选择 : ")]),t._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v("  \n        "),a("span",[t._v("监测项目 : ")]),t._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"120px"}},[a("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择"},on:{change:t.selectChange},model:{value:t.factorModel,callback:function(e){t.factorModel=e},expression:"factorModel"}},t._l(t.factorData,function(t){return a("el-option",{key:t.projectCode,attrs:{label:t.projectName,value:t.projectCode}})}),1)],1),t._v("  \n        "),a("el-button",{on:{click:t.search}},[a("i",{staticClass:"iconfont icon-sousuo"}),t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"delet"},on:{click:t.exportExcel}},[a("i",{staticClass:"iconfont icon-daochu"}),t._v("导出")])],1),t._v(" "),a("div",{staticClass:"table report-table-wrap",staticStyle:{height:"calc(100% - 44px)"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{border:"",data:t.tableData,height:"calc(100% - 30px)","element-loading-text":"加载中","element-loading-spinner":"loading-type-a","element-loading-background":"rgba(255, 255, 255, 1)"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"时间",prop:"time",width:"200"}}),t._v(" "),t._l(t.tableHead,function(e,n){return a("el-table-column",{key:n,attrs:{label:t.getfactorName(e),width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("div",{staticClass:"scopeBox",class:"I类"==n.row[e+"level"]||"II类"==n.row[e+"level"]?"classOt":"III类"==n.row[e+"level"]?"classThree":"IV类"==n.row[e+"level"]?"classFour":"V类"==n.row[e+"level"]?"classFive":"劣V类"==n.row[e+"level"]?"classS":""},[t._v("\n                          "+t._s(n.row[e+"level"])+"\n                      ")])]}}],null,!0)})}),t._v(" "),a("el-table-column",{attrs:{label:"综合水质类别",prop:"level"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"scopeBox",class:"I类"==e.row.level||"II类"==e.row.level?"classOt":"III类"==e.row.level?"classThree":"IV类"==e.row.level?"classFour":"V类"==e.row.level?"classFive":"劣V类"==e.row.level?"classS":""},[t._v("\n                          "+t._s(e.row.level)+"\n                      ")])]}}])})],2),t._v(" "),a("div",{staticClass:"paginationBox"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,background:"",small:!0,"popper-class":"select-common-option","page-sizes":t.pageList,layout:"total,sizes,slot,->,prev, pager, next, jumper",total:t.total},on:{"size-change":t.paginationSizeChange,"current-change":t.paginationChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}},[a("span",{staticClass:"el-pagination__current"},[t._v("当前第"+t._s(t.currentPage)+"/"+t._s(t.totalPageNumber)+"页")])])],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(t){a("Cm1J")},null,null);e.default=r.exports},Cm1J:function(t,e){}});
//# sourceMappingURL=30.79534dabadaa3aa5b12e.js.map