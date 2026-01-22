# Daud Herlangga Andrianata's CV

- Phone: +62 851 7217 8338
- Email: [andrianta.321@gmail.com](mailto:andrianta.321@gmail.com)
- Location: Jakarta, Indonesia
- LinkedIn: [daud-herlangga-andrianata](https://linkedin.com/in/daud-herlangga-andrianata)
- GitHub: [wussh](https://github.com/wussh)


# Professional Summary
Results-driven DevOps Engineer with 2+ years of experience in designing, implementing, and maintaining scalable infrastructure solutions. Expertise in Kubernetes, CI/CD pipelines, cloud platforms (AWS, GCP, Azure), and automation tools. Proven track record of optimizing deployment processes, reducing downtime, and enhancing system reliability. Passionate about infrastructure as code, monitoring, and DevSecOps practices.

# Core Skills
**Languages & Scripting:** Golang, Python, Bash/Shell, YAML

**Container & Orchestration:** Docker, Kubernetes, Helm, Karpenter, FluxCD, Argo CD

**CI/CD & Automation:** Jenkins, GitLab CI, Terraform, Ansible, GitHub Actions

**Cloud Platforms:** AWS, GCP, Azure, Cloudflare

**Monitoring & Observability:** Grafana, Prometheus, Loki, Tempo, ELK Stack, Alertmanager, OpenTelemetry

**Security & Networking:** Trivy, Falco, Harbor, Tailscale, HashiCorp Vault, HSM, AWS KMS, Istio, Traefik, NGINX Ingress, Cert-Manager

**Databases & Middleware:** PostgreSQL, MySQL, MongoDB, RabbitMQ, Kafka, Kong, Chaos Mesh

# Professional Experience
## **DevOps Engineer**, Bank Rakyat Indonesia -- Jakarta, Indonesia

Jan 2026 – present

- Full-time position in financial services sector



## **DevOps Engineer**, Falah Inovasi Teknologi -- Jakarta, Indonesia

Sept 2024 – Dec 2025

- Managed 5+ bare-metal Kubernetes clusters serving internal and client applications, ensuring 99.9% uptime through proactive maintenance, storage optimization, and network configuration

- Designed and maintained CI/CD pipelines using GitLab CI for Unity-based, microservices, and frontend applications, reducing deployment time by 40% and ensuring consistent releases across environments

- Implemented comprehensive monitoring stack (Prometheus, Grafana, Loki, Tempo, Alertmanager) with OpenTelemetry for distributed tracing, enabling proactive detection of issues and reducing incident response time by 60%

- Deployed and managed message broker infrastructure using RabbitMQ and Kafka for event-driven microservices architecture, ensuring reliable asynchronous communication

- Implemented Kong API Gateway for centralized API management, rate limiting, and authentication, improving API security and performance monitoring

- Integrated container security scanning with Trivy in CI/CD pipelines and deployed Falco for runtime security monitoring, identifying and remediating vulnerabilities before production deployment

- Implemented HashiCorp Vault with HSM integration for centralized secrets management and encryption key storage, ensuring secure credential rotation and compliance with security standards

- Implemented Harbor as private container registry with vulnerability scanning and image signing, improving supply chain security and compliance

- Conducted chaos engineering experiments with Chaos Mesh to validate system resilience, identifying weaknesses and improving fault tolerance across microservices

- Established secure networking with Tailscale VPN and Cloudflare for zero-trust architecture, improving remote access security and DDoS protection

- Deployed and optimized AI/ML inference services on Kubernetes, achieving 30% improvement in model loading times through resource tuning and autoscaling

- Applied GitOps principles with FluxCD to manage 50+ Helm releases, improving deployment traceability and reducing configuration drift by 80%

- Automated infrastructure provisioning with Ansible, standardizing server setup across 20+ nodes and reducing manual configuration errors

- Established multi-tenant environments with Traefik ingress, TLS encryption, and resource quotas, enhancing security and stability for multi-project deployments

- Led incident response for production issues, resolving critical problems within SLA windows and documenting post-mortems for continuous improvement

- Collaborated with development teams to optimize container images, reducing size by 50% and improving deployment efficiency



## **DevOps Engineer (Internship)**, Evermos -- Bandung, Indonesia

Mar 2024 – Aug 2024

- Supported DevOps operations for high-traffic e-commerce platform, improving deployment reliability for 15+ microservices

- Built and maintained Jenkins CI/CD pipelines (Freestyle & Declarative), automating build-test-deploy cycles for Golang, Java, and mobile applications

- Containerized legacy applications with Docker and orchestrated deployments on EKS, reducing environment inconsistencies by 70%

- Deployed Kong API Gateway on EKS for microservices API management, implementing rate limiting and authentication policies to improve API reliability

- Implemented Karpenter for just-in-time node provisioning on EKS, reducing cluster costs by 35% through efficient compute resource scaling

- Deployed HashiCorp Vault on EKS integrated with AWS KMS for secure secrets management, implementing dynamic credentials and automated rotation policies for databases and cloud services

- Managed AWS infrastructure (EC2, S3, RDS, IAM, KMS), provisioning resources for dev/staging environments and optimizing costs by 25%

- Optimized Jenkins pipelines through parallelization and caching, cutting average deployment time from 45 to 25 minutes

- Developed Terraform modules for standardized AWS resource provisioning, reducing setup time by 60% and ensuring compliance

- Troubleshot build failures and deployment issues in collaboration with backend and QA teams, maintaining 95% deployment success rate

- Documented infrastructure processes and CI/CD workflows, enabling knowledge transfer and team scalability



## **DevOps Bootcamp Participant**, DBS Foundation Coding Camp -- Remote

June 2023 – Dec 2023

Intensive DevOps Training Program

- Implemented end-to-end CI/CD pipelines using Jenkins, Docker, and Kubernetes, automating software delivery processes

- Deployed and managed containerized applications on AWS infrastructure, gaining hands-on experience with cloud-native technologies

- Configured monitoring and logging solutions with Prometheus, Grafana, and Loki for real-time system observability

- Collaborated on team projects applying Infrastructure as Code principles and best practices for scalable deployments

- Developed proficiency in container orchestration, network security, and automated testing methodologies



## **DevOps Bootcamp Participant**, IDCamp -- Remote

Nov 2022 – Jan 2023

DevOps Engineering Bootcamp

- Built CI/CD pipelines integrating Jenkins, Docker, and Kubernetes for automated application deployment

- Provisioned and managed GCP infrastructure using Terraform, implementing Infrastructure as Code practices

- Configured monitoring dashboards with Grafana and Prometheus for system performance tracking and alerting

- Developed automation scripts for infrastructure management and security hardening

- Gained practical experience in container orchestration, cloud deployment, and DevOps toolchains



## **Linux & DevOps Bootcamp Participant**, BTech Academy -- Remote

Sept 2022 – Nov 2022

Focused Training in Linux Administration, Ansible, and Docker

- Completed intensive training in Linux system administration, mastering server configuration and security best practices

- Implemented Ansible playbooks for automated server provisioning and configuration management across multiple environments

- Containerized applications using Docker, managing deployment pipelines and troubleshooting containerized workloads

- Developed shell scripts for system automation and monitoring, improving operational efficiency

- Applied DevOps principles to collaborative projects, focusing on infrastructure automation and reliability



## **Backend Developer Bootcamp Participant**, Alterra Academy -- Remote

Feb 2022 – July 2022

Backend Development with Golang - Independent Campus Program

- Developed RESTful APIs and backend services using Golang, implementing concurrent programming with Goroutines and Channels

- Integrated applications with PostgreSQL and NoSQL databases, ensuring data consistency and performance optimization

- Containerized Golang applications with Docker and deployed to Kubernetes clusters on AWS infrastructure

- Implemented authentication, authorization, and security best practices for production-ready applications

- Applied testing methodologies (unit, integration) and performance profiling for application optimization

- Gained experience in cloud deployment, scalability patterns, and modern backend development practices



# Projects
## **[Azure Kubeflow Deployment](https://github.com/wussh/azure-kubeflow-vm)**

Jan 2024 – present

A comprehensive Terraform solution for deploying Kubeflow on Azure using a single Ubuntu VM, automating the setup of MicroK8s, Juju, and Kubeflow to create a complete machine learning platform ready for ML/AI workloads

- Achieved complete ML platform deployment in under 30 minutes with idempotent deployment process

- Implemented Terraform for Azure infrastructure automation with robust setup script and progress tracking

- Configured MicroK8s with Juju for Kubeflow orchestration and automated data disk mounting for persistence

- Technologies

  - Terraform, Azure, Kubeflow, MicroK8s, Juju, Kubernetes, Shell Scripting, ML/AI



## **[Azure K3s Terraform Deployment](https://github.com/wussh/terraform-azure-k3s-cluster)**

Jan 2024 – present

A comprehensive infrastructure as code solution for deploying a lightweight Kubernetes (K3s) cluster on Azure using Terraform, featuring automated networking, security configurations, and support for Istio service mesh integration

- Fully automated infrastructure deployment with secure cluster configuration and proper NSG rules

- Implemented modular Terraform configuration with GitOps integration using Flux CD

- Configured advanced traffic management with Istio and comprehensive security with mTLS

- Technologies

  - Terraform, Azure, K3s, Istio, Flux CD, Traefik, Linux, GitOps



## **[SurfSense CI/CD](https://github.com/wussh/SurfSense-ci-cd)**

Jan 2024

A comprehensive CI/CD pipeline for automating deployments of SurfSense using GitHub Actions, Cloudflare Tunnel, and systemd services

- Reduced deployment time with zero manual intervention and enhanced security through Cloudflare Tunnel

- Implemented GitHub Actions workflow automation with systemd for service management

- Technologies

  - GitHub Actions, Cloudflare Tunnel, SSH, systemd, Ubuntu



## **[Fider CI/CD Pipeline](https://github.com/wussh/fider-ci-cd)**

Jan 2024

A robust CI/CD pipeline for Fider implementing automated build, test, and deployment workflows using Docker containers and GitHub Actions

- Reduced deployment errors and accelerated release cycles through automation

- Multi-stage GitHub Actions workflow with Docker containerization for consistency

- Technologies

  - GitHub Actions, Docker, Go, Node.js, PostgreSQL, SSH



## **[Kubernetes Cluster GCP Setup](https://github.com/wussh/argocd)**

Jan 2023

Comprehensive implementation of a Kubernetes cluster on Google Cloud Platform with NGINX Ingress Controller, Cert-Manager, and Argo CD using Helm

- Achieved fully automated certificate management with Let's Encrypt integration

- Established GitOps workflow with Argo CD for declarative configuration as code

- Technologies

  - Kubernetes, Argo CD, NGINX Ingress, Cert-Manager, Helm, Let's Encrypt, GCP



## **[Terraform AWS EC2 Deployment](https://github.com/wussh/terraform-aws)**

Jan 2023

Infrastructure as Code implementation using Terraform to automate EC2 instance deployment on AWS with security configurations and SSH access setup

- Reduced deployment time from hours to minutes with consistent and repeatable infrastructure

- Implemented Terraform modules with variable files for environment separation

- Technologies

  - Terraform, AWS, EC2, IAM, SSH, Security Groups



## **[FluxCD GitOps Implementation](https://github.com/wussh/flux-new)**

Jan 2023

Comprehensive GitOps implementation using FluxCD to manage Kubernetes cluster configurations and deployments

- Established fully automated deployment pipeline with version-controlled infrastructure

- Structured repository with base, clusters, and infrastructure directories using Kustomization

- Technologies

  - FluxCD, Kubernetes, GitOps, NGINX Ingress, Cert-Manager, Kustomize



## **[Helm Chart for Backend Deployment](https://github.com/wussh/backend-app)**

Jan 2023

Custom Helm chart for standardized backend application deployments in Kubernetes with templated configurations

- Reduced deployment complexity with consistent application configurations

- Templated Kubernetes manifests with configurable values.yaml for customization

- Technologies

  - Helm, Kubernetes, YAML, Ingress, Deployment, Service



# Certifications
- DBS Foundation Coding Camp - DevOps Engineering (2023)

- IDCamp - DevOps Engineering Bootcamp (2023)

- BTech Academy - Linux & DevOps Bootcamp (2022)

- Alterra Academy - Backend Development with Golang (2022)

# Education
## **University of Trunojoyo**, Bachelor of Engineering in Mechatronic Engineering -- Madura, IndonesiaSept 2020 – July 2024

- GPA: 3.47/4.00

- Relevant Coursework: Cloud Computing, Software Engineering, Operating Systems


