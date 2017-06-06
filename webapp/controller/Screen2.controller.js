sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/commons/TextField"], function(Controller, History,
	TextField) {
	"use strict";

	return Controller.extend("ZHR_CELEBI.controller.Screen2", {
		onInit: function() {
			// var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("login");
			// this.byId("link").setHref(sUrl);
		},

		onToPage1: function() {
			this.getOwnerComponent().getRouter().navTo("PersonalActivity");
		},

		onBack: function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				// There is no history!
				// replace the current hash with page 1 (will not add an history entry)
				this.getOwnerComponent().getRouter().navTo("PersonalActivity", null, true);
			}
		}
	});

}, /* bExport= */ true);