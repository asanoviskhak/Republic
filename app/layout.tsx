import './globals.css'
import { Providers } from "./providers";

export const metadata = {
  title: 'Republic.kg',
  description: 'Republic.kg – ваш проводник в мире законов, кодексов и юридических аспектов Кыргызской Республики. Мы создали этот сайт, чтобы сделать юридическую информацию доступной и понятной для каждого, независимо от возраста или профессии. 🌐',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
