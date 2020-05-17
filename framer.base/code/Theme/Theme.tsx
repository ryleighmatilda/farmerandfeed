import * as React from "react"
import { themes, capitalize } from "framer-base"
import { Frame, ControlType, RenderTarget, addPropertyControls } from "framer"
import { useMutationObserver } from "../hooks"
import { placeholderState } from "../utils"
import { ThemeProvider } from "styled-components"

interface Props {
    width?: number
    height?: number
    children?: any
    background?: string
    theme: string
    customTheme?: string | object
}

const defaults: Props = {
    theme: "light",
    background: "background",
}

const colors = Object.keys(themes.light.color)
const defaultThemeOptions = Object.keys(themes)
const themeOptions = ["automatic", "custom", ...defaultThemeOptions]

export function Theme(props: Props = defaults) {
    const { children, background, customTheme, theme } = props
    const [customThemeContent, setCustomThemeContent] = React.useState(
        typeof customTheme === "object" ? customTheme : null
    )
    const automaticTheme =
        useMutationObserver(
            document.body,
            {
                attributes: true,
                attributeFilter: ["class"],
            },
            ([mutation]) => mutation.target.className
        ) || defaults.theme

    React.useEffect(() => {
        typeof customTheme === "string" &&
            fetch(customTheme)
                .then(response => response.json())
                .then(json => setCustomThemeContent(json))
    }, [customTheme])

    const selectedTheme =
        theme === "custom" && customThemeContent
            ? customThemeContent
            : themes[
                  defaultThemeOptions.indexOf(theme) >= 0
                      ? theme
                      : automaticTheme
              ]
    const [child] = children

    return !child &&
        (RenderTarget.current() === RenderTarget.canvas ||
            RenderTarget.current() === RenderTarget.thumbnail) ? (
        React.createElement(placeholderState, {
            theme: themes.light,
            title: "No content",
            label: "Add content by connecting it on the Canvas",
        })
    ) : (
        <ThemeProvider theme={selectedTheme}>
            {child && (
                <Frame
                    background={
                        selectedTheme.color[background] || "transparent"
                    }
                    size="100%"
                >
                    {React.isValidElement(child) &&
                        React.cloneElement(child, {
                            width: "100%",
                            height: "100%",
                        })}
                </Frame>
            )}
        </ThemeProvider>
    )
}

Theme.defaultProps = {
    ...defaults,
}

addPropertyControls(Theme, {
    theme: {
        type: ControlType.Enum,
        title: "Theme",
        defaultValue: defaults.theme,
        options: themeOptions,
        optionTitles: themeOptions.map(themeOption => capitalize(themeOption)),
    },
    customTheme: {
        type: ControlType.File,
        title: " ",
        allowedFileTypes: ["json"],
        hidden: ({ theme }) => theme !== "custom",
    },
    background: {
        type: ControlType.Enum,
        title: "Background",
        defaultValue: defaults.background,
        options: colors,
        optionTitles: colors.map(
            color => color.charAt(0).toUpperCase() + color.slice(1)
        ),
    },
    children: {
        type: ControlType.ComponentInstance,
        title: "Content",
    },
})
