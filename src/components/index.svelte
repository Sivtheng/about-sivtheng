<script>
    // Social media links
    const socialLinks = {
      github: 'https://github.com/yourusername',
      twitter: 'https://twitter.com/yourusername',
      facebook: 'https://facebook.com/yourusername',
      instagram: 'https://instagram.com/yourusername',
      telegram: 'https://t.me/yourusername',
      reddit: 'https://reddit.com/user/yourusername',
      spotify: 'https://open.spotify.com/user/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername'
    };
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-[#31363F] text-[#EEEEEE] p-4">
    <h1 class="text-4xl mb-4">/about-sivtheng</h1>
    <p class="text-xl mb-4">welcome to my page. you can learn more about me in about and stuff.</p>
    <p class="text-xl mb-4">or find my socials below</p>
  
    <div class="flex gap-4 mt-4">
      <!-- Font Awesome icons for social media -->
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-github"></i>
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-twitter"></i>
      </a>
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-facebook"></i>
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-instagram"></i>
      </a>
      <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-telegram"></i>
      </a>
      <a href={socialLinks.reddit} target="_blank" rel="noopener noreferrer" aria-label="Reddit" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-reddit"></i>
      </a>
      <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-spotify"></i>
      </a>
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-[#EEEEEE] hover:text-[#76ABAE] text-2xl">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </div>