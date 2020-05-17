import * as React from "react"
import { themes } from "framer-base"
import { placeholderState } from "../utils"
import { breakpointControls } from "../propertyControls"
import { Frame, addPropertyControls, RenderTarget } from "framer"

const breakpoints = {
    names: Object.keys(themes.light.breakpoint),
    values: Object.keys(themes.light.breakpoint).map(key =>
        parseInt(themes.light.breakpoint[key])
    ),
}

interface Props {
    width?: number
    height?: number
    theme?: string
}

const defaults: Props = {
    theme: "light",
}

export function Breakpoint(props: Props) {
    const { width, theme } = props
    const smallerBreakpoints = breakpoints.values.filter((breakpoint, index) =>
        !index ? true : breakpoint < width
    )
    const layouts = breakpoints.names
        .filter(
            (_, index) =>
                smallerBreakpoints.indexOf(breakpoints.values[index]) >= 0
        )
        .map(breakpoint => props[breakpoint][0])
        .filter(layout => layout)

    const layout = layouts.length ? layouts[layouts.length - 1] : <></>

    if (
        layouts.length === 0 &&
        (RenderTarget.current() === RenderTarget.canvas ||
            RenderTarget.current() === RenderTarget.thumbnail)
    ) {
        return React.createElement(placeholderState, {
            theme: themes[theme] || themes.light,
            title: "No breakpoints",
            label: "Add breakpoints by connecting them on the Canvas",
        })
    }

    return (
        <Frame background="transparent" size="100%">
            {React.isValidElement(layout) &&
                React.cloneElement(layout, {
                    width: "100%",
                    height: "100%",
                })}
        </Frame>
    )
}

Breakpoint.defaultProps = {
    ...defaults,
}

addPropertyControls(Breakpoint, {
    ...breakpointControls(breakpoints),
})
