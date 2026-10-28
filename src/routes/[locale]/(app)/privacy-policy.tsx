import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { t } from "@rimelight/i18n";

export default function PrivacyPolicyPage() {
  useHead(() =>
    createSeoHead({
      title: t("app.text.privacy-policy"),
      description: t("app.text.privacy-policy-for-octavianmironescu-com"),
    }),
  );

  return (
    <>
      <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">{t("page.privacy-policy.heading")}</h1>
        <p class="text-neutral-400">
          This Privacy Policy outlines how your information is collected, used, and protected.
        </p>
      </div>
    </>
  );
}
