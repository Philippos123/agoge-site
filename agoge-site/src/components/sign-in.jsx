import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn() {
  // State för att hålla reda på användarens inloggningsinformation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // För att visa eventuella felmeddelanden
  const [loading, setLoading] = useState(false); // För att visa laddningsindikator

  // Hantera ändringar i formulärfälten
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Hantera formulärsändning
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Skapa request-body för inloggning
    const data = {
      email: email,
      password: password,
    };

    try {
      // Skicka POST-förfrågan till ditt Django-backend (ändra URL till din serveradress)
      const response = await axios.post('http://127.0.0.1:8000/api/token/', data); // API för att få token

      // Spara token i localStorage
      localStorage.setItem('access_token', response.data.access);

      // När användaren är inloggad, skicka token med förfrågningar till andra skyddade API-endpoints
      const token = localStorage.getItem('access_token');
      
      // Gör en GET-förfrågan till skyddad API-endpoint, t.ex. /api/user/
      const userResponse = await axios.get('http://127.0.0.1:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${token}`,  // Skickar token i Authorization-header
        },
      });

      // Vid framgång, omdirigera eller gör något mer
      console.log(userResponse.data);  // Hantera användardata

      window.location.href = 'http://localhost:5173/'; // Exempel på omdirigering efter lyckad inloggning

    } catch (err) {
      // Hantera eventuella fel
      setError('Felaktiga inloggningsuppgifter eller API-åtkomstproblem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 isolated h-full w-[100vw] lg:py-30 sm:py-10 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-white text-center mb-10 uppercase pt-10 ">Agoges <br></br>kunskaps portal</h2>

        <img
          src="/Logotyp-Agoge-white.png"
          className="w-42 h-auto mx-auto mb-6"
          alt="Agoge Logo"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={email}
                onChange={handleEmailChange}
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
                <a href="#" className="font-semibold text-yellow-500 hover:text-yellow-500 ">
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
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md py-4 bg-white px-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Visa eventuella felmeddelanden */}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading} // Inaktivera knappen under laddning
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500 pb-15">
          Not a member?{' '}
          <a href="#" className="font-semibold text-yellow-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
