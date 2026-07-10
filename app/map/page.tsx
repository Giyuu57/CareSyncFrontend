"use client";
import dynamic from 'next/dynamic';
import { useRequireAuth } from '@/utils/useRequireAuth';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function MapPage() {
  const authChecked = useRequireAuth();
  if (!authChecked) {
    return null;
  }
  return <Map />;
}