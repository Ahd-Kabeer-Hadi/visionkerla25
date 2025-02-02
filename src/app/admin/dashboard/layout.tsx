"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/providers/theme-mode-toggler";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if there's a previous page to go back to
    setCanGoBack(window.history.length > 1 && pathname !== "/admin/dashboard");
  }, [pathname]);

  // Extract path segments, ignoring '/admin/dashboard'
  const paths = pathname.split("/").filter(Boolean);
  const dashboardIndex = paths.indexOf("dashboard");

  // Remove "dashboard" from breadcrumbs, keeping only relevant sections
  const breadcrumbPaths =
    dashboardIndex !== -1 ? paths.slice(dashboardIndex + 1) : paths;

  // Generate dynamic breadcrumbs
  const generateBreadcrumbItems = () => {
    return breadcrumbPaths.map((path, index) => {
      const href = `/admin/dashboard/${breadcrumbPaths
        .slice(0, index + 1)
        .join("/")}`;
      const formattedPath = decodeURIComponent(path)
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

      return (
        <BreadcrumbItem key={href}>
          {index === breadcrumbPaths.length - 1 ? (
            <BreadcrumbPage>{formattedPath}</BreadcrumbPage>
          ) : (
            <>
              <BreadcrumbLink href={href}>{formattedPath}</BreadcrumbLink>
              <BreadcrumbSeparator />
            </>
          )}
        </BreadcrumbItem>
      );
    });
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-3 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            {/* Show back button only if there's a previous page */}
            {canGoBack && (
              <Button
                onClick={() => router.back()}
                className="p-2 dark:bg-gray-800 hover:bg-accent rounded-md"
                aria-label="Go Back"
                variant="ghost"
                size="icon"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}

            {/* Breadcrumb Navigation */}
            <Breadcrumb>
              <BreadcrumbList>{generateBreadcrumbItems()}</BreadcrumbList>
            </Breadcrumb>

            {/* Theme Toggle */}
            <div className="ml-auto flex items-center">
              <ModeToggle />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
