sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/commons/TextField", "sap/ui/core/Fragment"], function(Controller, History,
	TextField, Fragment) {
	"use strict";

	return Controller.extend("ZHR_CELEBI.controller.Screen1", {
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
		onAddExam: function() {

			var oDialogExam;
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

			var oFormExam = new sap.ui.layout.form.SimpleForm({
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
			oDialogExam = new sap.m.Dialog({
				title: "Zihinsel Beceri",
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
				content: [oFormExam]
			});
			oDialogExam.open();
		},
		onAttachAdd: function() {
			var oAttachAddDialog = this.getDialogAttach();
			oAttachAddDialog.open();

		},
		getDialogAttach: function() {
			if (!this.oAttachAddDialog) {
				this.oAttachAddDialog = sap.ui.xmlfragment("ZHR_CELEBI.view.Attach", this);
				this.getView().addDependent(this.oAttachAddDialog);
			}

			return this.oAttachAddDialog;
		},
		onCloseDialog: function() {
			this.oAttachAddDialog.close();
			this.oAttachAddDialog.destroy();
		},
		uploadFileScreen: function(){
			
		/*	var oFileUploader = sap.ui.getCore().byId("fileuploadExpense");
			var file = jQuery.sap.domById(oFileUploader.getId() + "-fu").files[0];
			var form = sap.ui.getCore().byId("simpleFormAttach");
			console.log(form);

			console.log(file);

			try {
				if (file) {
					this._bUploading = true;
					var that = this;*/
					/****************To Fetch CSRF Token*******************/
				/*	var a = "/sap/opu/odata/sap/ZN11_BPM_SRV/";
					var f = {
						headers: {
							"X-Requested-With": "XMLHttpRequest",
							"Content-Type": "application/atom + xml",
							DataServiceVersion: "2.0",
							"x-csrf-token": "Fetch"
						},
						requestUri: a,
						method: "GET"
					};
					var oHeaders;
					var sUrl = "/sap/opu/odata/sap/ZN11_BPM_SRV/";
					var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
					sap.ui.getCore().setModel(oModel);
					OData.request(f, function(data, oSuccess) {
						var oToken = oSuccess.headers['x-csrf-token'];
						oHeaders = {
							"x-csrf-token": oToken,
							"slug": "QF"
						};*/
						/*	* * * * * * * * * * * * * * * To Fetch CSRF Token * * * * * * * * * * * * * * * * * * * /
/ * * * * * * * * * * * * * * * * * * * To Upload File * * * * * * * * * * * * * * * * * * * * * * * * */
					/*	var oURL = "/sap/opu/odata/sap/ZN11_BPM_SRV" + "/FileSet('" + file.name + "')/$value";
						jQuery.ajax({
							type: 'PUT',
							url: oURL,
							headers: oHeaders,
							cache: false,
							contentType: file.type,
							processData: false,
							data: file,
							success: function() {
								sap.m.MessageToast.show("File Uploaded Successfully");
								oFileUploader.setValue("");

								attachFiles.push(file);
								//attach butonları yaratma
								var oButton = new sap.ui.commons.Button({
									text: file.name,
									icon: "sap-icon://attachment",
									lite: true,
									width: "20%",
									id: "button_" + file.name,
									press: function(oEvent) {
										alert("Dosyalarr!!" + oEvent.getSource().getId());
										debugger;
									}
								});
								form.addContent(oButton);

							},
							error: function() {
								sap.m.MessageToast.show("File Upload Error!");
							}
						});
					});
				}
			} catch (oException) {
				jQuery.sap.log.error("File upload failed: \n" + oException.message);
			}
			console.log(attachFiles);*/
		},
		onCloseAttachDialogScreen:function(){
				if (!this.oAttachAddDialog) {
				this.oAttachAddDialog = sap.ui.xmlfragment("ZHR_CELEBI.view.Attach", this.getView().getController());

			}
			var oFileUploader = sap.ui.getCore().byId("fileuploadScreen");
			oFileUploader.setValue("");
			this.oAttachAddDialog.close();

			//kac adet file eklenmiş onu ekrana gösterme
		/*	var form = sap.ui.getCore().byId("simpleFormMessage");
			for (var m = 0; m < attachFiles.length; m++) {

				var oButton = new sap.ui.commons.Button({
					text: attachFiles[m].name,
					icon: "sap-icon://attachment",
					lite: true,
					width: "60%",
					id: "button" + attachFiles[m].name,
					press: function(oEvent) {
						alert("Dosyalarr!!" + oEvent.getSource().getId());

					}
				});
				form.addContent(oButton);
			}
			attachFiles = [];*/
		}
	});

}, /* bExport= */ true);