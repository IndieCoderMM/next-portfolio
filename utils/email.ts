import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

export const sendEmail = async (form: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      throw new Error("EmailJS configuration is missing");
    }

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        ...form,
        from_name: form.name,
      },
      USER_ID,
    );
    return result;
  } catch (error) {
    console.error("Failed to send email: ", error);
    throw error;
  }
};
