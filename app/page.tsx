import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BookOpen, Brain, MessageSquare, Users, Sparkles, Zap, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">LearnSphere</h1>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            asChild
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-800 dark:text-slate-200">AI-Enhanced Learning</span>
            <br />
            <span className="text-blue-600">& Evaluation Platform</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            A self-paced learning platform with real-time feedback, secure role-based login, AI-driven evaluations, and
            interactive dashboards for learners, mentors, and admins.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/register">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-slate-800 dark:text-slate-200">Role-Based Access</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Separate portals for learners, mentors, and administrators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300">
                Secure JWT authentication with role-based access control ensures users only see what they need to.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-slate-800 dark:text-slate-200">AI Evaluation</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Get instant feedback on your submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300">
                Our AI system evaluates your work in real-time, providing constructive feedback to help you improve.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <div className="bg-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-slate-800 dark:text-slate-200">Real-Time Communication</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Chat with mentors and receive notifications instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300">
                WebSocket integration enables real-time chat between learners and mentors, with instant notifications.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 dark:text-slate-200">Why Choose LearnSphere?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400">Get instant feedback and real-time progress tracking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Personalized</h3>
              <p className="text-slate-600 dark:text-slate-400">
                AI-driven recommendations tailored to your learning style
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Comprehensive</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Complete learning ecosystem with courses, mentors, and community
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-12 px-4 border-t border-slate-200 dark:border-slate-700 mt-24">
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} LearnSphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
