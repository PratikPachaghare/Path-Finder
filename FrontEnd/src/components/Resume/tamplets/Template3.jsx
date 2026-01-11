import React from 'react';

const Template3 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications, strengths } = data;

  return (
    <div className="p-12 font-sans text-gray-800 h-full max-w-[210mm] mx-auto">
      
      {/* Centered Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-light tracking-[0.2em] text-gray-900 uppercase mb-2">{personalInfo?.fullName}</h1>
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">{personalInfo?.jobTitle}</p>
        
        <div className="flex justify-center items-center gap-4 text-xs text-gray-600 font-medium">
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo?.linkedin && <span>• {personalInfo.linkedin}</span>}
          {personalInfo?.github && <span>• {personalInfo.github}</span>}
        </div>
      </header>

      {/* Summary */}
      {personalInfo?.summary && (
        <div className="mb-8 text-center px-8">
           <p className="text-sm text-gray-700 leading-7 italic">"{personalInfo.summary}"</p>
        </div>
      )}

      {/* Skills as a clean bar */}
      {skills?.length > 0 && (
        <div className="mb-10 text-center border-y border-gray-200 py-3">
           <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Core Competencies</p>
           <p className="text-sm text-gray-800">{skills.join('  •  ')}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 mb-6">Experience</h3>
          {experience.map((exp, i) => (
            <div key={i} className="mb-6 grid grid-cols-[100px_1fr] gap-4">
              <div className="text-xs font-bold text-gray-500 text-right pt-1">{exp.year}</div>
              <div>
                <h4 className="font-bold text-gray-800 text-md">{exp.title}</h4>
                <p className="text-sm text-gray-600 mb-2 italic">{exp.company}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Two Column Bottom */}
      <div className="grid grid-cols-2 gap-10">
        
        {/* Education & Certs */}
        <div>
           {education?.length > 0 && (
             <div className="mb-6">
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 mb-4">Education</h3>
               {education.map((edu, i) => (
                 <div key={i} className="mb-3">
                   <div className="font-bold text-sm text-gray-800">{edu.school}</div>
                   <div className="text-sm text-gray-600">{edu.degree}</div>
                   <div className="text-xs text-gray-400">{edu.year}</div>
                 </div>
               ))}
             </div>
           )}

           {certifications?.length > 0 && (
             <div>
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 mb-4">Certifications</h3>
               {certifications.map((cert, i) => (
                 <div key={i} className="mb-2 text-sm text-gray-700">
                    <span className="font-semibold">{cert.name}</span> <span className="text-gray-400">|</span> {cert.year}
                 </div>
               ))}
             </div>
           )}
        </div>

        {/* Projects & Strengths */}
        <div>
           {projects?.length > 0 && (
             <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 mb-4">Projects</h3>
                {projects.map((proj, i) => (
                  <div key={i} className="mb-3">
                    <div className="font-bold text-sm text-gray-800">{proj.title}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{proj.desc}</p>
                  </div>
                ))}
             </div>
           )}

           {strengths?.length > 0 && (
             <div>
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 mb-4">Strengths</h3>
               <div className="flex flex-wrap gap-2">
                 {strengths.map((str, i) => (
                   <span key={i} className="text-xs border border-gray-300 px-2 py-1 rounded-sm text-gray-600">{str.name}</span>
                 ))}
               </div>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Template3;