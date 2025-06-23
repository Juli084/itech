'use client';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ana Carolina',
    feedback:
      'Meu iPhone estava com a tela completamente quebrada e a iTech resolveu tudo no mesmo dia! Atendimento rápido e muito profissional.',
    avatar: '/avatars/ana.png',
  },
  {
    name: 'Bruno Fernandes',
    feedback:
      'Achei que meu celular estava perdido, mas consegui consertar com um preço justo. Voltarei sempre que precisar!',
    avatar: '/avatars/bruno.png',
  },
  {
    name: 'Mariana Lopes',
    feedback:
      'Equipe muito atenciosa, resolveram o problema de bateria em menos de 1 hora. Já recomendei pra vários amigos.',
    avatar: '/avatars/mariana.png',
  },
  {
    name: 'João Carlos',
    feedback:
      'Tive um problema com o áudio do iPhone e achei que teria que trocar de celular. A iTech resolveu tudo com eficiência e o atendimento foi excelente!',
    avatar: '/avatars/joao.png',
  },
  {
    name: 'Cecilia',
    feedback:
      'Meu iPad parou de carregar do nada e fiquei desesperada. Encontrei a iTech no Google, fui atendida no mesmo dia e saí com tudo funcionando. Recomendo de olhos fechados!',
    avatar: '/avatars/cecilia.png',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6" id="testemunhos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1d1d1f]">
          O que dizem nossos clientes
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          loopAdditionalSlides={3}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={700}
          grabCursor={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map(({ name, feedback, avatar }, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-[#f5f5f7] p-6 rounded-xl shadow text-left max-w-md w-full mx-auto transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">{name}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">"{feedback}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
