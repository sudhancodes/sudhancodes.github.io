<template>
  <section class="text-white mt-20" id="services">
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:pt-12 place-items-center"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="service-card px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      >
        <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div>
            <img :src="service.icon" alt="service icon" />
          </div>
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  import { ref } from "vue";
  
  const services = ref([
    {
      id: 1,
      icon: "https://img.icons8.com/ios-filled/100/ffffff/google-code.png",
      name: "Web Development",
      description:
        "Creating dynamic and responsive web applications using modern frameworks such as Vue.js, ASP.NET, and JavaScript.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/ios-filled/100/ffffff/email-open.png",
      name: "API Integration",
      description:
        "Implementing robust APIs for seamless data exchange and enhanced functionality in web and mobile applications.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png",
      name: "UI/UX Design",
      description:
        "Designing intuitive user interfaces with a focus on user experience, delivering visually appealing and accessible designs.",
    },
    {
      id: 4,
      icon: "https://img.icons8.com/ios-filled/100/ffffff/web-design.png",
      name: "Full-Stack Solutions",
      description:
        "Building end-to-end solutions with expertise in frontend and backend development, ensuring high-quality performance.",
    },
    {
      id: 5,
      icon: "https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
      name: "Technical Writing",
      description:
        "Crafting clear and concise documentation to explain complex concepts, ensuring effective communication for technical projects.",
    },
  ]);
  </script>
  <style scoped>
  .service-card {
    height: 300px;
    width: 100%;
  }
  </style>
  