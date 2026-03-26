import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body class="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">

      <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div class="flex items-center gap-3 text-[#1142d4]">
          <div class="size-6">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Nexus ATS</h2>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors">Features</a>
          <a href="#solutions" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors">Solutions</a>
          <a href="#pricing" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors">Pricing</a>
        </nav>

        <div class="flex items-center gap-4">
          <a href="/login" class="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#1142d4] transition-colors">Log In</a>
          <a href="/register" class="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2 px-5 rounded-[0.125rem] transition-colors">
            Get Started
          </a>
        </div>
      </header>

      <main class="flex-1">
        <section class="relative px-6 py-20 lg:py-32 lg:px-10 flex flex-col items-center text-center overflow-hidden">
          <div class="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#1142d4]/10 rounded-full blur-3xl -z-10"></div>

          <span class="px-3 py-1 text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 rounded-full mb-6 border border-[#1142d4]/20">
            🚀 Nexus ATS 2.0 is now live
          </span>

          <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mb-6">
            Hire the best talent, <br class="hidden md:block" />
            <span class="text-[#1142d4]">faster than ever.</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
            Streamline your recruitment process from sourcing to onboarding. Nexus ATS brings all your candidate data, team collaboration, and hiring analytics into one intuitive platform.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="/register" class="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white font-semibold py-3 px-8 rounded-[0.125rem] transition-colors flex items-center justify-center gap-2 text-lg">
              Start for free
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
            <a href="#demo" class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium py-3 px-8 rounded-[0.125rem] transition-colors flex items-center justify-center gap-2 text-lg">
              <span class="material-symbols-outlined text-[20px]">play_circle</span>
              Watch Demo
            </a>
          </div>

          <p class="mt-6 text-sm text-slate-500 dark:text-slate-400">No credit card required. 14-day free trial.</p>
        </section>

        <section id="features" class="px-6 py-20 lg:px-10 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Everything you need to scale your team</h2>
              <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Powerful tools designed to automate busywork and help you focus on building relationships with top candidates.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-8 rounded-[0.5rem] bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                <div class="bg-[#1142d4]/10 w-12 h-12 flex items-center justify-center rounded-[0.5rem] mb-6">
                  <span class="material-symbols-outlined text-[#1142d4]">group_add</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Sourcing</h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Publish to multiple job boards with a single click and automatically parse resumes to build robust candidate profiles.
                </p>
              </div>

              <div class="p-8 rounded-[0.5rem] bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                <div class="bg-[#1142d4]/10 w-12 h-12 flex items-center justify-center rounded-[0.5rem] mb-6">
                  <span class="material-symbols-outlined text-[#1142d4]">view_kanban</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Visual Pipelines</h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Drag and drop candidates through customizable hiring stages. Keep your entire hiring team aligned in real-time.
                </p>
              </div>

              <div class="p-8 rounded-[0.5rem] bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                <div class="bg-[#1142d4]/10 w-12 h-12 flex items-center justify-center rounded-[0.5rem] mb-6">
                  <span class="material-symbols-outlined text-[#1142d4]">monitoring</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Advanced Analytics</h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Track time-to-hire, source effectiveness, and team performance with out-of-the-box reporting dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="px-6 py-20 lg:px-10 bg-[#1142d4] text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your hiring workflow?</h2>
          <p class="text-white/80 max-w-2xl mx-auto mb-10 text-lg">Join thousands of companies that use Nexus ATS to build their dream teams.</p>
          <a href="/register" class="inline-block bg-white text-[#1142d4] hover:bg-slate-100 font-bold py-4 px-10 rounded-[0.125rem] transition-colors shadow-lg">
            Create Your Account
          </a>
        </section>
      </main>

      <footer class="bg-white dark:bg-slate-900 px-6 py-12 lg:px-10 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-2 text-[#1142d4]">
            <span class="material-symbols-outlined">work</span>
            <span class="font-bold text-slate-900 dark:text-white">Nexus ATS</span>
          </div>

          <div class="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#" class="hover:text-[#1142d4] transition-colors">Product</a>
            <a href="#" class="hover:text-[#1142d4] transition-colors">Pricing</a>
            <a href="#" class="hover:text-[#1142d4] transition-colors">Privacy</a>
            <a href="#" class="hover:text-[#1142d4] transition-colors">Terms</a>
          </div>

          <p class="text-xs text-slate-500 dark:text-slate-500">
            &copy; 2026 Nexus ATS. All rights reserved.
          </p>
        </div>
      </footer>

    </body>
  )
}

export default App
