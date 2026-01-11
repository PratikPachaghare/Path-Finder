import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download } from 'lucide-react';

const ResumePreview = ({ children }) => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    
    // VALIDATION: Make sure content exists before downloading
    if (!element) {
        alert("Resume content is missing!");
        return;
    }

    const opt = {
      margin:       0, // No margin because your CSS handles padding
      filename:     'my-resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      
      // FIX 1: Add useCORS to allow icons/images to render correctly
      // FIX 2: scale: 2 is good for high quality
      html2canvas:  { scale: 2, useCORS: true, logging: true },
      
      // FIX 3: Change unit to 'mm' and format to 'a4' to match your CSS (w-[210mm])
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().set(opt).from(element).save().catch(err => {
        console.error("PDF Generation Error:", err);
        alert("Error generating PDF. Check console for details.");
    });
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      
      <button 
        onClick={handleDownload} 
        className="mb-8 bg-green-600 text-white px-8 py-3 rounded-full flex items-center shadow-xl hover:bg-green-700 transition-all font-bold tracking-wide transform hover:scale-105 active:scale-95"
      >
        <Download size={20} className="mr-2" /> Download Resume PDF
      </button>

      {/* THE RESUME CONTAINER */}
      {/* Ensure background is white so it doesn't print transparent */}
      <div 
        className="shadow-2xl bg-white w-[210mm] min-h-[297mm] mx-auto overflow-hidden" 
        ref={resumeRef}
      >
        {children}
      </div>
    </div>
  );
};

export default ResumePreview;