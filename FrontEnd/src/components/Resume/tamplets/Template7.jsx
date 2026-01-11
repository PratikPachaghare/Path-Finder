import React from 'react';

const Template7 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div className="p-10 font-sans text-gray-800 h-full">
      
      <header className="flex justify-between items-end border-b-4 border-indigo-600 pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-900 uppercase">{personalInfo?.fullName}</h1>
          <p className="text-xl text-indigo-500 font-medium">{personalInfo?.jobTitle}</p>
        </div>
        <div className="text-right text-sm text-gray-500 font-medium">
          <p>{personalInfo?.email}</p>
          <p>{personalInfo?.phone}</p>
          <p>{personalInfo?.linkedin}</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        
        {/* Left Rail (Skills & Edu) */}
        <div className="col-span-1 space-y-8">
          
          {personalInfo?.summary && (
            <div>
              <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-3">About Me</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}

          {skills?.length > 0 && (
            <div>
               <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-3">Skills</h3>
               <div className="flex flex-wrap gap-2">
                 {skills.map((skill, i) => (
                   <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>
          )}

          {education?.length > 0 && (
            <div>
               <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-3">Education</h3>
               {education.map((edu, i) => (
                 <div key={i} className="mb-4">
                   <p className="font-bold text-sm text-gray-800">{edu.degree}</p>
                   <p className="text-xs text-gray-500">{edu.school}</p>
                   <p className="text-xs text-indigo-500 mt-1">{edu.year}</p>
                 </div>
               ))}
            </div>
          )}
        </div>

        {/* Right Rail (Experience Timeline) */}
        <div className="col-span-2">
           <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-6">Experience</h3>
           
           <div className="border-l-2 border-indigo-200 ml-2 space-y-8">
             {experience?.map((exp, i) => (
               <div key={i} className="relative pl-6">
                 {/* Timeline Dot */}
                 <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-500"></div>
                 
                 <div className="flex justify-between items-center mb-1">
                   <h4 className="text-lg font-bold text-gray-800">{exp.title}</h4>
                   <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">{exp.year}</span>
                 </div>
                 <p className="text-sm font-medium text-gray-500 mb-2">{exp.company}</p>
                 <p className="text-sm text-gray-600 leading-relaxed">{exp.desc}</p>
               </div>
             ))}
           </div>

           {projects?.length > 0 && (
             <div className="mt-8">
                <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-4">Recent Projects</h3>
                <div className="grid grid-cols-2 gap-4">
                  {projects.map((proj, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-sm text-gray-800">{proj.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-3">{proj.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Template7;