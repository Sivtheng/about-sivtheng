<script>
  // Here you could add any JavaScript needed for the Stuff page, if applicable
</script>

<div class="container mx-auto p-8 bg-[#31363F] text-[#EEEEEE] text-left mb-16">
  <h1 class="text-4xl mb-4 text-accent">personal projects</h1>
  <p class="mb-4">some stuff i did in my free time/work when i have nothing better to do. click on the link to view on github</p>
  <ul class="list-disc pl-5">
    <li class="mb-4">
      <a href="https://github.com/Sivtheng/about-sivtheng" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">this site</a>
      <div class="nested-info">> built with <span style="color: #f73c00;">svelte</span> and <span style="color: #36b7f0;">tailwindcss</span>.</div>
      <div class="nested-info">> deployed on vercel (free version).</div>
    </li>
    <li class="mb-4">
      <div>pawg-adoption-center</div>
      <div class="nested-info">> webapp for pet adoption site called "pawg-adoption-center"</div>
      <div class="nested-info">> <span><a href="https://github.com/Sivtheng/pawg-frontend" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">Frontend</a></span> with <span style="color: #75D5D0;">Nextjs</span>and <span style="color: #36b7f0;">tailwindcss</span>.</div>
      <div class="nested-info">> <span><a href="https://github.com/Sivtheng/pawg-dashboard" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">Dashboard</a></span> with <span style="color: #3D79A9;">Django</span> and <span style="color: #7210F5;">bootstraps</span>.</div>
      <div class="nested-info">> <span><a href="https://github.com/Sivtheng/pawg-backend" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">Backend</a></span> with <span style="color: #76ABAE;">Golang</span> and <span style="color: #31648D;">Postgresql</span>. </div>
    </li>
    <li class="mb-4">
      <a href="https://github.com/Sivtheng/expense-tracker-maxy" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">expense-tracker</a>
      <div class="nested-info">> built with <span style="color: #C60000;">ruby-on-rails</span> and <span style="color: #127BC4;">sqlite3</span>.</div>
      <div class="nested-info">> no money to host but you can run it locally by following the readme.</div>
    </li>
    <li class="mb-4">
      <a href="https://github.com/Sivtheng/distributed-system-caching" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">redis-caching for distributed-system-class</a>
      <div class="nested-info">> basic <span style="color: #F82C1E;">laravel</span> crud and <span style="color: #76ABAE;">golang</span> api that showcase caching with <span style="color: #D6362A;">redis</span>.</div>
      <div class="nested-info">> can't test, i forgot the commands.</div>
    </li>
    <li class="mb-4">
      <a href="https://github.com/Sivtheng/alexandria-bookbuying-subsystem" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">bookbuying-subsystem for enterprise-application-development-class</a>
      <div class="nested-info">> built with <span style="color: #F82C1E;">laravel</span></div>
      <div class="nested-info">> can't test, it requires api from <span style="color: #76ABAE;">golang</span> server which is not live anymore.</div>
    </li>
    <li class="mb-4">
      <a href="https://github.com/Sivtheng/resume-parser" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">resume-parser model for ai-class</a>
      <div class="nested-info">> a model that can predict the job category the resume belongs to with an accuracy evaluation of around 0.60 (lmao, it is abit better than just guessing)</div>
      <div class="nested-info">> made this in 2 days to pass the class lol</div>
    </li>
  </ul>
</div>

<style>
  .container {
    max-width: 800px; /* Adjust as needed */
  }
  .nested-info {
    margin-left: 1.5rem;
    color: #CCCCCC; /* Subdued color for nested information */
  }
</style>
