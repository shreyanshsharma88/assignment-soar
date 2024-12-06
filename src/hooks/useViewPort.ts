import { useMediaQuery } from "@mui/material"

export const useViewPort = () => {
    const isMobile = useMediaQuery((theme) =>{
        return theme.breakpoints.down('sm')
    })
    const isDesktop = useMediaQuery((theme) =>{
        return theme.breakpoints.up('md')
    })
    return {isMobile, isDesktop}
}