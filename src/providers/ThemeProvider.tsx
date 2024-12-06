import { ThemeProvider } from "@emotion/react"
import { customTheme } from "../theme"
import { CssBaseline } from "@mui/material"
import { PropsWithChildren } from "react"

export const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const {getTheme} = customTheme()
    return (
        <ThemeProvider theme={getTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}