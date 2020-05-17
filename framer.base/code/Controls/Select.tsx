import * as React from "react"
import { Select as BaseSelect, SelectProps, themes, mapKeys } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    patternControls,
    themeControls,
    resizeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<SelectProps> &
    Partial<{
        options: string[]
        theme: string
        themeContext: any
        resize: string
    }>

const defaultProps: Props = {
    width: 240,
    height: 50,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    disabled: false,
    resize: "none",
    value: "Select B",
    options: ["Select A", "Select B", "Select C"],
}

const InnerSelect: React.FC<Props> = props => {
    const {
        theme,
        options,
        resize,
        width,
        height,
        themeContext,
        ...rest
    } = props
    const childrenlessRest = mapKeys(rest, key => key !== "children")
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseSelect
            {...childrenlessRest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </BaseSelect>
    )
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = { ...defaultProps }

addPropertyControls(Select, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    ...patternControls(defaultProps.pattern),
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
    options: {
        type: ControlType.Array,
        title: "Options",
        defaultValue: defaultProps.options,
        propertyControl: {
            type: ControlType.String,
            placeholder: "Option…",
        },
    },
})
