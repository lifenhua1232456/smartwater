webpackJsonp([32],{iQRL:function(t,e){},j1IQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secondary-page-mode"},[a("div",{staticClass:"secondary-toolbar"},[a("span",[t._v("日期 : ")]),t._v(" "),a("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v("  \n        "),a("el-button",[a("i",{staticClass:"iconfont icon-sousuo"}),t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"delet"}},[a("i",{staticClass:"iconfont icon-daochu"}),t._v("导出")])],1),t._v(" "),a("div",{staticClass:"currency-mode-wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","span-method":t.objectSpanMethod}},[a("el-table-column",{attrs:{type:"index",label:"序号",index:t.indexMethod,width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"prop1",label:"仪器厂家"}}),t._v(" "),a("el-table-column",{attrs:{prop:"prop2",label:"监测设备"}}),t._v(" "),a("el-table-column",{attrs:{prop:"prop3",label:"故障次数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"prop4",label:"更换频次"}})],1)],1)])},staticRenderFns:[]};var r=a("VU/8")({name:"",data:function(){return{dateRange:"",tableData:[{prop1:"北京雪迪龙科技股份有限公司",prop2:"松花江流域",prop3:1,prop4:1},{prop1:"北京雪迪龙科技股份有限公司",prop2:"松花江流域",prop3:1,prop4:1},{prop1:"北京雪迪龙科技股份有限公司",prop2:"松花江流域",prop3:1,prop4:1},{prop1:"北京雪迪龙科技股份有限公司",prop2:"松花江流域",prop3:1,prop4:1}]}},created:function(){this.$store.commit("setShowlefttree",!0);for(var t=0;t<this.tableData.length;t++)t+=this.adda(t,"prop1","sf")-1},methods:{adda:function(t,e,a){for(var o=this.tableData[t][e],r=0,n=t;n<this.tableData.length&&o==this.tableData[n][e];n++)r++;return this.tableData[t][a]=r,r},indexMethod:function(t){return t+1},objectSpanMethod:function(t){var e=t.row;if(t.column,t.rowIndex,1==t.columnIndex)return e.sf?{colspan:1,rowspan:e.sf}:{colspan:1,rowspan:0}}}},o,!1,function(t){a("iQRL")},"data-v-e2b304c6",null);e.default=r.exports}});
//# sourceMappingURL=32.7b62ebf5c60ad7474948.js.map