'use client';
import '@/app/ui/global.css';
import { Metadata } from 'next';
import { Provider } from 'react-redux';
import '../i18n';
import Layout from './layout/layout';
import GlobalStore from './redux/store';

GlobalStore.InitializeGlobalStore();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={GlobalStore.store}>
      <Layout>{children}</Layout>
    </Provider>
  );
}
