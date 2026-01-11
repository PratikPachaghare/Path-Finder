import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import Template1 from './tamplets/Template1';
import Template2 from './tamplets/Template2';
import Template3 from './tamplets/Template3';
import Template4 from './tamplets/Template4';
import Template5 from './tamplets/Template5';
import Template6 from './tamplets/Template6';
import Template7 from './tamplets/Template7';
import Template8 from './tamplets/Template8';
import Template9 from './tamplets/Template9';

// Add this at the top of ResumeBuilder.jsx, outside the component
const DUMMY_DATA = {
  personalInfo: {
    fullName: "PRATIK PACHGHARE",
    jobTitle: "full stack devlopmentt",
    email: "Pratik2@gmail.com",
    phone: "09370575105",
    linkedin: "linkedin.com/in/pratik-pachghare-548a8a290/",
    github: "github.com/PratikPachaghare",
    summary: "Highlight Skills and Goals: Your summary should showcase your key skills, educational background, and career aspirations. For example, 'Recent Computer Science graduate with strong programming skills and a passion for software development.' Tailor to the Job: Customize your summary for the specific role you are applying for."
  },
  experience: [
    { 
      title: "full stack devlopmentt", 
      company: "fascave", 
      year: "2023 - Present", 
      desc: "table. For example, 'Enthusiastic biology graduate with research experience and a strong foundation in laboratory techniques, seeking to apply knowledge in a research assistant position.'" 
    }
  ],
  education: [
    { school: "PR pote college of enginering", degree: "B.E", year: "2026" },
    { school: "higher secondery school", degree: "12th pass", year: "2022" }
  ],
  skills: ["React", "Node.js", "Python", "cad"],
  projects: [
    { title: "E-commece devlopment website", desc: "Mern stack project" },
    { title: "E-commece devlopment website", desc: "Mern stack project" }
  ],
  certifications: [
    { name: "android devloper", issuer: "google", year: "2024" }
  ],
  strengths: [
    "Got it — you're looking for resume strengths for freshers that can make your profile stand out even without much work experience."
  ]
};

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  
  // Initial State for Resume Data
const [resumeData, setResumeData] = useState({
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    summary: '',
  },
  experience: [],    // Must be an empty array
  education: [],     // Must be an empty array
  projects: [],      // <--- YOU WERE LIKELY MISSING THIS
  skills: [],        // <--- AND THIS
  certifications: [],// <--- AND THIS
  strengths: []      // <--- AND THIS
});

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    nextStep();
  };

  // Render the selected template component dynamically
const renderTemplate = () => {
  switch (selectedTemplate) {
    case 'template1': return <Template1 data={resumeData} />;
    case 'template2': return <Template2 data={resumeData} />;
    case 'template3': return <Template3 data={resumeData} />;
    case 'template4': return <Template4 data={resumeData} />;
    case 'template5': return <Template5 data={resumeData} />;
    case 'template6': return <Template6 data={resumeData} />;
    case 'template7': return <Template7 data={resumeData} />;
    case 'template8': return <Template8 data={resumeData} />;
    case 'template9': return <Template9 data={resumeData} />;
    default: return <Template1 data={resumeData} />;
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-8 flex justify-center items-center space-x-4">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>1</div>
          <div className="w-20 h-1 bg-gray-300"><div className={`h-full bg-blue-600 ${step >= 2 ? 'w-full' : 'w-0'} transition-all`}></div></div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>2</div>
          <div className="w-20 h-1 bg-gray-300"><div className={`h-full bg-blue-600 ${step >= 3 ? 'w-full' : 'w-0'} transition-all`}></div></div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>3</div>
        </div>

        {/* STEP 1: Form Data Collection */}
        {step === 1 && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Step 1: Enter Your Details</h2>
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
            <div className="mt-6 flex justify-end">
              <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Next: Select Template</button>
            </div>
          </div>
        )}

{/* STEP 2: Template Selection */}
{step === 2 && (
  <div className="bg-white p-8 rounded-xl shadow-lg min-h-screen">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Choose Your Template</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
  { id: 'template1', Component: Template1, name: 'Classic Professional' },
  { id: 'template2', Component: Template2, name: 'Modern Sidebar' },
  { id: 'template3', Component: Template3, name: 'Executive Minimalist' },
  { id: 'template4', Component: Template4, name: 'Bold Creative' },
  { id: 'template5', Component: Template5, name: 'Tech Modern' },
  { id: 'template6', Component: Template6, name: 'Structured Grid' },
  { id: 'template7', Component: Template7, name: 'Timeline Left' },
  { id: 'template8', Component: Template8, name: 'Ivy League' },
  { id: 'template9', Component: Template9, name: 'Right Sidebar' }
].map((template) => (
        <div 
          key={template.id}
          onClick={() => handleTemplateSelect(template.id)}
          className={`
            group relative cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl
            ${selectedTemplate === template.id 
              ? 'border-blue-600 ring-2 ring-blue-600' 
              : 'border-gray-200 hover:border-blue-400'
            }
          `}
        >
          {/* 1. ASPECT RATIO BOX: Forces the box to be exactly A4 shape */}
          <div className="relative w-full aspect-[1/1.414] bg-gray-50 overflow-hidden group-hover:bg-gray-100 transition">
            
            {/* 2. THE RESUME PREVIEW */}
            {/* - origin-top-left: Anchors it to the corner
                - scale-[0.38]: This is the 'Magic Number' to fit typical grid widths
            */}
            <div className="absolute top-4 left-4 w-[210mm] min-h-[297mm] bg-white shadow-md transform origin-top-left scale-[0.33] md:scale-[0.4] lg:scale-[0.38] pointer-events-none">
              <template.Component data={DUMMY_DATA} />
            </div>

            {/* Hover / Selected Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${selectedTemplate === template.id ? 'bg-blue-900/10' : 'opacity-0 group-hover:opacity-10'}`}>
              {selectedTemplate === template.id && (
                 <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform scale-100">
                   Selected
                 </div>
              )}
            </div>
          </div>

          {/* 3. LABEL (Outside the preview box) */}
          <div className="p-3 bg-white border-t border-gray-100 text-center">
            <h3 className={`font-semibold text-sm ${selectedTemplate === template.id ? 'text-blue-600' : 'text-gray-700'}`}>
              {template.name}
            </h3>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition">
        ← Back to Details
      </button>
    </div>
  </div>
)}

        {/* STEP 3: Preview & Download */}
        {step === 3 && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-gray-800">Step 3: Preview & Download</h2>
               <button onClick={prevStep} className="text-gray-600 hover:text-gray-900">Edit Details</button>
            </div>
            
            <ResumePreview>
              {renderTemplate()}
            </ResumePreview>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResumeBuilder;