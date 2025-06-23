import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        <div>
          <h2 className="text-xl font-bold mb-2">iTech</h2>
          <p className="text-gray-400">
            Soluções Digitais com foco em excelência: assistência Apple, sites e tráfego pago.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#formulario" className="hover:underline">Assistência Técnica</a></li>
            <li><a href="#" className="hover:underline">Desenvolvimento de Sites</a></li>
            <li><a href="#" className="hover:underline">Gestão de Tráfego</a></li>
            <li><a href="https://wa.me/5515997534529" target="_blank" className="hover:underline">Fale pelo WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (15) 99753-4529
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              atendimento@itechsolucoesdigitais.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Sorocaba/SP
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/julio-rodrigues84/" target="_blank" className="hover:underline">
              LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="w-4 h-4" />
              <a href="https://www.instagram.com/itech.sorocaba/" target="_blank" className="hover:underline">
                @itech.sorocaba
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-xs">
        © {new Date().getFullYear()} iTech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
