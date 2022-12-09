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
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState, } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
export var Modal = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, onClose = _a.onClose, isOpen = _a.isOpen;
    var _c = useState(false), isClosing = _c[0], setIsClosing = _c[1];
    var timerRef = useRef();
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, 200);
        }
    }, [onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_b = {},
        _b[cls.opened] = isOpen,
        _b[cls.isClosing] = isClosing,
        _b);
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ className: cls.overlay, onClick: closeHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children })) })) })) }));
};
