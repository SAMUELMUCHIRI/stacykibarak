<script setup lang="ts">
const education = [
    {
        id: 1,
        company: "Jomo Kenyatta University of Agriculture and Technology",
        role: "Electronics and Computer Engineering",

        startDate: "Sep 2019",
        endDate: "Jan 205",

        description: [],
    },
];
</script>
<template>
    <section id="education">
        <div class="flex min-h-0 flex-col gap-y-3 p-4">
            <div
                style="
                    opacity: 1;
                    filter: blur(0px);
                    transform: translateY(-6px);
                "
            >
                <h2 class="text-xl font-bold">/ Education</h2>
                <div
                    class="flex-grow items-center flex-col group backdrop-blur-lg p-2 rounded-xl dark:shadow-xl dark:shadow-white/10 shadow-xl shadow-gray-500/10"
                    v-for="experience in education"
                    :key="experience.id"
                >
                    <div class="flex gap-4 flex-col">
                        <div class="flex flex-col">
                            <div
                                class="flex items-center justify-between gap-x-2 text-base py-4"
                            >
                                <h3
                                    class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm gap-4"
                                >
                                    <span class="font-bold text-xl">{{
                                        experience.company
                                    }}</span>
                                </h3>
                                <p
                                    class="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
                                >
                                    {{ experience.startDate }} -
                                    {{ experience.endDate }}
                                </p>
                            </div>
                            <p class="font-sans text-xs">
                                {{ experience.role }}
                            </p>
                        </div>

                        <div v-if="experience.description.length > 0">
                            <div
                                class="font-sans text-sm border-t-2"
                                v-if="experience.description.length > 0"
                            >
                                <div
                                    v-for="item in experience.description"
                                    class="p-2 flex items-center"
                                >
                                    <span>{{ item }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
