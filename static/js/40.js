webpackJsonp([40,43],{20:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;this.code||(this.code=Array.prototype.map.call(t,function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},21:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},22:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},23:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},24:function(e,t,o){var a=o(22);"string"==typeof a&&(a=[[e.id,a,""]]);o(5)(a,{});a.locals&&(e.exports=a.locals)},25:function(e,t,o){var a=o(23);"string"==typeof a&&(a=[[e.id,a,""]]);o(5)(a,{});a.locals&&(e.exports=a.locals)},26:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},27:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},28:function(e,t,o){var a,n;o(24),a=o(21),n=o(26),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},29:function(e,t,o){var a,n;o(25),a=o(20),n=o(27),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},223:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(554),s=a(n);t["default"]=s["default"]},267:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{count:{type:Number,"default":1},overflowCount:{type:Number,"default":99},dot:{type:Boolean,"default":!1},show:{type:Boolean,"default":!0},styles:Object},ready:function(){this._slotContents||(this.slot=!1)},computed:{num:function o(){var o=void 0;return this.count>this.overflowCount?o=this.overflowCount+"+":this.dot||(o=this.count),o}},data:function(){return{slot:!0}}}},315:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(223),s=a(n),i=o(29),r=a(i),d=o(28),l=a(d);t["default"]={data:function(){return{onClose:function(){console.log(this)},show:!0,num:5,apis:[{parameter:"count",explain:"展示的数字，大于 overflowCount 时显示为 {{overflowCount}}+，为 0 时隐藏",type:"Number","default":""},{parameter:"overflowCount",explain:"展示封顶的数字值",type:"Number","default":"99"},{parameter:"dot",explain:"不展示数字，只有一个小红点",type:"boolean","default":"false"},{parameter:"show",explain:"是否显示",type:"boolean","default":"false"}]}},computed:{code:function(){var e=['<v-badge :count="25"></v-badge>',"<v-badge :count=\"4\" :styles=\"{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }\"></v-badge>",'<v-badge :count="109" :styles="{ backgroundColor: \'#87d068\' }"></v-badge>'].join("");return e}},methods:{reduce:function(){this.num<0?this.num=0:this.num--}},components:{vBadge:s["default"],codeBox:r["default"],apiTable:l["default"]}}},377:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".head-example{width:42px;height:42px;border-radius:6px;background:#eee;display:inline-block}.anticon-notification{width:16px;height:16px;line-height:16px;font-size:16px}.ant-badge{margin-right:16px}",""])},418:function(e,t,o){var a=o(377);"string"==typeof a&&(a=[[e.id,a,""]]);o(5)(a,{});a.locals&&(e.exports=a.locals)},459:function(e,t){e.exports=" <span class=ant-badge :class=\"{'ant-badge-not-a-wrapper':!slot}\"> <slot></slot> <sup class=ant-scroll-number :class=\"[ dot ? 'ant-badge-dot':'ant-badge-count']\" :style=styles v-if=\"show && count> 0\" transition=badge>{{num}}</sup> </span> "},513:function(e,t){e.exports=' <div> <section class=markdown> <h1>Badge 徽标数</h1> <p> 图标右上角的圆形徽标数字。 </p> <h2>何时使用</h2> <ul> <p> 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。 </p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基础 describe=简单的徽章展示。 code=\'<v-badge :count="30"><a href="#" class="head-example"></a></v-badge>\'> <v-badge :count=5> <a class=head-example></a> </v-badge> </code-box> <code-box title=讨嫌的小红点 describe=没有具体的数字。 code=\'<v-badge :count="30"><a href="#" class="head-example"></a></v-badge>\'> <v-badge dot> <i class="anticon anticon-notification"></i> </v-badge> <v-badge dot> <a>一个链接</a> </v-badge> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=大数字 describe="超过 overflowCount 的会显示为 {overflowCount}+。" code=\'<v-badge :count="11" :overflow-count="10">\n  <a class="head-example"></a>\n</v-badge>\n<v-badge :count="1000" :overflow-count="999">\n  <a class="head-example"></a>\n</v-badge>\'> <v-badge :count=11 :overflow-count=10> <a class=head-example></a> </v-badge> <v-badge :count=1000 :overflow-count=999> <a class=head-example></a> </v-badge> </code-box> <code-box title=动态 describe=展示动态变化的效果。 code=\'<v-badge :count="num">\n  <a class="head-example"></a>\n</v-badge>\n<v-badge dot :show="show">\n  <a class="head-example"></a>\n</v-badge>\n<div style="margin-top: 10px;">\n  <div class="ant-btn-group">\n    <button type="button" class="ant-btn ant-btn-ghost" @click="num--"><i class="anticon anticon-minus" ></i></button>\n    <button type="button" class="ant-btn ant-btn-ghost" @click="num++"><i class="anticon anticon-plus"></i></button>\n  </div>\n  <button type="button" class="ant-btn ant-btn-ghost" style="margin-left: 8px;" @click="show = !show"><span>切换红点显隐</span></button>\n</div>\'> <v-badge :count=num> <a class=head-example></a> </v-badge> <v-badge dot :show=show> <a class=head-example></a> </v-badge> <div style="margin-top: 10px"> <div class=ant-btn-group> <button type=button class="ant-btn ant-btn-ghost" @click=reduce><i class="anticon anticon-minus"></i></button> <button type=button class="ant-btn ant-btn-ghost" @click=num++><i class="anticon anticon-plus"></i></button> </div> <button type=button class="ant-btn ant-btn-ghost" style="margin-left: 8px" @click="show = !show"><span>切换红点显隐</span></button> </div> </code-box> </div> <div class="ant-col-lg-24 code-boxes-col-2-1"> <code-box title=独立使用 describe=不包裹任何元素即是独立使用 :code=code> <v-badge :count=25></v-badge> <v-badge :count=4 :styles="{ backgroundColor: \'#fff\', color: \'#999\', borderColor: \'#d9d9d9\' }"></v-badge> <v-badge :count=109 :styles="{ backgroundColor: \'#87d068\' }"></v-badge> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},554:function(e,t,o){var a,n;a=o(267),n=o(459),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},605:function(e,t,o){var a,n;o(418),a=o(315),n=o(513),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}});