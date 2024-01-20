"use client";

import React from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import * as S from './styles';

interface IBaseComponentProps {
    styleSheet?: StyleSheet;
    [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, IBaseComponentProps>((props, ref) => {
    return (
        <S.StyledBaseComponent ref={ref} {...props} />
    )
});

BaseComponent.displayName = 'BaseComponent';
BaseComponent.defaultProps = {
    styleSheet: {}
}

