import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Smartphone, ChevronRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

type MessageRole = 'bot' | 'user';

interface Message {
  id: number;
  role: MessageRole;
  text: string;
  options?: QuickOption[];
}

interface QuickOption {
  label: string;
  value: string;
}

const FLOWS: Record<string, { reply: string; options?: QuickOption[] }> = {
  start: {
    reply: "Bonjour ! Je suis l'assistant mobile Arotech 👋\nComment puis-je vous aider aujourd'hui ?",
    options: [
      { label: '📱 Support GSM / Tablette', value: 'gsm' },
      { label: '📧 Microsoft 365 mobile', value: 'm365' },
      { label: '📞 Parler à un expert', value: 'contact' },
    ],
  },
  gsm: {
    reply: 'Quel type de problème rencontrez-vous avec votre appareil mobile ?',
    options: [
      { label: '📶 Problème de connexion', value: 'gsm_wifi' },
      { label: '🔧 Configuration email', value: 'gsm_email' },
      { label: '🔄 Mise à jour / maintenance', value: 'gsm_update' },
      { label: '🔁 Réinitialisation appareil', value: 'gsm_reset' },
    ],
  },
  gsm_wifi: {
    reply:
      'Pour les problèmes de connexion WiFi ou réseau mobile :\n• Vérifiez le mode avion (activez/désactivez)\n• Oubliez le réseau WiFi et reconnectez-vous\n• Redémarrez l\'appareil\n• Vérifiez les paramètres APN pour le réseau mobile\n\nSi le problème persiste, notre équipe peut intervenir à distance ou sur site.',
    options: [
      { label: '📞 Contacter le support', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  gsm_email: {
    reply:
      'Configuration email sur mobile :\n• Android : Paramètres → Comptes → Ajouter un compte → Exchange\n• iOS : Réglages → Mail → Comptes → Microsoft Exchange\n• Serveur : outlook.office365.com\n• Port : 443 (SSL activé)\n\nVous avez besoin de votre adresse email et mot de passe Microsoft 365.',
    options: [
      { label: '📧 En savoir plus sur M365', value: 'm365' },
      { label: '📞 Aide à la configuration', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  gsm_update: {
    reply:
      'Bonnes pratiques de maintenance mobile :\n• Mettez à jour le système iOS/Android régulièrement\n• Activez les mises à jour automatiques des apps\n• Sauvegardez vos données (iCloud / Google Drive)\n• Nettoyez le cache des applications mensuellement\n• Activez le chiffrement de l\'appareil pour la sécurité',
    options: [
      { label: '🔒 Sécurité mobile', value: 'gsm_security' },
      { label: '📞 Support Arotech', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  gsm_reset: {
    reply:
      '⚠️ Avant de réinitialiser votre appareil :\n1. Sauvegardez vos photos, contacts et données\n2. Notez vos mots de passe importants\n3. Déconnectez-vous de vos comptes (Apple ID / Google)\n\nRéinitialisation :\n• Android : Paramètres → Système → Réinitialiser\n• iOS : Réglages → Général → Transférer/Réinitialiser\n\nNous pouvons vous accompagner dans cette procédure.',
    options: [
      { label: '📞 Demander de l\'aide', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  gsm_security: {
    reply:
      'Sécurité de votre mobile :\n• Activez le verrouillage biométrique (empreinte/Face ID)\n• Utilisez un VPN sur les WiFi publics\n• Installez les mises à jour de sécurité immédiatement\n• Évitez les apps hors des stores officiels\n• Arotech propose des solutions MDM pour les entreprises',
    options: [
      { label: '🏢 Solutions MDM entreprise', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  m365: {
    reply: 'Que souhaitez-vous configurer sur Microsoft 365 mobile ?',
    options: [
      { label: '📧 Outlook mobile', value: 'm365_outlook' },
      { label: '💬 Teams sur mobile', value: 'm365_teams' },
      { label: '☁️ OneDrive / SharePoint', value: 'm365_onedrive' },
      { label: '🔑 Problème de connexion', value: 'm365_login' },
    ],
  },
  m365_outlook: {
    reply:
      'Configurer Outlook sur mobile :\n1. Téléchargez "Microsoft Outlook" depuis l\'App Store ou Google Play\n2. Ouvrez l\'app → Ajouter un compte\n3. Entrez votre email d\'entreprise\n4. Authentification via Microsoft (MFA si activé)\n5. Synchronisation automatique de vos emails, calendrier et contacts\n\n💡 Astuce : activez les notifications push pour ne rien manquer.',
    options: [
      { label: '🔑 Problème de connexion', value: 'm365_login' },
      { label: '📞 Assistance configuration', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  m365_teams: {
    reply:
      'Microsoft Teams sur mobile :\n1. Installez "Microsoft Teams" depuis votre store\n2. Connectez-vous avec votre compte Microsoft 365\n3. Accédez à vos équipes, canaux et réunions\n4. Activez les notifications pour les mentions\n5. Rejoignez les réunions d\'un tap depuis le calendrier\n\n💡 Teams mobile supporte aussi le partage d\'écran et la visioconférence HD.',
    options: [
      { label: '☁️ OneDrive mobile', value: 'm365_onedrive' },
      { label: '📞 Support Microsoft 365', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  m365_onedrive: {
    reply:
      'OneDrive & SharePoint sur mobile :\n• Installez "OneDrive" pour accéder à vos fichiers personnels\n• Installez "SharePoint" pour les documents d\'équipe\n• Activez la sauvegarde automatique des photos (Camera Roll)\n• Travaillez hors ligne : marquez les fichiers pour un accès sans internet\n• Partagez des fichiers directement depuis l\'app mobile',
    options: [
      { label: '📞 Formation Microsoft 365', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  m365_login: {
    reply:
      'Problèmes de connexion Microsoft 365 :\n• Vérifiez votre mot de passe (réinitialisez si nécessaire)\n• Si MFA activé : approuvez la demande sur l\'app Authenticator\n• Videz le cache de l\'application\n• Vérifiez la date/heure de votre appareil (doit être correcte)\n• En entreprise : contactez votre admin pour vérifier les licences\n\nArotech peut gérer votre tenant Microsoft 365.',
    options: [
      { label: '📞 Contacter notre admin M365', value: 'contact' },
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
  contact: {
    reply:
      'Notre équipe est disponible pour vous aider ! 🚀\nVous pouvez nous contacter via le formulaire ou directement par téléphone.\n\nHoraires : Lun–Ven, 8h–18h',
    options: [
      { label: '🏠 Retour au menu', value: 'start' },
    ],
  },
};

let msgId = 0;
const newMsg = (role: MessageRole, text: string, options?: QuickOption[]): Message => ({
  id: ++msgId,
  role,
  text,
  options,
});

export default function MobileAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    newMsg('bot', FLOWS.start.reply, FLOWS.start.options),
  ]);
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleOption = (value: string, label: string) => {
    const flow = FLOWS[value];
    if (!flow) return;

    setMessages((prev) => [
      ...prev,
      newMsg('user', label),
      newMsg('bot', flow.reply, flow.options),
    ]);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    setInputValue('');

    const lower = text.toLowerCase();
    let flowKey = 'contact';
    if (lower.includes('gsm') || lower.includes('téléphone') || lower.includes('telephone') || lower.includes('mobile') || lower.includes('tablette')) {
      flowKey = 'gsm';
    } else if (lower.includes('365') || lower.includes('outlook') || lower.includes('teams') || lower.includes('onedrive') || lower.includes('microsoft')) {
      flowKey = 'm365';
    } else if (lower.includes('wifi') || lower.includes('connexion') || lower.includes('réseau')) {
      flowKey = 'gsm_wifi';
    } else if (lower.includes('email') || lower.includes('mail')) {
      flowKey = 'gsm_email';
    } else if (lower.includes('reset') || lower.includes('réinitialise') || lower.includes('reinitialis')) {
      flowKey = 'gsm_reset';
    } else if (lower.includes('sécurité') || lower.includes('securite') || lower.includes('vpn')) {
      flowKey = 'gsm_security';
    } else if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('aide') || lower.includes('menu')) {
      flowKey = 'start';
    }

    const flow = FLOWS[flowKey];
    setMessages((prev) => [
      ...prev,
      newMsg('user', text),
      newMsg('bot', flow.reply, flow.options),
    ]);
  };

  const handleReset = () => {
    setMessages([newMsg('bot', FLOWS.start.reply, FLOWS.start.options)]);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir l'assistant mobile"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-muted text-foreground hover:bg-muted/80'
            : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105'
        }`}
      >
        {open ? <X size={22} /> : <Smartphone size={22} />}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl shadow-2xl border border-border bg-background overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: '75vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
          <div className="flex items-center gap-2">
            <Smartphone size={18} />
            <div>
              <p className="font-semibold text-sm leading-tight">Assistant Mobile</p>
              <p className="text-xs opacity-80">Arotech Support</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            title="Recommencer"
            className="p-1.5 rounded-lg hover:bg-primary-foreground/20 transition-colors"
          >
            <RotateCcw size={15} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] whitespace-pre-line leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-muted text-foreground rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>

              {msg.role === 'bot' && msg.options && (
                <div className="flex flex-col gap-1.5 w-full max-w-[85%]">
                  {msg.options.map((opt) =>
                    opt.value === 'contact' ? (
                      <Link
                        key={opt.value}
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl border border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 text-xs font-medium transition-colors"
                      >
                        {opt.label}
                        <ChevronRight size={14} />
                      </Link>
                    ) : (
                      <button
                        key={opt.value}
                        onClick={() => handleOption(opt.value, opt.label)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl border border-border hover:border-primary/40 hover:bg-muted text-xs font-medium text-left transition-colors"
                      >
                        {opt.label}
                        <ChevronRight size={14} className="shrink-0 text-muted-foreground" />
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-3 py-3 border-t border-border flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-1 text-sm bg-muted rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
