import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Connect to backend API
    setResponse(`Processing: ${input}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terminal AI Assistant</title>
        <meta name="description" content="AI-powered terminal assistant" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Terminal AI Assistant</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="command" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your command or request:
              </label>
              <input
                type="text"
                id="command"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 'Generate Python code for sorting algorithm'"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get AI Assistance
            </button>
          </form>

          {response && (
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">AI Response:</h3>
              <p className="text-gray-700">{response}</p>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Code Generation</h3>
            <p className="text-gray-600">Generate code snippets in any language</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Command Explanation</h3>
            <p className="text-gray-600">Understand complex terminal commands</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">File Operations</h3>
            <p className="text-gray-600">Smart file management suggestions</p>
          </div>
        </div>
      </main>
    </div>
  )
}