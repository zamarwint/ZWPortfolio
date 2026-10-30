export type StrengthKind = "security" | "systems" | "clarity";

export default function StrengthIcon({ kind }: { kind: StrengthKind }) {
  if (kind === "security") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="strength-icon strength-icon--security size-6">
        <path className="strength-shield" d="M24 5 39 11v11c0 10-6.4 17-15 21C15.4 39 9 32 9 22V11l15-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path className="strength-check" d="m17 24 5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "systems") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="strength-icon strength-icon--systems size-6">
        <path className="strength-network-line" d="M12 14h12m0 0 12 10M24 14v20M12 34h12m0 0 12-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle className="strength-node strength-node--one" cx="11" cy="14" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.8" />
        <circle className="strength-node strength-node--two" cx="25" cy="14" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.8" />
        <circle className="strength-node strength-node--three" cx="37" cy="24" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.8" />
        <circle className="strength-node strength-node--four" cx="25" cy="34" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.8" />
        <circle className="strength-node strength-node--five" cx="11" cy="34" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="strength-icon strength-icon--clarity size-6">
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path className="clarity-ray clarity-ray--one" d="M24 5v6m0 26v6M5 24h6m26 0h6M10.6 10.6l4.2 4.2m18.4 18.4 4.2 4.2m0-26.8-4.2 4.2m-18.4 18.4-4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle className="clarity-center" cx="24" cy="24" r="2.2" fill="currentColor" />
    </svg>
  );
}
