<script setup lang="ts">
import {ref , computed} from 'vue';
import Skills from "@/components/SkillsSection.vue";
const experiences = [
    {
        id: 1,
        company: "Amplisynth Ltd.",
        role: "Embedded System Engineer",
        type: "Part-time",
        startDate: "Oct 2025",
        endDate: "Present",
        duration: "4 mos",
        location: "Remote",
        description: [],
        skills: [],
    },
    {
        id: 2,
        company: "Engineering for Change, LLC",
        role: "Fellow",
        type: "Part-time",
        startDate: "May 2024",
        endDate: "Oct 2024",
        duration: "6 mos",
        location: "South Asia · Remote",
        description: [
            "Worked on an electronic project at Resham Sutra Pvt Ltd.",
            "Handled ideation, hardware CAD design, PCB design, and firmware implementation.",
            "Project focused on helping women in rural India produce higher-quality yarn to increase income.",
        ],
        skills: [
            "Computer-Aided Design (CAD)",
            "Arduino",
            "Printed Circuit Board (PCB) Design",
        ],
    },
    {
        id: 3,
        company: "Coca-Cola Beverages Africa - Kenya",
        role: "Electrical Engineering Intern",
        type: "Internship",
        startDate: "Feb 2024",
        endDate: "Apr 2024",
        duration: "3 mos",
        location: "Nairobi County, Kenya · On-site",
        description: [
            "Performed electrical autonomous maintenance and handled breakdowns in Unit 2 (Lines 6, 7, and 8).",
            "Worked with encoders, stepper motors, servo motors, and sensors to ensure smooth production.",
        ],
        skills: [],
    },
    {
        id: 4,
        company: "ARC Ride",
        role: "Battery as a Service Engineering Intern",
        type: "Internship",
        startDate: "Jan 2024",
        endDate: "Feb 2024",
        duration: "2 mos",
        location: "Nairobi County, Kenya · On-site",
        description: [
            "Part of the team responsible for upgrading systems from single to dual battery configurations.",
        ],
        skills: ["Dual Battery Upgrade"],
    },
    {
        id: 5,
        company: "KamiLimu",
        role: "Cohort 7 Mentee",
        type: "Mentorship Program",
        startDate: "Sep 2022",
        endDate: "May 2023",
        duration: "9 mos",
        location: "",
        description: [
            "Participated in a five-layered structured mentorship program.",
            "Covered personal development, professional development, innovation, ICT, scholarship skills, and community engagement.",
            "Developed soft skills such as public speaking, personal branding, grit, and confidence.",
            "Engaged with peer, professional, and ICT track mentors.",
        ],
        skills: ["Public Speaking"],
    },
    {
        id: 6,
        company: "Diageo",
        role: "Manufacturing Excellence Intern",
        type: "Internship",
        startDate: "Feb 2023",
        endDate: "Apr 2023",
        duration: "3 mos",
        location: "Kenya · On-site",
        description: [
            "Worked with ManEx, MMS, KPIs, and best practices required for RTB and ITB.",
            "Compiled and updated KPI maturity boards for OEE, losses, energy, water, quality, and planning (MTD & YTD).",
            "Updated daily MTD depletions and supported digitization efforts to reduce paperwork.",
            "Performed 5S and Visual Management activities.",
            "Gained exposure to PLC basics and electrical equipment maintenance.",
            "Participated in RCBO upgrades, servo motor failure analysis, and ATEX equipment audits.",
        ],
        skills: ["Microsoft Excel", "Microsoft Office"],
    },
    {
        id: 7,
        company: "Gearbox",
        role: "Cloud and IoT Intern (Hardware)",
        type: "Internship",
        startDate: "Jan 2023",
        endDate: "Feb 2023",
        duration: "2 mos",
        location: "",
        description: [],
        skills: ["ESP32 Microcontrollers", "Sensors"],
    },
    {
        id: 8,
        company: "Gearbox",
        role: "Electrical Engineering Intern",
        type: "Internship",
        startDate: "Jan 2022",
        endDate: "May 2022",
        duration: "5 mos",
        location: "Kenya",
        description: [
            "Designed and fabricated single-sided and double-sided PCBs using KiCad EDA.",
            "Handled drilling, through-hole processes, electroplating, solder masking, and component soldering.",
            "Worked in electrical prototyping, turning ideas into functional hardware.",
            "Performed wiring and installation for single-phase and three-phase systems.",
            "Supported machine maintenance and conducted efficiency tests on an automatic vending machine.",
        ],
        skills: [
            "Arduino",
            "Printed Circuit Board (PCB) Design",
            "Semiconductor Fabrication",
            "C++",
            "Computer-Aided Design (CAD)",
            "Arduino IDE",
        ],
    },
];
const allskills = ref<string[]>([]);
const skills = computed(() => {
    experiences.forEach((experience) => {
        allskills.value.push(...experience.skills);
    });
    return Array.from(new Set(allskills.value));
});



import { Badge } from "@/components/ui/badge";


function func_variant(vartype : string) : "default" | "secondary" | "destructive" | "outline" | null | undefined {
  if (vartype === 'Internship') return 'outline'
   if (vartype === 'Part-time') return 'secondary'
   return 'default'
}
</script>
<template>
    <section id="work">
        <div class="flex min-h-0 flex-col gap-y-3 p-4">
            <div
                style="
                    opacity: 1;
                    filter: blur(0px);
                    transform: translateY(-6px);
                "
            >
                <h2 class="text-2xl font-bold">Work Experience</h2>
            </div>

            <div
                class="flex-grow items-center flex-col group backdrop-blur-lg  p-2 rounded-xl dark:shadow-xl dark:shadow-white/10  shadow-xl shadow-gray-500/10"
                v-for="experience in experiences"
                :key="experience.id"
            >
                <div class="flex flex-col">
                    <div
                        class="flex items-center justify-between gap-x-2 text-base py-4 "
                    >
                        <h3
                            class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm gap-4"
                        >
                            <span class="font-bold text-xl">{{ experience.company }}</span><Badge
                                :variant="func_variant(experience.type)"

                                class="hidden md:block"
                                >{{ experience.type }}</Badge
                            ><span class="inline-flex gap-x-1"></span>
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
                <div class="mt-2 ">
                    <div v-if="experience.description.length > 0">
                        <p class="font-sans text-sm">
                        <div v-for="item in experience.description">
                          {{ item }}
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Skills :skills="skills" />
</template>
