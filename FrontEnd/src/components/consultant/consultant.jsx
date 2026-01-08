import ConsultantCard from "./ConsultantCard";
import imageg1 from "../../Assete/consultant/imageg1.webp"
import imageg5 from "../../Assete/consultant/imageg5.jpg"
import imageg7 from "../../Assete/consultant/imageg7.jpg"
import imageb2 from "../../Assete/consultant/image2.jpeg"
import imageb3 from "../../Assete/consultant/imageb3.jpeg"
import imageb6 from "../../Assete/consultant/imageb6.jpg"

const consultants = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    education: "B.Tech, M.Tech",
    degree: "Software Engineering Professor",
    image: imageb2, // Boy
    rating: 4.8,
    description:
      "A renowned professor with 15 years of experience in full-stack development.",
    price: 1200,
    chatCallPrice: 900,
    videoMeetPrice: 1600,
  },
  {
    id: 2,
    name: "Dr. Pooja Verma",
    education: "PhD in AI & ML",
    degree: "AI/ML Researcher",
    image: imageg1, // Girl
    rating: 4.7,
    description:
      "A specialist in artificial intelligence, deep learning, and neural networks with extensive research background.",
    price: 1500,
    chatCallPrice: 1000,
    videoMeetPrice: 1800,
  },
  {
    id: 3,
    name: "Prof. Aman Gupta",
    education: "B.Tech, M.S.",
    degree: "Cybersecurity Analyst & Lecturer",
    image: imageb3, // Boy
    rating: 4.9,
    description:
      "A cybersecurity expert and lecturer, experienced in ethical hacking and data protection.",
    price: 1300,
    chatCallPrice: 950,
    videoMeetPrice: 1700,
  },
  {
    id: 4,
    name: "Dr. Neha Kapoor",
    education: "B.Tech in Data Science",
    degree: "Data Science Professor",
    image: imageg5, // Girl
    rating: 4.6,
    description:
      "A data analytics and machine learning expert, committed to cutting-edge research and teaching.",
    price: 1400,
    chatCallPrice: 1000,
    videoMeetPrice: 1750,
  },
  {
    id: 5,
    name: "Prof. Vikram Singh",
    education: "B.Tech in Robotics",
    degree: "Robotics & Automation Specialist",
    image: imageb6, // Boy
    rating: 4.7,
    description:
      "An expert in AI-powered robotics, automation, and industrial applications with a strong academic background.",
    price: 1600,
    chatCallPrice: 1100,
    videoMeetPrice: 1900,
  },
  {
    id: 6,
    name: "Dr. Anjali Mehta",
    education: "B.Tech in Electrical Engineering",
    degree: "Embedded Systems Professor",
    image: imageg7, // Girl
    rating: 4.8,
    description:
      "Specialized in IoT, microcontrollers, and embedded software development with years of teaching experience.",
    price: 1100,
    chatCallPrice: 850,
    videoMeetPrice: 1600,
  },
];

export default function Consultant({user}) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Meet Our Expert Consultants
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Get expert guidance from top professionals in their respective fields.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {consultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} user={user}/>
        ))}
      </div>
    </div>
  );
}
