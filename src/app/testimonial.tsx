"use client";

import NavigationButtons from "@/components/NavigationButtons";
import TestimonialCard from "@/components/TestimonialCard";
import { generateTestimonials } from "@/fake/generateTestimonials";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  rating: number;
  content: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTestimonials(generateTestimonials(10));
  }, []);

  useEffect(() => {
    const updateCarouselScroll = () => {
      if (carouselRef.current) {
        const cardElements = carouselRef.current.querySelectorAll("div");
        const cardWidth = cardElements[0]?.offsetWidth || 0;
        const containerWidth = carouselRef.current.offsetWidth;

        const scrollLeft =
          cardWidth * currentIndex - (containerWidth - 20 - cardWidth) / 2;

        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    };

    updateCarouselScroll();
    window.addEventListener("resize", updateCarouselScroll);

    return () => {
      window.removeEventListener("resize", updateCarouselScroll);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <div className="z-10 mb-8">
          <h2 className="text-3xl text-center font-bold">
            What our users are saying
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4 min-h-[420px] h-auto items-center"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
                content={testimonial.content}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
