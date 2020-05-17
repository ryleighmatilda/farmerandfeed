import * as React from "react"
import {
    ButtonGroup as BaseButtonGroup,
    ButtonGroupProps,
    themes,
} from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import {
    resizeControls,
    patternControls,
    themeControls,
} from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<ButtonGroupProps> &
    Partial<{
        theme: string
        resize: string
        themeContext: any
        center: boolean
    }>

const defaultProps: Props = {
    width: 520,
    height: 50,
    theme: "light",
    pattern: "primary",
    segmented: false,
    resize: "none",
    center: true,
}

const InnerButtonGroup: React.FC<Props> = props => {
    const {
        children,
        width,
        height,
        resize,
        theme,
        themeContext,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)
    return (
        <BaseButtonGroup
            {...rest}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {React.Children.map(children, child => {
                const [button] = React.Children.toArray(child.props.children)
                if (button && React.isValidElement(button)) {
                    return React.cloneElement(button, {
                        // @ts-ignore
                        center: false,
                        style: { flex: 1 },
                    })
                } else {
                    return
                }
            })}
        </BaseButtonGroup>
    )
}

export const ButtonGroup = withHOC(InnerButtonGroup)

ButtonGroup.defaultProps = { ...defaultProps }

addPropertyControls(ButtonGroup, {
    ...themeControls(defaultProps.theme),
    ...patternControls(defaultProps.pattern),
    ...resizeControls(defaultProps.resize),
    segmented: {
        type: ControlType.Boolean,
        title: "Segmented",
        defaultValue: defaultProps.segmented,
    },
    children: {
        type: ControlType.Array,
        title: "Buttons",
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
})
