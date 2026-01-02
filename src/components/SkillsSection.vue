<script setup lang="ts">
import type { PropType } from "vue";
defineProps({
    skills_part: {
        type: Array as PropType<string[]>,
        required: true,
    },
});
</script>
<template>
    <section id="skills">
        <div class="flex min-h-0 flex-col gap-y-3 p-4">
            <div>
                <h2 class="text-2xl font-bold">Skills</h2>
            </div>
            <div class="flex flex-wrap gap-1">
                <div v-for="skill in skills_part">
                    <div
                        class="bg-gray-200 rounded-full px-2 py-1 text-md font-medium text-gray-800"
                    >
                        {{ skill }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
