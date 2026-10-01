"use client";
import Image from 'next/image';

type Miembro = {
  nombre: string;
  rol: string;
  foto: string;
  formacion: string[];
};

const equipo: Miembro[] = [
  {
    nombre: 'Alfonso Altieri',
    rol: 'Implantólogo',
    foto: '/resources/alfonso-altieri.jpg',
    formacion: [
      'Formación clínica en implantología: implantes inmediatos y preservación alveolar',
      'Formación en armonización orofacial',
      'Formación en prótesis fija y prótesis sobre implantes',
      'Formación en diseño digital odontológico con EXOCAD',
      'Posgrado en rehabilitación oral estética',
      'Ayudante y Jefe de Clínica en Pasantías Clínicas: "Tutoría Personalizada en Implantes Mediatos, Inmediatos y Preservación Alveolar", dictado en la SOLP (Colegio de Odontólogos) y clínica privada',
    ],
  },
];

function FotoCard({ miembro, priority = false }: { miembro: Miembro; priority?: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8e44ad] rounded-full filter blur-[100px] opacity-20"></div>

      <div className="relative z-10 bg-[#121212] p-4 rounded-lg shadow-xl border border-gray-800 w-full max-w-sm">
        <div className="aspect-[4/5] w-full rounded overflow-hidden relative">
          <Image
            src={miembro.foto}
            alt={miembro.nombre}
            fill
            sizes="(min-width: 768px) 384px, 100vw"
            className="object-cover rounded"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-30"></div>
        </div>

        <div className="mt-3 p-3 bg-[#1a1a1a] rounded">
          <h4 className="text-[#8e44ad] font-semibold">{miembro.nombre}</h4>
          <p className="text-gray-300 text-sm">{miembro.rol}</p>
        </div>
      </div>
    </div>
  );
}

function Formacion({ items }: { items: string[] }) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-[#8e44ad] h-full">
      <h3 className="text-xl font-semibold text-white mb-4">Formación</h3>
      <ul className="text-gray-300 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start">
            <span className="text-[#8e44ad] mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Equipo() {
  const unico = equipo.length === 1;

  return (
    <section id="equipo" className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="container-section">
        <h2 className="section-title text-white">Equipo de Trabajo</h2>
        <p className="section-subtitle">Implantología</p>

        {unico ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center max-w-5xl mx-auto">
            <FotoCard miembro={equipo[0]} />
            <Formacion items={equipo[0].formacion} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {equipo.map((miembro) => (
              <article key={miembro.nombre} className="flex flex-col gap-6">
                <FotoCard miembro={miembro} />
                <div className="flex-1">
                  <Formacion items={miembro.formacion} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Equipo;
