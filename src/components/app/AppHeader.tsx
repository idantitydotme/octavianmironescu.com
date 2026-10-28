import { t } from "@rimelight/i18n";
import { RLButton, RLHeader, RLNavigationMenu } from "@rimelight/ui";

export default function Header() {
  const items = [
    { label: t("app.header.nav.home"), href: "/" },
    { label: t("app.header.nav.blog"), description: t("app.text.blog-stuff"), href: "/blog" },
    {
      label: t("app.header.nav.resume"),
      description: t("app.text.information-about-myself"),
      href: "/resume",
    },
    { label: t("app.header.nav.legal"), description: t("app.text.legal-stuff"), href: "/legal" },
    {
      label: t("app.header.nav.about"),
      description: t("app.text.information-about-the-website"),
      href: "/about",
    },
    {
      label: t("app.header.nav.contact"),
      description: t("app.text.get-in-touch"),
      href: "/contact",
    },
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
