import React from 'react'
import img1 from '/public/slaaqpImages/Img1.jpeg';
import img2 from '/public/slaaqpImages/QCCAwarenessSessionNew.png';
import img3 from '/public/slaaqpImages/GreenProductivity2022AwarenessSession.png';
import NewsEvents from '../components/organisms/NewsEvents';

const eventData = [
    {
      date: '25 October',
      image: img1,
      title: 'Boost Efficiency Enhance Productivity Improve Quality Standards',
      datetime: '25th October 2025 @ 08:30 am to 5.00pm',
      location: 'Postgraduate Institute of Management (PIM)',
    },
    {
      date: '31 January',
      image: img2,
      title: 'QCC Awareness Program',
      datetime: '31st January 2024 at 08:30 am to 5.00 pm',
      location: 'Postgraduate Institute of Management (PIM)',
    },
    {
      date: '03 January',
      image: img3,
      title: 'GP Awards 2022 Awareness',
      datetime: 'January 03 at 10:00 am to 12.00 pm',
      location: 'Online, Via Zoom',
    },
  ];

function EventsSection() {
  return (
    <div>
        <NewsEvents events={eventData} />
    </div>
  )
}

export default EventsSection