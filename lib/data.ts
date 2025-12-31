import { PersonalInfo, Experience, Skill, Education, PortfolioItem, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Daud Herlangga Andrianata",
  title: "DevOps Engineer",
  location: "Sidoarjo, Jawa Timur",
  phone: "085172178338",
  email: "andrianta.321@gmail.com",
  linkedin: "https://linkedin.com/in/daud-herlangga-andrianata",
  github: "https://github.com/wussh",
  about: "Results-driven DevOps Engineer with 2+ years of experience in designing, implementing, and maintaining scalable infrastructure solutions. Expertise in Kubernetes, CI/CD pipelines, cloud platforms (AWS, GCP, Azure), and automation tools. Proven track record of optimizing deployment processes, reducing downtime, and enhancing system reliability. Passionate about infrastructure as code, monitoring, and DevSecOps practices."
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "DevOps Engineer",
    company: "Bank Rakyat Indonesia",
    type: "Full-time",
    technologies: [],
    achievements: [],
    period: "Jan 2026 - Present"
  },
  {
    id: "2",
    title: "DevOps Engineer",
    company: "Falah Inovasi Teknologi",
    type: "Full-time",
    technologies: ["GitLab CI", "Kubernetes", "Docker", "Ansible", "FluxCD", "Prometheus", "Grafana", "Traefik"],
    achievements: [
      "Managed 5+ bare-metal Kubernetes clusters serving internal and client applications, ensuring 99.9% uptime through proactive maintenance, storage optimization, and network configuration.",
      "Designed and maintained CI/CD pipelines using GitLab CI for Unity-based, microservices, and frontend applications, reducing deployment time by 40% and ensuring consistent releases across environments.",
      "Implemented comprehensive monitoring stack (Prometheus, Grafana, Loki, Alertmanager) enabling proactive detection of issues and reducing incident response time by 60%.",
      "Deployed and optimized AI/ML inference services on Kubernetes, achieving 30% improvement in model loading times through resource tuning and autoscaling.",
      "Applied GitOps principles with FluxCD to manage 50+ Helm releases, improving deployment traceability and reducing configuration drift by 80%.",
      "Automated infrastructure provisioning with Ansible, standardizing server setup across 20+ nodes and reducing manual configuration errors.",
      "Established multi-tenant environments with Traefik ingress, TLS encryption, and resource quotas, enhancing security and stability for multi-project deployments.",
      "Led incident response for production issues, resolving critical problems within SLA windows and documenting post-mortems for continuous improvement.",
      "Collaborated with development teams to optimize container images, reducing size by 50% and improving deployment efficiency."
    ],
    period: "Sep 2024 - Dec 2025"
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "Evermos",
    type: "Internship",
    technologies: ["Jenkins", "AWS", "Docker", "Kubernetes (EKS)", "Terraform", "Grafana"],
    achievements: [
      "Supported DevOps operations for high-traffic e-commerce platform, improving deployment reliability for 15+ microservices.",
      "Built and maintained Jenkins CI/CD pipelines (Freestyle & Declarative), automating build-test-deploy cycles for Golang, Java, and mobile applications.",
      "Containerized legacy applications with Docker and orchestrated deployments on EKS, reducing environment inconsistencies by 70%.",
      "Managed AWS infrastructure (EC2, S3, RDS, IAM), provisioning resources for dev/staging environments and optimizing costs by 25%.",
      "Optimized Jenkins pipelines through parallelization and caching, cutting average deployment time from 45 to 25 minutes.",
      "Developed Terraform modules for standardized AWS resource provisioning, reducing setup time by 60% and ensuring compliance.",
      "Troubleshot build failures and deployment issues in collaboration with backend and QA teams, maintaining 95% deployment success rate.",
      "Documented infrastructure processes and CI/CD workflows, enabling knowledge transfer and team scalability."
    ],
    period: "Mar 2024 - Aug 2024"
  },
  {
    id: "4",
    title: "DevOps Bootcamp Participant",
    company: "DBS Foundation Coding Camp",
    type: "Intensive DevOps Training Program",
    technologies: ["Jenkins", "AWS", "Docker", "Kubernetes", "Prometheus", "Loki"],
    achievements: [
      "Implemented end-to-end CI/CD pipelines using Jenkins, Docker, and Kubernetes, automating software delivery processes.",
      "Deployed and managed containerized applications on AWS infrastructure, gaining hands-on experience with cloud-native technologies.",
      "Configured monitoring and logging solutions with Prometheus, Grafana, and Loki for real-time system observability.",
      "Collaborated on team projects applying Infrastructure as Code principles and best practices for scalable deployments.",
      "Developed proficiency in container orchestration, network security, and automated testing methodologies."
    ],
    period: "Jun 2023 - Dec 2023"
  },
  {
    id: "5",
    title: "DevOps Bootcamp Participant",
    company: "IDCamp",
    type: "DevOps Engineering Bootcamp",
    technologies: ["Jenkins", "Terraform", "Docker", "Kubernetes", "GCP", "Grafana", "Prometheus"],
    achievements: [
      "Built CI/CD pipelines integrating Jenkins, Docker, and Kubernetes for automated application deployment.",
      "Provisioned and managed GCP infrastructure using Terraform, implementing Infrastructure as Code practices.",
      "Configured monitoring dashboards with Grafana and Prometheus for system performance tracking and alerting.",
      "Developed automation scripts for infrastructure management and security hardening.",
      "Gained practical experience in container orchestration, cloud deployment, and DevOps toolchains."
    ],
    period: "Nov 2022 - Jan 2023"
  },
  {
    id: "6",
    title: "Linux & DevOps Bootcamp Participant",
    company: "BTech Academy",
    type: "Focused Training in Linux Administration, Ansible, and Docker",
    technologies: ["Ansible", "Jenkins", "Docker", "Kubernetes", "Linux"],
    achievements: [
      "Completed intensive training in Linux system administration, mastering server configuration and security best practices.",
      "Implemented Ansible playbooks for automated server provisioning and configuration management across multiple environments.",
      "Containerized applications using Docker, managing deployment pipelines and troubleshooting containerized workloads.",
      "Developed shell scripts for system automation and monitoring, improving operational efficiency.",
      "Applied DevOps principles to collaborative projects, focusing on infrastructure automation and reliability."
    ],
    period: "Sep 2022 - Nov 2022"
  },
  {
    id: "7",
    title: "Backend Developer Bootcamp Participant",
    company: "Alterra Academy",
    type: "Backend Development with Golang - Independent Campus Program",
    technologies: ["Golang", "Docker", "Kubernetes", "PostgreSQL", "AWS"],
    achievements: [
      "Developed RESTful APIs and backend services using Golang, implementing concurrent programming with Goroutines and Channels.",
      "Integrated applications with PostgreSQL and NoSQL databases, ensuring data consistency and performance optimization.",
      "Containerized Golang applications with Docker and deployed to Kubernetes clusters on AWS infrastructure.",
      "Implemented authentication, authorization, and security best practices for production-ready applications.",
      "Applied testing methodologies (unit, integration) and performance profiling for application optimization.",
      "Gained experience in cloud deployment, scalability patterns, and modern backend development practices."
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
    gpa: "3.47",
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
  },
  {
    id: "11",
    title: "Grafana Dashboard Generator",
    description: "An automated solution for generating and deploying Grafana dashboards for Kubernetes services. Discovers services with monitoring enabled, generates customized dashboards from templates, and deploys them to Grafana via ConfigMaps while maintaining version control through GitLab integration.",
    githubUrl: "https://github.com/wussh/grafana-dashboard-generator",
    goals: [
      "Automate Grafana dashboard generation for Kubernetes services",
      "Implement service discovery for monitoring-enabled applications",
      "Create reusable dashboard templates with service-specific customization",
      "Establish GitLab integration for template management and version control",
      "Enable automated deployment through Kubernetes ConfigMaps"
    ],
    challenges: [
      "Implementing reliable service discovery across multiple namespaces",
      "Managing dashboard template customization with dynamic placeholders",
      "Ensuring Grafana sidecar auto-loading of generated ConfigMaps",
      "Maintaining version control synchronization with GitLab repository",
      "Handling concurrent dashboard generation and deployment"
    ],
    solution: [
      "Kubernetes CronJob for periodic service discovery and dashboard generation",
      "Template-based approach with envsubst for dynamic placeholder replacement",
      "ConfigMap-based deployment with proper Grafana sidecar labels",
      "GitLab API integration for template fetching and dashboard synchronization",
      "Prometheus stack with Grafana for metrics collection and visualization"
    ],
    results: [
      "Fully automated dashboard generation reducing manual configuration by 90%",
      "Scalable solution supporting unlimited services with monitoring enabled",
      "Version-controlled dashboards with GitLab repository synchronization",
      "Comprehensive monitoring coverage with standardized dashboard layouts",
      "Improved observability workflow with automated deployment pipeline"
    ],
    technologies: ["Kubernetes", "Grafana", "Prometheus", "GitLab", "CronJob", "ConfigMap", "Helm", "Bash", "YAML", "JSON", "GitOps"]
  }
];

export const contactInfo: ContactInfo = {
  email: "andrianta.321@gmail.com",
  phone: "085172178338",
  location: "Sidoarjo, Jawa Timur",
  linkedin: "https://linkedin.com/in/daud-herlangga-andrianata",
  github: "https://github.com/wussh"
};
