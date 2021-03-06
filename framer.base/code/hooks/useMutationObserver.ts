import { useState, useEffect } from "react"
import { noop } from "framer-base"

export const useMutationObserver = (
    node: HTMLElement,
    options: MutationObserverInit,
    fn: (mutations?: MutationRecord[]) => any = noop
) => {
    const [state, setState] = useState(null)
    const mutationObserver = new MutationObserver(mutations => {
        setState(fn(mutations))
    })

    useEffect(() => {
        if (!node) return

        mutationObserver.observe(node, options)

        return () => {
            mutationObserver.disconnect()
        }
    }, [node, options])

    return state
}
