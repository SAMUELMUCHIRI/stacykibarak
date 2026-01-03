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

import Hackathons from "@/components/HackathonsSection.vue";
import Education from "@/components/EducationSection.vue";
import Contact from "@/components/ContactSection.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import Background from "./components/Background.vue";
</script>

<template>
    <div class="min-h-screen font-sans antialiased w-dvw container mx-auto">
        <Background />
        <main class="flex flex-col min-h-dvh overflow-auto space-y-10">
            <Hero />
            <About />
            <WorkExperience />

            <Education />

            <Contact />
        </main>
        <FloatingButton />
    </div>
</template>
