import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme, ThemeType } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme as ThemeType}>
      <div className="App">
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
