import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;

            secondary: string;
            text: {
                primary: string;
                secondary: string;
            };
            background: string;
            sucess: string;
            error: string;
            warning: string;
        };
    }
}
