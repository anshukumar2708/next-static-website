import Link from "next/link";
import { footerLinks } from "@/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { socials, quickLinks, services, contactInfo, policies } = footerLinks;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-width py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Aimsoft
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming digital visions into reality with innovative solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              {socials?.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services?.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo?.map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-muted-foreground"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Aimsoft. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {policies?.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
