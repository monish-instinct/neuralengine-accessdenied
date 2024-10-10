"use client"

import { useState } from 'react'
import { AlertTriangle, Swords } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export function DeniedAccessAlertComponent() {
  const [isPresented, setIsPresented] = useState(true)
  const router = useRouter()

  const handleContactTechTeam = () => {
    router.push('/tech-team-contact')
  }

  const handleGoBack = () => {
    setIsPresented(false)
    setTimeout(() => setIsPresented(true), 1000)
  }

  if (!isPresented) return null

  return (
    (<div
      className="fixed inset-0 bg-gradient-to-b from-red-600 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background/80 backdrop-blur">
        <CardContent className="p-6 flex flex-col items-center space-y-6">
          <AlertTriangle className="w-16 h-16 text-destructive animate-pulse" />
          <h2 className="text-2xl font-bold text-center">Access Denied</h2>
          <div className="flex justify-center items-center w-full h-24">
            <Swords className="text-destructive" size={96} />
          </div>
          <p className="text-center text-muted-foreground">
            You do not have permission to access this area. Please contact our tech team for assistance.
          </p>
          <div className="flex flex-col w-full space-y-2">
            <Button onClick={handleContactTechTeam} variant="destructive">
              Contact Our Tech Team
            </Button>
            <Button onClick={handleGoBack} variant="outline">
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}