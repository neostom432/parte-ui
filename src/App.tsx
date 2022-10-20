import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import reactLogo from './assets/react.svg';
import GlobalStyle from './styles/global';
import { theme, ThemeType } from './styles/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme as ThemeType}>
      <div className="App">
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
