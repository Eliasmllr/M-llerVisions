import LinkPrimary from "@/components/shared/LinkPrimary";
import { Be, Instagram, Whatsapp } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";

const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
      <div className="profile-icons">
        <ProfileIcon icon={<Whatsapp size="40" />} socialLink="https://wa.me/4917623999625?text=Willkommen%20bei%20M%C3%B6llerVisions%2C%20wie%20k%C3%B6nnen%20wir%20Ihnen%20weiterhelfen%3F
" />
        <ProfileIcon icon={<Instagram size="40" />} socialLink="https://www.instagram.com/moellervisions/" />
      </div>
      <LinkPrimary link="/about-us" linkText="Social Media" />
    </div>
  );
};

export default ProfileCard;
