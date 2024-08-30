<script>
  const birthDate = new Date("2002-03-24"); //(YYYY-MM-DD)

  // Function to calculate age based on birthdate
  function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current date is before the birthdate
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // Dynamic age calculation
  const age = calculateAge(birthDate);
</script>

<div class="container mx-auto p-8 bg-[#31363F] text-[#EEEEEE] text-left mb-16">
  <h1 class="text-4xl mb-4 text-accent">hello there!</h1>
  <p class="mb-4">my name is sivtheng chang, but you can also call me maxy and i am {age} years old. my pronoun is they/them but honestly i don't care if you still use he/him.</p>
  <p class="mb-4">i am a yet-to-graduate cs senior at paragon-international-university and a self-proclaimed full-stack developer, currently working as a web developer at dynamo-tech-solutions</p>
  <p class="mb-4">my dream is to be happily unemployed. my hobbies are listening to music, execising while listening to music, watching movies and tv shows, slacking off at work, hanging out and doing fun stuff with friends, and being madly in love with that one person.</p>

  <h2 class="text-2xl mb-4 text-accent">work experience</h2>
  <ul class="list-disc pl-5">
    <li class="mb-4">
      web developer at <a href="https://dynamo-tech.com/" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">dynamo-tech-solutions</a>
      <div class="nested-info">> from august 2024 to present</div>
    </li>
    <li class="mb-4">
      assistant operating manager at <a href="https://www.facebook.com/masamicambodia/" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">masami-sushi-fusion</a>
      <div class="nested-info">> From January 2020 to January 2022</div>
    </li>
  </ul>

  <h2 class="text-2xl mb-4 text-accent">education</h2>
  <ul class="list-disc pl-5">
    <li class="mb-4">
      bachelor of computer science at <a href="https://paragoniu.edu.kh/" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">paragon-international-university</a>
      <div class="nested-info">> from 2020 to present</div>
    </li>
    <li class="mb-4">
      <a href="https://maps.app.goo.gl/ZVTgtWAjLBrYgKng8" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">toul-tumpong</a> high school
      <div class="nested-info">> from 2016 to 2020</div>
    </li>
    <li class="mb-4">
      <a href="https://maps.app.goo.gl/NsQw8b37S29X4Xzz5" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">american-intercon-school</a> middle school
      <div class="nested-info">> from 2012 to 2016</div>
    </li>
    <li class="mb-4">
      <a href="https://maps.app.goo.gl/ZvQQ5LE2y1LfQcKX8" class="text-[#EEEEEE] border-b border-accent hover:text-accent hover:border-b-accent" target="_blank" rel="noopener noreferrer">wat-sansam-kosal</a> primary school
      <div class="nested-info">> from 2008 to 2012</div>
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
