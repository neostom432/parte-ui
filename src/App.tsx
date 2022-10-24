import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Button } from './components/Button';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Button />
      </div>
    </ThemeProvider>
  );
}

export default App;
