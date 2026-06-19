export type NavLink = { id: string; label: string }

export type Artist = {
  name: string
  role: string
  styles: string[]
  instagram?: string
  portrait?: string
  bio: string
}

export type GalleryItem = {
  src: string
  alt: string
  style: string
  span?: 'tall' | 'wide'
}

export type Service = {
  title: string
  description: string
  items: string[]
}

export type Review = {
  name: string
  text: string
  source: string
}

export const studio = {
  name: 'Obsi Tattoo Studio',
  tagline: 'Custom ink, fine-line art, and dark aesthetics, done with precision.',
  shortPitch:
    'An award-winning rooftop tattoo and piercing studio on Maginhawa Street, where personal stories come alive through art, and every piece begins with a conversation.',
  rating: '5.0',
  reviewCount: '95',
  phoneDisplay: '0956 904 3055',
  phoneHref: 'tel:+639569043055',
  hours: 'Opens 10:00 AM daily · Walk-ins welcome',
  hoursShort: 'Open daily from 10 AM',
  email: 'creatives@obsitattoostudio.com',
  emailHref: 'mailto:creatives@obsitattoostudio.com',
  addressLine1: '120-A Maginhawa St., 3rd Floor Rooftop',
  addressLine2: 'Brgy. Teachers Village East, Diliman',
  addressLine3: 'Quezon City, 1101, Philippines',
  addressFull:
    '120-A Maginhawa St, 3rd Floor Rooftop, Teachers Village East, Diliman, Quezon City, 1101 Metro Manila',
  instagram: 'https://www.instagram.com/obsitattoostudio/',
  instagramHandle: '@obsitattoostudio',
  instagramFollowers: '9.8K+',
  facebook: 'https://www.facebook.com/obsitattoostudio',
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Obsi+Tattoo+Studio+Maginhawa+Quezon+City',
  googleReviewsLink:
    'https://www.google.com/maps/search/?api=1&query=Obsi+Tattoo+Studio+Maginhawa+Quezon+City',
  mapEmbed:
    'https://www.google.com/maps?q=120-A%20Maginhawa%20St%2C%20Teachers%20Village%20East%2C%20Diliman%2C%20Quezon%20City&output=embed',
}

export const press = {
  outlet: 'Manila Standard',
  date: 'December 2025',
  openingNote: 'Grand opening VIP night, December 8, 2025',
  url: 'https://manilastandard.net/spotlight/314680148/obsi-tattoo-studio-unveils-new-premium-space-in-quezon-city.html',
  quote:
    'Obsi Tattoo Studio is more than just a place to get inked, it’s a space where personal stories come alive through art.',
  quoteAttribution: 'Draz Palaming, Founder',
}

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'artists', label: 'Artists' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'services', label: 'Services' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

export const artistsNote =
  'Obsi was founded by award-winning artists who wanted a space as considered as the work that leaves it. Follow @obsitattoostudio to see current portfolios and match with the right artist for your piece.'

export const artists: Artist[] = [
  {
    name: 'Draz Palaming',
    role: 'Founder & Lead Artist',
    styles: ['Realism', 'Blackwork', 'Dark aesthetics', 'Custom'],
    instagram: '@drazpalaming',
    bio: 'Award-winning founder of Obsi. A resident artist between London and Quezon City, Draz builds bold, story-driven pieces, from photoreal portraits to large-scale blackwork sleeves.',
  },
  {
    name: 'Janessa Palaming',
    role: 'Founder & Artist',
    styles: ['Color realism', 'Illustrative', 'Fine line'],
    instagram: '@janessapalaming',
    bio: 'Co-founder of Obsi, known for vivid color realism and illustrative work. Clients consistently praise the craftsmanship and the calm, welcoming way she brings an idea to skin.',
  },
]

export const gallery: GalleryItem[] = [
  {
    src: '/assets/gallery-02.jpg',
    alt: 'Color realism portrait tattoo by Obsi Tattoo Studio',
    style: 'Realism',
    span: 'tall',
  },
  {
    src: '/assets/gallery-05.jpg',
    alt: 'Neo-traditional color tiger tattoo by Obsi Tattoo Studio',
    style: 'Neo-traditional',
  },
  {
    src: '/assets/gallery-06.jpg',
    alt: 'Blackwork religious sleeve tattoo by Obsi Tattoo Studio',
    style: 'Blackwork',
    span: 'tall',
  },
  {
    src: '/assets/gallery-04.jpg',
    alt: 'Color realism gaming-themed sleeve tattoo by Obsi Tattoo Studio',
    style: 'Realism',
  },
  {
    src: '/assets/gallery-fineline.jpg',
    alt: 'Fine-line botanical tattoo in the Obsi Tattoo Studio style',
    style: 'Fine line',
  },
  {
    src: '/assets/gallery-07.jpg',
    alt: 'Helix ear piercing by Obsi Tattoo Studio',
    style: 'Piercing',
  },
  {
    src: '/assets/gallery-ornamental.jpg',
    alt: 'Ornamental blackwork mandala tattoo in the Obsi Tattoo Studio style',
    style: 'Ornamental',
    span: 'wide',
  },
  {
    src: '/assets/gallery-lettering.jpg',
    alt: 'Fine-line script lettering tattoo in the Obsi Tattoo Studio style',
    style: 'Lettering',
  },
]

export const services: Service[] = [
  {
    title: 'Custom Tattooing',
    description:
      'Bespoke pieces designed around your story: custom ink, fine-line art, and dark aesthetics, done with precision. Every booking begins with a consultation to refine concept, placement, and scale.',
    items: [
      'Color & black-and-grey realism',
      'Blackwork & ornamental',
      'Fine line & illustrative',
      'Neo-traditional & lettering',
      'Cover-ups & reworks',
    ],
  },
  {
    title: 'Piercing',
    description:
      'Precise, hygienic body piercing using implant-grade jewelry. Our piercer walks you through placement, healing, and the right pieces for your anatomy.',
    items: [
      'Ear curation & helix',
      'Nostril & septum',
      'Navel & surface',
      'Implant-grade jewelry',
      'Jewelry changes & downsizing',
    ],
  },
  {
    title: 'Consultation & Aftercare',
    description:
      'Walk in to talk through ideas, or book a sit-down to plan larger work. Every client leaves with clear aftercare guidance and on-call support through healing.',
    items: [
      'Free walk-in consultations',
      'Design previews before the session',
      'Single-use, sterilized equipment',
      'Written + verbal aftercare',
      'Touch-up policy on healed work',
    ],
  },
]

export const reviews: Review[] = [
  {
    name: 'Demmy Lynn P.',
    text: 'Thank you so much for the fantastic work on my tattoo. I’m thrilled with the result and keep admiring the craftsmanship. The studio is so cozy and thoughtfully designed, with a welcoming vibe that immediately puts you at ease.',
    source: 'Google · Local Guide',
  },
  {
    name: 'Google Reviewer',
    text: 'Beautiful new rooftop studio: clean, professional, and the artists really listen to your idea before they start.',
    source: 'Google Review',
  },
  {
    name: 'Google Reviewer',
    text: 'Fine-line work is incredibly precise, and the whole experience felt premium from consultation to aftercare. Worth the trip to Maginhawa.',
    source: 'Google Review',
  },
  {
    name: 'Google Reviewer',
    text: 'Got a tattoo and an ear piercing in one visit. Painless, hygienic, and the aftercare instructions were super clear. Easily a 5-star spot.',
    source: 'Google Review',
  },
]
