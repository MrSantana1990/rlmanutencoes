import SafeImage from "@/components/SafeImage";
import { SITE_IMAGES } from "@/siteImages";

export default function WorkGallery() {
  const items = [
    { src: SITE_IMAGES.mechanical, title: "Mecânica Industrial" },
    { src: SITE_IMAGES.hydraulic, title: "Sistemas Hidráulicos" },
    { src: SITE_IMAGES.pneumatic, title: "Sistemas Pneumáticos" },
    { src: SITE_IMAGES.electrical, title: "Elétrica Industrial" },
  ];

  return (
    <section className="section section-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Estrutura e tecnologia no dia a dia
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Visual técnico para comunicar o padrão de execução. Quando você tiver fotos reais de campo, é só substituir as imagens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl overflow-hidden bg-white shadow-md">
              <SafeImage
                src={item.src}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover"
                fallbackLabel={item.title}
              />
              <div className="p-5">
                <p className="font-semibold text-primary text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

