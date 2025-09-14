import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih atas pesan Anda. Kami akan segera merespons.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">Hubungi Kami</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Silakan hubungi kami melalui formulir, telepon, atau kunjungi kantor kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Kirim Pesan</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Alamat Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subjek</label>
                <input type="text" id="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Pesan Anda</label>
                <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-secondary mb-4">Informasi Kontak</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <MapPinIcon className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Alamat Kantor</h4>
                            <p className="text-slate-600">Jl. Contoh Raya No. 1, Jakarta, 10110, Indonesia</p>
                        </div>
                    </li>
                     <li className="flex items-start">
                        <PhoneIcon className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Telepon / WhatsApp</h4>
                            <a href="tel:+628123456789" className="text-slate-600 hover:text-primary transition-colors">+62-8123456789</a>
                        </div>
                    </li>
                     <li className="flex items-start">
                        <MailIcon className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <a href="mailto:sales@batupasirjaya.com" className="text-slate-600 hover:text-primary transition-colors">sales@batupasirjaya.com</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-secondary mb-4">Lokasi Kami</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden bg-slate-200">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666426391485!2d106.82496411476885!3d-6.175392395529156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1628856698385!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;