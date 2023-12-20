sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
], function (ManagedObject, Fragment) {
    'use strict';
    return ManagedObject.extend("n.miranda.ui.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },
        exit() {
            delete this._oView;
        },
        open() {
            var oView = this._oView;

            // create dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }
                Fragment.load({
                    id: oView.getId(),
                    name: "n.miranda.ui.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else{
                oView.byId("helloDialog").open();
            }
        }
    });
});