import { useHead } from "@solidjs/web";
import { createSeoHead } from "@rimelight/seo/head";
import AppError from "#components/app/AppError.tsx";

interface ErrorPage500Props {
  error?: Error | undefined;
}

export default function ErrorPage500(props: ErrorPage500Props) {
  useHead(() =>
    createSeoHead({
      title: "500 - Internal Server Error",
      description: "An unexpected error occurred on the server.",
      noindex: true,
    }),
  );

  return (<>

      <AppError
        code={500}
        title="Internal Server Error"
        description={
          props.error instanceof Error
            ? props.error.message
            : "An unexpected error occurred on the server."
        }
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
