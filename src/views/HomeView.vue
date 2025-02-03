<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useNavStore } from "@/stores/NavBarStore";
import { ref, watch, type Ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");

const sendEmail = async () => {
  try {
    await emailjs.send(
      "service_5w1p1gb",
      "template_kh3t49h",
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      "VUsNL_FL1PK63Xl3I"
    );
    alert("Email sent successfully!");
    sended.value = false;
  } catch (error) {
    console.error("Failed to send email", error);
  }
};

const navStore = useNavStore();
const sended = ref(false);
const sections: Record<
  "home" | "about" | "work" | "contact",
  Ref<HTMLElement | null>
> = {
  home: ref(null),
  about: ref(null),
  work: ref(null),
  contact: ref(null),
};

watch(
  () => navStore.sections,
  (newSection) => {
    console.log(newSection);
    if (newSection && sections[newSection as keyof typeof sections]?.value) {
      const element = sections[newSection as keyof typeof sections].value;
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
    }
  }
);
</script>

<template>
  <main
    class="w-full flex flex-col gap-[64px] duration-200"
    :ref="sections.home"
  >
    <div
      class="w-full flex flex-col justify-center items-center"
      style="min-height: calc((100vh - 128px))"
    >
      <!--Hero Branner-->
      <div class="flex flex-col justify-center items-center">
        <div class="h-[387px] w-[273px]">
          <img
            src="/src/assets/รูปถ่าย.png"
            class="w-full h-full rounded-2xl"
          />
        </div>
        <div class="-translate-y-[50px] text-center">
          <div class="text-[6vh] text-shadow">KITTIPHAN CHAREANSUK</div>
          <div class="text-[5vh]">Frontend Developer</div>
        </div>
        <div
          class="w-10 h-10 my-4 flex justify-center items-center bg-secondary border-border border-2 rounded-full"
        >
          <DotLottieVue
            class="w-8 h-8"
            src="/down.lottie"
            autoplay
            loop
            :speed="0.8"
          ></DotLottieVue>
        </div>
        <div>About Me</div>
      </div>
    </div>
    <!--About Me-->
    <div class="w-full h-full text-5xl">
      <h1 class="mb-12 flex" :ref="sections.about">About Me</h1>
      <div class="flex justify-between flex-wrap gap-12">
        <div>
          <p class="max-w-[723px] w-full text-[32px] libre-bodoni-reg mb-12">
            I am seeking employment and I am ready to leverage my skills and
            passion to contribute to a company's mission. With my professional
            skills, I am well-equipped to quickly adapt to any environment. This
            makes me a strong candidate for a web developer position.
          </p>
          <p class="max-w-[723px] w-full text-[32px] libre-bodoni-reg">
            Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own. Wanna learn
            more? Here's
          </p>
          <div>
            <a
              href="/Resume_Kittphan_Chareansuk.pdf"
              download="Resume_Kittphan_Chareansuk.pdf"
              class="mt-8 bg-secondary border-2 border-border cursor-pointer rounded-[2px] w-fit text-center p-2 text-2xl"
            >
              RESUME
            </a>
          </div>
        </div>
        <div>
          <div class="w-[320px] md:w-[450px] mb-[64px]">
            <h2 class="text-[40px] mb-8">Frontend Tools</h2>
            <p class="w-full text-2xl libre-bodoni-reg">
              JavaScript(ES6+), Vue.js, Nuxt.js, TypeScript, Tailwind, CSS3,
              HTML5, Git/GitHub,
            </p>
          </div>
          <div class="w-[320px] md:w-[450px]">
            <h2 class="text-[40px] mb-8">CSS Tools</h2>
            <p class="w-full text-2xl libre-bodoni-reg">
              Figma, Adobe Photoshop, Adobe XD, Canvas
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Work Experience-->
    <div class="w-full flex flex-col gap-8 mt-12">
      <h1 class="text-5xl mb-8" :ref="sections.work">Work Experience</h1>
      <div
        class="flex flex-col gap-4 p-4 bg-secondary border-2 border-border rounded-[3px]"
      >
        <div class="text-[40px]">Frontend Developer</div>
        <div class="text-[32px]">MERQUERY CO., LTD</div>
        <div class="text-2xl libre-bodoni-reg">JUL - DEC 2024</div>
        <ul class="list-disc text-2xl libre-bodoni-reg ml-8">
          <li>
            Developed and maintained Single Page Applications (SPA) using Vue.js
            or NUXT.js.
          </li>
          <li>
            Collaborated with designers to convert UI/UX designs into responsive
            web pages.
          </li>
          <li>
            Utilized Tailwind CSS for creating and customizing front-end
            layouts.
          </li>
          <li>
            Built Reusable Components to streamline development and reduce
            repetitive work.
          </li>
          <li>
            Integrated APIs with front-end components using Axios and RESTful
            services.
          </li>
          <li>
            Worked in an scrum environment using Git tool for project management
            and version control.
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col gap-4 p-4 bg-secondary border-2 border-border rounded-[3px]"
      >
        <div class="text-[40px]">Frontend Game Developer</div>
        <div class="text-[32px]">SheRio & Co</div>
        <div class="text-2xl libre-bodoni-reg">JUL - OCT 2023</div>
        <ul class="list-disc text-2xl libre-bodoni-reg ml-8">
          <li>
            I have taken on the responsibility of working on frontend tasks
            related to UI in my previous roles. Additionally, I have received
            training in fundamental programming concepts and object-oriented
            programming. I also possess the ability to create particle effects
            and animations.
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col gap-4 p-4 bg-secondary border-2 border-border rounded-[3px]"
      >
        <div class="text-[40px]">Cyber Security ( Trainee )</div>
        <div class="text-[32px]">
          Electricity Generating Authority of Thailand
        </div>
        <div class="text-2xl libre-bodoni-reg">2022</div>
        <ul class="list-disc text-2xl libre-bodoni-reg ml-8">
          <li>Study and apply security systems in organizations.</li>
          <li>
            Document information from the internal vulnerability audit using the
            OWASP Top 10 as a guide.
          </li>
          <li>
            Analyze the causes of vulnerabilities and propose prevention
            methods.
          </li>
        </ul>
      </div>
    </div>
    <!--Contract-->
    <div class="w-full flex flex-col justify-center items-center mt-8 gap-8">
      <h1 class="text-[6vh]" :ref="sections.contact">Contract Me</h1>
      <p class="max-w-[700px] text-[4vh] text-center">
        Premium web design, development, and SEO services to help your business
        stand out.
      </p>
      <form
        @submit.prevent="sendEmail"
        class="max-w-[650px] w-full flex flex-col gap-8 p-4 bg-secondary border-2 border-border rounded-[3px]"
      >
        <div class="text-2xl libre-bodoni-reg">Contract</div>
        <input
          class="w-full px-4 py-3 placeholder:text-text bg-border border-2 border-border rounded-[3px]"
          type="text"
          v-model="name"
          placeholder="Name"
        />
        <input
          class="w-full px-4 py-3 placeholder:text-text bg-border border-2 border-border rounded-[3px]"
          type="email"
          v-model="email"
          placeholder="Email"
        />
        <textarea
          class="w-full px-4 py-3 min-h-32 placeholder:text-text bg-border border-2 border-border rounded-[3px]"
          placeholder="Message"
          v-model="message"
        ></textarea>
        <button
          type="submit"
          :disabled="sended"
          class="w-full py-4 text-center bg-text text-primary"
          :class="[sended ? '' : 'cursor-pointer']"
        >
          {{ sended ? "Send Message" : "Sent  Message" }}
        </button>
      </form>
    </div>
  </main>
</template>

<style>
.text-shadow {
  filter: drop-shadow(4px 4px rgb(0 0 0 / 0.4));
}
</style>
