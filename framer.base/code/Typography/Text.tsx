import * as React from "react"
import { Text as BaseText, TextProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { themeControls } from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<TextProps> &
    Partial<{
        theme: string
        themeContext: any
        text: string | any
        resize: string
    }>

const defaultProps: Props = {
    theme: "light",
    text: "Text",
    small: false,
    code: false,
    resize: "none",
}

const InnerText: React.FC<Props> = props => {
    const { width, height, resize, text, theme, themeContext, ...rest } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseText
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {text}
        </BaseText>
    )
}

export const Text = withHOC(InnerText)

Text.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Text, {
    ...themeControls(defaultProps.theme),
    small: {
        type: ControlType.Boolean,
        title: "Small",
        defaultValue: defaultProps.small,
    },
    code: {
        type: ControlType.Boolean,
        title: "Font",
        defaultValue: defaultProps.code,
        disabledTitle: "Sans",
        enabledTitle: "Mono",
    },
    align: {
        type: ControlType.Enum,
        title: "Align",
        defaultValue: "left",
        options: ["left", "center", "right", "justify"],
        optionTitles: ["Left", "Center", "Right", "Justify"],
    },
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    },
})
