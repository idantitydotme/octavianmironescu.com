import { useHead } from "@solidjs/web";
import { createPageHead } from "@rimelight/seo/head";
import { RLMarquee } from "@rimelight/ui";
import ContactForm from "#components/app/ContactForm";
import { t } from "@rimelight/i18n";

interface SocialLink {
  icon: string;
  href: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: "i-mdi-github",
    href: "https://github.com/MironescuOctavian",
    ariaLabel: "GitHub",
  },
  {
    icon: "i-mdi-linkedin",
    href: "https://www.linkedin.com/in/octavian-mironescu-a605b921a/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: "i-mdi-gmail",
    href: "mailto:omironescu@gmail.com",
    ariaLabel: "Gmail",
  },
];

const techStackIcons: string[] = [
  "i-logos-java",
  "i-logos-spring-icon",
  "i-logos-typescript-icon",
  "i-logos-vue",
  "i-logos-solidjs-icon",
  "i-logos-unocss",
  "i-logos-intellij-idea",
  "i-logos-visual-studio-code",
  "i-logos-webstorm",
  "i-logos-gradle",
  "i-logos-vite",
  "i-logos-pnpm",
  "i-logos-docker-icon",
  "i-logos-cloudflare-icon",
];

interface ServiceItem {
  icon: string;
  title: string;
  isOpen?: boolean;
  points: string[];
}

interface Project {
  title: string;
  status: string;
  image: string;
  githubUrl?: string;
  previewUrl?: string;
}

const projectBtnClass =
  "flex items-center justify-center p-3 rounded-xl border border-green-900 bg-black/60 text-gray-300 hover:text-white hover:border-green-600 transition-colors";

export default function HomePage() {
  const services: ServiceItem[] = [
    {
      icon: "i-mdi-web",
      get title() {
        return t("app.text.web-development");
      },
      points: [
        "Single Page Applications (SPAs)",
        "Landing pages and business websites",
        "Portfolio websites",
      ],
    },
    {
      icon: "i-mdi-code-braces",
      get title() {
        return t("app.text.software-development");
      },
      points: [
        "REST APIs and backend services",
        "CLI tools and automation scripts",
        "System design and architecture",
      ],
    },
    {
      icon: "i-mdi-cloud-outline",
      get title() {
        return t("app.text.devops-cloud-infrastructure");
      },
      points: [
        "Containerization & deployment with Docker",
        "Cloud hosting & edge deployment (Cloudflare)",
        "CI/CD pipelines & build automation",
      ],
    },
  ];
  const projects: Project[] = [
    {
      title: "octavianmironescu.com",
      status: "Deployed",
      image: "https://placehold.co/600x400/101010/16a34a?text=Portfolio+Website",
      githubUrl: "https://github.com/MironescuOctavian/octavianmironescu.com",
      previewUrl: "https://octavianmironescu.com",
    },
    {
      get title() {
        return t("app.text.backend-api-service");
      },
      status: "In Development",
      image: "https://placehold.co/600x400/101010/16a34a?text=Backend+Services",
      githubUrl: "https://github.com/MironescuOctavian",
      previewUrl: "https://github.com/MironescuOctavian",
    },
    {
      get title() {
        return t("app.text.full-stack-platform");
      },
      status: "Contributor",
      image: "https://placehold.co/600x400/101010/16a34a?text=Full-stack+App",
      githubUrl: "https://github.com/MironescuOctavian",
      previewUrl: "https://github.com/MironescuOctavian",
    },
    {
      get title() {
        return t("app.text.developer-automation-tools");
      },
      status: "Deployed",
      image: "https://placehold.co/600x400/101010/16a34a?text=Automation+Tools",
      githubUrl: "https://github.com/MironescuOctavian",
      previewUrl: "https://github.com/MironescuOctavian",
    },
  ];
  useHead(() =>
    createPageHead({
      title: t("app.text.octavian-mironescu"),
      description: t("app.text.personal-website-of-octavian-mironescu"),
    }),
  );

  return (
    <div class="w-full">
      {/* Hero Section */}
      <section class="flex flex-col p-12 w-full">
        <p class="text-2xl text-green-500 font-medium mb-1">{t("page.home.hero.greeting")}</p>
        <header class="flex md:flex-row flex-col justify-start items-center gap-6 mt-2">
          <h1 class="text-white font-bold text-6xl">{t("page.home.hero.title")}</h1>
          <p class="text-3xl">
            Transforming ideas into interactive and seamless digital experiences with cutting-edge{" "}
            <span class="text-green-600">frontend</span> and{" "}
            <span class="text-green-600">backend</span> development.
          </p>
        </header>

        {/* Social Media Badges */}
        <ul class="flex gap-4 py-8 justify-start">
          {socialLinks.map((link) => (
            <li aria-label={link.ariaLabel}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center border-2 rounded-2xl border-green-900 p-2 hover:border-green-600 transition-colors"
              >
                <span class={`text-5xl ${link.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack Icons Showcase */}
      <RLMarquee pauseOnHover={true}>
        {techStackIcons.map((icon) => (
          <span class={`shrink-0 mx-3 w-10 h-10 text-4xl ${icon}`} />
        ))}
      </RLMarquee>

      {/* What I Do Section */}
      <section class="flex flex-col w-full px-12 py-12 gap-8">
        <div class="flex flex-col w-full gap-0">
          <span class="text-lg text-green-500 font-medium mb-1">{t("page.home.skills.label")}</span>
          <h2 class="text-4xl font-bold text-white mb-2">{t("page.home.skills.heading")}</h2>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* Left: Service Accordions */}
          <div class="flex flex-col gap-4 w-full lg:w-1/2 min-w-0">
            {services.map((service) => (
              <details
                class="group border border-green-900 rounded-xl overflow-hidden bg-black/20"
                open={service.isOpen}
              >
                <summary class="flex items-center gap-3 px-5 py-4 cursor-pointer list-none select-none hover:bg-green-950/20 transition-colors">
                  <span class={`w-6 h-6 text-green-500 inline-block shrink-0 ${service.icon}`} />
                  <span class="text-white text-lg font-medium flex-1">{service.title}</span>
                  <span class="i-mdi-chevron-down w-5 h-5 text-white inline-block transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <ul class="flex flex-col gap-2 px-6 pb-5 text-gray-300 text-sm">
                  {service.points.map((point) => (
                    <li class="flex items-center gap-2">
                      <span class="text-green-500">·</span> {point}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          {/* Right: GitHub Activity Card */}
          <div class="flex flex-col w-full lg:w-1/2 min-w-0">
            <div class="border border-green-900 rounded-xl overflow-hidden bg-black/20 flex flex-col h-full">
              <div class="flex items-center justify-between px-5 py-4 border-b border-green-900/60 bg-green-950/10 shrink-0">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 text-green-500 inline-block shrink-0 i-mdi-github" />
                  <h3 class="text-white text-lg font-medium">{t("page.home.github.heading")}</h3>
                </div>
                <a
                  href="https://github.com/MironescuOctavian"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  @MironescuOctavian
                  <span class="i-mdi-arrow-top-right w-4 h-4 inline-block" />
                </a>
              </div>

              <div class="flex-1 min-h-0 p-5 flex items-center justify-center overflow-hidden">
                <img
                  src="https://ghchart.rshah.org/16a34a/MironescuOctavian"
                  alt={t("page.home.github.calendar-alt")}
                  class="w-full max-h-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" class="py-12 px-12 border-t border-green-900/60 text-white">
        <span class="text-lg text-green-500 font-medium mb-1">{t("page.home.projects.label")}</span>
        <h2 class="text-4xl md:text-5xl font-bold mb-8">{t("page.home.projects.heading")}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div class="group border border-green-900/80 hover:border-green-600/80 rounded-2xl overflow-hidden bg-black/30 transition-all duration-300">
              <a
                href={project.previewUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                class="block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
              <div class="flex items-center justify-between p-5">
                <div>
                  <h4 class="text-xl font-semibold text-white">{project.title}</h4>
                  <span class="inline-block mt-1 text-xs px-2.5 py-1 rounded-full border border-green-800 text-green-400 bg-green-950/40">
                    {project.status}
                  </span>
                </div>
                <div class="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("page.home.projects.github-aria")}
                      class={projectBtnClass}
                    >
                      <span class="i-mdi-code-tags text-xl" />
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("page.home.projects.preview-aria")}
                      class={projectBtnClass}
                    >
                      <span class="i-mdi-arrow-top-right text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="flex items-center justify-center">
          <a
            href="https://github.com/MironescuOctavian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 mt-10 text-gray-300 hover:text-white border border-green-900 hover:border-green-600 p-3.5 w-md rounded-full bg-black/40 hover:bg-green-950/20 hover:scale-[1.01] transition-all"
          >
            <span class="text-base font-medium">{t("page.home.projects.more")}</span>
            <span class="i-mdi-github text-xl text-green-500" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="w-full py-12 px-12 border-t border-green-900/60 text-white">
        <div class="w-full">
          <span class="text-lg text-green-500 font-medium mb-1">
            {t("page.home.contact.label")}
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">{t("page.home.contact.heading")}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-start text-gray-300 space-y-4">
              <p class="text-lg leading-relaxed">
                Have a question, feedback, or a project in mind? Feel free to reach out directly
                through the form or via email.
              </p>
              <div class="flex items-center gap-3 pt-2">
                <span class="i-mdi-email-outline text-green-500 text-xl" />
                <a
                  href="mailto:omironescu@gmail.com"
                  class="hover:text-green-400 transition-colors"
                >
                  omironescu@gmail.com
                </a>
              </div>
              <div class="flex items-center gap-3">
                <span class="i-mdi-map-marker-outline text-green-500 text-xl" />
                <span class="text-white">{t("page.home.contact.country")}</span>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
