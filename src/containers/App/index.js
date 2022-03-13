import { ThemeProvider } from '@mui/material/styles';
import TaskBoard from '../TaskBoard';
import Dashboard from '../../components/Dashboard/index';
import theme from '../../common/theme';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading/index';
import GlobalModal from '../../components/GlobalModal';
import AdminLayoutRoute from '../../common/layout/AdminLayoutRoute/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
   return (
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalLoading />
            <GlobalModal />
            <ToastContainer />

            <Routes>
               <Route path='/' element={<Dashboard />}>
                  <Route index element={<TaskBoard />} />
                  <Route path='admin' element={<AdminLayoutRoute />} />
               </Route>
            </Routes>

         </ThemeProvider>
      </BrowserRouter>
   );
}


export default App;


