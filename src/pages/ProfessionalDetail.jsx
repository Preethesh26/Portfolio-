export default function ProfessionalDetail() {
  return (
    <div className="pd-page">
      <div className="pd-container">

        {/* Header */}
        <div className="pd-header">
          <div className="pd-badge">Internal — Not Publicly Listed</div>
          <h1>💼 Professional Experience & Technical Leadership</h1>
          <p className="pd-subtitle">Associate Software Engineer & Tech Team Lead (Ongoing)</p>
          <div className="pd-meta">
            <span><i className="fas fa-building" /> Yaticorp India Pvt Ltd</span>
            <span><i className="fas fa-calendar" /> 2025 – Present</span>
          </div>
        </div>

        {/* Overview */}
        <div className="pd-section pd-overview">
          <p>
            Currently working as an Associate Software Engineer, contributing to end-to-end application
            development including frontend, backend, deployment, and system optimization. I develop responsive
            user interfaces using React, HTML, and CSS, and build scalable REST APIs using Node.js and MongoDB.
            I manage deployments using Railway, resolve production issues, and continuously improve application
            performance, stability, and scalability.
          </p>
          <p>
            In addition to my development role, I serve as a Tech Team Lead, managing and mentoring a team of
            interns across WFO and WFH environments. I assign tasks, guide development, review implementation
            quality, and ensure timely delivery. The WFO team contributes directly to the LMS project I am
            actively developing, while the WFH team works on parallel projects under my supervision.
          </p>
        </div>

        {/* Key Contributions */}
        <div className="pd-section">
          <h2>🚀 Key Contributions</h2>

          <div className="pd-contributions-grid">

            <div className="pd-card">
              <h3><span className="pd-dot" />Full Stack Development</h3>
              <ul>
                <li>Developed modern frontend interfaces using React, HTML, and CSS</li>
                <li>Built scalable REST APIs using Node.js</li>
                <li>Designed and managed MongoDB database systems</li>
                <li>Implemented structured backend architecture</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Deployment & Optimization</h3>
              <ul>
                <li>Managed deployments using Railway</li>
                <li>Resolved real-time production issues</li>
                <li>Improved system performance, scalability, and reliability</li>
              </ul>
            </div>

            <div className="pd-card pd-card-wide">
              <h3><span className="pd-dot" />Website Migration (WordPress → React)</h3>
              <ul>
                <li>Migrated company website from WordPress to React architecture</li>
                <li>Ensured SEO continuity during migration</li>
                <li>Implemented dynamic meta tags and sitemap configuration</li>
                <li>Maintained indexing and analytics tracking</li>
              </ul>
              <div className="pd-impact">
                <span>✅ Prevented SEO ranking loss</span>
                <span>✅ Improved technical SEO structure</span>
                <span>✅ Enabled scalable and maintainable architecture</span>
              </div>
            </div>

            <div className="pd-card pd-card-wide">
              <h3><span className="pd-dot" />AI Card Dealership & Employee Management System</h3>
              <p>
                Designed and implemented a complete AI Card Dealership Management System to manage dealers
                and employees across Karnataka. Built a structured onboarding flow where employees are assigned
                under respective dealers, enabling efficient workforce organization.
              </p>
              <p>
                Architected and developed the full system including admin, dealer, and employee management
                modules, with role-based access control and dedicated dashboards for each user type.
              </p>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />AI Card System Development</h3>
              <ul>
                <li>Built dynamic AI certificate generation system</li>
                <li>Developed AI card activation and verification platform</li>
                <li>Implemented structured backend validation system</li>
                <li>Migrated from third-party tools to in-house system</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Payment & Data Systems</h3>
              <ul>
                <li>Integrated secure payment gateway using Razorpay</li>
                <li>Developed order tracking and payment processing logic</li>
                <li>Migrated data from Google Sheets to MongoDB</li>
                <li>Improved data validation, security, and scalability</li>
              </ul>
            </div>

            <div className="pd-card">
              <h3><span className="pd-dot" />Analytics & Tracking</h3>
              <ul>
                <li>Integrated Meta Pixel and event tracking</li>
                <li>Supported performance-based marketing analytics</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Leadership */}
        <div className="pd-section">
          <h2>🧠 Leadership & Team Management</h2>
          <div className="pd-card">
            <ul>
              <li>Managing and mentoring a team of interns</li>
              <li>Assigning development and SEO tasks</li>
              <li>Reviewing code quality and implementation</li>
              <li>Supporting debugging and issue resolution</li>
              <li>Ensuring project timelines and delivery efficiency</li>
            </ul>
          </div>
        </div>

        {/* Current Major Project */}
        <div className="pd-section">
          <h2>📚 Current Major Project</h2>
          <div className="pd-card pd-featured-card">
            <h3>Learning Management System (LMS) — Project Lead</h3>
            <ul>
              <li>Leading full-stack LMS development</li>
              <li>Designing backend architecture and database structure</li>
              <li>Developing frontend and integrating APIs</li>
              <li>Planning scalability and deployment</li>
              <li>Managing intern contributions and task allocation</li>
            </ul>
          </div>
        </div>

        {/* Career Progression */}
        <div className="pd-section">
          <h2>📈 Career Progression</h2>
          <div className="pd-progression">
            {[
              'Marketing Automation Engineer',
              'Technical Coordinator',
              'Associate Software Engineer',
              'Tech Team Lead',
              'LMS Project Lead',
            ].map((role, i, arr) => (
              <div key={i} className="pd-prog-item">
                <div className="pd-prog-dot" />
                <span>{role}</span>
                {i < arr.length - 1 && <div className="pd-prog-arrow">↓</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="pd-section">
          <h2>🏆 Impact Summary</h2>
          <div className="pd-impact-grid">
            {[
              'Improved website SEO ranking and visibility',
              'Successfully migrated WordPress site to React',
              'Built AI Card ecosystem including dealership & payment systems',
              'Transformed data handling from sheets to scalable database systems',
              'Led and mentored a large intern team',
              'Driving development of a full-scale LMS platform',
            ].map((item, i) => (
              <div key={i} className="pd-impact-item">
                <i className="fas fa-check-circle" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
