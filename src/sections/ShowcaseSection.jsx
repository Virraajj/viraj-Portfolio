import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlowCard from "../components/GlowCard"; // Import the GlowCard component

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    // Section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card on scroll
    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      imgPath: "/projects/blur/major.jpeg",
      alt: "Avatar Interface",
      title: "Avatar-based Sign Language Video Generation",
      testimonial:
        "Inclusive deep learning-powered platform translating speech to sign language for the hearing impaired.",
      rating: 5, // Added for GlowCard consistency
    },
    {
      imgPath: "/projects/blur/learning.png",
      alt: "Learning Platform",
      title: "Personalized Online Learning Platform",
      testimonial: "A customized education solution tailored to student needs.",
      rating: 5,
    },
    {
      imgPath: "/projects/blur/vqa.jpg",
      alt: "VQA System",
      title: "Visual Question Answering System",
      testimonial: "AI answers questions by analyzing image content using deep vision models.",
      rating: 5,
    },
    {
      imgPath: "/projects/blur/netflix.png",
      alt: "Netflix Clone",
      title: "Netflix Clone & Music Recommender",
      testimonial:
        "A Netflix UI replica with a song recommender system using Spotify API based on user preferences.",
      rating: 5,
    },
    {
      imgPath: "/projects/blur/smartflow.jpeg",
      alt: "SmartFlow AI",
      title: "SmartFlow AI-driven Traffic System",
      testimonial:
        "Real-time YOLOv8-powered traffic signal optimization system for smarter urban mobility.",
      rating: 5,
    },
    {
      imgPath: "/projects/blur/image.png",
      alt: "Online Proctoring",
      title: "Online Proctoring System using YOLOv7",
      testimonial:
        "An AI-based exam proctoring system to monitor and flag anomalies using object detection.",
      rating: 5,
    },
  ];

  return (
    <div ref={sectionRef} id="work" className="relative bg-black py-16">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="w-full"
            >
             <GlowCard card={project}>
    <div className="text-white text-center p-4 h-[400px] flex flex-col justify-between">
      <div>
        <img
          src={project.imgPath}
          alt={project.alt}
          className="mx-auto mb-4 rounded-md h-60 w-full object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.testimonial}</p>
      </div>
    </div>
  </GlowCard>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;