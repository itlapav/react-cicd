# CI/CD Overview

This folder contains infrastructure configuration for CI/CD and deployment.

## Structure
- `/cicd/k8s/` — Kubernetes manifests for AWS EKS deployment.
- `.github/workflows/deploy.yml` — GitHub Actions workflow to build and push Docker image.

## Deployment Commands
To deploy manually:
```bash
kubectl apply -f cicd/k8s/deployment.yaml
kubectl apply -f cicd/k8s/service.yaml
