import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string,
        primaryDark: string,
        primaryLight: string,
        secondary: string,
        secondaryDark: string,
        secondaryLight: string,
        background: string,
        textDark: string,
        textLight: string,
        success: string,
        error: string
    }
}
