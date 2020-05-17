import * as React from "react"
import { Spinner as BaseSpinner, SpinnerProps, themes } from "framer-base"
import { intentControls, themeControls } from "../propertyControls"
import { ControlType, addPropertyControls, RenderTarget } from "framer"
import { OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<SpinnerProps> &
    Partial<{
        theme: string
        themeContext: any
        canvasSize: boolean
        intent: string
        width: number
        height: number
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    canvasSize: true,
    size: 24,
    width: 24,
    height: 24,
}

const InnerSpinner: React.FC<Props> = props => {
    const {
        theme,
        themeContext,
        canvasSize,
        width,
        height,
        size,
        ...rest
    } = props

    return (
        <BaseSpinner
            animate={RenderTarget.current() !== RenderTarget.thumbnail}
            {...rest}
            size={canvasSize ? Math.min(width, height) : size}
            theme={themeContext || themes[theme]}
        />
    )
}

export const Spinner = withHOC(InnerSpinner)

Spinner.defaultProps = {
    ...defaultProps,
    height: defaultProps.size,
    width: defaultProps.size,
}

addPropertyControls(Spinner, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
    canvasSize: {
        type: ControlType.Boolean,
        title: "Size",
        defaultValue: defaultProps.canvasSize,
        enabledTitle: "Canvas",
        disabledTitle: "Manual",
    },
    size: {
        type: ControlType.Number,
        title: " ",
        defaultValue: defaultProps.size,
        min: 0,
        hidden: (props: Props) => props.canvasSize,
    },
})
