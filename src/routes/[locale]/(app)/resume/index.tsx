import { type Component, For, Show } from "solid-js";
import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { t } from "@rimelight/i18n";
import {
  RLContainer,
  RLPage,
  RLPageSection,
  RLAvatar,
  RLImage,
  RLButton,
  RLBadge,
  RLIcon,
  RLProgress,
  RLTimeline,
  RLLink,
  type RLButtonProps,
} from "@rimelight/ui";

export interface LanguageSkill {
  nameKey: string;
  levelKey: string;
  score: number;
}

export interface SkillItem {
  icon: string;
  title: string;
  description: string;
}

export interface TechItem {
  label: string;
  icon: string;
  href: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface ExperienceItem {
  role: string;
  company?: string;
  period: string;
  location?: string;
  summary?: string;
  responsibilities?: string[];
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialId?: string;
}

export interface ResumeProject {
  name: string;
  role?: string;
  period: string;
  href?: string;
  summary?: string;
  tags?: string[];
}

const AVATAR_SRC = "https://cdn.octavianmironescu.com/images/image0.jpg";

export const ResumePage: Component = () => {
  const age = () => {
    const d = new Date();
    return (
      d.getFullYear() -
      1999 -
      (d.getMonth() < 7 || (d.getMonth() === 7 && d.getDate() < 10) ? 1 : 0)
    );
  };

  const socialLinks = () => [
    {
      icon: "i-logos-linkedin-icon",
      href: "https://www.linkedin.com/in/octavian-mironescu-a605b921a/",
      ariaLabel: "LinkedIn",
    },
    {
      icon: "i-logos-github-icon",
      href: "https://github.com/MironescuOctavian",
      ariaLabel: "GitHub",
    },
  ];

  const aboutDetails = () => [
    {
      label: t("page.resume.about.gender.label"),
      value: t("page.resume.about.gender.value"),
    },
    {
      label: t("page.resume.about.pronouns.label"),
      value: t("page.resume.about.pronouns.value"),
    },
    {
      label: t("page.resume.about.nationality.label"),
      value: t("page.resume.about.nationality.value"),
    },
    {
      label: t("page.resume.about.age.label"),
      value: `${age()}`,
    },
  ];

  const languages: readonly LanguageSkill[] = [
    { nameKey: "english", levelKey: "fluent", score: 100 },
    { nameKey: "romanian", levelKey: "fluent", score: 100 },
    { nameKey: "german", levelKey: "basic", score: 25 },
  ];

  const heroLinks = (): RLButtonProps[] => [
    {
      label: t("page.resume.hero.hire"),
      href: "/contact",
    },
    {
      variant: "outline",
      label: t("app.text.github"),
      href: "https://github.com/MironescuOctavian",
      leadingIcon: "i-lucide-github",
    },
  ];

  const skills = (): SkillItem[] => [
    {
      icon: "i-lucide-coffee",
      title: t("page.resume.skills.java.title"),
      description: t("page.resume.skills.java.description"),
    },
    {
      icon: "i-lucide-code-2",
      title: t("page.resume.skills.web.title"),
      description: t("page.resume.skills.web.description"),
    },
    {
      icon: "i-lucide-palette",
      title: t("page.resume.skills.design.title"),
      description: t("page.resume.skills.design.description"),
    },
  ];

  const techCategories = (): TechCategory[] => [
    {
      title: t("page.resume.tech.languages"),
      items: [
        { label: t("app.text.java"), icon: "i-logos-java", href: "https://www.java.com/" },
        {
          label: t("app.text.spring-boot"),
          icon: "i-logos-spring-icon",
          href: "https://spring.io/projects/spring-boot",
        },
        {
          label: t("app.text.typescript"),
          icon: "i-logos-typescript-icon",
          href: "https://www.typescriptlang.org/",
        },
        { label: t("app.text.vue"), icon: "i-logos-vue", href: "https://vuejs.org/" },
        {
          label: t("app.text.solidjs"),
          icon: "i-logos-solidjs-icon",
          href: "https://www.solidjs.com/",
        },
        { label: t("app.text.unocss"), icon: "i-logos-unocss", href: "https://unocss.dev/" },
      ],
    },
    {
      title: t("page.resume.tech.environment"),
      items: [
        {
          label: t("app.text.intellij"),
          icon: "i-logos-intellij-idea",
          href: "https://www.jetbrains.com/idea/",
        },
        {
          label: t("app.text.visual-studio-code"),
          icon: "i-logos-visual-studio-code",
          href: "https://code.visualstudio.com/",
        },
        {
          label: t("app.text.webstorm"),
          icon: "i-logos-webstorm",
          href: "https://www.jetbrains.com/webstorm/",
        },
      ],
    },
    {
      title: t("page.resume.tech.build"),
      items: [
        { label: t("app.text.gradle"), icon: "i-logos-gradle", href: "https://gradle.org/" },
        { label: t("app.text.vite-plus"), icon: "i-logos-vitejs", href: "https://viteplus.dev/" },
        { label: "pnpm", icon: "i-logos-pnpm", href: "https://pnpm.io/" },
      ],
    },
    {
      title: t("page.resume.tech.deployment"),
      items: [
        {
          label: t("app.text.docker"),
          icon: "i-logos-docker-icon",
          href: "https://www.docker.com/",
        },
        {
          label: t("app.text.cloudflare"),
          icon: "i-logos-cloudflare-icon",
          href: "https://cloudflare.com/",
        },
      ],
    },
  ];

  const experiences = () => t.raw<ExperienceItem[]>("page.resume.experience.items", []);
  const education = () => t.raw<EducationItem[]>("page.resume.education.items", []);
  const projects = () => t.raw<ResumeProject[]>("page.resume.projects.items", []);
  const certifications = () => t.raw<CertificationItem[]>("page.resume.certifications.items", []);

  useHead(() =>
    createSeoHead({
      title: t("page.resume.meta.title"),
      description: t("page.resume.meta.description"),
    }),
  );

  return (
    <>
      <RLContainer class="max-w-none">
        <RLPage>
          <div class="flex flex-col md:flex-row gap-xl">
            {/* Page Body */}
            <div class="flex flex-col gap-xl py-8 md:py-16 flex-1">
              <RLPageSection
                variant="hero"
                orientation="horizontal"
                title={t("page.resume.hero.title")}
                description={t("page.resume.hero.description")}
                links={heroLinks()}
              >
                <RLImage
                  src={AVATAR_SRC}
                  alt={t("page.resume.sidebar.name")}
                  width={800}
                  height={800}
                />
              </RLPageSection>

              {/* Skills Section */}
              <section aria-labelledby="resume-skills-heading" class="flex flex-col gap-md">
                <header class="flex flex-col gap-xs">
                  <h2 id="resume-skills-heading" class="text-3xl font-bold">
                    {t("page.resume.skills.heading")}
                  </h2>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>
                <ul class="grid grid-cols-1 md:grid-cols-3 gap-lg">
                  <For each={skills()}>
                    {(skill) => (
                      <li>
                        <div class="flex items-center gap-sm">
                          <RLIcon name={skill.icon} size="lg" class="text-primary-500" />
                          <h3 class="text-lg font-bold">{skill.title}</h3>
                        </div>
                        <p class="text-sm text-neutral-500">{skill.description}</p>
                      </li>
                    )}
                  </For>
                </ul>
              </section>

              {/* Technologies & Tools Section */}
              <section aria-labelledby="resume-tech-heading" class="flex flex-col gap-md">
                <header class="flex flex-col gap-xs">
                  <h2 id="resume-tech-heading" class="text-3xl font-bold">
                    {t("page.resume.tech.heading")}
                  </h2>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>

                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                  <For each={techCategories()}>
                    {(category) => (
                      <li class="flex flex-col gap-md">
                        <h3 class="text-sm font-bold">{category.title}</h3>
                        <ul class="flex flex-col gap-xs w-full">
                          <For each={category.items}>
                            {(item) => (
                              <li class="w-full">
                                <RLButton
                                  block
                                  justify="start"
                                  variant="ghost"
                                  color="neutral"
                                  leadingIcon={item.icon}
                                  href={item.href}
                                  label={item.label}
                                  class="text-sm"
                                />
                              </li>
                            )}
                          </For>
                        </ul>
                      </li>
                    )}
                  </For>
                </ul>
              </section>

              {/* Experience Section */}
              <section aria-labelledby="resume-experience-heading" class="flex flex-col gap-md">
                <header class="flex flex-col gap-xs">
                  <h2 id="resume-experience-heading" class="text-3xl font-bold">
                    {t("page.resume.experience.heading")}
                  </h2>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>
                <RLTimeline
                  orientation="vertical"
                  size="xl"
                  class="w-full"
                  items={[...experiences()].reverse().map((exp) => ({
                    date: exp.period,
                    title: exp.company ? `${exp.role} @ ${exp.company}` : exp.role,
                    icon: "i-lucide-briefcase",
                    exp,
                  }))}
                >
                  {(ctx) => {
                    const exp =
                      (ctx as { exp?: ExperienceItem }).exp ?? (ctx as unknown as ExperienceItem);
                    return (
                      <div class="flex flex-col gap-2">
                        <Show when={exp.location}>
                          <p class="text-sm text-neutral-500">{exp.location}</p>
                        </Show>
                        <Show when={exp.tags && exp.tags.length > 0}>
                          <div class="flex flex-wrap gap-1.5">
                            <For each={exp.tags}>
                              {(tag) => <RLBadge variant="soft">{tag}</RLBadge>}
                            </For>
                          </div>
                        </Show>
                        <Show when={exp.summary}>
                          <div>
                            <span class="text-sm font-bold text-neutral-500 block">
                              {t("page.resume.experience.summary")}:
                            </span>
                            <p class="text-sm text-neutral-500">{exp.summary}</p>
                          </div>
                        </Show>
                        <Show when={exp.responsibilities && exp.responsibilities.length > 0}>
                          <div>
                            <span class="text-sm font-bold text-neutral-500 block">
                              {t("page.resume.experience.responsibilities")}:
                            </span>
                            <ul class="flex flex-col gap-sm pl-lg list-disc text-sm text-neutral-500">
                              <For each={exp.responsibilities}>{(resp) => <li>{resp}</li>}</For>
                            </ul>
                          </div>
                        </Show>
                      </div>
                    );
                  }}
                </RLTimeline>
              </section>

              {/* Education Section */}
              <section aria-labelledby="resume-education-heading" class="flex flex-col gap-md">
                <header class="flex flex-col gap-xs">
                  <h2 id="resume-education-heading" class="text-3xl font-bold">
                    {t("page.resume.education.heading")}
                  </h2>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>
                <RLTimeline
                  orientation="vertical"
                  size="xl"
                  items={[...education()].reverse().map((edu) => ({
                    date: edu.period,
                    title: edu.degree,
                    description: edu.school,
                    icon: "i-lucide-graduation-cap",
                  }))}
                />
              </section>

              {/* Projects Section */}
              <section aria-labelledby="resume-projects-heading" class="flex flex-col gap-md">
                <header class="flex flex-col gap-xs">
                  <h2 id="resume-projects-heading" class="text-3xl font-bold">
                    {t("page.resume.projects.heading")}
                  </h2>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md md:gap-lg">
                  <For each={projects()}>
                    {(project) => (
                      <article class="flex flex-col gap-sm">
                        <header class="flex items-start justify-between gap-sm">
                          <div class="flex flex-col gap-0.5 min-w-0">
                            <h3 class="text-base font-bold">{project.name}</h3>
                            <div class="flex flex-wrap items-center gap-x-1.5 text-xs text-neutral-500">
                              <time datetime={project.period}>{project.period}</time>
                              <Show when={project.role}>
                                <span aria-hidden="true">·</span>
                                <span>{project.role}</span>
                              </Show>
                            </div>
                          </div>

                          <Show when={project.href}>
                            <RLButton
                              size="sm"
                              variant="soft"
                              href={project.href}
                              label={t("page.resume.projects.view")}
                              aria-label={`${t("page.resume.projects.view")}: ${project.name}`}
                              trailingIcon="i-lucide-external-link"
                              class="shrink-0"
                            />
                          </Show>
                        </header>

                        <Show when={project.tags && project.tags.length > 0}>
                          <div class="flex flex-wrap gap-1.5">
                            <For each={project.tags}>
                              {(tag) => (
                                <RLBadge size="sm" variant="soft">
                                  {tag}
                                </RLBadge>
                              )}
                            </For>
                          </div>
                        </Show>

                        <Show when={project.summary}>
                          <p class="text-sm text-neutral-500">{project.summary}</p>
                        </Show>
                      </article>
                    )}
                  </For>
                </div>
              </section>

              {/* Certifications Section */}
              <Show when={certifications().length > 0}>
                <section
                  aria-labelledby="resume-certifications-heading"
                  class="flex flex-col gap-md"
                >
                  <header class="flex flex-col gap-xs">
                    <h2 id="resume-certifications-heading" class="text-3xl font-bold">
                      {t("page.resume.certifications.heading")}
                    </h2>
                    <hr aria-hidden="true" class="border-neutral-500" />
                  </header>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-lg">
                    <For each={certifications()}>
                      {(cert) => (
                        <li class="flex flex-col">
                          <strong class="text-lg font-bold">{cert.title}</strong>
                          <span class="text-sm text-neutral-500">{cert.issuer}</span>
                          <Show when={cert.credentialId}>
                            <code class="block text-xs text-neutral-500 break-all">
                              {t("page.resume.certifications.id")}: {cert.credentialId}
                            </code>
                          </Show>
                        </li>
                      )}
                    </For>
                  </ul>
                </section>
              </Show>
            </div>

            {/* Left Sidebar */}
            <aside
              aria-label={t("page.resume.sidebar.aria")}
              class="order-first flex flex-col w-full gap-xl py-8 md:py-16 md:w-80 shrink-0 border-b md:border-b-0 md:border-r border-primary-500 md:pr-8"
            >
              {/* Introduction Section */}
              <section aria-labelledby="resume-sidebar-name" class="flex flex-col items-center">
                <header class="flex flex-col gap-xs items-center">
                  <RLAvatar
                    src={AVATAR_SRC}
                    alt={t("page.resume.sidebar.name")}
                    class="!size-40 border-4 border-primary-500 shadow-xl"
                  />

                  <div class="text-center">
                    <h2 id="resume-sidebar-name" class="text-3xl font-bold">
                      {t("page.resume.sidebar.name")}
                    </h2>
                    <p class="text-md text-neutral-500">{t("page.resume.sidebar.title")}</p>
                  </div>
                </header>

                {/* Socials */}
                <ul class="flex gap-sm justify-center w-full">
                  <For each={socialLinks()}>
                    {(socialLink) => (
                      <li>
                        <RLButton
                          size="lg"
                          variant="ghost"
                          leadingIcon={`${socialLink.icon}?mask text-white hover:text-primary-500`}
                          href={socialLink.href}
                          aria-label={socialLink.ariaLabel}
                        />
                      </li>
                    )}
                  </For>
                </ul>
              </section>

              {/* About Me Section */}
              <section aria-labelledby="resume-about-heading" class="flex flex-col gap-sm">
                <header class="flex flex-col gap-2">
                  <div class="flex flex-row items-center gap-2">
                    <RLIcon name="i-lucide-user" class="text-sm" />
                    <h3 id="resume-about-heading" class="text-md font-bold">
                      {t("page.resume.about.heading")}
                    </h3>
                  </div>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>

                <dl class="flex flex-col gap-sm text-sm text-neutral-500">
                  <For each={aboutDetails()}>
                    {(aboutDetail) => (
                      <div class="flex justify-between">
                        <dt>{aboutDetail.label}</dt>
                        <dd>{aboutDetail.value}</dd>
                      </div>
                    )}
                  </For>
                  <div class="flex justify-between items-center pb-1.5">
                    <dt>{t("page.resume.about.location.label")}</dt>
                    <dd>
                      <RLLink
                        leadingIcon="i-lucide-map-pin"
                        label={t("page.resume.about.location.value")}
                        aria-label={`${t("page.resume.about.location.label")}: ${t("page.resume.about.location.value")}`}
                        href="https://en.wikipedia.org/wiki/Bucharest"
                        class="text-sm hover:text-primary-400"
                      />
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Languages Section */}
              <section aria-labelledby="resume-languages-heading" class="flex flex-col gap-sm">
                <header class="flex flex-col gap-2">
                  <div class="flex flex-row items-center gap-2">
                    <RLIcon name="i-lucide-languages" class="text-sm" />
                    <h3 id="resume-languages-heading" class="text-md font-bold">
                      {t("page.resume.languages.heading")}
                    </h3>
                  </div>
                  <hr aria-hidden="true" class="border-neutral-500" />
                </header>
                <dl class="flex flex-col gap-sm">
                  <For each={languages}>
                    {(language) => (
                      <div class="grid grid-cols-[1fr_auto] gap-y-1 items-center">
                        <dt class="text-sm">{t(`page.resume.languages.${language.nameKey}`)}</dt>
                        <dd class="text-sm text-neutral-500 text-end">
                          {t(`page.resume.languages.${language.levelKey}`)}
                        </dd>
                        <dd class="col-span-2">
                          <RLProgress
                            size="sm"
                            value={language.score}
                            aria-label={`${t(`page.resume.languages.${language.nameKey}`)}: ${t(`page.resume.languages.${language.levelKey}`)}`}
                          />
                        </dd>
                      </div>
                    )}
                  </For>
                </dl>
              </section>
            </aside>
          </div>
        </RLPage>
      </RLContainer>
    </>
  );
};

export default ResumePage;
