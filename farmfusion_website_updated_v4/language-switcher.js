// Language translations
const translations = {
  en: {
    // Navigation
    about: "About",
    howItWorks: "How It Works",
    faq: "FAQ",
    contact: "Contact",
    langEn: "EN",
    langFr: "FR",

    // Hero Section
    heroTitle: "Connecting Farm Aggregators with Buyers",
    heroSubtitle: "Uniting Africa through Intra-continental Trade",
    joinWaitlist: "Join the Waitlist",

    // Features Section
    whyChoose: "Why Choose FarmFusion?",
    forAggregators: "For Aggregators",
    forBuyers: "For Buyers",
    expandMarket: "Expand Your Market Reach",
    expandMarketDesc: "Connect with buyers across the country and grow your distribution network.",
    streamlineOrder: "Streamline Order Management",
    streamlineOrderDesc: "Manage all your orders in one place with our intuitive dashboard.",
    reliablePayment: "Reliable Payment Processing",
    reliablePaymentDesc: "Get paid on time with our secure payment system.",
    accessProducts: "Access to Diverse Farm Products",
    accessProductsDesc: "Browse and order from a wide variety of fresh farm products.",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc: "All products on our platform meet strict quality standards.",
    simplifiedProcess: "Simplified Procurement Process",
    simplifiedProcessDesc: "Order directly from aggregators with just a few clicks.",

    // How It Works Section
    howItWorksTitle: "How It Works",
    aggregatorStepsTitle: "For Aggregators",
    buyerStepsTitle: "For Buyers",
    signUp: "Sign up and create your profile",
    signUpDesc: "Complete your business profile with details about your farm products and services.",
    listProducts: "List your available farm products",
    listProductsDesc: "Add your inventory with prices, quantities, and quality specifications.",
    receiveOrders: "Receive and fulfill orders",
    receiveOrdersDesc: "Get notified of new orders and manage fulfillment through our platform.",
    browseProducts: "Browse available farm products",
    browseProductsDesc: "Search and filter products based on your specific requirements.",
    placeOrders: "Place orders directly with aggregators",
    placeOrdersDesc: "Select products, specify quantities, and submit your order.",
    trackDeliveries: "Track deliveries and manage inventory",
    trackDeliveriesDesc: "Monitor order status and keep track of your inventory in real-time.",

    // Logistics Section
    logisticsTitle: "Our Logistics Network",
    logisticsDesc: "Efficiently connecting farms to buyers through our advanced logistics network",
    farmCollection: "Farm Collection",
    farmCollectionDesc: "Our network of vehicles collects fresh produce directly from farm aggregators, ensuring quality preservation from the first mile.",
    centralProcessing: "Central Processing",
    centralProcessingDesc: "Products are sorted, quality-checked, and prepared for distribution at our central facilities, maintaining the cold chain where necessary.",
    lastMileDelivery: "Last-Mile Delivery",
    lastMileDeliveryDesc: "Our dedicated fleet ensures timely delivery to buyers, with real-time tracking and flexible scheduling options.",
    timeEfficient: "Time-Efficient",
    timeEfficientDesc: "Optimized routes and scheduling reduce transit time from farm to buyer.",
    freshnessGuaranteed: "Freshness Guaranteed",
    freshnessGuaranteedDesc: "Temperature-controlled vehicles preserve product quality throughout transport.",
    realTimeTracking: "Real-Time Tracking",
    realTimeTrackingDesc: "Monitor your deliveries with our advanced GPS tracking system.",
    sustainablePractices: "Sustainable Practices",
    sustainablePracticesDesc: "Eco-friendly packaging and optimized routes reduce our carbon footprint.",
    experienceLogistics: "Experience seamless farm-to-buyer logistics",
    logisticsCTA: "Experience seamless farm-to-buyer logistics", // CTA Text

    // Advanced Features Section
    advancedFeaturesTitle: "Advanced Platform Features",
    advancedFeaturesDesc: "Empowering agricultural trade with cutting-edge technology",
    realTimeOrderTracking: "Real-Time Order Tracking",
    realTimeOrderTrackingDesc: "Monitor your orders from placement to delivery, providing transparency and building trust. Track shipments, receive timely updates, and plan accordingly.",
    integratedLogistics: "Integrated Logistics Solutions",
    integratedLogisticsDesc: "Seamless coordination between distributors and logistics providers. Optimize delivery routes, reduce transit times, and minimize post-harvest losses.",
    dynamicPricing: "Dynamic Pricing and Market Insights",
    dynamicPricingDesc: "Access real-time market data and pricing trends to help make informed decisions. Respond swiftly to market fluctuations, enhancing profitability.",
    qualityAssuranceVerification: "Quality Assurance and Verification",
    qualityAssuranceVerificationDesc: "Systems for quality checks and certifications, ensuring products meet specified standards. Build confidence among buyers regarding quality and safety.",
    inventoryManagement: "Inventory and Supply Chain Management",
    inventoryManagementDesc: "Tools to manage inventory levels, forecast demand, and streamline supply chain operations. Reduce waste and ensure product availability.",
    multilingualSupport: "Multilingual and Multi-Currency Support",
    multilingualSupportDesc: "Support for multiple languages and currencies, facilitating cross-border trade and inclusivity across the African continent.",
    mobileAccessibility: "Mobile Accessibility",
    mobileAccessibilityDesc: "Mobile-friendly platform allowing users in remote areas to access services, place orders, and track deliveries via smartphones.",
    securePayment: "Secure Payment Gateway Integration",
    securePaymentDesc: "Reliable and secure payment systems to facilitate smooth transactions, including options like mobile money and bank transfers.",
    personalizedNotifications: "Personalized Notifications and Alerts",
    personalizedNotificationsDesc: "Customized notifications about order statuses, market trends, and promotional offers, enhancing user engagement and experience.",
    reportingAnalytics: "Comprehensive Reporting and Analytics",
    reportingAnalyticsDesc: "Detailed reports and analytics on sales, deliveries, and market performance to aid in strategic planning and decision-making.",
    experienceFuture: "Experience the future of agricultural trade",

    // Testimonials Section
    testimonialsTitle: "Join These Satisfied Partners on FarmFusion",
    comingSoon: "Testimonials coming soon after launch!",
    beAmongFirst: "Be among the first to experience the benefits of our platform.",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    whatIsFarmFusion: "What is FarmFusion?",
    whatIsFarmFusionAnswer: "FarmFusion is an online multivendor marketplace that connects farm aggregators with buyers. Our platform streamlines the farm-to-buyer supply chain, making it easier for aggregators to sell their products and for buyers to source fresh farm goods.",
    howMarketplaceWorks: "How does the marketplace work?",
    howMarketplaceWorksAnswer: "Farm aggregators can list their products on our platform, and buyers can browse and order directly from these aggregators. Our platform handles the entire process from order placement to payment processing, making transactions seamless and efficient.",
    whenLaunch: "When will FarmFusion launch?",
    whenLaunchAnswer: "We're currently in the development phase and plan to launch soon. Join our waitlist to be notified when we go live and to get early access to the platform.",
    howBecomePartner: "How can I become an early partner?",
    howBecomePartnerAnswer: "Fill out the waitlist form below with your information. We'll reach out to you with early access opportunities and partnership details as we approach our launch date.",
    whoIsFarmFusionFor: "Who is FarmFusion designed for?",
    whoIsFarmFusionForAnswer: "FarmFusion is built for key players in the agricultural supply chain, including farm aggregators looking to expand their reach, buyers (like retailers, restaurants, and food processors) seeking reliable sources of fresh produce, and logistics providers wanting to offer efficient transport services within the network.",
    aggregatorBenefits: "What are the main benefits for farm aggregators?",
    aggregatorBenefitsAnswer: "Aggregators benefit from access to a wider market of buyers, potentially better pricing through direct connections, streamlined order and payment management, and access to integrated logistics solutions to simplify distribution.",
    buyerBenefits: "What are the main benefits for buyers?",
    buyerBenefitsAnswer: "Buyers gain access to a diverse range of verified farm products from multiple aggregators, benefit from quality assurance measures, enjoy a simplified procurement process, and can rely on efficient logistics for timely deliveries.",
    platformFees: "Are there any fees to use the FarmFusion platform?",
    platformFeesAnswer: "During our initial launch phase, joining the waitlist and early access to the platform are free. We will announce any future fee structures well in advance. Our goal is to provide a cost-effective solution for all partners.",
    dataSecurity: "How is my data protected on FarmFusion?",
    dataSecurityAnswer: "We take data security very seriously. Our platform uses industry-standard security measures to protect your personal and business information. All transactions are processed securely, and we adhere to strict privacy policies. More details can be found in our Privacy Policy (link available soon).",
    supportAvailable: "What kind of support will be available?",
    supportAvailableAnswer: "FarmFusion will offer dedicated support to all users. This will include a help center with guides and resources, as well as direct support channels via email and phone during business hours. Our contact details are available in the footer.",

    // Waitlist Section
    waitlistTitle: "Join the Waitlist for Early Access",
    waitlistDesc: "Be the first to know when FarmFusion launches and get exclusive early access.",

    // Form Elements
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email Address",
    role: "I am a:",
    aggregator: "Farm Aggregator",
    logisticsProvider: "Logistics Provider",
    buyer: "Buyer",
    other: "Other",
    country: "Country",
    region: "Region",
    howDidYouHear: "How did you hear about us?",
    sourceSms: "SMS",
    sourceSocialMedia: "Social Media",
    sourceReferral: "Referral",
    sourceSearchEngine: "Search Engine",
    sourceOther: "Other",
    additionalInfo: "Additional Information",
    joinWaitlistBtn: "Join Waitlist",
    thankYou: "Thank You for Joining Our Waitlist!",
    confirmation: "We've received your information and will contact you when FarmFusion is ready for early access.",

    // Footer
    footerSlogan: "Connecting Farm Aggregators with Buyers",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "Accra, Ghana",
    phone1: "+233-243-474-526",
    phone2: "+233-537-370-147",
    emailFooter: "Farmfusiongh@gmail.com",
    allRightsReserved: "© 2025 FarmFusion. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service"
  },
  fr: {
    // Navigation
    about: "À Propos",
    howItWorks: "Comment Ça Marche",
    faq: "FAQ",
    contact: "Contact",
    langEn: "EN",
    langFr: "FR",

    // Hero Section
    heroTitle: "Connecter les Agrégateurs Agricoles avec les Acheteurs",
    heroSubtitle: "Unir l'Afrique par le Commerce Intra-continental",
    joinWaitlist: "Rejoindre la Liste d'Attente",

    // Features Section
    whyChoose: "Pourquoi Choisir FarmFusion?",
    forAggregators: "Pour les Agrégateurs",
    forBuyers: "Pour les Acheteurs",
    expandMarket: "Élargissez Votre Portée de Marché",
    expandMarketDesc: "Connectez-vous avec des acheteurs à travers le pays et développez votre réseau de distribution.",
    streamlineOrder: "Simplifiez la Gestion des Commandes",
    streamlineOrderDesc: "Gérez toutes vos commandes en un seul endroit avec notre tableau de bord intuitif.",
    reliablePayment: "Traitement Fiable des Paiements",
    reliablePaymentDesc: "Soyez payé à temps avec notre système de paiement sécurisé.",
    accessProducts: "Accès à Divers Produits Agricoles",
    accessProductsDesc: "Parcourez et commandez parmi une grande variété de produits agricoles frais.",
    qualityAssurance: "Assurance Qualité",
    qualityAssuranceDesc: "Tous les produits sur notre plateforme répondent à des normes de qualité strictes.",
    simplifiedProcess: "Processus d'Approvisionnement Simplifié",
    simplifiedProcessDesc: "Commandez directement auprès des agrégateurs en quelques clics.",

    // How It Works Section
    howItWorksTitle: "Comment Ça Marche",
    aggregatorStepsTitle: "Pour les Agrégateurs",
    buyerStepsTitle: "Pour les Acheteurs",
    signUp: "Inscrivez-vous et créez votre profil",
    signUpDesc: "Complétez votre profil d'entreprise avec des détails sur vos produits et services agricoles.",
    listProducts: "Listez vos produits agricoles disponibles",
    listProductsDesc: "Ajoutez votre inventaire avec les prix, les quantités et les spécifications de qualité.",
    receiveOrders: "Recevez et exécutez les commandes",
    receiveOrdersDesc: "Soyez notifié des nouvelles commandes et gérez l'exécution via notre plateforme.",
    browseProducts: "Parcourez les produits agricoles disponibles",
    browseProductsDesc: "Recherchez et filtrez les produits en fonction de vos besoins spécifiques.",
    placeOrders: "Passez des commandes directement auprès des agrégateurs",
    placeOrdersDesc: "Sélectionnez des produits, spécifiez les quantités et soumettez votre commande.",
    trackDeliveries: "Suivez les livraisons et gérez l'inventaire",
    trackDeliveriesDesc: "Surveillez l'état des commandes et suivez votre inventaire en temps réel.",

    // Logistics Section
    logisticsTitle: "Notre Réseau Logistique",
    logisticsDesc: "Connecter efficacement les fermes aux acheteurs grâce à notre réseau logistique avancé",
    farmCollection: "Collecte à la Ferme",
    farmCollectionDesc: "Notre réseau de véhicules collecte des produits frais directement auprès des agrégateurs agricoles, assurant la préservation de la qualité dès le premier kilomètre.",
    centralProcessing: "Traitement Central",
    centralProcessingDesc: "Les produits sont triés, contrôlés en qualité et préparés pour la distribution dans nos installations centrales, maintenant la chaîne du froid si nécessaire.",
    lastMileDelivery: "Livraison du Dernier Kilomètre",
    lastMileDeliveryDesc: "Notre flotte dédiée assure une livraison ponctuelle aux acheteurs, avec suivi en temps réel et options de planification flexibles.",
    timeEfficient: "Efficacité Temporelle",
    timeEfficientDesc: "Des itinéraires et une planification optimisés réduisent le temps de transit de la ferme à l'acheteur.",
    freshnessGuaranteed: "Fraîcheur Garantie",
    freshnessGuaranteedDesc: "Des véhicules à température contrôlée préservent la qualité des produits pendant tout le transport.",
    realTimeTracking: "Suivi en Temps Réel",
    realTimeTrackingDesc: "Surveillez vos livraisons avec notre système de suivi GPS avancé.",
    sustainablePractices: "Pratiques Durables",
    sustainablePracticesDesc: "Des emballages écologiques et des itinéraires optimisés réduisent notre empreinte carbone.",
    experienceLogistics: "Expérimentez une logistique transparente de la ferme à l'acheteur",
    logisticsCTA: "Expérimentez une logistique transparente de la ferme à l'acheteur", // CTA Text

    // Advanced Features Section
    advancedFeaturesTitle: "Fonctionnalités Avancées de la Plateforme",
    advancedFeaturesDesc: "Dynamiser le commerce agricole avec une technologie de pointe",
    realTimeOrderTracking: "Suivi des Commandes en Temps Réel",
    realTimeOrderTrackingDesc: "Surveillez vos commandes du placement à la livraison, offrant transparence et renforçant la confiance. Suivez les expéditions, recevez des mises à jour et planifiez.",
    integratedLogistics: "Solutions Logistiques Intégrées",
    integratedLogisticsDesc: "Coordination transparente entre distributeurs et prestataires logistiques. Optimisez les itinéraires, réduisez les temps de transit et minimisez les pertes post-récolte.",
    dynamicPricing: "Tarification Dynamique et Aperçus du Marché",
    dynamicPricingDesc: "Accédez aux données de marché en temps réel et aux tendances de prix pour prendre des décisions éclairées. Réagissez rapidement aux fluctuations du marché, améliorant la rentabilité.",
    qualityAssuranceVerification: "Assurance et Vérification de la Qualité",
    qualityAssuranceVerificationDesc: "Systèmes de contrôles qualité et certifications, garantissant que les produits respectent les normes. Renforcez la confiance des acheteurs sur la qualité et la sécurité.",
    inventoryManagement: "Gestion des Stocks et de la Chaîne d'Approvisionnement",
    inventoryManagementDesc: "Outils pour gérer les niveaux de stock, prévoir la demande et optimiser les opérations de la chaîne d'approvisionnement. Réduisez le gaspillage et assurez la disponibilité.",
    multilingualSupport: "Support Multilingue et Multidevise",
    multilingualSupportDesc: "Prise en charge de plusieurs langues et devises, facilitant le commerce transfrontalier et l'inclusivité à travers le continent africain.",
    mobileAccessibility: "Accessibilité Mobile",
    mobileAccessibilityDesc: "Plateforme mobile permettant aux utilisateurs des zones reculées d'accéder aux services, de passer des commandes et de suivre les livraisons via smartphones.",
    securePayment: "Intégration de Passerelle de Paiement Sécurisée",
    securePaymentDesc: "Systèmes de paiement fiables et sécurisés pour faciliter les transactions, incluant des options comme l'argent mobile et les virements bancaires.",
    personalizedNotifications: "Notifications et Alertes Personnalisées",
    personalizedNotificationsDesc: "Notifications personnalisées sur l'état des commandes, les tendances du marché et les offres promotionnelles, améliorant l'engagement et l'expérience utilisateur.",
    reportingAnalytics: "Rapports et Analyses Complets",
    reportingAnalyticsDesc: "Rapports détaillés et analyses sur les ventes, les livraisons et les performances du marché pour aider à la planification stratégique et à la prise de décision.",
    experienceFuture: "Découvrez l'avenir du commerce agricole",

    // Testimonials Section
    testimonialsTitle: "Rejoignez Ces Partenaires Satisfaits sur FarmFusion",
    comingSoon: "Témoignages bientôt disponibles après le lancement !",
    beAmongFirst: "Soyez parmi les premiers à découvrir les avantages de notre plateforme.",

    // FAQ Section
    faqTitle: "Questions Fréquemment Posées",
    whatIsFarmFusion: "Qu'est-ce que FarmFusion ?",
    whatIsFarmFusionAnswer: "FarmFusion est une place de marché multivendeur en ligne qui connecte les agrégateurs agricoles avec les acheteurs. Notre plateforme simplifie la chaîne d'approvisionnement de la ferme à l'acheteur, facilitant la vente de produits pour les agrégateurs et l'approvisionnement en produits frais pour les acheteurs.",
    howMarketplaceWorks: "Comment fonctionne la place de marché ?",
    howMarketplaceWorksAnswer: "Les agrégateurs agricoles peuvent lister leurs produits sur notre plateforme, et les acheteurs peuvent parcourir et commander directement auprès de ces agrégateurs. Notre plateforme gère l'ensemble du processus, de la passation de commande au traitement des paiements, rendant les transactions fluides et efficaces.",
    whenLaunch: "Quand FarmFusion sera-t-il lancé ?",
    whenLaunchAnswer: "Nous sommes actuellement en phase de développement et prévoyons de lancer bientôt. Rejoignez notre liste d'attente pour être informé de notre mise en ligne et pour obtenir un accès anticipé à la plateforme.",
    howBecomePartner: "Comment puis-je devenir un partenaire précoce ?",
    howBecomePartnerAnswer: "Remplissez le formulaire de liste d'attente ci-dessous avec vos informations. Nous vous contacterons avec des opportunités d'accès anticipé et des détails de partenariat à l'approche de notre date de lancement.",
    whoIsFarmFusionFor: "À qui s'adresse FarmFusion ?",
    whoIsFarmFusionForAnswer: "FarmFusion est conçu pour les acteurs clés de la chaîne d'approvisionnement agricole, y compris les agrégateurs agricoles cherchant à étendre leur portée, les acheteurs (comme les détaillants, les restaurants et les transformateurs alimentaires) recherchant des sources fiables de produits frais, et les prestataires logistiques souhaitant offrir des services de transport efficaces au sein du réseau.",
    aggregatorBenefits: "Quels sont les principaux avantages pour les agrégateurs agricoles ?",
    aggregatorBenefitsAnswer: "Les agrégateurs bénéficient d'un accès à un marché plus large d'acheteurs, de prix potentiellement meilleurs grâce aux connexions directes, d'une gestion simplifiée des commandes et des paiements, et d'un accès à des solutions logistiques intégrées pour simplifier la distribution.",
    buyerBenefits: "Quels sont les principaux avantages pour les acheteurs ?",
    buyerBenefitsAnswer: "Les acheteurs ont accès à une gamme diversifiée de produits agricoles vérifiés provenant de multiples agrégateurs, bénéficient de mesures d'assurance qualité, profitent d'un processus d'approvisionnement simplifié et peuvent compter sur une logistique efficace pour des livraisons ponctuelles.",
    platformFees: "Y a-t-il des frais pour utiliser la plateforme FarmFusion ?",
    platformFeesAnswer: "Pendant notre phase de lancement initiale, l'inscription à la liste d'attente et l'accès anticipé à la plateforme sont gratuits. Nous annoncerons toute structure tarifaire future bien à l'avance. Notre objectif est de fournir une solution rentable pour tous les partenaires.",
    dataSecurity: "Comment mes données sont-elles protégées sur FarmFusion ?",
    dataSecurityAnswer: "Nous prenons la sécurité des données très au sérieux. Notre plateforme utilise des mesures de sécurité standard de l'industrie pour protéger vos informations personnelles et professionnelles. Toutes les transactions sont traitées de manière sécurisée et nous adhérons à des politiques de confidentialité strictes. Plus de détails sont disponibles dans notre Politique de Confidentialité (lien bientôt disponible).",
    supportAvailable: "Quel type de support sera disponible ?",
    supportAvailableAnswer: "FarmFusion offrira un support dédié à tous les utilisateurs. Cela comprendra un centre d'aide avec des guides et des ressources, ainsi que des canaux de support direct par e-mail et téléphone pendant les heures ouvrables. Nos coordonnées sont disponibles dans le pied de page.",

    // Waitlist Section
    waitlistTitle: "Rejoindre la Liste d'Attente pour un Accès Anticipé",
    waitlistDesc: "Soyez le premier informé du lancement de FarmFusion et obtenez un accès anticipé exclusif.",

    // Form Elements
    fullName: "Nom Complet",
    phoneNumber: "Numéro de Téléphone",
    email: "Adresse E-mail",
    role: "Je suis un(e) :",
    aggregator: "Agrégateur Agricole",
    logisticsProvider: "Prestataire Logistique",
    buyer: "Acheteur",
    other: "Autre",
    country: "Pays",
    region: "Région",
    howDidYouHear: "Comment avez-vous entendu parler de nous ?",
    sourceSms: "SMS",
    sourceSocialMedia: "Médias Sociaux",
    sourceReferral: "Référence",
    sourceSearchEngine: "Moteur de Recherche",
    sourceOther: "Autre",
    additionalInfo: "Informations Supplémentaires",
    joinWaitlistBtn: "Rejoindre la Liste d'Attente",
    getEarlyAccess: "Obtenir un Accès Anticipé",
    thankYou: "Merci d'avoir rejoint notre liste d'attente !",
    confirmation: "Nous avons reçu vos informations et vous contacterons lorsque FarmFusion sera prêt pour l'accès anticipé.",

    // Footer
    footerSlogan: "Connecter les Agrégateurs Agricoles avec les Acheteurs",
    quickLinks: "Liens Rapides",
    contactUs: "Contactez-Nous",
    address: "Accra, Ghana",
    phone1: "+233-243-474-526",
    phone2: "+233-537-370-147",
    emailFooter: "Farmfusiongh@gmail.com",
    allRightsReserved: "© 2025 FarmFusion. Tous droits réservés.",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation"
  }
};

// Function to update content based on selected language
function updateLanguageContent(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Handle different element types appropriately
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.placeholder) {
          element.placeholder = translations[lang][key];
        }
      } else {
        element.textContent = translations[lang][key];
      }
    } else {
      // Optional: Log missing translations
      // console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });

  // Update specific elements not easily targeted by data-translate (if any remain)
  // Example: Update role label (though it's better to add data-translate="role" to the label)
  // const roleLabel = document.querySelector('label[for="role"]');
  // if (roleLabel) roleLabel.textContent = translations[lang].role;

  // Update success message (ensure IDs match)
  const formSuccess = document.getElementById('form-success');
  if (formSuccess && formSuccess.style.display !== 'none') {
      const successTitle = formSuccess.querySelector('h3');
      const successMessage = formSuccess.querySelector('p');
      if (successTitle) successTitle.textContent = translations[lang].thankYou;
      if (successMessage) successMessage.textContent = translations[lang].confirmation;
  }

  // Update language switcher display
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}


// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const languageOptions = document.querySelectorAll('.language-option');
  let currentLang = localStorage.getItem('farmfusionLang') || 'en'; // Default language or load saved preference

  // Function to set language and update content
  function setLanguage(lang) {
    if (translations[lang]) {
      currentLang = lang;
      localStorage.setItem('farmfusionLang', lang); // Save preference
      updateLanguageContent(lang);
    } else {
      console.error("Translation not found for language:", lang);
    }
  }

  // Add click event listeners to language options
  languageOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior if it's an <a> tag
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Initial language setup on page load
  setLanguage(currentLang);

  // --- Mobile Menu Toggle --- 
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('nav ul');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Optional: for styling the toggle itself (e.g., change icon)
    });

    // Close menu when a link is clicked (optional, good UX for SPAs or smooth scroll)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuToggle.classList.remove('active');
        }
      });
    });
  } else {
    console.error("Mobile menu toggle or nav links not found.");
  }

  // --- Waitlist Form Submission Handling (Using Fetch API) ---
  const waitlistForm = document.getElementById('waitlist-form');
  const formSuccessMessage = document.getElementById('form-success');

  if (waitlistForm && formSuccessMessage) {
    waitlistForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(waitlistForm);
      const data = Object.fromEntries(formData.entries());

      // Basic frontend validation (example - ensure required fields are filled)
      // Note: Backend validation is crucial and already implemented
      if (!data.name || !data.phone_number || !data.role || !data.country || !data.region || !data.source) {
          alert(currentLang === 'fr' ? 'Veuillez remplir tous les champs obligatoires (*).' : 'Please fill in all required fields (*).');
          return;
      }

      fetch('/join-waitlist', { // Assuming backend runs on the same origin or proxy is set up
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
          console.log('Success:', result);
          // Hide form and show success message
          waitlistForm.style.display = 'none';
          formSuccessMessage.style.display = 'block';

          // Update success message text based on current language
          const successTitle = formSuccessMessage.querySelector('h3');
          const successText = formSuccessMessage.querySelector('p');
          if (successTitle) successTitle.textContent = translations[currentLang].thankYou;
          if (successText) successText.textContent = translations[currentLang].confirmation;

          // Optional: Scroll to the success message
          formSuccessMessage.scrollIntoView({ behavior: 'smooth' });
      })
      .catch((error) => {
          console.error('Error:', error);
          alert(currentLang === 'fr' ? 'Une erreur s\'est produite lors de la soumission. Veuillez réessayer.' : 'An error occurred during submission. Please try again.');
      });
    });
  } else {
      console.error("Waitlist form or success message element not found.");
  }

  // --- FAQ Accordion --- 
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    }
  });

}); // End DOMContentLoaded

// Ensure data-translate attributes are added to HTML elements that need translation.
// Example: <h2 data-translate="heroTitle">Connecting Farm Aggregators with Buyers</h2>
// Keys in the 'translations' object must match the 'data-translate' values.

