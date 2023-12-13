sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App",{
        onInit: function() {
            const oData = {
                recipient: {
                    name: "World"
                }
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onSayHiButton(oEvent) {
            MessageToast.show("Hello SAPUI5!!!");
        }
    });
});