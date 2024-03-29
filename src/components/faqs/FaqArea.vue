<template>
  <divided-section :page-width="props.pageWidth">
    <div class="fnt-text">
      <h2 class="fnt-main">About Me</h2>

      <vue-br/>

      <vue-faq question="Who are you?" :id="1">
        <p>
          My name is George Tiersma. Living in Oregon, I work remotely with specialty
          photo-management software at <a href="https://digitalfusion.net">DigitalFusion</a>, located
          in Los Angeles. The software I work on is known as
          <a href="https://www.dfstudio.com">DF Studio</a>.
        </p>
        <p>
          The architecture I build is something I take pride in. By fixing, modernizing,
          and rebuilding numerous different portions of the customer-facing product,
          internal tools, and scalable and reusable utilities, I always do my best to produce clean,
          quality code.
        </p>
        <p>
          Outside of work, I enjoy building and contributing to open-source software tools once in a
          while as well.
        </p>
      </vue-faq>
      <vue-faq question="How do you approach software engineering?" :id="2">
        <p>
          When creating new software or features, I will generally plan for three considerations:
        </p>
        <ul>
          <li>
            Externally, how should the end user provide the necessary input (if any)?
          </li>
          <li>
            Internally, what actions should be performed with the received input to generate the
            correct output?
          </li>
          <li>
            Externally, how should the output be provided to the end user?
          </li>
        </ul>
        <p>
          After I reach a conclusion with these questions, I begin to plan for how the data should flow
          through the stack. Once I have a general plan of how to progress, I then begin programming the
          most basic functionality, and continue progressing from there.
        </p>
        <vue-br/>
        <p>
          When working with finer details (such as bug fixes and small improvements), the focus is on
          keeping the changes I made legible (or documented). However, there may be rare cases where I
          will sacrifice readability for stability or performance.
        </p>
        <p>
          For example, generally, I always will prefer to use a <code>forEach()</code> extension
          function in languages where it is available to keep the code minimal and readable. However,
          if I am working in a location where performance may be a concern (such as within multiple
          nested loops), I may prefer to use a basic <code>for</code> loop to have better control over
          limiting the number of iterations that may occur.
        </p>
        <p>
          But if the resulting code block is even slightly difficult to understand, I will add an inline,
          descriptive comment to better communicate its purpose.
        </p>
      </vue-faq>
      <vue-faq question="What makes you different?" :id="3">
        <ul>
          <li>
            I prioritize clean and understandable code more than most developers. I focus greatly on the
            following:
            <ul class="sub-ul">
              <li>
                Naming variables & methods in a way that most developers would be able to understand
              </li>
              <li>
                Adding comments in portions of code that may not be easily understood
              </li>
              <li>
                Written communication. I have been complimented on this on multiple occasions.
              </li>
            </ul>
          </li>
          <li>
            I am incredibly cooperative. I have dealt with frustrated teammates by approaching the
            situation calmly and with professionalism. I do what I can to keep the group together
            (even if it involves that I volunteer for unfair treatment), because a broken team can
            have a devastating impact.
          </li>
          <li>
            Instead of just mindlessly building what I am told, I always put myself in the end user's
            shoes. I ask myself, "What would I want to see and do if I were to personally use
            this?". I let the answer to that question guide my progression.
          </li>
        </ul>
      </vue-faq>
      <vue-faq question="What drives your passion for software?" :id="4">
        <p>
          It is the idea that I am working on a part of something that will be used to help thousands
          of others. This idea keeps me serious about my work and focused on delivering a quality
          product.
        </p>
        <p>
          Also, I have always found enjoyment in orderly mathematics and solving technical problems
          (so much so that I occasionally spend time outside of work to design my own software - such
          as this website you are viewing).
        </p>
      </vue-faq>
      <vue-faq question="What would you say makes for quality code?" :id="5">
        <p>
          Based on my knowledge and experience, I consider the following factors to be of much importance:
        </p>
        <ul>
          <li>
            First of all, it needs to actually work. It should perform what it is intended to do, and
            it should do it well.
          </li>
          <li>
            Secondly, it needs to be fully understandable. Not only for other developers,
            but also for when the one who programmed it revisits it in the future.
          </li>
          <li>
            Thirdly, it should not be a resource hog. Nested loops can be deadly. It can be
            good to limit the number of iterations however possible in those cases. Also considering
            the amount of data that may be involved is important as well. Software can work well with
            a small amount of data, but what if the user expects it to support thousands of instances?
          </li>
        </ul>
      </vue-faq>
    <!-- Disabled because I don't think this is a good question for a public-facing website
    <vue-faq question="What makes your job great?" :id="6">
      <p>
        The ability to work remotely from home, having team that is helpful, and an overall friendly
        atmosphere are all things I can appreciate from work, but what makes work really great is
        the fact that it is (for the most part) deadline-less. I appreciate this not so that I can
        slack off, but so that I can always have time to update old code to modern standards, clean
        up poorly written code and not have to worry about a deadline if unexpected tough bugs get
        in the way. 
      </p>
    </vue-faq>
    -->
      <vue-faq question="What software design concepts are you familiar with?" :id="7">
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Domain-driven_design">
              Domain Driven Design (DDD)
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">
              Model-View-Controller (MVC)
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Test-driven_development">
              Test-Driven Development (TDD)
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
              Object-Oriented Programming (OOP)
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Functional_programming">
              Functional Programming
            </a>
          </li>
          <li>Several Basic Design Patterns</li>
        </ul>
      </vue-faq>
      <vue-faq question="What are your favorite programming languages & tools?" :id="8">
        <ul>
          <li>
            <b>Kotlin</b> is currently my favorite language because of how easy it can make for clean
            code. This is primarily thanks to the many extension functions it includes. I also like how I
            can easily create extension functions.
          </li>
          <li>
            <b>Vue</b> is great. Having a component-based library such as Vue is so much more
            convenient than trying to use only HTML, CSS and JS with jQuery.
          </li>
          <li>
            When it comes to using transitions and animations in the browser, it is hard to beat
            Greensock's <b>Gsap</b>.
          </li>
          <li>
            JetBrain's <b>IntelliJ</b> is the best IDE I have used to date. It can have an occasional
            odd bug, but some of its features can save a lot of time.
          </li>
          <li>
            As for lightweight IDEs, <b>VSCode</b> is an excellent tool. For such a simple program, it can
            do so much.
          </li>
        </ul>
      </vue-faq>
      <vue-faq question="What else can I do?" :id="9">
        <p>
          As I work a full-stack job, I am also familiar with the basics of UI/UX design as well as
          database design. I have created plenty of different SQL statements to query or safely update
          complicated data.
        </p>
        <p>
          Outside of work, Photoshop is a past-time I really enjoy when I am not programming. Over time, 
          I have learned how to composite images to make virtually anything look real. I also like to
          hand-draw pictures, scan them to my PC, and add color, texture, light and other details to them
          through image-editing software.
        </p>
      </vue-faq>
    </div>
  </divided-section>
</template>
  
<script setup lang="ts">
  import { SizeWatcher } from '@/common/SizeWatcher';
  import VueFaq from './VueFaq.vue'

  const props = defineProps({
    pageWidth: SizeWatcher
  })
</script>
  
<style scoped>
  p {
    margin: 5px 20px;
  }

  ul {
    padding: 10px 100px 10px 150px;
  }

  .sub-ul {
    padding: 10px;
  }

  @media (max-width: 992px) {
    p, ul {
      font-size: 10pt;
    }

    p {
      margin: 0;
      padding: 5px 10px;
    }

    ul {
      padding: 10px 10px 10px 30px;
    }

    ul li ul {
      padding: 10px 10px 10px 20px;
    }
  }
</style>
