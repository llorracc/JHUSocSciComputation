# Alternative organizational structures for this documentation

The current structure is **journey-based**: “Start here” (by audience) → “Tasks” (by what you’re trying to do) → “Reference.” Below are two other ways to organize the same content, with pros/cons and a concrete outline for each.

---

## Current structure (journey-based)

- **Start here:** New faculty, PhD students  
- **Tasks:** Run large jobs, Sensitive data, AI for writing/coding, Software/subscriptions  
- **Reference:** Platform comparison, Rockfish/Slurm primer, GitHub Pages setup  

*Mental model:* “I’m this person / I want to do this task → take me there.”

---

## Option A: Organize by platform (where you compute)

**Idea:** Structure the site around **where** people run their work (Rockfish, DISCOVERY, JHPCE, SciServer, Cloud). Each platform section covers setup, storage, jobs, and links to cross-cutting topics (sensitive data, AI, software).

**Pros**

- Matches “I use Rockfish” or “I’m on JHPCE”—one place per environment.
- Reduces context-switching when someone lives mostly on one system.
- Fits platform-specific docs (e.g. Slurm/Rockfish) naturally.

**Cons**

- Cross-cutting topics (sensitive data, AI, software) need either short in-platform summaries + one shared page, or some duplication.
- New users who don’t yet know their platform may need a short “Choose a platform” entry point (e.g. the current platform comparison promoted to the top).

**Suggested outline**

1. **Choose a platform**  
   - Single page or short section: platform comparison table + “who typically uses what” (e.g. economics PhDs → Rockfish/JHPCE; PHI → DISCOVERY). Link to the detailed [Platform comparison](platforms.md).

2. **Rockfish (ARCH)**  
   - Setup, allocations (ColdFront), storage, running jobs (Slurm).  
   - Links: [Rockfish/Slurm primer](rockfish-slurm-primer.md), sensitive data (if applicable), AI tools, software.

3. **DISCOVERY (Research IT)**  
   - Setup, PHI/compliance, OnDemand (RStudio/Jupyter/VS Code), storage, jobs.  
   - Links: Sensitive data, AI, software.

4. **JHPCE**  
   - Setup, storage, GPUs, Slurm.  
   - Links: Rockfish/Slurm primer (if similar enough), sensitive data, AI, software.

5. **SciServer**  
   - What it is, when to use it, Jupyter-in-containers.  
   - Links: Platform comparison, AI, software.

6. **Cross-cutting**  
   - One page each (or reuse current task pages): [Sensitive/restricted data](../tasks/work-with-sensitive-data.md), [AI for writing and coding](../tasks/ai-for-writing-and-coding.md), [Software and subscriptions](../tasks/software-and-subscriptions.md).

7. **Reference**  
   - Platform comparison (detailed), Rockfish/Slurm primer, GitHub Pages setup (if kept).

*Entry points:* “Choose a platform” for undecided users; direct links to Rockfish, DISCOVERY, JHPCE, SciServer for those who already know their platform.

---

## Option B: Organize by audience/role first

**Idea:** Put **who you are** first. Each role has a single “hub” page that links to the right tasks and references (no duplication of long content—hub pages are short and link-heavy).

**Pros**

- Very clear for new people: “I’m a PhD student” or “I’m new faculty” → one landing page.
- Easy to tailor messaging and priorities per role (e.g. PhD students: allocations, advisors; faculty: DUAs, compliance).
- Same task and reference pages stay shared; only the “map” (index/hub) changes.

**Cons**

- If many roles share the same tasks, the hub pages can look similar; the value is in curation and order, not unique content.
- “I don’t fit a role” users need a fallback (e.g. “By task” or “Reference” in the nav).

**Suggested outline**

1. **Overview**  
   - One short index page: “This site is organized by role. Pick the closest match, or browse by task/reference below.”

2. **By role (hub pages only; link to existing task/reference pages)**  
   - **New faculty**  
     - Checklist: JHED/MFA, VPN, data classification, pick platform, storage, AI, contacts. Links to Platform comparison, Sensitive data, AI task, Software, Rockfish primer, Research IT, ARCH, JHPCE, Library.  
     - *(Can reuse/trim current [New faculty](../start-here/new-faculty.md) as this hub.)*  
   - **PhD students**  
     - Same idea: checklist + links to Platform comparison, Rockfish/JHPCE, allocations, AI, Sensitive data, Software, contacts.  
     - *(Can reuse/trim current [PhD students](../start-here/phd-students.md) as this hub.)*  
   - **Staff / research support** (optional)  
     - Focus: helping others, access, compliance, software requests. Links to Sensitive data, Software, Platform comparison.

3. **By task (unchanged)**  
   - Run large jobs, Sensitive/restricted data, AI for writing and coding, Software and subscriptions.

4. **Reference (unchanged)**  
   - Platform comparison, Rockfish/Slurm primer, GitHub Pages setup.

*Entry points:* “New faculty,” “PhD students,” “Staff”; plus “Tasks” and “Reference” for people who prefer to browse by task or look up details.

---

## Option C (bonus): Topic/domain-based

**Idea:** Organize by **topic**: Compute & HPC, Data & storage, Security & compliance, AI & tools, Getting help. Each topic page aggregates the relevant tasks and references.

**Pros**

- Matches “I need to understand storage” or “I need to understand compliance.”
- Good for policy/compliance readers and for linking from external sites (“JHU sensitive data docs”).

**Cons**

- Less natural for “first day” journeys (e.g. new faculty) unless you add a short “Start here by role” at the top.
- Some content spans topics (e.g. AI and compliance), so you need clear cross-links or a small “Security & AI” subsection.

**Suggested outline (condensed)**

1. **Compute & HPC**  
   - Platform comparison, Run large jobs, Rockfish/Slurm primer (and/or links to platform-specific pages if you adopt Option A later).

2. **Data & storage**  
   - Research IT storage/access, Sensitive/restricted data (or link to it from Security).

3. **Security & compliance**  
   - Sensitive/restricted data, PHI/PII/DUAs, approved environments (DISCOVERY, etc.).

4. **AI & tools**  
   - AI for writing and coding, Software and subscriptions, approved GenAI list.

5. **Getting help**  
   - Contacts (ARCH, Research IT, JHPCE, Library), and/or “Start here by role” links.

6. **Reference**  
   - Platform comparison, Rockfish/Slurm primer, GitHub Pages setup.

---

## Summary

| Structure    | Best for                                      | Main entry point(s)                    |
|-------------|-----------------------------------------------|----------------------------------------|
| **Current (journey)** | “I’m this person / I want to do this task”   | Start here (role) + Tasks              |
| **Option A (platform)** | “I use Rockfish / JHPCE / DISCOVERY”       | Choose a platform + per-platform pages |
| **Option B (role-first)** | “I’m new faculty / a PhD student”         | Role hub pages → Tasks / Reference     |
| **Option C (topic)** | “I need storage / compliance / AI”        | Topic pages + optional role start      |

You can mix: e.g. keep the current journey-based nav but add a “By platform” index page, or move to Option B and add a “By platform” page under Reference for power users.
