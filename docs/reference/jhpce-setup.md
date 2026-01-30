# Reference: how the JHPCE “community / condo” model works

JHPCE is the **Joint High Performance Computing Exchange**: an HPC facility based in the Department of Biostatistics at the Johns Hopkins Bloomberg School of Public Health that supports Slurm-based CPU/GPU work and very large shared storage across many JHU affiliates.

This page is meant to explain one specific thing that’s easy to miss if you’re coming from “allocation-only” clusters: **JHPCE is often described as a community cluster with both shared resources and contributed (“condo”) hardware**.

For current, authoritative details (hardware inventory, policies, request forms), always start with the official JHPCE site: `https://jhpce.jhu.edu/`.

## What “JHPCE setup” usually means in practice

At a high level, most users experience JHPCE as:

- **Accounts + groups**: you request an account, then you’re typically added to a PI/lab’s group (used for access control, storage permissions, and sometimes scheduling/fairshare configuration).
- **Login + Slurm**: you develop/submit work from login nodes and run compute via Slurm on compute nodes (CPU and GPU).
- **Shared filesystems**: you work on large shared storage (home/project/work/scratch patterns vary by environment). Plan for “where should this data live?” early because it affects performance and cost.
- **A centrally operated environment**: systems staff handle OS, networking, monitoring, and cluster operations. Users generally do **not** treat compute nodes as individually administered servers.

The only non-obvious part is *how capacity is funded and scheduled*, which is where the “community / condo” model comes in.

## The JHPCE “community / condo node” model (conceptual)

JHPCE describes itself as operating as a **Common Pool Resource (CPR) hierarchy**: computing resources are provided by “stakeholders” (owners/contributors), and **excess capacity** is made available to others “as available” (often in exchange for fees that defray operating costs).

This is similar to what many HPC centers call **condo**, **buy-in**, **partner**, or **community cluster** models:

- **Stakeholder / contributed resources**: PIs/labs **buy or contribute compute nodes** (and sometimes storage) that are then **integrated into the shared cluster**.
- **Non-stakeholder access**: users who don’t “own” resources can still run jobs on **unused capacity**, subject to scheduler policy (fairshare, limits, queue rules) and any applicable fee model.

The typical scheduling idea is:

- **You get priority or guaranteed access on “your” contributed nodes** (e.g., via a Slurm account/QoS/partition or similar policy).
- **When your contributed nodes are idle, the scheduler lets other users run on them** (backfill/idle sharing), so the whole community benefits.
- **You can usually burst beyond your own nodes** onto the rest of the cluster when it’s available, subject to whatever fairshare/limits apply.

This is why “providing a node” can “buy you resources” on a shared system: you’re effectively trading a capital purchase (or service fee) for **priority access** and the operational convenience of a managed cluster, while still getting community-scale burst capacity.

## What you should ask JHPCE about (to make the model concrete)

Because the details differ by site and can change over time, the fastest way to understand *your* situation is to ask JHPCE (or your PI) these questions:

- **Access model**: “Which PI/lab group should I be in?” “Is there an account/QoS for our resources?”
- **If we contributed hardware**: “What is the priority/guarantee policy on our nodes?” “Do we have a dedicated partition or QoS?”
- **Bursting rules**: “Can we use the common pool beyond our nodes?” “Are there time limits or caps by partition?”
- **GPU access**: “Which GPU partitions exist and what are the request patterns?” (count, memory, job limits)
- **Storage layout + performance**: “Where should large datasets live?” “What’s the recommended scratch/project path?” “What’s backed up vs not?”
- **Data/security constraints**: “Is PHI allowed in our project area?” “What controls/approvals apply?”

## Similar systems where you can “buy in” by providing nodes

This model is **common across universities**, but it goes by different names. If you’re searching outside JHU, try:

- **Keywords**: “HPC condo”, “compute condo”, “buy-in cluster”, “community cluster”, “partner nodes”, “contributed nodes”, “faculty-owned nodes”, “priority access nodes”.

Concrete examples (for comparison of the *model*, not as endorsements):

- UC San Diego SDSC TSCC — **Condo program**: `https://sdsc.edu/systems/tscc/condo_details.html`
- University of Colorado Boulder — **Blanca condo cluster**: `https://www.colorado.edu/rc/resources/blanca`
- USC CARC Endeavour — **Condo cluster program purchase model**: `https://www.carc.usc.edu/user-guides/hpc-systems/endeavour/condo-cluster-program/purchase-model`
- Washington University in St. Louis — **Compute Condo**: `https://ris.wustl.edu/services/compute/compute-condo/`
- Purdue RCAC — **Community cluster queues** (buy-in style priority queues): `https://rcac.purdue.edu/policies/communityclusterqueues`

If you’re evaluating one of these programs for a grant, the big practical differences are usually:

- whether there are **annual operations/support fees** in addition to the hardware purchase,
- what **guarantees** you get (hard reservation vs “priority when contested”),
- how **idle sharing / preemption / backfill** is handled,
- and whether the cluster offers a **secure enclave** if you have restricted data.
