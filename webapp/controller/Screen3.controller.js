sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/commons/TextField"], function(Controller, History,
	TextField) {
	"use strict";

	return Controller.extend("ZHR_CELEBI.controller.Screen3", {
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
		},
		onAdd: function() {

			var oDialog;
			var oLanguage = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oPuan = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oTavan = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oYazili = new sap.ui.commons.TextField({
				value: "",
				enabled: true

			});
			var oSozlu = new sap.ui.commons.TextField({
				value: "",
				enabled: true

			});

			var oForm = new sap.ui.layout.form.SimpleForm({
				editable: true,
				content: [
					new sap.ui.commons.Label({
						text: "Yabancı Dil"
					}), oLanguage,
					new sap.ui.commons.Label({
						text: "Puan"
					}), oPuan,
					new sap.ui.commons.Label({
						text: "Tavan"
					}), oTavan,
					new sap.ui.commons.Label({
						text: "Yazılı"
					}), oYazili,
					new sap.ui.commons.Label({
						text: "Sözlü"
					}), oSozlu
				]
			});
			oDialog = new sap.m.Dialog({
				title: "Yabancı Dil Bilgisi",
				rightButton: new sap.m.Button({
					text: "Add",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://add",
					press: function() {
						/* buraya yabancı dil ekleyebilmek için servis eklenecek*/
						/*		var Model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZN11_BPM_SRV");
		
                                    var oEntry = {};
                                    oEntry.BudgetNum = oBudgetNum.getValue();
                                    oEntry.VatAmount = oVATAmount.getValue();
                                    oEntry.UsedAmount = oUsedAmount.getValue();
                                    oEntry.RemAmount = oRemAmount.getValue();
								

                                Model.create("/BudgetSet", oEntry, {
                                method: "POST",
                                success: function() {
                                           console.log("SUCCESS");
                                           
                                         },
                                error: function() {
                                           console.log("ERROR");
                                        }
                                    });
									Model.refresh(true);
								
									this.oParent.close();*/
					}
				}),
				leftButton: new sap.m.Button({
					text: "Close",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://decline",
					press: function() {
						this.oParent.close();
					}
				}),
				content: [oForm]
			});
			oDialog.open();
		},
		onAddPD:function(){
			var oDialogPD;
			var oYil = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oSonuc = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oPuan = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			
			var oFormPD = new sap.ui.layout.form.SimpleForm({
				editable: true,
				content: [
					new sap.ui.commons.Label({
						text: "Yıl"
					}), oYil,
					new sap.ui.commons.Label({
						text: "Sonuç"
					}), oSonuc,
					new sap.ui.commons.Label({
						text: "Puan"
					}), oPuan
				]
			});
			oDialogPD = new sap.m.Dialog({
				title: "PD Sonuç",
				rightButton: new sap.m.Button({
					text: "Add",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://add",
					press: function() {
						/* buraya PD  ekleyebilmek için servis eklenecek*/
						/*		var Model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZN11_BPM_SRV");
		
                                    var oEntry = {};
                                    oEntry.BudgetNum = oBudgetNum.getValue();
                                    oEntry.VatAmount = oVATAmount.getValue();
                                    oEntry.UsedAmount = oUsedAmount.getValue();
                                    oEntry.RemAmount = oRemAmount.getValue();
								

                                Model.create("/BudgetSet", oEntry, {
                                method: "POST",
                                success: function() {
                                           console.log("SUCCESS");
                                           
                                         },
                                error: function() {
                                           console.log("ERROR");
                                        }
                                    });
									Model.refresh(true);
								
									this.oParent.close();*/
					}
				}),
				leftButton: new sap.m.Button({
					text: "Close",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://decline",
					press: function() {
						this.oParent.close();
					}
				}),
				content: [oFormPD]
			});
			oDialogPD.open();
		},
		onAddAbility:function(){
			
			var oDialogAbility;
			var oExam = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oPuanExam = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});
			var oTavanExam = new sap.ui.commons.TextField({
				value: "",
				enabled: true
			});

			var oFormAbility = new sap.ui.layout.form.SimpleForm({
				editable: true,
				content: [
					new sap.ui.commons.Label({
						text: "Sınav Türü"
					}), oExam,
					new sap.ui.commons.Label({
						text: "Puan"
					}), oPuanExam,
					new sap.ui.commons.Label({
						text: "Tavan"
					}), oTavanExam
				]
			});
			oDialogAbility = new sap.m.Dialog({
				title: "Zihinsel Beceri",
				rightButton: new sap.m.Button({
					text: "Add",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://add",
					press: function() {
						/* buraya beceri ekleyebilmek için servis eklenecek*/
						/*		var Model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZN11_BPM_SRV");
		
                                    var oEntry = {};
                                    oEntry.BudgetNum = oBudgetNum.getValue();
                                    oEntry.VatAmount = oVATAmount.getValue();
                                    oEntry.UsedAmount = oUsedAmount.getValue();
                                    oEntry.RemAmount = oRemAmount.getValue();
								

                                Model.create("/BudgetSet", oEntry, {
                                method: "POST",
                                success: function() {
                                           console.log("SUCCESS");
                                           
                                         },
                                error: function() {
                                           console.log("ERROR");
                                        }
                                    });
									Model.refresh(true);
								
									this.oParent.close();*/
					}
				}),
				leftButton: new sap.m.Button({
					text: "Close",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://decline",
					press: function() {
						this.oParent.close();
					}
				}),
				content: [oFormAbility]
			});
			oDialogAbility.open();
		}
	});

}, /* bExport= */ true);