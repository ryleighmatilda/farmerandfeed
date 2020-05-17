import * as React from "react"
import { Tooltip as BaseTooltip, TooltipProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { intentControls, themeControls } from "../propertyControls"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<TooltipProps> &
    Partial<{
        theme: string
        themeContext: any
        text: string
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    text: "Tooltip",
    tooltip: "Tooltip",
    direction: "top",
}

const InnerTooltip: React.FC<Props> = props => {
    const { text, theme, themeContext, ...rest } = props

    return (
        <BaseTooltip theme={themeContext || themes[theme]} {...rest}>
            {text}
        </BaseTooltip>
    )
}

export const Tooltip = withHOC(InnerTooltip)

Tooltip.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Tooltip, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    direction: {
        type: ControlType.SegmentedEnum,
        title: "Direction",
        defaultValue: defaultProps.direction,
        options: ["top", "right", "bottom", "left"],
        optionTitles: ["↑", "→", "↓", "←"],
    },
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: defaultProps.text,
    },
    tooltip: {
        type: ControlType.String,
        title: "Tooltip",
        defaultValue: defaultProps.tooltip,
    },
})
