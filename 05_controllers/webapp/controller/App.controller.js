sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App",{
        onPress: function(oEvent) {
            alert("Hello SAPUI5!!!");
        }
    });
});