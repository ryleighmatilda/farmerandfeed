import * as React from "react"
import { themes } from "framer-base"
import { placeholderState } from "../utils"
import {
    ScrollProps,
    Stack,
    Scroll,
    addPropertyControls,
    ControlType,
    RenderTarget,
} from "framer"
import withHOC from "../utils/withHOC"

type Props = Partial<
    ScrollProps & {
        gap: number
        scroll: boolean
        padding: number
        paddingTop: number
        paddingLeft: number
        paddingRight: number
        paddingBottom: number
        paddingPerSide: boolean
    }
> & {
    content: any[]
}

const defaultProps: Props = {
    content: [],
    gap: 8,
    scroll: true,
    padding: 0,
    center: false,
}

const InnerList: React.FC<Props> = props => {
    const {
        content,
        gap,
        scroll,
        paddingPerSide,
        padding,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        ...rest
    } = props

    const paddings = paddingPerSide
        ? {
              paddingRight,
              paddingBottom,
              paddingLeft,
              paddingTop,
          }
        : paddingPerSide === undefined
        ? {
              padding,
              paddingRight: paddingRight || padding,
              paddingBottom: paddingBottom || padding,
              paddingLeft: paddingLeft || padding,
              paddingTop: paddingTop || padding,
          }
        : {
              padding,
          }

    if (
        (content.length === 0 &&
            RenderTarget.current() === RenderTarget.canvas) ||
        RenderTarget.current() === RenderTarget.thumbnail
    ) {
        return React.createElement(placeholderState, {
            theme: themes.light,
            title: "No items",
            label: "Add items by connecting them on the Canvas",
        })
    }

    return (
        <Scroll {...rest} dragEnabled={scroll}>
            <Stack
                background="transparent"
                direction="vertical"
                gap={gap}
                height="auto"
                width="100%"
                {...paddings}
            >
                {content}
            </Stack>
        </Scroll>
    )
}

export const List = withHOC(InnerList)

List.defaultProps = { ...defaultProps }

addPropertyControls(List, {
    gap: {
        type: ControlType.Number,
        title: "Gap",
        displayStepper: true,
        defaultValue: defaultProps.gap,
        min: 0,
    },
    padding: {
        type: ControlType.FusedNumber,
        title: "Padding",
        toggleKey: "paddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        defaultValue: defaultProps.padding,
        min: 0,
    },
    content: {
        title: "Content",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
        defaultValue: defaultProps.content,
    },
})
