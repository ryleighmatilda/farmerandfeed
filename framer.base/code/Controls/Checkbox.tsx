import * as React from "react"
import { Checkbox as BaseCheckbox, CheckboxProps, themes } from "framer-base"
import { ThemeContext } from "styled-components"
import { ControlType, addPropertyControls } from "framer"
import { intentControls, themeControls } from "../propertyControls"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<CheckboxProps> &
    Partial<{
        theme: string
        label: string
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Checkbox",
    checked: false,
}

const InnerCheckbox: React.FC<Props> = props => {
    const themeContext = React.useContext(ThemeContext)
    const { theme, ...rest } = props

    return <BaseCheckbox theme={themeContext || themes[theme]} {...rest} />
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = { ...defaultProps }

addPropertyControls(Checkbox, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    checked: {
        type: ControlType.Boolean,
        title: "Checked",
        defaultValue: defaultProps.checked,
    },
    label: {
        type: ControlType.String,
        title: "Label",
        defaultValue: defaultProps.label,
    },
})
