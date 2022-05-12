webpackJsonp([78],{TId6:function(a,t){},oiFO:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,o=e("bOdI"),i=e.n(o),n=e("dwSH"),r=(l={name:"examAnalysis",data:function(){return{dateRange:"",sectionName:"",value:"",optionData:[{value:1,label:"水温",standard:"",isShow:!0},{value:2,label:"PH",standard:"6~9",isShow:!0},{value:3,label:"溶解氧",standard:"≥5",isShow:!0},{value:4,label:"电导率",standard:"",isShow:!0},{value:5,label:"浊度",standard:"",isShow:!0},{value:6,label:"高锰酸盐",standard:"6",isShow:!0},{value:7,label:"氨氮",standard:"1",isShow:!0},{value:8,label:"总磷",standard:"0.2",isShow:!0},{value:9,label:"总氮",standard:"",isShow:!0}],stationId:"",tableData:[],dayQualityData:[],weekQualityData:[],linearityData:[],interventionData:[],comparisonData:[],recoveryData:[],projectSet:!1,dialogData:[{monitoringItems:"高锰酸钾",waterQuality:"",spanValue:"",zeroPoint:"",span:""},{monitoringItems:"氨氮",waterQuality:"",spanValue:"",zeroPoint:"",span:""},{monitoringItems:"总磷",waterQuality:"",spanValue:"",zeroPoint:"",span:""},{monitoringItems:"总氮",waterQuality:"",spanValue:"",zeroPoint:"",span:""}],tabsValue:"DAY_QUALITY"}},methods:{toggleTab:function(a){this.getQualityControllerData()},getQualityControllerData:function(){var a=this;this.$http.get("/Quality/qualityAnalysis/monthReportStandingBook",{params:{startTime:this.dateRange[0].format("yyyy-MM-dd"),endTime:this.dateRange[1].format("yyyy-MM-dd"),stationCodes:this.stationId,qualityAnalysisType:this.tabsValue}}).then(function(t){if(console.log(t),0===t.data.code)switch(a.tabsValue){case"DAY_QUALITY":a.dayQualityData=t.data.content.dataList;break;case"WEEK_QUALITY":a.weekQualityData=t.data.content.dataList;break;case"MULTIPOINT_LINEARITY":a.linearityData=t.data.content.dataList;break;case"INTEGRATED_INTERVENTION":a.interventionData=t.data.content.dataList;break;case"REAL_WATER_SAMPLE_COMPARISON":a.comparisonData=t.data.content.dataList;break;case"RECOVERY":a.recoveryData=t.data.content.dataList}}).catch(function(a){})},exportExcel:function(){var a=this.$refs,t=a.tableA,e=a.tableB,l=a.tableC,o=a.tableD,i=a.tableE,r=a.tableF,s=null,b="",p=[];switch(this.tabsValue){case"DAY_QUALITY":s=t,b="日质控",p=["areaName","basinName","stationName","operationName","w01019_qualifiedRate","w21003_qualifiedRate","w21011_qualifiedRate","w21001_qualifiedRate","appraiseQualifiedRate","w01019_completionRate","w21003_completionRate","w21011_completionRate","w21001_completionRate","appraiseCompletionRate"];break;case"WEEK_QUALITY":s=e,b="周质控",p=["areaName","basinName","stationName","operationName","w01001_qualifiedRate","w01009_qualifiedRate","w01014_qualifiedRate","w01003_qualifiedRate","appraiseQualifiedRate","w01001_completionRate","w01009_completionRate","w01014_completionRate","w01003_completionRate","appraiseCompletionRate"];break;case"MULTIPOINT_LINEARITY":s=l,b="月质控-多点线性",p=["areaName","basinName","stationName","operationName","w01019_qualifiedRate","w21003_qualifiedRate","w21011__qualifiedRate","w21001__qualifiedRate","w01019_completionRate","w21003_completionRate","w21011__completionRate","w21001__completionRate"];break;case"INTEGRATED_INTERVENTION":s=o,b="月质控-集成干预",p=["areaName","basinName","stationName","operationName","w01019_qualifiedRate","w21003_qualifiedRate","w21011__qualifiedRate","w21001__qualifiedRate","w01019_completionRate","w21003_completionRate","w21011__completionRate","w21001__completionRate"];break;case"REAL_WATER_SAMPLE_COMPARISON":s=i,b="月质控-实际水样对比",p=["areaName","basinName","stationName","operationName","w01010_qualifiedRate","w01001_qualifiedRate","w01009_qualifiedRate","w01014_qualifiedRate","w01003_qualifiedRate","w01010_completionRate","w01001_completionRate","w01009_completionRate","w01014_completionRate","w01003_completionRate"];break;case"RECOVERY":s=r,b="月质控-加标回收",p=["areaName","basinName","stationName","operationName","w01019_qualifiedRate","w21003_qualifiedRate","w21011_qualifiedRate","w21001_qualifiedRate","w01019_completionRate","w21003_completionRate","w21011_completionRate","w21001_completionRate"]}var c=s.$el.querySelector(".el-table__header"),d={startTime:this.dateRange[0].format("yyyy-MM-dd"),endTime:this.dateRange[1].format("yyyy-MM-dd"),stationCodes:this.stationId,qualityAnalysisType:this.tabsValue,headerProp:p.join(","),tableType:"MONTH_REPORT",pattern:"yyyy-MM-dd"};Object(n.a)(c,b,"","1","/Quality/exports/qualityControlExcel",d)}},computed:{stationInfo:{get:function(){return this.$store.state.stationInfo}}},created:function(){this.dateRange=[new Date((new Date).setMonth((new Date).getMonth()-1)),new Date],this.$store.commit("setShowlefttree",!0)}},i()(l,"computed",{stationInfo:{get:function(){return this.$store.state.stationInfo}}}),i()(l,"watch",{stationInfo:function(a){if(a.length>0){var t=[];a.forEach(function(a){t.push(a.nodeId)}),this.stationId=t.join(","),this.getQualityControllerData()}}}),l),s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"examAnalysis tapStyle"},[e("div",{staticClass:"toolbox"},[e("div",{staticClass:"toolbox-row"},[e("span",[a._v("时间选择 : ")]),a._v(" "),e("div",{staticClass:"layoutBox",staticStyle:{width:"242px"}},[e("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:a.dateRange,callback:function(t){a.dateRange=t},expression:"dateRange"}})],1),a._v("  \n      "),a._v(" "),e("el-button",{on:{click:function(t){return a.getQualityControllerData()}}},[e("i",{staticClass:"iconfont icon-sousuo"}),a._v("查询")]),a._v(" "),e("el-button",{attrs:{type:"delet"},on:{click:function(t){return a.exportExcel()}}},[e("i",{staticClass:"iconfont icon-daochu"}),a._v("导出")])],1)]),a._v(" "),e("div",{staticClass:"containerbox"},[e("yf-tabs",{attrs:{type:"border-card"},on:{"tab-click":a.toggleTab},model:{value:a.tabsValue,callback:function(t){a.tabsValue=t},expression:"tabsValue"}},[e("yf-tab-pane",{attrs:{name:"DAY_QUALITY",label:"日质控"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableA",attrs:{data:a.dayQualityData,height:"100%",border:""}},[e("el-table-column",{attrs:{type:"index",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"124",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_qualifiedRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_qualifiedRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_qualifiedRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_qualifiedRate",label:"总氮"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"appraiseQualifiedRate",width:"130",label:"评价合格率"}}),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_completionRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_completionRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_completionRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_completionRate",label:"总氮"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"appraiseCompletionRate",width:"130",label:"评价完成率"}})],1)],1)]),a._v(" "),e("yf-tab-pane",{attrs:{name:"WEEK_QUALITY",label:"周质控"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableB",attrs:{data:a.weekQualityData,border:""}},[e("el-table-column",{attrs:{type:"index",width:"60",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"126",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01001_qualifiedRate",label:"PH"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01009_qualifiedRate",label:"溶解氧"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01014_qualifiedRate",label:"电导率"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01003_qualifiedRate",label:"浊度"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"appraiseQualifiedRate",width:"130",label:"评价合格率"}}),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01001_completionRate",label:"PH"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01009_completionRate",label:"溶解氧"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01014_completionRate",label:"电导率"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01003_completionRate",label:"浊度"}}),a._v(" "),e("el-table-column",{attrs:{prop:"appraiseCompletionRate",width:"130",label:"评价完成率"}})],1)],1)],1)]),a._v(" "),e("yf-tab-pane",{attrs:{name:"MULTIPOINT_LINEARITY",label:"月质控-多点线性"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableC",attrs:{data:a.linearityData,height:"100%",border:""}},[e("el-table-column",{attrs:{type:"index",width:"60",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"110",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_qualifiedRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_qualifiedRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_qualifiedRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_qualifiedRate",label:"总氮"}})],1),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_completionRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_completionRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_completionRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_completionRate",label:"总氮"}})],1)],1)],1)]),a._v(" "),e("yf-tab-pane",{attrs:{name:"INTEGRATED_INTERVENTION",label:"月质控-集成干预"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableD",attrs:{data:a.interventionData,height:"100%",border:""}},[e("el-table-column",{attrs:{type:"index",width:"60",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"110",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_qualifiedRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_qualifiedRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_qualifiedRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_qualifiedRate",label:"总氮"}})],1),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_completionRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_completionRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_completionRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_completionRate",label:"总氮"}})],1)],1)],1)]),a._v(" "),e("yf-tab-pane",{attrs:{name:"REAL_WATER_SAMPLE_COMPARISON",label:"月质控-实际水样对比"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableE",attrs:{data:a.comparisonData,border:"",height:"100%"}},[e("el-table-column",{attrs:{type:"index",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"130",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01010_qualifiedRate",label:"水温"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01001_qualifiedRate",label:"PH"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01009_qualifiedRate",label:"溶解氧"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01014_qualifiedRate",label:"电导率"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01003_qualifiedRate",label:"浊度"}})],1),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01010_completionRate",label:"水温"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01001_completionRate",label:"PH"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01009_completionRate",label:"溶解氧"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01014_completionRate",label:"电导率"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w01003_completionRate",label:"浊度"}})],1)],1)],1)]),a._v(" "),e("yf-tab-pane",{attrs:{name:"RECOVERY",label:"月质控-加标回收"}},[e("div",{staticClass:"tablebox",staticStyle:{height:"100%"}},[e("el-table",{ref:"tableF",attrs:{data:a.recoveryData,height:"100%",border:""}},[e("el-table-column",{attrs:{type:"index",fixed:"",label:"序号"}}),a._v(" "),e("el-table-column",{attrs:{prop:"areaName",fixed:"",width:"130",label:"行政区"}}),a._v(" "),e("el-table-column",{attrs:{prop:"basinName",fixed:"",width:"130",label:"流域"}}),a._v(" "),e("el-table-column",{attrs:{prop:"stationName",fixed:"",width:"130",label:"断面名称"}}),a._v(" "),e("el-table-column",{attrs:{prop:"operationName",fixed:"","show-overflow-tooltip":!0,width:"130",label:"运营公司"}}),a._v(" "),e("el-table-column",{attrs:{label:"合格率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_qualifiedRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_qualifiedRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_qualifiedRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_qualifiedRate",label:"总氮"}})],1),a._v(" "),e("el-table-column",{attrs:{label:"完成率(%)"}},[e("el-table-column",{attrs:{prop:"w01019_completionRate",width:"114",label:"高猛酸钾盐指数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21003_completionRate",label:"氨氮"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21011_completionRate",label:"总磷"}}),a._v(" "),e("el-table-column",{attrs:{prop:"w21001_completionRate",label:"总氮"}})],1)],1)],1)])],1)],1)])},staticRenderFns:[]};var b=e("VU/8")(r,s,!1,function(a){e("TId6")},"data-v-4960be28",null);t.default=b.exports}});
//# sourceMappingURL=78.6c8e60321409988f8166.js.map