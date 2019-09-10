"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./hero.sass");
var HeroMlhBadgeView = function () {
    return (react_1["default"].createElement("svg", { className: "hero__mlh-badge", width: "86", height: "150", viewBox: "0 0 86 150", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        react_1["default"].createElement("path", { fill: "url(#pattern0)", d: "M0 0h86v150H0z" }),
        react_1["default"].createElement("defs", null,
            react_1["default"].createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                react_1["default"].createElement("use", { xlinkHref: "#image0", transform: "scale(.01163 .00667)" })),
            react_1["default"].createElement("image", { id: "image0", width: "86", height: "150", xlinkHref: "data:image/png;base64,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" }))));
};
exports["default"] = HeroMlhBadgeView;
