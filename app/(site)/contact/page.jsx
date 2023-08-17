import TitleText from "@/components/TitleText";
import ContactForm from "@/sections/ContactForm";

const ContactPage = () => {
  return (
    <main className="paddings">
      <section className="innerWidth mx-auto">
        <TitleText text="Contact Me" styles="mb-8" />
        <div className="interWidth">
          <p className="text-lg font-medium leading-relaxed md:text-2xl">
            Whether you have an exciting project idea or just want to say hello,
            feel free to send me a message with the form below.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
