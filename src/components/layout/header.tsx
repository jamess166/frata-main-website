
"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useLanguage()
  
  const services = [
    { slug: 'global-remote-bim-teams', titleKey: 'service1Title' },
    { slug: 'custom-bim-software-development', titleKey: 'service2Title' },
    { slug: 'on-site-bim-construction-support', titleKey: 'service3Title' },
    { slug: 'bim-for-manufacturing', titleKey: 'service4Title' },
    { slug: 'bim-training-and-implementation', titleKey: 'service5Title' },
    { slug: 'comprehensive-bim-modeling', titleKey: 'service6Title' },
  ]

  const navItems = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    // Portfolio hidden as requested
    // { href: "/#portfolio", label: t('portfolio') },
    { href: "/bimtools", label: t('bimTools') },
    { href: "/blog", label: t('blog') },
    { href: "/#contact", label: t('contact') },
  ]

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="transition-colors hover:text-primary text-foreground/80 font-medium"
    >
      {children}
    </Link>
  )
  
  const ServicesMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="transition-colors hover:text-primary text-foreground/80 font-medium p-0 h-auto hover:bg-transparent">
          {t('services')}
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {services.map(service => (
          <DropdownMenuItem key={service.slug} asChild>
            <Link href={`/services/${service.slug}`}>{t(service.titleKey as any)}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
            <Image src="/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
            <ServicesMenu />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                 <SheetHeader className="p-4">
                    <SheetTitle className="sr-only">Navigation</SheetTitle>
                 </SheetHeader>
                <Link href="/" className="flex items-center px-4">
                    <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
                    <Image src="/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
                </Link>
                <div className="grid gap-4 py-6 px-4">
                    {navItems.map(item => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                        {item.label}
                    </Link>
                    ))}
                    {/* Services in mobile */}
                     <div className="flex w-full items-center py-2 text-lg font-semibold">{t('services')}</div>
                     <div className="grid gap-2 pl-4">
                        {services.map(service => (
                             <Link key={service.slug} href={`/services/${service.slug}`} className="text-muted-foreground hover:text-foreground">
                                {t(service.titleKey as any)}
                             </Link>
                        ))}
                     </div>
                </div>
                </SheetContent>
            </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
                <Image src="/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
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
