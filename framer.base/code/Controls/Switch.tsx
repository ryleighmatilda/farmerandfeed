import * as React from "react"
import { Switch as BaseSwitch, SwitchProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { intentControls, themeControls } from "../propertyControls"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<SwitchProps> &
    Partial<{
        theme: string
        themeContext: any
        label: string
        willChangeTransform: any
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Switch",
    checked: false,
}

const InnerSwitch: React.FC<Props> = props => {
    const { theme, themeContext, willChangeTransform, ...rest } = props

    return <BaseSwitch theme={themeContext || themes[theme]} {...rest} />
}

export const Switch = withHOC(InnerSwitch)

Switch.defaultProps = { ...defaultProps }

addPropertyControls(Switch, {
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
