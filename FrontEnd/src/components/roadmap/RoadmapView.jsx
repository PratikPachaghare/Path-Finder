import React, { useState } from "react";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  LineChart,
  Target,
  Trophy,
  DollarSign,
  Lightbulb,
  ChevronDown,
  Youtube,
  Book,
  Factory,
  BadgeCheck,
  Building,
  TrendingUp,
  GraduationCapIcon,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { jsPDF } from "jspdf";

import { useNavigate } from "react-router-dom";
import { PlusCircle, Trash2 } from "lucide-react";


// const careerData = {
//   title: "Software Engineer",
//   description:
//     "A Software Engineer designs, develops, and tests software applications.  This career path is a good fit because it requires problem-solving skills, attention to detail, and the ability to learn new technologies quickly – all skills often highly valued in many career fields.  This is a broad suggestion due to lack of assessment data; a more specific path can be determined with further information.",
//   foundation: {
//     core_subjects: [
//       "Computer Science",
//       "Mathematics",
//       "Data Structures and Algorithms",
//     ],
//     essential_knowledge: [
//       "Object-Oriented Programming",
//       "Software Design Principles",
//       "Databases",
//     ],
//   },
//   skills: {
//     technical: [
//       "Programming (Python, Java, C++)",
//       "Software Development Life Cycle (SDLC)",
//       "Version Control (Git)",
//     ],
//     soft: ["Problem-Solving", "Communication", "Teamwork"],
//   },
//   tools_technologies: [
//     "IDE (IntelliJ, Eclipse, VS Code)",
//     "Databases (SQL, NoSQL)",
//     "Cloud Platforms (AWS, Azure, GCP)",
//   ],
//   job_roles: [
//     {
//       title: "Junior Software Engineer",
//       description:
//         "Works under the guidance of senior engineers to develop and maintain software applications.",
//       requirements: [
//         "Bachelor's degree in Computer Science or related field",
//         "Basic programming skills",
//       ],
//     },
//     {
//       title: "Software Developer",
//       description:
//         "Develops and implements software solutions based on specifications.",
//       requirements: [
//         "Proven experience in software development",
//         "Proficiency in at least one programming language",
//       ],
//     },
//   ],
//   career_growth: {
//     year1: {
//       title: "Junior Software Engineer",
//       responsibilities: [
//         "Writing code",
//         "Bug fixing",
//         "Participating in code reviews",
//       ],
//       salary_range: "60,000 - 80,000 USD",
//     },
//     year3: {
//       title: "Software Engineer",
//       responsibilities: [
//         "Leading small projects",
//         "Mentoring junior engineers",
//         "Designing software architecture",
//       ],
//       salary_range: "90,000 - 120,000 USD",
//     },
//     year5: {
//       title: "Senior Software Engineer",
//       responsibilities: [
//         "Leading large projects",
//         "Mentoring senior engineers",
//         "Architectural design and implementation",
//       ],
//       salary_range: "130,000 - 180,000 USD",
//     },
//   },
//   industries: ["Technology", "Finance", "Healthcare"],
//   top_companies: ["Google", "Microsoft", "Amazon"],
//   job_market_trends: {
//     growth_rate: "15% (Annual Growth Rate)",
//     demand: "High",
//     future_scope:
//       "The demand for software engineers is expected to continue to grow as technology continues to advance.",
//   },
//   recommended_courses: [
//     {
//       name: "Complete Python Bootcamp",
//       platform: "Udemy",
//       url: "https://www.udemy.com/course/complete-python-bootcamp/",
//       youtube: "https://www.youtube.com/results?search_query=python+tutorial",
//       duration: "6 months",
//       difficulty: "Beginner",
//     },
//     {
//       name: "Introduction to Java Programming",
//       platform: "Coursera",
//       url: "https://www.coursera.org/learn/java-programming",
//       youtube: "https://www.youtube.com/results?search_query=java+tutorial",
//       duration: "3 months",
//       difficulty: "Beginner",
//     },
//   ],
//   certifications: ["AWS Certified Developer", "CompTIA Security+"],
//   freelancing_opportunities: [
//     {
//       platform: "Upwork",
//       top_skills: ["Python", "Java", "Web Development"],
//       earning_potential: "50 - 200 USD per project",
//     },
//   ],
//   additional_resources: {
//     books: ["Clean Code", "Design Patterns"],
//     communities: ["Stack Overflow", "GitHub"],
//     events: ["Tech conferences", "Meetups"],
//   },
// };
const our_courses = [
    {
      name: "Mastering Python for AI",
      category: ["Artificial Intelligence", "Machine Learning"],
      duration: "4 months",
      url: "https://www.mense.com/courses/python-ai",
    },
    {
      name: "Full-Stack Web Development",
      category: ["Web Development", "Software Engineer"],
      duration: "6 months",
      url: "https://www.mense.com/courses/fullstack-web",
    },
    {
      name: "Java Programming Essentials",
      category: ["Software Engineer", "Java"],
      duration: "3 months",
      url: "https://www.mense.com/courses/java-essentials",
    },
    {
      name: "Data Science with Python",
      category: ["Data Science", "Machine Learning"],
      duration: "5 months",
      url: "https://www.mense.com/courses/data-science-python",
    },
  ];
const RoadmapView = ({careerData}) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();

  if(!careerData){
    console.log("roadmap not availbale go to the assiment or roadmap dashbord ");
    return
  }

  console.log("printRoadmap Data : ",careerData);
  // ouver course highli
  // Function to filter related our courses
  const getRelatedOurCourses = (careerData, ourCourses) => {
    let relatedCourses = [];
  
    ourCourses.forEach((ourCourse) => {
      if (ourCourse.category.some(category => category === careerData.title)) {
        if (!relatedCourses.includes(ourCourse)) {
          relatedCourses.push(ourCourse);
        }
      }
    });
  
    return relatedCourses;
  };
  
  // Call function with career data
  const relatedOurCourses = getRelatedOurCourses(careerData, our_courses);
 
  
const handleDownloadPDFRaw = () => {
  const doc = new jsPDF();
  
  // --- CONFIGURATION & STYLES ---
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  const centerX = pageWidth / 2;
  let yPos = 20;

  // Colors based on your screenshot themes
  const colors = {
    primary: [37, 99, 235], // Blue (Header)
    secondary: [240, 245, 255], // Light Blue bg
    text: [30, 41, 59], // Dark Slate
    subText: [100, 116, 139], // Gray
    accentPurple: [230, 230, 250], // Lavender (Foundation)
    accentGreen: [220, 252, 231], // Light Green (Skills)
    accentBlue: [224, 242, 254], // Light Blue (Roles)
    accentYellow: [254, 249, 195], // Light Yellow (Opportunities)
    line: [203, 213, 225] // Light Gray for timeline
  };

  // --- HELPER FUNCTIONS ---

  // 1. Header Function
  const drawHeader = () => {
    // Blue Banner
    doc.setFillColor(...colors.primary);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Career Roadmap", pageWidth / 2, 20, { align: "center" });
    
    // Subtitle / Branding
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Made by Path-Finder | For ${careerData.title}`, pageWidth / 2, 30, { align: "center" });
    
    // Reset positions
    yPos = 55;
    doc.setTextColor(...colors.text);
  };

  // 2. Timeline Line Drawer
  const drawTimelineLine = (start, end) => {
    doc.setDrawColor(...colors.line);
    doc.setLineWidth(1.5);
    doc.line(centerX, start, centerX, end);
  };

  // 3. Card Drawer (The main visual component)
  const drawCard = (title, items, side, bgColor, isList = true) => {
    const cardWidth = 75;
    const xOffset = side === 'left' ? centerX - cardWidth - 10 : centerX + 10;
    
    // Calculate content height to size the box dynamically
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    
    // Prepare content text
    let contentLines = [];
    if (Array.isArray(items)) {
       // Convert array to text lines
       items.forEach(item => {
         const text = isList ? `• ${item}` : item;
         const lines = doc.splitTextToSize(text, cardWidth - 10);
         contentLines = contentLines.concat(lines);
       });
    } else if (typeof items === 'string') {
       contentLines = doc.splitTextToSize(items, cardWidth - 10);
    } else if (typeof items === 'object') {
       // Handle complex objects like salary/growth
       Object.values(items).forEach(val => {
         contentLines.push(String(val));
       });
    }

    const cardHeight = 15 + (contentLines.length * 5) + 5; // Title + lines + padding

    // Check for Page Break
    if (yPos + cardHeight > pageHeight - 20) {
      doc.addPage();
      drawHeader();
      // Re-draw connection line header for new page
      yPos = 55; 
    }

    // Draw Connector Line from center to card
    doc.setDrawColor(...colors.line);
    doc.setLineWidth(1);
    doc.line(centerX, yPos + 15, side === 'left' ? xOffset + cardWidth : xOffset, yPos + 15);
    
    // Draw Center Dot
    doc.setFillColor(...colors.primary);
    doc.circle(centerX, yPos + 15, 1.5, 'F');

    // Draw Card Background (Rounded)
    doc.setFillColor(...bgColor);
    doc.setDrawColor(...colors.line);
    doc.roundedRect(xOffset, yPos, cardWidth, cardHeight, 3, 3, 'FD');

    // Draw Title
    doc.setFontSize(11);
    doc.setTextColor(...colors.primary);
    doc.setFont("helvetica", "bold");
    doc.text(title, xOffset + 5, yPos + 10);

    // Draw Content
    doc.setFontSize(9);
    doc.setTextColor(...colors.text);
    doc.setFont("helvetica", "normal");
    let textY = yPos + 18;
    
    contentLines.forEach(line => {
      doc.text(line, xOffset + 5, textY);
      textY += 5;
    });

    // Update Y position for next item
    // We move down slightly less than full height to create a staggered look if alternating
    yPos += Math.max(cardHeight, 30) + 10; 
  };

  // --- EXECUTION ---
  
  // 1. Setup Page 1
  drawHeader();

  // 2. Draw Description (Full width top section)
  doc.setFontSize(12);
  doc.setTextColor(...colors.text);
  const descLines = doc.splitTextToSize(careerData.description, pageWidth - 40);
  doc.text(descLines, 20, yPos);
  yPos += (descLines.length * 6) + 10;

  // 3. Start Timeline
  const timelineStartY = yPos;
  
  // --- RENDER SECTIONS ---
  
  // We alternate sides: Left, Right, Left, Right
  
  // A. Foundation (Left) - Purple
  if (careerData.foundation) {
    const combinedFoundation = [
        ...careerData.foundation.core_subjects, 
        ...careerData.foundation.essential_knowledge
    ];
    drawCard("Foundation", combinedFoundation, 'left', colors.accentPurple);
  }

  // B. Skills (Right) - Green
  if (careerData.skills) {
    const combinedSkills = [
        ...careerData.skills.technical, 
        ...careerData.skills.soft
    ];
    // Adjust Y slightly back up so they appear somewhat parallel if the previous card was short
    yPos -= 20; 
    drawCard("Skills & Tools", combinedSkills, 'right', colors.accentGreen);
  }

  // C. Job Roles (Left) - Blue
  if (careerData.job_roles) {
    const roles = careerData.job_roles.map(r => r.title);
    drawCard("Job Roles", roles, 'left', colors.accentBlue);
  }

  // D. Career Growth (Right) - Purple
  if (careerData.career_growth) {
    yPos -= 20;
    const growth = Object.keys(careerData.career_growth).map(key => 
      `${key.toUpperCase()}: ${careerData.career_growth[key].title}`
    );
    drawCard("Career Growth", growth, 'right', colors.accentPurple);
  }

  // E. Top Companies (Left) - Yellow
  if (careerData.top_companies) {
    drawCard("Top Companies", careerData.top_companies, 'left', colors.accentYellow);
  }

  // F. Recommended Courses (Right) - Green
  if (careerData.recommended_courses) {
    yPos -= 20;
    const courses = careerData.recommended_courses.map(c => `${c.name} (${c.platform})`);
    drawCard("Courses", courses, 'right', colors.accentGreen);
  }

  // G. Certifications (Left) - Blue
  if (careerData.certifications) {
     drawCard("Certifications", careerData.certifications, 'left', colors.accentBlue);
  }

   // H. Freelancing (Right) - Yellow
  if (careerData.freelancing_opportunities) {
     yPos -= 20;
     const freelance = careerData.freelancing_opportunities.map(f => `${f.platform} (${f.earning_potential})`);
     drawCard("Freelancing", freelance, 'right', colors.accentYellow);
  }

  // Draw the vertical line now that we know the start and end
  // We draw this "behind" everything else logically, but in PDF painter model, 
  // we might want to draw it first or carefully. Here we draw it last but it might overlap text if not careful.
  // Actually, let's draw it from timelineStartY to final yPos.
  // Ideally, draw this BEFORE cards loop, but we didn't know the height.
  // Since we are using fill colors for cards, the line should be drawn BEFORE the cards.
  // However, recalculating is hard. 
  // *Quick Fix:* Draw distinct segments or just accept a line going through page breaks.
  
  // Footer / Copyright
  const pageCount = doc.internal.getNumberOfPages();
  for(let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    // Draw vertical timeline (Center)
    // Avoid drawing over the Header
    doc.setDrawColor(...colors.line);
    doc.setLineWidth(1);
    doc.line(centerX, 55, centerX, pageHeight - 10);
    
    // Footer Text
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`Page ${i} of ${pageCount} - Generated by Path-Finder AI`, pageWidth / 2, pageHeight - 5, { align: "center" });
  }

  doc.save("PathFinder-Roadmap.pdf");
};

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const pageHeight = doc.internal.pageSize.height;
  
    const addText = (text, x, y, size = 12, maxWidth = 170) => {
      doc.setFontSize(size);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      yPos += lines.length * 7; // Adjust spacing based on number of lines
      checkPageEnd();
    };
  
    const checkPageEnd = () => {
      if (yPos >= pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }
    };
  
    // Title
    doc.setFontSize(20);
doc.text("Career Roadmap", doc.internal.pageSize.width / 2, yPos, { align: "center" });
yPos += 12;
    
  
    // Career Path
    addText(`Career Path: ${careerData.title}`, 20, yPos, 16);
    yPos += 10;
    checkPageEnd();
  
    addText(`Description: ${careerData.description}`, 20, yPos, 12);
    yPos += 15;
    checkPageEnd();
  
    // Foundation
    addText("Foundation:", 20, yPos, 14);
    yPos += 10;
  
    addText("Core Subjects:", 30, yPos, 12);
    yPos += 7;
    careerData.foundation.core_subjects.forEach((subject) => {
      addText(`• ${subject}`, 40, yPos);
    });
  
    addText("Essential Knowledge:", 30, yPos, 12);
    yPos += 7;
    careerData.foundation.essential_knowledge.forEach((knowledge) => {
      addText(`• ${knowledge}`, 40, yPos);
    });
  
    // Skills
    addText("Skills:", 20, yPos, 14);
    yPos += 10;
  
    addText("Technical Skills:", 30, yPos, 12);
    yPos += 7;
    careerData.skills.technical.forEach((skill) => {
      addText(`• ${skill}`, 40, yPos);
    });
  
    addText("Soft Skills:", 30, yPos, 12);
    yPos += 7;
    careerData.skills.soft.forEach((skill) => {
      addText(`• ${skill}`, 40, yPos);
    });
  
    // Career Growth
    addText("Career Growth:", 20, yPos, 14);
    yPos += 10;
    Object.keys(careerData.career_growth).forEach((year) => {
      addText(`${year.toUpperCase()}: ${careerData.career_growth[year].title}`, 30, yPos);
      yPos += 7;
      careerData.career_growth[year].responsibilities.forEach((task) => {
        addText(`• ${task}`, 40, yPos);
      });
      addText(`Salary: ${careerData.career_growth[year].salary_range}`, 40, yPos);
      yPos += 10;
      checkPageEnd();
    });
  
    // Job Roles
    addText("Job Roles:", 20, yPos, 14);
    yPos += 10;
    careerData.job_roles.forEach((role) => {
      addText(`• ${role.title}: ${role.description}`, 30, yPos, 12);
      yPos += 8;
      role.requirements.forEach((req) => {
        addText(`  - ${req}`, 40, yPos, 10);
      });
    });
  
    // Top Companies
    addText("Top Companies:", 20, yPos, 14);
    yPos += 10;
    careerData.top_companies.forEach((company) => {
      addText(`• ${company}`, 30, yPos);
    });
  
    // Industries
    addText("Industries:", 20, yPos, 14);
    yPos += 10;
    careerData.industries.forEach((industry) => {
      addText(`• ${industry}`, 30, yPos);
    });
  
    // Job Market Trends
    addText("Job Market Trends:", 20, yPos, 14);
    yPos += 10;
    addText(`Growth Rate: ${careerData.job_market_trends.growth_rate}`, 30, yPos);
    addText(`Demand: ${careerData.job_market_trends.demand}`, 30, yPos);
    addText(`Future Scope: ${careerData.job_market_trends.future_scope}`, 30, yPos);
    yPos += 10;
  
    // Recommended Courses
    addText("Recommended Courses:", 20, yPos, 14);
    yPos += 10;
    careerData.recommended_courses.forEach((course) => {
      addText(`• ${course.name} - ${course.platform}`, 30, yPos);
    });
  
    // Certifications
    addText("Certifications:", 20, yPos, 14);
    yPos += 10;
    careerData.certifications.forEach((cert) => {
      addText(`• ${cert}`, 30, yPos);
    });
  
    // Freelancing Opportunities
    addText("Freelancing Opportunities:", 20, yPos, 14);
    yPos += 10;
    careerData.freelancing_opportunities.forEach((opportunity) => {
      addText(`• ${opportunity.platform}`, 30, yPos);
      addText(`  Top Skills: ${opportunity.top_skills.join(", ")}`, 40, yPos);
      addText(`  Earning Potential: ${opportunity.earning_potential}`, 40, yPos);
      yPos += 10;
    });
  
    // Additional Resources
    addText("Additional Resources:", 20, yPos, 14);
    yPos += 10;
    addText("Books:", 30, yPos);
    yPos += 7;
    careerData.additional_resources.books.forEach((book) => {
      addText(`• ${book}`, 40, yPos);
    });
  
    addText("Communities:", 30, yPos);
    yPos += 7;
    careerData.additional_resources.communities.forEach((community) => {
      addText(`• ${community}`, 40, yPos);
    });
  
    addText("Events:", 30, yPos);
    yPos += 7;
    careerData.additional_resources.events.forEach((event) => {
      addText(`• ${event}`, 40, yPos);
    });
  
    doc.save("career-roadmap.pdf");
  };
  


  return (
    <div className="max-w-6xl mx-auto p-8">
      
      <div className="text-center mb-12">
      <button
  className="absolute top-8 left-80 mt-14 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2 text-sm"
  onClick={() => navigate("/roadmap")}
>
  <ArrowLeft className="w-5 h-5" /> Go Back
</button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your Career Roadmap
        </h2>
        <p className="text-xl text-gray-600">
          Here's your personalized path to becoming a{" "}
          <span className="font-semibold text-blue-600">
            {careerData.title}
          </span>{" "}
          professional.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 transform -translate-x-1/2 rounded-full" />

        <div className="space-y-12">
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
                <h2 className="text-2xl m-2 font-semibold text-gray-800">
                  {<Book className="w-6 h-6 inline-block text-blue-600" />}{" "}
                  Decription of {careerData.title}
                </h2>
                {careerData.description}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-purple-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <Lightbulb className="w-6 h-6 text-purple-500 mr-2" />{" "}
                  Foundation
                </h3>

                {/* Technical Skills */}
                <h4 className="text-lg font-medium text-gray-700 mt-3 flex items-center">
                  <Briefcase className="w-5 h-5 text-purple-500 mr-2" /> Core
                  subjects
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {careerData.foundation.core_subjects.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Soft Skills */}
                <h4 className="text-lg font-medium text-gray-700 mt-4 flex items-center">
                  <Target className="w-5 h-5 text-green-500 mr-2" /> Essential
                  knowledge
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {careerData.foundation.essential_knowledge.map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-green-600 rounded-full text-sm shadow"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* sklil card */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  <BadgeCheck className="w-7 h-7 text-green-500 mr-2 inline-block" />{" "}
                  Skills
                </h3>

                {/* Core Subjects Section */}
                <h4 className="text-lg font-medium text-gray-700 mt-3">
                  Technical
                </h4>
                <ul className="mt-2 space-y-2">
                  {careerData.skills.technical.map((subject, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow">
                        {subject}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Essential Knowledge Section */}
                <h4 className="text-lg font-medium text-gray-700 mt-4">
                  Soft skills
                </h4>
                <ul className="mt-2 space-y-2">
                  {careerData.skills.soft.map((knowledge, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-white text-green-600 rounded-full text-sm shadow">
                        {knowledge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* tool and technoloty card */}
          <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-purple-100 rounded-xl shadow-lg">
                <h4 className="text-lg font-medium text-gray-700 mt-3 flex items-center">
                  <Briefcase className="w-5 h-5 text-purple-500 mr-2" /> Tools &
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {careerData.tools_technologies.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Rollss */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
                {/* Job Roles Section */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                  <Target className="w-7 h-7 text-green-500 mr-2 inline-block" />{" "}
                  Job Roles
                </h3>
                <div className="mt-4 space-y-4">
                  {careerData.job_roles.map((role, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow">
                      <h4 className="text-lg font-medium text-blue-700">
                        {role.title}
                      </h4>
                      <p className="text-gray-700 text-sm mt-1">
                        {role.description}
                      </p>
                      <h5 className="text-sm font-semibold text-gray-600 mt-2">
                        Requirements:
                      </h5>
                      <ul className="list-disc pl-5 text-gray-600 text-sm">
                        {role.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* this section for the carrere _groth  */}
          <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-purple-100 rounded-xl shadow-lg">
                {/* Career Growth Section */}
                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  Career Growth
                </h3>
                <div className="mt-4 space-y-4">
                  {Object.entries(careerData.career_growth).map(
                    ([year, growth], index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow"
                      >
                        <h4 className="text-lg font-medium text-purple-700">
                          {growth.title} ({year})
                        </h4>
                        <h5 className="text-sm font-semibold text-gray-600 mt-2">
                          Responsibilities:
                        </h5>
                        <ul className="list-disc pl-5 text-gray-600 text-sm">
                          {growth.responsibilities.map((task, i) => (
                            <li key={i}>{task}</li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-700 mt-2">
                          <strong>Salary Range:</strong> {growth.salary_range}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* this secotion is industries */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  <Factory className="w-7 h-7 text-blue-500 mr-2 inline-block" />{" "}
                  Industries
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {careerData.industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-red-600 rounded-full text-sm shadow"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Companies Card */}
          <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-yellow-400 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <Building className="w-7 h-7 text-indigo-500 mr-2 inline-block" />{" "}
                  Top Companies
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {careerData.top_companies.map((company, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-indigo-600 rounded-full text-sm shadow"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Market Trends Card */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-pink-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <TrendingUp className="w-7 h-7 text-yellow-500 mr-2 inline-block" />{" "}
                  Job Market Trends
                </h3>

                {/* Growth Rate */}
                <h4 className="text-lg font-medium text-gray-700 mt-3">
                  Growth Rate
                </h4>
                <p className="px-3 py-1 bg-white text-yellow-600 rounded-full text-sm shadow">
                  {careerData.job_market_trends.growth_rate}
                </p>

                {/* Demand */}
                <h4 className="text-lg font-medium text-gray-700 mt-3">
                  Demand
                </h4>
                <p className="px-3 py-1 bg-white text-yellow-600 rounded-full text-sm shadow">
                  {careerData.job_market_trends.demand}
                </p>

                {/* Future Scope */}
                <h4 className="text-lg font-medium text-gray-700 mt-3">
                  Future Scope
                </h4>
                <p className="px-3 py-1 bg-white text-yellow-600 rounded-lg text-sm shadow">
                  {careerData.job_market_trends.future_scope}
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Courses Card */}

          <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-blue-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <GraduationCap className="w-7 h-7 text-blue-500 mr-2 inline-block" />{" "}
                  Recommended Courses
                </h3>

                {/* Our Website's Courses (Related First) */}
                {relatedOurCourses.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-gray-700">
                      🔥 Our Recommended Courses
                    </h4>
                    {relatedOurCourses.map((course, index) => (
                      <div
                        key={index}
                        className="mt-3 p-4 bg-yellow-100 rounded-lg shadow border-l-4 border-yellow-500"
                      >
                        <h4 className="text-lg font-medium text-gray-700 flex items-center">
                          <Star className="w-5 h-5 text-yellow-600 mr-2 inline-block" />{" "}
                          {course.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          📌 Category: {course.category.join(", ")}
                        </p>
                        <p className="text-sm text-gray-600">
                          ⏳ Duration: {course.duration}
                        </p>
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-yellow-600 text-sm hover:underline mt-2"
                        >
                          <ExternalLink className="w-5 h-5 mr-1 inline-block" />{" "}
                          View Course
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* External Courses (Sorted) */}
                <h4 className="text-lg font-medium text-gray-700 mt-5">
                  🌍 External Courses
                </h4>
                {careerData.recommended_courses.map((course, index) => (
                  <div
                    key={index}
                    className="mt-3 p-4 bg-white rounded-lg shadow"
                  >
                    <h4 className="text-lg font-medium text-gray-700">
                      {course.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      📌 Platform: {course.platform}
                    </p>
                    <p className="text-sm text-gray-600">
                      ⏳ Duration: {course.duration}
                    </p>
                    <p className="text-sm text-gray-600">
                      🎯 Difficulty: {course.difficulty}
                    </p>

                    <div className="flex gap-3 mt-2">
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 text-sm hover:underline"
                      >
                        <ExternalLink className="w-5 h-5 mr-1 inline-block" />{" "}
                        Course Link
                      </a>
                      <a
                        href={course.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-red-600 text-sm hover:underline"
                      >
                        <Youtube className="w-5 h-5 mr-1 inline-block" />{" "}
                        YouTube Tutorial
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
      {/* Certifications Card - Left Aligned with Given Design */}
      <div className="relative flex items-center">
        <div className="w-1/2 pr-12">
          <div className="p-6 bg-pink-100 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <CheckCircle className="w-7 h-7 text-blue-500 mr-2" />
              Certifications
            </h3>

            {/* List of Certifications */}
            <ul className="mt-3 space-y-2">
              {careerData.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow"
                >
                  ✅ {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Freelancing Opportunities - Right Aligned */}
      <div className="relative flex items-center justify-end">
        <div className="w-1/2 pl-12">
          <div className="p-6 bg-yellow-400 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <Briefcase className="w-7 h-7 text-indigo-500 mr-2 inline-block" />
              Freelancing Opportunities
            </h3>

            {/* Freelancing Details */}
            {careerData.freelancing_opportunities.map((job, index) => (
              <div key={index} className="mt-3 text-sm text-gray-800">
                <p>📌 Platform: <span className="font-medium">{job.platfor}</span></p>
                <p>💰 Earning: {job.earning_potential}</p>
                <p>🛠️ Top Skills: {job.top_skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="relative flex items-center">
  <div className="w-1/2 pr-12">
    <div className="p-6 bg-pink-100 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center">
        <BookOpen className="w-7 h-7 text-blue-500 mr-2" />
        Additional Resources
      </h3>

      {/* Books */}
      <h4 className="text-lg font-medium text-gray-700 mt-3">📚 Books</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {careerData.additional_resources.books.map((book, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow"
          >
            {book}
          </span>
        ))}
      </div>

      {/* Communities */}
      <h4 className="text-lg font-medium text-gray-700 mt-3">🌐 Communities</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {careerData.additional_resources.communities.map((community, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow"
          >
            {community}
          </span>
        ))}
      </div>

      {/* Events */}
      <h4 className="text-lg font-medium text-gray-700 mt-3">🎟️ Events</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {careerData.additional_resources.events.map((event, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow"
          >
            {event}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

{/* Current World & Future World Requirements */}
<h4 className=" text-lg font-semibold text-gray-800 mt-4">🌎 Current & Future World Requirements</h4>

{/* Current Trends */}
<div className="w-96 bg-gray-100 p-4 rounded-lg shadow mt-3">
  <h5 className="text-md font-medium text-gray-700">📌 Current Trends</h5>

  {/* Essential Skills */}
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.current_trends.essential_skills.map((skill, index) => (
      <span key={index} className="px-3 py-1 bg-white text-green-600 rounded-full text-sm shadow">
        {skill}
      </span>
    ))}
  </div>

  {/* Industry Demand */}
  <p className=" text-gray-600 mt-2">
    <strong>Industry Demand:</strong> {careerData.CurrentWorld_and_Future_World_Requrment.current_trends.industry_demand}
  </p>

  {/* Top Companies Hiring */}
  <h6 className="text-md font-medium text-gray-700 mt-3">🏢 Top Companies Hiring</h6>
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.current_trends.top_companies_hiring.map((company, index) => (
      <span key={index} className="px-3 py-1 bg-white text-indigo-600 rounded-full text-sm shadow">
        {company}
      </span>
    ))}
  </div>

  {/* Required Certifications */}
  <h6 className="text-md font-medium text-gray-700 mt-3">📜 Required Certifications</h6>
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.current_trends.required_certifications.map((cert, index) => (
      <span key={index} className="px-3 py-1 bg-white text-red-600 rounded-full text-sm shadow">
        {cert}
      </span>
    ))}
  </div>
</div>

{/* Future Requirements */}
<div className=" w-96 bg-gray-100 p-4 rounded-lg shadow mt-3">
  <h5 className="text-md font-medium text-gray-700">🚀 Future Requirements</h5>

  {/* Emerging Skills */}
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.future_requirements.emerging_skills.map((skill, index) => (
      <span key={index} className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow">
        {skill}
      </span>
    ))}
  </div>

  {/* Predicted Growth */}
  <p className="text-gray-600 mt-2">
    <strong>Predicted Growth:</strong> {careerData.CurrentWorld_and_Future_World_Requrment.future_requirements.predicted_growth}
  </p>

  {/* Future Industries */}
  <h6 className="text-md font-medium text-gray-700 mt-3">🏭 Future Industries</h6>
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.future_requirements.future_industries.map((industry, index) => (
      <span key={index} className="px-3 py-1 bg-white text-orange-600 rounded-full text-sm shadow">
        {industry}
      </span>
    ))}
  </div>

  {/* Recommended Future Courses */}
  <h6 className="text-md font-medium text-gray-700 mt-3">📚 Recommended Future Courses</h6>
  <div className="flex flex-wrap gap-2 mt-1">
    {careerData.CurrentWorld_and_Future_World_Requrment.future_requirements.recommended_future_courses.map((course, index) => (
      <span key={index} className="px-3 py-1 bg-white text-teal-600 rounded-full text-sm shadow">
        {course}
      </span>
    ))}
  </div>
</div>



          {/* <div className="relative flex items-center">
            <div className="w-1/2 pr-12">
              <div className="p-6 bg-indigo-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Roles</h3>
                <ul className="mt-4 space-y-2">
                  {careerData.roles.map((role, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="relative flex items-center justify-end">
            <div className="w-1/2 pl-12">
              <div className="p-6 bg-emerald-100 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Career Growth & Salary</h3>
                <p className="mt-4">1 Year: {careerData.growth.year1} ({careerData.salary.year1})</p>
                <p>3 Years: {careerData.growth.year3} ({careerData.salary.year3})</p>
                <p>5 Years: {careerData.growth.year5} ({careerData.salary.year5})</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-12 text-center">
        <button
          onClick={handleDownloadPDFRaw}
          className="p-4 bg-blue-600 text-white rounded-lg"
        >
          Download Animated PDF 
        </button>
        <button
          onClick={handleDownloadPDF}
          className="p-4 bg-blue-600 text-white rounded-lg"
        >
          Download Text PDF 
        </button>
      </div>
    </div>
  );
};

export default RoadmapView;
