import {faker} from '@faker-js/faker';
import img1 from '@assets/reviews/1.webp';
import img2 from '@assets/reviews/2.webp';
import img3 from '@assets/reviews/3.webp';
import img4 from '@assets/reviews/4.webp';
import img5 from '@assets/reviews/5.webp';
import img6 from '@assets/reviews/6.webp';
import img7 from '@assets/reviews/7.webp';
import img8 from '@assets/reviews/8.webp';

const reviews = [
    {
        id: 'review-1',
        name: 'J.',
        lastName: 'Davidson',
        email: 'jdavidson@domain.com',
        avatar: img1,
        rating: 4,
        createdAt: faker.date.recent(),
        comment: faker.lorem.paragraph()
    },
    {
        id: 'review-2',
        name: 'Mark',
        lastName: 'Vallance',
        email: 'mark@domain.com',
        avatar: img2,
        rating: 2,
        createdAt: faker.date.recent(),
        comment: faker.lorem.sentence()
    },
    {
        id: 'review-3',
        name: 'Sam',
        lastName: 'Lincoln',
        email: 'sam@domain.com',
        avatar: img3,
        rating: 5,
        createdAt: faker.date.recent(),
        comment: faker.lorem.paragraph()
    },
    {
        id: 'review-4',
        name: 'Helen',
        lastName: 'Rogers',
        email: 'helen@domain.com',
        avatar: img4,
        rating: 3.5,
        createdAt: faker.date.recent(),
        comment: faker.lorem.paragraph()
    },
    {
        id: 'review-5',
        name: 'Rita',
        lastName: 'Amber',
        email: 'rita@domain.com',
        avatar: img5,
        rating: 4.5,
        createdAt: faker.date.recent(),
        comment: faker.lorem.sentence()
    },
    {
        id: 'review-6',
        name: 'Lisa',
        lastName: 'Newman',
        email: 'newman@domain.com',
        avatar: img6,
        rating: 5,
        createdAt: faker.date.recent(),
        comment: faker.lorem.paragraph()
    },
    {
        id: 'review-7',
        name: 'Eva',
        lastName: 'Peters',
        email: 'peters@domain.com',
        avatar: img7,
        rating: 3,
        createdAt: faker.date.recent(),
        comment: faker.lorem.sentence()
    },
    {
        id: 'review-8',
        name: 'Grace',
        lastName: 'Mitchell',
        email: 'mitchell@domain.com',
        avatar: img8,
        rating: 1,
        createdAt: faker.date.recent(),
        comment: faker.lorem.paragraph()
    }
]

export default reviews