import { AppShell } from '@/components/app-shell';
import { ThemeProvider } from 'next-themes';
import React, { Children } from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
     <ThemeProvider>
        <AppShell>{children}</AppShell>
     </ThemeProvider>
        
    </div>
  )
}

export default layout;