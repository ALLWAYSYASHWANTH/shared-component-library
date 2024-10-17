var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
export const Button = (props) => {
    const { children, backgroundColor, color, style, onButtonClick } = props, rest = __rest(props, ["children", "backgroundColor", "color", "style", "onButtonClick"]);
    let _style = style || {};
    /** Override Defaults */
    if (backgroundColor && _style)
        _style.backgroundColor = backgroundColor;
    if (color && _style)
        _style.color = color;
    const handleClick = (event) => {
        console.log('Button clicked inside Shared Component!', process.env.REACT_APP_RESPONSE_FROM);
        // Call the prop function (if provided) when the button is clicked
        if (onButtonClick) {
            onButtonClick(event);
        }
    };
    return (React.createElement("button", Object.assign({ style: _style, onClick: handleClick }, rest), children));
};
//# sourceMappingURL=Button.js.map