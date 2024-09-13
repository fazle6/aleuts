import { FaCalendarAlt } from "react-icons/fa";
import { faker } from "@faker-js/faker";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const BlogPage = () => {
  const blogs = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: faker.lorem.sentence(),
    date: faker.date.recent().toLocaleDateString(),
    summary: faker.lorem.paragraph(),
    author: faker.person.fullName(),
    imageUrl: faker.image.url(),
    content: faker.lorem.paragraphs(3),
  }));

  return (
    <div className="py-12">
      <div className="max-w-screen-xl px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights and articles on the latest trends in web development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white flex flex-col h-full rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
            >
              {/* Use Next.js Image component */}
              <div className="relative h-48 w-full">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">
                  {blog.title}
                </h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <FaCalendarAlt className="mr-1" />
                  <p className="text-sm">{blog.date}</p>
                </div>
                <p className="my-4 text-gray-700 flex-grow">{blog.summary}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:underline self-end"
                >
                  Read More <BsArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
