import * as React from "react"
import { Slider as BaseSlider, SliderProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    themeControls,
    resizeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<SliderProps> &
    Partial<{
        theme: string
        themeContext: any
        resize: string
        value: number
        min: number
        max: number
        step: number
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    disabled: false,
    value: 50,
    step: 1,
    min: 0,
    max: 100,
    resize: "none",
}

const InnerSlider: React.FC<Props> = props => {
    const { theme, resize, width, height, themeContext, ...rest } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseSlider
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        />
    )
}

export const Slider = withHOC(InnerSlider)

Slider.defaultProps = { ...defaultProps }

addPropertyControls(Slider, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: defaultProps.disabled,
    },
    ...resizeControls(defaultProps.resize),
    value: {
        type: ControlType.Number,
        title: "Value",
        min: defaultProps.min,
        max: defaultProps.max,
        step: defaultProps.step,
        defaultValue: defaultProps.value,
    },
})
