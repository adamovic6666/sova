"use client";
import { useState } from "react";
import Input from "../../ui/input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/button/Button";
import Select from "../../ui/select/Select";
import emailjs from "@emailjs/browser";

// Use environment variable for EmailJS

const schema = z.object({
  fullName: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  budget: z.string().min(1, "Budget is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // Using EmailJS configuration from environment variables
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: data.fullName,
          email: data.email,
          subject: data.subject,
          budget: data.budget,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        reset();
      } else {
        setSubmitError(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        "There was an error sending your message. Please try again."
      );
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitSuccess && (
        <div
          style={{
            color: "green",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
            borderRadius: "4px",
          }}
        >
          Thank you for your message! We will get back to you soon.
        </div>
      )}

      {submitError && (
        <div
          style={{
            color: "red",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            borderRadius: "4px",
          }}
        >
          {submitError}
        </div>
      )}

      <Input name="fullName" label="Full Name" control={control} />
      <Input name="email" label="Your E-mail" control={control} type="email" />
      <Input name="subject" label="Message Subject" control={control} />
      <Select name="budget" label="Ballpark Budget" control={control} />
      <Input
        name="message"
        label="Write Your Message Here"
        control={control}
        inputType="textarea"
      />
      <Button className="m-l-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
