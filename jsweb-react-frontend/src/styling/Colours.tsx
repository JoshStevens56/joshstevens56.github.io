interface colours {
    primary: string,
    secondary: string,
    tertiary: string,
    background: string,
}

interface extraColours extends colours{
    extra1: string,
    extra2: string
}

export const themeColours: extraColours = {
    primary: "#FF9456",
    secondary: "#323F49",
    tertiary:"#D85A62",
    background:"",
    extra1:"#6AB97B",
    extra2:"#2D8CC5"
}