export default function Loading() {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4  w-screen">
          <div className="h-24 bg-slate-200 rounded col-span-2"></div>
          <div className="h-12 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded"></div>
        <div className="mt-28 grid grid-cols-2 gap-4">
          <div className="w-[400px] h-[400px] bg-slate-200"></div>
          <div className="w-[400px] h-[400px] bg-slate-200"></div>
          <div className="w-[400px] h-[400px] bg-slate-200"></div>
          <div className="w-[400px] h-[400px] bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}
