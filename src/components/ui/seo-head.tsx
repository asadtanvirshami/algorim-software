import Head from 'next/head';
import React, { memo } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  image?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@algorim" />
      <meta name="twitter:image" content={image || ''} />
      <meta name="twitter:domain" content="algorim.io" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default memo(SeoHead);
