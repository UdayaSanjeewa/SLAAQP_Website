import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface EventCardProps {
  date: string;
  image: StaticImageData;
  title: string;
  datetime: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, image, title, datetime, location }) => (
  <div className="bg-white rounded-lg overflow-hidden max-w-sm">
    <div className="relative mt-16">
      <Image src={image} alt={title} className="w-full h-auto" />
      <div className="absolute -top-10 left-0 bg-[#f7dc79] text-slate-800 font-semibold px-7 py-3 text-lg">
        {date}
      </div>
    </div>
    <div className="p-4 flex flex-col items-center lg:items-start">
      <h3 className="text-2xl font-semibold text-purple-800 mb-2 underline md:text-center lg:text-left">{title}</h3>
      <p className="text-lg text-gray-700 mb-1 text-center lg:text-left">{datetime}</p>
      <p className="text-lg text-gray-600">{location}</p>
    </div>
  </div>
);

interface NewsEventsProps {
  events: EventCardProps[];
}

const NewsEvents: React.FC<NewsEventsProps> = ({ events }) => {
  return (
    <section className="py-10 px-4 bg-[#fafafa]">
      <h2 className="text-2xl font-bold text-center text-purple-900">NEWS & EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default NewsEvents;
