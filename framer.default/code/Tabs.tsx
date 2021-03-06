import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { useState } from "react"
import { Icon } from "./Icon"
import { emptyStateStyle, fontStack } from "./lib/constants"
import * as FeatherIcons from "react-feather"

/*
 * TABS
 *
 * - Add labels option (icon / label or both)
 * - add mounting / unmounting logic
 * - add animation while changing tabs
 * - allow them to add tabs without children
 */

export function Tabs(props) {
    const {
        iconSize,
        activeColor,
        inactiveColor,
        defaultTab,
        children,
        contentHeight,
        contentWidth,
        tab1Icon,
        onTab1Tap,
        tab2Icon,
        onTab2Tap,
        tab3Icon,
        onTab3Tap,
        tab4Icon,
        onTab4Tap,
        tab5Icon,
        onTab5Tap,
        background,
        barHeight,
        distribution,
        padding,
    } = props

    const tabs = [
        { icon: tab1Icon, event: onTab1Tap },
        { icon: tab2Icon, event: onTab2Tap },
        { icon: tab3Icon, event: onTab3Tap },
        { icon: tab4Icon, event: onTab4Tap },
        { icon: tab5Icon, event: onTab5Tap },
    ].slice(0, children.length)

    const connectedToContent = children.length > 0

    const [activeTab, setActiveTab] = useState(defaultTab - 1)

    React.useEffect(() => {
        setActiveTab(defaultTab - 1)
    }, [defaultTab])

    const childComponents = React.Children.map(children, (child, i) => {
        const update: { [key: string]: any } = {
            right: undefined,
            bottom: undefined,
            top: undefined,
            left: undefined,
            center: true,
            _constraints: {
                enabled: false,
            },
        }

        if (contentWidth === "stretch") {
            update.width = "100%"
        }
        if (contentHeight === "stretch") {
            update.height = "100%"
        }

        return (
            <div
                key={i}
                style={{
                    display: "contents",
                    visibility: i === activeTab ? "visible" : "hidden",
                }}
            >
                {React.cloneElement(child, update)}
            </div>
        )
    })

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {connectedToContent ? (
                <>
                    {childComponents}
                    <Stack
                        {...props}
                        distribution={distribution}
                        padding={padding}
                        style={{
                            ...tabContainerStyle,
                            background,
                            height: barHeight,
                        }}
                    >
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                style={{
                                    ...tabStyle,
                                    width: iconSize * 2,
                                    height: iconSize * 2,
                                }}
                                onClick={() => {
                                    setActiveTab(i)
                                    if (tab.event) tab.event()
                                }}
                            >
                                <Icon
                                    width={iconSize}
                                    height={iconSize}
                                    iconSelection={tab.icon}
                                    color={i === activeTab ? activeColor : inactiveColor}
                                />
                            </div>
                        ))}
                    </Stack>
                </>
            ) : (
                <div style={emptyStateStyle}>
                    <p style={{ ...tabHelperTextStyle, fontWeight: 600 }}>Tabs</p>
                    <p style={tabHelperTextStyle}>Click and drag from the connector to any Frame on the Canvas →</p>
                </div>
            )}
        </div>
    )
}

const tabContainerStyle: React.CSSProperties = {
    border: "none",
    width: "100%",
    height: 60,
    paddingLeft: 12,
    paddingRight: 12,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    color: "white",
    fontWeight: 600,
    outline: "none",
    resize: "none",
    overflow: "hidden",
    zIndex: 1,
}

const tabHelperTextStyle: React.CSSProperties = {
    fontFamily: fontStack,
    color: "#8856FF",
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 1.4,
    fontWeight: 400,
    marginTop: 0,
    marginBottom: 5,
    maxWidth: "200px",

    textAlign: "center",
}
const tabStyle: React.CSSProperties = {
    textAlign: "center",
    height: 50,
    width: 50,
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}

/*
 *   Props & Props Controls
 */

Tabs.defaultProps = {
    height: 667,
    width: 375,
    activeColor: "#333",
    inactiveColor: "#e1e1e1",
    tab1Icon: "Menu",
    tab2Icon: "Framer",
    tab3Icon: "Settings",
    tab4Icon: "Framer",
    tab5Icon: "Framer",
    background: "white",
    barHeight: 75,
    iconSize: 25,
    textAlign: "center",
    direction: "horizontal",
    distribution: "space-around",
    alignment: "center",
}

addPropertyControls(Tabs, {
    defaultTab: {
        title: "Active Tab",
        type: ControlType.Number,
        defaultValue: 0,
        min: 1,
        max: 5,
        displayStepper: true,
    },
    iconSize: {
        title: "Icon Size",
        type: ControlType.Number,
        defaultValue: Tabs.defaultProps.iconSize,
        min: 10,
        max: 50,
    },
    barHeight: {
        title: "Bar Height",
        type: ControlType.Number,
        defaultValue: Tabs.defaultProps.barHeight,
        min: 10,
        max: 150,
    },
    activeColor: {
        title: "Active Tab",
        type: ControlType.Color,
        defaultValue: Tabs.defaultProps.activeColor,
    },
    inactiveColor: {
        title: "Inactive Tab",
        type: ControlType.Color,
        defaultValue: Tabs.defaultProps.inactiveColor,
    },
    background: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: Tabs.defaultProps.background,
    },
    contentWidth: {
        type: ControlType.SegmentedEnum,
        options: ["auto", "stretch"],
        optionTitles: ["Auto", "Stretch"],
        title: "Width",
        defaultValue: "stretch",
    },
    contentHeight: {
        type: ControlType.SegmentedEnum,
        options: ["auto", "stretch"],
        optionTitles: ["Auto", "Stretch"],
        title: "Height",
        defaultValue: "stretch",
    },
    // @ts-ignore
    ...Stack.propertyControls,
    direction: {},
    alignment: {},
    children: {
        title: "Tabs",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
        maxCount: 5,
    },
    tab1Icon: {
        type: ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab1Icon,
        hidden: ({ children }) => tabNotExistent(children, 0),
    },
    tab2Icon: {
        type: ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab2Icon,
        hidden: ({ children }) => tabNotExistent(children, 1),
    },
    tab3Icon: {
        type: ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab3Icon,
        hidden: ({ children }) => tabNotExistent(children, 2),
    },
    tab4Icon: {
        type: ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab4Icon,
        hidden: ({ children }) => tabNotExistent(children, 3),
    },
    tab5Icon: {
        type: ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab5Icon,
        hidden: ({ children }) => tabNotExistent(children, 4),
    },
    onTab1Tap: {
        title: "On Tab 1 Tap",
        type: ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 0),
    },
    onTab2Tap: {
        title: "On Tab 2 Tap",
        type: ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 1),
    },
    onTab3Tap: {
        title: "On Tab 3 Tap",
        type: ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 2),
    },
    onTab4Tap: {
        title: "On Tab 4 Tap",
        type: ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 3),
    },
    onTab5Tap: {
        title: "On Tab 5 Tap",
        type: ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 4),
    },
})
;(Tabs as any).supportsConstraints = true

interface Child {
    enabled?: boolean
}

function isChild(value: unknown): value is Child {
    if (!value || typeof value !== "object") return false
    return "enabled" in value
}

// We return null, if the model is incorrect
function getChildCount(children: unknown) {
    if (!Array.isArray(children)) return null
    let childCount = 0
    for (const child of children) {
        if (!isChild(child)) return null
        if (child.enabled === true) {
            childCount++
        }
    }
    return childCount
}

function tabNotExistent(children: unknown, tabIndex: number) {
    const childCount = getChildCount(children)
    if (childCount === null) return false
    return tabIndex > childCount - 1
}
