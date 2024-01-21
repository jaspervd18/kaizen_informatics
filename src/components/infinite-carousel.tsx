export async function InfiniteCarousel() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-screen-lg overflow-hidden">
        {/* <div className="pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-white dark:from-black to-transparent" />
        <div className="pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-white dark:from-black to-transparent" />
        <div className="pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-white dark:from-black to-transparent" />
        <div className="pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-black to-transparent" /> */}

        <div className="mx-auto grid h-[250px] w-[300px] animate-skew-scroll grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2">
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Vooruitgang</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Zoek inspiratie</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Maatwerkoplossingen</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Digitale aanwezigheid</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Kaizen</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Gebruiksvriendelijk ontwerp</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Maak een afspraak</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Startups, klein bedrijf,...</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Laat je inspireren</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Ondernemers, individuen,...</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Evolve</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Betaalbare oplossingen</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Continue verbetering</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Creatieve oplossingen</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 flex-none text-violet-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-gray-600">Maak een afspraak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
