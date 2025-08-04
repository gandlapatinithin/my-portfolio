export const portfolioData = {
  name: 'Gandlapati Nithin Reddy',
  title: 'Cloud Solutions Engineer / DevOps Engineer',
  subtitle: [ 'Architecting auto-scaling apps on AWS—cost-efficient, fault-tolerant, global.' , 'Pixel-perfect UIs that turn Figma dreams into responsive reality.', 'CI/CD pipelines that ship features at the speed of git push.'],
  contact: {
    email: 'gandlapatinithin@gmail.com',
    phone: '+91 99598 36161',
    linkedin: 'https://www.linkedin.com/in/gandlapatinithin/',
    github: 'https://github.com/gandlapatinithin',
  },
  about: {
    description: [
      "A recent computer-science graduate who has already containerised and deployed 7+ academic and open-source projects on Cloud with Kubernetes, Terraform and Jenkins. Comfortable spinning up secure, cost-efficient cloud environments (EC2, EKS, RDS, S3) and CI/CD pipelines that push code to production in < 5 min. Currently extending skill-set into React and JavaScript to build tidy dashboards that surface infrastructure metrics. Fast learner, Linux-native, and passionate about automating everything that can be scripted."
    ],
    skills: [
      'AWS','Azure', 'GCP','Python','Docker', 'Git', 'CI/CD','JavaScript','Kubernetes', 'Terraform', 'Jenkins','React', 'HTML', 'CSS', 'Tailwind CSS', 'Linux', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana', 'MySQL']
  },
  experience: [
    {
      id: 1,
      title: 'AWS & DevOps Industrial Training and Internship',
      company: 'SURE Trust',
      duration: 'Aug 2024 - Dec 2024',
      description: "Completed a rigorous 4-month industrial immersion focused on cloud-native automation. Mastered AWS core services (EC2, EKS, RDS, S3), built infrastructure-as-code with Terraform, and engineered CI/CD pipelines in Jenkins that reduced deployment time by 70 %. Containerised micro-services with Docker, orchestrated via Kubernetes, and automated provisioning with Shell/Python scripting. Delivered 5 production-grade projects, ensuring security, monitoring, and 99.9 % uptime while consistently applying DevOps best practices."
    },
    {
      id: 2,
      title: 'IoT prototyping in healthcare industry',
      company: 'Oralens Healthcare LLC',
      duration: 'Nov 2023 – Feb 2024',
      description: 'Conducted user-research and translated findings into pixel-perfect wireframes and interactive Figma prototypes that lifted task-completion rates by 30 %. Leveraged 2-D/3-D modeling (Blender) to craft concept visuals and rapid prototypes, iterating through user-testing loops to refine usability, accessibility, and aesthetic appeal before hand-off to engineering.'
    },
    {
      id: 3,
      title: 'IoT PCB Designer – Home-Automation Solutions',
      company: 'Arc Labs',
      duration: 'Aug 2023 – Dec 2024',
      description: 'Designed compact, Two-layer PCB boards for Wi-Fi-enabled home-automation nodes using ESP32 and relay modules. Created schematics in EasyEDA, performed signal-integrity checks, and optimized power planes to cut board size by 18 %. Assembled and tested prototypes, integrating sensors and MQTT firmware for seamless cloud control.'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Prime Web App Clone',
      description: 'This project demonstrates deploying an Amazon Prime Web App clone using a set of DevOps tools and best practices.',
      image: '/images/Overview.png',
      technologies: ['AWS', 'Docker', 'Jenkins', 'ArgoCD', 'Kubernetes', 'Terraform','Grafana', 'Prometheus','Git'],
      githubUrl: 'https://github.com/gandlapatinithin/prime-web-app-clone'
    },
    {
      id: 2,
      title: 'Deploying A Three Tier Application in AWS',
      description: 'This project is a hands-on exploration of building a three-tier web architecture on AWS. I’ll be manually creating the necessary network, security, application, and database components, ensuring the architecture is both highly available and scalable.',
      image: '/images/web-server.png',
      technologies: ['AWS', 'EC2', 'RDS', 'S3', 'VPC'],
      githubUrl: 'https://github.com/gandlapatinithin/Deploying-a-three-tier-application-in-AWS'
    },
    {
      id: 3,
      title: 'Localized Marketplace',
      description: 'A full-stack web application that allows users to register, log in, create listings for items, browse nearby listings using a map interface, and interact in a secure and scalable environment.',
      image: '/images/maket.png',
      technologies: ['React', 'Node.js', 'Sql', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/gandlapatinithin/Localized-Marketplace-App'
    },
    {
      id: 4,
      title: 'E-Waste Recycling Locator',
      description: 'This project helps users find nearby e-waste recycling centers based on their location. It integrates Google Maps, Firestore, and a leaderboard system to encourage participation.',
      image: '/images/ewaste.jpeg',
      technologies: ['GCP', 'API', 'Firestore', 'Compute Engine', 'Google Maps'],
      githubUrl: 'https://github.com/gandlapatinithin/E-Waste-Recycling-Locator'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: "A modern, real-time analytics dashboard built with React, featuring interactive charts, live data updates, and comprehensive filtering capabilities.",
      image: '/images/Analytics.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Chart.js','lucide-react'],
      githubUrl: 'https://github.com/gandlapatinithin/analytics-dashboard'
    },
  ]
};