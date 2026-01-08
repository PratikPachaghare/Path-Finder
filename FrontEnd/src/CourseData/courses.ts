export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image: string;
  category: string;
  rating: number;
  students: number;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Learn to build complete web applications with React, Node.js, Express, and MongoDB. Master both frontend and backend development.",
    duration: "16 weeks",
    level: "Intermediate",
    price: 2999,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Web Development",
    rating: 4.8,
    students: 12450
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    description: "Understand the core concepts of machine learning and implement algorithms from scratch using Python and popular libraries.",
    duration: "12 weeks",
    level: "Intermediate",
    price: 2899,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Data Science",
    rating: 4.7,
    students: 8320
  },
  {
    id: 3,
    title: "iOS App Development with Swift",
    description: "Build iOS applications using Swift and Xcode. Learn UI design principles, data persistence, and app deployment.",
    duration: "10 weeks",
    level: "Intermediate",
    price: 2499,
    image: "https://images.unsplash.com/photo-1575909812264-6902b55846ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Mobile Development",
    rating: 4.6,
    students: 6780
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    description: "Learn to identify and mitigate security threats. Covers network security, encryption, ethical hacking, and security best practices.",
    duration: "8 weeks",
    level: "Beginner",
    price: 1999,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Security",
    rating: 4.9,
    students: 9120
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services (AWS) and learn to deploy scalable, highly available applications in the cloud.",
    duration: "6 weeks",
    level: "Intermediate",
    price: 2799,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Cloud Computing",
    rating: 4.7,
    students: 7650
  },
  {
    id: 6,
    title: "Blockchain Development",
    description: "Learn to build decentralized applications (DApps) using blockchain technology, smart contracts, and Web3 integration.",
    duration: "10 weeks",
    level: "Advanced",
    price: 2999,
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Blockchain",
    rating: 4.5,
    students: 4320
  },
  {
    id: 7,
    title: "DevOps Engineering",
    description: "Master continuous integration, continuous deployment, containerization, and infrastructure as code using modern DevOps tools.",
    duration: "8 weeks",
    level: "Advanced",
    price: 2899,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "DevOps",
    rating: 4.8,
    students: 5890
  },
  {
    id: 8,
    title: "Data Visualization with D3.js",
    description: "Create interactive and dynamic data visualizations for the web using D3.js and modern JavaScript.",
    duration: "6 weeks",
    level: "Intermediate",
    price: 1799,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Data Science",
    rating: 4.6,
    students: 3450
  },
  {
    id: 9,
    title: "Game Development with Unity",
    description: "Build cross-platform games using Unity and C#. Learn game physics, animations, and publishing to multiple platforms.",
    duration: "12 weeks",
    level: "Beginner",
    price: 2499,
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Game Development",
    rating: 4.7,
    students: 8760
  },
  {
    id: 10,
    title: "Artificial Intelligence Fundamentals",
    description: "Explore the foundations of AI including neural networks, natural language processing, and computer vision applications.",
    duration: "14 weeks",
    level: "Advanced",
    price: 2999,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Artificial Intelligence",
    rating: 4.9,
    students: 10230
  },
  {
    id: 11,
    title: "UI/UX Design Principles",
    description: "Learn user interface and user experience design principles. Master design tools like Figma and implement responsive designs.",
    duration: "8 weeks",
    level: "Beginner",
    price: 1999,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Design",
    rating: 4.8,
    students: 7890
  },
  {
    id: 12,
    title: "Python for Data Science",
    description: "Master Python programming for data analysis, visualization, and machine learning using pandas, NumPy, and scikit-learn.",
    duration: "10 weeks",
    level: "Beginner",
    price: 2299,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Data Science",
    rating: 4.9,
    students: 15670
  }
];