import * as React from "react"
import { ThemeContext } from "styled-components"
import { centerLayout as CenteredWrapper } from "./centerLayout"

export default function withHOC(Component): React.FC {
    return (props: any) => {
        const themeContext = React.useContext(ThemeContext)
        return (
            <CenteredWrapper {...props}>
                <Component {...props} themeContext={themeContext} />
            </CenteredWrapper>
        )
    }
}
