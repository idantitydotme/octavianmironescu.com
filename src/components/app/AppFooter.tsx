import { getCurrentLocale, getLocaleUrl, getLocales } from "@rimelight/i18n";
import { RLLogo } from "@rimelight/ui";
import { useLocation } from "@solidjs/router";
import { t } from "@rimelight/i18n";

const languageLabels: Record<string, string> = {
  en: "English",
  ro: "Română",
  pt: "Português",
};

interface SocialLink {
  icon: string;
  href: string;
  ariaLabel: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

interface ThemeOption {
  label: string;
  value: string;
  icon: string;
}

interface LanguageOption {
  code: string;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: "i-mdi-instagram",
    href: "https://www.instagram.com/notoctamusic/",
    ariaLabel: "Instagram",
  },
  {
    icon: "i-mdi-discord",
    href: "https://discord.com/users/402152425756295178",
    ariaLabel: "Discord",
  },
  {
    icon: "i-mdi-spotify",
    href: "https://open.spotify.com/user/goldydalion?si=598f3277e5b54442",
    ariaLabel: "Spotify",
  },
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
];

export default function Footer() {
  const themeOptions: ThemeOption[] = [
    {
      get label() {
        return t("app.text.system");
      },
      value: "system",
      icon: "i-lucide-laptop",
    },
    {
      get label() {
        return t("app.text.white");
      },
      value: "white",
      icon: "i-mdi:white-balance-sunny",
    },
    {
      get label() {
        return t("app.text.dark");
      },
      value: "dark",
      icon: "i-mdi:weather-night",
    },
  ];
  const today = new Date();
  const location = useLocation();

  const currentPath = () => location.pathname.replace(/^\/[^/]+/, "") || "/";

  const footerLinkColumns = (): FooterLinkColumn[] => [
    {
      title: t("app.text.resources"),
      links: [
        {
          label: t("app.text.branding"),
          href: getLocaleUrl("/branding"),
        },
      ],
    },
    {
      title: t("app.text.legal"),
      links: [
        {
          label: t("app.text.privacy-policy"),
          href: getLocaleUrl("/privacy-policy"),
        },
        {
          label: t("app.text.other-documents"),
          href: getLocaleUrl("/other-documents"),
        },
      ],
    },
  ];

  const languageOptions = (): LanguageOption[] =>
    getLocales().map((lang: string) => ({
      code: lang,
      label: languageLabels[lang] || lang,
      href: getLocaleUrl(currentPath(), lang),
    }));

  return (
    <footer class="w-full bg-black text-gray border-t border-green-900">
      <div class="px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Section: Logo, Tagline, Copyright */}
        <div class="flex flex-col gap-3 items-center md:items-start text-center md:text-left order-last md:order-1">
          <a
            href={getLocaleUrl("/")}
            class="inline-flex items-center"
            aria-label={t("app.footer.home-aria")}
          >
            <RLLogo variant="logotype" class="h-8 w-auto" mode="white" />
          </a>
          <p class="text-sm text-white font-medium">{t("app.footer.tagline")}</p>
          <p class="text-xs text-gray">© {today.getFullYear()} octavianmironescu.com</p>
        </div>

        {/* Center Section: Resources & Legal */}
        <div class="flex flex-col md:flex-row items-center md:items-start gap-12 text-sm order-2 md:order-2">
          {footerLinkColumns().map((column) => (
            <div class="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <h2 class="font-bold text-white text-base m-0">{column.title}</h2>
              <div class="flex flex-col gap-2 items-center md:items-start">
                {column.links.map((link) => (
                  <a href={link.href} class="text-gray hover:text-white transition-colors block">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div class="flex flex-col items-center md:items-end gap-4 order-first md:order-3">
          <div class="relative inline-flex items-center">
            <span
              id="theme-select-icon"
              class="absolute left-3 text-green-600 i-lucide-laptop size-4"
            />
            <select
              id="theme-select"
              aria-label={t("app.footer.theme-selector")}
              class="cursor-pointer appearance-auto rounded-lg border border-green-900 bg-black py-1.5 pl-9 pr-8 text-sm font-medium text-gray hover:text-white hover:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors"
            >
              {themeOptions.map((option) => (
                <option
                  value={option.value}
                  class="bg-black text-gray"
                  selected={option.value === "system"}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span class="pointer-events-none absolute right-2.5 text-gray i-lucide-chevron-down size-4" />
          </div>

          <div class="relative inline-flex items-center">
            <span class="pointer-events-none absolute left-3 text-green-600 i-mdi-translate size-4" />
            <select
              id="footer-language-select"
              aria-label={t("app.footer.language-selector")}
              onChange={(e) => {
                window.location.href = e.currentTarget.value;
              }}
              class="cursor-pointer appearance-none rounded-lg border border-green-900 bg-black py-1.5 pl-9 pr-8 text-sm font-medium text-gray hover:text-white hover:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors"
            >
              {languageOptions().map((option) => (
                <option
                  value={option.href}
                  selected={option.code === getCurrentLocale()}
                  class="bg-black text-gray"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span class="pointer-events-none absolute right-2.5 text-gray i-lucide-chevron-down size-4" />
          </div>

          <ul class="flex flex-row items-center gap-4 list-none p-0 m-0 mt-1">
            {socialLinks.map((socialLink) => (
              <li aria-label={socialLink.ariaLabel}>
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.ariaLabel}
                  class="flex items-center justify-center text-gray hover:text-white transition-colors"
                >
                  <span class={`text-xl ${socialLink.icon}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
