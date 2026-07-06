import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  { id: 1, name: 'María Fernanda', role: 'CEO, Belleza Natural', text: 'Excelente servicio y atención. Desarrollaron nuestra tienda online y superó nuestras expectativas.', rating: 5 },
  { id: 2, name: 'Carlos Méndez', role: 'Gerente, FitLife', text: 'La app móvil que creó DevTech nos ha ayudado a mejorar nuestros procesos y tener más clientes satisfechos.', rating: 5 },
  { id: 3, name: 'Daniel Torres', role: 'Founder, EduSmart', text: 'Profesionales, rápidos y muy creativos. 100% recomendados para cualquier proyecto digital.', rating: 5 },
  { id: 4, name: 'Ana Ramírez', role: 'Directora, Consultora Lumen', text: 'La comunicación fue clara desde el día uno y entregaron el proyecto antes de lo previsto.', rating: 5 },
  { id: 5, name: 'Jorge Salinas', role: 'Cliente particular', text: 'Me ayudaron a formatear y optimizar mi PC en tiempo récord. Muy buen trato y precios justos.', rating: 4 },
  { id: 6, name: 'Paola Nieto', role: 'Fundadora, Café Origen', text: 'Nuestra página de reservas ahora funciona perfecto. El soporte post-entrega ha sido excelente.', rating: 5 },
  { id: 7, name: 'Roberto Duarte', role: 'CTO, LogisTrack', text: 'Entendieron nuestras necesidades técnicas rápido y propusieron soluciones que no habíamos considerado.', rating: 5 },
  { id: 8, name: 'Lucía Herrera', role: 'Cliente particular', text: 'Soporte remoto rapidísimo, resolvieron un problema de virus en menos de una hora.', rating: 5 },
];

// Estrellas de solo lectura
const StarsDisplay = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 md:w-5 md:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Selector de estrellas interactivo
const StarsInput = ({ rating, onChange }: { rating: number; onChange: (n: number) => void }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5"
          aria-label={`${n} estrellas`}
        >
          <svg
            className={`w-7 h-7 transition-colors duration-150 ${
              (hovered || rating) >= n ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    type: 'particular' as 'particular' | 'empresa',
    roleOrCompany: '',
    text: '',
    rating: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const resetForm = () => {
    setForm({ name: '', type: 'particular', roleOrCompany: '', text: '', rating: 0 });
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(resetForm, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim() || form.rating === 0) return;

    const newReview: Testimonial = {
      id: Date.now(),
      name: form.name.trim(),
      role:
        form.type === 'empresa'
          ? form.roleOrCompany.trim() || 'Empresa'
          : form.roleOrCompany.trim() || 'Cliente particular',
      text: form.text.trim(),
      rating: form.rating,
    };

    setTestimonials((prev) => [newReview, ...prev]);
    setSubmitted(true);
    setTimeout(closeModal, 1400);
  };

  const loopTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up" data-aos-duration="600">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
              Testimonios
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-cyan-500">clientes</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Historias reales de personas y empresas que confiaron en nosotros
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-white font-semibold text-sm rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transform"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Deja tu reseña
          </button>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Carrusel infinito de testimonios */}
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="animate-scroll-testimonials flex gap-6 w-max">
            {loopTestimonials.map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 w-[300px] md:w-[340px] flex-shrink-0"
              >
                <div className="mb-4">
                  <StarsDisplay rating={t.rating} />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-semibold border border-cyan-300 flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-gray-900 font-semibold text-sm md:text-base truncate">{t.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: dejar reseña */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-2xl shadow-gray-900/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-cyan-400 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-1">¡Gracias por tu reseña!</h3>
                <p className="text-gray-500 text-sm">Ya la agregamos a la lista.</p>
              </div>
            ) : (
              <>
                <h3 className="text-gray-900 font-extrabold text-xl md:text-2xl mb-1">Deja tu reseña</h3>
                <p className="text-gray-500 text-sm mb-6">Cuéntanos cómo fue tu experiencia con nosotros</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">¿Nos escribes como...?</label>
                    <div className="flex gap-2">
                      {(['particular', 'empresa'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, type: opt })}
                          className={`flex-1 px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                            form.type === opt
                              ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 border-transparent text-white'
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-cyan-300'
                          }`}
                        >
                          {opt === 'particular' ? 'Cliente particular' : 'Empresa'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      {form.type === 'empresa' ? 'Nombre de la empresa / cargo' : 'Rol u ocupación (opcional)'}
                    </label>
                    <input
                      type="text"
                      value={form.roleOrCompany}
                      onChange={(e) => setForm({ ...form, roleOrCompany: e.target.value })}
                      placeholder={form.type === 'empresa' ? 'Ej. CEO, Belleza Natural' : 'Ej. Diseñadora freelance'}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Tu reseña</label>
                    <textarea
                      required
                      rows={3}
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      placeholder="Cuéntanos tu experiencia..."
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Calificación</label>
                    <StarsInput rating={form.rating} onChange={(n) => setForm({ ...form, rating: n })} />
                  </div>

                  <button
                    type="submit"
                    disabled={!form.name.trim() || !form.text.trim() || form.rating === 0}
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30"
                  >
                    Publicar reseña
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-testimonials {
          animation: scrollTestimonials 50s linear infinite;
        }
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;