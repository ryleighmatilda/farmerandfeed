import * as React from "react"
import { themes, Theme } from "framer-base"
import { themeControls } from "../propertyControls"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"
import withHOC from "../utils/withHOC"

type Props = Partial<
    Omit<FrameProps, "shadow" | "radius"> & {
        theme: string
        themeContext: any
        color: string
        shadow: number
        radius: number
        children: any
    }
>

const defaultProps: Props = {
    theme: "light",
    color: "background",
    shadow: 0,
    radius: 0,
    center: false,
}

const elevationShadow = (shadow: number, theme: Theme): string => {
    switch (shadow) {
        case 1:
            return `${theme.shadow.smaller}`
        case 2:
            return `${theme.shadow.small}, ${theme.shadow.medium}`
        case 3:
            return `${theme.shadow.medium}, ${theme.shadow.large}`
        case 4:
            return `${theme.shadow.large}, ${theme.shadow.larger}`
        default:
            return ""
    }
}

const colors = Object.keys(themes.light.color)

const InnerBase: React.FC<Props> = props => {
    const {
        theme,
        themeContext,
        color,
        shadow,
        radius,
        children,
        ...rest
    } = props
    const dynamicTheme = themeContext || themes[theme]
    const [child] = children

    return (
        <Frame
            {...rest}
            background={dynamicTheme.color[color] || dynamicTheme.color.white}
            radius={dynamicTheme.radius[radius] || 0}
            shadow={elevationShadow(shadow, dynamicTheme) || ""}
            size="100%"
        >
            {React.isValidElement(child) &&
                React.cloneElement(child, {
                    // @ts-ignore
                    width: "100%",
                    height: "100%",
                })}
        </Frame>
    )
}

export const Base = withHOC(InnerBase)

Base.defaultProps = { ...defaultProps }

addPropertyControls(Base, {
    ...themeControls(defaultProps.theme),
    color: {
        type: ControlType.Enum,
        title: "Color",
        defaultValue: "background",
        options: colors,
        optionTitles: colors.map(
            color => color.charAt(0).toUpperCase() + color.slice(1)
        ),
    },
    shadow: {
        type: ControlType.Number,
        title: "Shadow",
        defaultValue: defaultProps.shadow,
        min: 0,
        max: 4,
        displayStepper: true,
    },
    radius: {
        type: ControlType.Number,
        title: "Radius",
        min: 0,
        max: themes[defaultProps.theme].radius.length - 1,
        displayStepper: true,
    },
    children: {
        type: ControlType.ComponentInstance,
        title: "Content",
    },
})
