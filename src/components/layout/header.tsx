"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"

export function Header() {
  const { t } = useLanguage()
  const navItems = [
    { href: "/#about", label: t('about') },
    { href: "/#services", label: t('services') },
    { href: "/#portfolio", label: t('portfolio') },
    { href: "/bimtools", label: t('bimTools') },
    { href: "/#contact", label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={120} height={40} className="dark:hidden" />
            <Image src="/logo-light.svg" alt="Frata BIM Logo" width={120} height={40} className="hidden dark:block" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between w-full md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <Link href="/" className="flex items-center">
                    <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={120} height={40} className="dark:hidden" />
                    <Image src="/logo-light.svg" alt="Frata BIM Logo" width={120} height={40} className="hidden dark:block" />
                </Link>
                <div className="grid gap-4 py-6">
                    {navItems.map(item => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                        {item.label}
                    </Link>
                    ))}
                </div>
                </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={120} height={40} className="dark:hidden" />
                <Image src="/logo-light.svg" alt="Frata BIM Logo" width={120} height={40} className="hidden dark:block" />
            </Link>
        </div>

        {/* Right-aligned controls */}
        <div className="flex items-center ml-auto">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
