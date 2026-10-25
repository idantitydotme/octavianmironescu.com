import { t } from "@rimelight/i18n";
import { RLButton, RLHeader, RLNavigationMenu } from "@rimelight/ui";

export default function Header() {
  const items = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.blog"), description: "Blog stuff", href: "/blog" },
    { label: t("nav.resume"), description: "Information about myself", href: "/resume" },
    { label: t("nav.legal"), description: "Legal Stuff", href: "/legal" },
    { label: t("nav.about"), description: "Information about the website", href: "/about" },
  ];

  return (
    <RLHeader
      hideOnScroll={true}
      fixed={true}
      left={
        <h2 class="m-0 text-sm sm:text-base md:text-lg">
          <a href="/" class="no-underline">
            Octavian Mironescu
          </a>
        </h2>
      }
      center={
        <div class="internal-links flex items-center">
          <RLNavigationMenu items={items} />
        </div>
      }
      right={
        <div class="social-links flex max-sm:hidden">
          <RLButton
            href="https://m.webtoo.ls/@astro"
            leadingIcon="i-logos-astro-icon"
            variant="ghost"
            size="xl"
          />
          <RLButton
            href="https://twitter.com/astrodotbuild"
            leadingIcon="i-logos-x"
            variant="ghost"
            size="xl"
          />
          <RLButton
            href="https://github.com/withastro/astro"
            leadingIcon="i-logos-github-icon"
            variant="ghost"
            size="xl"
          />
        </div>
      }
    />
  );
}
