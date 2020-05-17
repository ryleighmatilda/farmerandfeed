import * as React from "react"
import { Heading as BaseHeading, HeadingProps, themes } from "framer-base"
import { ControlType, addPropertyControls } from "framer"
import { themeControls } from "../propertyControls"
import { resizeLayout, OmitTheme } from "../utils"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<HeadingProps> &
    Partial<{
        theme: string
        themeContext: any
        text: string | any
        resize: string
    }>

const defaults: Props = {
    theme: "light",
    text: "Heading",
    level: 2,
    resize: "none",
}

const InnerHeading: React.FC<Props> = props => {
    const {
        width,
        height,
        level,
        resize,
        text,
        theme,
        themeContext,
        ...rest
    } = props
    const resizeDimensions = resizeLayout(resize, width, height)

    return (
        <BaseHeading
            {...rest}
            level={Number(level) as 1 | 2 | 3 | 4 | 5 | 6}
            theme={themeContext || themes[theme]}
            {...resizeDimensions}
        >
            {text}
        </BaseHeading>
    )
}

export const Heading = withHOC(InnerHeading)

Heading.defaultProps = {
    ...defaults,
}

addPropertyControls(Heading, {
    ...themeControls(defaults.theme),
    level: {
        type: ControlType.Enum,
        title: "Level",
        defaultValue: "2",
        options: ["1", "2", "3", "4", "5", "6"],
        optionTitles: ["H1", "H2", "H3", "H4", "H5", "H6"],
    },
    align: {
        type: ControlType.Enum,
        title: "Align",
        defaultValue: "left",
        options: ["left", "center", "right", "justify"],
        optionTitles: ["Left", "Center", "Right", "Justify"],
    },
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: defaults.text,
    },
})
