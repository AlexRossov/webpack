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
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'text',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};
export var OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
};
export var BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};
export var SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export var SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
