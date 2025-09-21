"use client"

import { Navigation } from "@/components/navigation"
import { Download, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false)

  const googleDriveViewUrl = "https://drive.google.com/file/d/1dBCLeuygPax7C3KNu2rlNjhAVQjCAO2g/view?usp=sharing"
  const googleDriveEmbedUrl = "https://drive.google.com/file/d/1dBCLeuygPax7C3KNu2rlNjhAVQjCAO2g/preview"

  const handleDownload = () => {
    window.open(googleDriveViewUrl, "_blank")
  }

  const handleViewInNewTab = () => {
    window.open(googleDriveViewUrl, "_blank")
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/images/tijuana.png')",
      }}
    >
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12 font-neon pt-8">Resume</h1>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-8 overflow-hidden">
          {!pdfError ? (
            <iframe
              src={googleDriveEmbedUrl}
              className="w-full h-[800px]"
              title="Felix Peng Resume"
              onError={() => setPdfError(true)}
              onLoad={() => console.log("[v0] Google Drive PDF loaded successfully")}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-[800px] p-8 text-center">
              <p className="text-gray-600 mb-4">Unable to display PDF in browser</p>
              <button
                onClick={handleViewInNewTab}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF in New Tab
              </button>
            </div>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Felix Peng Resume</h3>
              <p className="text-white/80 text-sm mb-4">Current 2025 Resume</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
