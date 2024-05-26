"use client"

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import PersonalInFo from '@/components/shared/Forms/PersonalInFo';
import { Form
} from "@/components/ui/form"
import { PersonalInFoSchema } from '@/lib/validators';
import { PersonalInFoInitialValues, formatValues } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MedicalHistory from '@/components/shared/Forms/MedicalHistory';
import PatientProblem from '@/components/shared/Forms/PatientProblem';
import Lifestyle from '@/components/shared/Forms/LifeStyle';
import Consultation from '@/components/shared/Forms/Consultation';
import { useRouter } from 'next/navigation';
import axios from "axios"
import { z } from "zod"
import Loader from '@/components/shared/Loader';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

const CREATE_CONSULTATION_ENDPOINT = `${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/create`

export default function MultiStepFormComponent() {
  const [active, setActive] = useState(0);
  const [bookState, setBookState] = useState("pending")
  const [error, setError] = useState("")
  const router = useRouter()

  const nextStep = () => setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm<z.infer<typeof PersonalInFoSchema>>({
    resolver: zodResolver(PersonalInFoSchema),
    defaultValues: PersonalInFoInitialValues
  })

  async function onSubmit(values: z.infer<typeof PersonalInFoSchema>) {
    const formatedValues = formatValues(values)
    try {
      setError("")
      setBookState("loading")
      const data = await axios.post(CREATE_CONSULTATION_ENDPOINT, formatedValues)
      setBookState("done")
      router.push("/consultant")
    } catch (error) {
      setError("Something went wrong, Please Try Again!")
      setBookState("")
    }
  }

  return (
    <section className="w-[90%] lg:w-[75%] mx-auto mt-10">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stepper iconSize={32} color="gray" active={active} onStepClick={setActive}>
        <Stepper.Step description="Consultation">
          <Consultation form={form} />
        </Stepper.Step>
        <Stepper.Step description="Personal Info.">
          <PersonalInFo form={form} />
        </Stepper.Step>
        <Stepper.Step description="Medical History">
          <MedicalHistory form={form} />
        </Stepper.Step>
        <Stepper.Step description="Patient Problem">
          <PatientProblem form={form} />
        </Stepper.Step>
        <Stepper.Step description="Lifestyle">
          <Lifestyle form={form} />
        </Stepper.Step>
        <Stepper.Completed>
          <div className="text-lg text-center my-5">Consultation complete!</div>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="outline" color="rgba(31, 31, 31, 1)" onClick={prevStep}>Previous</Button>
        {active !== 6 && <Button variant="filled" color="rgba(31, 31, 31, 1)" onClick={nextStep}>Continue</Button>}
        <section>
         {active === 6 && 
         <Button type="submit" variant="filled" color="rgba(31, 31, 31, 1)">
          {bookState === "loading"
             ? <Loader isLoading={true} />
             : bookState === "done"
             ? <div className="flex items-center justify-center"><IoCheckmarkCircleSharp color="white" fontSize={20} /></div>
             : "Submit" }
         </Button>}
        </section>
      </Group>
      {error && <div className="text-red-500 text-center">{error}</div>}
      </form>
     </Form>
    </section>
  );
}