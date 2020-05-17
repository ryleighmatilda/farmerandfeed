import * as React from "react"
import { Progress as BaseProgress, ProgressProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    themeControls,
    resizeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<ProgressProps> &
    Partial<{
        theme: string
        themeContext: any
        value: number
        resize: string
    }>

const defaultProps: Props = {
    width: 320,
    height: 6,
    theme: "light",
    intent: "primary",
    value: 50,
    max: 100,
    resize: "none",
}

const InnerProgress: React.FC<Props> = props => {
    const {
        theme,
        themeContext,
        value,
        max,
        resize,
        width,
        height,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseProgress
            {...rest}
            max={Number(max)}
            theme={themeContext || themes[theme]}
            value={Number(value)}
            {...resizeDimensions}
        />
    )
}

export const Progress = withHOC(InnerProgress)

Progress.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Progress, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    value: {
        type: ControlType.Number,
        title: "Value",
        min: 0,
        max: defaultProps.max,
        defaultValue: defaultProps.value,
    },
    ...resizeControls(defaultProps.resize),
})
