(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f45"],{b9a9:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"chip-demo"}},[t("chip-default"),t("chip-color"),t("chip-transparent"),t("chip-icon"),t("chip-closable"),t("chip-add-remove"),t("chip-customize-close-clear-chip-icon")],1)},s=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Default","code-toggler":""}},[t("p",[n._v("Helps you represent simple data with colorful options")]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[n._v("Basic Chip")]),t("vs-chip",[t("vs-avatar",{attrs:{text:"LD"}}),n._v("\n                Avatar Text\n            ")],1),t("vs-chip",[t("vs-avatar"),n._v("\n                Avatar Icon\n            ")],1),t("vs-chip",[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),n._v("\n                Avatar Image\n            ")],1),n.isDeleted?n._e():t("vs-chip",{attrs:{closable:""},on:{click:function(e){n.isDeleted=!0}}},[n._v("\n                Closable chip\n            ")])],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip>Basic Chip</vs-chip>\n\n    <vs-chip>\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},i=[],r={data:function(){return{isDeleted:!1}}},o=r,l=t("2877"),p=Object(l["a"])(o,c,i,!1,null,null,null),v=p.exports,h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Color","code-toggler":""}},[t("p",[n._v("Change the background color of the chip")]),t("vs-alert",{staticClass:"my-3",attrs:{icon:"warning",active:"true",color:"warning"}},[t("span",[n._v("Only "),t("strong",[n._v("RGB")]),n._v(" and "),t("strong",[n._v("HEX")]),n._v(" colors are supported.")])]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",{attrs:{color:"primary"}},[n._v("\n                Basic Chip\n            ")]),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{text:"LD"}}),n._v("\n                Avatar Text\n            ")],1),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar"),n._v("\n                Avatar Icon\n            ")],1),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),n._v("\n                Avatar Image\n            ")],1),n.isDeleted?n._e():t("vs-chip",{attrs:{closable:"",color:"dark"},on:{click:function(e){n.isDeleted=!0}}},[n._v("\n                Closable chip\n            ")]),n.isDeleted2?n._e():t("vs-chip",{attrs:{closable:"",color:"#24c1a0","close-icon":"close"},on:{click:function(e){n.isDeleted2=!0}}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/16.jpg"}}),n._v("\n                Closable chip\n            ")],1)],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip color="primary">Basic Chip</vs-chip>\n\n    <vs-chip color="success">\n      <vs-avatar text="LD" />\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark">\n      Closable chip\n    </vs-chip>\n\n    <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n      isDeleted2: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},d=[],u={data:function(){return{isDeleted:!1,isDeleted2:!1}}},m=u,b=Object(l["a"])(m,h,d,!1,null,null,null),_=b.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Transparent","code-toggler":""}},[t("p",[n._v("You can create transparent chip using "),t("code",[n._v("transparent")]),n._v(" prop.")]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",{attrs:{transparent:"",color:"primary"}},[n._v("\n        Basic Chip\n      ")]),t("vs-chip",{attrs:{transparent:"",color:"success"}},[t("vs-avatar",{attrs:{text:"LD"}}),n._v("\n        Avatar Text\n      ")],1),t("vs-chip",{attrs:{transparent:"",color:"danger"}},[t("vs-avatar"),n._v("\n        Avatar Icon\n      ")],1),t("vs-chip",{attrs:{transparent:"",color:"warning"}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),n._v("\n        Avatar Image\n      ")],1),t("vs-chip",{attrs:{transparent:"",closable:"",color:"dark"}},[n._v("\n        Closable chip\n      ")]),t("vs-chip",{attrs:{transparent:"",closable:"",color:"#24c1a0","close-icon":"close"}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/16.jpg"}}),n._v("\n        Closable chip\n      ")],1)],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="demo-alignment">\n    <vs-chip transparent color="primary">\n      Basic Chip\n    </vs-chip>\n    <vs-chip transparent color="success">\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n    <vs-chip transparent color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n    <vs-chip transparent color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip >\n    <vs-chip transparent closable color="dark">\n      Closable chip\n    </vs-chip>\n    <vs-chip transparent closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg"/>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n    ')])],2)},g=[],k={},C=Object(l["a"])(k,f,g,!1,null,null,null),x=C.exports,y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Icon","code-toggler":""}},[t("p",[n._v("Add a nice icon to the chip")]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),t("span",[n._v("Icon Default")])],1),t("vs-chip",{attrs:{color:"primary"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-send"}}),t("span",[n._v("Icon send")])],1),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-mail"}}),t("span",[n._v("Icon markunread")])],1),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-slash"}}),t("span",[n._v("Icon block")])],1),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-battery"}}),t("span",[n._v("Icon battery_alert")])],1),t("vs-chip",{attrs:{color:"dark"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-edit"}}),t("span",[n._v("Icon edit")])],1)],1),t("template",{slot:"codeContainer"},[n._v('\n<div class="demo-alignment">\n\n  <vs-chip>\n    <vs-avatar icon-pack="feather" icon="icon-user" />\n    <span>Icon Default</span>\n  </vs-chip>\n\n  <vs-chip color="primary">\n    <vs-avatar icon-pack="feather" icon="icon-send" />\n    <span>Icon send</span>\n  </vs-chip>\n\n  <vs-chip color="success">\n    <vs-avatar icon-pack="feather" icon="icon-mail" />\n    <span>Icon markunread</span>\n  </vs-chip>\n\n  <vs-chip color="danger">\n    <vs-avatar icon-pack="feather" icon="icon-slash" />\n    <span>Icon block</span>\n  </vs-chip>\n\n  <vs-chip color="warning">\n    <vs-avatar icon-pack="feather" icon="icon-battery" />\n    <span>Icon battery_alert</span>\n  </vs-chip>\n\n  <vs-chip color="dark">\n    <vs-avatar icon-pack="feather" icon="icon-edit" />\n    <span>Icon edit</span>\n  </vs-chip>\n</div>\n        ')])],2)},D=[],I={},w=Object(l["a"])(I,y,D,!1,null,null,null),j=w.exports,A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Closable","code-toggler":""}},[t("p",[n._v("For making a chip closable")]),t("div",{staticClass:"demo-alignment"},[0==n.chips.length?t("vs-button",{attrs:{type:"filled"},on:{click:n.reset}},[n._v("Reset Chips")]):n._e(),n._l(n.chips,(function(e,a){return t("vs-chip",{key:a,attrs:{closable:""},on:{click:function(t){return n.remove(e)}}},[n._v(" "+n._s(e)+" ")])}))],2),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button>\n    <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> '+n._s("{{ chip }}")+"} </vs-chip>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    reset () {\n      this.chips = [\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ]\n    },\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},V=[],B={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{reset:function(){this.chips=["Dribbble","GitHub","Behance","Vuejs","Vuexy"]},remove:function(n){this.chips.splice(this.chips.indexOf(n),1)}}},O=B,E=Object(l["a"])(O,A,V,!1,null,null,null),G=E.exports,H=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Add and Remove Items","code-toggler":""}},[t("p",[n._v("You can add and remove chips with the "),t("code",[n._v("vs-chips")]),n._v(" component. For the main parameter, pass the "),t("code",[n._v("items")]),n._v(" property, which is an array representing each chip")]),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[n._v(" "+n._s(n.chips)+" ")]),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element"},model:{value:n.chips,callback:function(e){n.chips=e},expression:"chips"}},n._l(n.chips,(function(e,a){return t("vs-chip",{key:e+"-"+a,attrs:{closable:""},on:{click:function(t){return n.remove(e)}}},[n._v("\n                    "+n._s(e)+"\n                ")])})),1)],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="op-block mb-4"> '+n._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable>\n      '+n._s("{{ chip }}")+"}\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},T=[],$={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(n){this.chips.splice(this.chips.indexOf(n),1)}}},F=$,L=Object(l["a"])(F,H,T,!1,null,null,null),R=L.exports,Y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Customize Close and Clear Chips Icons","code-toggler":""}},[t("p",[n._v("You can change the icons used for the close button and the clear button when using multiple chips with the "),t("code",[n._v("vs-chips")]),n._v(" component.")]),t("p",[n._v("For the main parameter, pass the "),t("code",[n._v("close-icon")]),n._v(" property, which is the close icon that appears on each chip. You can change the Clear Chips button with the "),t("code",[n._v("remove-icon")]),n._v(" property")]),t("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[t("p",[n._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),t("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[n._v("Material Icons page")]),n._v(".")]),t("p",[n._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[n._v(" "+n._s(n.chips)+" ")]),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element","icon-pack":"feather","remove-icon":"icon-trash-2"},model:{value:n.chips,callback:function(e){n.chips=e},expression:"chips"}},n._l(n.chips,(function(e,a){return t("vs-chip",{key:e+"-"+a,attrs:{closable:"","icon-pack":"feather","close-icon":"icon-trash-2"},on:{click:function(t){return n.remove(e)}}},[n._v("\n                    "+n._s(e)+"\n                ")])})),1)],1),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="op-block mb-4"> '+n._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" icon-pack="feather" remove-icon="icon-trash-2">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable\n      icon-pack="feather"\n      close-icon="icon-trash-2">\n      '+n._s("{{ chip }}")+"\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},N=[],z={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(n){this.chips.splice(this.chips.indexOf(n),1)}}},J=z,M=Object(l["a"])(J,Y,N,!1,null,null,null),S=M.exports,X={components:{ChipDefault:v,ChipColor:_,ChipTransparent:x,ChipIcon:j,ChipClosable:G,ChipAddRemove:R,ChipCustomizeCloseClearChipIcon:S}},q=X,K=Object(l["a"])(q,a,s,!1,null,null,null);e["default"]=K.exports}}]);
//# sourceMappingURL=chunk-2d210f45.c8030e09.js.map