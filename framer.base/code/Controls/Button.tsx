import * as React from "react"
import { Button as BaseButton, ButtonProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    decoratorControls,
    resizeControls,
    patternControls,
    themeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<ButtonProps> &
    Partial<{
        theme: string
        text: string | any
        resize: string
        center: boolean
        withStartDecorator: boolean
        withEndDecorator: boolean
        iconStartDecorator: string
        iconEndDecorator: string
        themeContext: AnimationPlaybackEventInit
    }>

const defaultProps: Props = {
    width: 180,
    height: 50,
    theme: "light",
    text: "Button",
    intent: "primary",
    pattern: "primary",
    disabled: false,
    loading: false,
    resize: "none",
    center: true,
}

const InnerButton: React.FC<Props> = props => {
    const {
        width,
        height,
        resize,
        text,
        withStartDecorator,
        iconStartDecorator,
        withEndDecorator,
        iconEndDecorator,
        center,
        theme,
        themeContext,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseButton
            endDecorator={withEndDecorator && iconEndDecorator}
            startDecorator={withStartDecorator && iconStartDecorator}
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {text}
        </BaseButton>
    )
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Button, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    ...patternControls(defaultProps.pattern),
    ...resizeControls(defaultProps.resize),
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    loading: {
        type: ControlType.Boolean,
        title: "Loading",
        defaultValue: defaultProps.loading,
    },
    ...decoratorControls("ExternalLink"),
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    },
})
