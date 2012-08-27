/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.data.demos.widgets.FlickrViewList"],["require","dojox.dtl._Templated"],["require","dijit._Widget"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.data.demos.widgets.FlickrViewList"]){_4._hasResource["dojox.data.demos.widgets.FlickrViewList"]=true;_4.provide("dojox.data.demos.widgets.FlickrViewList");_4.require("dojox.dtl._Templated");_4.require("dijit._Widget");_4.declare("dojox.data.demos.widgets.FlickrViewList",[_5._Widget,_6.dtl._Templated],{store:null,items:null,templateString:_4.cache("dojox","data/demos/widgets/templates/FlickrViewList.html","{% load dojox.dtl.contrib.data %}\n{% bind_data items to store as flickr %}\n<div dojoAttachPoint=\"list\">\n\t{% for item in flickr %}\n\t<div style=\"display: inline-block; align: top;\">\n\t\t<h5>{{ item.title }}</h5>\n\t\t<a href=\"{{ item.link }}\" style=\"border: none;\">\n\t\t\t<img src=\"{{ item.imageUrlMedium }}\">\n\t\t</a>\n\t\t<p>{{ item.author }}</p>\n\n\t\t<!--\n\t\t<img src=\"{{ item.imageUrl }}\">\n\t\t<p>{{ item.imageUrl }}</p>\n\t\t<img src=\"{{ item.imageUrlSmall }}\">\n\t\t-->\n\t</div>\n\t{% endfor %}\n</div>\n\n"),fetch:function(_7){_7.onComplete=_4.hitch(this,"onComplete");_7.onError=_4.hitch(this,"onError");return this.store.fetch(_7);},onError:function(){console.trace();this.items=[];this.render();},onComplete:function(_8,_9){this.items=_8||[];this.render();}});}}};});