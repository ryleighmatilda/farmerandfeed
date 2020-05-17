import * as React from "react"
import { Label as BaseLabel, LabelProps, themes } from "framer-base"
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

type Props = OmitTheme<LabelProps> &
    Partial<{
        theme: string
        themeContext: any
        text: string | any
        resize: string
        withStartDecorator: boolean
        withEndDecorator: boolean
        iconStartDecorator: string
        iconEndDecorator: string
    }>

const defaultProps: Props = {
    width: 120,
    height: 30,
    theme: "light",
    text: "Label",
    intent: "primary",
    pattern: "primary",
    resize: "none",
}

const InnerLabel: React.FC<Props> = props => {
    const {
        width,
        height,
        resize,
        text,
        withStartDecorator,
        iconStartDecorator,
        withEndDecorator,
        iconEndDecorator,
        theme,
        themeContext,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseLabel
            endDecorator={withEndDecorator && iconEndDecorator}
            startDecorator={withStartDecorator && iconStartDecorator}
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {text}
        </BaseLabel>
    )
}

export const Label = withHOC(InnerLabel)

Label.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Label, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    ...patternControls(defaultProps.pattern),
    ...resizeControls(defaultProps.resize),
    ...decoratorControls("Globe"),
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    },
})
