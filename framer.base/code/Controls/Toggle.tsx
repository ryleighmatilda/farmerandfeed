import * as React from "react"
import { Toggle as BaseToggle, ToggleProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    themeControls,
    iconControls,
} from "../propertyControls"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<ToggleProps> &
    Partial<{
        theme: string
        themeContext: any
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    disabled: false,
    icon: "Heart",
    checked: false,
}

const InnerToggle: React.FC<Props> = props => {
    const { theme, themeContext, ...rest } = props

    return <BaseToggle theme={themeContext || themes[theme]} {...rest} />
}

export const Toggle = withHOC(InnerToggle)

Toggle.defaultProps = { ...defaultProps }

addPropertyControls(Toggle, {
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
    ...iconControls(defaultProps.icon),
})
