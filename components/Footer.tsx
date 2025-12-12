export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full p-4 bg-(--color-muted) border-t border-(--color-primary) mt-auto">
      <p className="text-center text-sm text-var(--color-fg)">
        © {year} Radike. All rights reserved.
      </p>
    </footer>
  );
}
