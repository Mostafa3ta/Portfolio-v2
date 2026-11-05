import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = 'Mostafa Mahmoud, Frontend Engineer: React, Next.js and TypeScript'

// Shared by app/opengraph-image.tsx and app/twitter-image.tsx; rendered once at build time.
export function renderOgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 80px',
                    backgroundColor: '#0f172a',
                    backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(29, 78, 216, 0.3), rgba(15, 23, 42, 0) 60%)',
                    color: '#e2e8f0',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', color: '#5eead4', fontSize: 26, letterSpacing: 6, textTransform: 'uppercase' }}>
                    <div style={{ width: 56, height: 3, background: '#5eead4', marginRight: 20 }} />
                    Portfolio
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 92, fontWeight: 700, color: '#f1f5f9', letterSpacing: -2 }}>Mostafa Mahmoud</div>
                    <div style={{ fontSize: 48, marginTop: 8, color: '#5eead4' }}>Frontend Engineer</div>
                    <div style={{ fontSize: 34, marginTop: 10, color: '#cbd5e1' }}>React · Next.js · TypeScript</div>
                </div>
                <div style={{ display: 'flex', fontSize: 26, color: '#94a3b8' }}>
                    Sole developer of Elevent, a live event-operations platform · Alexandria, Egypt
                </div>
            </div>
        ),
        ogSize,
    )
}
