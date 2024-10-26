# Hands-on Workshop
## Beyond the IDE: Unlocking the full power of GitHub Copilot
Revision 1.0 2024-10-25

**Versions of dialogs, buttons, etc. shown in screenshots may differ from current version of Copilot**


## Introduction
GitHub Copilot isn’t just for your favorite code editor—it offers a range of capabilities that extend far beyond. In this workshop, Christina Warren, Senior Developer Advocate at GitHub, and Dave Burnison, Senior DevOps Advocate at GitHub, will walk you through how to leverage GitHub Copilot across various tools, how to address security issues with Copilot Autofix and work with GitHub Actions workflows. Discover how to utilize GitHub Copilot Chat in GitHub.com, how to get the benefits of Copilot in your terminal, and how to use GitHub Copilot Workspace to streamline your process from ideation to deployment. They’ll also showcase extending Copilot via GitHub Copilot Extensions that are available in the marketplace or created custom to your organization.

**Presenters:**

- **Dave Burnison** [@daveburnisonms](https://github.com/daveburnisonms), Senior DevOps Advocate, GitHub
- **Christina Warren** [@filmgirl](https://github.com/filmgirl), Senior Developer Advocate, GitHub

## Before you begin

### 1. Configure your desktop to make Workshop.md always visible

Before we begin, we will configure the browser windows to make the Workshop.md file always visible. This will allow you to easily switch between the lab instructions and any editor windows you have open.

![Split View](./Images/gifdark001.gif?raw=true "Split View")

Here are the suggested steps to configure your desktop to make Workshop.md always visible.

1. Open https://github.com/devrellabs/Beyond-the-IDE-Instructions/blob/main/Workshop.md in a broswer.

2. Open https://github.com/devrellabs/PartsUnlimited **in a separate browser tab**. If you are on Windows, drag the tab to the right side of the screen until it snaps to the right side of the screen. Select the above tab when prompted to select the tab to snap to the left side of the screen. The idea is that we want to have the Workshop.md file on the left side of the screen and a GitHub repo on the right side of the screen.

3. Move the vertical slider until you can comfortably see the instructions in Workshop.md and the GitHub repo side by side. 

4. If needed, adjust the zoom level so that you can comfortably read the instructions in Workshop.md and work with the GitHub repo side by side. 

This is just a suggestion, arrange the windows, set the zoom level, etc. in a way that works best for you.

Now we can see the `Workshop.md` file to one side of the screen while we are executing the actions in GitHub Copilot Chat in GitHub.com on the other side of the screen. 

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

This issue was created directly from a security vulnerability alert. We added a GIF to the comments on the issue to show how you can trigger Copilot Autofix to fix a code scanning alert. (NOTE: This was not something that each lab participant was able to do during the lab. Once it is done by one person, it cannot be undone. So, we provided this visual walk through.) You can see how you can click on the `Generate Fix` button to trigger Copilot Autofix to fix the code scanning alert. Go up to the main body of the issue and click on the `Missing cross-site request forgery tolken validation` link to see the full code scanning alert. 

Review the alert to get an understanding of the vulnerability. Scroll down and examine your options now that a potential fix has been generated. If you are comfortable with the fix, you can click on the button to `Commit to new branch` or, `Commit to branch`. In most cases, you'll want to commit the fix to a new branch so that you can create a pull request to review the changes before merging them into the main branch. By creating a separate Pull Request, all of the checks that have been configured as part of the GitHub Actions pull request workflow will run. This way you can leverage the separate branch and pull request to test the fix and ensure that it does not introduce any new issues before merging the vulnerability fix into the main branch.

![Copilot Autofix](./Images/picdark016.png?raw=true "Copilot Autofix")  

For more information on Copilot Autofix check out the [**Copilot Autofix documentation**](https://docs.github.com/en/enterprise-cloud@latest/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning#about-copilot-autofix-for-code-scanning) and the blog post announcing the general avialability of Copilot Autofix - [**Found means fixed: Secure code more than three times faster with Copilot Autofix**](https://github.blog/news-insights/product-news/secure-code-more-than-three-times-faster-with-copilot-autofix/).

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

## GitHub Copilot is purpose built for software development

### 1. GitHub Copilot is only for programming

While we can use GitHub Copilot Chat to get answers to programming questions, we cannot use GitHub Copilot Chat to ask general questions. For example, you cannot ask about the weather or the latest sports scores. Enter the question below in the chat interface.

```
Who won the Super Bowl in 1986?
```
![GitHub Copilot is only for programming](./Images/picdark002.png?raw=true "GitHub Copilot is only for programming")

That's ok. Everyone knows that [the Chicago Bears won Super Bowl XX in 1986](https://www.chicagotribune.com/2016/01/26/chicago-bears-win-super-bowl-xx/). 😉

![Chicago Bears win Super Bowl XX](https://www.chicagotribune.com/wp-content/uploads/migration/2016/01/26/QP6TV57DS5ABJDLYCFXR6BGJEM.jpg?w=1200 "Chicago Bears win Super Bowl XX")

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


