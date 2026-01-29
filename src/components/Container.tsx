export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto px-3 py-6 sm:px-4 sm:py-8">
      {children}
    </div>
  );
}
