
export interface Destination {
  id: number;
  title: string;
  image: string;
  price: string;
  rating: number;
  location: string;
  type: 'Beach' | 'Mountain' | 'City' | 'Cultural';
  description: string;
  images: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: 'Paro Taktsang (Tiger\'s Nest)',
    image: '/images/paro.jpg',
    price: 'Nu 5,000',
    rating: 4.9,
    location: 'Paro, Bhutan',
    type: 'Cultural',
    description: 'A sacred monastery perched precariously on a cliffside, offering spiritual solace and breathtaking views.',
    images: [
      '/images/paro.jpg',
      '/images/culture_1.jpg',
      '/images/culture_2.jpg'
    ]
  },
  {
    id: 2,
    title: 'Punakha Dzong',
    image: '/images/punakha.jpg',
    price: 'Nu 4,500',
    rating: 4.8,
    location: 'Punakha, Bhutan',
    type: 'Cultural',
    description: 'The "Palace of Great Happiness", stunningly located at the confluence of the Pho Chhu and Mo Chhu rivers.',
    images: [
      '/images/punakha.jpg',
      '/images/hero_bg.jpg',
      '/images/culture_1.jpg'
    ]
  },
  {
    id: 3,
    title: 'Phobjikha Valley',
    image: '/images/phobjikha.jpg',
    price: 'Nu 6,000',
    rating: 4.7,
    location: 'Wangdue Phodrang, Bhutan',
    type: 'Mountain',
    description: 'A vast U-shaped glacial valley, famous for being the winter home of the black-necked cranes.',
    images: [
      '/images/phobjikha.jpg',
      '/images/hero_bg.jpg',
      '/images/dochula.jpg'
    ]
  },
  {
    id: 4,
    title: 'Thimphu City',
    image: '/images/thimphu.jpg',
    price: 'Nu 3,500',
    rating: 4.6,
    location: 'Thimphu, Bhutan',
    type: 'City',
    description: 'The capital city, blending ancient traditions with modern development. Home to the massive Buddha Dordenma.',
    images: [
      '/images/thimphu.jpg',
      '/images/culture_2.jpg',
      '/images/map_placeholder.png'
    ]
  },
  {
    id: 5,
    title: 'Bumthang Valley',
    image: '/images/bumthang.jpg',
    price: 'Nu 7,000',
    rating: 4.8,
    location: 'Bumthang, Bhutan',
    type: 'Cultural',
    description: 'The spiritual heartland of Bhutan, dotted with some of the kingdom\'s oldest and most sacred temples.',
    images: [
      '/images/bumthang.jpg',
      '/images/culture_1.jpg',
      '/images/hero_bg.jpg'
    ]
  },
  {
    id: 6,
    title: 'Dochula Pass',
    image: '/images/dochula.jpg',
    price: 'Nu 2,500',
    rating: 4.9,
    location: 'Thimphu-Punakha Highway, Bhutan',
    type: 'Mountain',
    description: 'A stunning mountain pass offering 360-degree panoramic views of the Himalayas and 108 memorial chortens.',
    images: [
      '/images/dochula.jpg',
      '/images/hero_bg.jpg',
      '/images/map_placeholder.png'
    ]
  }
];
