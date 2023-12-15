sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("n.miranda.ui.Component", {
        metadata: {
            "rootView": {
                "viewName": "n.miranda.ui.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "n.miranda.ui.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
}); 