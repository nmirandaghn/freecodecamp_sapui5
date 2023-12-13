sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App",{
        onSayHiButton: function(oEvent) {
            MessageToast.show("Hello SAPUI5!!!");
        }
    });
});