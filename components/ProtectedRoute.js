import { useSession } from 'next-auth/react';
import AccessDenied from "../components/AccessDenied";
import { useRouter } from 'next/router';

const PUBLIC_ROUTES = ['/login', '/sign-up', '/verify-request']

export const ProtectedRoute = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const currentPath = router.asPath.split('?')[0];

    if (status === 'loading') {
      return <div id="preloader" />
    } else {
      console.log("PUBLIC ROUTES ",  currentPath, PUBLIC_ROUTES.includes(currentPath))
      if (!session && !(PUBLIC_ROUTES.includes(currentPath))) return <AccessDenied />

      return children;
    }
    
  };