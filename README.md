# Employee Leave Portal

## Project Overview

Employee Leave Portal is a three-tier web application developed as part of a Cloud Migration and DevOps project.

The application allows employees to submit leave requests through a web interface while demonstrating a complete DevOps workflow using Docker, Docker Swarm, Terraform, GitHub Actions, Jenkins, and Azure.

---

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### DevOps Tools

* Docker
* Docker Compose
* Docker Swarm
* Terraform
* GitHub Actions
* Jenkins
* Azure VM

---

## Architecture

Developer → GitHub Repository → GitHub Actions → Docker Hub → Jenkins → Azure VM → Docker Swarm → Employee Leave Portal

---

## Features

* Employee leave request submission
* REST API backend
* MongoDB database integration
* Containerized deployment
* CI/CD automation
* Infrastructure as Code using Terraform

---

## Docker Commands

### Build and Run

```bash
docker compose up --build
```

### Docker Swarm Deployment

```bash
docker swarm init
docker stack deploy -c docker-compose.yml employee-app
docker service ls
```

---

## Terraform Commands

```bash
terraform init
terraform validate
terraform plan
terraform apply
terraform destroy
```

---

## GitHub Actions CI

The CI pipeline performs:

* Source checkout
* Dependency installation
* Build verification
* Docker image build
* Docker image push to Docker Hub

---

## Jenkins CD

The Jenkins pipeline performs:

* GitHub repository checkout
* Docker verification
* Docker Swarm deployment
* Application update on Azure VM

---

## Cloud Deployment

Platform: Microsoft Azure

Deployment Target: Azure Virtual Machine

Container Runtime: Docker Swarm

---

## Documentation

Project documentation is available in:

* docs/setup-guide.md
* docs/demo-script.md
* docs/troubleshooting.md

---


---

## Author

Maria Khan
Cloud Migration Semester Project
Air University Islamabad
