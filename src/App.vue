<script lang="ts">
export const iframeHeight = "800px";
export const description =
    "A simple sidebar with navigation grouped by section.";
</script>

<script setup lang="ts">
import ProjectSection from "@/components/ProjectSection.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Hero from "@/components/HeroSection.vue";
import About from "@/components/AboutSection.vue";
import Skills from "@/components/SkillsSection.vue";
import Hackathons from "@/components/HackathonsSection.vue";
import Education from "@/components/EducationSection.vue";
import Contact from "@/components/ContactSection.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import Background from "./components/Background.vue";
</script>

<template>
    <Background />
    <main class="flex flex-col min-h-dvh space-y-10 bg-inherit">
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <ProjectSection />
        <Education />
        <Hackathons />
        <Contact />
    </main>
    <FloatingButton />
</template>
