sap.ui.define([
	"sap/m/Text",
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Text,
	Button,
	MessageToast) {
	"use strict";
	new Text({
		text:"Hi SAPUI5!"}
	).placeAt("content");

	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello SAPUI5!");
		}
	}).placeAt("content");
});