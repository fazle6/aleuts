import { fakerID_ID as faker } from "@faker-js/faker";

/**
 * Generate testimonials
 * @param count Number of testimonials to generate
 * @returns Testimonials
 */
export const generateTestimonials = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    avatar: faker.image.avatarGitHub(),
    name: faker.person.fullName(),
    title: `${faker.person.jobTitle()} at ${faker.company.name()}`,
    rating: faker.number.int({ max: 5, min: 4 }),
    content: faker.lorem.sentences(3),
  }));
};
