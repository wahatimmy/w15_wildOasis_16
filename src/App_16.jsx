import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import LandingsStatic_16 from './pages/open/pages/LandingStatic_16';
import Landing_16 from './pages/open/pages/Landing_16';

import GlobalStyles from './styles/GlobalStyles';

import {
  Account_16,
  Bookings_16,
  Cabins_16,
  Dashboard_16,
  Login_16,
  PageNotFound_16,
  Settings_16,
  NewUsers_16,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  { path: '/', element: <Landing_16 /> },
  { path: '/landing', element: <Landing_16 /> },
  { path: '/login', element: <Login_16 /> },
  {
    path: '/', element: <AppLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard_16 />, },
      { path: 'bookings', element: <Bookings_16 />, },
      { path: 'bookings/:bookingId', element: <Bookings_16 />, },
      { path: 'cabins', element: <Cabins_16 />, },
      { path: 'users', element: <NewUsers_16 />, },
      { path: 'settings', element: <Settings_16 />, },
      { path: 'account', element: <Account_16 />, },
    ],
  },
]);

const App_16 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 2000, },
          error: { duration: 3000, },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_16;