<template>
  <header class="flex justify-between items-center p-4 md:p-6 bg-opacity-50 relative z-20">
    <!-- Logo -->
    <div class="text-white text-2xl md:text-3xl font-bold flex items-center space-x-2">
      <img src="/src/assets/favicon.png" alt="Code Icon" width="35" height="35" style="filter: invert(1);"/>
    </div>

    <!-- Center: Navbar Links (Desktop Only) -->
    <nav class="hidden md:flex space-x-10">
      <ul class="flex space-x-6">
        <li v-for="item in Menu" :key="item.name" class="flex items-center space-x-2">
          <img v-if="item.icon" :src="item.icon" alt="Icon" width="20" height="20" />
          <a :href="item.href" 
            class="block text-white transition hover:text-primary ease-linear text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Right: Social Links & Mobile Toggle Button -->
    <div class="flex items-center space-x-3 md:space-x-10">
      <!-- Social Links -->
      <div class="flex items-center space-x-4 md:space-x-6">
        <a href="#" target="_blank" class="text-white transition hover:text-primary">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/twitter.png" alt="Twitter" width="20" height="20" />
        </a>
        <a href="#" target="_blank" class="text-white transition hover:text-primary">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/facebook-new.png" alt="Facebook" width="20" height="20" />
        </a>
        <a href="https://www.instagram.com/sudhan.urstruly?utm_source=qr&igsh=MWxrMjVzdGc0YjdnYQ==" target="_blank" class="text-white transition hover:text-primary">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" width="20" height="20" />
        </a>
        <a href="https://github.com/sudhancodes" target="_blank" class="text-white transition hover:text-primary">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/github.png" alt="GitHub" width="20" height="20" />
        </a>
      </div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="Close" width="30" height="30" />
          </span>
          <span v-else>
            <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="Menu" width="30" height="30" />
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Navbar Links -->
    <nav
      :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:hidden',
      isMenuOpen ? 'block' : 'hidden']"
    >
      <ul class="flex flex-col items-center space-y-4">
        <li v-for="item in Menu" :key="item.name" class="flex items-center space-x-2">
          <img v-if="item.icon" :src="item.icon" alt="Icon" width="20" height="20" />
          <a :href="item.href" 
            class="block text-white transition hover:text-primary ease-linear text-xl"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const Menu = ref([
  { name: 'About Me', href: '#about', icon: 'https://img.icons8.com/ios-filled/20/ffffff/user.png' },
  { name: 'Skills', href: '#skills', icon: 'https://img.icons8.com/ios-filled/20/ffffff/brain.png' },
  { name: 'Projects', href: '#projects', icon: 'https://img.icons8.com/ios-filled/20/ffffff/project.png' },
  { name: 'Contact', href: '#contact', icon: 'https://img.icons8.com/ios-filled/20/ffffff/email.png' },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
