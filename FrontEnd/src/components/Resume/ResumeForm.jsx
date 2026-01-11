import React, { useState } from 'react';
import { 
  Plus, Trash2, X, Github, Linkedin, MapPin, Mail, Phone, 
  Briefcase, GraduationCap, Code, Award, Layers, Zap, Search 
} from 'lucide-react';

const SUGGESTED_SKILLS = [
  "React", "Node.js", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", 
  "Java", "C++", "C#", "SQL", "MongoDB", "PostgreSQL", "AWS", "Docker", 
  "Kubernetes", "Git", "Figma", "Adobe XD", "Next.js", "Vue.js", "Angular", 
  "Express", "Django", "Flask", "Spring Boot", "Flutter", "Swift", "Kotlin"
];

const ResumeForm = ({ resumeData, setResumeData }) => {
  
  const [activeSections, setActiveSections] = useState({
    experience: true,
    education: true,
    projects: true,
    skills: true,
    certifications: false,
    strengths: false,
  });

  // Local state for skill search input
  const [skillInput, setSkillInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleSection = (section) => {
    setActiveSections({ ...activeSections, [section]: !activeSections[section] });
  };

  const handleChange = (e, section, index = null, field = null) => {
    const value = e.target.value;
    if (section === 'personalInfo') {
      setResumeData({ ...resumeData, personalInfo: { ...resumeData.personalInfo, [e.target.name]: value } });
    } else {
      const list = [...(resumeData[section] || [])];
      if (typeof list[index] === 'object') {
        list[index][field] = value;
      } else {
        list[index] = value;
      }
      setResumeData({ ...resumeData, [section]: list });
    }
  };

  // --- SKILL HANDLING FUNCTIONS ---

  const handleAddSkill = (skillToAdd) => {
    if (!skillToAdd) return;
    
    const currentSkills = resumeData.skills || [];
    // Prevent duplicates
    if (!currentSkills.includes(skillToAdd)) {
      setResumeData({ ...resumeData, skills: [...currentSkills, skillToAdd] });
    }
    setSkillInput('');
    setShowSuggestions(false);
  };

  const removeSkill = (skillToRemove) => {
    const currentSkills = resumeData.skills || [];
    setResumeData({ 
      ...resumeData, 
      skills: currentSkills.filter(skill => skill !== skillToRemove) 
    });
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleAddSkill(skillInput);
    }
  };

  // --------------------------------

  const addItem = (section, item) => {
    const currentSection = resumeData[section] || [];
    setResumeData({ ...resumeData, [section]: [...currentSection, item] });
  };

  const removeItem = (section, index) => {
    const list = [...(resumeData[section] || [])];
    list.splice(index, 1);
    setResumeData({ ...resumeData, [section]: list });
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4 pb-24">
      
      {/* --- PERSONAL INFO --- */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><MapPin size={20} /></div>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <input name="fullName" value={resumeData.personalInfo?.fullName || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium text-gray-600">Job Title</label>
            <input name="jobTitle" value={resumeData.personalInfo?.jobTitle || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Software Engineer" />
          </div>
          <div className="relative">
             <Mail className="absolute top-3.5 left-3 text-gray-400" size={18} />
             <input name="email" value={resumeData.personalInfo?.email || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email" />
          </div>
          <div className="relative">
             <Phone className="absolute top-3.5 left-3 text-gray-400" size={18} />
             <input name="phone" value={resumeData.personalInfo?.phone || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Phone" />
          </div>
          <div className="relative">
             <Linkedin className="absolute top-3.5 left-3 text-gray-400" size={18} />
             <input name="linkedin" value={resumeData.personalInfo?.linkedin || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="LinkedIn URL" />
          </div>
          <div className="relative">
             <Github className="absolute top-3.5 left-3 text-gray-400" size={18} />
             <input name="github" value={resumeData.personalInfo?.github || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="pl-10 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none" placeholder="GitHub URL" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-600">Summary</label>
            <textarea name="summary" value={resumeData.personalInfo?.summary || ''} onChange={(e) => handleChange(e, 'personalInfo')} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none mt-1" rows="3" placeholder="Professional Summary..."></textarea>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      {activeSections.experience && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Briefcase size={20} /></div>
               Experience
            </h3>
            <div className="flex gap-2">
                <button onClick={() => addItem('experience', { title: '', company: '', year: '', desc: '' })} className="flex items-center text-sm font-medium text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded transition"><Plus size={16} className="mr-1"/> Add</button>
                <button onClick={() => toggleSection('experience')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
            </div>
          </div>
          {resumeData.experience?.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100 relative group">
                <button onClick={() => removeItem('experience', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={16} /></button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input placeholder="Job Title" value={exp.title} onChange={(e) => handleChange(e, 'experience', index, 'title')} className="p-2 border rounded bg-white" />
                  <input placeholder="Company" value={exp.company} onChange={(e) => handleChange(e, 'experience', index, 'company')} className="p-2 border rounded bg-white" />
                  <input placeholder="Duration" value={exp.year} onChange={(e) => handleChange(e, 'experience', index, 'year')} className="p-2 border rounded bg-white" />
                  <textarea placeholder="Responsibilities..." value={exp.desc} onChange={(e) => handleChange(e, 'experience', index, 'desc')} className="p-2 border rounded w-full md:col-span-2 bg-white" rows="2" />
                </div>
            </div>
          ))}
        </section>
      )}

      {/* --- PROJECTS --- */}
      {activeSections.projects && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-green-100 rounded-lg text-green-600"><Layers size={20} /></div>
               Projects
            </h3>
             <div className="flex gap-2">
                <button onClick={() => addItem('projects', { title: '', link: '', desc: '' })} className="flex items-center text-sm font-medium text-green-600 hover:bg-green-50 px-3 py-1.5 rounded transition"><Plus size={16} className="mr-1"/> Add</button>
                <button onClick={() => toggleSection('projects')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
            </div>
          </div>
          {resumeData.projects?.map((proj, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100 relative group">
                <button onClick={() => removeItem('projects', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={16} /></button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input placeholder="Project Name" value={proj.title} onChange={(e) => handleChange(e, 'projects', index, 'title')} className="p-2 border rounded bg-white" />
                  <input placeholder="Link (URL)" value={proj.link} onChange={(e) => handleChange(e, 'projects', index, 'link')} className="p-2 border rounded bg-white" />
                  <textarea placeholder="Description & Tech Stack..." value={proj.desc} onChange={(e) => handleChange(e, 'projects', index, 'desc')} className="p-2 border rounded w-full md:col-span-2 bg-white" rows="2" />
                </div>
            </div>
          ))}
        </section>
      )}

      {/* --- TECHNICAL SKILLS (UPDATED WITH SEARCH) --- */}
      {activeSections.skills && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Code size={20} /></div>
               Technical Skills
            </h3>
            <button onClick={() => toggleSection('skills')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            {/* Search and Input Bar */}
            <div className="relative mb-4">
              <div className="flex items-center border rounded-lg bg-white overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
                <Search className="ml-3 text-gray-400" size={18} />
                <input 
                  type="text"
                  placeholder="Type a skill (e.g. React, Python) and press Enter..." 
                  value={skillInput}
                  onChange={(e) => {
                    setSkillInput(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={handleSkillKeyDown}
                  className="w-full p-3 outline-none"
                />
                <button 
                  onClick={() => handleAddSkill(skillInput)} 
                  className="px-4 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
                >
                  Add
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && skillInput && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {SUGGESTED_SKILLS.filter(skill => 
                    skill.toLowerCase().includes(skillInput.toLowerCase()) && 
                    !resumeData.skills?.includes(skill)
                  ).map((skill, index) => (
                    <li 
                      key={index} 
                      onClick={() => handleAddSkill(skill)}
                      className="p-3 hover:bg-orange-50 cursor-pointer text-gray-700 flex justify-between items-center"
                    >
                      {skill}
                      <Plus size={14} className="text-orange-500"/>
                    </li>
                  ))}
                  {/* Option to add custom skill if not in list */}
                  {!SUGGESTED_SKILLS.some(s => s.toLowerCase() === skillInput.toLowerCase()) && (
                     <li 
                     onClick={() => handleAddSkill(skillInput)}
                     className="p-3 hover:bg-gray-50 cursor-pointer text-blue-600 font-medium border-t"
                   >
                     Add "{skillInput}"
                   </li>
                  )}
                </ul>
              )}
            </div>

            {/* Selected Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {resumeData.skills?.length === 0 && <span className="text-gray-400 text-sm italic">No skills added yet.</span>}
              
              {resumeData.skills?.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium group transition hover:bg-orange-200">
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="text-orange-600 hover:text-red-500"><X size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- EDUCATION --- */}
      {activeSections.education && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><GraduationCap size={20} /></div>
               Education
            </h3>
             <div className="flex gap-2">
                <button onClick={() => addItem('education', { school: '', degree: '', year: '' })} className="flex items-center text-sm font-medium text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded transition"><Plus size={16} className="mr-1"/> Add</button>
                <button onClick={() => toggleSection('education')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
            </div>
          </div>
          {resumeData.education?.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100 relative group">
                <button onClick={() => removeItem('education', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={16} /></button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input placeholder="School Name" value={edu.school} onChange={(e) => handleChange(e, 'education', index, 'school')} className="p-2 border rounded bg-white" />
                  <input placeholder="Degree / Major" value={edu.degree} onChange={(e) => handleChange(e, 'education', index, 'degree')} className="p-2 border rounded bg-white" />
                  <input placeholder="Graduation Year" value={edu.year} onChange={(e) => handleChange(e, 'education', index, 'year')} className="p-2 border rounded bg-white" />
                </div>
            </div>
          ))}
        </section>
      )}

      {/* --- CERTIFICATIONS --- */}
      {activeSections.certifications && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><Award size={20} /></div>
               Certifications
            </h3>
             <div className="flex gap-2">
                <button onClick={() => addItem('certifications', { name: '', issuer: '', year: '' })} className="flex items-center text-sm font-medium text-teal-600 hover:bg-teal-50 px-3 py-1.5 rounded transition"><Plus size={16} className="mr-1"/> Add</button>
                <button onClick={() => toggleSection('certifications')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
            </div>
          </div>
          {resumeData.certifications?.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100 relative group">
                <button onClick={() => removeItem('certifications', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={16} /></button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input placeholder="Certificate Name" value={cert.name} onChange={(e) => handleChange(e, 'certifications', index, 'name')} className="p-2 border rounded bg-white" />
                  <input placeholder="Issuer (e.g. Google)" value={cert.issuer} onChange={(e) => handleChange(e, 'certifications', index, 'issuer')} className="p-2 border rounded bg-white" />
                  <input placeholder="Year" value={cert.year} onChange={(e) => handleChange(e, 'certifications', index, 'year')} className="p-2 border rounded bg-white" />
                </div>
            </div>
          ))}
        </section>
      )}

      {/* --- STRENGTHS --- */}
      {activeSections.strengths && (
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
               <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600"><Zap size={20} /></div>
               Strengths & Soft Skills
            </h3>
             <div className="flex gap-2">
                <button onClick={() => addItem('strengths', { name: '' })} className="flex items-center text-sm font-medium text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded transition"><Plus size={16} className="mr-1"/> Add</button>
                <button onClick={() => toggleSection('strengths')} className="text-gray-400 hover:text-red-500"><X size={20}/></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.strengths?.map((str, index) => (
              <div key={index} className="flex gap-2 items-center relative group">
                  <input placeholder="e.g. Leadership, Communication..." value={str.name} onChange={(e) => handleChange(e, 'strengths', index, 'name')} className="p-3 border rounded-lg w-full bg-gray-50" />
                  <button onClick={() => removeItem('strengths', index)} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- BOTTOM SECTION MANAGER --- */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <div className="bg-white border shadow-xl rounded-full px-6 py-3 flex gap-3 pointer-events-auto overflow-x-auto max-w-[90%]">
          {!activeSections.experience && (
             <button onClick={() => toggleSection('experience')} className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded-full transition"><Briefcase size={16} /> Experience</button>
          )}
          {!activeSections.projects && (
             <button onClick={() => toggleSection('projects')} className="flex items-center gap-2 text-sm font-medium text-green-600 hover:bg-green-50 px-3 py-1.5 rounded-full transition"><Layers size={16} /> Projects</button>
          )}
          {!activeSections.skills && (
             <button onClick={() => toggleSection('skills')} className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:bg-orange-50 px-3 py-1.5 rounded-full transition"><Code size={16} /> Skills</button>
          )}
          {!activeSections.education && (
             <button onClick={() => toggleSection('education')} className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-full transition"><GraduationCap size={16} /> Education</button>
          )}
          {!activeSections.certifications && (
             <button onClick={() => toggleSection('certifications')} className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:bg-teal-50 px-3 py-1.5 rounded-full transition"><Award size={16} /> Certs</button>
          )}
          {!activeSections.strengths && (
             <button onClick={() => toggleSection('strengths')} className="flex items-center gap-2 text-sm font-medium text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full transition"><Zap size={16} /> Strengths</button>
          )}
        </div>
      </div>

    </div>
  );
};

export default ResumeForm;