import * as React from "react"
import {
    RadioGroup as BaseRadioGroup,
    RadioGroupProps,
    themes,
} from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { resizeControls, themeControls } from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<RadioGroupProps> &
    Partial<{
        theme: string
        themeContext: any
        resize: string
    }>

const defaultProps: Props = {
    theme: "light",
    disabled: false,
    resize: "both",
    value: "Radio A",
    values: ["Radio A", "Radio B", "Radio C"],
}

const InnerRadioGroup: React.FC<Props> = props => {
    const { width, height, resize, theme, themeContext, ...rest } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseRadioGroup
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        />
    )
}

export const RadioGroup = withHOC(InnerRadioGroup)

RadioGroup.defaultProps = { ...defaultProps }

addPropertyControls(RadioGroup, {
    ...themeControls(defaultProps.theme),
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    ...resizeControls(defaultProps.resize),
    value: {
        type: ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    },
    values: {
        type: ControlType.Array,
        title: "Values",
        defaultValue: defaultProps.values,
        propertyControl: {
            type: ControlType.String,
            placeholder: "Option…",
        },
    },
})
