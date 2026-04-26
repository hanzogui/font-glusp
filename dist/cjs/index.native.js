"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var index_exports = {};
__export(index_exports, {
  createGluspFont: () => createGluspFont
});
module.exports = __toCommonJS(index_exports);
var import_web = require("@hanzogui/web");
var createGluspFont = function () {
  var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return (0, import_web.createFont)({
    family: "Glusp",
    size,
    lineHeight: Object.fromEntries(Object.entries(font.size || size).map(function (param) {
      var [k, v] = param;
      return [k, typeof v === "number" ? v * 1.2 + 6 : v];
    })),
    weight: {
      4: "400"
    },
    ...font
  });
};
var size = {
  1: 3 * 11,
  2: 3 * 12,
  3: 3 * 13,
  4: 3 * 14,
  5: 3 * 15,
  6: 3 * 16,
  7: 3 * 18,
  8: 3 * 21,
  9: 3 * 28,
  10: 3 * 42,
  11: 3 * 52,
  12: 3 * 62,
  13: 3 * 72,
  14: 3 * 92,
  15: 3 * 114,
  16: 3 * 124
};
//# sourceMappingURL=index.native.js.map
