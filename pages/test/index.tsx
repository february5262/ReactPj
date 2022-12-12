import React, { ReactElement } from 'react';

import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
    name : 'Jhon Do',
  },
});

interface Props {
  name : string
}

const TestPage: NextPage<Props> = ({ name } ): ReactElement => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="Test Page Description" />
      </Head>
      <div id="TestPage">
          Test Page : {name}
        <Link href="/sample">{t('common.label.button.save')}</Link>
      </div>
    </>
  );
};
export default TestPage;

