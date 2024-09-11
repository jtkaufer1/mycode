export const generateProductSEO = ({ title, description, url, image }) => ({
  title: `${title} - Quantum Store`,
  description,
  openGraph: {
    title: `${title} - Quantum Store`,
    description,
    url,
    images: [
      {
        url: image,
        width: 800,
        height: 600,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@quantumstore',
    site: '@quantumstore',
    cardType: 'summary_large_image',
  },
});

