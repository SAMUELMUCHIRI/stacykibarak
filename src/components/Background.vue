<template>
    <div
        class="fixed inset-0 -z-10 overflow-hidden pointer-events-none flex items-center justify-center"
    >
        <!-- Subtle Grid -->
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
        ></div>

        <!-- Abstract Global Network -->
        <svg
            class="w-[140vh] h-[140vh] opacity-20 text-accent-600"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g class="animate-[spin_60s_linear_infinite] origin-center">
                <!-- Outer Orbit -->
                <circle
                    cx="400"
                    cy="400"
                    stroke-width="1"
                    stroke-dasharray="10 20"
                    opacity="0.5"
                ></circle>
                <circle
                    cx="400"
                    cy="400"
                    r="300"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-dasharray="4 4"
                    opacity="0.3"
                ></circle>

                <!-- Network Nodes -->
                <g>
                    <circle cx="400" cy="50" r="4" fill="currentColor"></circle>
                    <circle
                        cx="750"
                        cy="400"
                        r="4"
                        fill="currentColor"
                    ></circle>
                    <circle
                        cx="400"
                        cy="750"
                        r="4"
                        fill="currentColor"
                    ></circle>
                    <circle cx="50" cy="400" r="4" fill="currentColor"></circle>

                    <!-- Connecting Lines -->
                    <path
                        d="M400 50 L750 400 L400 750 L50 400 Z"
                        stroke="currentColor"
                        stroke-width="0.5"
                        opacity="0.2"
                    ></path>
                </g>
            </g>

            <!-- Inner Core Pulse -->
            <circle
                cx="400"
                cy="400"
                r="150"
                fill="url(#core-gradient)"
                class="animate-pulse"
                opacity="0.3"
            ></circle>

            <defs>
                <radialgradient
                    id="core-gradient"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(400 400) rotate(90) scale(150)"
                >
                    <stop stop-color="currentColor" stop-opacity="0.5"></stop>
                    <stop
                        offset="1"
                        stop-color="currentColor"
                        stop-opacity="0"
                    ></stop>
                </radialgradient>
            </defs>
        </svg>
    </div>
</template>
