"use client";
import { CssVarsProvider, extendTheme } from '@mui/joy'
import React from 'react'

export default function JoyUITheme({ children }: { children: React.ReactNode }) {
    const theme = extendTheme({ cssVarPrefix: 'dark' });

    return (
        <CssVarsProvider
            defaultMode="dark"
            theme={theme}
            colorSchemeSelector="#demo_dark-mode-by-default"
            modeStorageKey="demo_dark-mode-by-default"
            disableNestedContext
        >
            {children}
        </CssVarsProvider>
    )
}
