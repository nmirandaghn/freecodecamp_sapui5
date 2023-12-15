sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "n.miranda.ui",
		settings: {
			id: "nmiranda"
		},
		async: true
	}).placeAt("content");
})