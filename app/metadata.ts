import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dr. Carlos González - Médico Internista',
  description: 'Especialista en medicina interna, diagnóstico y tratamiento de enfermedades en adultos. Agenda tu cita médica en Bucaramanga.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-icon.png' }
    ]
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Dr. Carlos González'
  }
}
