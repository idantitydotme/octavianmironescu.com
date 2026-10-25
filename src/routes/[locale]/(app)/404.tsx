import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import { RLError } from "@rimelight/ui";

export default function ErrorPage404() {
  useHead(() =>
    createSeoHead({
      title: "404 - Not Found",
      description: "Page has not been found.",
      noindex: true,
      is404: true,
    }),
  );

  return <RLError status={404} />;
}
