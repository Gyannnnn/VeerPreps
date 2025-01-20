import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      {/* Meta Title */}
      <title>iitkirba - Previous Year Questions & Notes for VSSUT Burla</title>
      
      {/* Meta Description */}
      <meta 
        name="description" 
        content="Access previous year question papers and handwritten notes for VSSUT Burla (formerly UCE Burla) including mid-semester, end-semester, back papers, and supplementary papers. Login to download and save content for free on iitkirba.xyz." 
      />
      
      {/* Keywords */}
      <meta 
        name="keywords" 
        content="VSSUT Burla previous year questions, UCE Burla question papers, VSSUT notes, mid-semester papers, end-semester papers, back papers, supplementary papers, handwritten notes, VSSUT student resources, iitkirba.xyz" 
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.iitkirba.xyz" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="iitkirba - VSSUT Burla Question Papers & Notes" />
      <meta 
        property="og:description" 
        content="Find and download previous year question papers and notes for VSSUT Burla. Get access to mid-semester, end-semester, back, and supplementary papers for free." 
      />
      <meta property="og:url" content="https://www.iitkirba.xyz" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.iitkirba.xyz/og-image.jpg" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="iitkirba - VSSUT Burla Question Papers & Notes" />
      <meta 
        name="twitter:description" 
        content="Access VSSUT Burla's previous year question papers and notes. Download mid-semester, end-semester, back, and supplementary papers for free." 
      />
      <meta name="twitter:image" content="https://www.iitkirba.xyz/twitter-image.jpg" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Robots Meta Tag */}
      <meta name="robots" content="index, follow" />

      {/* Additional Meta Tags */}
      <meta name="author" content="iitkirba" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
