import React from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

const ContactForm = () => {
  // const [condition, setCondition] = React.useState<boolean>(false);

  const handleFormSubmission = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          "service_v1xftbh",
          "template_4u1jmt9",
          form.current,
          "d5v8gYI0Ev9r_ATt-"
        );

        // if (response.status === 200) {
        //   // setCondition(true);
        // }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Form reference is null");
    }
  };

  // Define `form` with the correct type `HTMLFormElement`
  const form = React.useRef<HTMLFormElement>(null);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center gap-16 font-[family-name:var(--font-geist-sans)]">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-3xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            We love coming up with fresh ideas to
            <Highlight className="text-white dark:text-white">
              increase conversions!
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Form</CardTitle>
            <CardDescription>We are ready to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              ref={form}
              onSubmit={handleFormSubmission}
              className="space-y-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
                <span className="space-y-2  pb-2">
                  <Label>Name</Label>
                  <Input name="user_name" />
                </span>
                <span className="space-y-2  pb-2">
                  <Label>Email</Label>
                  <Input name="user_email" />
                </span>
              </div>
              <span className="space-y-2  pb-2">
                <Label>Subject</Label>
                <Input name="user_select" />
              </span>
              <div className="space-y-2  pb-2">
                <Label>Description</Label>
                <Textarea name="user_message" />
              </div>
              <span className="flex justify-end mt-5">
                <Button type="submit">Submit</Button>
              </span>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
