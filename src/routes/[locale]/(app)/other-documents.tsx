import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { t } from "@rimelight/i18n";

export default function OtherDocumentsPage() {
  useHead(() =>
    createSeoHead({
      title: t("app.text.other-documents"),
      description: t("app.text.additional-legal-documents-and-resources"),
    }),
  );

  return (
    <>
      <div class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">{t("page.other-documents.heading")}</h1>
        <p class="text-neutral-400">
          Additional documentation and legal resources will be published here.
        </p>
      </div>
    </>
  );
}
