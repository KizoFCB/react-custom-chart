var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./chart.css";
var getDataPercentages = function (data, dataKey, customColors) {
    var totalCount = 0;
    data === null || data === void 0 ? void 0 : data.map(function (record) {
        totalCount +=
            typeof record[dataKey] !== "number"
                ? Number.parseInt(record[dataKey], 10)
                : record[dataKey];
    });
    return data === null || data === void 0 ? void 0 : data.map(function (record) { return (__assign(__assign({}, record), { color: customColors
            ? record === null || record === void 0 ? void 0 : record.color
            : "#".concat(Math.floor(Math.random() * 16777215).toString(16)), percentage: ((typeof record[dataKey] !== "number"
            ? Number.parseInt(record[dataKey], 10)
            : record[dataKey] / totalCount) * 100).toFixed(1) })); });
};
var CustomChart = function (_a) {
    var data = _a.data, dataKey = _a.dataKey, clipPath = _a.clipPath, _b = _a.labelKey, labelKey = _b === void 0 ? "name" : _b, _c = _a.customColors, customColors = _c === void 0 ? false : _c;
    var preparedData = getDataPercentages(data, dataKey, customColors);
    return (_jsxs("div", __assign({ className: "chartContainer" }, { children: [_jsx("div", { children: preparedData === null || preparedData === void 0 ? void 0 : preparedData.map(function (record) { return (_jsxs("div", __assign({ className: "labelWithValueContainer" }, { children: [_jsxs("div", __assign({ className: "labelContainer" }, { children: [_jsx("div", { style: { background: record === null || record === void 0 ? void 0 : record.color } }, void 0), _jsx("div", { children: record[labelKey] }, void 0)] }), void 0), "".concat(record === null || record === void 0 ? void 0 : record.percentage, "%")] }), record[labelKey])); }) }, void 0), _jsx("div", __assign({ className: "shapeContainer", style: { clipPath: "path('".concat(clipPath, "')") } }, { children: preparedData === null || preparedData === void 0 ? void 0 : preparedData.map(function (record) { return (_jsx("div", { style: {
                        height: "".concat(record === null || record === void 0 ? void 0 : record.percentage, "%"),
                        background: record === null || record === void 0 ? void 0 : record.color,
                    } }, record[labelKey])); }) }), void 0)] }), void 0));
};
export default CustomChart;
