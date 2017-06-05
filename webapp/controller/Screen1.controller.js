sap.ui.define( ["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
 
	return Controller.extend("ZHR_CELEBI.controller.Screen1", {
		onInit : function () {
		/*	var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("screen1");
			this.byId("link").setHref(sUrl);*/
		},
 
		onToPage2 : function () {
			this.getOwnerComponent().getRouter().navTo("screen2");
		}
	});
 
}, /* bExport= */ true);