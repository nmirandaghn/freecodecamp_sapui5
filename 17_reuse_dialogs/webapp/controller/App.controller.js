sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("n.miranda.ui.controller.App", {
        onOpenDialog(){
            this.getOwnerComponent().openHelloDialog();
        }
    });
});