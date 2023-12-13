sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App",{
        onSayHiButton: function(oEvent) {
            alert("Hello SAPUI5!!!");
        }
    });
});