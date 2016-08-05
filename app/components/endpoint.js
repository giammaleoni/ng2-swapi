"use strict";
var Endpoint = (function () {
    function Endpoint(resource, index, wookiee) {
        if (resource === void 0) { resource = 'root'; }
        if (index === void 0) { index = 0; }
        if (wookiee === void 0) { wookiee = false; }
        this.resource = resource;
        this.index = index;
        this.wookiee = wookiee;
    }
    return Endpoint;
}());
exports.Endpoint = Endpoint;
//# sourceMappingURL=endpoint.js.map