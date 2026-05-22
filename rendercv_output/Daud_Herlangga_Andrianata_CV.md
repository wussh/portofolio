# Daud Herlangga Andrianata's CV

- Phone: +62 851 7217 8338
- Email: [andrianta.321@gmail.com](mailto:andrianta.321@gmail.com)
- Location: Jakarta, Indonesia
- LinkedIn: [daud-herlangga-andrianata](https://linkedin.com/in/daud-herlangga-andrianata)
- GitHub: [wussh](https://github.com/wussh)


# Professional Summary
DevOps Engineer with hands-on experience operating Kubernetes-based platforms, CI/CD pipelines, and cloud infrastructure in production environments across fintech and SaaS companies. Specializing in GitOps, Kubernetes, and cloud security automation for fintech and SaaS platforms serving production workloads with high availability and compliance requirements. Proven track record of optimizing deployment processes, reducing downtime, and enhancing system reliability through infrastructure as code and DevSecOps practices.

# Professional Experience
## **DevOps Engineer**, Bank Rakyat Indonesia -- Jakarta, Indonesia

Jan 2026 – present

Technologies: Jenkins (mobile), Bamboo (.NET backend), Fastlane, Docker, Kubernetes, App Store Connect API, Firebase App Distribution, SonarQube, ELK Stack

- Architected and implemented end-to-end mobile CI/CD pipelines using **Jenkins** with Fastlane for **BRImo iOS** — BRI's flagship mobile banking application — targeting international markets including **Taiwan** and **Timor Leste**, covering automated build, code signing, QA distribution, and App Store submission workflows

- Engineered multi-environment iOS signing automation with Fastlane Match via Jenkins pipelines, managing provisioning profiles and certificates across development, staging, and production environments for multi-region App Store accounts (TW & TL), reducing release preparation time by **60%**

- Designed multi-region deployment strategy with environment-specific configurations (bundle IDs, API endpoints, feature flags) to support **Taiwan** and **Timor Leste** App Store releases from a single codebase, ensuring compliance with regional banking regulations

- Integrated automated mobile QA gates into Jenkins pipelines — unit tests, UI tests (XCTest), and static code analysis (SonarQube) — achieving **85%+** test coverage on critical payment and authentication modules

- Built and maintained **Bamboo** CI/CD pipelines for **.NET** backend services powering BRImo's API layer, automating build, test, artifact packaging, and deployment workflows with environment promotion gates across dev, staging, and production

- Implemented Firebase App Distribution for internal testing and TestFlight automation via App Store Connect API for UAT cycles, reducing manual distribution overhead by **70%** and shortening QA feedback loops from days to hours

- Configured centralized observability with ELK Stack for pipeline and application log aggregation, enabling real-time monitoring of mobile build jobs, .NET service health, and production incident detection across all regions



## **DevOps Engineer**, Falah Inovasi Teknologi -- Jakarta, Indonesia

Sept 2024 – Dec 2025

Technologies: Kubernetes, Docker, Helm, GitLab CI, FluxCD, Prometheus, Grafana, Loki, Tempo, Alertmanager, OpenTelemetry, RabbitMQ, Kafka, Kong API Gateway, Trivy, Falco, HashiCorp Vault, HSM, Harbor, Chaos Mesh, Tailscale, Cloudflare, Ansible, Traefik, Python, Bash

- Operated 5+ bare-metal Kubernetes clusters hosting internal and customer-facing workloads with 99.9% availability

- Built GitLab C  I/CD pipelines for Unity-based, microservices, and frontend applications, reducing deployment time by 40%

- Applied GitOps principles with FluxCD to manage 50+ Helm releases, improving deployment traceability and reducing configuration drift

- Implemented enterprise security platform (HashiCorp Vault + HSM + Harbor) securing 50+ microservices and meeting internal compliance requirements, with Trivy/Falco scanning and Kong API Gateway for zero-trust networking

- Automated infrastructure provisioning with Ansible across 20+ nodes and optimized AI/ML inference services, achieving 30% improvement in model loading times



## **DevOps Engineer - Evermos (Internship Program)**, Evermos -- Bandung, Indonesia

Mar 2024 – Aug 2024

Technologies: Jenkins, Docker, Kubernetes (EKS), Kong API Gateway, Karpenter, HashiCorp Vault, AWS (EC2, S3, RDS, IAM, KMS), Terraform, Golang, Java

- Built and maintained Jenkins CI/CD pipelines (Freestyle & Declarative) for Golang, Java, and mobile applications, optimizing through parallelization and caching to cut deployment time from 45 to 25 minutes

- Containerized legacy applications with Docker and orchestrated deployments on EKS, reducing environment inconsistencies by 70% while maintaining 95% deployment success rate for 15+ microservices

- Deployed Kong API Gateway and implemented Karpenter for just-in-time node provisioning on EKS, reducing cluster costs by 35% through efficient compute resource scaling

- Implemented HashiCorp Vault on EKS integrated with AWS KMS for secure secrets management with dynamic credentials and automated rotation policies for databases and cloud services

- Developed Terraform modules for standardized AWS infrastructure (EC2, S3, RDS, IAM, KMS) provisioning, reducing setup time by 60% and optimizing costs by 25%



# Professional Training
- DBS Foundation Coding Camp — DevOps Engineering (2023)

- IDCamp — DevOps Engineering Bootcamp (2023)

- BTech Academy — Linux & DevOps Bootcamp (2022)

- Alterra Academy — Backend Development with Golang (2022)

# Projects
## **[Azure Kubeflow Deployment](https://github.com/wussh/azure-kubeflow-vm)**

Jan 2024

A comprehensive Terraform solution for deploying Kubeflow on Azure using a single Ubuntu VM, automating the setup of MicroK8s, Juju, and Kubeflow to create a complete machine learning platform ready for ML/AI workloads

- Achieved complete ML platform deployment in under 30 minutes with idempotent deployment process

- Implemented Terraform for Azure infrastructure automation with robust setup script and progress tracking

- Technologies

  - Terraform, Azure, Kubeflow, MicroK8s, Juju, Kubernetes, Shell Scripting, ML/AI



## **[Azure K3s Terraform Deployment](https://github.com/wussh/terraform-azure-k3s-cluster)**

Jan 2024

A comprehensive infrastructure as code solution for deploying a lightweight Kubernetes (K3s) cluster on Azure using Terraform, featuring automated networking, security configurations, and support for Istio service mesh integration

- Fully automated infrastructure deployment with secure cluster configuration and proper NSG rules

- Implemented modular Terraform configuration with GitOps integration using Flux CD

- Technologies

  - Terraform, Azure, K3s, Istio, Flux CD, Traefik, Linux, GitOps



# Core Skills
- **Core Platforms:** Kubernetes (EKS, bare-metal), Terraform, GitLab CI, Jenkins, Bamboo, FluxCD, Helm, Docker

- **Mobile CI/CD:** Jenkins, Fastlane, Fastlane Match, App Store Connect API, Firebase App Distribution, TestFlight, XCTest, SonarQube

- **Backend CI/CD (.NET):** Bamboo, Docker, artifact packaging, environment promotion gates

- **Cloud:** AWS (EC2, RDS, IAM, KMS, S3), Azure (VM, Storage, Networking)

- **Observability:** Prometheus, Grafana, Loki, Tempo, Alertmanager, OpenTelemetry, ELK Stack

- **Security:** HashiCorp Vault, HSM, AWS KMS, Trivy, Falco, Harbor, Kong API Gateway

- **Automation:** Ansible, Python, Bash, Infrastructure as Code (IaC)

- **Messaging & Streaming:** RabbitMQ, Kafka

- **Networking:** Traefik, NGINX Ingress, Tailscale, Cloudflare

# Certifications
- DBS Foundation Coding Camp - DevOps Engineering (2023)

- IDCamp - DevOps Engineering Bootcamp (2023)

- BTech Academy - Linux & DevOps Bootcamp (2022)

- Alterra Academy - Backend Development with Golang (2022)

# Education
## **University of Trunojoyo**, Bachelor of Engineering in Mechatronic Engineering -- Indonesia
Sept 2020 – July 2024

- GPA: 3.47/4.00

- Relevant Coursework: Cloud Computing, Software Engineering, Operating Systems


