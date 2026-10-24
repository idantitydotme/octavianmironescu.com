import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import AppError from "#components/app/AppError.tsx";

export default function ErrorPage401() {
  useHead(() =>
    createSeoHead({
      title: "401 - Unauthorized",
      description: "Authentication is required to access this page.",
      noindex: true,
    }),
  );

  return (
    <>
      <AppError
        code={401}
        title="Authentication Required"
        description="Authentication is required to access this page."
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
