// Get the button and character container Elements
const randomizeButton = document.getElementById("randomizeButton");
const characterContainer = document.getElementById("characterContainer");
const astrologyContainer = document.getElementById("asthrones");
const astroTitre = document.getElementById("titre");
const astroDescription = document.getElementById("description");

// Create an array of characters
const characters = [
    {
        name: "Daenerys Targaryen",
        astrology: ["Ambitieux(se)", "Confiant(e)", "Déterminé(e)"],
        themes: [
            {
                nom: "La Frénésie de l'Épée en Mousse",
                description:
                    "Les natifs de ce signe sont voués à des batailles épiques avec des épées en mousse, symbolisant des conflits sans conséquences réelles.",
            },
            {
                nom: "La Quête du Smoothie Divin",
                description:
                    "Chaque jour, ces individus partent à la recherche du smoothie parfait, alignant les étoiles de la saveur dans leur quête nutritive.",
            },
            {
                nom: "Les Divagations Cosmiques",
                description:
                    "Les personnes de ce signe ont un penchant pour les conversations cosmiques sans fin, où des idées farfelues et des théories délirantes prennent le pas sur la réalité.",
            },
            {
                nom: "La Révolte des Chaussettes Orphelines",
                description:
                    "Ces individus sont liés par la lutte quotidienne contre les chaussettes orphelines qui disparaissent mystérieusement dans le vortex de la machine à laver.",
            },
            {
                nom: "L'Ascension de la Pyramide de Lessive",
                description:
                    "Chaque journée offre l'opportunité de gravir la pyramide de lessive, symbolisant les défis domestiques et la recherche éternelle de chaussettes appariées.",
            },
            {
                nom: "La Danse Héroïque avec le Balai Magique",
                description:
                    "Les natifs de ce signe sont destinés à des danses héroïques avec le balai magique, combattant la poussière et les miettes avec panache.",
            },
            {
                nom: "Les Affrontements Épiques avec la Machine à Café",
                description:
                    "Chaque jour apporte des confrontations épiques avec la machine à café au bureau, où la quête de la pause parfaite est le défi ultime.",
            },
            {
                nom: "Les Divinations dans le Pot de Yaourt",
                description:
                    "Ces individus excellent dans l'art de la divination en scrutant les motifs ésotériques au fond des pots de yaourt, révélant des mystères lactiques.",
            },
            {
                nom: "La Lutte Contre les Licornes en Peluche",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre des hordes de licornes en peluche envahissantes, symbolisant des défis ludiques au quotidien.",
            },
            {
                nom: "La Quête Infinie des Clés de Voiture Égarées",
                description:
                    "Chaque journée offre une nouvelle aventure pour retrouver les clés de voiture égarées, avec des rebondissements dignes d'une épopée mythique.",
            },
            {
                nom: "La Conquête du Royaume de la Chambre en Désordre",
                description:
                    "Ces individus sont destinés à conquérir le royaume de la chambre en désordre, naviguant à travers les montagnes de vêtements et les mers de chaussures.",
            },
            {
                nom: "Les Manœuvres Stratégiques pour Éviter les Embouteillages du Matin",
                description:
                    "Chaque jour, les natifs de ce signe développent des manœuvres stratégiques dignes de généraux pour éviter les embouteillages matinaux.",
            },
            {
                nom: "Les Prophéties du Micro-ondes",
                description:
                    "Ces individus sont capables de déchiffrer les prophéties du micro-ondes, interprétant les messages mystérieux qui accompagnent chaque réchauffage.",
            },
            {
                nom: "Les Rituels Sacrés du Yoga Devant la Télévision",
                description:
                    "Chaque journée est marquée par des rituels sacrés de yoga devant la télévision, mêlant la quête spirituelle à la passion pour les séries.",
            },
            {
                nom: "Les Expéditions Audacieuses dans le Désert de la Boîte à Gants",
                description:
                    "Les natifs de ce signe entreprennent des expéditions audacieuses dans le désert de la boîte à gants à la recherche d'objets perdus depuis des éons.",
            },
            {
                nom: "Les Éclats de Rire Cosmiques",
                description:
                    "Inspirés par les éclats de rire cosmiques, ces individus trouvent l'humour dans chaque situation, même les plus absurdes.",
            },
            {
                nom: "La Course Effrénée pour Attraper le Bus en Retard",
                description:
                    "Chaque journée est une course effrénée pour attraper le bus en retard, avec des scènes dignes d'un film d'action.",
            },
            {
                nom: "La Négociation Diplomatique avec le Réveil Matinal",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec le réveil matinal, cherchant à prolonger les moments de sommeil.",
            },
            {
                nom: "Les Sortilèges de la Cafetière Magique",
                description:
                    "Ces individus maîtrisent les sortilèges de la cafetière magique, transformant l'eau et le café en potion énergétique pour affronter la journée.",
            },
            {
                nom: "La Méditation Profonde sur les Mystères du Frigo",
                description:
                    "Chaque jour, les natifs de ce signe s'engagent dans une méditation profonde pour résoudre les mystères du frigo, explorant les contrées inexplorées des restes alimentaires.",
            },
        ],
    },
    {
        name: "Tyrion Lannister",
        astrology: [
            "Apprend vite",
            "Personnalité complexe",
            "Sens de l'humour",
        ],
        themes: [
            {
                nom: "La Stratégie de la Petite Main",
                description:
                    "Les natifs de ce signe excellent dans l'art subtil de la stratégie politique et des manœuvres en coulisse, tout en restant toujours une petite main astucieuse.",
            },
            {
                nom: "La Quête du Vin Parfait",
                description:
                    "Chaque jour, ces individus partent à la recherche du vin parfait, harmonisant les saveurs et les arômes avec la précision d'un connaisseur.",
            },
            {
                nom: "Les Discours Éloquents du Lutin Littéraire",
                description:
                    "Les personnes de ce signe sont destinées à prononcer des discours éloquents et à manier les mots avec la finesse d'un lutin littéraire, même dans les situations les plus inattendues.",
            },
            {
                nom: "La Parade des Chapeaux Ludiques",
                description:
                    "Ces individus sont connus pour leurs parades quotidiennes de chapeaux ludiques, symbolisant l'élégance et la fantaisie au cœur de la vie quotidienne.",
            },
            {
                nom: "Les Négociations Diplomatiques avec les Dragons",
                description:
                    "Chaque journée apporte des négociations diplomatiques délicates avec des dragons imaginaires, mettant à l'épreuve la ruse et la diplomatie de ces natifs.",
            },
            {
                nom: "Les Conseils pour Éviter les Mariages Malheureux",
                description:
                    "Les natifs de ce thème astrologique dispensent des conseils astucieux pour éviter les mariages malheureux, basés sur une expérience personnelle inégalée.",
            },
            {
                nom: "La Lutte Contre les Géants des Bureaux",
                description:
                    "Chaque jour, ces individus sont appelés à lutter contre les géants des bureaux, symbolisant les défis quotidiens dans un monde de titans professionnels.",
            },
            {
                nom: "Les Débats Intérieurs du Génie Tactique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un génie tactique, pesant le pour et le contre avec une clarté exceptionnelle.",
            },
            {
                nom: "La Chasse au Trésor dans les Livres Anciens",
                description:
                    "Ces individus entreprennent des chasses au trésor intellectuelles dans les livres anciens, dévoilant des connaissances précieuses et des secrets enfouis.",
            },
            {
                nom: "Les Stripteases de l'Esprit Aiguisé",
                description:
                    "Chaque journée offre des moments de striptease intellectuel, révélant un esprit aiguisé et des pensées acérées dignes d'un Lannister.",
            },
            {
                nom: "La Parade des Lutins dans les Vignobles",
                description:
                    "Les natifs de ce thème astrologique participent à des parades de lutins dans les vignobles, célébrant la joyeuse alliance entre la viticulture et la fantaisie.",
            },
            {
                nom: "Les Épopées Comiques de la Petite Taille",
                description:
                    "Ces individus vivent des épopées comiques de la petite taille, surmontant les défis avec humour et intelligence, prouvant que la grandeur n'est pas une question de taille.",
            },
            {
                nom: "La Diplomatie à Dos de Lézard",
                description:
                    "Chaque jour, ces natifs pratiquent la diplomatie à dos de lézard, naviguant à travers les intrigues avec agilité et une touche de fantaisie reptilienne.",
            },
            {
                nom: "La Danse Virtuose avec les Énigmes",
                description:
                    "Les personnes de ce signe sont destinées à une danse virtuose avec les énigmes, résolvant des mystères complexes avec une facilité déconcertante.",
            },
            {
                nom: "Les Combats Épiques avec les Minibarres",
                description:
                    "Chaque journée apporte des combats épiques avec les minibarres, mettant à l'épreuve la volonté de ces individus face à des tentations miniatures mais redoutables.",
            },
            {
                nom: "La Quête Infinie du Siège Parfait",
                description:
                    "Ces individus sont voués à une quête infinie du siège parfait, cherchant le confort ultime dans un monde souvent trop grand pour eux.",
            },
            {
                nom: "Les Manœuvres Tactiques pour Éviter les Lancers de Tomates",
                description:
                    "Chaque jour, les natifs de ce signe développent des manœuvres tactiques ingénieuses pour éviter les lancers de tomates, prouvant que l'esprit peut triompher de la taille.",
            },
            {
                nom: "Les Conseils Sages pour Éviter les Batailles Inutiles",
                description:
                    "Ces individus dispensent des conseils sages pour éviter les batailles inutiles, mettant en avant la sagesse plutôt que la force brute dans la résolution de conflits.",
            },
            {
                nom: "Les Éclats de Rire Stratégiques",
                description:
                    "Inspirés par les éclats de rire stratégiques, ces natifs trouvent l'humour dans chaque situation, utilisant le rire comme une arme puissante contre l'adversité.",
            },
        ],
    },
    {
        name: "Jon Snow",
        astrology: ["Sociable", "Équilibré(e)", "Sensible"],
        themes: [
            {
                nom: "La Quête Éternelle du Manteau en Fourrure",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle du manteau en fourrure parfait, symbolisant leur recherche constante de chaleur et de style dans l'adversité.",
            },
            {
                nom: "La Diplomatie avec les Loups-Garous",
                description:
                    "Chaque jour, ces individus pratiquent la diplomatie avec les loups-garous imaginaires, mettant à l'épreuve leur capacité à communiquer avec la nature sauvage.",
            },
            {
                nom: "Les Débats Intérieurs du Seigneur des Neiges",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un seigneur des neiges, naviguant entre l'honneur et la réalité brutale.",
            },
            {
                nom: "La Parade Épique des Épées Perdues",
                description:
                    "Ces individus participent à des parades épiques des épées perdues, symbolisant les défis de la quête de la lame parfaite dans un monde enneigé.",
            },
            {
                nom: "Les Randonnées Mystiques au-delà du Mur",
                description:
                    "Chaque journée apporte des randonnées mystiques au-delà du Mur, explorant des territoires inexplorés de la vie quotidienne avec une touche de mystère nordique.",
            },
            {
                nom: "La Lutte Contre les Ventilateurs de Glace",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les ventilateurs de glace, symbolisant les batailles contre le froid glacial avec détermination.",
            },
            {
                nom: "La Quête du Café Noir comme la Garde de Nuit",
                description:
                    "Chaque jour, ces individus partent à la quête du café noir parfait, adoptant l'austérité de la Garde de Nuit dans leur recherche de caféine.",
            },
            {
                nom: "Les Conseils pour Éviter les Mariages à la Red Wedding",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les mariages à la Red Wedding, tirant des leçons de la tragédie de Westeros.",
            },
            {
                nom: "La Parade des Direwolves dans les Couloirs",
                description:
                    "Ces individus participent à des parades des direwolves dans les couloirs, symbolisant la loyauté et la présence constante de compagnons fidèles.",
            },
            {
                nom: "Les Courses de Loups-Garous à dos de Dragon",
                description:
                    "Chaque journée offre des courses de loups-garous à dos de dragon, combinant la grâce aérienne avec la puissance mystique dans des aventures fantastiques.",
            },
            {
                nom: "Les Épopées Poétiques du Bâtard Honoré",
                description:
                    "Ces individus vivent des épopées poétiques du bâtard honoré, créant des vers épiques pour narrer leurs propres histoires héroïques.",
            },
            {
                nom: "La Quête Infinie de la Vérité sur ses Origines",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie de la vérité sur leurs origines, cherchant à démêler les mystères de leur histoire personnelle.",
            },
            {
                nom: "Les Combats Épiques avec les Briques de Glace",
                description:
                    "Chaque journée apporte des combats épiques avec les briques de glace, symbolisant les défis de la vie quotidienne dans un monde glacé et imprévisible.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets du Corbeau Trois Yeux",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets du corbeau à trois yeux, explorant les mystères cachés de leur propre conscience.",
            },
            {
                nom: "La Quête du Sens de l'Honneur dans un Monde Ironique",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'honneur dans un monde ironique, où les contradictions défient la logique conventionnelle.",
            },
            {
                nom: "Les Conseils Sages des Neiges Éternelles",
                description:
                    "Ces individus dispensent des conseils sages des neiges éternelles, puisant dans la sagesse de l'hiver pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse de l'Épée avec les Nuances de Gris",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec leur épée à travers les nuances de gris, symbolisant les choix moraux complexes qui jalonnent leur chemin.",
            },
            {
                nom: "La Négociation Diplomatique avec les Marcheurs Blancs",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les Marcheurs Blancs, cherchant la paix dans les régions glacées de la vie.",
            },
            {
                nom: "Les Éclats de Rire dans les Tempêtes de Neige",
                description:
                    "Inspirés par les éclats de rire dans les tempêtes de neige, ces natifs trouvent l'humour au cœur des situations les plus froides et hostiles.",
            },
        ],
    },
    {
        name: "Sansa Stark",
        astrology: ["Romantique", "Naïf(ve)", "Rêveur(se)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Robe parfaite",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la robe parfaite, symbolisant leur recherche constante de grâce et d'élégance dans un monde changeant.",
            },
            {
                nom: "Les Discussions Diplomatiques avec les Oiseaux",
                description:
                    "Chaque jour, ces individus pratiquent les discussions diplomatiques avec les oiseaux imaginaires, décodant les messages cachés du royaume animal.",
            },
            {
                nom: "Les Débats Intérieurs de la Dame du Nord",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une dame du Nord, naviguant entre la prudence et la fermeté avec sagesse.",
            },
            {
                nom: "La Parade Élégante des Loups Dire",
                description:
                    "Ces individus participent à des parades élégantes des loups dire, symbolisant la loyauté et la présence constante de compagnons fidèles dans leur vie quotidienne.",
            },
            {
                nom: "Les Randonnées Introspectives dans les Jardins Royaux",
                description:
                    "Chaque journée apporte des randonnées introspectives dans les jardins royaux, explorant des territoires intérieurs paisibles et enchanteurs.",
            },
            {
                nom: "La Lutte Contre les Fils Égarés",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les fils égarés, symbolisant les défis de maintenir l'ordre dans un monde parfois chaotique.",
            },
            {
                nom: "La Quête du Thé Parfait comme Stratégie de Cour",
                description:
                    "Chaque jour, ces individus partent à la quête du thé parfait, adoptant la subtilité d'une stratégie de cour dans leur recherche de saveurs délicates.",
            },
            {
                nom: "Les Conseils pour Éviter les Mariages Malheureux",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les mariages malheureux, tirant des leçons de leur propre histoire et des drames du royaume.",
            },
            {
                nom: "La Parade des Lions dans les Salons",
                description:
                    "Ces individus participent à des parades des lions dans les salons, symbolisant la grâce et la présence majestueuse dans des événements sociaux souvent complexes.",
            },
            {
                nom: "Les Danses Élégantes avec les Intrigues Courtoises",
                description:
                    "Chaque journée offre des danses élégantes avec les intrigues courtoises, maîtrisant l'art subtil de naviguer dans les eaux troubles de la politique royale.",
            },
            {
                nom: "Les Épopées Poétiques de la Rose du Nord",
                description:
                    "Ces individus vivent des épopées poétiques de la rose du Nord, créant des vers épiques pour célébrer la beauté et la résilience dans leur propre histoire.",
            },
            {
                nom: "La Quête Infinie du Sens de l'Indépendance",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de l'indépendance, cherchant à forger leur propre destin dans un monde parfois oppressant.",
            },
            {
                nom: "Les Combats Épiques avec les Épingles à Cheveux",
                description:
                    "Chaque journée apporte des combats épiques avec les épingles à cheveux, symbolisant les défis esthétiques de maintenir une coiffure impeccable dans toutes les situations.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets des Roses",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets des roses, explorant la délicatesse cachée derrière leur apparence extérieure.",
            },
            {
                nom: "La Quête du Sens de la Courtoisie dans un Monde Cynique",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la courtoisie dans un monde cynique, où la gentillesse peut être une arme puissante.",
            },
            {
                nom: "Les Conseils Sages des Jardins d'Hiver",
                description:
                    "Ces individus dispensent des conseils sages des jardins d'hiver, puisant dans la sagesse des saisons froides pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse de la Rose avec les Nuances de Rouge",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec la rose à travers les nuances de rouge, symbolisant les choix délicats et les nuances subtiles de la vie.",
            },
            {
                nom: "La Négociation Diplomatique avec les Marchands d'Épices",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les marchands d'épices, apportant des saveurs exotiques à leur quotidien.",
            },
            {
                nom: "Les Éclats de Rire dans les Salons Royaux",
                description:
                    "Inspirés par les éclats de rire dans les salons royaux, ces natifs trouvent l'humour au cœur des situations les plus complexes et des règles strictes.",
            },
        ],
    },
    {
        name: "Cersei Lannister",
        astrology: ["Protecteur(rice)", "Sens de la famille", "Ambitieux(se)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Couronne Parfaite",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la couronne parfaite, symbolisant leur recherche constante de pouvoir et de prestige dans un monde politique complexe.",
            },
            {
                nom: "Les Négociations Diplomatiques avec les Lions",
                description:
                    "Chaque jour, ces individus pratiquent les négociations diplomatiques avec les lions imaginaires, naviguant avec finesse au sein des intrigues familiales.",
            },
            {
                nom: "Les Débats Intérieurs de la Reine Machiavélique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une reine machiavélique, manœuvrant entre l'amour et le pouvoir avec astuce.",
            },
            {
                nom: "La Parade Majestueuse des Robes Dorées",
                description:
                    "Ces individus participent à des parades majestueuses des robes dorées, symbolisant l'élégance et l'autorité dans le choix des tenues royales.",
            },
            {
                nom: "Les Randonnées Tactiques dans les Cachots du Donjon Rouge",
                description:
                    "Chaque journée apporte des randonnées tactiques dans les cachots du Donjon Rouge, explorant les secrets et les complots cachés dans les profondeurs du royaume.",
            },
            {
                nom: "La Lutte Contre les Regards en Biais",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards en biais, symbolisant les défis de maintenir la confiance dans un monde rempli de méfiance.",
            },
            {
                nom: "La Quête du Vin Raffiné comme Stratégie de Cour",
                description:
                    "Chaque jour, ces individus partent à la quête du vin raffiné, adoptant la subtilité d'une stratégie de cour dans leur recherche de plaisirs exquis.",
            },
            {
                nom: "Les Conseils pour Éviter les Mariages Inopportuns",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les mariages inopportuns, tirant des leçons de leur propre expérience et des alliances politiques délicates.",
            },
            {
                nom: "La Parade des Lions d'Or dans les Salons",
                description:
                    "Ces individus participent à des parades des lions d'or dans les salons, symbolisant la majesté et la puissance qui émanent de leur présence royale.",
            },
            {
                nom: "Les Danses Élégantes avec les Intrigues Politiques",
                description:
                    "Chaque journée offre des danses élégantes avec les intrigues politiques, maîtrisant l'art subtil de la manipulation et du jeu de pouvoir.",
            },
            {
                nom: "Les Épopées Poétiques de la Reine Implacable",
                description:
                    "Ces individus vivent des épopées poétiques de la reine implacable, créant des vers épiques pour célébrer leur détermination et leur force inébranlable.",
            },
            {
                nom: "La Quête Infinie du Sens de la Légitimité",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la légitimité, cherchant à asseoir leur autorité dans un monde parfois sceptique.",
            },
            {
                nom: "Les Combats Épiques avec les Robes à Traîne",
                description:
                    "Chaque journée apporte des combats épiques avec les robes à traîne, symbolisant les défis de se déplacer avec grâce tout en portant le poids du pouvoir.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets des Lions Dorés",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets des lions dorés, explorant la noblesse cachée derrière la fierté extérieure.",
            },
            {
                nom: "La Quête du Sens de l'Autonomie dans un Monde de Conspirations",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'autonomie dans un monde de conspirations, où l'indépendance est parfois difficile à préserver.",
            },
            {
                nom: "Les Conseils Sages des Salons Royaux",
                description:
                    "Ces individus dispensent des conseils sages des salons royaux, puisant dans la sagesse des événements mondains pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse de l'Or avec les Nuances de Jaune",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec l'or à travers les nuances de jaune, symbolisant les choix éclatants et les richesses de la vie.",
            },
            {
                nom: "La Négociation Diplomatique avec les Marchands d'Épices Rares",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les marchands d'épices rares, ajoutant des saveurs exotiques à leur règne.",
            },
            {
                nom: "Les Éclats de Rire Stratégiques dans les Salles du Trône",
                description:
                    "Inspirés par les éclats de rire stratégiques dans les salles du trône, ces natifs trouvent l'humour au cœur des situations politiques les plus complexes.",
            },
        ],
    },
    // {
    //     name: "Jamie Lannister",
    //     astrology: ["Gemini", "loyal", "unpredictable"],
    // },
    // {
    //     name: "Bran Stark",
    //     astrology: ["Pisces", "mystical", "intuitive"],
    // },
    // {
    //     name: "Samwell Tarly",
    //     astrology: ["Scorpio", "resourceful", "emotional"],
    // },
    // {
    //     name: "Arya Stark",
    //     astrology: ["Sagittarius", "adventurous", "independent"],
    // },
    // {
    //     name: "Stannis Baratheon",
    //     astrology: ["Capricorn", "disciplined", "determined"],
    // },
    // {
    //     name: "Margaery Tyrell",
    //     astrology: ["Leo", "charismatic", "ambitious"],
    // },
    // {
    //     name: "Olenna Tyrell",
    //     astrology: ["Virgo", "practical", "skeptical"],
    // },
    // {
    //     name: "Littlefinger",
    //     astrology: ["Pisces", "manipulative", "unpredictable"],
    // },
    // {
    //     name: "Sandor Clegane",
    //     astrology: ["Cancer", "protective", "hot-headed"],
    // },
    // {
    //     name: "Khal Drogo",
    //     astrology: ["Sagittarius", "adventurous", "passionate"],
    // },
    // {
    //     name: "Ygritte",
    //     astrology: ["Sagittarius", "free-spirited", "rebellious"],
    // },
    // {
    //     name: "Tywin Lannister",
    //     astrology: ["Capricorn", "authoritative", " calculating"],
    // },
    // {
    //     name: "Oberyn Martell",
    //     astrology: ["Scorpio", "vengeful", "passionate"],
    // },
];

// Function to generate a random character
function pickRandomCharacter() {
    for (let i = 0; i < characters.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        const randomAstrology = Math.floor(
            Math.random() * characters[randomIndex].themes.length
        );
        return [
            characters[randomIndex].name,
            characters[randomIndex].astrology,
            characters[randomIndex].themes[randomAstrology].nom,
            characters[randomIndex].themes[randomAstrology].description,
        ];
    }
    // return characters[Math.floor(Math.random() * characters.length)];
}

// Function to update the UI with the selected character
function updateUI(character) {
    const imageUrl = `ressources/${character[0]}.jpg`;
    const characterName = `${character[0]}`;
    const astrology = `${character[1]}`;
    const astrologyTitre = `${character[2]}`;
    const astrologyDescription = `${character[3]}`;

    console.log(character);

    // Update the image element
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = characterName;
    imageElement.style.transition = "transform 0.5s ease-out";
    characterContainer.appendChild(imageElement);

    // Update the name element
    const nameElement = document.createElement("h2");
    nameElement.textContent = characterName;
    nameElement.style.color = "white";
    nameElement.style.position = "absolute";
    nameElement.style.left = "50%";
    nameElement.style.top = "70%";
    nameElement.style.transform = "translate(-50%, -50%)";
    nameElement.style.textAlign = "center";
    characterContainer.appendChild(nameElement);

    // Update the astrology element
    const astrologyElement = document.createElement("h3");
    astrologyElement.textContent = astrology.toString().split(",").join(", ");

    const astrologyTitreElement = document.createElement("h1");
    astrologyTitreElement.textContent = astrologyTitre;

    const astrologyDescriptionElement = document.createElement("p");
    astrologyDescriptionElement.textContent = astrologyDescription;

    astrologyContainer.appendChild(astrologyElement);
    astrologyContainer.appendChild(astrologyTitreElement);
    astrologyContainer.appendChild(astrologyDescriptionElement);
}
function cleanUI() {
    characterContainer.innerHTML = "";
    astrologyContainer.innerHTML = "";
}

// Add event listener to button
randomizeButton.addEventListener("click", () => {
    const character = pickRandomCharacter();
    setTimeout(() => {
        cleanUI();
        updateUI(character);
    }, 500);
});
