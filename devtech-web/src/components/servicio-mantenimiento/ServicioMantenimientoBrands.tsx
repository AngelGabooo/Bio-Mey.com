import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoBrands = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Logos oficiales servidos desde Simple Icons (cdn.simpleicons.org)
  // Nota: Microsoft, Logitech, Canon, Brother y Gigabyte no tienen slug
  // disponible en Simple Icons, por lo que se muestran como texto (sin ícono).
  const brands = [
    { name: 'HP', slug: 'hp', color: '0096D6' },
    { name: 'Dell', slug: 'dell', color: '007DB8' },
    { name: 'Lenovo', slug: 'lenovo', color: 'E2231A' },
    { name: 'ASUS', slug: 'asus', color: 'FFFFFF' },
    { name: 'Acer', slug: 'acer', color: '83B81A' },
    { name: 'MSI', slug: 'msi', color: 'FF0000' },
    { name: 'Apple', slug: 'apple', color: 'FFFFFF' },
    { name: 'Samsung', slug: 'samsung', color: '1428A0' },
    { name: 'Toshiba', slug: 'toshiba', color: 'FF0000' },
    { name: 'Gigabyte', slug: null, color: 'FFFFFF' },
    { name: 'Huawei', slug: 'huawei', color: 'FF0000' },
    { name: 'LG', slug: 'lg', color: 'A50034' },
    { name: 'Microsoft', slug: null, color: 'FFFFFF' },
    { name: 'Logitech', slug: null, color: 'FFFFFF' },
    { name: 'Epson', slug: 'epson', color: '003399' },
    { name: 'Canon', slug: null, color: 'FFFFFF' },
    { name: 'Brother', slug: null, color: 'FFFFFF' },
    { name: 'Intel', slug: 'intel', color: '0071C5' },
  ];

  // Duplicamos para el efecto de scroll infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div
          className="text-center mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Marcas
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Marcas y equipos que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              atendemos
            </span>
          </h2>
          <p className="text-blue-200/60 text-sm md:text-base max-w-2xl mx-auto">
            Trabajamos con todas las marcas y modelos del mercado
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carrusel infinito con fundido en los bordes */}
        <div
          className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="animate-scroll flex gap-5 md:gap-6 w-max">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center min-w-[130px] md:min-w-[150px] h-24 md:h-28 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
              >
                {brand.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${brand.slug}/${brand.color}`}
                    alt={brand.name}
                    loading="lazy"
                    className="max-w-full max-h-full w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-white/70 hover:text-white text-lg md:text-xl font-bold tracking-wide text-center transition-all duration-300">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicioMantenimientoBrands;