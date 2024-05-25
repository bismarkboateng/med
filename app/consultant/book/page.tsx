"use client"

import { FormEvent, MouseEvent, useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import PersonalInFo from '@/components/shared/Forms/PersonalInFo';
import { Form
} from "@/components/ui/form"
import { PersonalInFoSchema } from '@/lib/validators';
import { PersonalInFoInitialValues } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import MedicalHistory from '@/components/shared/Forms/MedicalHistory';
import PatientProblem from '@/components/shared/Forms/PatientProblem';
import Lifestyle from '@/components/shared/Forms/LifeStyle';
import Social from '@/components/shared/Forms/Social';
import Financial from '@/components/shared/Forms/Financial';


export default function MultiStepFormComponent() {
  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm<z.infer<typeof PersonalInFoSchema>>({
    resolver: zodResolver(PersonalInFoSchema),
    defaultValues: PersonalInFoInitialValues
  })

  function onSubmit(values: z.infer<typeof PersonalInFoSchema>) {
    console.log(values)
    alert(values)
    alert(JSON.stringify(values))
  }

  return (
    <section className="w-[90%] lg:w-[75%] mx-auto mt-10">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stepper iconSize={32} color="gray" active={active} onStepClick={setActive}>
        <Stepper.Step description="Personal Info.">
          <PersonalInFo form={form} />
        </Stepper.Step>
        <Stepper.Step description="Medical Hist.">
          <MedicalHistory form={form} />
        </Stepper.Step>
        <Stepper.Step description="Patient Problem">
          <PatientProblem form={form} />
        </Stepper.Step>
        <Stepper.Step description="Lifestyle">
          <Lifestyle form={form} />
        </Stepper.Step>
        <Stepper.Step description="Occupational History">
          <Social form={form} />
        </Stepper.Step>
        <Stepper.Step description="Financial Info.">
          <Financial form={form} />
        </Stepper.Step>
        <Stepper.Completed>
          <div className="text-lg text-center my-5">Consultation complete!</div>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="outline" color="rgba(31, 31, 31, 1)" onClick={prevStep}>Previous</Button>
        {active === 6 ? (
          <Button type="submit" variant="filled" color="rgba(31, 31, 31, 1)">
            Submit
          </Button>
          ) : (
          <Button
            variant="filled"
            color="rgba(31, 31, 31, 1)"
            onClick={nextStep}
          >
            Continue
          </Button>
        )}
      </Group>
      </form>
     </Form>
    </section>
  );
}