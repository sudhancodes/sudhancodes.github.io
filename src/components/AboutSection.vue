<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
    </div>
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
      <!-- Education Section -->
      <div data-aos="fade-up">
        <h2 class="text-4xl font-bold text-white text-center md:text-left mb-8">My Education</h2>
        <div class="space-y-8 py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="flex flex-col md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 h-48"
          >
            <div class="flex items-center gap-4">
              <!-- Icon with Fixed Size -->
              <div class="w-12 h-12 flex items-center justify-center bg-[#1f1641] rounded-full">
                <img
                  src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                  alt="graduation-icon"
                  class="w-8 h-8"
                />
              </div>
              <div class="text-center">
                <h3
                  class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center lg:text-xl text-sm sm:text-base"
                >
                  {{ element.School }}
                </h3>
              </div>
            </div>
            <div class="mt-4 text-center sm:text-left">
              <p class="text-white text-center ">{{ element.program }}</p>
              <p class="text-white text-center ">{{ element.year }}</p>
              <p class="text-gray-400 text-center ">{{ element.score }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About Me Section -->
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="fade-right">
        <h2 class="text-4xl font-bold text-white text-center md:text-left mb-8">
          More About Me</h2>
        <p class="text-base lg:text-lg mt-8 py-8">
          I am a passionate and detail-oriented Full-Stack Web Developer with expertise in modern web technologies,
          including C#, Java, ASP.NET, HTML, CSS, JavaScript, and Vue.js. With a proven track record of developing
          impactful projects, I thrive in collaborative environments and bring innovative ideas to life.
          <br /><br />
          My hands-on experience includes building a .NET MVC application for efficient QR card management, creating
          responsive web pages, and crafting Vue.js components for dynamic applications. Having worked on various
          real-world projects, I have honed my problem-solving and analytical skills.
          <br /><br />
          Beyond technology, I am a collaborative team player who values continuous learning and thrives on creating
          solutions that make a difference.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full pt-8">
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 md:max-w-sm"
            data-aos="zoom-in"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">Capture n Call</h3>
            <p class="text-sm sm:text-base text-gray-300 mt-4">
              Built a .NET MVC app for QR card management, enabling efficient data handling.
            </p>
          </div>
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 md:max-w-sm"
            data-aos="zoom-in"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">Angadi App</h3>
            <p class="text-sm sm:text-base text-gray-300 mt-4">
              Developed Vue.js components for managing product catalogs and user registrations.
            </p>
          </div>
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 md:max-w-sm"
            data-aos="zoom-in"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">Tinisoft Apps Page</h3>
            <p class="text-sm sm:text-base text-gray-300 mt-4">
              Created a responsive, interactive webpage to showcase Tinisoft apps using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const education = ref([
  {
    id: 1,
    School: "Perunthalaivar Kamarajar Institute of Engineering and Technology",
    program: "B.Tech - Electronics and Communication Engineering",
    year: "2018 – 2022",
    score: "6.9 / 10 CGPA",
  },
  {
    id: 2,
    School: "Thanthai Periyar Govt. Higher Secondary School",
    program: "HSC - Computer Science",
    year: "2016 – 2018",
    score: "74%",
  },
  {
    id: 3,
    School: "Servite English High School",
    program: "SSLC",
    year: "2016",
    score: "94%",
  },
]);
</script>
<style scoped>
@media (max-width: 768px) {
  .text-center.md\:text-left {
    text-align: center;
  }
  .text-sm {
    font-size: 0.9rem;
  }
}
</style>
