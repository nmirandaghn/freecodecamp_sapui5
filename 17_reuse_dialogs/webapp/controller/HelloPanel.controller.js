sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (
    Controller,
    MessageToast
) {
    "use strict";
    return Controller.extend("n.miranda.ui.controller.HelloPanel", {
        onSayHiButton(oEvent) {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        },
        onOpenDialog() {
            // // create dialog lazily
            // this.pDialog ??= this.loadFragment({
            //     name: "n.miranda.ui.view.HelloDialog"
            // });

            // this.pDialog.then((oDialog) => oDialog.open());
            this.getOwnerComponent().openHelloDialog();
        }
    });
});