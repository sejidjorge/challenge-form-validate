import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: "#000c34",
        secondary: "rgba(9,29,117,1)",
        text: {
            primary: "#ECEFF1",
            secondary: "#90A4AE",
        },
        background:
            "linear-gradient(90deg, rgba(2,2,46,1) 0%, rgba(9,29,117,1) 100%)",
        warning: "#FCD34D",
        error: "#CE2704",
        sucess: "#00A75D",
    },
};

const theme = { ...defaultTheme };

export { theme };
