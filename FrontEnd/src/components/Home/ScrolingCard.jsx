import React from 'react';
import './ScrolingCard.css';
import CustomWebsiteDevelopmentCard from './CustomWebsiteDevelopmentCard';
import app from '../../Asset/imagesWeb/scrolingCard/Rectangle1.png';
import digital from '../../Asset/imagesWeb/scrolingCard/Rectangle2.png';
import whatapp from '../../Asset/imagesWeb/scrolingCard/Rectangle3.png';
import anylesis from '../../Asset/imagesWeb/scrolingCard/Rectangle4.png';
import bigData from '../../Asset/imagesWeb/scrolingCard/Rectangle5.png';
import website from '../../Asset/imagesWeb/scrolingCard/Rectangle6.png';

export default function ScrolingCard() {
  const cardDetail = [
    {
      title: "Custom Website Development",
      description:
        "Unlock your potential by learning how to develop custom websites. This guidance covers essential design principles, coding techniques, and modern frameworks to help you build professional websites from scratch.",
      bulletPoints: [
        "We craft designs and designs tailored to your unique business needs.",
        "Our skilled professionals ensure innovation and precision in every project.",
        "Trusted by industries to deliver results that drive growth.",
      ],
      image: website,
      bgColor: "yellow", // Yellow background
    },
    {
      title: "Custom Application Development",
      description:
        "Gain practical insights and step-by-step guidance on developing custom applications. Learn about application architecture, coding standards, and testing techniques to bring your innovative ideas to life.",
      bulletPoints: [
        "Custom applications tailored to your business, driving success.",
        "Utilizing the latest tech to take your business ahead and scalable.",
        "Effortlessly integrating with your systems for smooth and efficient workflows.",
      ],
      image: app,
      bgColor: "red", // Red background
    },
    {
      title: "Digital Marketing Services",
      description:
        "Explore digital marketing fundamentals with hands-on student guidance. Learn effective strategies for social media, SEO, and content marketing to build a strong personal brand.",
      bulletPoints: [
        "We focus on driving meaningful growth and long-term success for your business.",
        "Our creative approach ensures your brand stands out in the crowded digital space.",
        "We transform insights into impactful campaigns that deliver results.",
      ],
      image: digital,
      bgColor: "pink", // Pink background
    },
    {
      title: "WhatsApp Business API Services",
      description:
        "Understand the integration of WhatsApp Business APIs through student-focused tutorials. Learn how to implement, configure, and optimize communication channels for enhanced connectivity.",
      bulletPoints: [
        "Establish direct connections with your customers through personalized support.",
        "Our innovative approach ensures your brand stands out in the crowded digital space.",
        "Expand your business with flexible API features that grow with you.",
      ],
      image: whatapp,
      bgColor: "orange", // Orange background
    },
    {
      title: "Power & BI Visualization Services",
      description:
        "Master data visualization with student-centric guidance on using Power BI. Learn to transform complex data into interactive dashboards that reveal key insights.",
      bulletPoints: [
        "Transform raw data into interactive visualizations that reveal key business trends.",
        "Tailor-made dashboards provide real-time data for smart decision-making.",
        "Deliver clear, actionable insights that drive business success.",
      ],
      image: bigData,
      bgColor: "blue", // Blue background
    },
    {
      title: "Cloud Data Analytics Services",
      description:
        "Develop your skills in cloud data analytics with targeted student guidance. Learn to harness cloud platforms, perform real-time analysis, and make data-driven decisions.",
      bulletPoints: [
        "Modern cloud solutions drive data insights that empower smarter decision-making.",
        "Real-time analytics ensure you’re always ahead of your industry curve.",
        "Custom strategies provide data solutions that fuel business growth.",
      ],
      image: anylesis,
      bgColor: "green", // Green background
    },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-8">
        OUR PARTNERS
      </h1>

      <p className="w-1/2 m-auto text-center text-xl text-gray-600 mb-8">
        Our strategic partners help us deliver unmatched business value and
        unique experiences.
      </p>
      <div className="container">
        <ul id="cards">
          {cardDetail.map((card, index) => (
            <li className="card" key={index} id={`card${index + 1}`}>
              <CustomWebsiteDevelopmentCard
                title={card.title}
                description={card.description}
                bulletPoints={card.bulletPoints}
                image={card.image}
                bgColor= {card.bgColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
