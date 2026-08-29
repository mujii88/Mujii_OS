'use client';

import { useState } from 'react';
import BootScreen from './BootScreen';

export default function BootScreenWrapper({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  if (booted) {
    return <>{children}</>;
  }

  return (
    <>
      <BootScreen onComplete={() => setBooted(true)} />
    </>
  );
}
