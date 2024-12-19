"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projectApi } from "@/service/project";
import { Loader2 } from "lucide-react";
import ServiceSelection from "./service-selection";
import { useState } from "react";

const serviceSchema = z.object({
  id: z.string().min(1, { message: "id is required" }).optional(),
  service_name: z.string().min(1, { message: "Value is required" }),
});

// Define the validation schema using Zod
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  budget: z.string().min(0, {
    message: "Budget must be a positive number.",
  }),
  services: z.array(serviceSchema),
  deadline: z.string(),
  userId: z.string(),
});

interface ServiceSelectionProps {
  setStep: (step: number) => void; // Define the correct type for setStep
}

export function ProjectForm({ setStep }: ServiceSelectionProps) {
  const user = useSelector((state) => state?.user?.user);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { id: "1", name: "Web Development" },
    { id: "2", name: "Mobile App Development" },
    { id: "3", name: "Blockchain Development" },
    { id: "4", name: "Smart Contract Development" },
    { id: "5", name: "Smart Agentic AI App Development" },
    { id: "6", name: "Application Security Testing" },
    { id: "7", name: "Software Development" },
    { id: "8", name: "DevOps" },
    { id: "9", name: "SEO Services" },
    { id: "10", name: "UI/UX Design" },
    { id: "11", name: "Digital Marketing" },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      title: "",
      description: "",
      budget: "",
      deadline: "",
      status: "",
      services: [],
      userId: user?.sub || "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: projectApi.create,
    onSuccess: () => {
      // Invalidate the projects query to refetch the data
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
  const handleNextStep = () => {
    setStep(1); // Call setStep to update the step
  };
  const onSubmit = (values) => {
    values.services = selectedServices
      .map((id) => {
        const service = services.find((s) => s.id === id);
        return service ? { name: service.name } : null;
      })
      .filter(Boolean);
    mutation.mutate(values);
    mutation.isSuccess && handleNextStep();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-left"
      >
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project title" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter project budget"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Set a budget for your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deadline</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>
                Set a deadline for your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ServiceSelection
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormDescription>
                Provide a brief description of your project.
              </FormDescription>
              <FormControl>
                <Textarea
                  rows={7}
                  placeholder="Enter project description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          {
            <Button
              variant="outline"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Continue"
              )}
            </Button>
          }
        </div>
      </form>
    </Form>
  );
}
