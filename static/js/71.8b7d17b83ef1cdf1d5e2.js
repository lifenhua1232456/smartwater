webpackJsonp([71],{UY0N:function(t,a){},f3yp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"",data:function(){return{optionData:[],typeSelect:"",tableData:[],duration:"",value:"",currentPage:1,pageSize:10,totalRecords:0,pageList:[10,15,20],positionNum:0,allLiwidth:0,list:[{},{},{},{},{},{},{},{},{},{}]}},methods:{leftClick:function(){if(0==this.positionNum)return!1;this.positionNum=this.positionNum-255},rightClick:function(){var t=document.getElementById("carBody");if((t.clientWidth||t.offsetWidth)+this.positionNum>this.allLiwidth)return!1;this.positionNum=this.positionNum+255}},mounted:function(){this.allLiwidth=270*this.list.length}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rcBox"},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("div",{staticClass:"statusBox"},[e("div",{staticClass:"videoBox"},[e("div",{staticClass:"video"}),t._v(" "),e("div",{staticClass:"playTool"})]),t._v(" "),e("div",{staticClass:"statusMes"},[e("div",{staticClass:"station"},[e("i"),t._v("橘子洲站实时运行状态\n        ")]),t._v(" "),e("div",[e("span",{staticStyle:{width:"200px"}},[t._v("更新时间: 2019-01-01 10:10:10")]),t._v(" "),e("span",{staticStyle:{width:"30px"}},[t._v("31s")]),t._v(" "),e("span",{staticStyle:{color:"#166bce",cursor:"pointer"}},[t._v("刷新")])]),t._v(" "),e("div",[e("span",{staticStyle:{color:"#1a1a1a"}},[t._v("环境参数")]),t._v(" "),e("span",[t._v("温度：100℃")]),t._v(" "),e("span",[t._v("湿度：60%")]),t._v(" "),e("span",[t._v("电压:10mv")]),t._v(" "),e("span",[t._v("供电: 220V")]),t._v(" "),e("span",{staticStyle:{color:"#166bce",cursor:"pointer"}},[t._v("历史记录>>")])]),t._v(" "),e("div",[e("span",{staticStyle:{color:"#1a1a1a"}},[t._v("通信参数")]),t._v(" "),e("span",[t._v("状态：在线")]),t._v(" "),e("span",[t._v("在线：642分钟")]),t._v(" "),e("span",[t._v("离线：2次")]),t._v(" "),e("span",[t._v("流量：261.19KB")])])])]),t._v(" "),e("div",{staticClass:"model"},[e("div",{staticClass:"modelTitle"},[t._v("仪器远程反控")]),t._v(" "),e("div",{staticClass:"modelBody",staticStyle:{height:"352px"}},[e("div",{staticClass:"carBox"},[e("div",{staticClass:"leftBtn btnDiv",on:{click:t.leftClick}},[e("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),e("div",{staticClass:"rightBtn btnDiv",on:{click:t.rightClick}},[e("i",{staticClass:"el-icon-arrow-right"})]),t._v(" "),e("div",{staticClass:"carBody",attrs:{id:"carBody"}},[e("ul",{staticClass:"factorBox",style:{left:-t.positionNum+"px"}},t._l(t.list,function(a){return e("li",[e("div",{staticClass:"tp"},[t._v("高锰酸钾盐(1.92ml/g)")]),t._v(" "),e("div",{staticClass:"pb"},[e("p",[e("span",[t._v("工作状态：")]),t._v(" 标样核查 加热")]),t._v(" "),e("p",[e("span",[t._v("报警信息：")]),t._v(" 试剂余量不足 ")]),t._v(" "),e("p",[e("span",[t._v("标定时间：")]),t._v(" 2019-01-01 ")]),t._v(" "),e("p",[e("span",[t._v("试剂剩余次数：")]),t._v(" 5次 ")]),t._v(" "),e("p",[e("span",[t._v("显色剂：")]),t._v(" 1000ml ")]),t._v(" "),e("p",[e("span",[t._v("掩蔽剂：")]),t._v(" 1000ml ")]),t._v(" "),e("p",[e("span",[t._v("蒸馏水：")]),t._v(" 1000ml ")]),t._v(" "),e("p",[e("span",[t._v("清洗剂：")]),t._v(" 1000ml ")])]),t._v(" "),e("div",{staticClass:"select"},[e("div",{staticClass:"layoutBox",staticStyle:{width:"126px"}},[e("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择"},model:{value:t.typeSelect,callback:function(a){t.typeSelect=a},expression:"typeSelect"}},t._l(t.optionData,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" \n                              "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("远程反控")])],1)])}),0)])])])]),t._v(" "),e("div",{staticClass:"model"},[e("div",{staticClass:"modelTitle"},[t._v("集成远程反控")]),t._v(" "),e("div",{staticClass:"modelBody",staticStyle:{padding:"8px"}},[e("div",{staticClass:"jcBox"},[e("p",{staticClass:"jc"},[t._v("系统集成")]),t._v(" "),e("p",[t._v("运行  五参数留样")]),t._v(" "),e("span",[t._v("开机时间: 2019-07-29 10:10:10    ")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("重启")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("提取")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("校时")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("远程控制系统进入待机")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("远程重启系统单元测试")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("远程反控")])],1),t._v(" "),e("div",{staticClass:"dyBox clearfix"},[e("div",{staticClass:"block bOne"},[e("p",[t._v("控制单元设置")]),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("运行模式 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"27%"}},[e("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择内容"},model:{value:t.typeSelect,callback:function(a){t.typeSelect=a},expression:"typeSelect"}},t._l(t.optionData,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v("  "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("提取")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("修改密码 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"27%"}},[e("el-input",{attrs:{placeholder:"请输入"}})],1),t._v("  "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("运行周期 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"27%"}},[e("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择内容"},model:{value:t.typeSelect,callback:function(a){t.typeSelect=a},expression:"typeSelect"}},t._l(t.optionData,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v("  "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("实时数据间隔 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"27%"}},[e("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.duration,callback:function(a){t.duration=a},expression:"duration"}})],1),t._v(" 分钟  "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("提取")]),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1),t._v(" "),e("div",{staticStyle:{margin:"0px"}},[e("span",{staticClass:"bSpan"},[t._v("超时重发间隔 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"11.5%"}},[e("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.duration,callback:function(a){t.duration=a},expression:"duration"}})],1),t._v(" 秒 "),e("div",{staticClass:"layoutBox",staticStyle:{width:"11.5%"}},[e("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.duration,callback:function(a){t.duration=a},expression:"duration"}})],1),t._v("  次    "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1)]),t._v(" "),e("div",{staticClass:"block bTwo"},[e("p",[t._v("质控设置")]),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("监测参数 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"210px"}},[e("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择内容"},model:{value:t.typeSelect,callback:function(a){t.typeSelect=a},expression:"typeSelect"}},t._l(t.optionData,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v("  "),e("el-button",{attrs:{type:"secondBtn"}},[t._v("设置")])],1),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("加标体积 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"180px"}},[e("el-input",{attrs:{placeholder:"请输入"}})],1),t._v(" ml\n                          ")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"secondBtn"}},[t._v("加标回收")])],1),t._v(" "),e("p",[t._v("留样器控制")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"secondBtn"}},[t._v("手动远程留样")])],1)]),t._v(" "),e("div",{staticClass:"block bThree"},[e("p",[t._v("数据补采")]),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("开始时间 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"210px"}},[e("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)]),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("结束时间 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"210px"}},[e("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)]),t._v(" "),e("div",[e("span",{staticClass:"bSpan"},[t._v("数据类型 :  ")]),t._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"210px"}},[e("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择内容"},model:{value:t.typeSelect,callback:function(a){t.typeSelect=a},expression:"typeSelect"}},t._l(t.optionData,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{attrs:{type:"secondBtn"}},[t._v("采集")])],1)])])])]),t._v(" "),e("div",{staticClass:"model"},[e("div",{staticClass:"modelTitle"},[t._v("反控记录")]),t._v(" "),e("div",{staticClass:"modelBody",staticStyle:{padding:"8px"}},[e("el-table",{attrs:{data:t.tableData,border:"",height:"100%"}},[e("el-table-column",{attrs:{type:"index",label:"序号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"cn",label:"请求编码"}}),t._v(" "),e("el-table-column",{attrs:{prop:"description",label:"命名描述"}}),t._v(" "),e("el-table-column",{attrs:{prop:"operationUser",label:"操作用户"}}),t._v(" "),e("el-table-column",{attrs:{prop:"operationTime",label:"时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"ip",label:"IP"}}),t._v(" "),e("el-table-column",{attrs:{prop:"response",label:"请求应答"}}),t._v(" "),e("el-table-column",{attrs:{prop:"result",label:"执行结果"}}),t._v(" "),e("el-table-column",{attrs:{prop:"content",label:"内容"}})],1),t._v(" "),e("div",{staticClass:"paginationBox"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,background:"",small:!0,"popper-class":"select-common-option","page-sizes":t.pageList,layout:"total,sizes,slot,->,prev, pager, next, jumper",total:t.totalRecords},on:{"size-change":t.paginationSizeChange,"current-change":t.paginationChange,"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}}},[e("span",{staticClass:"el-pagination__current"},[t._v("当前第"+t._s(t.currentPage)+"/"+t._s(t.totalPage)+"页")])])],1)],1)])])],1)},staticRenderFns:[]};var i=e("VU/8")(l,s,!1,function(t){e("UY0N")},"data-v-54f434e8",null);a.default=i.exports}});
//# sourceMappingURL=71.8b7d17b83ef1cdf1d5e2.js.map