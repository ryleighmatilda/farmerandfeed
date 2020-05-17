import * as React from "react"
import { Radio as BaseRadio, RadioProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { intentControls, themeControls } from "../propertyControls"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<RadioProps> &
    Partial<{
        theme: string
        themeContext: any
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    disabled: false,
    label: "Radio",
    checked: false,
}

const InnerRadio: React.FC<Props> = props => {
    const { theme, themeContext, ...rest } = props

    return <BaseRadio theme={themeContext || themes[theme]} {...rest} />
}

export const Radio = withHOC(InnerRadio)

Radio.defaultProps = { ...defaultProps }

addPropertyControls(Radio, {
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
