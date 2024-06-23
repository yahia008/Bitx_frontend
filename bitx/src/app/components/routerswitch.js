'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Spinner from './spinner'; // Adjust the import path accordingly

const RouteChangeSpinner = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Trigger loading state on route change
    handleStart();

    // Complete the loading state after a delay
    // Simulate network delay for demonstration
    const timer = setTimeout(handleComplete, 3000); // Adjust the delay as needed

    // Clean up the timer when the component unmounts or the effect re-runs
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <Spinner />}
    </>
  );
};

export default RouteChangeSpinner;
