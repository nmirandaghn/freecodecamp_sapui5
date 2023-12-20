sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("n.miranda.ui.Component", {
        metadata: {
            manifest: "json"
        },
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            this._helloDialog = new HelloDialog(this.getRootControl());
        },
        exit() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog() {
            this._helloDialog.open();
        }
    });
}); 