import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlowCard from "../components/GlowCard"; // Import the GlowCard component
import { FaGithub } from "react-icons/fa";

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
      rating: 5,
      githubLink: "https://github.com/Sachin220/ISL",
    },
    {
      imgPath: "/video/online.mp4",
      alt: "Learning Platform",
      title: "Personalized Online Learning Platform",
      testimonial: "A customized education solution tailored to student needs.",
      rating: 5,
      githubLink: "https://github.com/Virraajj/Online-personalized-learning",
    },
    {
      imgPath: "/video/vqa.mp4",
      alt: "VQA System",
      title: "Visual Question Answering System",
      testimonial: "AI answers questions by analyzing image content using deep vision models.",
      rating: 5,
      githubLink: "https://github.com/Virraajj/VQAModel",
    },
    {
      imgPath: "/projects/blur/netflix.png",
      alt: "Netflix Clone",
      title: "Netflix Clone & Music Recommender",
      testimonial:
        "A Netflix UI replica with a song recommender system using Spotify API based on user preferences.",
      rating: 5,
      githubLink: "https://github.com/Virraajj/MOVIE-RECOMMENDATION-SYSTEM-",
    },
    {
      imgPath: "/video/smartflow.mp4",
      alt: "SmartFlow AI",
      title: "SmartFlow AI-driven Traffic System",
      testimonial:
        "Real-time YOLOv8-powered traffic signal optimization system for smarter urban mobility.",
      rating: 5,
      githubLink: "https://github.com/Sachin220/TrafficSignalPrediction",
    },
    {
      imgPath: "/video/proctoring.mp4",
      alt: "Online Proctoring",
      title: "Online Proctoring System using YOLOv7",
      testimonial:
        "An AI-based exam proctoring system to monitor and flag anomalies using object detection.",
      rating: 5,
      githubLink: "https://github.com/Virraajj/Online-Proctoring", // No valid link
    },
  ];

  // Function to check if the path is a video file
  const isVideo = (path) => {
    return /\.(mp4|webm|ogg)$/i.test(path);
  };

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
              {/* Wrap GlowCard in an anchor tag if a valid githubLink exists */}
              {project.githubLink && project.githubLink !== "" ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlowCard card={project}>
                    <div className="text-white text-center p-4 h-[440px] flex flex-col justify-between">
                      <div>
                        {isVideo(project.imgPath) ? (
                          <video
                            src={project.imgPath}
                            alt={project.alt}
                            className="mx-auto mb-4 rounded-md h-60 w-full object-contain"
                            controls
                            muted
                            autoPlay
                            loop
                            playbackRate={2}
                          />
                        ) : (
                          <img
                            src={project.imgPath}
                            alt={project.alt}
                            className="mx-auto mb-4 rounded-md h-60 w-full object-contain"
                          />
                        )}
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.testimonial}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-center text-blue-400 hover:text-white transition duration-200">
                        <FaGithub className="mr-2" size={20} />
                        <span className="underline">View on GitHub</span>
                      </div>
                    </div>
                  </GlowCard>
                </a>
              ) : (
                <GlowCard card={project}>
                  <div className="text-white text-center p-4 h-[440px] flex flex-col justify-between">
                    <div>
                      {isVideo(project.imgPath) ? (
                        <video
                          src={project.imgPath}
                          alt={project.alt}
                          className="mx-auto mb-4 rounded-md h-60 w-full object-contain"
                          controls
                          muted
                          autoPlay
                          loop
                          playbackRate={1.5}
                        />
                      ) : (
                        <img
                          src={project.imgPath}
                          alt={project.alt}
                          className="mx-auto mb-4 rounded-md h-60 w-full object-contain"
                        />
                      )}
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.testimonial}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-center text-gray-500">
                      <span>GitHub not available</span>
                    </div>
                  </div>
                </GlowCard>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
