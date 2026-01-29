// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Daud Herlangga Andrianata",
  footer: context { [#emph[Daud Herlangga Andrianata -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Jan 2026] ],
  locale-catalog-language: "en",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: false,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.2em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "|",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.15cm,
  sections-space-between-regular-entries: 0.42cm,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.08cm,
  entries-highlights-space-between-items: 0.08cm,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 22,
  ),
)


= Daud Herlangga Andrianata

  #headline([DevOps Engineer | Cloud & Kubernetes Automation])

#connections(
  [Jakarta, Indonesia],
  [#link("mailto:andrianta.321@gmail.com", icon: false, if-underline: false, if-color: false)[andrianta.321\@gmail.com]],
  [#link("tel:+62-851-7217-8338", icon: false, if-underline: false, if-color: false)[0851-7217-8338]],
  [#link("https://linkedin.com/in/daud-herlangga-andrianata", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/daud-herlangga-andrianata]],
  [#link("https://github.com/wussh", icon: false, if-underline: false, if-color: false)[github.com\/wussh]],
)


== Professional Summary

DevOps Engineer with hands-on experience operating Kubernetes-based platforms, CI\/CD pipelines, and cloud infrastructure in production environments across fintech and SaaS companies. Specializing in GitOps, Kubernetes, and cloud security automation for fintech and SaaS platforms serving production workloads with high availability and compliance requirements. Proven track record of optimizing deployment processes, reducing downtime, and enhancing system reliability through infrastructure as code and DevSecOps practices.

== Professional Experience

#regular-entry(
  [
    #strong[DevOps Engineer], Bank Rakyat Indonesia -- Jakarta, Indonesia

  ],
  [
    Jan 2026 – present

  ],
  main-column-second-row: [
    #summary[Technologies: Kubernetes, Docker, Bamboo, ELK]

    - Leading migration initiative from VM-based infrastructure to containerized Kubernetes platform for banking applications

    - Designing and implementing end-to-end CI\/CD pipelines using Bamboo for automated build, test, and deployment workflows

    - Architecting infrastructure and DevOps automation strategies for financial services workloads

  ],
)

#regular-entry(
  [
    #strong[DevOps Engineer], Falah Inovasi Teknologi -- Jakarta, Indonesia

  ],
  [
    Sept 2024 – Dec 2025

  ],
  main-column-second-row: [
    #summary[Technologies: Kubernetes, Docker, Helm, GitLab CI, FluxCD, Prometheus, Grafana, Loki, Tempo, Alertmanager, OpenTelemetry, RabbitMQ, Kafka, Kong API Gateway, Trivy, Falco, HashiCorp Vault, HSM, Harbor, Chaos Mesh, Tailscale, Cloudflare, Ansible, Traefik, Python, Bash]

    - Operated 5+ bare-metal Kubernetes clusters hosting internal and customer-facing workloads with 99.9\% availability

    - Built GitLab C  I\/CD pipelines for Unity-based, microservices, and frontend applications, reducing deployment time by 40\%

    - Applied GitOps principles with FluxCD to manage 50+ Helm releases, improving deployment traceability and reducing configuration drift

    - Implemented enterprise security platform (HashiCorp Vault + HSM + Harbor) securing 50+ microservices and meeting internal compliance requirements, with Trivy\/Falco scanning and Kong API Gateway for zero-trust networking

    - Automated infrastructure provisioning with Ansible across 20+ nodes and optimized AI\/ML inference services, achieving 30\% improvement in model loading times

  ],
)

#regular-entry(
  [
    #strong[DevOps Engineer - Evermos (Internship Program)], Evermos -- Bandung, Indonesia

  ],
  [
    Mar 2024 – Aug 2024

  ],
  main-column-second-row: [
    #summary[Technologies: Jenkins, Docker, Kubernetes (EKS), Kong API Gateway, Karpenter, HashiCorp Vault, AWS (EC2, S3, RDS, IAM, KMS), Terraform, Golang, Java]

    - Built and maintained Jenkins CI\/CD pipelines (Freestyle & Declarative) for Golang, Java, and mobile applications, optimizing through parallelization and caching to cut deployment time from 45 to 25 minutes

    - Containerized legacy applications with Docker and orchestrated deployments on EKS, reducing environment inconsistencies by 70\% while maintaining 95\% deployment success rate for 15+ microservices

    - Deployed Kong API Gateway and implemented Karpenter for just-in-time node provisioning on EKS, reducing cluster costs by 35\% through efficient compute resource scaling

    - Implemented HashiCorp Vault on EKS integrated with AWS KMS for secure secrets management with dynamic credentials and automated rotation policies for databases and cloud services

    - Developed Terraform modules for standardized AWS infrastructure (EC2, S3, RDS, IAM, KMS) provisioning, reducing setup time by 60\% and optimizing costs by 25\%

  ],
)

== Professional Training

- DBS Foundation Coding Camp — DevOps Engineering (2023)

- IDCamp — DevOps Engineering Bootcamp (2023)

- BTech Academy — Linux & DevOps Bootcamp (2022)

- Alterra Academy — Backend Development with Golang (2022)

== Projects

#regular-entry(
  [
    #strong[#link("https://github.com/wussh/azure-kubeflow-vm")[Azure Kubeflow Deployment]]

  ],
  [
    Jan 2024

  ],
  main-column-second-row: [
    #summary[A comprehensive Terraform solution for deploying Kubeflow on Azure using a single Ubuntu VM, automating the setup of MicroK8s, Juju, and Kubeflow to create a complete machine learning platform ready for ML\/AI workloads]

    - Achieved complete ML platform deployment in under 30 minutes with idempotent deployment process

    - Implemented Terraform for Azure infrastructure automation with robust setup script and progress tracking

    - Technologies

      - Terraform, Azure, Kubeflow, MicroK8s, Juju, Kubernetes, Shell Scripting, ML\/AI

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/wussh/terraform-azure-k3s-cluster")[Azure K3s Terraform Deployment]]

  ],
  [
    Jan 2024

  ],
  main-column-second-row: [
    #summary[A comprehensive infrastructure as code solution for deploying a lightweight Kubernetes (K3s) cluster on Azure using Terraform, featuring automated networking, security configurations, and support for Istio service mesh integration]

    - Fully automated infrastructure deployment with secure cluster configuration and proper NSG rules

    - Implemented modular Terraform configuration with GitOps integration using Flux CD

    - Technologies

      - Terraform, Azure, K3s, Istio, Flux CD, Traefik, Linux, GitOps

  ],
)

== Core Skills

- #strong[Core Platforms:] Kubernetes (EKS, bare-metal), Terraform, GitLab CI, Jenkins, Bamboo, FluxCD, Helm, Docker

- #strong[Cloud:] AWS (EC2, RDS, IAM, KMS, S3), Azure (VM, Storage, Networking)

- #strong[Observability:] Prometheus, Grafana, Loki, Tempo, Alertmanager, OpenTelemetry, ELK Stack

- #strong[Security:] HashiCorp Vault, HSM, AWS KMS, Trivy, Falco, Harbor, Kong API Gateway

- #strong[Automation:] Ansible, Python, Bash, Infrastructure as Code (IaC)

- #strong[Messaging & Streaming:] RabbitMQ, Kafka

- #strong[Networking:] Traefik, NGINX Ingress, Tailscale, Cloudflare

== Certifications

- DBS Foundation Coding Camp - DevOps Engineering (2023)

- IDCamp - DevOps Engineering Bootcamp (2023)

- BTech Academy - Linux & DevOps Bootcamp (2022)

- Alterra Academy - Backend Development with Golang (2022)

== Education

#education-entry(
  [
    #strong[University of Trunojoyo], Bachelor of Engineering in Mechatronic Engineering -- Indonesia

  ],
  [
    Sept 2020 – July 2024

  ],
  main-column-second-row: [
    - GPA: 3.47\/4.00

    - Relevant Coursework: Cloud Computing, Software Engineering, Operating Systems

  ],
)
