webpackJsonp([65],{aUJv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"alarmManage",data:function(){return{dateRange:"",typeSelect:"",optionData:[],duration:"",stateRadio:1,tableData:[{}],currentPage:1,total:200,pageSize:10,pageList:[10,15,20]}},created:function(){this.$store.commit("setShowlefttree",!1)},methods:{indexMethod:function(t){return t+1},paginationSizeChange:function(){},paginationChange:function(){}},computed:{totalPageNumber:function(){return Math.ceil(this.total/this.pageSize)}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alarm-management"},[e("div",{staticClass:"secondary-toolbar"},[e("span",[t._v("时间选择 : ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"100px"}},[e("el-date-picker",{attrs:{type:"month",placeholder:"请选择"},model:{value:t.dateRange,callback:function(a){t.dateRange=a},expression:"dateRange"}})],1),t._v("  \n    "),e("el-button",[e("i",{staticClass:"iconfont icon-sousuo"}),t._v("查询")]),t._v(" "),e("el-button",{attrs:{type:"delet"}},[e("i",{staticClass:"iconfont icon-daochu"}),t._v("导出")])],1),t._v(" "),e("div",{staticClass:"alarm-modular modular-box"},[e("div",{staticClass:"modular-head"},[e("span",{staticClass:"title"},[t._v("考核列表")]),t._v(" "),e("div",{staticClass:"modular-toolbar"},[e("div",{staticClass:"state-radio-wrap"},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.stateRadio,callback:function(a){t.stateRadio=a},expression:"stateRadio"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("全部")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("考评中")]),t._v(" "),e("el-radio-button",{attrs:{label:"3"}},[t._v("已入档")])],1)],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"modular-body"},[e("el-table",{attrs:{border:"",data:t.tableData,height:"calc(100% - 37px)"}},[e("el-table-column",{attrs:{type:"index",index:t.indexMethod,label:"序号",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"姓名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"岗位"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"负责站点数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"负责设备数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"运营证书"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"学历"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"电话"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"入职时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"考核节点"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"当前得分"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"评分等级"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company",label:"考核状态"}})],1),t._v(" "),e("div",{staticClass:"table-pagination-wrap"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,"popper-class":"select-pagination-option",background:"",small:!0,"page-sizes":t.pageList,layout:"total, sizes, slot,->,prev, pager, next, jumper",total:t.total},on:{"size-change":t.paginationSizeChange,"current-change":t.paginationChange,"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}},scopedSlots:t._u([{key:"default",fn:function(){return[e("span",{staticClass:"el-pagination__current"},[t._v("当前第"+t._s(t.currentPage)+"/"+t._s(t.totalPageNumber)+"页")])]},proxy:!0}])})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search-box",staticStyle:{width:"164px"}},[a("i",{staticClass:"iconfont icon-sousuo"}),this._v(" "),a("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入"}})])}]};var o=e("VU/8")(l,n,!1,function(t){e("kcpv")},"data-v-5f8422ae",null);a.default=o.exports},kcpv:function(t,a){}});
//# sourceMappingURL=65.cdf076c37d6e1ef32401.js.map