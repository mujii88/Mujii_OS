import Desktop from '@/components/os/Desktop';
import BootScreenWrapper from '@/components/os/BootScreenWrapper';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <BootScreenWrapper>
        <Desktop />
      </BootScreenWrapper>
    </main>
  );
}
