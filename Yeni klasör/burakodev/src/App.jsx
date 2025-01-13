import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // İkonları import et
import photo from './assets/logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mehmet Burak Doğan - CV</h1>
        <img src={photo} alt="Mehmet Burak Doğan" className="profile-photo" />
      </header>

      <main>
        <section>
          <h2>Kişisel Bilgiler</h2>
          <ul>
            <li><strong>Adı Soyadı:</strong> Mehmet Burak Doğan</li>
            <li><strong>E-posta:</strong> mehmet.dogan4@kun.edu.tr</li>
            <li><strong>Adres:</strong> Kayseri, Türkiye</li>
          </ul>
        </section>

        <section>
          <h2>Eğitim Bilgileri</h2>
          <ul>
            <li><strong>Üniversite:</strong> Kapadokya Üniversitesi</li>
            <li><strong>Bölüm:</strong> Bilgisayar Programcılığı</li>
            <li><strong>Mezuniyet Yılı:</strong> 2025</li>
          </ul>
        </section>

        <section>
          <h2>İş Deneyimi</h2>
          <ul>
            <li><strong>Barmenlik:</strong> 3 yıl</li>
            <li><strong>Dış Ticaret:</strong> 1 yıl</li>
          </ul>
        </section>

        <section>
          <h2>Yetenekler</h2>
          <ul>
            <li><strong>Tekne Kullanmak</strong></li>
            <li><strong>İnsan İlişkileri</strong></li>
          </ul>
        </section>

        <section>
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li><strong>Yüzmek</strong></li>
            <li><strong>Müzik Dinlemek</strong></li>
            <li><strong>Gezmek</strong></li>
          </ul>
        </section>

        {/* Sosyal medya ikonları */}
        <section>
          <h2>Sosyal Medya</h2>
          <ul className="social-media-icons">
            <li>
              <a href="https://www.facebook.com/mehmetburak.dogan.98" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/burakkdog4n/profilecard/?igsh=MXM3c241NXBjNjhjbQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mehmet-burak-do%C4%9Fan-725443295" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/burak3538" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
