import React from 'react';
import { Link2, Mail, Phone, MapPin } from 'lucide-react';

const Template4 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications, strengths } = data;

  return (
    <div className="bg-white h-full font-sans">
      
      {/* Bold Header */}
      <header className="bg-emerald-700 text-white p-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-2">{personalInfo?.fullName}</h1>
            <p className="text-xl text-emerald-100 font-medium tracking-wide">{personalInfo?.jobTitle}</p>
          </div>
          <div className="text-right text-sm space-y-1 text-emerald-50">
            {personalInfo?.email && <p>{personalInfo.email}</p>}
            {personalInfo?.phone && <p>{personalInfo.phone}</p>}
            {personalInfo?.linkedin && <p>{personalInfo.linkedin}</p>}
            {personalInfo?.github && <p>{personalInfo.github}</p>}
          </div>
        </div>
      </header>

      <div className="p-10">
        
        {/* Summary */}
        <section className="mb-8 border-l-4 border-emerald-600 pl-4">
           <p className="text-lg text-gray-700 leading-relaxed">{personalInfo?.summary}</p>
        </section>

        <div className="grid grid-cols-3 gap-8">
          
          {/* Main Column (2/3) */}
          <div className="col-span-2 space-y-8">
             
             {/* Experience */}
             {experience?.length > 0 && (
               <section>
                 <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="w-2 h-8 bg-emerald-600 rounded"></span> Experience
                 </h2>
                 {experience.map((exp, i) => (
                   <div key={i} className="mb-6">
                     <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{exp.year}</span>
                     </div>
                     <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                     <p className="text-gray-700 text-sm leading-relaxed">{exp.desc}</p>
                   </div>
                 ))}
               </section>
             )}

             {/* Projects (Highlighted for Tech) */}
             {projects?.length > 0 && (
               <section>
                 <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <span className="w-2 h-8 bg-emerald-600 rounded"></span> Projects
                 </h2>
                 <div className="grid grid-cols-1 gap-4">
                   {projects.map((proj, i) => (
                     <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-emerald-200 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                           <h4 className="font-bold text-gray-800">{proj.title}</h4>
                           {proj.link && <span className="text-xs text-emerald-600 flex items-center gap-1"><Link2 size={12}/> Link</span>}
                        </div>
                        <p className="text-sm text-gray-600">{proj.desc}</p>
                     </div>
                   ))}
                 </div>
               </section>
             )}

          </div>

          {/* Side Column (1/3) */}
          <div className="space-y-8">
            
            {/* Skills Tags */}
            {skills?.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-800 text-lg mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Strengths */}
             {strengths?.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-800 text-lg mb-3">Soft Skills</h3>
                <ul className="space-y-2">
                  {strengths.map((str, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> {str.name}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {education?.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-800 text-lg mb-3">Education</h3>
                {education.map((edu, i) => (
                  <div key={i} className="mb-4 pb-4 border-b border-gray-100 last:border-0">
                    <p className="font-bold text-sm text-gray-900">{edu.school}</p>
                    <p className="text-sm text-emerald-700">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                  </div>
                ))}
              </section>
            )}

             {/* Certifications */}
             {certifications?.length > 0 && (
              <section>
                <h3 className="font-bold text-gray-800 text-lg mb-3">Certifications</h3>
                {certifications.map((cert, i) => (
                  <div key={i} className="mb-2 text-sm">
                    <p className="font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-xs text-gray-500">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;