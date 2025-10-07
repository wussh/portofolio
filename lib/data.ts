import { PersonalInfo, Experience, Skill, Education, PortfolioItem, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Daud Herlangga Andrianata",
  title: "DevOps Engineer",
  location: "Sidoarjo, Jawa Timur",
  phone: "085172178338",
  email: "andrianta.321@gmail.com",
  linkedin: "https://linkedin.com/in/daud-herlangga-andrianata",
  github: "https://github.com/wussh",
  about: "Experienced DevOps Engineer with a strong background in CI/CD pipelines, containerization, and cloud infrastructure. Skilled in tools like Docker, Kubernetes, Jenkins, and various monitoring solutions. Passionate about automation, cloud computing, and infrastructure optimization."
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "DevOps Engineer",
    company: "Falah Inovasi Teknologi",
    type: "Fulltime",
    technologies: ["Gitlab", "Baremetal", "Docker", "Kubernetes", "Grafana", "Ansible"],
    achievements: [
      "Managed bare metal server infrastructure for software development and simulation projects, improving scalability and efficiency.",
      "Designed and implemented CI/CD pipelines for Unity-based applications, as well as frontend and backend services, leading to a 30% reduction in product release time and improved deployment reliability.",
      "Implemented monitoring, logging, and alerting solutions using Prometheus, Grafana, Loki, and Alertmanager, proactively identifying system bottlenecks and reducing downtime by 20%.",
      "Deployed and managed AI/ML models on Kubernetes, optimizing resource usage and ensuring high availability for inference services.",
      "Adopted GitOps practices using GitLab and FluxCD to automate infrastructure provisioning and application deployments, ensuring consistency, traceability, and faster rollbacks."
    ]
  },
  {
    id: "2",
    title: "DevOps Engineer",
    company: "Evermos",
    type: "Internship",
    technologies: ["Jenkins", "AWS", "Docker", "Kubernetes", "Grafana", "Terraform"],
    achievements: [
      "Designed and implemented an automated deployment process for a new application, reducing deployment time from days to minutes.",
      "Improved overall system performance by streamlining code deployment and implementing caching strategies, resulting in a 20% decrease in page load times.",
      "Delved into the optimization of Jenkins pipelines, streamlining the development and deployment processes for enhanced productivity.",
      "Implemented infrastructure as code with Terraform, reducing server setup time from hours to minutes.",
      "Developed and maintained a robust monitoring and alerting system, proactively identifying and resolving issues before they impact end users.",
      "Developed and implemented CI/CD pipelines, reducing deployment time by 50%."
    ]
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "DBS Foundation Coding Camp",
    type: "Intensive bootcamp focused on DevOps engineer learning path.",
    technologies: ["Jenkins", "AWS", "Docker", "Kubernetes", "Loki", "Prometheus"],
    achievements: [
      "Implemented Continuous Integration (CI) and Continuous Deployment (CD) pipelines.",
      "Utilized popular DevOps tools such as Jenkins, Docker, and Kubernetes to automate and streamline software development processes.",
      "Collaborated with fellow apprentices on real-world projects, fostering teamwork and enhancing problem-solving skills.",
      "Learned best practices for Infrastructure as Code (IaC) and cloud deployment, gaining proficiency in managing scalable and reliable cloud-based environments.",
      "Developed a deep understanding of containerization and orchestration technologies for efficient application deployment."
    ]
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "IDCamp",
    type: "Bootcamp DevOps engineer.",
    technologies: ["Jenkins", "Terraform", "Docker", "Kubernetes", "Grafana", "Prometheus", "GCP"],
    achievements: [
      "Implemented Continuous Integration (CI) and Continuous Deployment (CD) pipelines using Jenkins, Docker, Kubernetes, and Terraform.",
      "Utilized GCP services for cloud-based infrastructure management.",
      "Configured monitoring and alerting systems with Grafana and Prometheus.",
      "Demonstrated proficiency in scripting for automation and optimization purposes.",
      "Acquired hands-on experience in container orchestration and management.",
      "Applied security best practices to ensure robustness of deployed solutions."
    ]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "BTech Academy",
    type: "Focused Learning of Linux Administration, Ansible, and Docker",
    technologies: ["Ansible", "Jenkins", "Docker", "Kubernetes", "Linux"],
    achievements: [
      "Completed an intensive bootcamp program, focusing on Linux administration and Docker.",
      "Demonstrated expertise in setting up and managing Linux servers efficiently.",
      "Implemented containerization using Docker, including deployment, orchestration, and troubleshooting.",
      "Collaborated on hands-on projects, applying advanced Linux and Docker solutions.",
      "Acquired a deep understanding of system security and best practices for securing Linux environments.",
      "Developed proficiency in Linux shell scripting for automation and system optimization."
    ]
  },
  {
    id: "6",
    title: "Back-End Developer",
    company: "Alterra Academy",
    type: "Backend Golang Study Independent Kampus Merdeka",
    technologies: ["Golang", "Docker", "Kubernetes", "PostgreSQL", "AWS"],
    achievements: [
      "Completed an intensive and hands-on bootcamp focused on backend development using the Golang programming language.",
      "Developed proficiency in Golang syntax, concurrent programming, and web development.",
      "Acquired skills in building RESTful APIs, handling HTTP requests, and integrating with databases (SQL and NoSQL).",
      "Demonstrated expertise in concurrent programming through the use of Goroutines and Channels.",
      "Successfully implemented security best practices, including authentication and authorization mechanisms.",
      "Applied testing and debugging techniques, including unit tests, integration tests, and profiling tools.",
      "Gained experience in performance optimization, including identifying and addressing performance bottlenecks.",
      "Completed projects involving the deployment of Golang applications using Docker and cloud platforms.",
      "Acquired insights into industry best practices, scalability strategies, and emerging trends in Golang backend development."
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Golang", "Python", "YAML", "Bash/Shell"]
  },
  {
    category: "Dev Tools",
    items: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform"]
  },
  {
    category: "Cloud/Databases",
    items: ["AWS", "GCP", "Azure", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Monitoring/Deployment",
    items: ["Grafana", "Prometheus", "Loki", "ELK Stack", "Jenkins", "GitOps", "Git"]
  },
  {
    category: "Areas Of Interest",
    items: ["DevOps", "MLOps", "DevSecOps", "FinOps", "Cloud Computing", "Containerization", "Automation", "Network Security"]
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Self-learning", "Time Management", "Adaptability"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Trunojoyo",
    degree: "Bachelor of Engineering, Engineering",
    year: "2024",
    gpa: "3.5",
    coursework: "Relevant Coursework: Cloud Computing, Software Engineering, Operating Systems"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Azure Kubeflow Deployment",
    description: "A comprehensive Terraform solution for deploying Kubeflow on Azure using a single Ubuntu VM, automating the setup of MicroK8s, Juju, and Kubeflow to create a complete machine learning platform ready for ML/AI workloads.",
    githubUrl: "https://github.com/wussh/azure-kubeflow-vm",
    goals: [
      "Automate ML platform deployment on Azure",
      "Simplify Kubeflow installation process",
      "Provide GPU support for ML workloads",
      "Enable persistent storage for ML artifacts"
    ],
    challenges: [
      "Complex Kubeflow installation requirements",
      "Group permission management for MicroK8s",
      "Persistent storage configuration",
      "GPU driver integration with Kubernetes"
    ],
    solution: [
      "Terraform for Azure infrastructure automation",
      "Robust setup script with progress tracking",
      "MicroK8s with Juju for Kubeflow orchestration",
      "Automated data disk mounting for persistence"
    ],
    results: [
      "Complete ML platform in under 30 minutes",
      "Simplified access to Kubeflow dashboard",
      "Idempotent deployment process",
      "Ready-to-use ML environment with GPU support"
    ],
    technologies: ["Terraform", "Azure", "Kubeflow", "MicroK8s", "Juju", "Kubernetes", "Shell Scripting", "ML/AI"]
  },
  {
    id: "2",
    title: "Azure K3s Terraform Deployment",
    description: "A comprehensive infrastructure as code solution for deploying a lightweight Kubernetes (K3s) cluster on Azure using Terraform, featuring automated networking, security configurations, and support for Istio service mesh integration.",
    githubUrl: "https://github.com/wussh/terraform-azure-k3s-cluster",
    goals: [
      "Azure Resource Group, VNet & Subnets",
      "Network Security Groups with K3s rules",
      "Azure Load Balancer (L4) with public IP",
      "Linux VMs (Master & Worker nodes)",
      "Automated SSH key generation"
    ],
    challenges: [
      "Secure cluster communication setup",
      "Network security rule configuration",
      "Integrating Istio with Traefik ingress",
      "Automating infrastructure provisioning"
    ],
    solution: [
      "Modular Terraform configuration",
      "GitOps integration with Flux CD",
      "Advanced traffic management with Istio",
      "Comprehensive security with mTLS"
    ],
    results: [
      "Fully automated infrastructure deployment",
      "Secure cluster with proper NSG rules",
      "Enhanced traffic control with Istio Gateway",
      "Simplified K3s installation process"
    ],
    technologies: ["Terraform", "Azure", "K3s", "Istio", "Flux CD", "Traefik", "Linux", "GitOps"]
  },
  {
    id: "3",
    title: "SurfSense CI/CD",
    description: "A comprehensive CI/CD pipeline for automating deployments of SurfSense (an open-source alternative to NotebookLM/Perplexity) using GitHub Actions, Cloudflare Tunnel, and systemd services.",
    githubUrl: "https://github.com/wussh/SurfSense-ci-cd",
    goals: [
      "Automate deployment process",
      "Secure server access without public IPs",
      "Minimize downtime and human error",
      "Create scalable deployment solution"
    ],
    challenges: [
      "Secure SSH access without IP exposure",
      "Non-interactive sudo permissions",
      "Reliable error handling",
      "Secure credential management"
    ],
    solution: [
      "GitHub Actions workflow automation",
      "Cloudflare Tunnel for secure SSH",
      "systemd for service management",
      "GitHub Secrets for credentials"
    ],
    results: [
      "Deployment time reduced",
      "Zero manual intervention needed",
      "Enhanced security and reliability",
      "Comprehensive logging for troubleshooting"
    ],
    technologies: ["GitHub Actions", "Cloudflare Tunnel", "SSH", "systemd", "Ubuntu"]
  },
  {
    id: "4",
    title: "Fider CI/CD Pipeline",
    description: "A robust CI/CD pipeline for Fider, an open-source feedback platform, implementing automated build, test, and deployment workflows using Docker containers and GitHub Actions.",
    githubUrl: "https://github.com/wussh/fider-ci-cd",
    goals: [
      "Automate build and test processes",
      "Ensure code quality through linting",
      "Streamline deployment to production",
      "Maintain consistent environments"
    ],
    challenges: [
      "Coordinating Go and Node.js builds",
      "Setting up proper test environments",
      "Securing Docker Hub credentials",
      "Automating SSH deployment"
    ],
    solution: [
      "Multi-stage GitHub Actions workflow",
      "Docker containerization for consistency",
      "Secure credential management",
      "Automated SSH deployment"
    ],
    results: [
      "Reduced deployment errors",
      "Accelerated release cycles",
      "Improved code quality",
      "Enhanced developer productivity"
    ],
    technologies: ["GitHub Actions", "Docker", "Go", "Node.js", "PostgreSQL", "SSH"]
  },
  {
    id: "5",
    title: "Kubernetes Cluster GCP Setup",
    description: "A comprehensive implementation of a Kubernetes cluster on Google Cloud Platform with NGINX Ingress Controller, Cert-Manager, and Argo CD using Helm, providing a robust foundation for GitOps-based deployments and automated certificate management.",
    githubUrl: "https://github.com/wussh/argocd",
    goals: [
      "Establish GitOps workflow with Argo CD",
      "Automate SSL certificate management",
      "Configure secure ingress routing",
      "Create reproducible infrastructure"
    ],
    challenges: [
      "Integration between multiple systems",
      "SSL certificate automation",
      "Proper ingress configuration",
      "Ensuring security best practices"
    ],
    solution: [
      "Helm charts for standardized deployments",
      "Let's Encrypt integration with Cert-Manager",
      "NGINX Ingress for traffic routing",
      "Argo CD for GitOps-based deployments"
    ],
    results: [
      "Fully automated certificate management",
      "Declarative configuration as code",
      "Simplified application deployments",
      "Improved infrastructure reliability"
    ],
    technologies: ["Kubernetes", "Argo CD", "NGINX Ingress", "Cert-Manager", "Helm", "Let's Encrypt"]
  },
  {
    id: "6",
    title: "Terraform AWS EC2 Deployment",
    description: "An Infrastructure as Code (IaC) implementation using Terraform to automate the deployment of EC2 instances on AWS, complete with security configurations, SSH access setup, and proper IAM permissions management.",
    githubUrl: "https://github.com/wussh/terraform-aws",
    goals: [
      "Automate cloud infrastructure provisioning",
      "Implement infrastructure as code principles",
      "Ensure secure access management",
      "Create reproducible deployment process"
    ],
    challenges: [
      "Secure credential management",
      "Configuring proper network security",
      "Setting up passwordless SSH access",
      "Managing IAM permissions securely"
    ],
    solution: [
      "Terraform modules for AWS resources",
      "Variable files for environment separation",
      "Security groups for network protection",
      "SSH key management automation"
    ],
    results: [
      "Deployment time reduced from hours to minutes",
      "Consistent and repeatable infrastructure",
      "Improved security through automation",
      "Simplified server access management"
    ],
    technologies: ["Terraform", "AWS", "EC2", "IAM", "SSH", "Security Groups"]
  },
  {
    id: "7",
    title: "FluxCD GitOps Implementation",
    description: "A comprehensive GitOps implementation using FluxCD to manage Kubernetes cluster configurations and deployments, with a well-structured repository design that promotes clarity, scalability, and maintainability.",
    githubUrl: "https://github.com/wussh/flux-new",
    goals: [
      "Implement GitOps workflow for Kubernetes",
      "Create scalable configuration structure",
      "Automate application deployments",
      "Establish environment separation"
    ],
    challenges: [
      "Complex repository structure design",
      "Multi-environment configuration management",
      "Integration with multiple infrastructure components",
      "Troubleshooting system conflicts"
    ],
    solution: [
      "Structured repository with base, clusters, and infrastructure directories",
      "FluxCD for Git-based configuration synchronization",
      "Kustomization for environment-specific configurations",
      "Integrated cert-manager and NGINX for secure ingress"
    ],
    results: [
      "Fully automated deployment pipeline",
      "Version-controlled infrastructure",
      "Simplified cluster management",
      "Improved system reliability and consistency"
    ],
    technologies: ["FluxCD", "Kubernetes", "GitOps", "NGINX Ingress", "Cert-Manager", "Kustomize"]
  },
  {
    id: "8",
    title: "Helm Chart for Backend Deployment",
    description: "A custom Helm chart designed for standardized backend application deployments in Kubernetes, providing templated configurations for deployments, services, and ingress resources with configurable parameters for different environments.",
    githubUrl: "https://github.com/wussh/backend-app",
    goals: [
      "Standardize backend deployment patterns",
      "Enable environment-specific configurations",
      "Simplify Kubernetes resource management",
      "Create reusable deployment templates"
    ],
    challenges: [
      "Supporting various application configurations",
      "Managing environment variables securely",
      "Optimizing resource allocation",
      "Ensuring proper ingress routing"
    ],
    solution: [
      "Templated Kubernetes manifests",
      "Configurable values.yaml for customization",
      "Standardized ingress configurations",
      "Resource limit management"
    ],
    results: [
      "Reduced deployment complexity",
      "Consistent application configurations",
      "Simplified multi-environment management",
      "Improved developer experience"
    ],
    technologies: ["Helm", "Kubernetes", "YAML", "Ingress", "Deployment", "Service"]
  }
];

export const contactInfo: ContactInfo = {
  email: "andrianta.321@gmail.com",
  phone: "085172178338",
  location: "Sidoarjo, Jawa Timur",
  linkedin: "https://linkedin.com/in/daud-herlangga-andrianata",
  github: "https://github.com/wussh"
};
