import * as React from "react"
import { Input as BaseInput, InputProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    patternControls,
    themeControls,
    decoratorControls,
    resizeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<InputProps> &
    Partial<{
        theme: string
        themeContext: any
        resize: string
        withStartDecorator: boolean
        withEndDecorator: boolean
        iconStartDecorator: boolean
        iconEndDecorator: boolean
    }>

const defaultProps: Props = {
    width: 240,
    height: 50,
    theme: "light",
    intent: "primary",
    pattern: "primary",
    type: "text",
    placeholder: "Input",
    value: "",
    disabled: false,
    resize: "none",
}

const InnerInput: React.FC<Props> = props => {
    const {
        theme,
        resize,
        width,
        height,
        withStartDecorator,
        iconStartDecorator,
        withEndDecorator,
        iconEndDecorator,
        themeContext,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseInput
            // @ts-ignore
            endDecorator={withEndDecorator && iconEndDecorator}
            // @ts-ignore
            startDecorator={withStartDecorator && iconStartDecorator}
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        />
    )
}

export const Input = withHOC(InnerInput)

Input.defaultProps = { ...defaultProps }

addPropertyControls(Input, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    ...patternControls(defaultProps.pattern),
    ...resizeControls(defaultProps.resize),
    type: {
        type: ControlType.Enum,
        title: "Type",
        defaultValue: defaultProps.type,
        options: [
            "date",
            "email",
            "number",
            "password",
            "search",
            "tel",
            "text",
            "time",
            "url",
            "week",
        ],
        optionTitles: [
            "Date",
            "Email",
            "Number",
            "Password",
            "Phone",
            "Search",
            "Text",
            "Time",
            "URL",
            "Week",
        ],
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    placeholder: {
        type: ControlType.String,
        title: "Placeholder",
        defaultValue: defaultProps.placeholder,
    },
    value: {
        type: ControlType.String,
        title: "Value",
        defaultValue: defaultProps.value,
    },
    ...decoratorControls("Search"),
})
