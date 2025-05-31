// components/auth/LoginForm.tsx (or your actual path)
"use client";

import React, { useState } from "react"; // Added React import for clarity
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg className="mr-2 h-5 w-5" // Adjusted size for better fit in button
    version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C1.18 16.57 0 19.7 0 24c0 4.3.93 8.13 2.56 11.47l7.97-6.28z"></path>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
);

export function LoginForm({ // This is a NAMED export
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supaError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/oauth?next=/dashboard`,
        },
      });

      if (supaError) throw supaError;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center w-full", className)} {...props}>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm md:max-w-md" // Responsive max width
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <Link href="/" passHref>
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-to-br from-v4-purple to-v4-blue flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md">
                <Image src="/logo.png" width={48} height={48} alt="V4 Logo" className="p-1 object-contain" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-v4-purple">V4</span>
            </div>
          </Link>
        </div>

        <Card className="shadow-xl backdrop-blur-lg bg-slate-800/40 border-white/10"> {/* Enhanced card style */}
          <CardHeader className="text-center px-6 pt-8 md:px-8 md:pt-10">
            <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-white/95">
              Welcome to V4
            </CardTitle>
            <CardDescription className="text-gray-400/80 pt-1.5 md:pt-2 text-sm md:text-base">
              Sign in with Google to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6 md:px-8 md:pb-8 pt-6">
            <form onSubmit={handleSocialLogin}>
              <div className="flex flex-col gap-6">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-md flex items-start gap-2.5"
                  >
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-px" />
                    <p className="leading-snug">{error}</p>
                  </motion.div>
                )}
                <Button
                  type="submit"
                  size="lg" // Using predefined button size
                  className={cn(
                    "w-full text-base py-3 md:py-3.5 font-medium transition-all duration-200 ease-out",
                    "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm",
                    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-v4-blue focus-visible:ring-offset-slate-900", // Focus state
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <GoogleIcon />
                      Continue with Google
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-center text-xs text-gray-500 px-6 pb-8 md:px-8 md:pb-10 pt-4 border-t border-white/10">
            <p>By continuing, you agree to V4's</p>
            <div className="mt-1">
              <Link href="/terms" className="hover:underline text-gray-400 hover:text-v4-blue transition-colors">Terms of Service</Link>
              <span className="mx-1">&bull;</span>
              <Link href="/privacy" className="hover:underline text-gray-400 hover:text-v4-blue transition-colors">Privacy Policy</Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}