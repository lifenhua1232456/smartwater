webpackJsonp([62],{TBAW:function(e,t){},qJi3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"",inject:["globelDelet"],data:function(){return{value:"",fileList:[],visiDialog:!1,visiDialog_editor:!1,visiDialog_add:!1,editionTable:[{id:"",publishedDate:"",file:[],dateEmpty:!1}],dateRange:[],tableData:[],name:"name",nameValue:"",typeValue:"",optionName:[],optionType:[],optionData:[],agreeTxt:"协议新增",agreeObj:{nameValue:"",typeValue:"",codeValue:"",numberValue:""},agreeRules:{nameValue:[{required:!0,message:"请输入或选择协议名称",trigger:"blur"}],typeValue:[{required:!0,message:"请选择协议类型",trigger:"change"}],codeValue:[{required:!0,message:"请输入协议编号",trigger:"blur"}],numberValue:[{required:!0,message:"请输入协议序号",trigger:"blur"}]},addAgreeObj:{TypeName:"",TypeCode:"",TypeId:""},typeRules:{TypeName:[{required:!0,message:"请输入协议类型名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],TypeCode:[{required:!0,message:"请输入协议类型编码",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}]},typeAgreeId:"",agreeId:"",protocolId:"",isEdit:!1,file:null,formData:null}},created:function(){this.getAgreeName(),this.getAgreeType(),this.getAgreeTable()},mounted:function(){},methods:{addAgree:function(){this.visiDialog=!0,this.agreeTxt="协议新增",this.isEdit=!1,this.agreeObj={nameValue:"",typeValue:"",codeValue:""},this.protocolId="",this.editionTable=[{id:"",publishedDate:"",file:[],dateEmpty:!1}]},agreeEditor:function(e){this.visiDialog=!0,this.agreeTxt="协议编辑",this.isEdit=!0,this.agreeObj={nameValue:e.protocol_name,typeValue:e.protocol_protocolType_name,codeValue:e.protocol_code,numberValue:e.protocol_numbers},this.protocolId=e.protocol_protocolId,this.editionTable=[];for(var t=0;t<e.protocol_file.length;t++)this.editionTable.push({id:e.protocol_file[t].id,publishedDate:e.protocol_file[t].publishedDate,file:[{name:e.protocol_file[t].url}],dateEmpty:!1})},downFile:function(e){window.open("/httpApi/file/download?isOnLine=false&fileUrl="+encodeURIComponent(e))},lookupFile:function(e){window.open("/httpApi/file/download?isOnLine=true&fileUrl="+encodeURIComponent(e))},upload:function(e){return"upload"+e},yearChange:function(e){""!=this.editionTable[e].publishedDate?(console.log(e),this.editionTable[e].dateEmpty=!1):this.editionTable[e].dateEmpty=!0},getAgreeName:function(){var e=this;this.$http.post("/httpApi/protocol/query",this.paramsObj.GetData_P("name,code")).then(function(t){0==t.data.code&&(e.optionName=t.data.content.dataList)})},getAgreeType:function(){var e=this;this.$http.post("/httpApi/protocolType/query",this.paramsObj.GetData_P("protocolTypeId,name,code")).then(function(t){0==t.data.code&&(e.optionType=t.data.content.dataList)})},getAgreeTable:function(){var e=this;this.$http.post("/httpApi/protocolData/query",this.paramsObj.GetPageData_P("agreeMange",1,20,["","",""],!1)).then(function(t){console.log(t),0==t.data.code&&(e.tableData=t.data.content.dataList,e.getAgreeName())})},agreeTypeSave:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$http.post("/httpApi/protocolType/edit",{code:t.addAgreeObj.TypeCode,name:t.addAgreeObj.TypeName,protocolTypeId:t.addAgreeObj.TypeId}).then(function(e){0==e.data.code&&(t.$message({message:e.data.message,type:"success",duration:1500}),t.getAgreeType(),t.visiDialog_add=!1,t.resetForm("typeForm"))})})},agreeTypeDelet:function(e){this.globelDelet("/httpApi/protocolType/delete",e,this.getAgreeType)},agreeDelet:function(e){this.globelDelet("/httpApi/protocol/delete",e,this.getAgreeTable)},allagreeDelet:function(){this.globelDelet("/httpApi/protocol/delete",this.agreeId,this.getAgreeTable)},agreeTypeDeletAll:function(){this.globelDelet("/httpApi/protocolType/delete",this.typeAgreeId,this.getAgreeType)},handleSelectionChange:function(e,t){this.typeAgreeId="";var a=e;for(var o in a)this.typeAgreeId+=a[o].protocolTypeId+",";this.typeAgreeId=this.typeAgreeId.substring(0,this.typeAgreeId.length-1)},agreetableChange:function(e,t){this.agreeId="";var a=e;for(var o in a)this.agreeId+=a[o].protocol_protocolId+",";this.agreeId=this.agreeId.substring(0,this.agreeId.length-1)},agreeTypeClose:function(){this.visiDialog_add=!1,this.resetForm("typeForm")},resetForm:function(e){this.$refs[e].resetFields()},agreeClose:function(){this.resetForm("agreeForm"),this.visiDialog=!1},selectChange:function(e){},closess:function(e){e()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},fileChange:function(e,t,a){this.editionTable[a].file=t,this.file=e},uploadFile:function(e,t){this.formData.append("files["+t+"]",e.file)},addEdition:function(){for(var e=0;e<this.editionTable.length;e++)if(!this.editionTable[e].publishedDate)return!1;this.editionTable.push({id:"",publishedDate:"",file:[],dateEmpty:!1})},saveClick:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.formData=new FormData;for(var a=0;a<t.editionTable.length;a++){if(!t.editionTable[a].publishedDate)return t.editionTable[a].dateEmpty=!0,!1;t.editionTable[a].dateEmpty=!1,t.formData.append("protocolDataIds["+a+"]",t.editionTable[a].id),t.formData.append("publishedDates["+a+"]",t.editionTable[a].publishedDate)}for(var o=0;o<t.editionTable.length;o++)t.$refs["upload"+o].submit();t.formData.append("code",t.agreeObj.codeValue),t.formData.append("name",t.agreeObj.nameValue),t.formData.append("numbers",t.agreeObj.numberValue),t.formData.append("protocolId",t.protocolId);for(var l={},i=0;i<t.optionType.length;i++)t.agreeObj.typeValue==t.optionType[i].name&&(l=t.optionType[i]);t.formData.append("protocolTypeCode",l.code),t.formData.append("protocolTypeName",l.name),t.formData.append("protocolTypeIds",l.protocolTypeId);t.$http.post("/httpApi/protocol/editProtocol",t.formData,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){0==e.data.code?(t.visiDialog=!1,t.$message({message:e.data.message,type:"success",duration:1500}),t.getAgreeTable(),t.getAgreeName(),t.resetForm("agreeForm")):t.$message({message:e.data.message,type:"warning",duration:1500})})})},editionDelet:function(e,t){if(this.isEdit){var a=this;this.globelDelet("/httpApi/protocolData/delete",e,function(e){if(1==a.editionTable.length)return!1;a.editionTable.splice(e,1),a.getAgreeTable()})}else{if(1==this.editionTable.length)return this.$message({message:"必须保留至少一条版本信息",type:"warning",duration:1500}),!1;this.editionTable.splice(t,1)}}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trafficpage secondary-page-mode"},[a("div",{staticClass:"secondary-toolbar"},[a("span",[e._v("协议名称 : ")]),e._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"120px"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.selectChange},model:{value:e.nameValue,callback:function(t){e.nameValue=t},expression:"nameValue"}},e._l(e.optionName,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v("  \n        "),a("span",[e._v("协议类型 : ")]),e._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"120px"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.selectChange},model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.optionType,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v("  \n         "),a("span",[e._v("协议编号 : ")]),e._v(" "),a("div",{staticClass:"layoutBox",staticStyle:{width:"180px"}},[a("el-input",{attrs:{placeholder:"请输入"}})],1),e._v("  \n        "),a("span",[e._v("发布日期 : ")]),e._v(" \n        "),a("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v("  \n         "),a("el-button",[a("i",{staticClass:"iconfont icon-sousuo"}),e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.addAgree}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"delet"},on:{click:e.allagreeDelet}},[e._v("批量删除")])],1),e._v(" "),a("div",{staticClass:"currency-mode-wrap"},[a("el-table",{attrs:{border:"",data:e.tableData,height:"100%"},on:{"selection-change":e.agreetableChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{"padding-left":"235px"}},[a("p",{staticStyle:{"text-align":"left","margin-bottom":"8px"}},[e._v("版本信息 : ")]),e._v(" "),a("el-table",{attrs:{border:"",data:t.row.protocol_file}},[a("el-table-column",{attrs:{label:"发布日期",prop:"publishedDate",width:"200px"}}),e._v(" "),a("el-table-column",{attrs:{label:"文件",prop:"url"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.downFile(t.row.url)}}},[e._v("下载")]),e._v(" "),a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.lookupFile(t.row.url)}}},[e._v("查看")])],1)]}}],null,!0)})],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"protocol_name",label:"协议名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"protocol_code",label:"协议编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"protocol_protocolType_name",label:"协议类型"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.agreeEditor(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.agreeDelet(t.row.protocol_protocolId)}}},[e._v("删除")])],1)]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.visiDialog,width:"650px",title:e.agreeTxt,"before-close":e.closess},on:{"update:visible":function(t){e.visiDialog=t}}},[a("div",{staticClass:"dialogcontent"},[a("div",{staticClass:"dialog-layout agreePage"},[a("el-form",{ref:"agreeForm",attrs:{model:e.agreeObj,rules:e.agreeRules}},[a("ul",{staticClass:"formul"},[a("li",[a("div",{staticStyle:{"margin-right":"42px"}},[a("span",{staticClass:"layoutspan"},[e._v("协议名称 : ")]),e._v(" \n                              "),a("div",{staticClass:"layoutBox",staticStyle:{width:"200px"}},[a("el-form-item",{attrs:{prop:"nameValue"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.agreeObj.nameValue,callback:function(t){e.$set(e.agreeObj,"nameValue",t)},expression:"agreeObj.nameValue"}})],1)],1)]),e._v(" "),a("div",[a("span",{staticClass:"layoutspan"},[e._v("协议类型 : ")]),e._v(" \n                              "),a("div",{staticClass:"layoutBox",staticStyle:{width:"150px"}},[a("el-form-item",{attrs:{prop:"typeValue"}},[a("el-select",{attrs:{placeholder:"请选择",filterable:""},model:{value:e.agreeObj.typeValue,callback:function(t){e.$set(e.agreeObj,"typeValue",t)},expression:"agreeObj.typeValue"}},e._l(e.optionType,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"layoutBox",staticStyle:{width:"50px","vertical-align":"-1px"}},[a("el-button",{on:{click:function(t){e.visiDialog_editor=!0}}},[e._v("编辑")])],1)])]),e._v(" "),a("li",[a("div",{staticStyle:{"margin-right":"42px"}},[a("span",{staticClass:"layoutspan"},[e._v("协议编号 : ")]),e._v(" \n                              "),a("div",{staticClass:"layoutBox",staticStyle:{width:"200px"}},[a("el-form-item",{attrs:{prop:"codeValue"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.agreeObj.codeValue,callback:function(t){e.$set(e.agreeObj,"codeValue",t)},expression:"agreeObj.codeValue"}})],1)],1)]),e._v(" "),a("div",[a("span",{staticClass:"layoutspan"},[e._v("协议序号 : ")]),e._v(" \n                              "),a("div",{staticClass:"layoutBox",staticStyle:{width:"200px"}},[a("el-form-item",{attrs:{prop:"numberValue"}},[a("el-input",{attrs:{placeholder:"请输入",type:"number"},model:{value:e.agreeObj.numberValue,callback:function(t){e.$set(e.agreeObj,"numberValue",t)},expression:"agreeObj.numberValue"}})],1)],1)])]),e._v(" "),a("li",[a("div",{staticStyle:{"margin-right":"42px"}},[a("span",{staticClass:"layoutspan"},[e._v("版本信息 : ")]),e._v(" \n                              "),a("div",{staticClass:"layoutBox"},[a("el-button",{on:{click:e.addEdition}},[e._v("添加")])],1)])]),e._v(" "),a("li",[a("el-table",{attrs:{border:"",data:e.editionTable}},[a("el-table-column",{attrs:{prop:"mn",width:"120",label:"发布日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{class:t.row.dateEmpty?"empty":""},[a("el-date-picker",{attrs:{type:"year","value-format":"yyyy",placeholder:"选择年"},on:{change:function(a){return e.yearChange(t.$index)}},model:{value:t.row.publishedDate,callback:function(a){e.$set(t.row,"publishedDate",a)},expression:"scope.row.publishedDate"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"mn",label:"协议内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-upload",{ref:e.upload(t.$index),staticClass:"upload-demo",attrs:{limit:1,"on-change":function(a,o){return e.fileChange(a,o,t.$index)},action:"/httpApi/protocol/editProtocol","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":t.row.file,"http-request":function(a){return e.uploadFile(a,t.$index)},"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger"},slot:"trigger"},[a("i",{staticClass:"icon-shangchuan1 iconfont"}),e._v("选择文件")])],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.editionDelet(t.row.id,t.$index)}}},[e._v("删除")])],1)]}}])})],1)],1)])])],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"noticon"},on:{click:function(t){return e.saveClick("agreeForm")}}},[e._v("保 存")]),e._v(" "),a("el-button",{attrs:{type:"noticonsecondBtn"},on:{click:e.agreeClose}},[e._v("关 闭")])],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.visiDialog_editor,width:"750px",title:"协议类型","before-close":e.closess},on:{"update:visible":function(t){e.visiDialog_editor=t}}},[a("div",{staticClass:"dialogcontent"},[a("div",{staticStyle:{"margin-bottom":"12px"}},[a("el-button",{on:{click:function(t){e.visiDialog_add=!0}}},[a("i",{staticClass:"iconfont icon-tianjia1"}),e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"delet"},on:{click:e.agreeTypeDeletAll}},[a("i",{staticClass:"iconfont icon-shanchu"}),e._v("批量删除")])],1),e._v(" "),a("el-table",{attrs:{border:"",data:e.optionType,height:"300px"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"协议类型名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"协议类型编号"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.agreeTypeEditor(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"secondBtn"},on:{click:function(a){return e.agreeTypeDelet(t.row.protocolTypeId)}}},[e._v("删除")])],1)]}}])})],1)],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.visiDialog_add,width:"360px",title:"协议类型新增","before-close":e.agreeTypeClose},on:{"update:visible":function(t){e.visiDialog_add=t}}},[a("div",{staticClass:"dialogcontent"},[a("div",{staticClass:"dialog-layout"},[a("el-form",{ref:"typeForm",attrs:{model:e.addAgreeObj,rules:e.typeRules}},[a("ul",{staticClass:"formul"},[a("li",[a("div",{staticStyle:{width:"100%"}},[a("span",{staticClass:"layoutspan"},[e._v("协议类型名称 : ")]),e._v(" \n                                      "),a("div",{staticClass:"layoutBox",staticStyle:{width:"200px"}},[a("el-form-item",{attrs:{prop:"TypeName"}},[a("el-input",{model:{value:e.addAgreeObj.TypeName,callback:function(t){e.$set(e.addAgreeObj,"TypeName",t)},expression:"addAgreeObj.TypeName"}})],1)],1)])]),e._v(" "),a("li",[a("div",{staticStyle:{width:"100%"}},[a("span",{staticClass:"layoutspan"},[e._v("协议类型编码 : ")]),e._v(" \n                                      "),a("div",{staticClass:"layoutBox",staticStyle:{width:"200px"}},[a("el-form-item",{attrs:{prop:"TypeCode"}},[a("el-input",{model:{value:e.addAgreeObj.TypeCode,callback:function(t){e.$set(e.addAgreeObj,"TypeCode",t)},expression:"addAgreeObj.TypeCode"}})],1)],1)])])])])],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"noticon"},on:{click:function(t){return e.agreeTypeSave("typeForm")}}},[e._v("保 存")]),e._v(" "),a("el-button",{attrs:{type:"noticonsecondBtn"},on:{click:e.agreeTypeClose}},[e._v("关 闭")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(o,l,!1,function(e){a("TBAW")},"data-v-65a4fef4",null);t.default=i.exports}});
//# sourceMappingURL=62.41b607c0c01725732738.js.map