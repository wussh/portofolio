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
    technologies: ["GitLab", "Bare Metal", "Docker", "Kubernetes", "Grafana", "Ansible", "FluxCD", "Traefik"],
    achievements: [
      "Managed multiple bare-metal Kubernetes clusters for internal and client-facing applications (simulation systems, VR platforms, backend services, frontend), including provisioning, node maintenance, storage, networking, and upgrades.",
      "Designed and maintained CI/CD pipelines (GitLab CI) for Unity-based applications, microservices, and frontend apps, resulting in faster and more consistent releases across development, staging, and production environments.",
      "Implemented centralized monitoring, logging, and alerting using Prometheus, Grafana, Loki, and Alertmanager—enabling earlier detection of node failures, pod crashes, API latency spikes, and storage issues.",
      "Deployed and operated AI/ML inference services (Ollama, LLMs, embedding services, OCR, etc.) on Kubernetes, optimizing GPU/CPU resource requests, autoscaling, and model loading time.",
      "Applied GitOps with FluxCD to manage dozens of HelmRelease deployments, secrets, ingress configurations, and namespace-level applications—improving traceability and reducing configuration drift.",
      "Automated cluster operations using Ansible (node setup, package installation, service configuration, firewall, Docker/Containerd setup) to standardize server initialization.",
      "Implemented multi-tenant environment separation (per project/namespace) including Traefik ingress routing, TLS, PVC provisioning, and resource limits, increasing system stability in multi-project deployments.",
      "Conducted troubleshooting and incident response for production systems (Docker issues, container runtime errors, broken ingress routes, PVC failures, and cluster networking issues).",
      "Collaborated with development teams to optimize application containerization, reduce image size, and improve deployment reliability."
    ],
    period: "Sep 2024 - Nov 2025"
  },
  {
    id: "2",
    title: "DevOps Engineer",
    company: "Evermos",
    type: "Internship",
    technologies: ["Jenkins", "AWS", "Docker", "Kubernetes (EKS)", "Grafana", "Terraform"],
    achievements: [
      "Supported daily DevOps operations for a fast-paced e-commerce engineering team, focusing on improving deployment reliability across multiple microservices.",
      "Built and maintained CI/CD pipelines using Jenkins (Freestyle & Declarative), enabling automated build–test–deploy flows for backend, frontend (Golang, Java) and mobile apps.",
      "Containerized internal services using Docker and deployed them on Kubernetes (EKS), improving environment consistency and reducing deployment-related issues.",
      "Assisted in managing AWS infrastructure (EC2, S3, RDS, IAM), including environment provisioning and cleanup for development and staging workloads.",
      "Improved deployment speed by optimizing Jenkins stages, parallelizing jobs, and implementing image caching—cutting average deployment time by 30–40%.",
      "Developed Terraform scripts to standardize provisioning of S3 buckets, IAM roles, and EKS worker node configurations, reducing manual setup time.",
      "Worked closely with backend and QA teams to troubleshoot build failures, environment inconsistencies, and deployment rollbacks in staging.",
      "Documented CI/CD pipelines, deployment steps, and infrastructure usage guidelines."
    ],
    period: "Mar 2024 - Aug 2024"
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
    ],
    period: "Jun 2023 - Dec 2023"
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
    ],
    period: "Nov 2022 - Jan 2023"
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
    ],
    period: "Sep 2022 - Nov 2022"
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
    ],
    period: "Feb 2022 - Jul 2022"
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Golang", "Python", "YAML", "Bash/Shell", "Python", "Javascript", "Go"]
  },
  {
    category: "Dev Tools",
    items: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform"]
  },
  {
    category: "Cloud/Databases",
    items: ["AWS", "GCP", "Azure", "PostgreSQL", "MySQL", "MongoDB", "MinIO (Object Storage)"]
  },
  {
    category: "Monitoring/Deployment",
    items: ["Grafana", "Prometheus", "Loki", "ELK Stack", "Jenkins", "GitOps", "Git", "Promtail", "Thanos", "Metric Server", "Blackbox Exporter", "OpenTelemetry (OTEL)", "Kube Event Exporter"]
  },
  {
    category: "Areas Of Interest",
    items: ["DevOps", "MLOps", "DevSecOps", "FinOps", "Cloud Computing", "Containerization", "Automation", "Network Security"]
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Self-learning", "Time Management", "Adaptability"]
  },
  {
    category: "Infrastructure & Orchestration",
    items: ["Kubernetes (K3s)", "FluxCD (GitOps)", "Helm", "Kustomize", "Docker", "GitLab", "GitHub"]
  },
  {
    category: "Networking & Ingress",
    items: ["Traefik", "Kong (API Gateway)", "NGINX"]
  },
  {
    category: "Storage & Databases",
    items: ["Longhorn (CSI Storage)", "PostgreSQL (via CloudNative PG)", "MongoDB", "MinIO (Object Storage)"]
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "Loki", "Promtail", "Thanos", "Metric Server", "Blackbox Exporter", "OpenTelemetry (OTEL)", "Kube Event Exporter"]
  },
  {
    category: "Security & Compliance",
    items: ["Cert-Manager", "Crowdsec", "Gatekeeper", "Trivy Operator", "Keycloak"]
  },
  {
    category: "CI/CD & Development Tools",
    items: ["GitLab Runner", "Buildkit", "JupyterHub", "Portainer"]
  },
  {
    category: "Additional Tools & Platforms",
    items: ["Harbor (Container Registry)", "Chaos Mesh", "Cloudflare", "CronJob", "Homepage", "Infisical", "Kestra", "KubeVirt", "LiveKit", "Mosquitto (MQTT Broker)", "N8N", "Onyx", "Open WebUI", "PGBouncer", "Sentry", "Supabase", "Tailscale"]
  },
  {
    category: "Programming Languages & Frameworks",
    items: ["Python", "Javascript", "Go"]
  },
  {
    category: "Protocols & Formats",
    items: ["YAML", "JSON", "Protocol Buffers (gRPC)", "MQTT"]
  },
  {
    category: "System Administration",
    items: ["Bash", "Shell", "Linux"]
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
    title: "Database Backup Tools",
    description: "A comprehensive suite of database backup tools supporting PostgreSQL, MySQL, MariaDB, and MongoDB with multiple backup methods. Features a professional-grade Go interactive tool with Clean Architecture principles and lightweight Bash scripts for flexible automation.",
    githubUrl: "https://github.com/wussh/backup-tool",
    goals: [
      "Create unified backup solution for multiple databases",
      "Implement Clean Architecture in Go tool",
      "Provide both interactive and automated backup options",
      "Support multiple compression formats and storage locations"
    ],
    challenges: [
      "Supporting multiple database engines with different backup methods",
      "Implementing Clean Architecture principles in Go",
      "Managing concurrent backup operations safely",
      "Handling database authentication and connection security"
    ],
    solution: [
      "Go interactive tool with Clean Architecture (Domain, Use Case, Repository layers)",
      "Bash scripts with configuration-based automation",
      "Support for multiple compression formats (gzip, bzip2, xz)",
      "Flexible backup destinations (local, remote, cloud-ready)"
    ],
    results: [
      "Professional-grade backup tool with clean separation of concerns",
      "Support for PostgreSQL, MySQL, MariaDB, and MongoDB",
      "Interactive menu-driven interface for ease of use",
      "Automated backup scheduling via Bash scripts and cron"
    ],
    technologies: ["Go", "Bash", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Clean Architecture", "Shell Scripting", "Cron"]
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
  },
  {
    id: "10",
    title: "BotWA - Advanced AI WhatsApp Bot",
    description: "An intelligent, emotionally-aware WhatsApp bot powered by multiple AI models with advanced memory systems, personality adaptation, and natural conversation abilities. Features multi-model intelligence with automatic fallback, sophisticated memory management (SQLite/MongoDB/JSON), and dynamic personality traits that evolve based on conversations.",
    githubUrl: "https://github.com/wussh/botwa",
    goals: [
      "Create human-like conversational AI for WhatsApp",
      "Implement multi-model AI with intelligent routing",
      "Build sophisticated memory system with multiple storage options",
      "Develop adaptive personality and emotional intelligence"
    ],
    challenges: [
      "Managing multiple AI models with fallback mechanisms",
      "Implementing complex memory systems (short-term, long-term, semantic)",
      "Creating natural human-like behavior with typing delays",
      "Handling bilingual conversations (English & Indonesian)",
      "Ensuring reliability with auto-reconnect and error recovery"
    ],
    solution: [
      "Intent-based AI model routing with emotion detection",
      "Multi-layer memory system with SQLite/MongoDB support",
      "Vector embeddings for semantic memory recall",
      "Dynamic typing delays and presence updates for natural behavior",
      "Comprehensive fallback chains and gibberish detection"
    ],
    results: [
      "Successfully handles emotional and technical conversations",
      "Maintains conversation context across sessions",
      "Adapts personality based on user interaction patterns",
      "Achieves human-like response timing and behavior",
      "Supports 1800+ lines of sophisticated AI logic"
    ],
    technologies: ["Node.js", "JavaScript", "Baileys", "Ollama AI", "SQLite", "MongoDB", "Docker", "Natural Language Processing", "Vector Embeddings", "Pino"]
  }
];

export const contactInfo: ContactInfo = {
  email: "andrianta.321@gmail.com",
  phone: "085172178338",
  location: "Sidoarjo, Jawa Timur",
  linkedin: "https://linkedin.com/in/daud-herlangga-andrianata",
  github: "https://github.com/wussh"
};
