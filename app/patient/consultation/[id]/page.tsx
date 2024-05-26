"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import Loader from "@/components/shared/Loader";
import { Separator } from "@/components/ui/separator"



export default function PatientConsultation({ params: { id } }: { params: { id: string } }) {
  const [consultation, setConsultation] = useState<ConsultationsFromDB | null>(null);

  const GET_CONSULTATION = `${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/${id}/patient`

  useEffect(() => {
    const fetchConsultation = async () => {
      try {
        const {data} = await axios.get(GET_CONSULTATION);
        setConsultation(data);
      } catch (error) {
        console.error('Error fetching consultation:', error);
      }
    };

    fetchConsultation();
  }, [id, GET_CONSULTATION]);

  if (!consultation) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div>
         <Loader isLoading={true} color="black" />
        </div>
      </div>)
  }

  const {
    personal_information,
    date,
    consultation_type,
    healthcare_provider,
    medical_history,
    patient_problem,
    lifestyle
  } = consultation;

  return (
    <section className="w-fit mx-auto border rounded-md shadow mt-10 py-10 px-14">
      <h1 className="text-lg font-medium text-center mb-10">Patient Consultation Detail</h1>
      <div>
        <h2 className="underline font-medium">Personal Information</h2>
        <p><strong>Full Name:</strong> {personal_information.fullName}</p>
        <p><strong>Gender:</strong> {personal_information.gender}</p>
        <p><strong>Date of Birth:</strong> {moment(personal_information.dob).format('DD/MM/YYYY')}</p>
        <p><strong>Phone Number:</strong> {personal_information.phoneNumber}</p>
        <p><strong>Address:</strong> {personal_information.address}</p>
        {personal_information.email && <p><strong>Email:</strong> {personal_information.email}</p>}
      </div>
      <Separator className="my-4" />
      <div>
        <h2 className="underline font-medium">Consultation Details</h2>
        <p><strong>Date:</strong> {moment(date).format('DD/MM/YYYY')}</p>
        <p><strong>Type:</strong> {consultation_type}</p>
        <p><strong>Healthcare Provider:</strong> {healthcare_provider}</p>
      </div>
      <Separator className="my-4" />
      <div>
        <h2>Medical History</h2>
        {medical_history.past_medical_conditions && <p><strong>Past Medical Conditions:</strong> {medical_history.past_medical_conditions}</p>}
        {medical_history.current_medications && <p><strong>Current Medications:</strong> {medical_history.current_medications}</p>}
        {medical_history.allergies && <p><strong>Allergies:</strong> {medical_history.allergies}</p>}
      </div>
      <Separator className="my-4" />
      <div>
        <h2>Patient Problem</h2>
        {patient_problem.medical_condition && <p><strong>Medical Condition:</strong> {patient_problem.medical_condition}</p>}
        <p><strong>Duration of Symptoms:</strong> {patient_problem.duration_of_symptoms}</p>
        <p><strong>Nature of Symptoms:</strong> {patient_problem.nature_of_symptoms}</p>
      </div>
      <Separator className="my-4" />
      <div>
        <h2>Lifestyle</h2>
        <p><strong>Sleep Patterns:</strong> {lifestyle.sleep_patterns}</p>
      </div>
    </section>
  );
}
