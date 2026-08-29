'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from './BootScreen';
import LoginScreen from './LoginScreen';

export default function BootScreenWrapper({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<'boot' | 'login' | 'desktop'>('boot');

  return (
    <>
      {step === 'desktop' && children}
      <AnimatePresence>
        {step === 'boot' && (
          <BootScreen key="boot" onComplete={() => setStep('login')} />
        )}
        {step === 'login' && (
          <LoginScreen key="login" onLogin={() => setStep('desktop')} />
        )}
      </AnimatePresence>
    </>
  );
}
