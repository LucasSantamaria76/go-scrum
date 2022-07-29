import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Login } from './views/auth/Login/Login';
import { Tasks } from './views/Tasks/Tasks';
import { Register } from './views/auth/Register/Register';
import { Donate } from './views/Donate/Donate';

const Error404 = lazy(() => import('./views/Error404/Error404'));

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to='/login' replace={true} />;
  }
  return children;
};

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <motion.div
              className='page'
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}>
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            </motion.div>
          }
        />
        <Route
          path='/donate'
          element={
            <RequireAuth>
              <motion.div
                className='page'
                initial='out'
                animate='in'
                exit='out'
                variants={pageTransition}>
                <Donate />
              </motion.div>
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='*'
          element={
            <motion.div
              className='page'
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}>
              <Suspense fallback={<>...</>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
