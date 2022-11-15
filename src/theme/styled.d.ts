import 'styled-components'

declare module 'styled-components' {

    export interface DefaultTheme {

        colors: { 
            bg: string,
            secondary: string,
            gr: string
        }
    }
}