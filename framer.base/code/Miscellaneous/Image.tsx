import * as React from "react"
import { ThemeContext } from "styled-components"
import { themes } from "framer-base"
import { intentControls, themeControls } from "../propertyControls"
import { placeholderState } from "../utils"
import {
    Frame,
    FrameProps,
    addPropertyControls,
    ControlType,
    RenderTarget,
} from "framer"
import withHOC from "../utils/withHOC"

type Props = Partial<
    FrameProps & {
        theme: string
        themeContext: any
        intent: string
        image: string
        overlay: boolean
        color: string
    }
>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    overlay: false,
    center: false,
}

const InnerImage: React.FC<Props> = props => {
    const {
        theme,
        themeContext,
        intent,
        image,
        overlay,
        color,
        ...rest
    } = props
    const dynamicTheme = themeContext || themes[theme]

    return (
        <Frame background="transparent" size="100%" {...rest}>
            {!image &&
            (RenderTarget.current() === RenderTarget.canvas ||
                RenderTarget.current() === RenderTarget.thumbnail) ? (
                React.createElement(placeholderState, {
                    theme: dynamicTheme,
                    title: "No image",
                    label: "Choose an image in the Properties panel",
                })
            ) : (
                <>
                    <Frame
                        image={image}
                        size="100%"
                        style={{
                            backgroundColor: "transparent",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            WebkitFilter:
                                overlay && "contrast(77%) grayscale(100%)",
                        }}
                    />
                    {overlay && (
                        <Frame
                            background={color || dynamicTheme.color[intent]}
                            opacity={0.5}
                            size="100%"
                            style={{
                                mixBlendMode: "overlay",
                            }}
                        />
                    )}
                </>
            )}
        </Frame>
    )
}

export const Image = withHOC(InnerImage)

Image.defaultProps = {
    ...defaultProps,
}

addPropertyControls(Image, {
    ...themeControls(defaultProps.theme, true, "overlay"),
    ...intentControls(defaultProps.intent, true, "overlay"),
    image: {
        type: ControlType.Image,
        title: "Image",
    },
    overlay: {
        type: ControlType.Boolean,
        title: "Overlay",
        enabledTitle: "Visible",
        disabledTitle: "Hidden",
        defaultValue: defaultProps.overlay,
    },
})
