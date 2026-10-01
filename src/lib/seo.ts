import type { Metadata } from "next";

export const SITE_URL = "https://juanmartinsztern.com";

export const siteName = "Odontología Digital Sztern";

export const doctorName = "Dr. Juan Martín Sztern";

export const siteDescription =
  "Odontología Digital en La Plata: Especialistas en ATM, ortodoncia, implantes, prótesis y rehabilitación oral. Tecnología avanzada para tu salud bucal.";

export const siteTitle = `${siteName} | ${doctorName} - La Plata`;

export const contactDescription =
  "Agenda tu consulta en Odontología Digital Sztern, La Plata. ATM, ortodoncia, implantes, prótesis y rehabilitación oral con tecnología avanzada.";

export const ogImage = "/resources/profile.jpg";

export const knowsAbout = [
  "Odontología Digital",
  "ATM",
  "Ortodoncia",
  "Implantes dentales",
  "Prótesis dental",
  "Rehabilitación oral",
  "Estética dental",
];

export const socialLinks = [
  "https://www.facebook.com/juansztern",
  "https://www.instagram.com/od.juansztern/",
  "https://www.linkedin.com/in/odont%C3%B3logo-juan-m-sztern-948a68335/",
];

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteName,
    description: siteDescription,
    url: SITE_URL,
    image: `${SITE_URL}${ogImage}`,
    telephone: "+54-9-11-2683-8497",
    email: "odontologíadigitalsztern@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. 54 545",
      addressLocality: "La Plata",
      addressRegion: "Buenos Aires",
      postalCode: "B1900",
      addressCountry: "AR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: doctorName,
      jobTitle: "Odontólogo - Especialista en ATM y Ortodoncia",
    },
    employee: [
      {
        "@type": "Person",
        name: "Alfonso Altieri",
        jobTitle: "Implantólogo",
        image: `${SITE_URL}/resources/alfonso-altieri.jpg`,
      },
    ],
    knowsAbout,
    medicalSpecialty: "Dentistry",
    sameAs: socialLinks,
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
