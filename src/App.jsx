import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Sparkles,
  X,
} from 'lucide-react'
import logo from './assets/jpn-logo.png'
import fleet from './assets/luxury-fleet.webp'
import owner from './assets/naeem-muhammad-prado.png'
import whatsappQr from './assets/whatsapp-qr.png'
import lineQr from './assets/line-qr.png'
import bmwImage from './assets/bmw-7-series.webp'
import lexusImage from './assets/lexus-lx.webp'
import pradoImage from './assets/land-cruiser-prado.webp'
import porscheImage from './assets/porsche-911.webp'
import bmwSilver from './assets/bmw-7-series-silver.webp'
import bmwWhite from './assets/bmw-7-series-white.webp'
import lexusBlack from './assets/lexus-lx-black.webp'
import lexusGrey from './assets/lexus-lx-grey.webp'
import pradoWhite from './assets/land-cruiser-prado-white.webp'
import pradoBlack from './assets/land-cruiser-prado-black.webp'
import porscheSilver from './assets/porsche-911-silver.webp'
import porscheGreen from './assets/porsche-911-green.webp'
import priusYellow from './assets/toyota-prius-yellow.webp'
import priusWhite from './assets/toyota-prius-white.webp'
import priusBlack from './assets/toyota-prius-black.webp'
import accordBlue from './assets/honda-accord-blue.webp'
import accordWhite from './assets/honda-accord-white.webp'
import accordBlack from './assets/honda-accord-black.webp'
import citySilver from './assets/honda-city-silver.webp'
import cityWhite from './assets/honda-city-white.webp'
import cityBlack from './assets/honda-city-black.webp'
import civicRed from './assets/honda-civic-red.webp'
import civicWhite from './assets/honda-civic-white.webp'
import civicBlue from './assets/honda-civic-blue.webp'
import crownSand from './assets/toyota-crown-sand.webp'
import crownWhite from './assets/toyota-crown-white.webp'
import crownBlack from './assets/toyota-crown-black.webp'
import lsBlack from './assets/lexus-ls-black.webp'
import lsSilver from './assets/lexus-ls-silver.webp'
import lsWhite from './assets/lexus-ls-white.webp'
import alphardWhite from './assets/toyota-alphard-white.webp'
import alphardBlack from './assets/toyota-alphard-black.webp'
import alphardGrey from './assets/toyota-alphard-grey.webp'
import gtrSilver from './assets/nissan-gtr-silver.webp'
import gtrRed from './assets/nissan-gtr-red.webp'
import gtrBlack from './assets/nissan-gtr-black.webp'

const content = {
  en: {
    nav: ['Collection', 'About', 'Services', 'Contact'],
    navIds: ['collection', 'about', 'services', 'contact'],
    availability: 'Sourcing from Japan · Shipping worldwide',
    eyebrow: 'JAPANESE AUTOMOTIVE EXPORT',
    heroLine1: 'Japan-sourced.',
    heroLine2: 'World-ready.',
    heroBody:
      'Thoughtfully sourced vehicles, clear communication, and dependable export support—from Japan to your driveway.',
    explore: 'Explore collection',
    contact: 'Contact Naeem',
    scroll: 'Scroll to discover',
    stats: [
      ['Japan', 'Sourcing network'],
      ['Worldwide', 'Export support'],
      ['1-to-1', 'Personal service'],
    ],
    collectionKicker: 'CURATED SELECTION',
    collectionTitle: 'Modern icons. Chosen with care.',
    collectionBody:
      'From executive sedans to capable SUVs, we help source the right vehicle for your market and lifestyle.',
    collectionNote: 'A color for every character.',
    colorHint: 'Select a finish to explore',
    colorLabel: 'Exterior',
    collectionDisclaimer: 'Illustrative color previews. Actual finishes and availability are confirmed when sourcing your vehicle.',
    vehicleEnquiry: 'Enquire',
    brandCaption: 'Quality cars, trusted worldwide',
    colors: {
      black: 'Obsidian black', silver: 'Metallic silver', white: 'Pearl white',
      grey: 'Titanium grey', sand: 'Sand bronze', red: 'Garnet red',
      green: 'Racing green', yellow: 'Mustard yellow', blue: 'Deep blue',
    },
    viewAll: 'Enquire about a vehicle',
    cars: [
      ['BMW 7 Series', 'Executive luxury', 'Precision, comfort, presence.'],
      ['Lexus LX', 'Premium SUV', 'Japanese refinement without compromise.'],
      ['Land Cruiser Prado', 'Luxury 4×4', 'Legendary capability, everyday comfort.'],
      ['Porsche 911 Carrera', 'Modern sports icon', 'Timeless form, contemporary performance.'],
      ['Toyota Prius', 'Progressive hybrid', 'Forward-thinking design. Everyday brilliance.'],
      ['Honda Accord', 'Refined hybrid sedan', 'Effortless elegance, wherever life leads.'],
      ['Honda City', 'Urban elegance', 'Thoughtful proportions. Refined everyday driving.'],
      ['Honda Civic', 'Sporting sedan', 'Sharp design with an unmistakable spirit.'],
      ['Toyota Crown', 'Modern Japanese luxury', 'A distinctive silhouette with a regal presence.'],
      ['Lexus LS', 'Flagship luxury', 'Quiet sophistication, crafted around you.'],
      ['Toyota Alphard', 'Executive MPV', 'First-class comfort for every journey.'],
      ['Nissan GT-R', 'Japanese performance icon', 'Engineering passion. Unforgettable presence.'],
    ],
    aboutKicker: 'PERSONAL SERVICE',
    aboutTitle: 'A trusted point of contact in Japan.',
    aboutBody:
      'Led by Naeem Muhammad, JPN LLC brings a responsive, detail-focused approach to vehicle sourcing and export. You speak directly with the person handling your enquiry.',
    ownerRole: 'Representative Director · 代表取締役',
    ownerName: 'Naeem Muhammad',
    ownerJapanese: 'ネイム ムハンマド',
    ownerQuote: 'Quality cars. Clear communication. Trusted worldwide.',
    values: ['Direct communication', 'Careful vehicle selection', 'Export-focused support'],
    servicesKicker: 'HOW WE HELP',
    servicesTitle: 'Simple from search to shipment.',
    services: [
      ['01', 'Source', 'Share your make, model, budget, and destination. We search Japan for suitable options.'],
      ['02', 'Verify', 'We review the vehicle details and keep the process clear before you decide.'],
      ['03', 'Export', 'We coordinate the next steps and support your shipment from Japan.'],
    ],
    contactKicker: 'START A CONVERSATION',
    contactTitle: 'Your next car may already be in Japan.',
    contactBody: 'Call, email, or scan a QR code. Naeem will respond personally.',
    phone: 'Phone / TEL',
    email: 'Email',
    address: 'Japan office',
    addressValue: '13 Higashiura, Kannondo, Joyo, Kyoto, Japan',
    whatsapp: 'WhatsApp',
    line: 'LINE',
    scan: 'Scan to connect',
    lineConnect: 'Connect on LINE',
    callNow: 'Call now',
    emailNow: 'Send email',
    footer: 'Japanese car sourcing & export',
    managed: 'Designed & managed by AIQUE',
  },
  ja: {
    nav: ['在庫車', '私たちについて', 'サービス', 'お問い合わせ'],
    navIds: ['collection', 'about', 'services', 'contact'],
    availability: '日本から厳選 · 世界各国へ輸出',
    eyebrow: '日本車輸出サービス',
    heroLine1: '日本から厳選。',
    heroLine2: '世界へお届け。',
    heroBody:
      '丁寧な車両選び、分かりやすいご案内、安心の輸出サポート。日本からお客様のもとへお届けします。',
    explore: '車両を見る',
    contact: 'ネイムに相談する',
    scroll: 'スクロールして見る',
    stats: [
      ['日本', '仕入れネットワーク'],
      ['世界各国', '輸出サポート'],
      ['1対1', 'パーソナル対応'],
    ],
    collectionKicker: '厳選ラインアップ',
    collectionTitle: 'こだわりの一台を、丁寧に。',
    collectionBody:
      '高級セダンから本格SUVまで、お客様の市場とライフスタイルに合う車両をお探しします。',
    collectionNote: 'あなたらしさを映す、カラー。',
    colorHint: 'カラーを選んでご覧ください',
    colorLabel: 'ボディカラー',
    collectionDisclaimer: '画像はカラーのイメージです。実際の色と取扱状況は車両をお探しする際に確認いたします。',
    vehicleEnquiry: 'お問い合わせ',
    brandCaption: '高品質な車を、世界へ',
    colors: {
      black: 'オブシディアンブラック', silver: 'メタリックシルバー', white: 'パールホワイト',
      grey: 'チタニウムグレー', sand: 'サンドブロンズ', red: 'ガーネットレッド',
      green: 'レーシンググリーン', yellow: 'マスタードイエロー', blue: 'ディープブルー',
    },
    viewAll: '車両について問い合わせる',
    cars: [
      ['BMW 7シリーズ', '高級セダン', '精密さ、快適さ、圧倒的な存在感。'],
      ['レクサス LX', 'プレミアムSUV', '妥協のない日本の洗練。'],
      ['ランドクルーザー プラド', 'ラグジュアリー4WD', '信頼の走破性と日常の快適性。'],
      ['ポルシェ 911 カレラ', 'モダンスポーツ', '時代を超えるフォルムと現代のパフォーマンス。'],
      ['トヨタ プリウス', '先進のハイブリッド', '未来を感じるデザイン。毎日に、新しい輝きを。'],
      ['ホンダ アコード', '上質なハイブリッドセダン', 'どんな道にも、自然体のエレガンスを。'],
      ['ホンダ シティ', '上質なコンパクトセダン', '洗練されたフォルムで、毎日の運転を上質に。'],
      ['ホンダ シビック', 'スポーティーセダン', 'シャープなデザインに、走る歓びを。'],
      ['トヨタ クラウン', '日本のモダンラグジュアリー', '気品ある存在感を、個性的なシルエットに。'],
      ['レクサス LS', 'フラッグシップセダン', '静かな洗練と、心を満たすおもてなし。'],
      ['トヨタ アルファード', 'エグゼクティブミニバン', 'すべての旅に、ファーストクラスのくつろぎを。'],
      ['日産 GT-R', '日本のパフォーマンスアイコン', '技術への情熱。忘れられない存在感。'],
    ],
    aboutKicker: 'パーソナルサービス',
    aboutTitle: '日本で信頼できる窓口を。',
    aboutBody:
      'JPN合同会社は、代表のネイム・ムハンマドが車両仕入れから輸出まで丁寧に対応します。お問い合わせから直接、担当者とお話しいただけます。',
    ownerRole: '代表取締役 · Representative Director',
    ownerName: 'ネイム ムハンマド',
    ownerJapanese: 'NAEEM MUHAMMAD',
    ownerQuote: '高品質な車を、明確なご案内で、世界へ。',
    values: ['直接のコミュニケーション', '丁寧な車両選び', '輸出に特化したサポート'],
    servicesKicker: 'サービスの流れ',
    servicesTitle: '検索から輸送まで、シンプルに。',
    services: [
      ['01', '検索', 'メーカー、車種、ご予算、輸出先をお知らせください。日本国内でお探しします。'],
      ['02', '確認', 'ご決定前に車両情報を確認し、分かりやすくご案内します。'],
      ['03', '輸出', '必要な手続きを調整し、日本からの輸送をサポートします。'],
    ],
    contactKicker: 'お問い合わせ',
    contactTitle: '次の一台は、日本にあるかもしれません。',
    contactBody: 'お電話、メール、またはQRコードからご連絡ください。ネイムが直接対応します。',
    phone: '電話 / TEL',
    email: 'メール',
    address: '日本事務所',
    addressValue: '京都府城陽市観音堂東浦13',
    whatsapp: 'WhatsApp',
    line: 'LINE',
    scan: 'スキャンして追加',
    lineConnect: 'LINEでつながる',
    callNow: '電話する',
    emailNow: 'メールを送る',
    footer: '日本車の仕入れ・輸出',
    managed: 'Designed & managed by AIQUE',
  },
}

const vehicles = [
  { id: 'bmw', colors: [['black', '#171a20', bmwImage], ['silver', '#bfc3c7', bmwSilver], ['white', '#f2f0e9', bmwWhite]] },
  { id: 'lexus', colors: [['white', '#f2f0e9', lexusImage], ['black', '#171a20', lexusBlack], ['grey', '#777c82', lexusGrey]] },
  { id: 'prado', colors: [['sand', '#b29772', pradoImage], ['white', '#f2f0e9', pradoWhite], ['black', '#171a20', pradoBlack]] },
  { id: 'porsche', colors: [['red', '#6b1e2c', porscheImage], ['silver', '#bfc3c7', porscheSilver], ['green', '#154b3d', porscheGreen]] },
  { id: 'prius', colors: [['yellow', '#d2ad37', priusYellow], ['white', '#f2f0e9', priusWhite], ['black', '#171a20', priusBlack]] },
  { id: 'accord', colors: [['blue', '#254969', accordBlue], ['white', '#f2f0e9', accordWhite], ['black', '#171a20', accordBlack]] },
  { id: 'city', colors: [['silver', '#bfc3c7', citySilver], ['white', '#f2f0e9', cityWhite], ['black', '#171a20', cityBlack]] },
  { id: 'civic', colors: [['red', '#6b1e2c', civicRed], ['white', '#f2f0e9', civicWhite], ['blue', '#254969', civicBlue]] },
  { id: 'crown', colors: [['sand', '#b29772', crownSand], ['white', '#f2f0e9', crownWhite], ['black', '#171a20', crownBlack]] },
  { id: 'ls', colors: [['black', '#171a20', lsBlack], ['silver', '#bfc3c7', lsSilver], ['white', '#f2f0e9', lsWhite]] },
  { id: 'alphard', colors: [['white', '#f2f0e9', alphardWhite], ['black', '#171a20', alphardBlack], ['grey', '#777c82', alphardGrey]] },
  { id: 'gtr', colors: [['silver', '#bfc3c7', gtrSilver], ['red', '#6b1e2c', gtrRed], ['black', '#171a20', gtrBlack]] },
]

function VehicleCard({ vehicle, copy, index, t }) {
  const [selected, setSelected] = useState(0)
  const [name, type, description] = copy
  const [color, , image] = vehicle.colors[selected]

  return (
    <article className="vehicle-card" data-reveal style={{ '--delay': `${(index % 3) * 80}ms` }}>
      <div className="vehicle-image">
        <img key={image} src={image} alt={`${name} — ${t.colors[color]}`} loading="lazy" decoding="async" width="1448" height="1086" />
        <span className="vehicle-number">{String(index + 1).padStart(2, '0')}</span>
        <a className="vehicle-arrow" href="#contact" aria-label={`${t.vehicleEnquiry}: ${name}`}><ArrowUpRight size={18} /></a>
        <span className="vehicle-finish">{t.colors[color]}</span>
      </div>
      <div className="vehicle-info">
        <span className="vehicle-type">{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="vehicle-colors">
          <div className="color-copy" aria-live="polite"><small>{t.colorLabel}</small><strong>{t.colors[color]}</strong></div>
          <div className="color-options" role="group" aria-label={`${name} — ${t.colorLabel}`}>
            {vehicle.colors.map(([key, hex], colorIndex) => (
              <button key={key} type="button" className={`color-swatch${selected === colorIndex ? ' is-selected' : ''}`} style={{ '--swatch': hex }} aria-label={`${name}: ${t.colors[key]}`} aria-pressed={selected === colorIndex} title={t.colors[key]} onClick={() => setSelected(colorIndex)}><span /></button>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [lang])

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="JPN LLC home">
          <img src={logo} alt="JPN LLC" />
          <span>
            <strong>JPN LLC</strong>
            <small>CAR EXPORTING · JAPAN</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={t.navIds[index]} href={`#${t.navIds[index]}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
            aria-label={lang === 'en' ? 'Switch site to Japanese' : 'Switch site to English'}
            title={lang === 'en' ? '日本語に切り替える' : 'Switch to English'}
          >
            <Globe2 size={16} />
            <span>{lang === 'en' ? '日本語' : 'EN'}</span>
          </button>
          <a className="header-contact" href="tel:+817091555173">
            <Phone size={16} />
            <span>070 9155 5173</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={lang === 'en' ? 'Toggle menu' : 'メニューを開閉'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero-image" src={fleet} alt="Premium Japanese vehicles at a port" />
          <div className="hero-overlay" />
          <div className="hero-grain" />
          <div className="hero-layout">
          <div className="hero-content">
            <div className="availability-pill">
              <span className="pulse-dot" />
              {t.availability}
            </div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              <span>{t.heroLine1}</span>
              <em>{t.heroLine2}</em>
            </h1>
            <p className="hero-copy">{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#collection">
                {t.explore} <ArrowRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                {t.contact} <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <figure className="hero-brand-art">
            <div className="hero-logo-frame"><img src={logo} alt="JPN LLC — Car Exporting. Quality cars, trusted worldwide." width="1254" height="1254" /></div>
            <figcaption><span />{t.brandCaption}<span /></figcaption>
          </figure>
          </div>
          <div className="hero-scroll">
            <span>{t.scroll}</span>
            <span className="scroll-line" />
          </div>
        </section>

        <section className="stat-strip" aria-label="JPN LLC highlights">
          {t.stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section collection" id="collection">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow dark">{t.collectionKicker}</p>
              <h2>{t.collectionTitle}</h2>
            </div>
            <p>{t.collectionBody}</p>
          </div>

          <div className="collection-toolbar" data-reveal><p>{t.collectionNote}</p><span>{t.colorHint}<span className="finish-dots" aria-hidden="true"><i /><i /><i /></span></span></div>
          <div className="vehicle-grid">
            {vehicles.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} copy={t.cars[index]} index={index} t={t} />)}
          </div>
          <p className="collection-disclaimer">{t.collectionDisclaimer}</p>
          <a className="text-link" href="#contact">
            {t.viewAll} <ArrowRight size={17} />
          </a>
        </section>

        <section className="section about" id="about">
          <div className="owner-visual" data-reveal>
            <div className="owner-frame">
              <img src={owner} alt="Naeem Muhammad beside a white Toyota Prado in Japan" loading="lazy" width="960" height="1280" />
            </div>
            <div className="owner-tag">
              <span>{t.ownerRole}</span>
              <strong>{t.ownerName}</strong>
              <small>{t.ownerJapanese}</small>
            </div>
          </div>
          <div className="about-content" data-reveal>
            <p className="eyebrow light">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
            <p className="about-copy">{t.aboutBody}</p>
            <blockquote>“{t.ownerQuote}”</blockquote>
            <ul className="value-list">
              {t.values.map((value) => (
                <li key={value}><CheckCircle2 size={18} /> {value}</li>
              ))}
            </ul>
            <a className="button button-gold" href="https://wa.me/817091555173" target="_blank" rel="noreferrer">
              WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="services-title" data-reveal>
            <p className="eyebrow dark">{t.servicesKicker}</p>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="service-grid">
            {t.services.map(([number, title, body], index) => {
              const icons = [Search, ShieldCheck, Ship]
              const Icon = icons[index]
              return (
                <article className="service-card" key={number} data-reveal style={{ '--delay': `${index * 100}ms` }}>
                  <div className="service-icon"><Icon size={24} /></div>
                  <span className="service-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="service-line" />
                </article>
              )
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro" data-reveal>
            <p className="eyebrow dark">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
            <div className="contact-list">
              <a href="tel:+817091555173">
                <span><Phone size={19} /></span>
                <div><small>{t.phone}</small><strong>070-9155-5173</strong></div>
                <ChevronRight size={18} />
              </a>
              <a href="mailto:naeemkapo5612@gmail.com">
                <span><Mail size={19} /></span>
                <div><small>{t.email}</small><strong>naeemkapo5612@gmail.com</strong></div>
                <ChevronRight size={18} />
              </a>
              <div className="contact-row">
                <span><MapPin size={19} /></span>
                <div><small>{t.address}</small><strong>{t.addressValue}</strong></div>
              </div>
            </div>
            <div className="contact-buttons">
              <a className="button button-dark" href="tel:+817091555173">{t.callNow} <Phone size={16} /></a>
              <a className="button button-outline" href="mailto:naeemkapo5612@gmail.com">{t.emailNow} <Mail size={16} /></a>
            </div>
          </div>

          <div className="qr-grid" data-reveal>
            <article className="qr-card whatsapp">
              <div className="qr-heading">
                <span><MessageCircle size={20} /></span>
                <div><strong>{t.whatsapp}</strong><small>{t.scan}</small></div>
              </div>
              <img src={whatsappQr} alt="JPN LLC WhatsApp QR code" />
              <a href="https://wa.me/817091555173" target="_blank" rel="noreferrer">wa.me/817091555173 <ArrowUpRight size={14} /></a>
            </article>
            <article className="qr-card line">
              <div className="qr-heading">
                <span>LINE</span>
                <div><strong>{t.line}</strong><small>{t.scan}</small></div>
              </div>
              <img src={lineQr} alt="JPN LLC LINE QR code" />
              <p>{t.lineConnect}</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src={logo} alt="" />
          <div><strong>JPN LLC</strong><span>{t.footer}</span></div>
        </div>
        <p>© {new Date().getFullYear()} JPN LLC. All rights reserved.</p>
        <span className="managed-credit">{t.managed} <Sparkles size={13} /></span>
      </footer>
    </div>
  )
}

export default App
