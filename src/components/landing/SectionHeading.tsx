interface SectionHeadingProps {
  label: string;
  title: string;
  body: string;
}

export function SectionHeading({ label, title, body }: SectionHeadingProps) {
  return (
    <div className="section__head">
      <span className="section__label">{label}</span>
      <h2 className="section__title">{title}</h2>
      <p className="section__body">{body}</p>
    </div>
  );
}
