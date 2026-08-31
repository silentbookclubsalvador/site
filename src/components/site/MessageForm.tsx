import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "input" | "textarea";
  required?: boolean;
};

export function MessageForm({
  fields,
  subject,
  submitLabel,
}: {
  fields: Field[];
  subject: string;
  submitLabel: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const body =
    fields
      .map((f) => `${f.label}: ${values[f.name]?.trim() || "—"}`)
      .join("\n") + `\n\n— Enviado pelo site do Silent Book Club Salvador`;

  const mailtoHref =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(`[${subject}] ${values["nome"]?.trim() || "Site SBC Salvador"}`)}` +
    `&body=${encodeURIComponent(body)}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    window.location.href = mailtoHref;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((f) => (
        <div key={f.name}>
          <label
            htmlFor={f.name}
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {f.label}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              required={f.required}
              rows={5}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.name]: e.target.value }))
              }
              className="mt-2 w-full resize-y rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent"
            />
          ) : (
            <input
              id={f.name}
              required={f.required}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.name]: e.target.value }))
              }
              className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-accent"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-accent"
      >
        {submitLabel}
      </button>

      {sent && (
        <p className="rounded-sm border border-accent/30 bg-accent/5 p-4 text-sm text-muted-foreground">
          Abrimos seu aplicativo de e-mail com a mensagem pronta para{" "}
          <span className="text-foreground">{CONTACT_EMAIL}</span> — é só
          enviar. Se nada abriu,{" "}
          <a
            href={mailtoHref}
            className="underline underline-offset-4"
          >
            clique aqui
          </a>
          .
        </p>
      )}
    </form>
  );
}
