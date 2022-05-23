import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import { defaultTheme } from './styles/theme';
import common from './styles/common.scss';

function App() {
  // 나중에 여러 테마 적용할 때 아래 코드 사용
  // const [theme, setTheme] = useState(defaultTheme);
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
${common}; // Reset CSS

body, button, input {
  font-family: ${props => props.theme.fontFamily.default}, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default App;
