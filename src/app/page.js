import React from 'react';
import App from '../components/App';
import { cookies } from 'next/headers';

const Page = () => {
  const cookieStore = cookies();
  const hasVisited = cookieStore.has('hasVisited');

  return <App initialHasVisited={hasVisited} />;
};

export default Page;