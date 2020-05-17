import { Override } from "framer"

export function onButtonClick(): Override {
    return {
        onClick: () => {
            console.log("Click!")
        },
    }
}

export function setButtonDecorators(): Override {
    return {
        startDecorator: "ZoomOut",
        endDecorator: "ZoomIn",
    }
}

export function getSliderValue(): Override {
    return {
        onValueChange: (value: number) => {
            console.log(value)
        },
    }
}

export function setSliderValue(): Override {
    return {
        value: 0,
    }
}

export function getInputValue(): Override {
    return {
        onValueChange: (value: string) => {
            console.log(value)
        },
    }
}

export function setInputValue(): Override {
    return {
        value: "Value",
    }
}

export function getSelectValue(): Override {
    return {
        onValueChange: (value: string) => {
            console.log(value)
        },
    }
}

export function setProgressValue(): Override {
    return {
        value: 1,
    }
}

export function setCardContent(): Override {
    return {
        title: "Title",
        footer: "Footer",
    }
}

export function setBackgroundColor(): Override {
    return {
        backgroundColor: "#09f",
    }
}

export function setColor(): Override {
    return {
        color: "#09f",
    }
}

export function setIntent(): Override {
    return {
        intent: "secondary",
    }
}

export function setPattern(): Override {
    return {
        pattern: "secondary",
    }
}
