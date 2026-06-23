function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-slate-50 flex items-center justify-center">
      <main className="max-w-lg w-full mx-4">
        <section className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8">
          <header className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold"></div>
            <h1 className="text-2xl font-semibold text-slate-800">
              Strava Stats
            </h1>
          </header>

          <p className="text-slate-600 mb-6">
            This site is a work in progress!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
