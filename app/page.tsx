import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
export default function HomePage() {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen">
     <section className="flex flex-row items-center gap-2 border  p-5 rounded-md">
      <section>
        <Link href="/patient">
          <Card>
          <CardHeader>
            <CardTitle>Patient</CardTitle>
          </CardHeader>
          </Card>
        </Link>
      </section>
      <section>
        <Link href="/consultant/login">
          <Card>
          <CardHeader>
            <CardTitle>Consultant</CardTitle>
          </CardHeader>
          </Card>
        </Link>
      </section>

     </section>
    </main>
  )
}
