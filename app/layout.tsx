import type { ReactNode } from 'react';
export default function RootLayout({children}:{children:ReactNode}) { return <html lang="en"><body style={{fontFamily:'system-ui',maxWidth:900,margin:'3rem auto',padding:'0 1rem'}}>{children}</body></html> }
