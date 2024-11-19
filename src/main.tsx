import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter';
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/sonner';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider delayDuration={0}>
            <AppRouter />
        </TooltipProvider>
        <Toaster />
    </ThemeProvider>,)
