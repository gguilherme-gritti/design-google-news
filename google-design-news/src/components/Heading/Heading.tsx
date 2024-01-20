"use client"

import React, { memo } from "react";
import { StyleSheet } from "@/common/styles/stylesheet";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { getVariant } from "./StyledFunctions";
import { useTheme } from "styled-components";
import { TTheme } from "@/common/styles/theme/theme";

export type THeadingVariant = 'sm';
export type THeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IHeadingProps {
    variant: THeadingVariant,
    tag?: THeadingTag,
    ref: any;
    styleSheet?: StyleSheet
    children: React.ReactNode
}

const Heading = React.forwardRef(({
    variant,
    tag,
    styleSheet,
    children,
    ...props
}: IHeadingProps, ref) => {

    const theme = useTheme() as unknown as TTheme;
    const sVariant = getVariant(theme, variant);

    const sxProps = {
        sVariant,
        ...styleSheet
    };

    console.log('sx', sxProps);

    return (
        <BaseComponent as={tag} {...props} ref={ref} styleSheet={styleSheet}>{children}</BaseComponent>
    )
})

Heading.displayName = 'Heading';

Heading.defaultProps = {
    variant: 'sm',
    tag: 'h1',
}

export default memo(Heading);