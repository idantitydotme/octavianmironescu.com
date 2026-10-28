import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import type { Component } from "solid-js";
import { RLPageSection, RLCard } from "@rimelight/ui";
import ContactForm from "#components/app/ContactForm";
import { t } from "@rimelight/i18n";

export const ContactPage: Component = () => {
  useHead(() =>
    createSeoHead({
      title: t("page.contact.meta.title"),
      description: t("page.contact.meta.description"),
    }),
  );

  return (
    <>
      <RLPageSection
        variant="hero"
        reverse={true}
        orientation="horizontal"
        title={t("page.contact.hero.title")}
        description={t("page.contact.hero.description")}
      >
        <RLCard class="p-6 md:p-8 w-full">
          <ContactForm />
        </RLCard>
      </RLPageSection>
    </>
  );
};

export default ContactPage;
