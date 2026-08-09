import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaBuilding,
  FaTimes,
  FaExpandAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import certificateMockup from "../assets/certificate_mockup.png";
import DBMS from "../assets/DBMS.png";
import ML from "../assets/ML.jpg";
import Fullstack from "../assets/Fullstack.jpg";
import O1 from "../assets/O1.png";
import O2 from "../assets/O2.png";
import O4 from "../assets/O4.png";
import O5 from "../assets/O5.png";
import O6 from "../assets/O6.png";
import Postman from "../assets/Postman API Fundamental Student Expert_page-0001.jpg";

// Mock certifications data based on user experience and background
const certificationsList = [
  {
    id: 1,
    title: "Database Management System",
    organization: "NPTEL (IIT Kharagpur | SWAYAM, Govt. of India)",
    date: "Sept 2025",
    image: DBMS,
    verifyUrl:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS145S63650014309171969",
  },
  {
    id: 2,
    title: "Machine Learning A-Z: ML, DL, AI with AWS, Python & R",
    organization: "Udemy",
    date: "July 2025",
    image: ML,
    verifyUrl:
      "https://www.udemy.com/certificate/UC-a5bbcaec-e012-49f0-9352-37767434ecf7/",
  },
  {
    id: 3,
    title: "Full Stack Web Development with MERN Stack & GenAI",
    organization: "Udemy",
    date: "July 2026",
    image: Fullstack,
    verifyUrl:
      "https://www.udemy.com/certificate/UC-4002ef15-825c-4a8d-bc46-5f353c477067/",
  },
  {
    id: 4,
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle",
    date: "June 2026",
    image: O1,
    verifyUrl:
      "https://drive.google.com/file/d/1gBFkjFZTJZK-ewT49x7KvN7BtybGjw-A/view?usp=sharing",
  },
  {
    id: 5,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    organization: "Oracle",
    date: "Oct 2025",
    image: O2,
    verifyUrl:
      "https://drive.google.com/file/d/1J-r9N8frphZincEVXP6VZgEm8EhdH-XQ/view?usp=sharing",
  },
  {
    id: 6,
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    organization: "Oracle",
    date: "June 2026",
    image: O4,
    verifyUrl:
      "https://drive.google.com/file/d/10BV_drefCWATZzkKHUYzzTF5bXvZj23H/view?usp=sharing",
  },
  {
    id: 7,
    title: "Oracle APEX Cloud Developer Certified Professional",
    organization: "Oracle",
    date: "Nov 2025",
    image: O5,
    verifyUrl:
      "https://drive.google.com/file/d/1_wIwST5Ap8dyAoJKsdACRPlyMB_4vOSc/view?usp=sharing",
  },
  {
    id: 8,
    title: "Data Analytics with Python",
    organization: "NPTEL (IIT Roorkee | SWAYAM, Govt. of India)",
    date: "May 2026",
    image: O6,
    verifyUrl:
      "https://nptel.ac.in/noc/E_Certificate/NOC26CS86S55580006904743090",
  },
  {
    id: 9,
    title: "Postman API Fundamentals",
    organization: "Postman",
    date: "Oct 2025",
    image: Postman,
    verifyUrl:
      "https://badges.parchment.com/public/assertions/pTuc1mz5TFSfgsVjtfWISQ?utm_source=url_copy&identity__email=soumyapaul2k4@gmail.com",
  },
];

// Helper function to check if the asset is a PDF
const isPdf = (url) =>
  typeof url === "string" &&
  (url.toLowerCase().includes(".pdf") || url.split("?")[0].endsWith(".pdf"));

// Helper function to position leftover grid items
const getGridClasses = (idx, total) => {
  if (total === 10) {
    if (idx === 9) {
      return "lg:col-start-2";
    }
  } else if (total === 11) {
    if (idx === 10) {
      return "lg:col-start-3 sm:col-span-2 sm:w-[calc(50%-10px)] sm:mx-auto lg:w-auto lg:mx-0 lg:col-span-1";
    }
  }
  return "";
};

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Neon Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <motion.p
        className="text-gray-400 text-base sm:text-lg mb-12 text-center max-w-xl z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Validating technical competence and continuous professional growth.
      </motion.p>

      {/* Grid Layout - Compact Landscape Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl w-full z-10">
        {certificationsList.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-row h-[88px] transform transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_20px_rgba(28,216,210,0.15)] group ${getGridClasses(
              idx,
              certificationsList.length,
            )}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Certificate Preview Image (Left Side, Landscape Aspect) */}
            <div className="relative w-28 h-full overflow-hidden shrink-0 bg-gray-900 flex items-center justify-center">
              <img
                src={isPdf(cert.image) ? certificateMockup : cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay with magnifying glass */}
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
                title="View Full Certificate"
              >
                <FaExpandAlt className="text-white text-lg" />
              </div>
            </div>

            {/* Content Details (Right Side) */}
            <div className="p-2 flex flex-col justify-between flex-1 min-w-0">
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-2 group-hover:text-[#1CD8D2] transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="mt-0.5 flex items-center gap-1 text-gray-400 text-[11px]">
                  <FaBuilding className="text-[#00bf8f] shrink-0" />
                  <span className="truncate">{cert.organization}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/5">
                <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                  <FaRegCalendarAlt className="text-[#1CD8D2] shrink-0" />
                  <span>{cert.date}</span>
                </div>

                <div className="flex gap-1.5 shrink-0">
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="text-[10px] font-semibold bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded transition duration-300"
                  >
                    View
                  </button>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold bg-[#1CD8D2]/10 hover:bg-[#1CD8D2]/25 text-[#1CD8D2] hover:text-white px-2 py-0.5 rounded transition duration-300 flex items-center gap-0.5"
                    >
                      Verify <FaExternalLinkAlt className="text-[8px]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal for Viewing Certificate Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-red-400 text-3xl focus:outline-none z-50 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Modal Image Wrapper */}
            <motion.div
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking the image
            >
              {isPdf(selectedImage) ? (
                <iframe
                  src={selectedImage}
                  className="w-[80vw] h-[75vh] rounded-xl border border-white/20 bg-white"
                  title="Certificate PDF Viewer"
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Full Certificate Screen"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
