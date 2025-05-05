import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Constants and Types
const NodeTypes = {
  CHECKPOINT: "CHECKPOINT",
  DIVERGE: "DIVERGE",
  CONVERGE: "CONVERGE",
};

const ItemSize = {
  LARGE: "LARGE",
  SMALL: "SMALL",
};

const Branch = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

const TIMELINE = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "DYANAMIC STUDENT AWARD'2025 at MIT Academy of Engineering",
    size: ItemSize.SMALL,
    subtitle:
      "Dyanamic Student of the Academic year 2021-2025 at MIT Academy of Engineering",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/dy.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer Intern @PROSPERASOFT",
    size: ItemSize.SMALL,
    subtitle:
      "Final Year SDE Intern at ProsperaSoft worked on Diagram Generation tool for Ivision Technologies and Building an App for Nearby Search Optimizations",
    image: "/timeline/prospera.png",
    slideImage: "/timeline/tridit.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Making My Mark with an IEEE Publication",
    size: ItemSize.SMALL,
    subtitle:
      "Presented at ICIICS'24 Conference, This study presents an age-adaptive approach to lung cancer prediction using machine learning and ensemble models, highlighting Random Forest's superior performance across age groups.",
    image: "/timeline/ieee.png",
    slideImage: "/timeline/ieee-lung.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SAP CDC Intern @Colgate-Palmolive",
    size: ItemSize.SMALL,
    subtitle:
      "At Colgate Global Business Services, I specialize in UI development by creating localized child sites, responsive web forms, and email templates for global products, while also resolving Jira tickets to ensure seamless user experiences and timely project delivery.",
    image: "/timeline/colgate.png",
    slideImage: "/timeline/about.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AEM Intern at Tridit Digital",
    size: ItemSize.SMALL,
    subtitle:
      "The AEM Development Internship at Tridit Digital Private Limited in Pune offers hands-on training in Adobe Experience Manager (AEM), covering architecture, components, workflows, integrations, and custom development, with live projects and mentor-led evaluations to build strong skills in digital content management.",
    image: "/timeline/tridit.png",
    slideImage: "/timeline/tridit.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Best Paper Presenter Award in ICIICS'24 Conference",
    size: ItemSize.SMALL,
    subtitle:
      "Received the Best Paper Presenter award for the paper titled Age-Adaptive Lung Cancer Prediction Using Ensemble Learning Methods at the 2nd IEEE International Conference on Integrated Intelligence and Communication Systems (ICIICS-2024), organized by Sharnbasva University, Kalaburagi, on 22nd-23rd November 2024.",
    image: "/timeline/ieee.png",
    slideImage: "/timeline/bestpaper.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Certificate of Appreciation in NAKSHATRA",
    size: ItemSize.SMALL,
    subtitle:
      "Received a Certificate of Appreciation in NAKSHATRA for exceptional contributions to co-curricular & extra-curricular activities, demonstrating active involvement and dedication beyond academics.",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/cocunakshatra.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Selected for the SIH 2024 Internal Hackathon",
    size: ItemSize.SMALL,
    subtitle:
      "Selected for the Smart India Hackathon (SIH) 2024 Internal Hackathon with a project titled, Development of an AI/ML-Based Solution for Detecting Face-Swap Deepfake Videos.",
    image: "/timeline/sih1.jpeg",
    slideImage: "/timeline/sih-1.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Organizer for Academic Exam for SYBTECH Students",
    size: ItemSize.SMALL,
    subtitle:
      "As the CodeChef Management Lead at MIT AOE, I conducted proctored online exams for the SY BTech C++ course and managed students across three engineering schools, promoting problem-solving through competitive programming.",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/sybtechexam.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Organizer of the MOU signing and collaboration at MITAOE",
    size: ItemSize.SMALL,
    subtitle:
      "Organized the event for the MOU signing and collaboration on 23rd September 2024, facilitating the warm welcome of delegates from Hilltop Marketing, along with representatives from IRO and MITAOE. This event served as a testament to the growing international collaborations.",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/mousigning.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Organized Language Immersion Day at MITAOE",
    size: ItemSize.SMALL,
    subtitle:
      "Organized Language Immersion Day at MIT Academy of Engineering under the Foreign Language Club",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/languageimmersion.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Organizer of Various coding competitions and hackathon",
    size: ItemSize.SMALL,
    subtitle:
      "Organized Coding Competition - CodeScript, CodeVelocity and Pair Programming events along with Hackkathons- Datathon'23 as a Girlscript and CodeChef(Management Lead) Coordinator.",
    image: "/timeline/gs.png",
    slideImage: "/timeline/datathon.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title:
      "Cloth Donation Drive – Promoting Social Responsibility and Community Welfare",
    size: ItemSize.SMALL,
    subtitle:
      "Participated in a cloth donation drive in the second year, contributing to social welfare and community service.",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/donation.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title:
      "Successfully completed 2-day Vehicle Dynamics Workshop conducted by Team Niyudrath Racing.",
    size: ItemSize.SMALL,
    subtitle:
      "Hands-On Training in Automotive Suspension, Steering Geometry, Braking Systems, and Vehicle Stability Dynamics",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/niu.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Runner-up in Navaratri MITAOE(Choreographer)",
    size: ItemSize.SMALL,
    subtitle:
      "Served as the choreographer, leading the team in concept creation, dance coordination, and performance execution, showcasing creativity, leadership, and team collaboration.",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/navratri.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Journey begins at MITAOE",
    size: ItemSize.SMALL,
    subtitle:
      "Joined MIT Academy of Engineering Alandi Pune as a freshman in December 2022",
    image: "/timeline/MITAOE-logo.png",
    slideImage: "/timeline/adm.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

/**
 * @typedef {Object} CheckpointNode
 * @property {string} type - The type of the node (CHECKPOINT).
 * @property {string} title - The title of the checkpoint.
 * @property {string} [subtitle] - The subtitle of the checkpoint (optional).
 * @property {string} size - The size of the checkpoint (LARGE or SMALL).
 * @property {string} [image] - The image URL for the checkpoint (optional).
 * @property {string} [slideImage] - The slide image URL for the checkpoint (optional).
 * @property {boolean} shouldDrawLine - Whether to draw a line for the checkpoint.
 * @property {string} alignment - The alignment of the checkpoint (LEFT or RIGHT).
 */

/**
 * @typedef {Object} BranchNode
 * @property {string} type - The type of the node (CONVERGE or DIVERGE).
 */

/**
 * @typedef {CheckpointNode | BranchNode} TimelineNodeV2
 */

const svgColor = "#9CA3AF";
const animColor = "#FCD34D";
const separation = 600; // Increased separation to prevent overlap
const strokeWidth = 2;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

const TimelineSection = () => {
  const [svgWidth, setSvgWidth] = useState(400);
  const [rightBranchX, setRightBranchX] = useState(109);
  const timelineSvg = useRef(null);
  const svgContainer = useRef(null);
  const screenContainer = useRef(null);

  const svgCheckpointItems = TIMELINE.filter(
    (item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine
  );
  const svgLength = svgCheckpointItems.length * separation;

  const addNodeRefsToItems = (timeline) => {
    return timeline.map((node, idx) => ({
      ...node,
      next: timeline[idx + 1],
      prev: timeline[idx - 1],
    }));
  };

  const getDotString = (x, y) => {
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${
      x - dotSize / 2
    } y=${
      y - dotSize / 2
    } ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='dot' ></circle>`;
  };

  const addText = (node, y, isDiverged) => {
    const { title, subtitle, size, image } = node;
    const offset = isDiverged ? rightBranchX : 10;
    const foreignObjectX = dotSize / 2 + 20 + offset; // Increased offset for better spacing
    const foreignObjectY = y - dotSize / 2 + (size === ItemSize.LARGE ? 0 : 0); // Adjusted Y for large titles to move them down
    const foreignObjectWidth = svgWidth - (dotSize / 2 + 20 + offset);
    const titleSizeClass = size === ItemSize.LARGE ? "text-6xl" : "text-xl"; // Reduced small text size
    const logoString = image
      ? `<img src='${image}' class='h-8 mb-2' loading='lazy' width='100' height='32' alt='${title}' />`
      : "";
    const subtitleString = subtitle
      ? `<p class='text-lg mt-2 text-gray-200 font-medium tracking-wide'>${subtitle}</p>` // Reduced subtitle size
      : "";
    return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
            height=${separation / 2}>${logoString}<p class='${titleSizeClass} font-bold text-white'>${title}</p>${subtitleString}</foreignObject>`;
  };

  const drawDot = (node, y, isDiverged) => {
    const { next, alignment } = node;
    let adjustedY = y;
    if (next && next.type === NodeTypes.DIVERGE) {
      adjustedY = y - curveLength + 6 * dotSize;
    }
    if (next && next.type === NodeTypes.CONVERGE) {
      adjustedY = y + curveLength - 6 * dotSize;
    }
    const dotString = getDotString(
      alignment === Branch.LEFT ? leftBranchX : rightBranchX,
      adjustedY
    );
    const textString = addText(node, adjustedY, isDiverged);
    return `${textString}${dotString}`;
  };

  const drawLine = (node, y, i, isDiverged) => {
    const { alignment, prev, next } = node;
    const isPrevDiverge = prev && prev.type === NodeTypes.DIVERGE;
    const isNextConverge = next && next.type === NodeTypes.CONVERGE;
    const lineY = Math.abs(y + separation);
    const lineX = alignment === Branch.LEFT ? leftBranchX : rightBranchX;

    let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;

    if (isDiverged) {
      const divergedLineX = alignment === Branch.LEFT ? rightBranchX : leftBranchX;
      str += `<line class='str' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${animColor} />`;
    }
    return str;
  };

  const drawBranch = (node, y, i) => {
    const { type } = node;
    if (type === NodeTypes.DIVERGE) {
      return `<path class='str' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
        y + curveLength / 2
      } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
        y + curveLength
      }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${
        y + curveLength
      } x2=${rightBranchX} y2=${
        y + separation
      } stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
        y + curveLength / 2
      } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
        y + curveLength
      }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${
        y + curveLength
      } x2=${rightBranchX} y2=${y + separation} stroke=${animColor} />`;
    } else if (type === NodeTypes.CONVERGE) {
      return `<path class='str' d='M ${rightBranchX} ${
        y + separation - curveLength
      } C ${rightBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation
      }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
        y + separation - curveLength
      )} stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${rightBranchX} ${
        y + separation - curveLength
      } C ${rightBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation
      }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
        y + separation - curveLength
      )} stroke=${animColor} />`;
    }
    return "";
  };

  const generateTimelineSvg = (timeline) => {
    let index = 1;
    let y = dotSize / 2;
    const timelineStyle = `<style>.str, .dot{stroke-width: ${strokeWidth}px}.anim-branch{stroke-dasharray: 186}</style>`;
    let isDiverged = false;

    const svg = addNodeRefsToItems(timeline).reduce((svg, node) => {
      const { type, shouldDrawLine } = node;
      let lineY = y;
      let dotY = y + separation / 2;

      if (type === NodeTypes.CHECKPOINT) {
        if (!node.next) lineY = y - separation / 2;
        if (!shouldDrawLine) dotY = y;

        if (shouldDrawLine) {
          svg = `${drawLine(node, lineY, index, isDiverged)}${svg}`;
          y += separation;
          index++;
        }
        svg = svg.concat(drawDot(node, dotY, isDiverged));
      } else if (type === NodeTypes.DIVERGE) {
        isDiverged = true;
        svg = `${drawBranch(node, y, index)}${svg}`;
      } else if (type === NodeTypes.CONVERGE) {
        isDiverged = false;
        svg = `${drawBranch(node, y - separation, index - 1)}${svg}`;
      }
      return svg;
    }, timelineStyle);

    return svg;
  };

  const addLineSvgAnimation = (timeline, duration, index) => {
    timeline.from(
      svgContainer.current.querySelectorAll(`.line-${index + 1}`),
      { scaleY: 0, duration },
      `start+=${duration * index}`
    );
    return timeline;
  };

  const addDivergingBranchLineAnimation = (timeline, duration, index) => {
    timeline
      .from(
        svgContainer.current.querySelector(`.line-${index + 1}`),
        { scaleY: 0, duration },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-${index + 1}`),
        { strokeDashoffset: 186, duration: duration - 2 },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-line-${index + 1}`),
        { scaleY: 0, duration: duration - 1 },
        `start+=${duration * (index + 1) - 2}`
      );
    return timeline;
  };

  const addConvergingBranchLineAnimation = (timeline, duration, index) => {
    timeline
      .from(
        svgContainer.current.querySelector(`.line-${index + 1}`),
        { scaleY: 0, duration },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-line-${index + 1}`),
        { scaleY: 0, duration: duration - 1 },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-${index + 1}`),
        { strokeDashoffset: 186, duration: duration - 2 },
        `start+=${duration * (index + 1) - 1}`
      );
    return timeline;
  };

  const animateTimeline = (timeline, duration) => {
    let index = 0;
    addNodeRefsToItems(TIMELINE).forEach((item) => {
      if (item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine) {
        const { next, prev } = item;
        if (prev?.type === NodeTypes.DIVERGE) {
          addDivergingBranchLineAnimation(timeline, duration, index);
        } else if (next?.type === NodeTypes.CONVERGE) {
          addConvergingBranchLineAnimation(timeline, duration, index);
        } else {
          addLineSvgAnimation(timeline, duration, index);
        }
        index++;
      }
    });
  };

  const setSlidesAnimation = (timeline) => {
    svgCheckpointItems.forEach((_, index) => {
      const slideSelector = `.slide-${index + 1}`;
      timeline.fromTo(
        screenContainer.current.querySelector(slideSelector),
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        `start+=${index * 2}`
      );
      if (index < svgCheckpointItems.length - 1) {
        timeline.to(
          screenContainer.current.querySelector(slideSelector),
          { opacity: 0, duration: 0.5 },
          `start+=${(index + 1) * 2}`
        );
      }
    });
  };

  const initScrollTrigger = () => {
    const timeline = gsap
      .timeline({ defaults: { ease: "none", duration: 0.44 } })
      .addLabel("start");
    let duration,
      trigger,
      start,
      end,
      additionalConfig = {};

    if (window.innerWidth >= 768) {
      // Desktop view
      setSlidesAnimation(timeline);
      const platformHeight = screenContainer.current.getBoundingClientRect().height;
      trigger = screenContainer.current;
      start = `top ${(window.innerHeight - platformHeight) / 2}`;
      end = `+=${svgLength - platformHeight - separation / 2}`; // Adjusted to reduce gap
      additionalConfig = { pin: true, pinSpacing: true };
      duration = timeline.totalDuration() / svgCheckpointItems.length;
    } else {
      // Mobile view
      screenContainer.current.innerHTML = "";
      trigger = svgContainer.current;
      start = "top center";
      end = `+=${svgLength - separation / 2}`; // Adjusted to reduce gap
      duration = 3;
    }

    ScrollTrigger.create({
      ...additionalConfig,
      trigger,
      start,
      end,
      scrub: 0,
      animation: timeline,
    });
    return { timeline, duration };
  };

  useEffect(() => {
    const containerWidth = svgContainer.current.clientWidth;
    setSvgWidth(containerWidth);
    setRightBranchX(window.innerWidth >= 768 ? 109 : 70);
    timelineSvg.current.innerHTML = generateTimelineSvg(TIMELINE);

    const { timeline, duration } = initScrollTrigger();
    animateTimeline(timeline, duration);

    // Refresh ScrollTrigger to ensure proper initialization
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderSlides = () => (
    <div
      className="relative w-full h-[400px] shadow-xl bg-black rounded-2xl overflow-hidden"
      ref={screenContainer}
    >
      <div className="w-full h-[34px] opacity-0 pointer-events-none select-none" />
      <div className="absolute inset-0">
        {svgCheckpointItems.map((item, index) => (
          <img
            key={`${item.title}-${index}`}
            className={`w-full h-full object-contain absolute inset-0 slide-${index + 1}`}
            src={item.slideImage || ""}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="timeline" className="w-full min-h-screen py-8 flex flex-col justify-center bg-black text-white">
      <div className="flex flex-col px-4">
        <p className="text-sm font-bold text-gray-500">MILESTONES</p>
        <h1 className="text-4xl font-bold mt-2">Timeline</h1>
        <h2 className="text-xl mt-2">Moments That Shaped My Journey</h2>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-20 px-4">
        <div className="col-span-12 md:col-span-6" ref={svgContainer}>
          <svg
            width={svgWidth}
            height={svgLength}
            viewBox={`0 0 ${svgWidth} ${svgLength}`}
            fill="none"
            ref={timelineSvg}
          ></svg>
        </div>
        <div className="col-span-12 md:col-span-6 hidden md:flex">
          {renderSlides()}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;