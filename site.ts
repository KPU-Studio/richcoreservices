// Central business facts (NAP) — single source of truth for SEO schema,
// contact info, and footer. Update here, not in components.
export const SITE = {
  name: 'RichCore IT Services',
  legalName: 'RichCoreITServices LLC',
  shortName: 'RichCoreIT',
  url: 'https://richcoreit.net',
  description:
    'Managed IT services and helpdesk support for small businesses and public-sector organizations in Woodbridge, VA and the greater DC metro area.',
  email: 'info@richcoreit.net',
  phone: '+1 (703) 665-9101',
  phoneHref: 'tel:+17036659101',
  address: {
    locality: 'Woodbridge',
    region: 'VA',
    country: 'US',
  },
  areaServed: 'Woodbridge, Northern Virginia, and the Washington DC metro area',
  sameAs: [] as string[], // add social profile URLs when available
} as const;
