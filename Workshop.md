# Hands-on Workshop
## Beyond the IDE: Unlocking the full power of GitHub Copilot
Revision 1.0 2024-10-25

**Versions of dialogs, buttons, etc. shown in screenshots may differ from current version of Copilot**


## Introduction
GitHub Copilot isn’t just for your favorite code editor—it offers a range of capabilities that extend far beyond. In this workshop, Christina Warren, Senior Developer Advocate at GitHub, and Dave Burnison, Senior DevOps Advocate at GitHub, will walk you through how to leverage GitHub Copilot across various tools, how to address security issues with Copilot Autofix and work with GitHub Actions workflows. Discover how to utilize GitHub Copilot Chat in GitHub.com, how to get the benefits of Copilot in your terminal, and how to use GitHub Copilot Workspace to streamline your process from ideation to deployment. They’ll also showcase extending Copilot via GitHub Copilot Extensions that are available in the marketplace or created custom to your organization.

**Presenters:**

- **Dave Burnison** [@daveburnisonms](https://github.com/daveburnisonms), Senior DevOps Advocate, GitHub
- **Christina Warren** [@filmgirl](https://github.com/filmgirl), Senior Developer Advocate, GitHub


## DO THIS FIRST

Microsoft Edge and Google Chrome are installed on all of these machines. Microsoft Edge is the default browswer, so that's where you should sign-in with the credentials you were given when you entered the room. This will be the main test account where you will work through this lab. _**However**_, if you want to explore GitHub Copilot Workspace, you will need to take one extra step.

Open Google Chrome (also installed) on this machine and go to:
## https://gh.io/workspace-waitlist and login with your _personal_ GitHub user account and then sign-up for the waitlist.

![join-workspace-waitlist](./Images/picdark020.png?raw=true "join-workspace-waitlist")

Then, return to your Microsoft Edge and visit this issue (https://github.com/orgs/DevRelLabs/discussions/1) in this repo and comment with your GitHub username. 

We will whitelist you for access to GitHub Workspace, which you can access from your personal GitHub account in Google Chrome during that portion of our talk.

## Before you begin

### 1. Configure your desktop to make Workshop.md easily accessible

Before we begin, we will configure the browser windows to make the Workshop.md file easily accessible. This will allow you to easily switch between the lab instructions and the PartsUnlimited Repo and other windows you open to complete the workshop.

![Split View](./Images/gifdark001.gif?raw=true "Split View")

Here are the suggested steps to configure your desktop to make Workshop.md easily accessible.

1. Open https://github.com/DevRelLabs/Beyond-the-IDE-Instructions/blob/main/Workshop.md in a broswer.

2. Open https://github.com/DevRelLabs/PartsUnlimited **in a separate browser tab**.

3. **OPTIONAL:** Drag the tab to the right side of the screen until it snaps to the right side of the screen. Select the above tab when prompted to select the tab to snap to the left side of the screen. The idea is that we want to have the Workshop.md file on the left side of the screen and a GitHub repo on the right side of the screen. Move the vertical slider until you can comfortably see the instructions in Workshop.md and the GitHub repo side by side. 

4. If needed, adjust the zoom level so that you can comfortably read the instructions in Workshop.md and work with the GitHub repo. 

This is just a suggestion, arrange the windows, set the zoom level, etc. in a way that works best for you.

In this configuration, we can see the `Workshop.md` file to one side of the screen while we are executing the actions in GitHub Copilot Chat in GitHub.com on the other side of the screen. 

![Split View](./Images/picdark001.png?raw=true "Split View")

## Using GitHub Copilot Chat in GitHub.com with issues and code in your repository

### 1. Accessing GitHub Copilot Chat in GitHub.com

1. Click on the **Open Copilot Chat** icon in the lower right corner of the GitHub.com window. See the above screenshot for the location of the icon.

2. You may see some starter questions such as **What questions can I ask?**. Click on that question or enter `What questions can I ask?` in the chat window and press `Enter`.

![What can Copilot do](./Images/picdark003.png?raw=true "What can Copilot do")

To get started with GitHub Copilot Chat, you can ask Copilot about Copilot. Also, see the [GitHub Copilot Chat documentation - Currently available skills](https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#currently-available-skills).

### 2. Learn about the current repository

**Purpose: Use GitHub Copilot to ask questions about a repository.**

Let's start with a basic request about this repository. NOTE: GitHub Copilot's ability to answer natural language questions, in the context of a GitHub repository, is improved when [the repository has been indexed for semantic code search](https://docs.github.com/en/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/customizing-copilot-for-your-organization/indexing-repositories-for-copilot-chat). This allows GitHub Copilot to offer a more integrated and intelligent coding assistant experience, tailored to your specific project. NOTE: We have already indexed the repositories that we will be using in this workshop.

Enter the following text in the prompt box. 

```
What does the code in this repo do? What is the tech stack?
```
![Learn about the repo](./Images/picdark004.png?raw=true "Learn about the repo")  

Notice how Copilot has provided an overview of what is in the repo and a summary of the tech stack. This is a great way to learn about a repository that is new to you. skim through the full response. Copilot provides links to it's sources to see where Copilot is getting the information from. 

### 3. Find and summarize issues

**Purpose: Use GitHub Copilot Chat to locate and explain specific issues**

While GitHub Copilot started as a tool to help you write code, it has evolved to help you with many other tasks. For example, you can use GitHub Copilot to find and summarize issues in a repository. 

Enter the following text in the prompt box. 

```
Are there any issues with the label "enhancement" 
```
Copilot will respond with a list of issues that have the label "enhancement", including a link to each issue.

We could follow the link and then read the entire issue but, let's see if we can get a summary of the issue. Enter the following text in the prompt box.

```
Summarize that issue 
```
![Summarize that issue](./Images/picdark006.png?raw=true "Summarize that issue ")  

Copilot is able to provide a summary of the issue. This is a great way to quickly get an overview of an issue without having to read the entire issue. 

### 4. Find related code in the repository

**Purpose: Ask Copilot to find code in the repository that is related to calculating sales tax.**

Our first task is to find code in the repository that is related to calculating sales tax. Since we are new to this repository, we will ask GitHub Copilot to help us find the code that calculates sales tax.  

Enter the following text in the prompt box.

```
Where in this repo do we have code that calculates sales tax? 
```
![Find CalculateTax](./Images/picdark007.png?raw=true "Find CalculateTax")  

Awesome! GitHub Copilot has found the `CalculateTax` function in the `TaxCalculator` class. Let's take a look at this code. Click on the link to [DefaultShippingTaxCalculator.cs](https://github.com/devrellabs/PartsUnlimited/blob/main/PartsUnlimited-aspnet45/src/PartsUnlimitedWebsite/Utils/DefaultShippingTaxCalculator.cs) to see the full code. skim down to the `CalculateTax` function. We can see that the `CalculateTax` function takes a `postalCode` as a parameter and returns the sales tax for that postal code but, it is currently hard coded to return the sales tax rate for only for the state of Washington. The issue suggests that we should update this code to use a 3rd party API to calculate the sales tax for any postal code. 


![Review CalculateTax](./Images/picdark017.png?raw=true "Review CalculateTax")  

### 5. Perform internet searches using GitHub Copilot Chat

**Purpose: Stay in the flow by using GitHub Copilot Chat to perform internet searches.**

In the past, we would have needed to open another browser tab and perform a search to find a 3rd party API that we could use to calculate the sale tax for any given postal code. However, with GitHub Copilot Chat, we can stay in the flow and perform the search directly from the chat interface. 

Simply enter the following text in the prompt box.

```
Are there any 3rd party APIs that I could use to calculate the sale tax for any given postal code? 
```
![Find APIs](./Images/picdark008.png?raw=true "Find APIs")  

You can see in the results that Copilot is using the Bing search engine to find the information. You should see mulitple options for APIs to calculate the sale tax for any postal code. If you want to get even more information about one or, more of the APIs, Copilot provides a link to each of the APIs' website in the search results. In the interest of time, we will just look that the information in the search results.

### 6. Suggest updates to code using GitHub Copilot Chat

**Purpose: Use Copilot to suggest updates to code.**

We found the code that we need to update and we have found 3rd party APIs that we can use to calculate the sale tax for any postal code. Now, let's see if we can use GitHub Copilot to suggest the code changes that we need to make. First, we want to direct Copilot specifically to the code that we need to update by setting the context for the next prompt. 

1. Click on the `Paper Clip` icon. 

2. Enter `CalculateTax` in the prompt box and press `Enter`.

3. Check the box next to `DefaultShippingTaxCalculator::CalculateTax`. 

![Set Copilot Context](./Images/picdark019.png?raw=true "Set Copilot Context")  

This will set the specific context for the next prompt. Based on the internet search results, pick one of the APIs, enter the following text in the prompt box followed by the name of the API that you picked and press `Enter`. 

```
How would I update this code to use [Enter API name here]
```
First you will see a natural language explanation of the changes that need to be made. skim through the full response. You will also see a code snippet that shows the changes that need to be made to the `CalculateTax` function. Compare that to the existing code for the `CalculateTax` function. This should give you a great starting point for this enhancement.

You may also notice a warning that says something like `1 vulnerability detected`. Expand that section, it probably suggests that you should find a secure way to store the related API key. So, not only is Copilot suggesting the code changes that need to be made, it is also suggesting a way to ensure the new code is secure. Now that is really shifting security left! Copilot is helping you secure your code before you even write it!

![Suggested Edits](./Images/picdark009.png?raw=true "Suggested Edits")  

With just a few prompts, we were able to: 
1. Summarize an issue that contained our assignment
1. Find the specific code that we need to update
1. Search the internet to find 3rd party APIs
1. Get a proposal for the code changes needed to modernize our code to use 3rd party APIs
1. Get guidance on how to secure the related API key / 3rd party credentials

We did all of this in just a few minutes with virtually no context switching, we never left GitHub.com. This is how GitHub Copilot can help you stay in the flow and be more productive.

## Using GitHub Copilot Chat with GitHub Actions

### 1. Use GitHub Copilot Chat with GitHub Actions

**Purpose: Understand GitHub Actions YAML workflows and get suggestions to fix broken workflows.**

GitHub Actions is the most popular CI/CD platform on GitHub. GitHub Actions workflows are defined in YAML files that are stored in the `.github/workflows` folder of a repository. GitHub Copilot Chat can help you understand these workflows and suggest fixes when they are broken. 

Navigate to the `.github/workflows` folder of the repository and open the `Build_And_Deploy_To_Azure.yml` file. Press the `Ask Copilot about this file` button. 

![Open YAML File](./Images/picdark014.png?raw=true "Open YAML File")  

Now that we have provided specific context, i.e. a specific GitHub Actions workflow file, we can ask Copilot about the `Build_And_Deploy_To_Azure.yml` file. 

Enter the following text in the prompt box. 

```
Can you summarize what this workflow and the reusable workflows that it calls are doing? 
```
You will see that Copilot provides a summary of the `Build_And_Deploy_To_Azure.yml` file, including a summary of each stage of the build and deployment. Also, Copilot provides summaries of the reusable workflows that it calls. This is a great way to quickly understand what a GitHub Actions workflow is doing. skim through the full response.

![Summarize GH Actions](./Images/picdark010.png?raw=true "Summarize GH Actions")  

### 2. Use Copilot to understand and fix GitHub Actions errors

**Purpose: Leverage AI to troubleshoot and fix GitHub Actions errors.**

Let's see if this workflow is working. Navigate to the `Actions` tab of the repository and select the `Build_And_Deploy_To_Azure` workflow on the left hand side of the screen to see summaries of the workflow runs.

![GH Actions Runs](./Images/picdark015.png?raw=true "GH Actions Runs")  

It looks like the most recent runs have failed. Let's see if we can use GitHub Copilot to understand why the workflow is failing. 

Bring up Copilot chat and enter the following text in the prompt box.

```
Can you tell me why the Build_And_Deploy_To_Azure workflow is failing? 
```

![GH Actions Error](./Images/picdark011.png?raw=true "GH Actions Error")

It looks like authentication with Azure is failing. That is true, this is a copy of a repository that we use for customer demos and we did not configure the Azure Service Connection in this environment. We are not going to do that today. We just wanted to show you how GitHub Copilot can help you troubleshoot GitHub Actions errors.


## Using CopilotAutofix with GitHub Code Scanning

### 1. Found means fixed with Copilot Autofix

**Purpose: Explore how GitHub Code Scanning and Copilot Autofix work together to help you find and fix security issues.**

Our goal is to make Copilot ubiquitous throughout the GitHub platform. Copilot Autofix with GitHub Code Scanning is a great example of this. GitHub Code Scanning scans your code for security vulnerabilities. We have integrated Copilot Autofix with GitHub Code Scanning to help you fix the security vulnerabilities that are found. Let's see how this works. 

Navigate to the `Issues` tab of the repository and open the issue with the title: 
> **Fix code scanning alert - Missing cross-site request forgery token validation**



![Open Security Issue](./Images/picdark012.png?raw=true "Open Security Issue")  

This issue was created directly from a security vulnerability alert. We added a GIF to the comments on the issue to show how you can trigger Copilot Autofix to fix a code scanning alert. (NOTE: This was not something that each lab participant was able to do during the lab. Once it is done by one person, it cannot be undone. So, we provided this visual walk through.) You can see how you can click on the `Generate Fix` button to trigger Copilot Autofix to fix the code scanning alert.

(**NOTE: If you only have `Public` access to this repo, you will not be able to access/review the actual security alert. We had configured a private version of this workshop to allow this but, it is not feasible for the publice version. Please review the screen shot below instead**)
Go up to the main body of the issue and click on the `Missing cross-site request forgery tolken validation` link to see the full code scanning alert. 

Review the alert to get an understanding of the vulnerability. Scroll down and examine your options now that a potential fix has been generated. If you are comfortable with the fix, you can click on the button to `Commit to new branch` or, `Commit to branch`. In most cases, you'll want to commit the fix to a new branch so that you can create a pull request to review the changes before merging them into the main branch. By creating a separate Pull Request, all of the checks that have been configured as part of the GitHub Actions pull request workflow will run. This way you can leverage the separate branch and pull request to test the fix and ensure that it does not introduce any new issues before merging the vulnerability fix into the main branch.

![Copilot Autofix](./Images/picdark016.png?raw=true "Copilot Autofix")  

For more information on Copilot Autofix check out the [**Copilot Autofix documentation**](https://docs.github.com/en/enterprise-cloud@latest/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning#about-copilot-autofix-for-code-scanning) and the blog post announcing the general avialability of Copilot Autofix - [**Found means fixed: Secure code more than three times faster with Copilot Autofix**](https://github.blog/news-insights/product-news/secure-code-more-than-three-times-faster-with-copilot-autofix/).

# Copilot in the GitHub CLI

GitHub Copilot can also be used via the command line, using the GitHub CLI. The GitHub CLI is a command-line tool that makes it easy to interact with GitHub from the command line. It is available for Windows, macOS, and Linux.

To use Copilot in the CLI, you'll first need to install the [GitHub CLI](https://cli.github.com/)

On macOS, the easiest way to do this is via [Homebrew](https://brew.sh/), with the following command:

```
brew install gh
```
On Windows, the easiest way is via WinGet in the Windows Terminal with the following command:

```
winget install --id GitHub.cli
```
Full installation instructions are available at [https://github.com/cli/cli#installation](https://github.com/cli/cli#installation)

Once the CLI is installed, you'll need to login to your GitHub account with the following command:

```
gh auth login --web -h github.com
```

And you can follow the prompts to authenticate your account. 

**Pro tip:** If you're using a GitHub Codespace, first clear your auth tokens by typing ```export GITHUB_TOKEN=``` in the terminal. Then you can login with the ```gh auth login --web -h github.com``` command.

Once authenticated, install the Copilot extension with the following command:

```
gh extension install github/gh-copilot
```

This will install the extension. You can then use Copilot in the CLI with ```gh copilot explain``` and ```gh copilot suggest```.

```gh copilot explain``` will explain certain commands or how to perform a certain action, and ```gh copilot suggest``` will suggest commands for a given prompt.

Here are some examples:

```
gh copilot explain "git blame"
```
and and example of the result:
<img width="1330" alt="Screenshot 2024-10-27 at 9 59 18 AM" src="https://github.com/user-attachments/assets/472b1a82-6d9c-47b5-81a7-5e576c5e6986">



Here is an example for ```gh copilot suggest```

```
gh copilot suggest help me write a shell script to convert a gif to an mp4 playable on a Mac using ffmpeg
```
<img width="1330" alt="Screenshot 2024-10-27 at 10 02 05 AM" src="https://github.com/user-attachments/assets/4e952d44-77dd-498b-9f84-905f1919a604">


You can learn more about how to use the Copilot extension in the GitHub CLI at [https://gh.io/copilot-cli](https://gh.io/copilot-cli).

# GitHub Copilot Workspace

In Google Chrome, where you are logged into your personal GitHub account, go to this repo: https://github.com/devrellabs/Beyond-the-IDE-Instructions/ (this is the repository you are in right now)

Click on the "Issues" tab and explore some of the existing issues. 

In the Beyond the IDE Repo, you can experiment with what the calculator prompt looks like, using this issue: https://github.com/devrellabs/Beyond-the-IDE-Instructions/issues/1

If you want to explore more issues for the demo that @filmgirl showed off, you can go to this repo and look at the open issues: https://github.com/filmgirl/demo-calc/issues

![Open-Issues](https://github.com/user-attachments/assets/3d29fc26-64b7-4ef9-9024-8de768961c6f)


## Opening an Existing Issue in Copilot Workspace
![workspace-issue](https://github.com/user-attachments/assets/610535fd-32cc-4fbb-8706-b0e5ea16d786)

Once you have found an issue that you want to work on, click on the "Open in Workspace" button to open the issue in Copilot Workspace.

This will open up a Brainstorming session where you can add additional context and get suggestions of ideas about what you want to accomplish.

![copilot-workspace-default](https://github.com/user-attachments/assets/7b9c642c-76e8-4c6f-ba2b-3760efc8a20f)

When you're ready to see the code, you can choose to Generate a Plan or Generate Code (which will also generate a plan) and Copilot Workspace will create a solution for you that you can modify and explore.

You can also make revisions to the plan, which will in turn, makes changes to the generated code.

## Previewing the Code Created by Copilot Workspace in GitHub Codespaces

![open-in-codespaces](https://github.com/user-attachments/assets/d3d0817b-68aa-478b-9952-0e9ebdeaa9a3)

If you want to preview what the code created by Copilot Workspace looks like, you can do so by pressing the "Open in Codespace" button in the top right corner of the screen. This will open a branch of your project, tied to this issue, in a GitHub Codespace.

![workspace-codespaces](https://github.com/user-attachments/assets/7c9aa4d5-133a-4dc0-b4a3-b23baa5f59b5)

In GitHub Codespaces, you can see the live code and make changes as you wish. You can also use Copilot Chat to help answer questions or to write new code.

**Tip:** Install a live server extension, such as "Live Server" or "Live Preview" to easily see the app and to see changes in real time. Right click on ```index.html``` and select "Open with Live Server" or "Show Preview" to see the app.

## Creating a Pull Request

Once you're satisfied with the code that has been created, you can press the "Create a Pull Request" button to create a PR on its own branch in the repo where the issue was created.

![create-workspace-pr](https://github.com/user-attachments/assets/555c6a41-ec5f-4006-8222-0efb24506b63)

You can use the "Generate Description" button to create an AI-generated PR description, or you can write your own.

You can also choose if you want this PR, if merged, to close the issue it is associated with.

You can also choose to create a draft pull request, push to the current branch, or push to a new branch.

## Previewing PRs Created by Copilot Workspace

You can look at a pull request that was genereatd by Copilot Workspace by clicking on the "Pull Requests" tab and going to an open PR. In the Beyond the IDE repo, that PR is here: https://github.com/devrellabs/Beyond-the-IDE-Instructions/pull/2.  

![view-pr-in-workspace](https://github.com/user-attachments/assets/0af68dc9-cccc-4a35-ada9-017f28d4fd8f)

This will open up the Copilot Workspace session and show its generated code changes.

![copilot-workspace githubnext com_filmgirl_demo-calc_issues_3_shareId=1bc75639-3b35-410d-9da9-30ac01827204](https://github.com/user-attachments/assets/08704854-fb99-439f-a9e8-8681d50b534f)

You can then open this code in a Codespace, VS Code, and make revisions. You can then push those changes to a new branch, create a new PR, or update the existing PR.

## Create Your Own Issues

You can also create your own issues for this project to add functionality or make changes to the project. 

If you want to use a more established project, check-out the https://github.com/filmgirl/demo-calc/ repo, which has some starter issues already.

You can also experiment in your own repositories on your own account.

Click on the "Create New Issue" button in the issues tab and name your issue anything you want. Offer a description of what change you'd like to make. 

![github com_filmgirl_demo-calc_issues_new_template=Blank+issue](https://github.com/user-attachments/assets/1e0b3d46-b009-48ff-8b7d-3ef445654932)

After creating the issue, click on the "Open in Workspace" button to open the issue in Copilot Workspace.

## More Copilot Workspace Resources

To learn more about GitHub Copilot Workspace, visit the user manual:

https://github.com/githubnext/copilot-workspace-user-manual?tab=readme-ov-file#-copilot-workspace-user-manual


# GitHub Copilot Extensions 

**Purpose: Gain hands-on experience with GitHub Copilot Extensions**

GitHub Copilot Extensions allow developers to integrate their favorite development tools directly into the Copilot experience. This means that AI can now not only suggest code but also interact with external databases, testing frameworks, planning and tracking tools, deployment tools, and more – **all without requiring developers to leave their flow in GitHub.com**.

**NOTE**: We are not able to provide a **hands-on** experience with GitHub Copilot Extensions such as **Docker** and **Mermaid-Chart** using the user accounts that were provisioned for this workshop. These user accounts are managed by GitHub and are not able to authenticate with **Docker** and **Mermaid-Chart** which is a requirement to use these extensions. However, we have a public copy of this repository that you can use to try out these extensions with **YOUR** GitHub account. Read through the instructcions below and review the screenshots to get a feel for how these extensions enable you to stay in the flow and be more productive.

Once **YOUR** GitHub account has access to GitHub Copilot Extensions you can walk through the following steps by going to https://gh.io/Copilot-Sandbox-24-Public and using GitHub Copilot Chat from the PartsUnlimited repository in the **DevRelLabs** GitHub organization. 

To get started go to https://gh.io/Copilot-Sandbox-24-Public, open the **PartsUnlimited** repository as noted in the **Before you begin** section of **Workshop.md**. Jump to the **GitHub Copilot Extensions** section of the document and follow these instructions. 

Previously in the **Using GitHub Copilot Chat with GitHub Actions** section, we used GitHub Copilot Chat to ask about this repo's GitHub Actions workflows. Now, we will use the **Docker** Extension to proivde a starting point for moderninzing our app to use containers and Kubernetes but the instructions and other information will come from Docker. 

Bring up Copilot chat and enter the following text in the prompt box.

```
@docker Show me a GitHub Actions workflow for this application that builds the application, containerizes it, uses Azure Container Registry to store the containers and deploys the containers using Azure Kubernetes Services. Note: I want to have Dev, QA and Production environments in Azure's West US2 region.
```

Docker provides a natural language explanation of the workflow and a code snippet that shows the GitHub Actions YAML needed to fulfill our request. One of the great things about this is that we did not have to go to the documentation for Docker or the GitHub marketplace to find what actions we should use for Docker, Azure Container Registry (ACR) and Azure Kubernetes Services (AKS). Docker provided all of that information directly in the chat interface. Skim through the full response.

![Summary](./Images/picdark101.png?raw=true "Summary")  

Most likely, your response mentions credentials and secrets needed to interact with ACR & AKS. However, one of the most secure ways to work with Azure (and other cloud services) is to leverage OpenID Connect (OIDC). Let's see if we can ask Docker to refine the workflow using OIDC instead of credentials and secrets.

Enter the following text in the prompt box.

```
@docker This is a good start but, how would I use Azure OpenID Connect for authentication instead of username and password? 
```

Docker is able to proivde a revised version of the workflow that uses OIDC tokens instead of credentials and secrets. Skim through the full response to review the differences between the original workflow and the revised workflow.

![Summary](./Images/picdark102.png?raw=true "Summary")  

Next we want to use the **Mermaid-Chart** extension to create a diagram that shows the relationships between the various environments in the PartsUnlimited application. Currently, GitHub Copilot Chat in GitHub.com does not allow communication with multiple extensions in the same chat thread. So, we will need to start a new chat thread to interact with the **Mermaid-Chart** extension.

Enter the following text in the prompt box to start a new thread.

```
/clear
```

To set the context for **Mermaid-Chart**, start by entering the following text in the prompt box.

```
What applications are in this repo? 
```

Copilot should respond with a list of applications in the PartsUnlimited repo, including the **PartsUnlimited eCommerce Website** 

![Summary](./Images/picdark103.png?raw=true "Summary")  

To provide even more context, we want Copilot to give us a breakdown of the components of the **PartsUnlimited eCommerce Website**. Enter the following text in the prompt box.

```
What are the main components of the Parts Unlimited eCommerce Website? 
```

Great! Now we have enough context for **Mermaid-Chart** to create a diagram that shows the relationships between the various components of the PartsUnlimited application. 

![Summary](./Images/picdark104.png?raw=true "Summary")  

Now enter the following text in the prompt box.

```
@mermaid-chart Can you provide a chart showing the relationship of the components that make up this application? 
```

**Mermaid-Chart** should respond with a natural language explanation and code for a chart that shows the relationships between the various components of the PartsUnlimited application. To see and edit the chart, you should see a link in the response that says something like:
`You can edit and view this diagram in the **Mermaid Chart Playground**.`

![Summary](./Images/picdark105.png?raw=true "Summary")  

Follow the link to see the chart.

![Summary](./Images/picdark106.png?raw=true "Summary")  


In this section of the workshop we used the **Docker** and **Mermaid-Chart** extensions to get a starting point for modernizing our app to use containers and Kubernetes and to create a diagram that shows the relationships between the various components of the PartsUnlimited application. We did all of this in just a few minutes with virtually no context switching, we only left GitHub.com to see the diagram. This is how GitHub Copilot Extensions can help you stay in the flow and be more productive.


<!--
### 00. Header

**Purpose: Summarize the purpose of this exercise**

Blah, blah, blah.

```
Prompt text
```
![Summary](./Images/picdark004.png?raw=true "Summary")  

Explanation: Review the response and blah, blah, blah.
-->


# Wrap up and additional reading

**Stay in the flow with GitHub Copilot!**

As you have seen in this workshop, you can use GitHub Copilot to stay in the flow and be more productive even beyond the IDE. You can use GitHub Copilot to ask questions about a repository, find and summarize issues, find related code in the repository, perform internet searches, suggest updates to code, understand GitHub Actions workflows, fix GitHub Actions errors, address security issues with Copilot Autofix and more!

### Check out these resources to dive in and learn more

**Pro Tip**: Take a picture of these resources so that you can check them out later. 

If you have completed all the exercises, and there is still time left in today's session you can check out these resources:

**GitHub Copilot Chat documentation**: Learn more about how to use GitHub Copilot Chat in GitHub.com.
+ https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom

**GitHub Copilot Autofix documentation**: Learn more about how to use GitHub Copilot Autofix with GitHub Code Scanning.
+ https://docs.github.com/en/enterprise-cloud@latest/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning#about-copilot-autofix-for-code-scanning

**Found means fixed: Secure code more than three times faster with Copilot Autofix**: Learn more about how to use GitHub Copilot Autofix with GitHub Code Scanning.
+ https://github.blog/news-insights/product-news/secure-code-more-than-three-times-faster-with-copilot-autofix/

**Enhancing the GitHub Copilot ecosystem with Copilot Extensions, now in public beta**: Copilot Extensions allow developers to integrate their favorite development tools directly into the Copilot experience. This means that AI can now not only suggest code but also interact with external databases, testing frameworks, planning and tracking tools, deployment tools, and more–all without requiring developers to leave their flow. 
+ https://github.blog/news-insights/product-news/enhancing-the-github-copilot-ecosystem-with-copilot-extensions-now-in-public-beta/

**GitHub Copilot Extensions documentation**: Learn more about how to use GitHub Copilot Extensions in github.com.
+ https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/using-github-copilot-extensions

**Check out available GitHub Copilot Extensions in the GitHub Marketplace**
+ https://github.com/marketplace?type=apps&copilot_app=true


