import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";



export default function HomePage() {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen">
     <section className="flex flex-row items-center gap-2  p-5 rounded-md">
      <section>
        <Link href="/patient">
        <Card className="hover:shadow-md px-4">
           <CardContent className="flex flex-col items-center justify-center">
            <FaUsers fontSize={25} className="mt-5 mb-5" />
            <div className="text-gray-500 font-medium text-lg">Patients</div>
           </CardContent>
          </Card>
        </Link>
      </section>
      <section>
        <Link href="/consultant/login">
          <Card className="hover:shadow-md">
           <CardContent className="flex flex-col items-center justify-center">
            <FaUserDoctor fontSize={25} className="mt-5 mb-5" />
            <div className="text-gray-500 font-medium text-lg">Consultant</div>
           </CardContent>
          </Card>
        </Link>
      </section>

     </section>
    </main>
  )
}
