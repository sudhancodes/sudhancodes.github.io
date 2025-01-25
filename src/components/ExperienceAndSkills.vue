<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 xl:px-16">
            <!-- Skills Section -->
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-full">
                <h2 class="text-4xl font-bold text-white text-center md:text-left mb-4">My Skills</h2>
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div v-for="skill in Skills" :key="skill.id" class="flex items-center space-x-4"
                        data-aos="fade-right" :class="{ 'invert-colors': skill.id === 3 || skill.id === 8 }">
                        <div class="w-12 h-12 flex justify-center items-center rounded-full bg-[#1f1641]">
                            <img :src="skill.icon" alt="Skill Icon" class="w-6 h-6" />
                        </div>
                        <div class="w-full">
                            <h4 class="font-semibold uppercase text-white">{{ skill.name }}</h4>
                            <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                                <div class="h-1 rounded-full bg-primary" :style="{ width: skill.level }"></div>
                            </div>
                            <p class="text-sm text-white mt-1">{{ skill.proficiency }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experiences Section -->
            <div data-aos="flip-left" class="mt-16 md:mt-0">
                <h2 class="text-4xl font-bold text-white text-center md:text-left mb-8 md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id"
                        class="experience-card rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] min-h-[120px]">
                        <div class="pl-4">
                            <h3
                                class="role-text font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.role }}
                            </h3>
                            <p class="text-white">{{ element.company }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const Skills = ref([
    { id: 1, name: 'C#', icon: 'https://img.icons8.com/ios-filled/50/ffffff/c-sharp-logo.png', level: '90%', proficiency: 'Advanced' },
    { id: 2, name: 'ASP.NET MVC', icon: 'https://img.icons8.com/ios-filled/50/ffffff/microsoft.png', level: '80%', proficiency: 'Intermediate' },
    { id: 3, name: 'Vue.js', icon: '/src/assets/vuejs.png', level: '70%', proficiency: 'Intermediate' },
    { id: 4, name: 'HTML & CSS', icon: 'https://img.icons8.com/ios-filled/50/ffffff/html-5.png', level: '95%', proficiency: 'Expert' },
    { id: 5, name: 'JavaScript', icon: 'https://img.icons8.com/ios-filled/50/ffffff/javascript-logo.png', level: '90%', proficiency: 'Advanced' },
    { id: 6, name: 'PostgreSQL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/database.png', level: '75%', proficiency: 'Intermediate' },
    { id: 7, name: 'Git', icon: 'https://img.icons8.com/ios-filled/50/ffffff/git.png', level: '80%', proficiency: 'Advanced' },
    { id: 8, name: 'VS Code', icon: '/src/assets/vs-code.png', level: '85%', proficiency: 'Advanced' },
]);

const Experiences = ref([
    {
        id: 1,
        role: 'Software Development Intern',
        company: 'TINISOFT Technologies',
        date: 'August 2024 - January 2025',
    },
    {
        id: 2,
        role: 'Full-Stack Web Developer (Internship)',
        company: 'Edureka! Learning Center',
        date: 'June 2024 - July 2024',
    },
]);
</script>

<style scoped>
.experience-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px;
}

.role-text {
    font-size: 1.4rem;
    margin-bottom: 8px;
    text-transform: uppercase;
}

.experience-card p {
    margin: 4px 0;
}

/* Adjust font size for smaller screens */
@media (max-width: 768px) {
    .role-text {
        font-size: 1rem;
        line-height: normal;
    }
}
.invert-colors img {
    filter: invert(1);
}
</style>
