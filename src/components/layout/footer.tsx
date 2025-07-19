"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Link from 'next/link'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-4 md:mt-0 text-center text-sm text-muted-foreground">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  )
}
