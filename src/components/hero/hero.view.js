"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hero_lightbulb_view_1 = require("./hero-lightbulb.view");
var hero_navbar_view_1 = require("./navbar/hero-navbar.view");
var hero_mlh_badge_view_1 = require("./hero-mlh-badge.view");
var hero_title_view_1 = require("./hero-title.view");
var hero_slogan_view_1 = require("./hero-slogan.view");
require("./hero.sass");
var HeroView = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "hero__header-container" },
            react_1["default"].createElement(hero_lightbulb_view_1["default"], null),
            react_1["default"].createElement(hero_navbar_view_1["default"], null),
            react_1["default"].createElement(hero_mlh_badge_view_1["default"], null)),
        react_1["default"].createElement(hero_title_view_1["default"], null),
        react_1["default"].createElement(hero_slogan_view_1["default"], null)));
};
exports["default"] = HeroView;
