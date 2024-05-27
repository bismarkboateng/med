"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent,
 SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover,PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

 

export default function PersonalInFo({ form }: { form: any }) {

  return (
    <section className="w-full md:w-[75%] lg:w-[50%] mx-auto">
      <section className="w-full">
        <div className="underline text-lg text-center my-5">Personal Information</div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} className="input-field
                text-lg placeholder:text-sm" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mt-3">
         <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl className="">
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-[330px] md:w-[250px] lg:w-[180px] input-field
                xl:w-[230px] 2xl:w-[260px]">
                 <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                 <SelectItem value="Male">Male</SelectItem>
                 <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
               </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date Of Birth</FormLabel><br />
              <FormControl>
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[330px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[260px] justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? format(field.value, "PPP") : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
               </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
        </section>

        <section className="flex flex-row items-center justify-between gap-2 mt-3 mb-3">
         <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+233.." {...field} className="input-field
                text-lg placeholder:text-sm" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="P.O.." {...field} className="input-field
                text-lg placeholder:text-sm" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
        </section>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} className="input-field
                text-lg placeholder:text-sm" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </section>
    </section>
  )
}