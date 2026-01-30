# Task: run large jobs (HPC, GPUs, Slurm)

This page helps you choose an HPC platform at JHU and get to a first successful run.

## Choose a platform

Start with the comparison table:

- [Platform comparison](../reference/platforms.md)

Typical choices:

- **ARCH Rockfish**: best fit for “traditional HPC” workflows and broad shared capacity; Slurm + GPFS; CPU and GPU partitions. Docs: `https://docs.arch.jhu.edu/en/latest/1_Clusters/Rockfish/index.html`
- **Research IT DISCOVERY**: best fit when you need PHI-compliant compute/storage, OnDemand web apps (RStudio/Jupyter/VS Code), and modern GPU partitions including H100. Overview: `https://researchit.jhu.edu/research-hpc/`
- **JHPCE**: best fit for the BSPH ecosystem and “common pool / fee-for-service” HPC with very large storage and strong GPU availability. Overview: `https://jhpce.jhu.edu/`
- **SciServer**: best fit when your workflow is “bring compute to hosted data” via Jupyter-in-containers attached to large databases. Overview: `https://www.idies.jhu.edu/what-we-offer/sciserver/`

## Rockfish quick start (when Rockfish is the right answer)

- **Account / allocation**: `https://coldfront.rockfish.jhu.edu/` (ARCH allocations policy: `https://www.arch.jhu.edu/policies/allocations/`)
- **Docs**: `https://docs.arch.jhu.edu/en/latest/1_Clusters/Rockfish/index.html`
- **Hands-on appendix**: [Rockfish / Slurm primer](../reference/rockfish-slurm-primer.md)

## DISCOVERY quick start (when DISCOVERY is the right answer)

- **Overview + access request links**: `https://researchit.jhu.edu/research-hpc/`
- Look for:
  - **New User Intake** (ServiceNow request)
  - **OnDemand** (web interface for VS Code, Jupyter, RStudio, Matlab)
  - **Globus High Assurance** transfers

## JHPCE quick start (when JHPCE is the right answer)

- **Overview + access**: `https://jhpce.jhu.edu/`
- **How the JHPCE community/“condo” model works** (what it means to “provide a node”): [JHPCE setup + condo model](../reference/jhpce-setup.md)
- JHPCE provides a new user request form and documents its Slurm environment and community model (stakeholder-owned resources with excess capacity available “as available”).
- If your lab **contributes/buys hardware** that is integrated into JHPCE, you typically get **priority access** to those nodes while still benefiting from shared idle capacity elsewhere in the cluster (exact policies vary—see the reference link above and confirm with JHPCE).

## SciServer quick start (when SciServer is the right answer)

- **SciServer overview**: `https://www.idies.jhu.edu/what-we-offer/sciserver/`
- **SciServer Compute architecture** (Jupyter notebooks in Docker containers): `https://www.idies.jhu.edu/sciserver-compute-bringing-analysis-close-to-the-data/`

## Troubleshooting patterns

- **Your job is slow**: check I/O paths (scratch vs home vs data), over-allocation (too many CPUs/GPUs), and job efficiency tooling (Slurm’s `seff` where available).
- **You need GPUs**: confirm partition/queue rules and request the right number of GPUs/cores.
- **You need faster data movement**: use Globus where supported and avoid moving TB-scale datasets to laptops.

