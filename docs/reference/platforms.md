# Reference: platform comparison (Rockfish vs DISCOVERY vs JHPCE vs SciServer vs Cloud)

This page is a quick side-by-side for common economics/social-science compute needs.

## Quick comparison

| Platform | Best for | Notes from official docs | Where to start |
|---|---|---|---|
| **ARCH Rockfish (HPC)** | Large-scale CPU/GPU batch workloads on a shared Slurm cluster | ARCH publishes current hardware/storage/network specs; allocations via ColdFront; MRI allocations persist until Rockfish EOL (end of 2026) | Docs: `https://docs.arch.jhu.edu/en/latest/1_Clusters/Rockfish/index.html` • Allocations: `https://www.arch.jhu.edu/policies/allocations/` |
| **Research IT DISCOVERY (HPC)** | PHI-compliant analysis/storage; Slurm + OnDemand (RStudio/Jupyter/VS Code/Matlab); modern GPU partitions | Research IT describes PHI-compliance, H100/A100 GPU partitions, WEKA SSD storage, Globus High Assurance transfers | `https://researchit.jhu.edu/research-hpc/` |
| **JHPCE (HPC)** | BSPH-centered HPC; very large storage; “common pool / fee-for-service” model; strong GPUs | JHPCE describes cluster scale, storage, and GPU inventory (H100/V100/A100) and Slurm usage | `https://jhpce.jhu.edu/` |
| **SciServer** | “Bring analysis to the data” (Jupyter notebooks in containers connected to big databases/storage) | IDIES describes SciServer as integrated cyberinfrastructure; SciServer Compute runs Jupyter notebooks in Docker containers | Overview: `https://www.idies.jhu.edu/what-we-offer/sciserver/` |
| **Cloud (AWS/Azure) + secure desktops** | Workloads needing cloud services (managed databases, scalable compute) or secure virtual desktops/storage | Research IT summarizes AWS/Azure subscription requests and SAFE/SAFER/SAFESTOR options | `https://researchit.jhu.edu/storage-access/` |

## If you’re unsure

- Start with a “Start here” checklist: [new faculty / new project setup](../start-here/new-faculty.md) or [PhD students](../start-here/phd-students.md)
- For Rockfish specifics: [Rockfish / Slurm primer](rockfish-slurm-primer.md)

