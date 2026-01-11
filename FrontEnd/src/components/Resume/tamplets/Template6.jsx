import React from 'react';

const Template6 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications } = data;

  return (
    <div className="p-8 h-full font-sans text-gray-800 bg-white">
      
      {/* Header Box */}
      <header className="border-2 border-gray-800 p-6 mb-6 text-center">
        <h1 className="text-3xl font-black uppercase tracking-widest">{personalInfo?.fullName}</h1>
        <p className="text-md font-bold text-gray-500 mt-2 uppercase">{personalInfo?.jobTitle}</p>
        <div className="flex justify-center gap-4 mt-4 text-xs font-mono text-gray-600">
          <span>{personalInfo?.email}</span>
          <span>|</span>
          <span>{personalInfo?.phone}</span>
          {personalInfo?.linkedin && <><span>|</span><span>{personalInfo.linkedin}</span></>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column (Main) */}
        <div className="col-span-8 flex flex-col gap-6">
           
           {/* Summary */}
           {personalInfo?.summary && (
             <div className="border border-gray-300 p-4 rounded-lg">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-2">Profile</h3>
               <p className="text-sm text-gray-600 leading-relaxed">{personalInfo.summary}</p>
             </div>
           )}

           {/* Experience */}
           {experience?.length > 0 && (
             <div className="border border-gray-300 p-4 rounded-lg flex-grow">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-4 border-b pb-2">Experience</h3>
               {experience.map((exp, i) => (
                 <div key={i} className="mb-5 last:mb-0">
                   <div className="flex justify-between items-baseline">
                     <h4 className="font-bold text-sm">{exp.title}</h4>
                     <span className="text-xs font-mono text-gray-500">{exp.year}</span>
                   </div>
                   <p className="text-xs font-semibold text-gray-500 mb-1">{exp.company}</p>
                   <p className="text-sm text-gray-600">{exp.desc}</p>
                 </div>
               ))}
             </div>
           )}

            {/* Projects */}
            {projects?.length > 0 && (
             <div className="border border-gray-300 p-4 rounded-lg">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-4 border-b pb-2">Key Projects</h3>
               {projects.map((proj, i) => (
                 <div key={i} className="mb-3 last:mb-0">
                   <h4 className="font-bold text-sm">{proj.title}</h4>
                   <p className="text-sm text-gray-600">{proj.desc}</p>
                 </div>
               ))}
             </div>
           )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="col-span-4 flex flex-col gap-6">
          
          {/* Skills */}
          {skills?.length > 0 && (
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-3">Skills</h3>
               <ul className="text-sm space-y-1">
                 {skills.map((skill, i) => (
                   <li key={i} className="border-b border-gray-200 pb-1 last:border-0">{skill}</li>
                 ))}
               </ul>
            </div>
          )}

          {/* Education */}
          {education?.length > 0 && (
            <div className="border border-gray-300 p-4 rounded-lg">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-3">Education</h3>
               {education.map((edu, i) => (
                 <div key={i} className="mb-3 text-sm">
                   <p className="font-bold">{edu.degree}</p>
                   <p className="text-gray-600 text-xs">{edu.school}</p>
                   <p className="text-gray-400 text-xs text-right">{edu.year}</p>
                 </div>
               ))}
            </div>
          )}

          {/* Certifications */}
          {certifications?.length > 0 && (
            <div className="border border-gray-300 p-4 rounded-lg">
               <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-3">Certifications</h3>
               {certifications.map((cert, i) => (
                 <div key={i} className="mb-2 text-xs">
                   <p className="font-semibold">{cert.name}</p>
                   <p className="text-gray-500">{cert.issuer}</p>
                 </div>
               ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Template6;