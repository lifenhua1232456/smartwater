webpackJsonp([99],{"/5Tb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"",data:function(){return{searchModel:"",visiDialog_add:!1,tableData:[],optionFarea:[],targetLevelData:[],formData:{projectName:"",projectCode:"",projectId:"",projectType:"",projectUnit:"",decimalDigits:"",sortIndex:"",enabled:"1",metal:"0"},formRules:{projectName:[{required:!0,message:"请输入因子名称",trigger:"blur"}],projectCode:[{required:!0,message:"请输入因子编码",trigger:"blur"}],projectUnit:[{required:!0,message:"请输入因子单位",trigger:"blur"}],projectType:[{required:!0,message:"请选择因子类型",trigger:"change"}]},projectTypeData:[],loading:!0,currentPage:1,total:0,pageSize:10,pageList:[10,15,20],isEditor:!1,projectId:""}},created:function(){this.init()},mounted:function(){},inject:["globelDelet"],methods:{selectChange:function(t,e){var a=t;for(var o in this.projectId="",a)this.projectId+=a[o].projectId+",";this.projectId=this.projectId.substring(0,this.projectId.length-1)},delet:function(t){this.globelDelet("/SiteManagement/index/delete",t,this.getTableData)},allDelet:function(){this.globelDelet("/SiteManagement/index/delete",this.projectId,this.getTableData)},init:function(){var t=this;this.$http.post("/SiteManagement/indexType/query").then(function(e){0==e.data.code&&(t.projectTypeData=e.data.content.dataList)}),this.getTableData()},getTableData:function(){var t=this;this.loading=!0;var e="";e=""==this.searchModel?"%":this.searchModel,this.$http.post("/SiteManagement/index/query",this.paramsObj.GetPageData_P("factor",this.currentPage,this.pageSize,[e],!0)).then(function(e){0==e.data.code&&(t.tableData=e.data.content.dataList,t.loading=!1)})},addData:function(){this.visiDialog_add=!0,this.isEditor=!1},submitForm:function(t){var e=this;this.$refs[t].validate(function(a){if(!a)return!1;if(e.isEditor){var o={};o.projectName=e.formData.projectName,o.projectCode=e.formData.projectCode,o.projectUnit=e.formData.projectUnit,o.decimalDigits=e.formData.decimalDigits,o.sortIndex=e.formData.sortIndex,o.enabled=e.formData.enabled,o.metal=e.formData.metal,o.projectId=e.projectId,e.$http.post("/SiteManagement/index/edit?typeId="+e.formData.projectType,o).then(function(a){0==a.data.code&&(e.$message({message:a.data.message,type:"success",duration:1500}),e.visiDialog_add=!1,e.resetForm(t),e.getTableData())})}else{var r={};r.projectName=e.formData.projectName,r.projectCode=e.formData.projectCode,r.projectUnit=e.formData.projectUnit,r.decimalDigits=e.formData.decimalDigits,r.sortIndex=e.formData.sortIndex,r.enabled=e.formData.enabled,r.metal=e.formData.metal,e.$http.post("/SiteManagement/index/edit?typeId="+e.formData.projectType,r).then(function(a){0==a.data.code&&(e.$message({message:a.data.message,type:"success",duration:1500}),e.visiDialog_add=!1,e.resetForm(t),e.getTableData())})}})},resetForm:function(t){this.$refs[t].resetFields(),this.optionFarea=[],this.formData={projectName:"",projectCode:"",projectId:"",projectType:"",projectUnit:"",decimalDigits:"",sortIndex:"",enabled:"1",metal:"0"}},editorData:function(t){console.log(t),this.visiDialog_add=!0,this.isEditor=!0,this.projectId=t.projectId,this.formData={projectName:t.projectName,projectCode:t.projectCode,projectType:t.projectType.projectTypeId,projectUnit:t.projectUnit,sortIndex:t.sortIndex,decimalDigits:t.decimalDigits,enabled:t.enabled+"",metal:t.metal+""}},paginationSizeChange:function(t){this.pageSize=t,this.getTableData()},paginationChange:function(t){this.currentPage=t,this.getTableData()},cancelForm:function(t){this.visiDialog_add=!1,this.resetForm(t)},closess:function(t){t(),this.resetForm("form")}},computed:{totalPageNumber:function(){return Math.ceil(this.total/this.pageSize)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trafficpage secondary-page-mode"},[a("div",{staticClass:"secondary-toolbar"},[a("span",[t._v("关键字 : ")]),t._v(" "),a("div",{staticClass:"layoutBox",staticStyle:{width:"220px"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}})],1),t._v("  \n         "),a("el-button",{on:{click:t.getTableData}},[a("i",{staticClass:"iconfont icon-sousuo"}),t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.addData}},[a("i",{staticClass:"iconfont icon-tianjia1"}),t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"delet"},on:{click:t.allDelet}},[a("i",{staticClass:"iconfont icon-shanchu"}),t._v("批量删除")])],1),t._v(" "),a("div",{staticClass:"currency-mode-wrap"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.tableData,"element-loading-text":"加载中","element-loading-spinner":"loading-type-a","element-loading-background":"rgba(255, 255, 255, 1)",height:"100%","row-key":"areaId","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":t.selectChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"因子名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectCode",label:"因子编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"parentId",label:"因子类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("\n                            "+t._s(e.row.projectType.projectTypeName)+"\n                        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectUnit",label:"因子单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"decimalDigits",label:"小数位数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sortIndex",label:"排序"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"是否启用"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.enabled?a("span",[t._v("是")]):t._e(),t._v(" "),0==e.row.enabled?a("span",[t._v("否")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"是否重金属"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.metal?a("span",[t._v("是")]):t._e(),t._v(" "),0==e.row.metal?a("span",[t._v("否")]):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return t.editorData(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return t.delet(e.row.projectId)}}},[t._v("删除")])],1)]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.visiDialog_add,width:"920px",title:"因子新增","before-close":t.closess},on:{"update:visible":function(e){t.visiDialog_add=e}}},[a("div",{staticClass:"dialogcontent"},[a("div",{staticClass:"dialog-layout"},[a("el-form",{ref:"form",attrs:{model:t.formData,rules:t.formRules}},[a("table",{staticClass:"whTable"},[a("tr",[a("td",{attrs:{width:"16.5%"}},[a("span",{staticClass:"rCode"},[t._v("因子名称")])]),t._v(" "),a("td",[a("el-form-item",{attrs:{prop:"projectName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.projectName,callback:function(e){t.$set(t.formData,"projectName",e)},expression:"formData.projectName"}})],1)],1),t._v(" "),a("td",{attrs:{width:"16.5%"}},[a("span",{staticClass:"rCode"},[t._v("因子编码")])]),t._v(" "),a("td",[a("el-form-item",{attrs:{prop:"projectCode"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.projectCode,callback:function(e){t.$set(t.formData,"projectCode",e)},expression:"formData.projectCode"}})],1)],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"16.5%"}},[a("span",{staticClass:"rCode"},[t._v("因子类型")])]),t._v(" "),a("td",[a("el-form-item",{attrs:{prop:"projectType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.projectType,callback:function(e){t.$set(t.formData,"projectType",e)},expression:"formData.projectType"}},t._l(t.projectTypeData,function(t){return a("el-option",{key:t.projectTypeId,attrs:{label:t.projectTypeName,value:t.projectTypeId}})}),1)],1)],1),t._v(" "),a("td",{attrs:{width:"16.5%"}},[a("span",{staticClass:"rCode"},[t._v("因子单位")])]),t._v(" "),a("td",[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-form-item",{attrs:{prop:"projectUnit"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.projectUnit,callback:function(e){t.$set(t.formData,"projectUnit",e)},expression:"formData.projectUnit"}})],1)],1)])]),t._v(" "),a("tr",[a("td",{attrs:{width:"16.5%"}},[a("span",[t._v("小数位数")])]),t._v(" "),a("td",[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入",type:"number"},model:{value:t.formData.decimalDigits,callback:function(e){t.$set(t.formData,"decimalDigits",e)},expression:"formData.decimalDigits"}})],1)],1),t._v(" "),a("td",{attrs:{width:"16.5%"}},[a("span",[t._v("排序")])]),t._v(" "),a("td",[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入",type:"number"},model:{value:t.formData.sortIndex,callback:function(e){t.$set(t.formData,"sortIndex",e)},expression:"formData.sortIndex"}})],1)],1)]),t._v(" "),a("tr",[a("td",{attrs:{width:"16.5%"}},[a("span",[t._v("是否启用")])]),t._v(" "),a("td",[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-radio",{attrs:{label:"1"},model:{value:t.formData.enabled,callback:function(e){t.$set(t.formData,"enabled",e)},expression:"formData.enabled"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:t.formData.enabled,callback:function(e){t.$set(t.formData,"enabled",e)},expression:"formData.enabled"}},[t._v("否")])],1)]),t._v(" "),a("td",{attrs:{width:"16.5%"}},[a("span",[t._v("是否重金属")])]),t._v(" "),a("td",[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-radio",{attrs:{label:"1"},model:{value:t.formData.metal,callback:function(e){t.$set(t.formData,"metal",e)},expression:"formData.metal"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:"0"},model:{value:t.formData.metal,callback:function(e){t.$set(t.formData,"metal",e)},expression:"formData.metal"}},[t._v("否")])],1)])])])])],1)]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"noticon"},on:{click:function(e){return t.submitForm("form")}}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{type:"noticonsecondBtn"},on:{click:function(e){return t.cancelForm("form")}}},[t._v("关 闭")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(o,r,!1,function(t){a("D75n")},"data-v-272ba8da",null);e.default=i.exports},D75n:function(t,e){}});
//# sourceMappingURL=99.2a5daa81b5d430e18b4d.js.map