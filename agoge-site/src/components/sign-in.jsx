export default function SignIn() {
  return (
    <div className="bg-gray-900 isolated w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="max-w-md w-full mx-auto px-8 sm:px-6 lg:px-8">
        <img
          src="/Logotyp-Agoge-white.png"
          className="w-42 h-auto mx-auto mb-6"
          alt="Agoge Logo"
        />
        <h2 className="text-2xl font-extrabold text-white text-center mb-10">Sign in to your account</h2>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <div className="mt-2 justify-center text-right items-baseline">
              <input
                placeholder="Email address"
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full py-4 rounded-md bg-white px-3  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-yellow-500 hover:text-yellow-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md py-3 bg-white px-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold text-yellow-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}