<script setup lang="ts">
import profile from "@/assets/stacykibarak.webp";
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
                <div class="flex gap-2">
                    <div class="flex p-4 flex-col gap-2">
                        <a
                            href="mailto:stacykibarak@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="md:text-xl text-white dark:text-black rounded-2xl bg-black dark:bg-white/90 w-max px-4 py-2 flex gap-2 items-center"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                            <span>Email Me</span></a
                        >
                    </div>
                    <div class="flex p-4 flex-col gap-2">
                        <a
                            href="https://www.linkedin.com/in/stacykibarak/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="md:text-xl text-inherit rounded-2xl bg-inherit border border-black dark:border-white/90 w-max px-4 py-2 flex gap-2 items-center"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                                />
                            </svg>

                            <span>Lets Connect</span></a
                        >
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <img
                    :src="profile"
                    alt="Hero Image"
                    class="size-2/3 object-cover rounded-xl shadow-2xl dark:shadow-gray-600 shadow-gray-900"
                    fetchpriority="high"
                />
            </div>
        </div>
    </section>
</template>
