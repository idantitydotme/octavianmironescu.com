import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import AppError from "#components/app/AppError.tsx";

export default function ErrorPage404() {
  useHead(() =>
    createSeoHead({
      title: "404 - Not Found",
      description: "Page has not been found.",
      noindex: true,
      is404: true,
    }),
  );

  return (
    <>
      <AppError
        code={404}
        title="Page Not Found"
        description="Page has not been found."
        actions={[
          {
            label: "Go to Home Page",
            href: "/",
            variant: "solid",
            color: "primary",
            icon: "i-lucide-home",
          },
        ]}
      />
    </>
  );
}
