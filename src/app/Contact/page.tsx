import ContactUsContent from '../_components/ContactUsContent/ContactUsContent';
import HeroContact from '../_components/HeroContact/HeroContact';

export default function Contact() {
  return (
    <div className="flex flex-col gap-7">
      <HeroContact />
      <ContactUsContent />
    </div>
  );
}
