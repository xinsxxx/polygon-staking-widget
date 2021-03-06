import { FC } from 'react';
import Head from 'next/head';
import ServicePage from 'components/servicePage';

const Page404: FC = () => (
  <ServicePage title="404">
    <Head>
      <title>Lido | Page Not Found</title>
    </Head>
    Page Not Found
  </ServicePage>
);

export default Page404;
