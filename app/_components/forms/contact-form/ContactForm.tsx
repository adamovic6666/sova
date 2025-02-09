"use client";
import Input from "../../ui/input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/button/Button";
import Select from "../../ui/select/Select";

const schema = z.object({
  fullName: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  budget: z.string().nonempty("Please choose a budget"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button className="m-l-auto">Submit</Button>
    </form>
  );
};

export default ContactForm;
