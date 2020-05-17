import * as React from "react"
import {
    Card as BaseCard,
    CardProps,
    Heading,
    Intent,
    Text,
    Toggle,
    themes,
    parseColor,
} from "framer-base"
import { Frame, Stack, ControlType, addPropertyControls } from "framer"
import {
    intentControls,
    themeControls,
    iconControls,
} from "../propertyControls"
import { OmitTheme } from "../utils"
import { Image } from "../Miscellaneous/Image"
import withHOC from "../utils/withHOC"

type Props = OmitTheme<CardProps> &
    Partial<{
        theme: string
        themeContext: any
        intent: Intent
        image: string
        title: string
        body: string
        footer: string
        withToggle: boolean
        iconToggle: string
        toggle: string
        overlay: boolean
    }>

const defaultProps: Props = {
    theme: "light",
    intent: "primary",
    image: "",
    overlay: false,
    title: "",
    body: "",
    footer: "",
    toggle: "",
    withToggle: false,
    iconToggle: "Heart",
    shadow: 2,
}

const InnerCard: React.FC<Props> = props => {
    const {
        width,
        height,
        color,
        image,
        overlay,
        title,
        body,
        footer,
        theme,
        themeContext,
        intent,
        toggle,
        withToggle,
        iconToggle,
        ...rest
    } = props
    const dynamicToggle = withToggle ? iconToggle : toggle
    const dynamicTheme = themeContext || themes[theme]
    const toggleComponent = (intent: Intent) =>
        dynamicToggle && (
            <Toggle
                color={image && parseColor(dynamicTheme.color.white)}
                icon={dynamicToggle}
                intent={intent}
                style={{
                    position: "absolute",
                    top: "var(--card-padding)",
                    right: "var(--card-padding)",
                }}
                theme={dynamicTheme}
            />
        )

    return (
        <BaseCard
            color={color}
            height={height}
            width={width}
            {...rest}
            padding={false}
            theme={dynamicTheme}
        >
            <Stack
                background="transparent"
                direction="vertical"
                gap={0}
                size="100%"
            >
                {image && (
                    <Frame
                        background="transparent"
                        height="1fr"
                        overflow="hidden"
                        width="1fr"
                    >
                        <Image
                            image={image}
                            intent={intent}
                            overlay={overlay}
                        />
                        {toggleComponent("text")}
                    </Frame>
                )}
                {(title || body || ((withToggle || toggle) && !image)) && (
                    <Frame
                        background="transparent"
                        height="auto"
                        style={{
                            padding: "var(--card-padding)",
                        }}
                        width="100%"
                    >
                        {title && (
                            <Heading
                                color={color}
                                level={4}
                                style={{
                                    marginBottom:
                                        (body || footer) &&
                                        "calc(var(--card-padding) / 2)",
                                }}
                                theme={themeContext || themes[theme]}
                            >
                                {title}
                            </Heading>
                        )}
                        {body && (
                            <Text
                                color={color}
                                theme={themeContext || themes[theme]}
                            >
                                {body}
                            </Text>
                        )}
                        {footer && (
                            <Text
                                color={color}
                                small
                                style={{
                                    opacity: 0.5,
                                    marginTop:
                                        (body || title) &&
                                        "calc(var(--card-padding) / 2)",
                                }}
                                theme={themeContext || themes[theme]}
                            >
                                {footer}
                            </Text>
                        )}
                        {!image && toggleComponent(intent)}
                    </Frame>
                )}
            </Stack>
        </BaseCard>
    )
}

export const Card = withHOC(InnerCard)

Card.defaultProps = { ...defaultProps }

addPropertyControls(Card, {
    ...themeControls(defaultProps.theme),
    ...intentControls(defaultProps.intent),
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
    withToggle: {
        type: ControlType.Boolean,
        title: "Toggle",
        defaultValue: false,
        enabledTitle: "Icon",
        disabledTitle: "None",
    },
    ...iconControls(defaultProps.iconToggle, false, "withToggle", "iconToggle"),
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: defaultProps.title,
    },
    body: {
        type: ControlType.String,
        title: "Body",
        defaultValue: defaultProps.body,
    },
    footer: {
        type: ControlType.String,
        title: "Footer",
        defaultValue: defaultProps.footer,
    },
    shadow: {
        type: ControlType.Number,
        title: "Shadow",
        defaultValue: defaultProps.shadow,
        min: 0,
        max: 4,
        displayStepper: true,
    },
})
