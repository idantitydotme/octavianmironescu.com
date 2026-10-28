import { type Component, For } from "solid-js";
import {
  RLHeader,
  RLLogo,
  RLNavigationMenu,
  RLButton,
  RLSlideover,
  type RLButtonProps,
} from "@rimelight/ui";
import { t } from "@rimelight/i18n";

export interface AppHeaderProps {
  stackIndex?: number;
}

export const AppHeader: Component<AppHeaderProps> = (props) => {
  const leftLinks = () => [
    {
      label: t("app.header.nav.blog"),
      to: "/blog",
    },
    {
      label: t("app.header.nav.about"),
      to: "/about",
    },
  ];

  const rightLinks = () => [
    {
      label: t("app.header.nav.resume"),
      to: "/resume",
    },
    {
      label: t("app.header.nav.contact"),
      to: "/contact",
    },
  ];

  const socials = (): RLButtonProps[] => [
    {
      variant: "ghost",
      leadingIcon: "i-logos-instagram-icon?mask text-white group-hover:text-primary-500",
      href: "https://www.instagram.com/notoctamusic/",
    },
    {
      variant: "ghost",
      leadingIcon: "i-logos-github-icon?mask text-white group-hover:text-primary-500",
      href: "https://github.com/MironescuOctavian",
    },
    {
      variant: "ghost",
      leadingIcon: "i-logos-linkedin-icon?mask text-white group-hover:text-primary-500",
      href: "https://www.linkedin.com/in/octavian-mironescu-a605b921a/",
    },
  ];

  const allMobileLinks = () => [
    { label: t("app.header.nav.home"), to: "/" },
    ...leftLinks(),
    ...rightLinks(),
    { label: t("app.header.nav.legal"), to: "/legal" },
  ];

  return (
    <RLHeader
      contain={false}
      fixed={true}
      stackIndex={props.stackIndex ?? 1}
      data-theme="dark"
      class="bg-black"
      left={
        <div class="flex items-center gap-md">
          <a href="/" class="hidden md:flex items-center">
            <RLLogo variant="logotype" class="h-6 w-auto" mode="white" />
          </a>

          <div class="hidden md:flex flex-row gap-md items-center">
            <RLNavigationMenu
              items={leftLinks()}
              variant="link"
              theme="flat"
              ui={{
                link: "text-white transition-colors duration-200 hover:text-primary-400 data-[state=open]:text-primary-400 aria-[current]:text-primary-400",
              }}
            />
          </div>

          <div class="block md:hidden">
            <RLSlideover
              side="left"
              title={t("app.header.menu.title")}
              trigger={
                <RLButton
                  color="neutral"
                  variant="ghost"
                  rounded={true}
                  leadingIcon="i-lucide-menu"
                  class="!text-white"
                  aria-label={t("app.header.menu.open")}
                />
              }
            >
              <RLNavigationMenu
                items={allMobileLinks()}
                orientation="vertical"
                variant="link"
                ui={{
                  link: "text-black dark:text-white flex justify-start items-center w-full text-left py-2 text-lg transition-colors duration-200 hover:text-primary-400 data-[state=open]:text-primary-400 aria-[current]:text-primary-400",
                }}
              />
            </RLSlideover>
          </div>
        </div>
      }
      center={
        <a href="/" class="block md:hidden">
          <RLLogo variant="logomark" class="h-10 w-auto" mode="white" />
        </a>
      }
      right={
        <div class="flex items-center gap-md">
          <div class="hidden md:flex flex-row gap-md items-center">
            <RLNavigationMenu
              items={rightLinks()}
              variant="link"
              theme="flat"
              ui={{
                link: "text-white transition-colors duration-200 hover:text-primary-400 data-[state=open]:text-primary-400 aria-[current]:text-primary-400",
              }}
            />
            <For each={socials()}>{(buttonProps) => <RLButton {...buttonProps} />}</For>
          </div>

          <div class="block md:hidden">
            <RLSlideover
              side="right"
              title={t("app.header.actions.title")}
              trigger={
                <RLButton
                  color="neutral"
                  variant="ghost"
                  rounded={true}
                  leadingIcon="i-lucide-ellipsis-vertical"
                  class="!text-white"
                  aria-label={t("app.header.actions.open")}
                />
              }
            >
              <div class="flex flex-col gap-md">
                <For each={socials()}>
                  {(buttonProps) => <RLButton {...buttonProps} block={true} />}
                </For>
              </div>
            </RLSlideover>
          </div>
        </div>
      }
    />
  );
};

export default AppHeader;
