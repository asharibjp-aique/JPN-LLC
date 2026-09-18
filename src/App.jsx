import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowRightLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe2,
  Languages,
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
import fleet from './assets/luxury-fleet.png'
import owner from './assets/naeem-muhammad.png'
import whatsappQr from './assets/whatsapp-qr.png'
import lineQr from './assets/line-qr.png'

const content = {
  en: {
    nav: ['Collection', 'About', 'Services', 'Translate', 'Contact'],
    navIds: ['collection', 'about', 'services', 'translate', 'contact'],
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
    viewAll: 'Enquire about a vehicle',
    cars: [
      ['BMW 7 Series', 'Executive luxury', 'Precision, comfort, presence.'],
      ['Lexus LX', 'Premium SUV', 'Japanese refinement without compromise.'],
      ['Land Cruiser Prado', 'Luxury 4×4', 'Legendary capability, everyday comfort.'],
      ['New-model selection', 'Sourced to order', 'Tell us what you want. We will find it.'],
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
    translatorKicker: 'LANGUAGE BRIDGE',
    translatorTitle: 'English ↔ Japanese translator',
    translatorBody:
      'Translate a message before sending your enquiry. This tool runs entirely from the browser—no JPN LLC account required.',
    fromEnglish: 'English to Japanese',
    fromJapanese: 'Japanese to English',
    inputPlaceholderEn: 'Type your English message…',
    inputPlaceholderJa: '日本語のメッセージを入力してください…',
    outputPlaceholder: 'Your translation will appear here.',
    translateButton: 'Translate message',
    translating: 'Translating…',
    openGoogle: 'Open in Google Translate',
    translatorNote: 'Machine translation may not capture every nuance. We are happy to clarify your enquiry personally.',
    translatorError: 'The instant translator is unavailable right now. Use the Google Translate option below.',
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
    callNow: 'Call now',
    emailNow: 'Send email',
    footer: 'Japanese car sourcing & export',
    managed: 'Designed & managed by AIQUE',
  },
  ja: {
    nav: ['在庫車', '私たちについて', 'サービス', '翻訳', 'お問い合わせ'],
    navIds: ['collection', 'about', 'services', 'translate', 'contact'],
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
    viewAll: '車両について問い合わせる',
    cars: [
      ['BMW 7シリーズ', '高級セダン', '精密さ、快適さ、圧倒的な存在感。'],
      ['レクサス LX', 'プレミアムSUV', '妥協のない日本の洗練。'],
      ['ランドクルーザー プラド', 'ラグジュアリー4WD', '信頼の走破性と日常の快適性。'],
      ['新型車セレクション', 'オーダー仕入れ', 'ご希望をお聞かせください。最適な一台を探します。'],
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
    translatorKicker: '言葉をつなぐ',
    translatorTitle: '英語 ↔ 日本語 翻訳',
    translatorBody:
      'お問い合わせを送る前にメッセージを翻訳できます。JPN合同会社のアカウント登録は不要です。',
    fromEnglish: '英語から日本語',
    fromJapanese: '日本語から英語',
    inputPlaceholderEn: '英語のメッセージを入力してください…',
    inputPlaceholderJa: '日本語のメッセージを入力してください…',
    outputPlaceholder: '翻訳結果がここに表示されます。',
    translateButton: 'メッセージを翻訳',
    translating: '翻訳中…',
    openGoogle: 'Google翻訳で開く',
    translatorNote: '機械翻訳では細かなニュアンスが伝わらない場合があります。お気軽に直接お問い合わせください。',
    translatorError: '現在、即時翻訳を利用できません。下のGoogle翻訳をご利用ください。',
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
    callNow: '電話する',
    emailNow: 'メールを送る',
    footer: '日本車の仕入れ・輸出',
    managed: 'Designed & managed by AIQUE',
  },
}

const vehicles = [
  { position: '18% center', className: 'prado' },
  { position: '43% center', className: 'lexus' },
  { position: '68% center', className: 'bmw' },
  { position: '89% center', className: 'sport' },
]

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [direction, setDirection] = useState('en-ja')
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [translationState, setTranslationState] = useState('idle')
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

  const translatorConfig = useMemo(() => {
    const source = direction === 'en-ja' ? 'en' : 'ja'
    const target = direction === 'en-ja' ? 'ja' : 'en'
    return { source, target }
  }, [direction])

  const swapDirection = () => {
    setDirection((current) => (current === 'en-ja' ? 'ja-en' : 'en-ja'))
    setSourceText(translatedText)
    setTranslatedText(sourceText)
    setTranslationState('idle')
  }

  const translateMessage = async () => {
    if (!sourceText.trim()) return
    setTranslationState('loading')
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        sourceText.trim().slice(0, 500),
      )}&langpair=${translatorConfig.source}|${translatorConfig.target}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('Translation request failed')
      const data = await response.json()
      if (!data?.responseData?.translatedText) throw new Error('Translation unavailable')
      setTranslatedText(data.responseData.translatedText)
      setTranslationState('success')
    } catch {
      setTranslatedText('')
      setTranslationState('error')
    }
  }

  const googleTranslateUrl = `https://translate.google.com/?sl=${translatorConfig.source}&tl=${translatorConfig.target}&text=${encodeURIComponent(
    sourceText,
  )}&op=translate`

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
            aria-label="Switch site language"
          >
            <Globe2 size={16} />
            <span>{lang === 'en' ? '日本語' : 'EN'}</span>
          </button>
          <a className="header-contact" href="tel:+817091555173">
            <Phone size={16} />
            <span>070 9155 5173</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero-image" src={fleet} alt="Premium Japanese vehicles at a port" />
          <div className="hero-overlay" />
          <div className="hero-grain" />
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

          <div className="vehicle-grid">
            {t.cars.map(([name, type, description], index) => (
              <article className="vehicle-card" key={name} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                <div className={`vehicle-image ${vehicles[index].className}`}>
                  <img
                    src={fleet}
                    alt={`${name} — ${type}`}
                    style={{ objectPosition: vehicles[index].position }}
                  />
                  <span className="vehicle-number">0{index + 1}</span>
                  <span className="vehicle-arrow"><ArrowUpRight size={18} /></span>
                </div>
                <div className="vehicle-info">
                  <span>{type}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="text-link" href="#contact">
            {t.viewAll} <ArrowRight size={17} />
          </a>
        </section>

        <section className="section about" id="about">
          <div className="owner-visual" data-reveal>
            <div className="owner-frame">
              <img src={owner} alt="Naeem Muhammad, Representative Director of JPN LLC" />
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

        <section className="section translator-section" id="translate">
          <div className="translator-intro" data-reveal>
            <div className="translator-orbit">
              <Languages size={34} />
              <span>EN</span>
              <span>日本語</span>
            </div>
            <p className="eyebrow light">{t.translatorKicker}</p>
            <h2>{t.translatorTitle}</h2>
            <p>{t.translatorBody}</p>
          </div>

          <div className="translator-card" data-reveal>
            <div className="direction-tabs">
              <button
                className={direction === 'en-ja' ? 'active' : ''}
                onClick={() => setDirection('en-ja')}
              >
                EN <ArrowRight size={14} /> 日本語
              </button>
              <button
                className={direction === 'ja-en' ? 'active' : ''}
                onClick={() => setDirection('ja-en')}
              >
                日本語 <ArrowRight size={14} /> EN
              </button>
            </div>

            <div className="translation-fields">
              <label>
                <span>{direction === 'en-ja' ? 'English' : '日本語'}</span>
                <textarea
                  value={sourceText}
                  onChange={(event) => setSourceText(event.target.value)}
                  placeholder={direction === 'en-ja' ? t.inputPlaceholderEn : t.inputPlaceholderJa}
                  maxLength={500}
                />
                <small>{sourceText.length}/500</small>
              </label>

              <button className="swap-button" onClick={swapDirection} aria-label="Swap translation direction">
                <ArrowRightLeft size={18} />
              </button>

              <label>
                <span>{direction === 'en-ja' ? '日本語' : 'English'}</span>
                <div className={`translation-output ${translationState === 'error' ? 'error' : ''}`}>
                  {translationState === 'error'
                    ? t.translatorError
                    : translatedText || t.outputPlaceholder}
                </div>
              </label>
            </div>

            <div className="translator-actions">
              <button className="button button-gold" onClick={translateMessage} disabled={!sourceText.trim() || translationState === 'loading'}>
                {translationState === 'loading' ? <><Clock3 className="spin" size={17} /> {t.translating}</> : <><Sparkles size={17} /> {t.translateButton}</>}
              </button>
              <a className="google-link" href={googleTranslateUrl} target="_blank" rel="noreferrer">
                {t.openGoogle} <ExternalLink size={15} />
              </a>
            </div>
            <p className="translator-note">{t.translatorNote}</p>
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
              <p>Connect on LINE</p>
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
