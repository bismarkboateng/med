import { Table, TableBody, TableCaption,
    TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import moment from "moment"


export default function ConsultationCard({ consultations }: { consultations: ConsultationsFromDB[]}) {
  return (
    <section className="flex flex-row items-center justify-between">
      <Table>
       <TableCaption>All Consultations.</TableCaption>
       <TableHeader>
        <TableRow>
         <TableHead>Patient Name</TableHead>
         <TableHead>Consultation Type</TableHead>
         <TableHead>Health Care Provider</TableHead>
         <TableHead>Medical Condition</TableHead>
         <TableHead>Date</TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        {consultations.map((consultation) => (
          <TableRow key={consultation._id} className="cursor-pointer">
            <TableCell className="font-medium">
              <Link href={`/patient/consultation/${consultation._id}`}>
               {consultation.personal_information.fullName}
              </Link>
            </TableCell>
            <TableCell>{consultation.consultation_type}</TableCell>
            <TableCell>{consultation.healthcare_provider}</TableCell>
            <TableCell>{consultation.patient_problem.medical_condition}</TableCell>
            <TableCell>{moment(consultation.date).format('DD/MM/YYYY')}</TableCell>
          </TableRow>
        ))}
       </TableBody>
      </Table>

    </section>
  )
}
