import * as React from "react"
import { Frame, FrameProps, Stack, addPropertyControls, ControlType, Color } from "framer"
import { colorFromToken } from "./lib/colorFromToken"
import { indentTitle } from "./lib/indentTitle"
import { fontStack, fontControls } from "./lib/constants"

/*
 ** RADIO BUTTONS
 */

export interface RadioProps extends Partial<FrameProps> {
    // Sizing properties
    height: number
    width: number

    // Item properties
    defaultItem: number
    items: string[]

    // Color properties
    activeColor: string
    circleColor: string
    textActiveColor: string
    inactiveColor: string
    textInactiveColor: string
    hoverColor: string
    textHoverColor: string
    variant: string

    // Size properties
    buttonSize: number
    fontSize: number
    textGapSize: number
    lineGapSize: number

    initialAnimation: boolean

    // Event properties
    onChange: (index) => {}
    onOption1Tap: () => void
    onOption2Tap: () => void
    onOption3Tap: () => void
    onOption4Tap: () => void
    onOption5Tap: () => void
    onOption6Tap: () => void
    onOption7Tap: () => void
    onOption8Tap: () => void
    onOption9Tap: () => void
    onOption10Tap: () => void

    // Font
    fontFamily?: string
    fontWeight: number
}

export function RadioButtons(props: RadioProps) {
    const {
        // Sizing properties
        height,
        width,

        // Item properties
        defaultItem,
        items,

        // Color properties
        activeColor,
        circleColor,
        textActiveColor,
        inactiveColor,
        textInactiveColor,
        hoverColor,
        textHoverColor,

        // Size properties
        buttonSize,
        fontSize,
        textGapSize,
        lineGapSize,

        initialAnimation,

        // Event properties
        onChange,
        onOption1Tap,
        onOption2Tap,
        onOption3Tap,
        onOption4Tap,
        onOption5Tap,
        onOption6Tap,
        onOption7Tap,
        onOption8Tap,
        onOption9Tap,
        onOption10Tap,

        fontFamily,
        fontWeight,
    } = props

    // Object with item data
    const allItems = [
        { text: items[0], defaultEvent: onChange, event: onOption1Tap },
        { text: items[1], defaultEvent: onChange, event: onOption2Tap },
        { text: items[2], defaultEvent: onChange, event: onOption3Tap },
        { text: items[3], defaultEvent: onChange, event: onOption4Tap },
        { text: items[4], defaultEvent: onChange, event: onOption5Tap },
        { text: items[5], defaultEvent: onChange, event: onOption6Tap },
        { text: items[6], defaultEvent: onChange, event: onOption7Tap },
        { text: items[7], defaultEvent: onChange, event: onOption8Tap },
        { text: items[8], defaultEvent: onChange, event: onOption9Tap },
        { text: items[9], defaultEvent: onChange, event: onOption10Tap },
    ].slice(0, items.length)

    // Store selected item in a variable
    const [selected, updateSelected] = React.useState(defaultItem - 1)

    React.useEffect(() => {
        updateSelected(defaultItem - 1)
    }, [defaultItem])

    // Variants for animation
    const radioVariants = {
        active: {
            background: Color(colorFromToken(activeColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        inactive: {
            background: Color(colorFromToken(inactiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        hover: {
            background: Color(colorFromToken(hoverColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        tapping: {
            scale: 0.9,
            transition: { ease: "easeInOut", duration: 0.1 },
        },
    }

    const radioCircleVariants = {
        active: { scale: 1 },
        inactive: { scale: 0 },
    }

    const textVariants = {
        active: {
            color: Color(colorFromToken(textActiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        inactive: {
            color: Color(colorFromToken(textInactiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        hover: {
            color: Color(colorFromToken(textHoverColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
    }

    const fontStyle = {
        ...(fontFamily && { fontFamily }),
        fontWeight,
    }

    return (
        <Stack direction="vertical" alignment="start" distribution="start" width="auto" padding={10} gap={lineGapSize}>
            {allItems.map((item, index) => (
                <Stack
                    key={index}
                    direction="horizontal"
                    alignment="start"
                    distribution="start"
                    size="auto"
                    gap={textGapSize}
                    initial={
                        initialAnimation && selected === index ? (selected === index ? "inactive" : "active") : false
                    }
                    animate={selected === index ? "active" : "inactive"}
                    whileHover={selected === index ? "active" : "hover"}
                    whileTap={"tapping"}
                    onTap={() => {
                        if (selected !== index) {
                            updateSelected(index)
                            if (item.event) item.event()
                            if (item.defaultEvent) item.defaultEvent(index)
                        }
                    }}
                >
                    <Stack
                        direction="vertical"
                        alignment="center"
                        distribution="center"
                        width={buttonSize}
                        height={fontSize * 1.2 > buttonSize ? fontSize * 1.2 : buttonSize}
                        background=""
                    >
                        <Stack
                            direction="vertical"
                            alignment="center"
                            distribution="center"
                            size={buttonSize}
                            radius="50%"
                            variants={radioVariants}
                        >
                            <Frame
                                size={Math.floor(buttonSize * 0.4)}
                                radius="50%"
                                background={circleColor}
                                variants={radioCircleVariants}
                            />
                        </Stack>
                    </Stack>
                    <Frame
                        height="auto"
                        width="auto"
                        background=""
                        variants={textVariants}
                        style={{
                            overflowWrap: "break-word",
                            lineHeight: 1.2,
                            display: "-webkit-box",
                            textAlign: "left",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            whiteSpace: "pre-wrap",
                            fontSize: fontSize,
                            fontFamily: fontStack,
                            ...fontStyle,
                        }}
                    >
                        {item.text}
                    </Frame>
                </Stack>
            ))}
        </Stack>
    )
}

RadioButtons.defaultProps = {
    height: 102,
    width: 120,
    defaultItem: 1,
    items: ["Option 01", "Option 02", "Option 03"],
    variant: "active",
    activeColor: "#09F",
    circleColor: "#FFF",
    textActiveColor: "#666",
    inactiveColor: "#CCC",
    textInactiveColor: "#BBB",
    hoverColor: "#BBB",
    textHoverColor: "#BBB",
    buttonSize: 16,
    fontSize: 16,
    fontWeight: 600,
    textGapSize: 8,
    lineGapSize: 12,
    initialAnimation: false,
}

addPropertyControls(RadioButtons, {
    // Default Item Property Controls
    defaultItem: {
        type: ControlType.Number,
        title: "Default",
        defaultValue: RadioButtons.defaultProps.defaultItem,
        displayStepper: true,
        step: 1,
        min: 0,
        max: 5,
    },

    // Design Variant Property Controls
    variant: {
        type: ControlType.Enum,
        title: "Variants",
        defaultValue: RadioButtons.defaultProps.variant,
        options: ["active", "inactive", "hover"],
        optionTitles: ["Active", "Inactive", "Hover"],
    },
    activeColor: {
        type: ControlType.Color,
        title: indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.activeColor,
        hidden: ({ variant }) => variant !== "active",
    },
    circleColor: {
        type: ControlType.Color,
        title: indentTitle("Circle"),
        defaultValue: RadioButtons.defaultProps.circleColor,
        hidden: ({ variant }) => variant !== "active",
    },
    textActiveColor: {
        type: ControlType.Color,
        title: indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textActiveColor,
        hidden: ({ variant }) => variant !== "active",
    },
    inactiveColor: {
        type: ControlType.Color,
        title: indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.inactiveColor,
        hidden: ({ variant }) => variant !== "inactive",
    },
    textInactiveColor: {
        type: ControlType.Color,
        title: indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textInactiveColor,
        hidden: ({ variant }) => variant !== "inactive",
    },
    hoverColor: {
        type: ControlType.Color,
        title: indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.hoverColor,
        hidden: ({ variant }) => variant !== "hover",
    },
    textHoverColor: {
        type: ControlType.Color,
        title: indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textHoverColor,
        hidden: ({ variant }) => variant !== "hover",
    },

    // Button Size Property Controls
    buttonSize: {
        type: ControlType.Number,
        title: "Button Size",
        min: 16,
        max: 44,
        step: 1,
        defaultValue: RadioButtons.defaultProps.buttonSize,
    },

    // Text Size Property Controls
    fontSize: {
        type: ControlType.Number,
        title: "Font Size",
        min: 10,
        max: 44,
        step: 1,
        defaultValue: RadioButtons.defaultProps.fontSize,
    },

    // Gap Size Property Controls
    textGapSize: {
        type: ControlType.Number,
        title: "Text Gap",
        min: 2,
        max: 20,
        step: 1,
        defaultValue: RadioButtons.defaultProps.textGapSize,
    },
    lineGapSize: {
        type: ControlType.Number,
        title: "Line Gap",
        min: 10,
        max: 200,
        step: 1,
        defaultValue: RadioButtons.defaultProps.lineGapSize,
    },
    ...fontControls,
    initialAnimation: {
        title: "On Load",
        type: ControlType.Boolean,
        enabledTitle: "Animate",
        disabledTitle: "Instant",
    },

    items: {
        type: ControlType.Array,
        title: "Items",
        maxCount: 10,
        defaultValue: RadioButtons.defaultProps.items,
        propertyControl: {
            type: ControlType.String,
            displayTextArea: true,
            defaultValue: "Option Title",
        },
    },

    // Event Property Controls
    onChange: {
        title: "On Change",
        type: ControlType.EventHandler,
    },
    onOption1Tap: {
        title: "Option 1 Tap",
        type: ControlType.EventHandler,
    },
    onOption2Tap: {
        title: "Option 2 Tap",
        type: ControlType.EventHandler,
    },
    onOption3Tap: {
        title: "Option 3 Tap",
        type: ControlType.EventHandler,
    },
    onOption4Tap: {
        title: "Option 4 Tap",
        type: ControlType.EventHandler,
    },
    onOption5Tap: {
        title: "Option 5 Tap",
        type: ControlType.EventHandler,
    },
    onOption6Tap: {
        title: "Option 6 Tap",
        type: ControlType.EventHandler,
    },
    onOption7Tap: {
        title: "Option 7 Tap",
        type: ControlType.EventHandler,
    },
    onOption8Tap: {
        title: "Option 8 Tap",
        type: ControlType.EventHandler,
    },
    onOption9Tap: {
        title: "Option 9 Tap",
        type: ControlType.EventHandler,
    },
    onOption10Tap: {
        title: "Option 10 Tap",
        type: ControlType.EventHandler,
    },
})

RadioButtons.displayName = "Radio Buttons"
