Computation in economics and the social sciences enables researchers to tackle questions and analyze datasets that were previously intractable. The availability of large-scale datasets, the development of powerful computational tools, and the increasing adoption of computational methods across these disciplines have driven growing demand for high-performance computing resources.

To meet this rising demand for computational power, institutions like [Johns Hopkins University](https://www.jhu.edu) have invested heavily in high-performance computing (HPC) resources, such as the Rockfish cluster managed by the [Advanced Research Computing at Hopkins (ARCH)](https://www.arch.jhu.edu/). HPC facilities like Rockfish provide researchers with access to a vast pool of computational resources, including high-performance compute nodes, GPU nodes for accelerated computing, and large-scale storage systems. These resources are essential for conducting computationally intensive research in economics and other social sciences, allowing researchers to run complex simulations, analyze massive datasets, and develop sophisticated models that push the boundaries of their respective fields.

This report provides an overview of the resources available to researchers on the Rockfish cluster. It is intended to provide a guide for researchers who are new to the cluster, as well as a reference for those who are familiar with the cluster.

# Rockfish and High-Performance Computing (HPC)

Rockfish is the flagship High Performance Computing resource at Johns Hopkins University. It is a shared facility where researchers from various departments, including Economics and other Social Sciences, can contribute computational resources in a homogeneous environment. This setup not only provides stability and priority usage for those contributing resources, but also benefits all researchers by expanding the available computational power for everyone through efficient resource load-balancing.

## The Evolution of ARCH and its Flagship Cluster, Rockfish

The Advanced Research Computing at Hopkins (ARCH) facility was originally known as the Maryland Advanced Research Computing Center (MARCC), a shared facility jointly managed by Johns Hopkins University and the University of Maryland College Park {cite:p}`jhu_hub_marcc_arch`. MARCC operated under the direction of Alex Szalay, the founding director of IDIES, and was located on the Bayview Campus of Johns Hopkins University {cite:p}`idies_marcc`. The financial foundation for MARCC was laid by a State of Maryland grant provided to Johns Hopkins through the Institute for Data Intensive Engineering and Science (IDIES). MARCC evolved into ARCH in 2021, signaling a shift towards a more Hopkins-centric approach {cite:p}`arch_about`.

ARCH's flagship HPC cluster, **Rockfish**, succeeded the previous Bluecrab cluster, which retired in June 2022 after 7.5 years of service {cite:p}`arch_bluecrab_retire`. Rockfish went into production in March 2021 with funding from a National Science Foundation (NSF) Major Research Instrumentation grant {cite:p}`nsf_oac_1920103`. As of June 2024, Rockfish ranked #496 on the Top500 list at 1.89 PFlops {cite:p}`arch_top500_2024`, having previously ranked #414 in June 2022 {cite:p}`arch_top500_2022`.

## The Condominium Model

A distinctive feature of Rockfish is its "condominium" model {cite:p}`arch_condos`, which allows principal investigators (PIs) from various schools within Hopkins to contribute their own computational resources to the cluster. These condos can encompass a range of computational hardware, such as compute nodes, GPU nodes, sub-racks, management and Infiniband switches, and necessary software licenses. In exchange for the administration and integration of their condo, PIs agree to allow the use of their idling condo nodes by other researchers. This reciprocal access arrangement fosters a culture of resource sharing and maximizes the utilization of the cluster. PIs receive a walltime allocation equivalent to their purchase, allowing their users to access as many cores as possible within that allocation. This unique model not only expands the overall computing power of the cluster but also fosters a collaborative environment where resources are shared and utilized effectively.


## Compute Nodes

Compute nodes are the individual computers that make up a High Performance Computing (HPC) cluster like Rockfish {cite:p}`arch_hardware`. Each node contains resources like CPUs, memory, and potentially GPUs, that are used to execute user jobs. Rockfish has different types of compute nodes, including:

- **Regular Compute Nodes:** These are the standard compute nodes on Rockfish. They are organized into partitions/queues that dictate how resources are allocated based on the type and size of the job.
- **Large Memory (LM) Nodes:** Rockfish has a limited number of large memory nodes for jobs requiring more than 192GB of memory.
- **GPU Nodes:** Rockfish offers GPU nodes equipped with NVIDIA A100 GPUs for accelerated computing {cite:p}`arch_gpu_jobs`. These nodes are available through two partitions: the `a100` partition, which provides A100 GPUs with 40GB of memory each (12 cores per GPU, 48 cores per node), and the `ica100` partition, which provides A100 GPUs with 80GB of memory each (16 cores per GPU, 64 cores per node) {cite:p}`arch_partitions`. Each GPU is mapped to a specific number of cores, and requesting more cores than the mapped amount will automatically assign additional GPUs to the job, potentially leading to wasted resources.

## Memory

The memory available for a job on Rockfish is determined by the number of tasks requested per node {cite:p}`arch_faq`. Each core is associated with approximately 4GB of memory. By default, each core has 4GB of memory allocated to it. If a job requires more memory, users can request additional cores; each additional core adds 4GB to the job's total available memory.

## Storage

Rockfish offers various storage options for researchers {cite:p}`arch_storage`:

- **Local Scratch (`/tmp`):** Each compute node has a local NVMe hard drive mounted as /tmp, offering fast read/write speeds in the order of microseconds compared to the millisecond speeds of the spinning disk GPFS. This is ideal for users working with small files, but data should be moved back to either the scratch or data file systems before the job ends to avoid losing any work.
- **Shared Scratch File Systems (`/scratch4` & `/scratch16`):** These file systems are optimized for handling small and large files respectively. Users are encouraged to use the scratch file system for all input/output (I/O) processing during job execution.
- **Data File System (`/data`):** Designed for longer-term storage with larger capacity. While it is acceptable to read files from the data file system, researchers are discouraged from conducting heavy I/O operations on this file system due to its relatively lower performance compared to the scratch file systems.
- **Home Directory:** Each user gets a 50GB home directory that is backed up weekly to an off-site location.
- **Group Allocation on Parallel File System:** All research groups receive a default allocation of 10TB on the parallel file system (GPFS). Justifications for additional scratch space can be submitted with proposals.

## Benefits of Using Rockfish

Rockfish offers several practical advantages for research in economics and the social sciences. The cluster provides compute nodes with high CPU core counts, large memory capacity, and high-speed interconnects, which are needed for computationally intensive tasks common in these fields. Large memory nodes and GPU nodes accommodate different workload types, from large-scale data analysis to accelerated numerical computation. The condominium model allows research groups to contribute their own computational resources to Rockfish, granting them priority usage while expanding the overall capacity of the system. ARCH provides software infrastructure including compilers (GNU, Intel, PGI), MPI libraries (OpenMPI, IntelMPI, Mvapich2), and containerization tools (Singularity), along with scientific support services, training, and workshops {cite:p}`arch_sysconfig`.

# Accessing and Managing Resources on Rockfish

## Requesting Allocations and Accounts

To facilitate the management of projects and user accounts, Rockfish utilizes a portal based on ColdFront {cite:p}`coldfront_portal`. ColdFront is a web-based platform that provides researchers with a centralized location to request allocations, manage user accounts, and track resource usage. The portal can be accessed at: [https://coldfront.rockfish.jhu.edu](https://coldfront.rockfish.jhu.edu).

Rockfish offers several types of allocations tailored to different research needs {cite:p}`arch_allocations`:

- **CPU Allocations:** These allocations provide access to the general compute nodes on Rockfish and are suitable for a wide range of research tasks. By default, research groups receive an allocation of approximately 50,000 core-hours per quarter. However, this allocation can be increased with appropriate justification.
- **Large Memory (LM) Allocations:** These allocations are specifically designed for jobs that require significant amounts of memory (more than 192GB). Like CPU allocations, the default allocation for large memory nodes ("bigmem") is 50,000 core-hours per quarter, but can be increased with proper justification.
- **GPU Allocations:** For research involving accelerated computing with GPUs, Rockfish offers GPU allocations. The standard allocation for GPU resources is 20,000 core-hours per quarter. Again, this allocation can be expanded upon submission of a justification outlining the specific computational needs of the research.
- **Startup Allocations:** These are one-time allocations intended to help new research groups familiarize themselves with the Rockfish environment. They provide a trial period to benchmark codes and explore the various features and resources available on the cluster. This initial experience allows researchers to gather the necessary information to submit informed proposals for regular allocations that accurately reflect their computational needs.

### Allocation Limits and Justification Requirements

All allocations on Rockfish are subject to limits based on the type of resource and are granted according to available capacity. While default allocations are provided, researchers can request increased resources by providing a justification for their needs in their proposal. This justification should demonstrate how the requested resources are essential for the proposed research project. Factors that can influence the allocation approval process include:

- **Computational Needs:** A clear explanation of the computational demands of the project, including the type of analysis, the size of datasets, and the estimated runtime for simulations or calculations.
- **Resource Requirements:** Justification for the specific types of resources requested, whether it's CPU cores, large memory nodes, or GPU nodes. The proposal should explain why these resources are necessary for the project and how they will be utilized.
- **Alignment with Research Goals:** The proposal should clearly articulate how the requested allocation aligns with the overall research goals and objectives. Highlighting the potential impact and significance of the research outcomes can strengthen the justification.

:::\{important}

A video tutorial on using the Coldfront portal is available to guide PIs and users through the process of requesting allocations, managing accounts, and adding users to allocations. The video can be accessed at: https://youtu.be/L6zvLBK5Mss. This tutorial covers the steps involved in creating an account on ColdFront, requesting an allocation, adding user accounts, and designating a proxy. This video tutorial is a valuable resource for anyone new to Rockfish or ColdFront, providing a step-by-step walkthrough of the essential processes involved in gaining access to and managing resources on the Rockfish cluster.
:::

## Connecting to Rockfish

To connect to the Rockfish cluster, users can establish an SSH connection using a terminal application on their local machine {cite:p}`arch_login`. The specific terminal application and connection process vary slightly depending on the user's operating system. Users of macOS or Linux operating systems can use the built-in Terminal application for SSH connections. Additionally, XQuartz is recommended for X11 forwarding, which enables graphical applications to be displayed from the cluster to the user's local machine. Windows users can utilize PuTTY or MobaXterm for SSH connections. These applications provide a user-friendly interface for establishing secure connections to remote servers, such as Rockfish.

Regardless of the operating system or terminal application used, the following connection parameters are required:

- **Host Name:** login.rockfish.jhu.edu This hostname directs the SSH connection request to the appropriate login node on the Rockfish cluster.
- **Port:** 22 Port 22 is the standard port for SSH connections and is used by default unless specified otherwise.
- **Login Credentials:** Users will need to enter their Rockfish UserID, which is typically their JHED ID (Johns Hopkins Enterprise Directory ID), and their corresponding password to authenticate and establish the SSH connection.

:::{important} Several SSH command variations can be used to connect to Rockfish:

- `ssh YourUserId@login.rockfish.jhu.edu`
- `ssh login.rockfish.jhu.edu –l YourUserId`
- `ssh -XY YourUserId@login.rockfish.jhu.edu`

The last command includes options for X11 forwarding (`-XY`), allowing graphical applications running on Rockfish to be displayed on the user's local machine.
:::

## Data Transfer Methods

Rockfish supports various methods for transferring data between the cluster and external systems, each suitable for different data sizes and transfer requirements:

- `curl` and `wget`: These command-line utilities are useful for downloading files from web servers or FTP sites directly to Rockfish. They are generally suitable for transferring small to moderately sized files.
- `scp`: The secure copy (`scp`) command allows users to transfer files between their local machine and Rockfish over an SSH connection. This method is suitable for transferring small to large files, but may not be ideal for very large datasets due to potential performance limitations.
- **Globus**: For transferring large datasets (greater than 100 GB), Globus is the recommended method. Rockfish has dedicated data transfer nodes (DTNs) that are GlobusConnect endpoints, facilitating high-speed data transfers between Rockfish and other Globus-enabled systems. DTNs are also recommended for using applications like Filezilla or for executing traditional secure copy commands. Globus provides a reliable and efficient way to transfer large datasets in the background, handling interruptions and ensuring data integrity. For transferring very large datasets (terabytes), it is advisable to split the data into multiple smaller chunks for better performance on the DTN.

## Modules for Software Management

The Rockfish cluster employs a module system, specifically Lua modules version 8.3 developed at TACC {cite:p}`tacc_lmod`, to manage software packages and user environments. Modules provide a way to dynamically modify the shell environment, ensuring that the necessary software and libraries are accessible for specific applications.
Loading and Unloading Modules

- `module load` (or `ml`): This command loads a specific module, making the corresponding software or package available in the user's environment. For example, to use the Intel compilers and Intel MPI libraries, a user would execute the command `module load intel intel-mpi intel-mkl`.
- `module unload` (or `ml -`): This command unloads a previously loaded module, removing it from the user's environment. To unload the Intel MPI module, for instance, a user would use the command `module unload intel-mpi`.

Rockfish's Lua module system is designed to handle module dependencies and conflicts automatically. If a user loads a module that conflicts with a previously loaded module, the system will automatically replace the conflicting module with the newly requested one. For example, loading the GNU compiler module (gcc) after loading the Intel compiler module (intel) will trigger a message indicating that Lmod is automatically replacing the Intel module with the GNU module.

### Module Information

- `module avail` (or `ml av`): This command lists all available modules on the Rockfish cluster. This list encompasses a wide range of software packages, libraries, and tools, categorized by their respective functions and dependencies. Users can browse the list to identify modules relevant to their research needs.
- `module spider` (or `ml spider`): This command allows users to search for specific modules and obtain information about available versions and dependencies. For example, to search for the Python module, a user would use `module spider python`.
- `module show` (or `ml show`): This command displays detailed information about a specific module, including the environment variables it sets, compilation options, and any dependencies or conflicts. For example, to view the environment variables set by the Python module, a user would use `module show python/3.9.0`.

### Creating and Managing Module Collections

- `module save`: This command saves the currently loaded modules into a named collection, allowing users to easily restore their desired software environment in future sessions. For example, a user can create a module collection named data_science by loading the necessary modules, such as Python and R, and then executing the command `module save data_science`.
- `module restore`: This command restores a previously saved module collection, loading all the modules associated with that collection. To restore the data_science collection, the user would use the command `module restore data_science`.
- `module disable`: This command disables or deletes a previously saved module collection. To remove the data_science collection, a user would execute the command `module disable data_science`.

These module management features are crucial for streamlining workflows, ensuring reproducibility, and facilitating collaboration on Rockfish. Users can tailor their software environments to specific tasks, share collections with collaborators, and easily switch between different software configurations as needed.

## Checking Allocation Status

Rockfish uses a system of allocations to manage computing resources and ensure fair usage among researchers {cite:p}`arch_usage`. You can use several commands to check the status of your allocations, both for yourself as a user and as a PI for your group.

There are two primary commands for viewing allocation usage:

- `sbalance PI-userid`: This command shows the overall allocation usage for a specific PI, identified by their PI-userid. This information can help PIs track the resource consumption of their research group and manage their allocation effectively.
- `user-sbalance -u userid`: This command provides allocation usage information for an individual user, specified by their userid. Users can use this command to monitor their own resource consumption and ensure they are operating within their allocated limits.

The output of these commands typically includes details such as the allocation name, user ID, core hours used, total core hours allocated, and the percentage of the allocation consumed. This information is valuable for both PIs and users to monitor resource usage, track progress, and plan future resource requirements.

For a more detailed breakdown of allocation usage, there is a more advanced command: `sacctmgr -p list associations user=YourUserId format=Account,User,Partition,Qos,DefaultQOS tree | column -ts'|'`
Let's break down this command and its components:

- `sacctmgr`: This is the Slurm Account Manager command, a powerful tool for managing accounts, allocations, and resource usage on Rockfish.
- `-p list associations`: This option instructs sacctmgr to list the associations between users and various allocation parameters.
- `user=YourUserId`: Replace YourUserId with your actual user ID to retrieve information specific to your account.
- `format=Account,User,Partition,Qos,DefaultQOS`: This option specifies the format of the output, including details such as:
  - `Account`: The name of the allocation the user is associated with.
  - `User`: The user ID.
  - `Partition`: The specific queue or partition the user has access to (e.g., parallel, shared, a100).
  - `Qos`: The quality of service associated with the allocation.
  - `DefaultQOS`: The default quality of service for the user.
- `tree`: This option presents the output in a hierarchical tree structure, clearly showing the relationships between users and allocations.
- `| column -ts'|'`: This part of the command pipes the output to the column command, which formats the data into a table with columns separated by the "|" (pipe) character, improving readability.

By using this command, users can obtain a comprehensive view of their allocation details, including the partitions they can access, the quality of service settings, and their default quality of service. This information can be helpful for understanding the resources available to them and for troubleshooting any allocation-related issues they might encounter.

# Running Jobs on Rockfish Using SLURM

## Slurm Overview

Rockfish uses Slurm to manage resource scheduling and job submissions {cite:p}`arch_rockfish_docs`. Slurm, which stands for Simple Linux Universal Resource Manager, is a widely used open-source workload manager in the HPC field.

### Workload Manager Functions

A workload manager like Slurm provides several essential functions for managing computational resources, which are especially important in a shared environment like Rockfish. The key functions are:

- Resource access: Slurm grants users access to various resources, including compute nodes, memory, and specialized hardware like GPUs. By managing resource allocation, Slurm ensures fair and efficient usage for all users.
- Job management: Slurm handles the execution of user jobs, monitoring their progress and managing their resource consumption. This involves launching, tracking, and terminating jobs based on user-defined parameters.
- Queue management: Slurm maintains queues of submitted jobs, scheduling them for execution based on resource availability, job priority, and user-defined constraints. This prevents system overload and optimizes resource utilization.

### Key Concepts

- Interactive sessions: Interactive sessions allow users to interact directly with compute nodes for tasks like code development, debugging, and data exploration. Users can request interactive sessions using the "interact" command, which reserves resources for a specified duration. These sessions provide a command-line interface on the compute node, allowing users to execute commands and run their code interactively.
- Batch jobs: Batch jobs are submitted to the queue and run non-interactively, executing a predefined set of commands in a script. Users define job parameters like resource requirements (e.g., number of nodes, cores, memory) and wall time in a Slurm script, which is then submitted using the "sbatch" command. Batch jobs are well-suited for long-running computations or tasks that don't require user interaction.
- Job arrays: Job arrays enable users to submit a collection of similar jobs that differ only in input parameters or data. This simplifies the submission and management of a large number of related tasks. Each job in an array is assigned a unique task ID, allowing for efficient parallelization and execution of tasks that share common code and dependencies. Job arrays are particularly useful for parameter sweeps, ensemble simulations, and data processing workflows that involve running the same code on different input sets.

## Interactive Sessions

Interactive sessions on Rockfish enable researchers to directly engage with compute nodes, facilitating tasks such as code development, debugging, and interactive data analysis. Instead of submitting jobs to a queue, interactive sessions provide an immediate command-line interface on the allocated compute node, allowing for real-time interaction with running processes and data.

To initiate an interactive session on Rockfish, users employ the `interact` command. This command allows for the specification of several crucial parameters to tailor the session to the user's needs:

- Partition: The `-p` flag designates the specific partition where the interactive session should run. Rockfish offers various partitions optimized for different job types, including 'shared' for general-purpose computing, 'parallel' for parallel jobs, 'a100' and 'ica100' for GPU-accelerated tasks, 'bigmem' for memory-intensive workloads, and 'express' for short, interactive jobs. Choosing the appropriate partition ensures efficient resource allocation and optimal performance for the intended task. For instance, to request an interactive session on the 'debug' partition:
- Cores: The `-c` flag determines the number of cores to be allocated for the interactive session. Requesting the appropriate number of cores is essential for achieving the desired level of parallelism and computational power. For example, to request an interactive session with 2 cores:
- Time: The `-t` flag sets the duration of the interactive session, expressed in minutes or in the format `HH:MM:SS`. Accurately estimating the required time helps prevent session termination before task completion. For instance, to request a 120-minute interactive session:or a 12-hour session:

Once the interactive session is no longer needed, users can gracefully exit using the exit command. This releases the allocated resources, making them available for other users or jobs.

## Slurm Batch Scripts on Rockfish

Slurm batch scripts are essential for running non-interactive jobs on Rockfish, enabling researchers to execute computationally demanding tasks without continuous user interaction. These scripts, written in Bash, serve as blueprints for job execution, defining the necessary resources, dependencies, and execution steps for a given task.

### Structure of a Slurm Script

A Slurm batch script is typically structured into three main components:

- **Resource Requests:** This section, delineated by `#SBATCH` directives, outlines the computational resources needed for the job. These directives convey instructions to the Slurm scheduler, detailing parameters like the job name, wall time, number of nodes, cores per task, memory allocation, and specific hardware requirements such as GPUs.

- **Dependencies:** This part of the script handles the setup of the job's software environment. It typically includes loading the required modules for compilers, libraries, and applications. Modules, managed by Lmod, provide a standardized way to access and manage different software versions on Rockfish, ensuring consistency and reproducibility. For example, to load the Intel compiler module:

```bash
ml intel/2022.2 
```

- **Job Steps:** This section encompasses the actual commands to be executed during the job. It can include compiling code, running executables, processing data, and performing any other task defined by the researcher.

### Example Slurm Script (`my_job.slurm`)

Here’s a simple example demonstrating these components within a Slurm script:

```bash
#!/bin/bash
#SBATCH --job-name=my_job
#SBATCH --output=my_job.out
#SBATCH --error=my_job.err
#SBATCH --partition=shared
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=8
#SBATCH --time=1:00:00
#SBATCH --mail-type=END
#SBATCH --mail-user=your_email@example.com

# Load necessary modules
ml intel intel-mpi intel-mkl

# Execute your code
mpirun -np 8 ./my_program 
```

**Explanation:**

1. **Shebang:** The `#!/bin/bash` line indicates that the script should be interpreted using the Bash shell.

1. **Resource Requests:**

   - `#SBATCH --job-name=my_job`: Assigns a descriptive name to the job, "my_job".
   - `#SBATCH --output=my_job.out` and `#SBATCH --error=my_job.err`: Redirects the standard output and error streams to files named 'my_job.out' and 'my_job.err', respectively, for logging purposes.
   - `#SBATCH --partition=shared`: Specifies the 'shared' partition for the job.
   - `#SBATCH --nodes=1`: Allocates 1 compute node for the job.
   - `#SBATCH --ntasks-per-node=8`: Requests 8 tasks or processes to be launched on the node.
   - `#SBATCH --time=1:00:00`: Sets a maximum wall time of 1 hour for the job.
   - `#SBATCH --mail-type=END`: Configures email notifications to be sent at the end of the job.
   - `#SBATCH --mail-user=your_email@example.com`: Specifies the email address to receive job notifications.

1. **Dependencies:**

   - `ml intel intel-mpi intel-mkl`: Loads the necessary modules for using the Intel compilers, MPI library, and Math Kernel Library.

1. **Job Steps:**

   - `mpirun -np 8 ./my_program`:  Executes the compiled program `my_program` using the `mpirun` command, launching 8 MPI processes. The output of the program will be directed to the 'my_job.out' file.

**Submitting the Job:**

To submit this script to the Slurm scheduler, save it to a file named `my_job.slurm` and execute the following command in the terminal:

```bash
sbatch my_job.slurm
```

Slurm will then queue the job and allocate the requested resources when they become available. The job's progress and output can be monitored using various Slurm commands such as `squeue`, `sqme`, and `scontrol`.

## Submitting and Monitoring Jobs

### Submitting Jobs

To run a job on Rockfish, you need to create a Slurm script that includes directives for resource requests, dependencies, and job steps. Once you save the script to a file, you can submit it using the `sbatch` command, followed by the script's filename. For instance:

```bash
sbatch my_job.slurm
```

### Checking Job Status

After submission, Slurm assigns a unique job ID to your job. You can check the status of your submitted jobs using the following commands:

- **`squeue`**: This command lists all jobs in the queue, including those pending, running, and completed. It provides information like job ID, partition, name, user, state, time elapsed, time limit, nodes allocated, and the reason for any pending status.
- **`sqme`**: This script, specific to Rockfish, shows only the jobs belonging to the current user, simplifying job tracking.

You can also check the status of a specific job using `squeue` followed by the job ID:

```bash
squeue 12345
```

### Viewing Job Outputs

Slurm typically redirects the standard output and error streams of your job to files specified in the script. By default, the output is written to a file named `slurm-[jobid].out` if no specific output file is specified.

You can view the content of these '.out' files using standard text editors or command-line tools like `cat` or `less` to examine the output generated by your job.

### Understanding Basic Job States

Jobs submitted to Rockfish can be in various states, reflecting their progress and status in the queue. Here's a description of common job states:

- **Pending:** The job is in the queue, awaiting resource allocation. This state might be due to insufficient available resources or other jobs having higher priority.
- **Running:** The job has been granted the requested resources and is currently executing on the allocated compute nodes.
- **Complete:** The job has finished successfully, completing all defined tasks.
- **Timeout:** The job was terminated by Slurm because it exceeded the specified wall time limit defined in the `#SBATCH --time` directive.
- **Failed:**  The job terminated with a non-zero exit code, indicating an error during execution. Examining the error log file, usually named `slurm-[jobid].err`, can provide insights into the cause of the failure.
- **Node Fail:** The job was terminated due to a problem reported by one of the compute nodes allocated to the job. This could indicate hardware issues or other system-level problems.

## Advanced Slurm Features

This section explores advanced Slurm features, focusing on job arrays, essential environment variables, and key points for effective Slurm usage on the Rockfish cluster.

### Job Arrays for Efficient Job Submission

Job arrays provide a powerful mechanism for submitting and managing a large number of similar jobs efficiently.  Instead of creating and submitting individual scripts for each job, you can define a single script with an array specification, instructing Slurm to create multiple job instances based on the provided parameters.

**Defining a Job Array**

The `#SBATCH --array` directive defines a job array in a Slurm script.  It takes an array specification, defining the range and step size for the array indices. For example:

```bash
#SBATCH --array=1-20
```

This line creates a job array with 20 tasks, with IDs ranging from 1 to 20. Each task in the array will be treated as an independent job, with its own job ID and execution environment.

**Controlling Concurrency**

You can control the number of jobs running concurrently from an array using the percentage symbol (%) followed by a number. For instance:

```bash
#SBATCH --array=1-100%10
```

This example creates a job array with 100 tasks, but only allows 10 jobs to run concurrently at any given time.

**Utilizing Array Environment Variables**

Slurm provides special environment variables within job arrays, allowing you to tailor the execution of each task based on its unique index. The most important variables are:

- **`SLURM_ARRAY_JOB_ID`:** This variable stores the ID of the parent job submission, which is the ID reported by `sbatch` when you submitted the array. It remains the same for all tasks within the array.
- **`SLURM_ARRAY_TASK_ID`:** This variable stores the index of the current task within the array. It varies for each task and can be used to customize the job's behavior based on its position in the array.

### Understanding Slurm Environment Variables

Slurm provides several environment variables that can be accessed within your scripts to get information about the job and the computing environment. Some of the key environment variables include:

- **`SLURM_JOBID`:**  A unique identifier assigned to each job submitted to Slurm. This ID can be used to track the job's status, view its output, and cancel it if necessary.
- **`SLURM_SUBMIT_DIR`:** The directory from which the job was submitted.
- **`SLURM_SUBMIT_HOST`:**  The hostname of the machine from which the job was submitted.
- **`SLURM_JOB_NODELIST`:**  A list of the compute nodes allocated to the job.

### Key Points for Effective Slurm Usage

- **Interactive vs. Batch Jobs:** Interactive jobs (`interact` command) are suitable for tasks that require real-time user interaction, such as code development, debugging, and interactive data exploration. Batch jobs (`sbatch` command) are better for long-running, computationally intensive tasks that can run without user intervention.
- **Job Array Advantages:**  Job arrays simplify the submission and management of multiple similar jobs. They are particularly useful for parameter sweeps, ensemble simulations, and other tasks involving repetitive computations with varying inputs.
- **Resource Allocation Parameters:**  Carefully select resource allocation parameters in your Slurm scripts to ensure efficient resource utilization and timely job completion. Accurately estimate the required wall time, number of nodes, cores per task, and memory to prevent job termination due to resource limitations or excessive queue wait times. The examples throughout this report demonstrate `#SBATCH` directives for requesting different resources, including GPUs.

By understanding these advanced Slurm features and employing effective job submission strategies, researchers can maximize their productivity and efficiently utilize the computational resources available on Rockfish.

## Slurm Commands and Flags

This section covers useful Slurm commands and flags for job management on the Rockfish cluster.

### Useful Slurm Commands

The following Slurm commands are essential for job management on Rockfish:

- **`sbatch`**: This command submits a Slurm script to the scheduler for execution. When you run `sbatch` followed by the script's filename, Slurm places the job in a queue and allocates the requested resources when they become available.

- **`sinfo`**: This command provides information about available partitions (or queues) and their properties, including the number of nodes, available resources like memory and cores, and any current limitations. To get a list of partitions, use `sinfo -s`. To view detailed information about a specific partition, use `sinfo -p [partition_name]`.

- **`squeue`**: This command lists all jobs currently in the queue, including pending, running, and completed jobs. It displays details such as the job ID, partition, job name, user, state, time elapsed, time limit, nodes allocated, and the reason for any pending status. To see only your own jobs, you can use the Rockfish-specific script `sqme`.

- **`scontrol`**: This versatile command provides a wide range of administrative and job control functionalities. You can use it to show detailed information about a specific job (`scontrol show job [jobid]`), hold a job (`scontrol hold [jobid]`), release a held job (`scontrol release [jobid]`), and modify job parameters like resource allocation (`scontrol update`).

- **`seff`**: This command allows you to assess the resource efficiency of completed jobs.  By running `seff [jobid]`, you can get detailed statistics on CPU and memory utilization, providing insights into how effectively your job utilized the allocated resources.  For example, the output may show low CPU efficiency if your job is not properly parallelized or if you overestimated the required resources.

- **`scancel`**: This command allows you to cancel or terminate a running or pending job. To cancel a job, you need to know its job ID and execute:

  ```bash
  scancel [jobid]
  ```

- **`sacct`**: This command allows you to review accounting information about completed jobs. It provides detailed usage data for jobs submitted by a specific user since a particular date. You can use it to track resource consumption, analyze job trends, and generate reports.

### Common Slurm Flags and Their Usage

Slurm flags, specified in the resource request section of your batch script using `#SBATCH` directives, control job parameters and resource allocation.  Here's a description of commonly used Slurm flags:

- **`--job-name=[job_name]`**:  Assigns a descriptive name to your job, making it easier to identify and track in the queue.
- **`--output=[output_file]`**: Specifies the file where the standard output of your job will be written.
- **`--error=[error_file]`**: Specifies the file where error messages generated by your job will be written.
- **`--partition=[partition_name]`**:  Specifies the partition or queue where your job should be submitted. You can use `sinfo` to list available partitions. Rockfish offers various partitions, including "shared" for jobs that can share resources, "parallel" for exclusive node access, "a100" for GPU jobs, and "bigmem" for jobs needing large memory.
- **`--nodes=[number_of_nodes]`**: Specifies the number of compute nodes required for your job. You can specify a range (e.g., `2-4`) to give Slurm flexibility in allocation.
- **`--ntasks=[number_of_tasks]`**:  Specifies the total number of tasks or processes to be launched for your job. If you use both `--ntasks` and `--nodes`, Slurm will distribute the tasks across the requested nodes. However, using `--ntasks-per-node` instead of `--ntasks` for MPI jobs is recommended to avoid confusion.
- **`--ntasks-per-node=[number_of_tasks]`**: Specifies the number of tasks to be launched on each node. This is particularly relevant for MPI jobs where you need to control the number of processes per node.
- **`--cpus-per-task=[number_of_cpus]`**:  Specifies the number of CPU cores to allocate for each task. This is crucial for multi-threaded applications or for reserving sufficient resources for a single process.
- **`--time=[time_limit]`**: Sets a wall time limit for your job in the format `[days-]hours:minutes:seconds`.  Jobs exceeding this limit will be terminated by Slurm. Accurate time estimation is vital for efficient resource utilization and job completion.
- **`--mail-type=[mail_type]`**:  Configures email notifications for your job. Common options include `BEGIN`, `END`, `FAIL`, `REQUEUE`, and `ALL`.
- **`--mail-user=[email_address]`**:  Specifies the email address to receive job notifications.
- **`--export=[environment_variables]`**: Controls which environment variables are exported from your submission environment to the job execution environment. You can specify `ALL` to export all variables, `NONE` to export none, or list specific variables to export.
- **`--mem=[memory_size]`**: Specifies the total amount of memory per node required for your job. You can specify units like `M` (megabytes), `G` (gigabytes), or `T` (terabytes).
- **`--mem-per-cpu=[memory_size]`**: Specifies the amount of memory required per CPU core. This is useful for jobs where you need to control memory allocation per task.
- **`--gres=gpu:[number_of_gpus]`**: Requests a specific number of GPUs for your job. Use this flag when submitting jobs to GPU-enabled partitions like 'a100'.
- **`--array=[array_spec]`**:  Defines a job array. The `array_spec` determines the range and step size of the array indices.

### Important Flags for Efficient Job Management

For efficient job management, prioritize the following flags:

- **`--time`**:  Accurately estimate and specify the wall time to prevent job termination and optimize resource utilization.
- **`--nodes`, `--ntasks`, and `--cpus-per-task`**:  Carefully choose the appropriate combination of these flags based on your job's parallelism and resource needs. For MPI jobs, prioritize `--ntasks-per-node` over `--ntasks`. For shared memory jobs or multi-threaded applications, utilize `--cpus-per-task` effectively.
- **`--mem` and `--mem-per-cpu`**:  Select the appropriate memory allocation strategy based on your job's requirements. Understand the default memory allocation per CPU core and utilize `--mem-per-cpu` for finer control.
- **`--gres`**: For GPU-accelerated jobs, specify the required number of GPUs using the appropriate `gres` syntax.

### Example Slurm Script for an MPI Job

The following script demonstrates running an MPI job using 24 cores on a single node:

```bash
#!/bin/bash
#SBATCH --job-name=MyMPIJob
#SBATCH --time=24:0:0
#SBATCH --partition=shared 
#SBATCH --nodes=1 
#SBATCH --ntasks-per-node=24 
#SBATCH --mail-type=end
#SBATCH --mail-user=your_email@example.com

# Load required modules
module list

# Execute the MPI code
mpiexec ./my_mpi_code.x > output.log

echo "Completed job $SLURM_JOBID"
```

**Explanation:**

1. **Resource Requests:**  Requests 24 cores on a single node from the "shared" partition with a 24-hour time limit.

1. **Dependencies:** `module list` displays the currently loaded modules. You may need to load specific modules before running your code, for example:

   ```bash
   module load intel intel-mpi
   ```

1. **Job Steps:** `mpiexec` launches the MPI program (`my_mpi_code.x`) using the requested 24 cores. The output is redirected to `output.log`.

This script provides a foundation for running MPI jobs. Customize the script based on your application's requirements and select the appropriate partition and resources. Additional examples follow in the next section.

## Practical Slurm Script Examples

The following Slurm script examples illustrate common job submission patterns on Rockfish.

### Basic Slurm Script

```bash
#!/bin/bash -l 
#SBATCH --job-name=BasicJob
#SBATCH --output=BasicJob-%j.out
#SBATCH --error=BasicJob-%j.err
#SBATCH --partition=shared 
#SBATCH --time=1:00:00 
#SBATCH --nodes=1 
#SBATCH --ntasks-per-node=8
#SBATCH --mail-type=end
#SBATCH --mail-user=your_email@example.com 

# Load required modules (if any)
module load intel

# Commands to execute 
echo "Running a basic Slurm job..."
hostname  # Display the compute node name
date  # Display the current date and time
```

**Explanation:**

- **Shebang:**  The `#!/bin/bash -l` line specifies that the script should be executed using the Bash shell in login mode.
- **Job Name:**  The  `--job-name`  flag sets the job name to "BasicJob".
- **Output and Error Files:** The `--output` and `--error` flags define output files for standard output and error messages. The `%j`  placeholder is replaced by the Slurm job ID.
- **Partition:** The `--partition` flag requests the "shared" partition.
- **Time Limit:**  The `--time` flag sets a wall time limit of 1 hour for the job.
- **Resource Allocation:**  The  `--nodes`  and  `--ntasks-per-node`  flags request 1 node with 8 tasks per node.
- **Email Notifications:**  The  `--mail-type`  and  `--mail-user`  flags request an email notification upon job completion to the specified email address.
- **Module Loading:** This section loads the Intel compiler module.
- **Job Commands:** The script then runs basic commands, printing a message, the compute node's hostname, and the current date and time.

### Running a Matlab Job Array with Multiple Tasks

```bash
#!/bin/bash -l
#SBATCH --job-name=MatlabArray
#SBATCH --time=1:00:00 
#SBATCH --array=1-20
#SBATCH --ntasks=4
#SBATCH --partition=shared 
#SBATCH --reservation=Training # If a reservation is needed

# Load Matlab module
module load matlab

# Run Matlab script for each task 
matlab -nodisplay -singleCompThread -r "myMatlabFunction($SLURM_ARRAY_TASK_ID), pause(20), exit" 
```

**Explanation:**

- **Job Array:**  The `--array=1-20` flag creates a job array with 20 tasks, each identified by a unique `$SLURM_ARRAY_TASK_ID` ranging from 1 to 20.
- **Multiple Tasks Per Array Element:** The `--ntasks=4` flag specifies that each task in the array will use 4 cores, enabling parallel execution within each array element.
- **Matlab Execution:**  The `matlab` command runs a Matlab script (`myMatlabFunction`) with the task ID as input, pauses for 20 seconds, and then exits.

### Job Array with a Specified Step Size

```bash
#!/bin/bash -l 
#SBATCH --job-name=StepArray
#SBATCH --time=1:00:00 
#SBATCH --array=1-100%10
#SBATCH --ntasks-per-node=1 
#SBATCH --partition=shared 
#SBATCH --mail-type=end 
#SBATCH --mail-user=your_email@example.com 
#SBATCH --reservation=Training

# Load required modules (if any)
module load intel

# Execute commands for each task 
echo "Running task $SLURM_ARRAY_TASK_ID on $HOSTNAME" 
```

**Explanation:**

- **Concurrency Limit:**  The `--array=1-100%10` flag creates a job array with 100 tasks (IDs 1 through 100), but limits the number of concurrently running tasks to 10 at any given time. All 100 tasks will eventually execute. (To specify a step size instead, use colon syntax, e.g., `--array=1-100:10` for tasks 1, 11, 21, ..., 91.)
- **Task Execution:**  The script prints a message indicating the task ID and hostname for each executed task.

### Running an MPI Program

```bash
#!/bin/bash -l
#SBATCH --job-name=MPIJob 
#SBATCH --time=1:00:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=24
#SBATCH --partition=shared
#SBATCH --mail-type=end 
#SBATCH --mail-user=your_email@example.com 

# Load necessary modules (adjust as needed) 
module load intel intel-mpi

# Compile the MPI program (adjust compiler and filename as needed) 
mpiicc -o my_mpi_program.x my_mpi_program.c 

# Run the MPI program with mpiexec 
mpiexec ./my_mpi_program.x > output.log

echo "Completed MPI job $SLURM_JOBID"
```

**Explanation:**

- **MPI Execution:** This script uses `mpiexec` to launch the compiled MPI program (`my_mpi_program.x`). Make sure the number of tasks requested matches the number of processes your MPI program is designed to use.

### Running a Mixed MPI/OpenMP Program

```bash
#!/bin/bash -l 
#SBATCH --job-name=MixedMPI_OpenMP 
#SBATCH --time=1:00:00 
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=12
#SBATCH --cpus-per-task=2 
#SBATCH --partition=shared 
#SBATCH --mail-type=end 
#SBATCH --mail-user=your_email@example.com

# Load necessary modules (adjust as needed) 
module load intel intel-mpi

# Compile the mixed MPI/OpenMP program (adjust compiler and filenames as needed) 
mpiicc -qopenmp -o my_mixed_program.x my_mixed_program.c 

# Run the program 
mpirun -np 24 ./my_mixed_program.x > output.log

echo "Completed mixed MPI/OpenMP job $SLURM_JOBID"
```

**Explanation:**

- **Resource Allocation:**  The script requests 2 nodes with 12 tasks per node and 2 CPUs per task.
- **Compilation:**  The  `mpiicc`  compiler, with the  `-qopenmp`  flag, is used to compile the mixed MPI/OpenMP program.
- **Execution:** The `mpirun` command launches the program, and the output is redirected to the specified file.

Remember that these are example scripts, and you'll need to tailor them to your specific needs, adjusting resource requests, module loading, compilation commands, and the number of processes used in `mpiexec` according to your application.

# Advanced Computing Techniques on Rockfish

## Using Singularity Containers on Rockfish

**Singularity** is available on the compute nodes of the Rockfish cluster without loading a module. (The version available may change over time; consult the [ARCH documentation](https://docs.arch.jhu.edu/) for the current version.) To use Singularity, request an interactive session on a compute node using the `interact` command, specifying the desired partition, number of cores, and time limit:

```bash
interact -p parallel -n 1 -c 1 -t 120
```

This command requests an interactive session on the `parallel` partition with 1 node, 1 core, and a time limit of 120 minutes. Once you have an interactive session, you can use basic Singularity commands.

### Singularity Commands

- `singularity --help`: This command displays help information for Singularity, providing a list of available commands and options.
- `singularity pull`: You can use this command to pull a Singularity image from a container registry, such as Docker Hub. Singularity is compatible with Docker images. For example:

```bash
singularity pull python-3.9.6.sif docker://python:3.9.6-slim-buster
```

This command pulls the `python:3.9.6-slim-buster` image from Docker Hub and saves it as a Singularity image file named `python-3.9.6.sif`.

- `singularity run`: This command runs a Singularity image. For example:

```bash
singularity run python-3.9.6.sif 
```

This command runs the Python 3.9.6 Singularity image.

- `singularity shell`: This command starts an interactive shell session inside a Singularity container. For example:

```bash
singularity shell python-3.9.6.sif
```

This command will start an interactive shell session inside the Python 3.9.6 container.

### Singularity Features

Singularity provides support for **GPUs and MPI** applications, allowing you to run containerized workloads that utilize these technologies.

For more detailed information on Singularity, consult the ARCH Technical Documentation {cite:p}`arch_rockfish_docs` and the Rockfish Cluster Software Guide {cite:p}`rockfish_software_guide`.

## Creating and Using Python Virtual Environments on Rockfish

Python virtual environments can be created on Rockfish using either `venv` or `conda`, and then used within Slurm scripts.

### Creating Virtual Environments

- **Using `venv`:** To create a Python virtual environment using the built-in `venv` module in Python 3:
  1. Load a Python module: `module load python/3.8.6` (you can change the Python version as needed).
  1. Create the virtual environment in your desired directory: `python3 -m venv myenv`. This creates a virtual environment named "myenv."
- **Using `conda`:** To create a Conda virtual environment:
  1. Load the Anaconda module: `module load anaconda`.
  1. Create the environment (you can specify the Python version): `conda create --name myenv python=3.9`. This creates an environment named "myenv" using Python 3.9.

### Activating and Deactivating Environments

- **`venv`:**
  - Activate: `source myenv/bin/activate`
  - Deactivate: `deactivate`
- **`conda`:**
  - Activate: `conda activate myenv`
  - Deactivate: `conda deactivate`

### Installing Packages

Once your virtual environment is activated, you can install packages using `pip` (for both `venv` and `conda`) or `conda` (for conda environments):

- `pip install numpy`
- `conda install numpy`

### Using Virtual Environments in Slurm Scripts

To use a virtual environment within a Slurm script, you need to activate it before running your Python script. Here's an example Slurm script demonstrating how to use a `venv` environment:

```bash
#!/bin/bash 
#SBATCH --job-name=myjob 
#SBATCH --output=myjob.out 
#SBATCH --error=myjob.err 
#SBATCH --ntasks=1 
#SBATCH --cpus-per-task=1 
#SBATCH --time=1:00:00 
#SBATCH --partition=your_partition 

# Load modules
module load some_module  

# Activate the virtual environment 
source /path/to/venv/bin/activate 

# Run your script 
python myscript.py  

# Deactivate 
deactivate 
```

**Key points:**

- **Replace placeholders:** Replace `/path/to/venv` with the actual path to your virtual environment, `myscript.py` with the name of your Python script, and `your_partition` with the appropriate Slurm partition.
- **Load modules:** Load any necessary modules before activating your environment.
- **`conda` environments:** The process for using a `conda` environment in a Slurm script is very similar. Load the `conda` module, activate your environment using `conda activate /path/to/env`, and deactivate with `conda deactivate`.

By using virtual environments in your Slurm scripts, you can ensure that your Python jobs run with the correct dependencies and avoid conflicts with other software on the Rockfish cluster.

## Loading and Managing R Submodules on Rockfish

R submodules can be loaded within R sessions on the Rockfish cluster using the `module` command to load specific software packages. The first step is loading the desired version of R into the shell session.

**Loading Submodules in an R Session**

- Load the R module in your terminal: `module load r/4.0.2` (replace with your desired version).
- Start an R session: `R`
- Load the desired submodule (R package) using the `library()` function: `library(ggplot2)` (replace "ggplot2" with the package you need).

**Installing Missing Packages**

If a package is not installed, use the `install.packages()` function within the R session: `install.packages("ggplot2")`. This installs the package to your user library directory (`R_LIBS_USER`), making it available for future use.

**Using the `lmod.R` Script**

The `lmod.R` script provides a way to manage Rockfish R submodules more effectively. It is located in the `/data/apps/helpers/` directory on Rockfish. The script modifies the `R_LIBS_USER` variable, mirroring the behavior of the `module load` command used in the terminal. This ensures that R searches for packages in the correct locations.

**Loading Submodules with `lmod.R`**

1. Load the R module: `module load r/4.0.2` (or your chosen version).
1. Start an R session: `R`.
1. Source the `lmod.R` script: `source("/data/apps/helpers/lmod.R")`.
1. Load a submodule using the `module()` function from the script:
   - `module("load", "r/4.0.2")` - this step loads the R module itself, making the submodules accessible.
   - `module("load", "r-ggplot2")` - this loads the "ggplot2" package.

**Unloading Submodules**

To unload a submodule, use the `module()` function with the "unload" action: `module("unload", "r-ggplot2")`.

**Examples**

The following examples demonstrate using `lmod.R` to load and manage R submodules:

- **Loading tidyverse:** Load the "tidyverse" submodule after loading the R module and sourcing `lmod.R`:
  ```R
  module("load", "r-tidyverse")
  library(tidyverse)
  ```
- **Loading multiple submodules and installing a package:** Load "libjpeg," "libpng," "bzip2," and "curl" before installing the "Rsamtools" package using BiocManager:
  ```R
  module("load", "libjpeg")
  module("load", "libpng")
  module("load", "bzip2")
  module("load", "curl")
  if (!require("BiocManager", quietly = TRUE)) install.packages("BiocManager")
  BiocManager::install("Rsamtools",dependencies=TRUE, force=TRUE)
  library(Rsamtools)
  ```
- **Listing loaded submodules:** You can use `module("list")` to display the currently loaded modules, including R and its submodules.

**Key Points:**

- The `lmod.R` script only works with specific R versions, such as 3.6.3 or 4.0.2. The R version loaded in the terminal must match the one used with `lmod.R`.
- The examples above illustrate how to load specific R packages ("ggplot2," "tidyverse," "Rsamtools") after loading the necessary base modules.
- You can use `module("avail")` to list all available modules and `module("spider", "r-")` to specifically search for R-related modules.

**Note:** Using `lmod.R` within RStudio has not been specifically documented, but the same principles of loading and managing modules should apply. The path to the `lmod.R` script may differ within the RStudio environment.

## Rockfish Condo Model: Integrating Resources, Benefits, and Contact Information

The Rockfish condo model allows researchers to integrate their personal computational resources into the main Rockfish cluster at Johns Hopkins University. This model offers various benefits and has specific requirements for participation.

### Integrating Personal Resources into the Main Cluster

The condo model allows Principal Investigators (PIs) to contribute various computing resources to the Rockfish cluster, enhancing the overall computational power available to the research community. These contributions, known as "condos," can include:

- Compute nodes
- GPU nodes
- Sub-racks
- Management and Infiniband switches
- Necessary software licenses

The integration of these resources creates a more homogenous environment, benefiting both the condo contributors and the broader research community.

### Benefits of the Condo Model

PIs who choose to contribute condos to the Rockfish cluster enjoy several benefits:

- **Priority Use and Increased Allocation:** PIs receive a dedicated allocation of walltime hours equivalent to their hardware investment, allowing them priority access to their contributed resources. They can utilize as many cores as their allocation permits.
- **Shared Resources and Load Balancing:**  While PIs have priority access to their condos, the model encourages the use of idling condo nodes by other researchers when not actively used by the contributing PI, maximizing resource utilization and enabling load balancing across the cluster.
- **Reduced Infrastructure Costs:** Contributing to the shared Rockfish cluster eliminates the need for PIs to design, build, and maintain their own separate HPC infrastructure, reducing costs and administrative burden.
- **Stable System Management:** ARCH provides administration and management for the entire Rockfish cluster, including integrated condos, ensuring stability and consistency in the computing environment.

### Requirements of the Condo Model

The condo model has certain requirements to maintain a cohesive and efficient shared computing environment:

- **Funding:** PIs are encouraged to secure funding for their condo contributions.
- **Homogeneity:** PIs need to consult with the ARCH director to ensure their proposed hardware configurations align with the existing cluster and technological advancements.
- **Warranty:**  A minimum 5-year warranty is required for all contributed hardware.
- **Hardware Lifespan:** Hardware is typically kept for five years and may be declared surplus afterward if repairs become difficult.
- **Power and Cooling Costs:** The contributing PI's School covers additional power and cooling costs based on resource utilization.

### Contact Information for Condo and Colocation Requests

For more information about the condo model, colocation services, or to initiate the process, researchers can contact ARCH at `help@rockfish.jhu.edu`. This contact information is provided in the context of colocation services but is likely applicable to condo inquiries as well.

## Support, Resources, and Best Practices for Rockfish

ARCH provides a range of support resources and best practices for utilizing the Rockfish cluster.

### Contacting Support

- **Email:** The primary method for contacting Rockfish support is via email at **help@rockfish.jhu.edu**.
- **Website:** The Rockfish website {cite:p}`arch_main` serves as a central hub for information, documentation, and access to other resources.

### Frequently Asked Questions (FAQ)

- **FAQ Page:** The ARCH FAQ page ([https://www.arch.jhu.edu/support/faq/](https://www.arch.jhu.edu/support/faq/)) addresses common questions related to Rockfish, including account management, data transfer, and job submission.

### Best Practices for Job Submission and Resource Utilization

The following best practices help optimize job submission and resource utilization on Rockfish:

#### Understanding Job Parameters

- Accurately estimating job parameters like memory, time limit, and the number of cores is crucial to avoid resource waste and prevent job failures.

#### Application Type and Parallelism

- Determine if your application runs in **serial mode (one process) or uses multiple processes** via threads or MPI libraries.
  - OpenMP (threaded) applications run only within a node, while MPI-based codes can utilize multiple nodes.
- **Optimize thread usage** for threaded applications like Matlab or Gaussian. Running with too many threads can be inefficient.

#### Benchmarking and Resource Estimation

- Run **short benchmarks (1-2 hours) with a few processes/cores** to understand your application's resource requirements.
- Use the `interact` command to request interactive sessions for benchmarking and testing.

#### Memory Management

- For the parallel queue, each node has 48 cores and roughly 4 GB of memory per core.
- Job memory is determined by the number of tasks (`--ntasks-per-node`, "n"). If "n" is 1, the job has a maximum of 4 GB of memory.
- Requesting more cores increases the available memory. For a serial job needing more than 4 GB, requesting 2 cores will double the memory.

#### Checking Job Performance

- Connect to nodes where jobs are running and use tools like `top` or `gpustat` (for GPU jobs) to monitor performance.
- Use `srun` with the job ID and node name to access the node: `srun --jobid=12345 -w c001 --pty /bin/bash`.
- For GPU codes, use `ml nvitop; nvitop` to check GPU utilization.
- After job completion, use the `seff` command (`seff JobID`) to analyze job performance and resource efficiency.

#### GPU Job Tips

- For the `a100` partition, each GPU is mapped to 12 cores (48 cores / 4 GPUs), with approximately 4 GB of memory per core.
- Do not request more cores than needed for the GPUs. Requesting extra cores will assign more GPUs, potentially wasting resources.
- Similar guidelines apply to the `ica100` partition, where each GPU is mapped to 16 cores (64 cores / 4 GPUs) and each GPU has 80 GB of memory.

### Guidelines for Effective Communication with Support Staff

When contacting Rockfish support, it's essential to provide comprehensive information to facilitate a quick and efficient resolution.

#### Essential Information to Include

- **Rockfish User ID:** Your unique identifier on the cluster.
- **Job ID:** If the issue pertains to a specific job.
- **Batch Submission Script:** The full path to the script you used to submit the job.
- **Error Messages:**  Any specific error messages you encountered.
- **Snapshot with Errors:** If possible, include a screenshot or log file snippet showing the errors.
- **Detailed Problem Description:**  Clearly and thoroughly describe the problem you're facing.

By following these guidelines, you can effectively communicate with the Rockfish support staff and ensure a smoother troubleshooting process.

:::{bibliography}
:::
