<script setup lang="ts">
import profile from "@/assets/stacykibarak.jpeg";
</script>
<template>
    <section id="hero">
        <div
            class="mx-auto w-full h-dvh flex items-center grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between"
        >
            <div class="flex-col flex flex-1 justify-center backdrop-blur-2xl">
                <div class="flex p-4">
                    <span
                        class="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                        >Hi, I'm Stacy Kibarak</span
                    >
                </div>
                <div class="flex p-4 flex-col gap-2">
                    <span class="inline-block md:text-xl text-muted-foreground"
                        >I’m an Electronics and Computer Engineer focused on
                        sustainable, embedded systems who values mentorship and
                        giving back to the tech community.
                    </span>
                </div>
            </div>
            <div class="flex justify-center">
                <img
                    :src="profile"
                    alt="Hero Image"
                    class="size-2/3 object-cover rounded-xl shadow-2xl dark:shadow-gray-600 shadow-gray-900"
                    loading="lazy"
                />
            </div>
        </div>
    </section>
</template>
