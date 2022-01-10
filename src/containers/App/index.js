import { ThemeProvider } from '@mui/material/styles';
import TaskBoard from '../TaskBoard';
import theme from '../../common/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}


export default App;
