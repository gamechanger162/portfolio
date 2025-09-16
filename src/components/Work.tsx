import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{index === 0 ? 'Automated Stock Market Prediction' : index === 1 ? 'Fake Review Detector' : index === 2 ? 'WebVR Shopping Experience' : index === 3 ? 'Quit Smoking App' : index === 4 ? 'Encounter Coders Platform' : 'Gamers Dating Website'}</h4>
                    <p>{index === 0 ? 'Web App Development' : index === 1 ? 'ML & Deep Learning' : index === 2 ? 'WebVR Innovation' : index === 3 ? 'Mobile App Development' : index === 4 ? 'Educational Platform' : 'Website Development'}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{index === 0 ? 'Python, Machine Learning, Web Development' : index === 1 ? 'Machine Learning, Deep Learning, Web App' : index === 2 ? 'WebVR, 3D Modeling, JavaScript' : index === 3 ? 'Mobile Development, Psychology Integration' : index === 4 ? 'HTML, CSS, JavaScript, E-Learning' : 'Dating Platform, World Chat, Gaming Focus'}</p>
              </div>
              <WorkImage image={index === 0 ? '/images/stock-market.svg' : index === 1 ? '/images/fake-review.svg' : index === 2 ? '/images/webvr.svg' : index === 3 ? '/images/quit-smoking.svg' : index === 4 ? '/images/education.svg' : '/images/gaming.svg'} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
