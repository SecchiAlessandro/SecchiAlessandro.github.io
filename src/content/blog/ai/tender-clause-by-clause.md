---
title: Role-based reasoning to Find the Right Company and Generate Clause-by-Clause Reports for Tenders 🗂️
description: Using Gemini's long context window to match tender requirements with the right company — a Kaggle competition entry.
pubDate: 2024-11-27
dateDisplay: November 2024
topic: ai
---

Gemini 1.5 introduced a major breakthrough in AI with its notably large context window. It can process up to 2 million tokens at once vs. the typical 32,000 - 128,000 tokens. This is equivalent to being able to remember roughly 100,000 lines of code, 10 years of text messages, or 16 average English novels 🤯.

With large context windows, methods like vector databases and RAG (that were built to overcome short context windows) become less important, and more direct methods such as in-context retrieval become viable instead. Likewise, methods like many-shot prompting, where models are provided with hundreds or thousands of examples of a task as either a replacement or a supplement for fine-tuning, also become possible.

**That's why I've decided to partecipate with a friend to the "Google - Gemini long context" competition by building a public Kaggle Notebook and YouTube Videos that demonstrate a creative and usefull use case.**

We decided to use the long context window to find the best company that fit your techcnical and commercial tender requirements 📚.

- A **tender** is a formal process, where organizations or companies invite suppliers, contractors, or service providers to submit proposals or bids to deliver a specified project, product, or service.
- A **clause-by-clause** is a detailed examination of this tender, that highlights the compliant and not-compliant requirements with respect to the company offer.

As this process is carried out in most of the companies and it is quite time-consuming, we believe that the Gemini's long context window introduces a novelty in this business process:

- It analyzes long technical and commercial tenders for a project.
- It assesses the compatibility of companies' products and services with tender documents.
- It *finds the best company and product-service combination to execute your project*, generating a clause-by-clause report with compliant and non-compliant specifications.

## Notebook Structure 📓

The notebook is available in Kaggle: [The Perfect Match for Your Tech and Business Needs](https://www.kaggle.com/code/gabripo93/the-perfect-match-for-your-tech-and-business-needs) and it is divided into different sections, each with a specific objective:

- Dataset load
- Tenders for a project are parsed, converting their information into text.
- Information scraped from various companies' websites is loaded as text.
- All text is processed by Gemini using different prompts, combining role-based reasoning, chain of thoughts, Gemini API context caching feature, and in-chat memory.

***The long context window acts as a shared workspace, recording and making all user prompt outputs accessible for seamless and holistic reasoning. In today's interconnected world, where partnerships and synergies are essential to addressing complex challenges, I think we need to create a tool that enables continuous reasoning, uncovers new patterns and solutions, and minimizes the fragmentation of insights.💡***
