sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App", {
        onInit: function () {
            const oData = {
                recipient: {
                    name: "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "n.miranda.ui.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        onSayHiButton(oEvent) {
         // read msg from i18n model
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // show message
         MessageToast.show(sMsg);
        }
    });
});