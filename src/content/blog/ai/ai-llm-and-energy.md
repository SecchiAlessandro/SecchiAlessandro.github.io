---
title: AI, LLM and Energy
description: A hands-on journey through foundation models, local LLMs, agent frameworks and what they mean for the energy world.
pubDate: 2024-07-01
dateDisplay: July 2024
topic: ai
---

A few months ago, I wanted to start some AI projects to better understand its potential and see if it could really assist me.

1\) Regarding foundation models (LLMs), nearly every week, there was an announcement about new, more powerful models from different companies. Sorting them out was quite straightforward:

📖 Open-source models (>70B parameters):

Llama (Meta) vs. Grok (xAI from Elon) vs. Mistral AI (largest European LLM) vs. Falcon (Abu Dhabi TII)

🔐 Private models (>70B parameters):

GPT (OpenAI/Microsoft) vs. Gemini (Google) vs. paLM (Google) vs. Claude (Anthropic) vs. Olympus (Amazon) vs. Ernie (Baidu, Inc. - China).

2\) Then I started to look into open-source models that allow me to customize my application and maybe run it on my local machine.

💻 So, I began exploring LLMs that can run locally, using tools like: LMStudio vs. Ollama vs. GPT4All.

Of course, my laptop can only handle LLMs with &lt;7B parameters, but for initial experiments, I thought this would be more than enough.

3\) The next step was to look for basic LLM frameworks and repositories from this new AI world:

⛓ From Langchain and LlamaIndex (for Python and JavaScript) to Relevance AI and Make.com (for low-code solutions).

As a good starting point, I decided to explore some pre-built open-source projects and here, I was astonished by the thousands of open-source projects publicly shared every day on GitHub and Hugging Face (the GitHub for LLMs).

4\) Among them, I tried:

AutoGPT (linked with OpenAI) vs. HuggingGPT (integrated with models from Hugging Face) vs. AutoGen (a multi-agent project that supports function calling to extend the capabilities of the model by generating documents, sending emails, etc.).

Testing these projects was inspiring, but I must be honest. They are still prototypes with bugs that require new daily releases.

Naturally, their closed-source counterparts are more reliable: Azure AI Studio (a Microsoft integrated environment to develop AI agents) vs. Microsoft 365 Copilot (quite useful with Excel and Outlook) vs. OpenAI GPTs (arguably the most utilized AI playground).

It's also worth mentioning AI Image and Video Generation models (DALL-E 3, Midjourney, Stable Diffusion, Sora, Runway). See the breakthrough experiment from Reid Hoffman.

5\) Finally, I opted for an AI open-source IDE that allowed me to develop and connect objects (nodes and graphs). Tools like Flowwise, Langlow, but especially Rivet, are great for visualizing and building complex chains and create production-ready applications.

**Some final reflections from this AI journey:**

🟢 As of today, I don't see disruptive ideas from these AI models that could significantly change my daily life or a traditional company's business.

However, there is a remarkable boost in R&D and academic activities, and a huge benefit for developers who can use AI copilots to build their software or create simple websites (https://secchialessandro.github.io/). For a company business, it would be interesting to explore solutions such as Azure AI Studio with some open source LLMs models.

🟢 We are moving towards highly specialized small agents in a multi-agent and multimodal frameworks. The new GPT-4o just leaves space to the imagination 🤯.

🟢 It is worth to mention the so called large action model "LAM" (see Rabbit r1). Check out the new open source project from Microsoft "Visualization-of-Thought (VoT) Elicits Spatial Reasoning in Large Language Models".

🟢 If you aim to use open-source LLMs, maintain the privacy of your data, and run useful applications, you could do so from your own laptop (with limited complexity) or from an internal server if you're a business.

🌟 I am convinced that we are getting closer and closer and I will spend some time to seek for opportunities between this new AI world and my passion in Energy.

Some friends have already introduced new methods to operate in the electricity market. For instance, Matteo Pisani developed a model to regulate the voltage from a load tap changer using reinforcement learning algorithms (reducing unnecessary tap movements, thus maintenance costs of the device).

*"Toward singularity, through the energy transition."*

![STATCOM](../../../assets/img/STATCOM.jpg)
