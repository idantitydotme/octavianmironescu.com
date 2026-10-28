import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { t } from "@rimelight/i18n";

export default function BrandingPage() {
  useHead(() =>
    createSeoHead({
      title: t("app.text.branding"),
      description: t("app.text.branding-guidelines-and-assets"),
    }),
  );

  return (
    <>
      <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">{t("page.branding.heading")}</h1>
        <p class="text-neutral-400">
          Brand guidelines, assets, and resources will be available here soon.
        </p>
      </div>
    </>
  );
}
