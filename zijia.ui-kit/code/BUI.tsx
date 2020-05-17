import * as React from "react"
import { Frame, ControlType } from "framer"

// Define type of property
interface Props {
    text: string
    placeholder: string
    select: number
    color: string
    type: string
    style: object
}

export class Input extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        height: 38,
        width: 280,
        type: "text",
        state: "normal",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        type: {
            title: "Type",
            type: ControlType.SegmentedEnum,
            options: ["text", "number"],
            optionTitles: ["Text", "Number"],
        },
        state: {
            title: "State",
            type: ControlType.SegmentedEnum,
            options: ["normal", "error"],
            optionTitles: ["Normal", "Error"],
        },
        placeholder: { type: ControlType.String, title: "Placeholder" },
        value: { type: ControlType.String, title: "Value" },
    }
    state = {
        error: this.props.state == "error",
    }
    componentDidUpdate(prevProps) {
        if (prevProps.state !== this.props.state) {
            this.setState({
                error: this.props.state == "error",
            })
        }
    }
    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    display: "inline-flex",
                    padding: "8px",
                    borderRadius: "2px",
                    border:
                        "1px solid " +
                        (this.state.error ? "#ff0202" : "rgb(209, 209, 209)"),
                    margin: "0",
                    fontSize: "14px",
                    color: "#383838",
                    backgroundColor: "white",
                    ...this.props.style,
                }}
                onChange={e => {
                    if (this.props.onChange) {
                        this.props.onChange(e)
                    }
                }}
                onInput={e => {
                    if (this.props.onInput) {
                        this.props.onInput(e)
                    }
                }}
                placeholder={this.props.placeholder}
                value={this.props.value}
            />
        )
    }
}

export class Radio extends React.Component {
    // Set default properties
    static defaultProps = {
        height: 20,
        radio0: "Radio 1",
        radio1: "Radio 2",
        state: "normal",
        initialSelect: 0,
    }

    // Items shown in property panel
    static propertyControls = (() => {
        let controls = {
            initialSelect: {
                type: ControlType.Number,
                title: "Select",
                min: 0,
            },
            state: {
                title: "State",
                type: ControlType.SegmentedEnum,
                options: ["normal", "error"],
                optionTitles: ["Normal", "Error"],
            },
            radio0: {
                type: ControlType.String,
                title: "Radio 1",
            },
            radio1: {
                type: ControlType.String,
                title: "Radio 2",
            },
        }
        for (let i = 2; i < 50; i++) {
            controls["radio" + i] = {
                type: ControlType.String,
                title: "Radio " + (i + 1),
                hidden(props) {
                    return !props["radio" + (i - 1)]
                },
            }
        }
        return controls
    })()

    state = {
        select: this.props.initialSelect,
        error: this.props.state == "error",
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.initialSelect !== this.props.initialSelect ||
            prevProps.state !== this.props.state
        ) {
            this.setState({
                select: this.props.initialSelect,
                error: this.props.state == "error",
            })
        }
    }

    render() {
        let radios = []
        for (
            let i = 0, radio = this.props["radio" + i];
            radio;
            radio = this.props["radio" + ++i]
        ) {
            radios.push(
                <label
                    key={i}
                    style={{
                        display: "flex",
                        margin: "0 16px 8px 0",
                    }}
                    onChange={e => {
                        this.setState({ select: i + 1 })
                        if (this.props.onChange) {
                            this.props.onChange(e)
                        }
                    }}
                >
                    <input
                        type="radio"
                        checked={this.state.select === i + 1}
                        name="radio"
                        value={radio}
                        style={{
                            boxSizing: "border-box",
                            height: 0,
                            width: 0,
                            margin: 0,
                            opacity: 0,
                            overflow: "hidden",
                        }}
                    />
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxSizing: "border-box",
                            height: "20px",
                            width: "20px",
                            background: "white",
                            border:
                                "2px solid " +
                                (this.state.error
                                    ? "#ff0202"
                                    : this.state.select === i + 1
                                    ? "#0077cc"
                                    : "rgba(0,0,0,0.5)"),
                            borderRadius: "50%",
                            marginRight: "8px",
                            flexShrink: 0,
                        }}
                    >
                        <span
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor:
                                    !this.state.error &&
                                    this.state.select === i + 1
                                        ? "#0077cc"
                                        : "transparent",
                            }}
                        />
                    </span>
                    <span>{radio}</span>
                </label>
            )
        }
        return (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "flex-start",
                    height: this.props.height,
                    color: "#383838",
                    fontSize: "14px",
                    lineHeight: "20px",
                    ...this.props.style,
                }}
            >
                {radios}
            </div>
        )
    }
}

export class Select extends React.Component {
    // Set default properties
    static defaultProps = {
        height: 38,
        width: 200,
        initialSelect: 1,
        option0: "Option 1",
        option1: "Option 2",
    }

    static propertyControls = (() => {
        let controls = {
            initialSelect: {
                type: ControlType.Number,
                title: "Select",
                min: 1,
            },
            option0: {
                type: ControlType.String,
                title: "Option 1",
            },
            option1: {
                type: ControlType.String,
                title: "Option 2",
            },
        }
        for (let i = 2; i < 50; i++) {
            controls["option" + i] = {
                type: ControlType.String,
                title: "Option " + (i + 1),
                hidden(props) {
                    return !props["option" + (i - 1)]
                },
            }
        }
        return controls
    })()

    state = { select: this.props.initialSelect }

    componentDidUpdate(prevProps) {
        if (prevProps.initialSelect !== this.props.initialSelect) {
            this.setState({ select: this.props.initialSelect })
        }
    }

    render() {
        let options = []
        for (
            let i = 0, option = this.props["option" + i];
            option;
            option = this.props["option" + ++i]
        ) {
            let disabled, value
            if (option.length > 9 && option.substring(0, 9) == "disabled-") {
                disabled = true
                value = option.substring(9)
            } else {
                disabled = false
                value = option
            }
            options.push(
                <option key={i} value={value} disabled={disabled}>
                    {value}
                </option>
            )
        }
        return (
            <div
                style={{
                    display: "inline-flex",
                    width: this.props.width,
                    height: this.props.height,
                    borderRadius: "2px",
                    backgroundColor: "white",
                    ...this.props.style,
                }}
            >
                <select
                    name={this.props.name}
                    value={this.props["option" + (this.state.select - 1)]}
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: "8px 32px 8px 8px",
                        margin: 0,
                        borderRadius: "2px",
                        border: "1px solid rgb(209, 209, 209)",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        WebkitAppearance: "none",
                        zIndex: 1,
                        color: "#383838",
                        backgroundColor: "transparent",
                    }}
                    onChange={e => {
                        let selectedOption = e.target.querySelector(":checked")
                        let i = 0
                        for (
                            let element = selectedOption.previousElementSibling;
                            element;
                            element = element.previousElementSibling
                        ) {
                            i++
                        }
                        this.setState({ select: i + 1 })
                        if (this.props.onChange) {
                            this.props.onChange(e)
                        }
                    }}
                >
                    {options}
                </select>
                <svg
                    height="16"
                    style={{
                        fill: "#383838",
                        marginLeft: "-24px",
                        marginRight: "8px",
                        alignSelf: "center",
                    }}
                    viewBox="0 0 128 128"
                >
                    <path d="M92 52a4 4 0 0 1-2.8-1.2L64 25.7 38.8 50.8a4 4 0 0 1-5.6-5.6L64 14.3l30.8 30.9A4 4 0 0 1 92 52zm0 24a4 4 0 0 0-2.8 1.2L64 102.3 38.8 77.2a4 4 0 0 0-5.6 5.6L64 113.7l30.8-30.9A4 4 0 0 0 92 76z" />
                </svg>
            </div>
        )
    }
}

export class Checkbox extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        height: 20,
        label: "Checkbox",
        checked: false,
        disabled: false,
        error: false,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        label: { type: ControlType.String, title: "Label" },
        checked: { type: ControlType.Boolean, title: "Checked" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        error: { type: ControlType.Boolean, title: "Error" },
    }

    state = {
        checked: this.props.checked,
        disabled: this.props.disabled,
        error: this.props.error,
    }

    componentDidUpdate(prevProps) {
        if (
            (prevProps.checked !== this.props.checked &&
                this.props.checked !== this.state.checked) ||
            (prevProps.disabled !== this.props.disabled &&
                this.props.disabled !== this.state.disabled) ||
            (prevProps.error !== this.props.error &&
                this.props.error !== this.state.error)
        ) {
            this.setState({
                checked: this.props.checked,
                disabled: this.props.disabled,
                error: this.props.error,
            })
        }
    }

    render() {
        return (
            <label
                style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    color: "#383838",
                    fontSize: "14px",
                    overflow: "hidden",
                    ...this.props.style,
                }}
                onChange={e => {
                    this.setState({ checked: e.target.checked })
                    // this.props.checked=true
                }}
            >
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    style={{
                        boxSizing: "border-box",
                        height: 0,
                        width: 0,
                        margin: 0,
                        opacity: 0,
                        overflow: "hidden",
                    }}
                />
                <span
                    style={{
                        boxSizing: "border-box",
                        height: "20px",
                        width: "20px",
                        border: "2px solid rgba(0,0,0,0.5)",
                        borderRadius: "2px",
                        marginRight: "8px",
                        flexShrink: 0,
                        backgroundColor: this.state.checked
                            ? this.state.disabled
                                ? "#bdbdbd"
                                : "#07c"
                            : "#fff",
                        borderColor: this.state.checked
                            ? "transparent"
                            : this.state.disabled
                            ? "#bdbdbd"
                            : this.state.error
                            ? "#ff0202"
                            : "rgba(0,0,0,0.5)",
                    }}
                >
                    <img
                        style={{
                            display: this.state.checked ? "block" : "none",
                            margin: "-2px",
                            border: 0,
                        }}
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E"
                    />
                </span>
                <span style={{ lineHeight: "20px", color: "#383838" }}>
                    {this.props.label}
                </span>
            </label>
        )
    }
}

export class Textarea extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        width: 400,
        height: 90,
        placeholder: "Textarea",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        placeholder: { type: ControlType.String, title: "Placeholder" },
        text: { type: ControlType.String, title: "Text" },
    }

    render() {
        return (
            <textarea
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    padding: "8px",
                    margin: "0",
                    borderRadius: "2px",
                    border: "1px solid rgb(209, 209, 209)",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#383838",
                }}
                placeholder={this.props.placeholder}
                value={this.props.text}
            />
        )
    }
}

export class Text extends React.Component {
    static defaultProps = {
        height: 20,
        text: "Text",
        color: "#383838",
        type: "body",
    }

    static propertyControls: PropertyControls = {
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: [
                "display three",
                "display two",
                "display one",
                "heading",
                "featured",
                "strong",
                "body",
                "caption",
            ],
            optionTitles: [
                "Display Three",
                "Display Two",
                "Display One",
                "Heading",
                "Featured",
                "Strong",
                "Body",
                "Caption",
            ],
        },
        text: { type: ControlType.String, title: "Text" },
        color: { type: ControlType.Color, title: "Color" },
    }
    render() {
        let fontSize, lineHeight, fontWeight
        if (this.props.type == "caption") {
            fontSize = "12px"
            lineHeight = "18px"
            fontWeight = "400"
        } else if (this.props.type == "body") {
            fontSize = "14px"
            lineHeight = "20px"
            fontWeight = "400"
        } else if (this.props.type == "strong") {
            fontSize = "14px"
            lineHeight = "20px"
            fontWeight = "500"
        } else if (this.props.type == "featured") {
            fontSize = "16px"
            lineHeight = "24px"
            fontWeight = "400"
        } else if (this.props.type == "heading") {
            fontSize = "16px"
            lineHeight = "24px"
            fontWeight = "500"
        } else if (this.props.type == "display one") {
            fontSize = "20px"
            lineHeight = "28px"
            fontWeight = "500"
        } else if (this.props.type == "display two") {
            fontSize = "24px"
            lineHeight = "32px"
            fontWeight = "700"
        } else if (this.props.type == "display three") {
            fontSize = "32px"
            lineHeight = "40px"
            fontWeight = "700"
        }
        return (
            <span
                style={{
                    display: "block",
                    color: this.props.color,
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontWeight: fontWeight,
                    ...this.props.style,
                }}
                onClick={e => {
                    if (this.props.onClick) {
                        this.props.onClick(e)
                    }
                }}
            >
                {this.props.text}
            </span>
        )
    }
}

export class Button extends React.Component {
    static defaultProps = {
        height: 38,
        class: "primary",
        size: "normal",
        text: "Submit",
        disabled: false,
    }
    static propertyControls = {
        class: {
            type: ControlType.Enum,
            title: "Class",
            options: ["primary", "secondary", "destructive"],
            optionTitles: ["Primary", "Secondary", "Destructive"],
        },
        size: {
            type: ControlType.Enum,
            title: "Size",
            options: ["normal", "large"],
            optionTitles: ["Normal", "Large"],
        },
        text: {
            type: ControlType.String,
            title: "Text",
        },
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
        },
    }
    render() {
        let primaryColor = this.props.disabled
            ? "#bdbdbd"
            : this.props.class == "destructive"
            ? "#ff0202"
            : "#07c"
        return (
            <button
                disabled={this.props.disabled}
                style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: this.props.width ? this.props.width + "px" : "auto",
                    height: this.props.size == "normal" ? "38px" : "50px",
                    backgroundColor:
                        this.props.class == "secondary" ? "#fff" : primaryColor,
                    color:
                        this.props.class == "secondary" ? primaryColor : "#fff",
                    padding: "0 24px",
                    border: "1px solid " + primaryColor,
                    margin: 0,
                    fontSize: this.props.size == "normal" ? "14px" : "16px",
                    fontWeight: 500,
                    borderRadius: "2px",
                    overflow: "hidden",
                    ...this.props.style,
                }}
                type={this.props.type}
                onClick={e => {
                    if (this.props.onClick) {
                        this.props.onClick(e)
                    }
                }}
            >
                {React.Children.map(this.props.children, e => {
                    return typeof e == "string" ? (
                        <span style={{ flexShrink: "0", margin: "0 4px" }}>
                            {e}
                        </span>
                    ) : (
                        <span
                            style={{
                                flexShrink: "0",
                                width: e.props.width + "px",
                                height: e.props.height + "px",
                                textAlign: "start",
                                position: "relative",
                                margin: "0 4px",
                            }}
                        >
                            {e}
                        </span>
                    )
                })}
                <span style={{ flexShrink: "0", margin: "0 4px" }}>
                    {this.props.text}
                </span>
            </button>
        )
    }
}

const stepperButtonStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "2px",
    fontSize: "16px",
    fontWeight: 700,
    border: "1px solid #07c",
    borderColor: "#07c",
    backgroundColor: "#fff",
    color: "#07c",
}

export class Stepper extends React.Component {
    static defaultProps = {
        height: 40,
        label: "Label",
        initialValue: 0,
    }

    static propertyControls: PropertyControls = {
        label: { type: ControlType.String, title: "Label" },
        initialValue: { type: ControlType.Number, title: "Value", min: 0 },
    }

    state = {
        value: this.props.initialValue,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.initialValue != this.props.initialValue) {
            this.setState({
                value: this.props.initialValue,
            })
        }
    }

    decrease = () => {
        let value = this.state.value
        if (value > 0) {
            this.setState({
                value: value - 1,
            })
            if (this.props.onChange) {
                this.props.onChange(value - 1)
            }
        }
    }

    increase = () => {
        let value = this.state.value
        this.setState({
            value: value + 1,
        })
        if (this.props.onChange) {
            this.props.onChange(value + 1)
        }
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#383838",
                    ...this.props.style,
                }}
            >
                <div
                    style={{
                        flexGrow: 1,
                        marginRight: "8px",
                    }}
                >
                    <Text type="strong" text={this.props.label} height="auto" />
                </div>
                <button
                    style={{
                        ...stepperButtonStyle,
                        ...(this.state.value == 0 && {
                            borderColor: "rgb(179, 179, 179)",
                            color: "rgb(179, 179, 179)",
                        }),
                    }}
                    onClick={this.decrease}
                >
                    -
                </button>
                <span
                    style={{
                        width: "40px",
                        fontWeight: 700,
                        fontSize: "16px",
                        textAlign: "center",
                    }}
                >
                    {this.state.value}
                </span>
                <button style={stepperButtonStyle} onClick={this.increase}>
                    +
                </button>
            </div>
        )
    }
}

export class Panel extends React.Component {
    static defaultProps = {
        contentWidth: "stretch",
    }
    static propertyControls: PropertyControls = {
        contentWidth: {
            title: "Width",
            type: ControlType.SegmentedEnum,
            options: ["auto", "stretch"],
            optionTitles: ["Auto", "Stretch"],
        },
    }

    render() {
        const padding = 24
        const borderWidth = 1
        return (
            <section
                style={{
                    height: this.props.height,
                    overflow: "hidden",
                    padding: padding + "px",
                    border: borderWidth + "px solid rgb(224, 224, 224)",
                    borderRadius: "2px",
                    color: "#383838",
                    backgroundColor: "#fff",
                    fontSize: "14px",
                    ...this.props.style,
                }}
            >
                {React.Children.map(this.props.children, e =>
                    typeof e == "string"
                        ? e
                        : React.cloneElement(
                              e,
                              this.props.contentWidth == "stretch"
                                  ? {
                                        width:
                                            this.props.width -
                                            padding * 2 -
                                            borderWidth * 2,
                                        style: {
                                            ...e.props.style,
                                            position: "relative",
                                        },
                                    }
                                  : {
                                        style: {
                                            ...e.props.style,
                                            position: "relative",
                                        },
                                    }
                          )
                )}
            </section>
        )
    }
}

export class PanelGroup extends React.Component {
    static propertyControls: PropertyControls = {
        children: {
            title: "Panels",
            type: ControlType.Array,
            propertyControl: { type: ControlType.ComponentInstance },
        },
    }
    render() {
        const padding = 24
        const borderWidth = 1
        return (
            React.Children.count(this.props.children) > 0 && (
                <section
                    style={{
                        display: "grid",
                        gridTemplate: "1fr/auto",
                        border: borderWidth + "px solid rgb(224, 224, 224)",
                        borderRadius: "2px",
                        backgroundColor: "#fff",
                        fontSize: "14px",
                        color: "#383838",
                        ...this.props.style,
                    }}
                >
                    {React.Children.map(this.props.children, (e, i) => (
                        <div
                            style={{
                                position: "relative",
                                boxSizing: "content-box",
                                height: e.props.height,
                                padding: padding + "px",
                                borderTop:
                                    i == 0
                                        ? 0
                                        : borderWidth +
                                          "px solid rgb(224, 224, 224)",
                            }}
                        >
                            {React.cloneElement(e, {
                                width:
                                    this.props.width -
                                    padding * 2 -
                                    borderWidth * 2,
                            })}
                        </div>
                    ))}
                </section>
            )
        )
    }
}

export class Accordion extends React.Component {
    static defaultProps = {
        initialState: "collapsed",
        title: "Title",
        subtitle: "Subtitle",
    }
    static propertyControls: PropertyControls = {
        title: { title: "Title", type: ControlType.String },
        subtitle: { title: "Subtitle", type: ControlType.String },
        initialState: {
            title: "State",
            type: ControlType.SegmentedEnum,
            options: ["collapsed", "expanded"],
            optionTitles: ["Collapsed", "Expanded"],
        },
    }
    state = { collapsed: this.props.initialState == "collapsed" }

    componentDidUpdate(prevProps) {
        if (prevProps.initialState != this.props.initialState) {
            this.setState({
                collapsed: this.props.initialState == "collapsed",
            })
        }
    }

    render() {
        const padding = 24
        return (
            <Panel width={this.props.width}>
                <button
                    style={{
                        display: "flex",
                        width: "100%",
                        boxSizing: "content-box",
                        textAlign: "start",
                        alignItems: "center",
                        padding: padding + "px",
                        border: 0,
                        margin: "-" + padding + "px",
                        cursor: "pointer",
                        background: "transparent",
                        color: "inherit",
                        fontSize: "inherit",
                    }}
                    onClick={e => {
                        this.setState({ collapsed: !this.state.collapsed })
                    }}
                >
                    <span style={{ flex: "auto 1 1" }}>
                        <Text
                            type="display one"
                            text={this.props.title}
                            style={{
                                display: "block",
                                fontWeight: "700",
                            }}
                        />
                        <Text type="featured" text={this.props.subtitle} />
                    </span>
                    <svg
                        fill="#707070"
                        width="24"
                        viewBox="0 0 128 128"
                        style={
                            this.state.collapsed
                                ? {}
                                : {
                                      transform: "rotate(180deg)",
                                  }
                        }
                    >
                        <path d="M64 88L33.2 57.2a4 4 0 0 1 5.6-5.7L64 76.7l25.2-25.2a4 4 0 0 1 5.6 5.7z" />
                    </svg>
                </button>
                {this.state.collapsed ? (
                    []
                ) : React.Children.count(this.props.children) == 0 ? (
                    <Text
                        style={{ color: "#bdbdbd" }}
                        text="Connnect to content"
                    />
                ) : (
                    this.props.children
                )}
            </Panel>
        )
    }
}

export class AccordionGroup extends React.Component {
    // max children: 10
    static defaultProps = (() => {
        let props = {}
        for (let i = 0; i < 10; i++) {
            props["initialState" + i] = "collapsed"
        }
        return props
    })()
    static propertyControls = (() => {
        let controls = {
            children: {
                title: "Accordions",
                type: ControlType.Array,
                propertyControl: { type: ControlType.ComponentInstance },
            },
        }
        for (let i = 0; i < 10; i++) {
            controls["title" + i] = {
                type: ControlType.String,
                title: "Title " + (i + 1),
                hidden(props) {
                    return i >= props.children.length
                },
            }
            controls["subtitle" + i] = {
                type: ControlType.String,
                title: "Subtitle " + (i + 1),
                hidden(props) {
                    return i >= props.children.length
                },
            }
            controls["initialState" + i] = {
                title: "State " + (i + 1),
                type: ControlType.SegmentedEnum,
                options: ["collapsed", "expanded"],
                optionTitles: ["Collapsed", "Expanded"],
                hidden(props) {
                    return i >= props.children.length
                },
            }
        }
        return controls
    })()

    state = (() => {
        let state = { collapsed: [] }
        for (let i = 0; this.props["initialState" + i]; i++) {
            state.collapsed[i] = this.props["initialState" + i] == "collapsed"
        }
        return state
    })()

    componentDidUpdate(prevProps) {
        for (let i = 0; this.props["initialState" + i]; i++) {
            if (
                prevProps["initialState" + i] != this.props["initialState" + i]
            ) {
                let collapsed = this.state.collapsed
                collapsed[i] = this.props["initialState" + i] == "collapsed"
                this.setState({
                    collapsed: collapsed,
                })
            }
        }
    }

    render() {
        const padding = 24
        const borderWidth = 1
        return (
            React.Children.count(this.props.children) > 0 && (
                <section
                    style={{
                        display: "grid",
                        gridTemplate: "1fr/auto",
                        border: borderWidth + "px solid rgb(224, 224, 224)",
                        borderRadius: "2px",
                        backgroundColor: "#fff",
                        fontSize: "14px",
                        color: "#383838",
                        ...this.props.style,
                    }}
                >
                    {React.Children.map(this.props.children, (e, i) => (
                        <div
                            style={{
                                padding: padding + "px",
                                borderTop:
                                    i == 0
                                        ? 0
                                        : borderWidth +
                                          "px solid rgb(224, 224, 224)",
                            }}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    boxSizing: "content-box",
                                    textAlign: "start",
                                    alignItems: "center",
                                    padding: padding + "px",
                                    border: 0,
                                    margin: "-" + padding + "px",
                                    cursor: "pointer",
                                    background: "transparent",
                                    color: "inherit",
                                    fontSize: "inherit",
                                }}
                                onClick={e => {
                                    let collapsed = this.state.collapsed
                                    collapsed[i] = !collapsed[i]
                                    this.setState({ collapsed: collapsed })
                                }}
                            >
                                <span style={{ flex: "auto 1 1" }}>
                                    <Text
                                        type="display one"
                                        text={this.props["title" + i]}
                                        style={{
                                            display: "block",
                                            fontWeight: "700",
                                        }}
                                    />
                                    <Text
                                        type="featured"
                                        text={this.props["subtitle" + i]}
                                    />
                                </span>
                                <svg
                                    fill="#707070"
                                    width="24"
                                    viewBox="0 0 128 128"
                                    style={
                                        this.state.collapsed
                                            ? {}
                                            : {
                                                  transform: "rotate(180deg)",
                                              }
                                    }
                                >
                                    <path d="M64 88L33.2 57.2a4 4 0 0 1 5.6-5.7L64 76.7l25.2-25.2a4 4 0 0 1 5.6 5.7z" />
                                </svg>
                            </button>
                            {!this.state.collapsed[i] && (
                                <div
                                    style={{
                                        position: "relative",
                                        height: e.props.height,
                                    }}
                                >
                                    {React.cloneElement(e, {
                                        width:
                                            this.props.width -
                                            padding * 2 -
                                            borderWidth * 2,
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            )
        )
    }
}

export class SegmentedControl extends React.Component {
    static defaultProps = {
        width: 300,
        height: 38,
        initialSelect: 1,
        item0: "Item 1",
        item1: "Item 2",
    }

    static propertyControls = (() => {
        let controls = {
            initialSelect: {
                type: ControlType.Number,
                title: "Select",
                min: 1,
            },
            item0: { type: ControlType.String, title: "Item 1" },
            item1: { type: ControlType.String, title: "Item 2" },
        }
        for (let i = 2; i < 10; i++) {
            controls["item" + i] = {
                type: ControlType.String,
                title: "Item " + (i + 1),
                hidden(props) {
                    return !props["item" + (i - 1)]
                },
            }
        }
        return controls
    })()

    state = {
        select: this.props.initialSelect - 1,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.initialSelect != this.props.initialSelect) {
            this.setState({
                select: this.props.initialSelect - 1,
            })
        }
    }

    render() {
        let items = [],
            j = []
        for (
            let i = 0, item = this.props["item" + i];
            item;
            item = this.props["item" + ++i]
        ) {
            j.push(item)
        }
        for (let i = 0; i < j.length; i++) {
            let item = j[i]
            items.push(
                <label
                    key={i}
                    style={{
                        flex: "auto 1 1",
                        textAlign: "center",
                        lineHeight: "20px",
                        padding: "8px 16px",
                        border: "1px solid #07c",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        ...(i == 0
                            ? { borderRadius: "2px 0 0 2px" }
                            : { borderLeft: 0 }),
                        ...(i == j.length - 1
                            ? { borderRadius: "0 2px 2px 0" }
                            : {}),
                        ...(i == this.state.select
                            ? { backgroundColor: "#07c", color: "#fff" }
                            : {}),
                    }}
                >
                    <input
                        type="radio"
                        checked={this.state.select === i}
                        name="radio"
                        value={item}
                        style={{
                            boxSizing: "border-box",
                            height: 0,
                            width: 0,
                            margin: 0,
                            opacity: 0,
                            overflow: "hidden",
                        }}
                        onChange={e => {
                            this.setState({ select: i })
                            if (this.props.onChange) this.props.onChange(e)
                        }}
                    />
                    <span>{item}</span>
                </label>
            )
        }
        return (
            <div
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#07c",
                    borderRadius: "2px",
                    backgroundColor: "white",
                    ...this.props.style,
                }}
            >
                {items}
            </div>
        )
    }
}

export class Info extends React.Component {
    static defaultProps = {
        width: 500,
        height: 74,
        text: "In order to proceed, please verify your email address ",
    }
    static propertyControls = {
        title: { type: ControlType.String, title: "Title" },
        text: { type: ControlType.String, title: "Text" },
        link: { type: ControlType.String, title: "Link" },
    }

    render() {
        return (
            <section
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    background: "rgb(255, 250, 235)",
                    height: "100%",
                    padding: "24px",
                    border: "1px solid #ffd257",
                    borderRadius: "2px",
                    ...this.props.style,
                }}
            >
                <svg
                    width="24"
                    viewBox="0 0 128 128"
                    fill="#e2aa11"
                    style={{ flexShrink: "0", marginRight: "16px" }}
                >
                    <path d="M49.4 85l4.2-17.2c.7-2.7.8-3.8 0-3.8a29 29 0 0 0-8.8 3.8l-1.8-3A48 48 0 0 1 66.7 53c3.7 0 4.3 4.3 2.5 11l-5 18c-.7 3.3-.3 4.3.5 4.3a19 19 0 0 0 8.2-4L75 85c-8.6 8.7-18.2 12-21.8 12s-6.4-2.3-3.8-12zM75 36a9.2 9.2 0 0 1-9.2 9c-4.4 0-7-2.7-6.8-7a9 9 0 0 1 9.1-9c4.6 0 6.9 3.2 6.9 7z" />
                    <path d="M62 16a48 48 0 1 1-48 48 48 48 0 0 1 48-48m0-8a56 56 0 1 0 56 56A56 56 0 0 0 62 8z" />
                </svg>
                <div style={{ flex: "auto 1 1" }}>
                    {this.props.title && (
                        <Text
                            type="heading"
                            style={{
                                fontWeight: "700",
                                display: "block",
                                marginBottom: "8px",
                            }}
                            text={this.props.title}
                        />
                    )}
                    <Text
                        text={this.props.text}
                        style={{ display: "block", marginTop: "2px" }}
                    />
                    {this.props.link && (
                        <Text
                            text={this.props.link}
                            style={{
                                display: "block",
                                color: "#07c",
                                marginTop: "16px",
                            }}
                        />
                    )}
                </div>
            </section>
        )
    }
}
