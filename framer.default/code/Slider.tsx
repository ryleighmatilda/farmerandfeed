import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useMotionValue,
    useTransform,
    transform,
    RenderTarget,
} from "framer"
import { useEffect, useRef } from "react"

/*
 ** SLIDER
 */

export function Slider({
    width,
    track,
    fillColor,
    min,
    max,
    onChange,
    onMax,
    onMin,
    background,
    color,
    knobSize,
    value,
    constrained,
    shadow,
    overdrag,
}) {
    const x = useMotionValue(transform(value, [min, max], [0, width]))
    const isMax = useRef(value === max)
    const isMin = useRef(value === min)

    if (RenderTarget.current() === RenderTarget.canvas)
        x.set(transform(value, [min, max], [0, width]))

    useEffect(
        () =>
            x.onChange((latest) => {
                // need to do something here, but its a demo for now
                const scaledVal = transform(latest, [0, width], [min, max])
                if (isMin.current && latest > 0) isMin.current = false
                if (isMax.current && latest < width) isMax.current = false

                if (onChange) onChange(scaledVal)
                if (onMax && latest >= width) {
                    if (!isMax.current) onMax(max)
                    isMax.current = true
                }
                if (onMin && latest <= 0) {
                    if (!isMin.current) onMin(min)
                    isMin.current = true
                }
            }),
        []
    )

    const fill = useTransform(x, [0, width], [0, width])

    return (
        <Frame
            width="100%"
            height={track}
            center={true}
            overflow={"visible"}
            radius={100}
            backgroundColor={background}
        >
            <Frame
                width={fill}
                height={track}
                overflow={"visible"}
                radius={100}
                backgroundColor={fillColor}
            />
            <Frame
                size={knobSize}
                radius={200}
                backgroundColor={color}
                shadow={`0px 1px 2px 0px ${shadow}, 0px 2px 4px 0px ${shadow}, 0px 4px 8px 0px ${shadow}`}
                drag={"x"}
                initial={{ y: -knobSize / 2 + track / 2 }}
                y={-knobSize / 2 + track / 2}
                dragElastic={overdrag ? 0.04 : false}
                left={-knobSize / 2}
                dragConstraints={{
                    left: 0,
                    right: width,
                }}
                dragMomentum={false}
                x={x}
            />
        </Frame>
    )
}

Slider.defaultProps = {
    height: 40,
    width: 200,
    track: 4,
    fillColor: "#09F",
    background: "#DDD",
    color: "#FFF",
    shadow: "rgba(0,0,0,0.1)",
    knobSize: 25,
    overdrag: true,
    min: 0,
    max: 100,
    value: 50,
}

addPropertyControls(Slider, {
    fillColor: {
        title: "Tint",
        type: ControlType.Color,
    },
    background: {
        title: "Track",
        type: ControlType.Color,
    },
    color: {
        title: "Knob",
        type: ControlType.Color,
    },
    shadow: { type: ControlType.Color, title: "Shadow" },
    knobSize: { type: ControlType.Number, title: "Knob", min: 10, max: 100 },
    track: {
        title: "Height",
        type: ControlType.Number,
        min: 1,
        max: 50,
    },
    value: {
        type: ControlType.Number,
        title: "Value",
        displayStepper: true,
    },
    min: {
        title: "Min",
        type: ControlType.Number,
        displayStepper: true,
    },

    max: {
        title: "Max",
        type: ControlType.Number,
        displayStepper: true,
    },
    // constrained: { type: ControlType.Boolean, title: "Constrain" },
    overdrag: { type: ControlType.Boolean, title: "Overdrag" },
    onChange: { type: ControlType.EventHandler },
    onMax: { type: ControlType.EventHandler },
    onMin: { type: ControlType.EventHandler },
})
