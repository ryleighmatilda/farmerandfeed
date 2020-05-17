import * as React from "react"
import { TextArea as BaseTextArea, TextAreaProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    themeControls,
    resizeControls,
    patternControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<TextAreaProps> &
    Partial<{
        theme: string
        themeContext: any
        resize: string
        resizable: string
    }>

const defaultProps: Props = {
    width: 240,
    height: 100,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    value: "",
    placeholder: "TextArea",
    resize: "none",
    disabled: false,
    resizable: "none",
}

const InnerTextArea: React.FC<Props> = props => {
    const { theme, themeContext, resize, width, height, ...rest } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseTextArea
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        />
    )
}

export const TextArea = withHOC(InnerTextArea)

TextArea.defaultProps = { ...defaultProps }

addPropertyControls(TextArea, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    ...patternControls(defaultProps.pattern),
    ...resizeControls(defaultProps.resize),
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    resizable: {
        type: ControlType.Enum,
        title: "Resizable",
        defaultValue: defaultProps.resizable,
        options: ["none", "vertical", "horizontal", "both"],
        optionTitles: ["None", "Vertical", "Horizontal", "Both"],
    },
    value: {
        type: ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    },
    placeholder: {
        type: ControlType.String,
        title: "Placeholder",
        defaultValue: defaultProps.placeholder,
    },
})
