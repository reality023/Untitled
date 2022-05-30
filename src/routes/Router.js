import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Main from './Main';
import Detail from './Detail';
import Login from './Login';
import Register from './Register';
import Write from './Write';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/write/:id' element={<Write />} />
        <Route path='/write' element={<Write />} />
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
