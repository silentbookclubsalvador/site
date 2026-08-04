import { useState } from "react";

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

  const message =
    `[${subject}]\n\n` +
    fields
      .map((f) => `${f.label}: ${values[f.name]?.trim() || "—"}`)
      .join("\n");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      /* clipboard indisponível — seguimos mesmo assim */
    }
    setSent(true);
    window.open("https://ig.me/m/sbc.salvador", "_blank", "noreferrer");
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
          Copiamos sua mensagem e abrimos o direct do{" "}
          <span className="text-foreground">@sbc.salvador</span> — é só colar e
          enviar. Se a aba não abriu,{" "}
          <a
            href="https://ig.me/m/sbc.salvador"
            target="_blank"
            rel="noreferrer"
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
