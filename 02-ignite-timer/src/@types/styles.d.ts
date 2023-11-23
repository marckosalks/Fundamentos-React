import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// acessar e guardadr dentro de uma variavel
type ThemeType = typeof defaultTheme

// sobreescrever tipagens já definidas
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
