/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.form.NumberTextBox"],["require","dijit.form.ValidationTextBox"],["require","dojo.number"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.form.NumberTextBox"]){_4._hasResource["dijit.form.NumberTextBox"]=true;_4.provide("dijit.form.NumberTextBox");_4.require("dijit.form.ValidationTextBox");_4.require("dojo.number");_4.declare("dijit.form.NumberTextBoxMixin",null,{regExpGen:_4.number.regexp,value:NaN,editOptions:{pattern:"#.######"},_formatter:_4.number.format,postMixInProperties:function(){var _7=typeof this.constraints.places=="number"?this.constraints.places:0;if(_7){_7++;}if(typeof this.constraints.max!="number"){this.constraints.max=9*Math.pow(10,15-_7);}if(typeof this.constraints.min!="number"){this.constraints.min=-9*Math.pow(10,15-_7);}this.inherited(arguments);},_onFocus:function(){if(this.disabled){return;}var _8=this.attr("value");if(typeof _8=="number"&&!isNaN(_8)){var _9=this.format(_8,this.constraints);if(_9!==undefined){this.textbox.value=_9;}}this.inherited(arguments);},format:function(_a,_b){var _c=String(_a);if(typeof _a!="number"){return _c;}if(isNaN(_a)){return "";}if(!("rangeCheck" in this&&this.rangeCheck(_a,_b))&&_b.exponent!==false&&/\de[-+]?\d/i.test(_c)){return _c;}if(this.editOptions&&this._focused){_b=_4.mixin({},_b,this.editOptions);}return this._formatter(_a,_b);},parse:_4.number.parse,_getDisplayedValueAttr:function(){var v=this.inherited(arguments);return isNaN(v)?this.textbox.value:v;},filter:function(_d){return (_d===null||_d===""||_d===undefined)?NaN:this.inherited(arguments);},serialize:function(_e,_f){return (typeof _e!="number"||isNaN(_e))?"":this.inherited(arguments);},_setValueAttr:function(_10,_11,_12){if(_10!==undefined&&_12===undefined){_12=String(_10);if(typeof _10=="number"){if(isNaN(_10)){_12="";}else{if(("rangeCheck" in this&&this.rangeCheck(_10,this.constraints))||this.constraints.exponent===false||!/\de[-+]?\d/i.test(_12)){_12=undefined;}}}else{if(!_10){_12="";_10=NaN;}else{_10=undefined;}}}this.inherited(arguments,[_10,_11,_12]);},_getValueAttr:function(){var v=this.inherited(arguments);if(isNaN(v)&&this.textbox.value!==""){if(this.constraints.exponent!==false&&/\de[-+]?\d/i.test(this.textbox.value)&&(new RegExp("^"+_4.number._realNumberRegexp(_4.mixin({},this.constraints))+"$").test(this.textbox.value))){var n=Number(this.textbox.value);return isNaN(n)?undefined:n;}else{return undefined;}}else{return v;}},isValid:function(_13){if(!this._focused||this._isEmpty(this.textbox.value)){return this.inherited(arguments);}else{var v=this.attr("value");if(!isNaN(v)&&this.rangeCheck(v,this.constraints)){if(this.constraints.exponent!==false&&/\de[-+]?\d/i.test(this.textbox.value)){return true;}else{return this.inherited(arguments);}}else{return false;}}}});_4.declare("dijit.form.NumberTextBox",[_5.form.RangeBoundTextBox,_5.form.NumberTextBoxMixin],{});}}};});