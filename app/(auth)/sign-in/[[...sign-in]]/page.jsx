import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="auth-shell mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
          <div className="hidden md:flex relative rounded-2xl p-8 overflow-hidden auth-left-art">
            <div className="absolute -left-16 -top-8 w-80 h-80 bg-emerald-300 rounded-full opacity-70 transform rotate-12 blur-2xl" />
            <div className="absolute right-6 bottom-6 w-40 h-40 bg-emerald-400 rounded-xl opacity-80 rotate-6" />
            <div className="z-10 self-center mx-auto text-center w-full px-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-emerald-900">Welcome to Ai Mock Interview!</h2>
                <p className="mt-2 text-emerald-700">Pick up where you left off — view progress, continue practice sessions, and track improvements.</p>
              </div>

              <div className="flex justify-center gap-6 mt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src="/public/file.svg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src="/public/globe.svg" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src="/public/window.svg" alt="avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md auth-card shadow-lg p-8 h-full flex flex-col justify-center">
              <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-emerald-900">Get Started</h1>
                <p className="text-sm text-gray-500 mt-1">Already have account? <a href="/sign-in" className="text-emerald-600">Sign In</a></p>
              </div>

              <div className="space-y-4">
                <SignIn routing="path" path="/sign-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
