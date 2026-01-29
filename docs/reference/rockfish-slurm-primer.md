# Appendix: Rockfish / Slurm primer

- [Back to master index](../index.md)
- This appendix is a practical Rockfish-focused how-to. For anything time-sensitive (policies, current modules, partitions, hardware), defer to the official ARCH documentation.

# Rockfish and High-Performance Computing (HPC)

Rockfish is the flagship high-performance computing resource at JHU. It is a shared facility where researchers from various departments, including Economics and other Social Sciences, can contribute computational resources in a homogeneous environment. This setup not only provides stability and priority usage for those contributing resources, but also benefits all researchers by expanding the available computational power for everyone through efficient resource load-balancing.

## Authoritative references (use these when details change)

- **ARCH docs (Rockfish, partitions, policies, current recommendations):** `https://docs.arch.jhu.edu/en/latest/`
- **Allocations / ColdFront:** `https://coldfront.rockfish.jhu.edu/` (policy: `https://www.arch.jhu.edu/policies/allocations/`)

## The Condominium Model

A distinctive feature of Rockfish is its "condominium" model {cite:p}`arch_condos`, which allows principal investigators (PIs) from various schools within Hopkins to contribute their own computational resources to the cluster. These condos can include compute nodes, GPU nodes, sub-racks, management and Infiniband switches, and necessary software licenses. In exchange for the administration and integration of their condo, PIs agree to allow the use of their idling condo nodes by other researchers. PIs receive a walltime allocation equivalent to their purchase, allowing their users to access as many cores as possible within that allocation.

### Benefits

- **Priority use and increased allocation:** PIs receive dedicated walltime hours equivalent to their hardware investment, granting them priority access to their contributed resources.
- **Shared resources and load balancing:** Idling condo nodes are available to other researchers, maximizing cluster utilization.
- **Reduced infrastructure costs:** Contributing to the shared cluster eliminates the need for PIs to build and maintain separate HPC infrastructure.
- **Stable system management:** ARCH administers the entire cluster, including integrated condos, ensuring stability and consistency.

### Requirements

- **Homogeneity:** PIs must consult with the ARCH director to ensure proposed hardware configurations align with the existing cluster.
- **Warranty:** A minimum 5-year warranty is required for all contributed hardware.
- **Hardware lifespan:** Hardware is typically kept for five years and may be declared surplus afterward if repairs become difficult.
- **Power and cooling costs:** The contributing PI's School covers additional power and cooling costs based on resource utilization.

For more information about the condo model or colocation services, contact ARCH at `help@rockfish.jhu.edu`.

(compute-nodes)=
## Compute Resources

Compute nodes are the individual computers that make up a high-performance computing (HPC) cluster like Rockfish {cite:p}`arch_hardware`. Each node contains resources like CPUs, memory, and potentially GPUs, that are used to execute user jobs. Rockfish has different types of compute nodes, including:

- **Regular Compute Nodes:** These are the standard compute nodes on Rockfish. They are organized into partitions/queues that dictate how resources are allocated based on the type and size of the job.
- **Large Memory (LM) Nodes:** Rockfish has a limited number of large memory nodes for jobs requiring more than 192GB of memory.
- **GPU Nodes:** Rockfish offers GPU nodes equipped with NVIDIA A100 GPUs for accelerated computing {cite:p}`arch_gpu_jobs`. These nodes are available through two partitions: the `a100` partition, which provides A100 GPUs with 40GB of memory each (12 cores per GPU, 48 cores per node), and the `ica100` partition, which provides A100 GPUs with 80GB of memory each (16 cores per GPU, 64 cores per node) {cite:p}`arch_partitions`. Each GPU is mapped to a specific number of cores, and requesting more cores than the mapped amount will automatically assign additional GPUs to the job, potentially leading to wasted resources.

(memory)=
### Memory

The memory available for a job on Rockfish is determined by the number of tasks requested per node {cite:p}`arch_faq`. Each core is associated with approximately 4GB of memory. By default, each core has 4GB of memory allocated to it. If a job requires more memory, users can request additional cores; each additional core adds 4GB to the job's total available memory.

## Storage

Rockfish offers various storage options for researchers {cite:p}`arch_storage`:

- **Local Scratch (`/tmp`):** Each compute node has a local NVMe hard drive mounted as /tmp, offering fast read/write speeds in the order of microseconds compared to the millisecond speeds of the spinning disk GPFS. This is ideal for users working with small files, but data should be moved back to either the scratch or data file systems before the job ends to avoid losing any work.
- **Shared Scratch File Systems (`/scratch4` & `/scratch16`):** These file systems are optimized for handling small and large files respectively. Users are encouraged to use the scratch file system for all input/output (I/O) processing during job execution.
- **Data File System (`/data`):** Designed for longer-term storage with larger capacity. While it is acceptable to read files from the data file system, researchers are discouraged from conducting heavy I/O operations on this file system due to its relatively lower performance compared to the scratch file systems.
- **Home Directory:** Each user gets a 50GB home directory that is backed up weekly to an off-site location.
- **Group Allocation on Parallel File System:** All research groups receive a default allocation of 10TB on the parallel file system (GPFS). Justifications for additional scratch space can be submitted with proposals.

# Accessing and Managing Resources on Rockfish

## Requesting Allocations and Accounts

To facilitate the management of projects and user accounts, Rockfish utilizes a portal based on ColdFront {cite:p}`coldfront_portal`. ColdFront is a web-based platform that provides researchers with a centralized location to request allocations, manage user accounts, and track resource usage. The portal can be accessed at: [https://coldfront.rockfish.jhu.edu](https://coldfront.rockfish.jhu.edu).

Rockfish offers several types of allocations tailored to different research needs {cite:p}`arch_allocations`:

- **CPU Allocations:** These allocations provide access to the general compute nodes on Rockfish and are suitable for a wide range of research tasks. By default, research groups receive an allocation of approximately 50,000 core-hours per quarter. However, this allocation can be increased with appropriate justification.
- **Large Memory (LM) Allocations:** These allocations are specifically designed for jobs that require significant amounts of memory (more than 192GB). Like CPU allocations, the default allocation for large memory nodes ("bigmem") is 50,000 core-hours per quarter, but can be increased with proper justification.
- **GPU Allocations:** For research involving accelerated computing with GPUs, Rockfish offers GPU allocations. The standard allocation for GPU resources is 20,000 core-hours per quarter. Again, this allocation can be expanded upon submission of a justification outlining the specific computational needs of the research.
- **Startup Allocations:** These are one-time allocations intended to help new research groups familiarize themselves with the Rockfish environment. They provide a trial period to benchmark codes and explore the various features and resources available on the cluster. This initial experience allows researchers to gather the necessary information to submit informed proposals for regular allocations that accurately reflect their computational needs.

All allocations on Rockfish are subject to limits based on the type of resource and are granted according to available capacity. While default allocations are provided, researchers can request increased resources by providing a justification for their needs in their proposal. This justification should demonstrate how the requested resources are essential for the proposed research project. Factors that can influence the allocation approval process include:

- **Computational Needs:** A clear explanation of the computational demands of the project, including the type of analysis, the size of datasets, and the estimated runtime for simulations or calculations.
- **Resource Requirements:** Justification for the specific types of resources requested, whether it's CPU cores, large memory nodes, or GPU nodes. The proposal should explain why these resources are necessary for the project and how they will be utilized.
- **Alignment with Research Goals:** The proposal should clearly articulate how the requested allocation aligns with the overall research goals and objectives. Highlighting the potential impact and significance of the research outcomes can strengthen the justification.

::::{important}
A video tutorial on using the ColdFront portal is available at: <https://youtu.be/L6zvLBK5Mss>. The tutorial covers creating an account on ColdFront, requesting an allocation, adding user accounts, and designating a proxy.
::::

## Connecting to Rockfish

To connect to the Rockfish cluster, users can establish an SSH connection using a terminal application on their local machine {cite:p}`arch_login`. The specific terminal application and connection process vary slightly depending on the user's operating system. Users of macOS or Linux operating systems can use the built-in Terminal application for SSH connections. Additionally, XQuartz is recommended for X11 forwarding, which enables graphical applications to be displayed from the cluster to the user's local machine. Windows users can utilize PuTTY or MobaXterm for SSH connections. These applications provide a user-friendly interface for establishing secure connections to remote servers, such as Rockfish.

Regardless of the operating system or terminal application used, the following connection parameters are required:

- **Host Name:** `login.rockfish.jhu.edu`
- **Port:** 22 (the standard SSH port)
- **Login Credentials:** Rockfish UserID (typically the user's JHED ID) and corresponding password.

::::{important} Several SSH command variations can be used to connect to Rockfish:

- `ssh YourUserId@login.rockfish.jhu.edu`
- `ssh login.rockfish.jhu.edu -l YourUserId`
- `ssh -XY YourUserId@login.rockfish.jhu.edu`

The last command includes options for X11 forwarding (`-XY`), allowing graphical applications running on Rockfish to be displayed on the user's local machine.
::::

## Data Transfer Methods

Rockfish supports various methods for transferring data between the cluster and external systems, each suitable for different data sizes and transfer requirements:

- `curl` and `wget`: These command-line utilities are useful for downloading files from web servers or FTP sites directly to Rockfish. They are generally suitable for transferring small to moderately sized files.
- `scp`: The secure copy (`scp`) command allows users to transfer files between their local machine and Rockfish over an SSH connection. This method is suitable for transferring small to large files, but may not be ideal for very large datasets due to potential performance limitations.
- **Globus**: For transferring large datasets (greater than 100 GB), Globus is the recommended method. Rockfish has dedicated data transfer nodes (DTNs) that are GlobusConnect endpoints, facilitating high-speed data transfers between Rockfish and other Globus-enabled systems. DTNs are also recommended for using applications like Filezilla or for executing traditional secure copy commands. Globus provides a reliable and efficient way to transfer large datasets in the background, handling interruptions and ensuring data integrity. For transferring very large datasets (terabytes), it is advisable to split the data into multiple smaller chunks for better performance on the DTN.

## Modules for Software Management

The Rockfish cluster employs a module system, specifically Lua modules version 8.3 developed at TACC {cite:p}`tacc_lmod`, to manage software packages and user environments. Modules provide a way to dynamically modify the shell environment, ensuring that the necessary software and libraries are accessible for specific applications.

**Loading and unloading modules:**

- `module load` (or `ml`): Loads a specific module, making the corresponding software available. For example, `module load intel intel-mpi intel-mkl` loads the Intel compilers and MPI libraries.
- `module unload` (or `ml -`): Unloads a previously loaded module. For example, `module unload intel-mpi`.

Rockfish's Lua module system handles dependencies and conflicts automatically. If a user loads a module that conflicts with a previously loaded one, the system will automatically replace the conflicting module.

**Searching and inspecting modules:**

- `module avail` (or `ml av`): Lists all available modules on the cluster.
- `module spider` (or `ml spider`): Searches for specific modules and shows available versions and dependencies. For example, `module spider python`.
- `module show` (or `ml show`): Displays detailed information about a module, including environment variables, compilation options, and dependencies. For example, `module show python/3.9.0`.

**Managing module collections:**

- `module save`: Saves the currently loaded modules into a named collection for future sessions. For example, `module save data_science`.
- `module restore`: Restores a previously saved collection. For example, `module restore data_science`.
- `module disable`: Deletes a saved collection. For example, `module disable data_science`.

## Checking Allocation Status

Rockfish uses a system of allocations to manage computing resources and ensure fair usage among researchers {cite:p}`arch_usage`. You can use several commands to check the status of your allocations, both for yourself as a user and as a PI for your group.

There are two primary commands for viewing allocation usage:

- `sbalance PI-userid`: This command shows the overall allocation usage for a specific PI, identified by their PI-userid. This information can help PIs track the resource consumption of their research group and manage their allocation effectively.
- `user-sbalance -u userid`: This command provides allocation usage information for an individual user, specified by their userid. Users can use this command to monitor their own resource consumption and ensure they are operating within their allocated limits.

The output of these commands typically includes details such as the allocation name, user ID, core hours used, total core hours allocated, and the percentage of the allocation consumed. This information is valuable for both PIs and users to monitor resource usage, track progress, and plan future resource requirements.

For a more detailed breakdown of allocation usage, use:

```bash
sacctmgr -p list associations user=YourUserId format=Account,User,Partition,Qos,DefaultQOS tree | column -ts'|'
```

The components of this command are:

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

# Running Jobs on Rockfish Using Slurm

## Slurm Overview

Rockfish uses Slurm to manage resource scheduling and job submissions {cite:p}`arch_rockfish_docs`. Slurm is a widely used open-source workload manager in the HPC field, developed by SchedMD. It provides three essential functions:

- Resource access: Slurm grants users access to various resources, including compute nodes, memory, and specialized hardware like GPUs. By managing resource allocation, Slurm ensures fair and efficient usage for all users.
- Job management: Slurm handles the execution of user jobs, monitoring their progress and managing their resource consumption. This involves launching, tracking, and terminating jobs based on user-defined parameters.
- Queue management: Slurm maintains queues of submitted jobs, scheduling them for execution based on resource availability, job priority, and user-defined constraints. This prevents system overload and optimizes resource utilization.

Slurm supports three main job types: [interactive sessions](#interactive-sessions) for direct interaction with compute nodes, [batch jobs](#slurm-batch-scripts) for non-interactive script execution, and [job arrays](#job-arrays) for submitting many similar jobs with varying parameters.

(interactive-sessions)=
## Interactive Sessions

Interactive sessions on Rockfish enable researchers to directly engage with compute nodes, facilitating tasks such as code development, debugging, and interactive data analysis. Instead of submitting jobs to a queue, interactive sessions provide an immediate command-line interface on the allocated compute node, allowing for real-time interaction with running processes and data.

To initiate an interactive session on Rockfish, users employ the `interact` command. This command allows for the specification of several crucial parameters to tailor the session to the user's needs:

- Partition: The `-p` flag designates the specific partition where the interactive session should run. Rockfish offers various partitions optimized for different job types, including `shared` for general-purpose computing, `parallel` for parallel jobs, `a100` and `ica100` for GPU-accelerated tasks, `bigmem` for memory-intensive workloads, and `express` for short, interactive jobs.
- Cores: The `-c` flag determines the number of cores to be allocated for the interactive session.
- Time: The `-t` flag sets the duration of the interactive session, expressed in minutes or in the format `HH:MM:SS`.

For example, to request an interactive session on the `shared` partition with 2 cores for 120 minutes:

```bash
interact -p shared -c 2 -t 120
```

Or a 12-hour session on a GPU partition:

```bash
interact -p a100 -c 12 -t 12:00:00 -g 1
```

Once the interactive session is no longer needed, users can gracefully exit using the exit command. This releases the allocated resources, making them available for other users or jobs.

(slurm-batch-scripts)=
## Batch Scripts

Slurm batch scripts are essential for running non-interactive jobs on Rockfish, enabling researchers to execute computationally demanding tasks without continuous user interaction. These scripts, written in Bash, serve as blueprints for job execution, defining the necessary resources, dependencies, and execution steps for a given task. A batch script is typically structured into three main components:

- **Resource Requests:** This section, delineated by `#SBATCH` directives, outlines the computational resources needed for the job. These directives convey instructions to the Slurm scheduler, detailing parameters like the job name, wall time, number of nodes, cores per task, memory allocation, and specific hardware requirements such as GPUs.

- **Environment Setup:** This part of the script handles the setup of the job's software environment. It typically includes loading the required modules for compilers, libraries, and applications. Modules, managed by Lmod, provide a standardized way to access and manage different software versions on Rockfish, ensuring consistency and reproducibility. For example, to load the Intel compiler module:

```bash
# Find the module name(s) available on Rockfish
module spider intel

# Load the appropriate module (name/version may differ)
module load intel
```

- **Job Steps:** This section encompasses the actual commands to be executed during the job. It can include compiling code, running executables, processing data, and performing any other task defined by the researcher.

Here is an example demonstrating these components:

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

1. **Resource Requests:** The `#SBATCH` directives specify the job name, output/error files, partition, node count, tasks per node, time limit, and email notifications. See [](#slurm-flags) for a full reference of available flags.

1. **Environment Setup:** `ml intel intel-mpi intel-mkl` loads the Intel compilers, MPI library, and Math Kernel Library.

1. **Job Steps:** `mpirun -np 8 ./my_program` executes the compiled program using 8 MPI processes, with output directed to `my_job.out`.

**Submitting the Job:**

To submit this script to the Slurm scheduler, save it to a file named `my_job.slurm` and execute the following command in the terminal:

```bash
sbatch my_job.slurm
```

Slurm will then queue the job and allocate the requested resources when they become available. The job's progress and output can be monitored using various Slurm commands such as `squeue`, `sqme`, and `scontrol`.

(submitting-monitoring)=
## Submitting and Monitoring Jobs

After submitting a job with `sbatch` (see [](#slurm-batch-scripts)), Slurm assigns a unique job ID. You can monitor jobs using the commands described in [](#slurm-commands). To check a specific job:

```bash
squeue -j 12345
```

Slurm redirects the standard output and error streams to files specified in the script. By default, output is written to `slurm-[jobid].out` if no output file is specified. You can view these files using text editors or command-line tools like `cat` or `less`.

Jobs can be in various states: **Pending** (awaiting resource allocation), **Running** (executing on allocated nodes), **Complete** (finished successfully), **Timeout** (exceeded the wall time limit), **Failed** (terminated with a non-zero exit code; check `slurm-[jobid].err` for details), or **Node Fail** (terminated due to a hardware or system-level problem on an allocated node).

## Job Arrays and Environment Variables

(job-arrays)=
### Job Arrays

Job arrays provide a powerful mechanism for submitting and managing a large number of similar jobs efficiently.  Instead of creating and submitting individual scripts for each job, you can define a single script with an array specification, instructing Slurm to create multiple job instances based on the provided parameters.

**Defining a Job Array**

The `#SBATCH --array` directive defines a job array in a Slurm script. It takes an array specification defining the range, optional step size (`:N`), and optional concurrency limit (`%N`) for the array indices. For example:

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

### Environment Variables

Slurm provides several environment variables that can be accessed within your scripts to get information about the job and the computing environment. Some of the key environment variables include:

- **`SLURM_JOBID`:**  A unique identifier assigned to each job submitted to Slurm. This ID can be used to track the job's status, view its output, and cancel it if necessary.
- **`SLURM_SUBMIT_DIR`:** The directory from which the job was submitted.
- **`SLURM_SUBMIT_HOST`:**  The hostname of the machine from which the job was submitted.
- **`SLURM_JOB_NODELIST`:**  A list of the compute nodes allocated to the job.

(slurm-commands)=
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

(slurm-flags)=
### Common Slurm Flags and Their Usage

Slurm flags, specified in the resource request section of your batch script using `#SBATCH` directives, control job parameters and resource allocation.  Here's a description of commonly used Slurm flags:

- **`--job-name=[job_name]`**:  Assigns a descriptive name to your job, making it easier to identify and track in the queue.
- **`--output=[output_file]`**: Specifies the file where the standard output of your job will be written.
- **`--error=[error_file]`**: Specifies the file where error messages generated by your job will be written.
- **`--partition=[partition_name]`**:  Specifies the partition or queue where your job should be submitted. You can use `sinfo` to list available partitions. Rockfish offers various partitions, including "shared" for jobs that can share resources, "parallel" for exclusive node access, "a100" and "ica100" for GPU jobs, and "bigmem" for jobs needing large memory.
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
- **`--array=[array_spec]`**:  Defines a job array. The `array_spec` determines the range of array indices, with optional step size (`:N`) and concurrency limit (`%N`).

(practical-examples)=
## Practical Slurm Script Examples

The following Slurm script examples illustrate common job submission patterns on Rockfish.

**Basic Slurm Script**

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

This script requests 1 node with 8 tasks on the `shared` partition for 1 hour (see [](#slurm-flags) for flag details). The `%j` placeholder in the output filenames is replaced by the Slurm job ID. After loading the Intel compiler module, the script prints a message, the compute node's hostname, and the current date.

**Matlab Job Array with Multiple Tasks**

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
- **Multiple Tasks Per Array Element:** The `--ntasks=4` flag specifies that each array element will launch 4 tasks (processes), each using 1 core by default.
- **Matlab Execution:**  The `matlab` command runs a Matlab script (`myMatlabFunction`) with the task ID as input, pauses for 20 seconds, and then exits.

**Job Array with a Concurrency Limit**

```bash
#!/bin/bash -l 
#SBATCH --job-name=ConcurrencyArray
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

**Running an MPI Program**

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

**Running a Mixed MPI/OpenMP Program**

```bash
#!/bin/bash -l 
#SBATCH --job-name=MixedMPI_OpenMP 
#SBATCH --time=1:00:00 
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=12
#SBATCH --cpus-per-task=2 
#SBATCH --partition=parallel
#SBATCH --mail-type=end
#SBATCH --mail-user=your_email@example.com

# Load necessary modules (adjust as needed)
module load intel intel-mpi

# Set OpenMP threads per MPI task
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK

# Compile the mixed MPI/OpenMP program (adjust compiler and filenames as needed)
mpiicc -qopenmp -o my_mixed_program.x my_mixed_program.c

# Run the program
mpirun -np 24 ./my_mixed_program.x > output.log

echo "Completed mixed MPI/OpenMP job $SLURM_JOBID"
```

**Explanation:**

- **Resource Allocation:**  The script requests 2 nodes with 12 tasks per node and 2 CPUs per task. Multi-node jobs require the `parallel` partition.
- **Compilation:**  The  `mpiicc`  compiler, with the  `-qopenmp`  flag, is used to compile the mixed MPI/OpenMP program.
- **Execution:** The `mpirun` command launches the program, and the output is redirected to the specified file.

Remember that these are example scripts, and you'll need to tailor them to your specific needs, adjusting resource requests, module loading, compilation commands, and the number of processes used in `mpiexec` according to your application.

# Software Environment

## Singularity Containers

**Singularity / Apptainer** is available on Rockfish compute nodes without loading a module. (Exact versions and preferred commands can change; consult the [ARCH documentation](https://docs.arch.jhu.edu/) for current guidance.) To use it, request an interactive session on a compute node using the `interact` command, specifying the desired partition, number of cores, and time limit:

```bash
interact -p parallel -n 1 -c 1 -t 120
```

This command requests an interactive session on the `parallel` partition with 1 task, 1 core, and a time limit of 120 minutes. Once you have an interactive session, you can use basic Singularity commands.

The key Singularity commands are:

- `singularity pull`: Pulls a container image from a registry such as Docker Hub. Singularity is compatible with Docker images. For example:

```bash
singularity pull python.sif docker://python:3.11-slim
```

- `singularity run`: Runs a Singularity image. For example, `singularity run python-3.9.6.sif`.
- `singularity shell`: Starts an interactive shell session inside a container. For example, `singularity shell python-3.9.6.sif`.
- `singularity --help`: Displays help information and available commands.

Singularity also provides support for GPUs and MPI applications, allowing containerized workloads to utilize these technologies. For more detailed information, consult the ARCH Technical Documentation {cite:p}`arch_rockfish_docs` and the Rockfish Cluster Software Guide {cite:p}`rockfish_software_guide`.

## Python Virtual Environments

Python virtual environments can be created on Rockfish using either `venv` or `conda`, and then used within Slurm scripts.

**Creating virtual environments:**

- **Using `venv`:** Load a Python module (`module load python/3.8.6`), then create the environment: `python3 -m venv myenv`.
- **Using `conda`:** Load the Anaconda module (`module load anaconda`), then create the environment: `conda create --name myenv python=3.9`.

**Activating, deactivating, and installing packages:**

- **`venv`:** Activate with `source myenv/bin/activate`, deactivate with `deactivate`.
- **`conda`:** Activate with `conda activate myenv`, deactivate with `conda deactivate`.
- Once activated, install packages with `pip install numpy` or `conda install numpy`.

**Using virtual environments in Slurm scripts:**

To use a virtual environment within a Slurm script, activate it before running your Python script:

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

## R Submodules

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

# Best Practices and Support

## Job Submission Best Practices

The following best practices help optimize job submission and resource utilization on Rockfish:

- **Estimate job parameters accurately.** Memory, time limit, and core count should reflect actual needs to avoid resource waste and job failures.
- **Know your application's parallelism.** Determine whether it runs in serial mode, uses threads (OpenMP, within a single node), or MPI (across multiple nodes). Optimize thread counts for applications like Matlab or Gaussian.
- **Benchmark before production runs.** Run short benchmarks (1--2 hours) with a few processes to understand resource requirements. Use the `interact` command for benchmarking and testing.
- **Manage memory through core requests.** Memory per job is determined by the number of cores requested (see [](#memory)). For a serial job needing more than 4 GB, requesting additional cores increases the available memory proportionally.
- **Monitor running jobs.** Connect to compute nodes with `srun --jobid=12345 -w c001 --pty /bin/bash` and use `top` or `gpustat` to check performance. For GPU codes, use `ml nvitop; nvitop`. After completion, use `seff JobID` to analyze resource efficiency.
- **Avoid wasting GPU resources.** Do not request more cores than needed for the GPUs. See [](#compute-nodes) for the core-to-GPU mapping on each partition.

## Contacting Support

The primary method for contacting Rockfish support is via email at **help@rockfish.jhu.edu**. The Rockfish website {cite:p}`arch_main` and the [FAQ page](https://www.arch.jhu.edu/support/faq/) address common questions about account management, data transfer, and job submission.

When contacting support, include the following information for a quick resolution:

- **Rockfish User ID** and **Job ID** (if applicable)
- **Batch submission script** (full path)
- **Error messages** and screenshots or log snippets
- **Detailed problem description**

::::{bibliography}
::::

