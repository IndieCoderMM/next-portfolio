import TitleText from "@/components/TitleText";
import Transition from "@/components/Transition";
import ContactForm from "@/sections/ContactForm";

const ContactPage = () => {
  return (
    <main className="paddings">
      <Transition />
      <section className="innerWidth mx-auto">
        <TitleText text="Contact Me" styles="mb-8" />
        <div className="interWidth">
          <p className="text-lg leading-relaxed text-dark dark:text-light md:text-2xl">
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
