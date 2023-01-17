<template>
  <h2>About Me</h2>

  <vue-faq question="Who are you?">
    <p>
      My name is George Tiersma. Living in Oregon, I perform remote work on specialty
      photo-management software at <a href="https://digitalfusion.net">DigitalFusion</a>, located
      in Las Angeles. The software I work on is known as
      <a href="https://www.dfstudio.com">DF Studio</a>.
    </p>
    <p>
      Being a fullstack engineer at my job, I work on the user interface, the database and
      everything inbetween on a regular basis.
    </p>
    <p>
      Most of the work I have done so far involves the creation of backend tools, many of which
      have been of great use to the other developers, as well as the technical support team.
    </p>
    <p>
      I have also spent quite a bit of time upgrading and cleaning old, messy code to modern
      standards.
    </p>
  </vue-faq>
  <vue-faq question="How do you approach software engineering?">
    <p>
      I am still a junior, so my experience is limited, but here is what I do to the best of my
      knowledge:
    </p>
    <br/>
    <p>
      When creating new software or features, I will generally plan for three considerations:
    </p>
    <ul>
      <li>
        Externally, how should the end user provide the necessary input (if any)?
      </li>
      <li>
        Internally, what actions should be performed with the recieved input to generate the
        correct output?
      </li>
      <li>
        Externally, how should the output be provided to the end user?
      </li>
    </ul>
    <p>
      After I have these questions answered (either answered by myself, others or both), I begin to
      plan for how the data should flow through the stack. Once I have a general plan of how I should
      progress, then I begin programming the most basic functionality.
    </p>
    <br/>
    <p>
      When working with finer details (such as bug fixes and small improvements), the focus is on
      keeping the changes I made legible. However, there may be cases where I will sacrifice
      readability for stability or performance.
    </p>
    <p>
      For example, generally I always will prefer to use a <code>forEach()</code> extension function
      in languages where it is available to keep the code minimal and readable. However, if I am
      working in a location where performance may be a concern (such as within multiple nested loops),
      I may prefer to use a basic <code>for</code> loop to have better control over limiting the
      number of iterations that may occur. If the resulting code block is even slightly difficult to
      understand, I will add an inline, descriptive comment to better communicate its purpose.
    </p>
  </vue-faq>
  <vue-faq question="What makes you different?">
    <ul>
      <li>
        I feel I prioritize clean and understandable code more than most developers. I focus greatly
        on the following:
        <ul>
          <li>
            Naming variables & methods in a way that most developers would be able to understand
          </li>
          <li>
            Commenting if a code block looks as if it would take any ordinary developer time to
            understand
          </li>
          <li>
            Written communication. I have been complimented on this on multiple occasions.
          </li>
        </ul>
      </li>
      <li>
        I am unusually cooperative. I have dealt with teammates that are frustrated. I approach the
        situation calmly and with professionalism. I do what I can to keep the team together (even
        if it involves that I volunteer for unfair treatment), because I believe a broken team can
        have a devistating impact.
      </li>
      <li>
        Instead of just mindlessly building what I am told, I always put myself in the shoes of the
        end user. I ask myself, "What would I want to see and do if I were to personally use this?"
        I let the answer to that question guide my progression.
      </li>
    </ul>
  </vue-faq>
  <vue-faq question="What drives your passion for software?">
    <p>
      It is the idea that I am working on a part of something that will be used to help thousands of
      other people. This keeps me serious about my work and focused on delivering a quality product.
    </p>
    <p>
      Also, I have always found enjoyment in orderly mathematics and solving technical problems (so
      much so that I occasionally spend time outside of work to design my own software - such as this
      website you are viewing).
    </p>
  </vue-faq>
  <vue-faq question="What would you say makes for quality code?">
    <p>
      I am still a junior, so my experience is limited, so here is how I would answer this question
      to the best of my knowledge:
    </p>
    <ul>
      <li>
        Most of all, it needs to actually work.
      </li>
      <li>
        Second most of all, it needs to be fully understandable. Not only for other developers, but
        also for when the developer who programmed it has to revisit the code weeks later.
      </li>
      <li>
        Third most of all, it should not be a resource hog. Nested loops can be deadly. It can be
        good to limit the number of iterations however possible in those cases.
      </li>
    </ul>
  </vue-faq>
  <!-- Disabled because I don't think this is a good question for a public-facing website
  <vue-faq question="What makes your job great?">
    <p>
      The ability to work remotely from home, having team that is helpful, and an overall friendly
      atmosphere are all things I can appreciate from work, but what makes work really great is the
      fact that it is (for the most part) deadline-less. I appreciate this not so that I can slack off,
      but so that I can always have time to update old code to modern standards, clean up poorly
      written code and not have to worry about a deadline if unexpected tough bugs get in the way. 
    </p>
  </vue-faq>
  -->
  <vue-faq question="What software design concepts are you familiar with?">
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
          Test-Driven Development (TDP)
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
          Object-Oriented Programming (OOP)
        </a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Functional_programming">
          Functional Programming (Including Purely Functional Programming)
        </a>
      </li>
    </ul>
  </vue-faq>
  <vue-faq question="What are your favorite programming languages & tools?">
    <ul>
      <li>
        <b>Kotlin</b> is currently my favorite language because of how easy it can make for clean
        code. This is mostly thanks to the many extension functions it includes. I also like how I
        can easily create my own extension functions.
      </li>
      <li>
        <b>Vue</b> is great. Having a component-based library such as Vue is so much more convenient
        than trying to use only HTML, CSS and JS with jQuery.
      </li>
      <li>
        When it comes to using transitions and animations in the browser, it is hard to beat
        Greensock's <b>Gsap</b>.
      </li>
      <li>
        JetBrain's <b>IntelliJ</b> is the best IDE I have used to date. It can have an occasional
        odd bug, but some of the features it has can save a lot of time.
      </li>
      <li>
        As for lightweight IDEs, VSCode is an excellent tool. For such a simple program, it can do so
        much.
      </li>
    </ul>
  </vue-faq>
  <vue-faq question="What else can I do?">
    <p>
      As I work a full-stack job, I am also familiar with the basics of UI/UX design as well as
      database design. I have created plenty of different SQL statements in the past to query or
      safely update complicated sets of data.
    </p>
    <p>
      Outside of work, Photoshop is a past-time I really enjoy when I am not programming. I have
      over time learned how to composite images together to make virtually anything look like
      reality. I also like to hand-draw pictures and add color, texture, light and other details to
      them through image-editing software.
    </p>
  </vue-faq>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  import VueFaq from './VueFaq.vue'
  
  export default defineComponent({})
</script>
  
<style scoped>
  
</style>