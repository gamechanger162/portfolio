import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Plugin Developer</h4>
                <h5>Shreya Color Lab</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed multiple plugins for editing apps to ensure reduced time complexity
              for editors. Worked from July 2023 to March 2025 optimizing workflow efficiency
              and improving editor productivity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Project Lead</h4>
                <h5>DRDO - Indian Defence</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed and proposed a Smart Bullet System for Indian Military Defence System.
              Proposed innovative design solutions for Indian Defense organisation DRDO
              from August 2022 to December 2022.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solidity & FS Developer</h4>
                <h5>Zelion Network</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Smart Contract Development, Backend & Frontend Development, Blockchain Integration,
              Security Auditing, DevOps & Deployment. Working with Web3 technologies, Token Standards
              (ERC-20, ERC-721), and Cross-Chain Integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
