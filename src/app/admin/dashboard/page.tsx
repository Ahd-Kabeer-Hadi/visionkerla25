export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <div className="min-h-[10vh] flex-1 flex py-5 px-5 rounded-xl bg-muted/50 md:min-h-min">
        <p> welcome back we&apos;re building some thing big!</p>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </main>
  );
}
