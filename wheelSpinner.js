// Get the button and character container Elements
const randomizeButton = document.getElementById("randomizeButton");
const characterContainer = document.getElementById("characterContainer");
const characterNameContainer = document.getElementById("name");
const astrologyContainer = document.getElementById("asthrones");

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
    {
        name: "Jamie Lannister",
        astrology: ["Loyal(e)", "Imprévisible", "Déterminé(e)"],
        themes: [
            {
                nom: "La Quête Éternelle de l'Épée Parfaite",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de l'épée parfaite, symbolisant leur recherche constante de maîtrise dans l'art de l'escrime et de l'honneur.",
            },
            {
                nom: "Les Négociations Diplomatiques avec les Lions",
                description:
                    "Chaque jour, ces individus pratiquent les négociations diplomatiques avec les lions imaginaires, naviguant avec finesse entre les alliances familiales et les devoirs chevaleresques.",
            },
            {
                nom: "Les Débats Intérieurs du Chevalier d'Or",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un chevalier d'or, cherchant l'équilibre entre l'honneur et les choix difficiles.",
            },
            {
                nom: "La Parade Majestueuse des Armures Polies",
                description:
                    "Ces individus participent à des parades majestueuses des armures polies, symbolisant la prestance et la discipline dans leur quête quotidienne de perfection.",
            },
            {
                nom: "Les Randonnées Tactiques sur les Terres de l'Ouest",
                description:
                    "Chaque journée apporte des randonnées tactiques sur les terres de l'Ouest, explorant les territoires et les responsabilités qui accompagnent la loyauté envers sa maison.",
            },
            {
                nom: "La Lutte Contre les Regardes de Pitié",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards de pitié, symbolisant les défis de se réconcilier avec le passé et de forger un avenir glorieux.",
            },
            {
                nom: "La Quête du Vin Raffiné comme Réconfort après la Bataille",
                description:
                    "Chaque jour, ces individus partent à la quête du vin raffiné, adoptant la subtilité de la dégustation comme un réconfort après les batailles de la vie.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Contraignants",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens contraignants, tirant des leçons de leurs propres expériences tumultueuses.",
            },
            {
                nom: "La Parade des Lions d'Or dans les Cours Royales",
                description:
                    "Ces individus participent à des parades des lions d'or dans les cours royales, symbolisant la grandeur et la noblesse qui émanent de leur présence chevaleresque.",
            },
            {
                nom: "Les Danses Élégantes avec les Dames de la Cour",
                description:
                    "Chaque journée offre des danses élégantes avec les dames de la cour, maîtrisant l'art subtil de la conversation et de la séduction avec respect et charme.",
            },
            {
                nom: "Les Épopées Poétiques du Chevalier Honoré",
                description:
                    "Ces individus vivent des épopées poétiques du chevalier honoré, créant des vers épiques pour célébrer la bravoure et la loyauté dans leur propre histoire.",
            },
            {
                nom: "La Quête Infinie du Sens de l'Identité",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de l'identité, cherchant à trouver leur place dans un monde parfois empreint de préjugés.",
            },
            {
                nom: "Les Combats Épiques avec les Épées à Deux Mains",
                description:
                    "Chaque journée apporte des combats épiques avec les épées à deux mains, symbolisant les défis physiques et émotionnels de manier une arme imposante.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets de la Main d'Or",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets de la Main d'Or, explorant la complexité des responsabilités et des choix difficiles.",
            },
            {
                nom: "La Quête du Sens de la Justice dans un Monde de Trahisons",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la justice dans un monde de trahisons, où la loyauté et la morale sont parfois mises à l'épreuve.",
            },
            {
                nom: "Les Conseils Sages des Cours Chevaleresques",
                description:
                    "Ces individus dispensent des conseils sages des cours chevaleresques, puisant dans la sagesse des codes d'honneur pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse de l'Acier avec les Nuances de Gris",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec l'acier à travers les nuances de gris, symbolisant les choix moraux complexes qui jalonnent leur chemin de vie.",
            },
            {
                nom: "La Négociation Diplomatique avec les Forgerons de Renom",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les forgerons de renom, cherchant à acquérir les meilleures armes et armures.",
            },
            {
                nom: "Les Éclats de Rire dans les Cours des Seigneurs",
                description:
                    "Inspirés par les éclats de rire dans les cours des seigneurs, ces natifs trouvent l'humour au cœur des situations les plus complexes et des règles strictes de l'étiquette.",
            },
        ],
    },
    {
        name: "Bran Stark",
        astrology: ["Mystique", "Intuitif(ve)", "Rêveur(se)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Vision Parfaite",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la vision parfaite, symbolisant leur recherche constante de compréhension et de clarté dans les mystères du monde.",
            },
            {
                nom: "Les Conversations Télépathiques avec les Corbeaux",
                description:
                    "Chaque jour, ces individus pratiquent les conversations télépathiques avec les corbeaux imaginaires, explorant les secrets de la nature à travers une connexion mystique.",
            },
            {
                nom: "Les Débats Intérieurs du Spectre du Trois Yeux",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un spectre du trois yeux, naviguant entre le passé, le présent et l'avenir avec sagesse.",
            },
            {
                nom: "La Parade Silencieuse des Chaises à Roulettes",
                description:
                    "Ces individus participent à des parades silencieuses des chaises à roulettes, symbolisant la puissance tranquille de la mobilité dans leur quête de vérité.",
            },
            {
                nom: "Les Randonnées Énigmatiques au-delà du Mur",
                description:
                    "Chaque journée apporte des randonnées énigmatiques au-delà du Mur, explorant des territoires mystérieux de la vie quotidienne avec une touche de magie nordique.",
            },
            {
                nom: "La Lutte Contre les Pertes de Mémoire Temporelles",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les pertes de mémoire temporelles, symbolisant les défis de maintenir une connexion constante avec le continuum temporel.",
            },
            {
                nom: "La Quête du Thé Vert pour Stimuler la Clairvoyance",
                description:
                    "Chaque jour, ces individus partent à la quête du thé vert parfait, adoptant la clairvoyance comme un objectif dans leur recherche de stimulants mentaux.",
            },
            {
                nom: "Les Conseils pour Éviter les Rencontres avec le Roi de la Nuit",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les rencontres avec le Roi de la Nuit, tirant des leçons de la bataille contre les forces du mal.",
            },
            {
                nom: "La Parade des Loups-Garous dans les Allées du Temps",
                description:
                    "Ces individus participent à des parades des loups-garous dans les allées du temps, symbolisant la loyauté et la présence constante des compagnons intemporels.",
            },
            {
                nom: "Les Voyages Astraux à dos de Corbeau",
                description:
                    "Chaque journée offre des voyages astraux à dos de corbeau, explorant les dimensions spirituelles avec une grâce aérienne unique.",
            },
            {
                nom: "Les Épopées Poétiques du Greenseer Enigmatique",
                description:
                    "Ces individus vivent des épopées poétiques du greenseer énigmatique, créant des vers épiques pour narrer les mystères de la nature et du destin.",
            },
            {
                nom: "La Quête Infinie de la Vérité Universelle",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie de la vérité universelle, cherchant à percer les secrets cachés du cosmos.",
            },
            {
                nom: "Les Combats Épiques avec les Fauteuils Roulants Magiques",
                description:
                    "Chaque journée apporte des combats épiques avec les fauteuils roulants magiques, symbolisant les défis de la vie quotidienne avec une touche de mysticisme.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets du Corbeau Trois Yeux",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets du corbeau à trois yeux, explorant les mystères cachés de leur propre conscience.",
            },
            {
                nom: "La Quête du Sens de la Présence dans un Monde Distordu",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la présence dans un monde distordu, où la réalité peut être aussi fluide que le temps lui-même.",
            },
            {
                nom: "Les Conseils Sages des Racines Anciennes",
                description:
                    "Ces individus dispensent des conseils sages des racines anciennes, puisant dans la sagesse de l'histoire pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Visions avec les Nuances de Vert",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les visions à travers les nuances de vert, symbolisant les choix éthérés et les mystères du destin.",
            },
            {
                nom: "La Négociation Diplomatique avec les Esprits de la Nature",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les esprits de la nature, cherchant l'harmonie avec les forces mystiques.",
            },
            {
                nom: "Les Éclats de Rire dans les Vortex Temporels",
                description:
                    "Inspirés par les éclats de rire dans les vortex temporels, ces natifs trouvent l'humour au cœur des paradoxes et des réalités complexes de l'existence.",
            },
        ],
    },
    {
        name: "Samwell Tarly",
        astrology: ["Plein de ressources", "Emotif(ve)", "Intelectuel(le)"],
        themes: [
            {
                nom: "La Quête Éternelle du Livre Parfait",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle du livre parfait, symbolisant leur recherche constante de connaissances et de sagesse dans les pages de la vie.",
            },
            {
                nom: "Les Discussions Érudites avec les Dragons de Bibliothèque",
                description:
                    "Chaque jour, ces individus pratiquent les discussions érudites avec les dragons de bibliothèque imaginaires, explorant les trésors cachés de la littérature.",
            },
            {
                nom: "Les Débats Intérieurs du Maître de la Connaissance",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un maître de la connaissance, naviguant entre l'intelligence et la timidité avec délicatesse.",
            },
            {
                nom: "La Parade Tranquille des Lunettes Astucieuses",
                description:
                    "Ces individus participent à des parades tranquilles des lunettes astucieuses, symbolisant la clarté et la perspicacité dans leur quête quotidienne de vérité.",
            },
            {
                nom: "Les Randonnées Savantes dans les Allées des Grandes Bibliothèques",
                description:
                    "Chaque journée apporte des randonnées savantes dans les allées des grandes bibliothèques, explorant les recoins les plus érudits du savoir.",
            },
            {
                nom: "La Lutte Contre les Regardes Désapprobateurs",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regardes désapprobateurs, symbolisant les défis de maintenir la confiance en soi dans un monde parfois critique.",
            },
            {
                nom: "La Quête du Thé Relaxant pour Calmer les Nerfs",
                description:
                    "Chaque jour, ces individus partent à la quête du thé relaxant, adoptant la sérénité comme un remède pour apaiser les nerfs agités.",
            },
            {
                nom: "Les Conseils pour Éviter les Querelles dans la Salle Commune",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les querelles dans la salle commune, tirant des leçons de la diplomatie nécessaire au sein de groupes divers.",
            },
            {
                nom: "La Parade des Livres Célèbres dans les Salons de Savoir",
                description:
                    "Ces individus participent à des parades des livres célèbres dans les salons de savoir, symbolisant la célébration de la littérature et de la culture.",
            },
            {
                nom: "Les Discussions Calmes avec les Esprits Littéraires",
                description:
                    "Chaque journée offre des discussions calmes avec les esprits littéraires, maîtrisant l'art subtil de la conversation intellectuelle et imaginative.",
            },
            {
                nom: "Les Épopées Poétiques de l'Érudit Bienveillant",
                description:
                    "Ces individus vivent des épopées poétiques de l'érudit bienveillant, créant des vers épiques pour célébrer la bienveillance et la quête du savoir.",
            },
            {
                nom: "La Quête Infinie du Sens de la Compassion",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la compassion, cherchant à comprendre et à apporter du réconfort aux autres.",
            },
            {
                nom: "Les Combats Épiques avec les Piles de Manuscrits",
                description:
                    "Chaque journée apporte des combats épiques avec les piles de manuscrits, symbolisant les défis de gérer la richesse infinie du savoir à disposition.",
            },
            {
                nom: "La Méditation Profonde sur les Mystères des Anciens Textes",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les mystères des anciens textes, explorant la sagesse cachée derrière les mots.",
            },
            {
                nom: "La Quête du Sens de l'Honnêteté dans un Monde de Fictions",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'honnêteté dans un monde de fictions, où la vérité peut parfois être plus étrange que la fiction.",
            },
            {
                nom: "Les Conseils Sages des Archivistes Bienveillants",
                description:
                    "Ces individus dispensent des conseils sages des archivistes bienveillants, puisant dans la sagesse des gardiens du savoir pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Lunettes avec les Nuances de Bleu",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les lunettes à travers les nuances de bleu, symbolisant les choix clairs et la vision perspicace de la vie.",
            },
            {
                nom: "La Négociation Diplomatique avec les Libraires Intrépides",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les libraires intrépides, cherchant à acquérir les trésors littéraires les plus rares.",
            },
            {
                nom: "Les Éclats de Rire dans les Clubs de Lecture Secret",
                description:
                    "Inspirés par les éclats de rire dans les clubs de lecture secrets, ces natifs trouvent l'humour au cœur des aventures intellectuelles et des découvertes littéraires.",
            },
        ],
    },
    {
        name: "Arya Stark",
        astrology: ["Aventureux(se)", "Indépendant(e)", "Déterminé(e)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Liste Parfaite",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la liste parfaite, symbolisant leur recherche constante de justice et de vengeance dans un monde complexe.",
            },
            {
                nom: "Les Conversations Silencieuses avec les Visages Sans Nom",
                description:
                    "Chaque jour, ces individus pratiquent les conversations silencieuses avec les visages sans nom imaginaires, explorant les secrets de l'identité et de la transformation.",
            },
            {
                nom: "Les Débats Intérieurs de la Tueuse Impitoyable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une tueuse impitoyable, jonglant entre la loyauté, la justice et la vengeance.",
            },
            {
                nom: "La Parade Furtive des Capes Noires",
                description:
                    "Ces individus participent à des parades furtives des capes noires, symbolisant l'agilité et la discrétion dans leur quête quotidienne d'évasion et de justice personnelle.",
            },
            {
                nom: "Les Randonnées Discrètes dans les Ruelles d'Essos",
                description:
                    "Chaque journée apporte des randonnées discrètes dans les ruelles d'Essos, explorant les cultures et les mystères des terres lointaines.",
            },
            {
                nom: "La Lutte Contre les Regardes Indiscrets",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regardes indiscrets, symbolisant les défis de préserver son identité et ses secrets dans un monde curieux.",
            },
            {
                nom: "La Quête du Thé Tonique pour Aiguiser les Sens",
                description:
                    "Chaque jour, ces individus partent à la quête du thé tonique, adoptant la vivacité d'esprit comme une arme aiguisée dans leur recherche constante de survie.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Émotionnels Inutiles",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens émotionnels inutiles, tirant des leçons de leur propre parcours solitaire et déterminé.",
            },
            {
                nom: "La Parade des Loups dans les Forêts Sombres",
                description:
                    "Ces individus participent à des parades des loups dans les forêts sombres, symbolisant la connexion profonde avec les instincts sauvages et la nature.",
            },
            {
                nom: "Les Danses Furtives avec les Ombres de Braavos",
                description:
                    "Chaque journée offre des danses furtives avec les ombres de Braavos, maîtrisant l'art subtil de la dissimulation et de l'infiltration.",
            },
            {
                nom: "Les Épopées Poétiques de la Vagabonde Intrépide",
                description:
                    "Ces individus vivent des épopées poétiques de la vagabonde intrépide, créant des vers épiques pour célébrer la liberté et la force d'une vie non conventionnelle.",
            },
            {
                nom: "La Quête Infinie du Sens de la Liberté",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la liberté, cherchant à échapper aux chaînes du passé et à forger leur propre destin.",
            },
            {
                nom: "Les Combats Épiques avec les Épées d'Aiguilles",
                description:
                    "Chaque journée apporte des combats épiques avec les épées d'Aiguilles, symbolisant les défis de manier une arme légendaire avec précision et détermination.",
            },
            {
                nom: "La Méditation Profonde sur les Mystères des Visages Sans Nom",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les mystères des visages sans nom, explorant la complexité de l'identité et de la métamorphose.",
            },
            {
                nom: "La Quête du Sens de l'Indépendance dans un Monde d'Intrigues",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'indépendance dans un monde d'intrigues, où la liberté personnelle est souvent sacrifiée au nom du pouvoir.",
            },
            {
                nom: "Les Conseils Sages des Maîtres d'Armes Secrets",
                description:
                    "Ces individus dispensent des conseils sages des maîtres d'armes secrets, puisant dans la sagesse des entraînements discrets pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Lames avec les Nuances de Rouge",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les lames à travers les nuances de rouge, symbolisant la force, la détermination et le sang versé dans leur parcours.",
            },
            {
                nom: "La Négociation Diplomatique avec les Marchands de Masques",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les marchands de masques, ajoutant une touche de mystère à leurs alliances.",
            },
            {
                nom: "Les Éclats de Rire dans les Cours des Ombres",
                description:
                    "Inspirés par les éclats de rire dans les cours des ombres, ces natifs trouvent l'humour au cœur des situations les plus sombres et des choix difficiles.",
            },
        ],
    },
    {
        name: "Stannis Baratheon",
        astrology: ["Dictateur(trice)", "Autoritaire", "Ambitieux(se)"],
        themes: [
            {
                nom: "La Quête Éternelle du Devoir Inébranlable",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle du devoir inébranlable, symbolisant leur recherche constante de justice et de discipline dans un monde en proie au chaos.",
            },
            {
                nom: "Les Conversations Sérieuses avec l'Ombre de Melisandre",
                description:
                    "Chaque jour, ces individus pratiquent les conversations sérieuses avec l'ombre de Melisandre imaginaires, explorant les mystères du pouvoir magique et des choix prophétiques.",
            },
            {
                nom: "Les Débats Intérieurs du Justicier Implacable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un justicier implacable, naviguant entre la rigueur morale et la dureté nécessaire.",
            },
            {
                nom: "La Parade Rigide des Soldats Disciplinés",
                description:
                    "Ces individus participent à des parades rigides des soldats disciplinés, symbolisant la fermeté et l'ordre dans leur quête quotidienne de conquête et de justice.",
            },
            {
                nom: "Les Randonnées Intransigeantes sur les Terres de Dragonstone",
                description:
                    "Chaque journée apporte des randonnées intransigeantes sur les terres de Dragonstone, explorant les territoires inhospitaliers avec détermination et dévouement.",
            },
            {
                nom: "La Lutte Contre les Regards Condescendants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards condescendants, symbolisant les défis de se faire respecter dans un monde où la loyauté est rare.",
            },
            {
                nom: "La Quête du Café Fort pour Affronter les Tempêtes",
                description:
                    "Chaque jour, ces individus partent à la quête du café fort, adoptant la force intérieure comme une arme pour affronter les tempêtes de la vie.",
            },
            {
                nom: "Les Conseils pour Éviter les Intrigues Courtoises",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les intrigues courtoises, tirant des leçons de leur propre expérience avec les jeux politiques et les manipulations.",
            },
            {
                nom: "La Parade des Lions de Fer dans les Salles du Trône",
                description:
                    "Ces individus participent à des parades des lions de fer dans les salles du trône, symbolisant la résilience et la détermination face aux adversités.",
            },
            {
                nom: "Les Danses Rigides avec les Ladies de la Cour",
                description:
                    "Chaque journée offre des danses rigides avec les ladies de la cour, maîtrisant l'art subtil de la politesse et de la courtoisie avec une approche formelle.",
            },
            {
                nom: "Les Épopées Poétiques du Seigneur Juste",
                description:
                    "Ces individus vivent des épopées poétiques du seigneur juste, créant des vers épiques pour célébrer la quête inflexible de la vérité et de l'équité.",
            },
            {
                nom: "La Quête Infinie du Sens du Sacrifice",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens du sacrifice, cherchant à prendre des décisions difficiles pour le bien commun.",
            },
            {
                nom: "Les Combats Épiques avec les Épées en Flammes",
                description:
                    "Chaque journée apporte des combats épiques avec les épées enflammées, symbolisant les défis de manier une arme imprégnée de la puissance magique du feu.",
            },
            {
                nom: "La Méditation Profonde sur les Stratégies de Guerre",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les stratégies de guerre, explorant la complexité des batailles et des plans tactiques.",
            },
            {
                nom: "La Quête du Sens de la Justice dans un Monde Corrompu",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la justice dans un monde corrompu, où la loyauté envers des principes inébranlables est mise à l'épreuve.",
            },
            {
                nom: "Les Conseils Sages des Chevaliers Loyaux",
                description:
                    "Ces individus dispensent des conseils sages des chevaliers loyaux, puisant dans la sagesse des camarades d'armes pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse de l'Acier avec les Nuances d'Azur",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec l'acier à travers les nuances d'azur, symbolisant la force et la clarté de leurs convictions.",
            },
            {
                nom: "La Négociation Diplomatique avec les Prêtres de R'hllor",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les prêtres de R'hllor, cherchant à équilibrer la foi et la réalpolitik.",
            },
            {
                nom: "Les Éclats de Rire Stratégiques dans les Salles du Trône",
                description:
                    "Inspirés par les éclats de rire stratégiques dans les salles du trône, ces natifs trouvent l'humour au cœur des situations politiques les plus complexes.",
            },
        ],
    },
    {
        name: "Margaery Tyrell",
        astrology: ["Charismatique, Diplomate, Ambitieux(se)"],
        themes: [
            {
                nom: "La Quête Éternelle de l'Élégance Irrésistible",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de l'élégance irrésistible, symbolisant leur recherche constante de beauté et de charme dans un monde avide de glamour.",
            },
            {
                nom: "Les Conversations Envoûtantes avec les Rosiers Enchantés",
                description:
                    "Chaque jour, ces individus pratiquent les conversations envoûtantes avec les rosiers enchantés imaginaires, explorant les mystères de l'amour et de la séduction.",
            },
            {
                nom: "Les Débats Intérieurs de la Stratège Charismatique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une stratège charismatique, jonglant entre la diplomatie et l'ambition avec grâce.",
            },
            {
                nom: "La Parade Élégante des Robes à Étoffes Exquises",
                description:
                    "Ces individus participent à des parades élégantes des robes à étoffes exquises, symbolisant la sophistication et la grâce dans leur quête quotidienne de pouvoir et d'influence.",
            },
            {
                nom: "Les Randonnées Romantiques dans les Jardins de Hautjardin",
                description:
                    "Chaque journée apporte des randonnées romantiques dans les jardins de Hautjardin, explorant les recoins les plus charmants de la nature et de la passion.",
            },
            {
                nom: "La Lutte Contre les Regardes Envieux",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regardes envieux, symbolisant les défis de briller au milieu de la jalousie et des rivalités.",
            },
            {
                nom: "La Quête du Thé Floral pour Égayer l'Âme",
                description:
                    "Chaque jour, ces individus partent à la quête du thé floral, adoptant la douceur comme une arme pour apaiser les esprits et gagner des cœurs.",
            },
            {
                nom: "Les Conseils pour Éviter les Intrigues Amoureuses Dangereuses",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les intrigues amoureuses dangereuses, tirant des leçons de leur propre expérience dans le jeu de l'amour courtois.",
            },
            {
                nom: "La Parade des Paons Majestueux dans les Salles du Trône",
                description:
                    "Ces individus participent à des parades des paons majestueux dans les salles du trône, symbolisant la fierté et la beauté éblouissante au cœur du pouvoir.",
            },
            {
                nom: "Les Danses Envoûtantes avec les Seigneurs de la Cour",
                description:
                    "Chaque journée offre des danses envoûtantes avec les seigneurs de la cour, maîtrisant l'art subtil de la séduction et de la diplomatie avec charme.",
            },
            {
                nom: "Les Épopées Poétiques de la Reine en Devenir",
                description:
                    "Ces individus vivent des épopées poétiques de la reine en devenir, créant des vers épiques pour célébrer la quête du trône et de la grandeur royale.",
            },
            {
                nom: "La Quête Infinie du Sens de l'Amour Véritable",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de l'amour véritable, cherchant à découvrir la passion authentique au-delà des apparences.",
            },
            {
                nom: "Les Combats Épiques avec les Éventails Élégants",
                description:
                    "Chaque journée apporte des combats épiques avec les éventails élégants, symbolisant les défis de manier des accessoires gracieux avec aisance et charme.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets de la Cour",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets de la cour, explorant les nuances subtiles de l'intrigue et de la politique.",
            },
            {
                nom: "La Quête du Sens de la Beauté Intérieure",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la beauté intérieure, où la véritable élégance réside dans la bonté et la noblesse du cœur.",
            },
            {
                nom: "Les Conseils Sages des Dame de Compagnie Bienveillantes",
                description:
                    "Ces individus dispensent des conseils sages des dames de compagnie bienveillantes, puisant dans la sagesse des confidentes fidèles pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Roses avec les Nuances de Rose",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les roses à travers les nuances de rose, symbolisant la délicatesse et la passion dans leur parcours royal.",
            },
            {
                nom: "La Négociation Diplomatique avec les Courtisans Galants",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les courtisans galants, ajoutant une touche de romance à leurs alliances politiques.",
            },
            {
                nom: "Les Éclats de Rire Élégants dans les Salons de Hautgarden",
                description:
                    "Inspirés par les éclats de rire élégants dans les salons de Hautgarden, ces natifs trouvent l'humour au cœur des soirées mondaines et des jeux sociaux.",
            },
        ],
    },
    {
        name: "Olenna Tyrell",
        astrology: ["Pragmatique", "Perspicace", "Intelligent(e)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Sagesse Acérée",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la sagesse acérée, symbolisant leur recherche constante d'intelligence et de perspicacité dans un monde empreint de politique.",
            },
            {
                nom: "Les Conversations Cinglantes avec les Roses Intelligents",
                description:
                    "Chaque jour, ces individus pratiquent les conversations cinglantes avec les roses intelligents imaginaires, explorant les subtilités de l'intrigue et de la manipulation.",
            },
            {
                nom: "Les Débats Intérieurs de la Stratège Machiavélique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une stratège machiavélique, jonglant entre la ruse et la loyauté avec audace.",
            },
            {
                nom: "La Parade Aiguisée des Réparties Satiriques",
                description:
                    "Ces individus participent à des parades aiguisées des réparties satiriques, symbolisant l'esprit vif et la finesse dans leur quête quotidienne de manipulation politique.",
            },
            {
                nom: "Les Randonnées Éclairées dans les Jardins de Hautgarden",
                description:
                    "Chaque journée apporte des randonnées éclairées dans les jardins de Hautgarden, explorant les dédales de la cour avec finesse et discernement.",
            },
            {
                nom: "La Lutte Contre les Regards Niais",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards niais, symbolisant les défis de traiter avec ceux qui sous-estiment leur intelligence affûtée.",
            },
            {
                nom: "La Quête du Thé Puissant pour Réveiller l'Esprit",
                description:
                    "Chaque jour, ces individus partent à la quête du thé puissant, adoptant la force mentale comme une arme pour affronter les jeux de pouvoir.",
            },
            {
                nom: "Les Conseils pour Éviter les Alliances Faibles",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les alliances faibles, tirant des leçons de leur propre expérience pour forger des liens stratégiques.",
            },
            {
                nom: "La Parade des Serpents Rusés dans les Salles de Conseil",
                description:
                    "Ces individus participent à des parades des serpents rusés dans les salles de conseil, symbolisant la ruse et la finesse dans l'art de la manipulation politique.",
            },
            {
                nom: "Les Danses Astucieuses avec les Seigneurs de la Cour",
                description:
                    "Chaque journée offre des danses astucieuses avec les seigneurs de la cour, maîtrisant l'art subtil de la séduction et de la persuasion avec élégance.",
            },
            {
                nom: "Les Épopées Poétiques de la Maîtresse des Intrigues",
                description:
                    "Ces individus vivent des épopées poétiques de la maîtresse des intrigues, créant des vers épiques pour célébrer la maîtrise des jeux de pouvoir.",
            },
            {
                nom: "La Quête Infinie du Sens de la Manipulation Subtile",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la manipulation subtile, cherchant à orchestrer les événements avec astuce et raffinement.",
            },
            {
                nom: "Les Combats Épiques avec les Éventails de Vermeil",
                description:
                    "Chaque journée apporte des combats épiques avec les éventails de vermeil, symbolisant les défis de déployer des atouts élégants avec tact et assurance.",
            },
            {
                nom: "La Méditation Profonde sur les Secrets des Cours Royales",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les secrets des cours royales, explorant les subtilités des alliances et des complots.",
            },
            {
                nom: "La Quête du Sens de la Vérité Dissimulée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la vérité dissimulée, où la perspicacité est nécessaire pour percer les voiles des mensonges politiques.",
            },
            {
                nom: "Les Conseils Sages des Conseillers Éclairés",
                description:
                    "Ces individus dispensent des conseils sages des conseillers éclairés, puisant dans la sagesse des confidents fidèles pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Serpents avec les Nuances d'Émeraude",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les serpents à travers les nuances d'émeraude, symbolisant la ruse, la grâce et la puissance.",
            },
            {
                nom: "La Négociation Diplomatique avec les Maitres des Échecs",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les maîtres des échecs, cherchant à anticiper et à contrer les mouvements adverses.",
            },
            {
                nom: "Les Éclats de Rire Cinglants dans les Salles de Conseil",
                description:
                    "Inspirés par les éclats de rire cinglants dans les salles de conseil, ces natifs trouvent l'humour au cœur des manœuvres politiques les plus complexes.",
            },
        ],
    },
    {
        name: "Littlefinger",
        astrology: ["Manipulateur(trice)", "Ambitieux(se)", "Intelligent(e)"],
        themes: [
            {
                nom: "La Quête Éternelle du Pouvoir Insaisissable",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle du pouvoir insaisissable, symbolisant leur recherche constante d'influence et de contrôle dans un monde de jeux politiques.",
            },
            {
                nom: "Les Conversations Énigmatiques avec les Oiseaux de Corbeau",
                description:
                    "Chaque jour, ces individus pratiquent les conversations énigmatiques avec les oiseaux de corbeau imaginaires, explorant les mystères des alliances et des secrets bien gardés.",
            },
            {
                nom: "Les Débats Intérieurs du Machiavélique Stratège",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un machiavélique stratège, jonglant entre la duplicité et la manipulation avec astuce.",
            },
            {
                nom: "La Parade Furtive des Hommes de Main Discrets",
                description:
                    "Ces individus participent à des parades furtives des hommes de main discrets, symbolisant la ruse et la discrétion dans leur quête quotidienne de pouvoir et de profit.",
            },
            {
                nom: "Les Randonnées Astucieuses dans les Ruelles de King's Landing",
                description:
                    "Chaque journée apporte des randonnées astucieuses dans les ruelles de King's Landing, explorant les bas-fonds de la cité avec opportunisme et ruse.",
            },
            {
                nom: "La Lutte Contre les Regards Soupçonneux",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards soupçonneux, symbolisant les défis de se mouvoir dans les eaux troubles de la politique sans être découvert.",
            },
            {
                nom: "La Quête du Vin Raffiné pour Lubrifier les Alliances",
                description:
                    "Chaque jour, ces individus partent à la quête du vin raffiné, adoptant l'art de la séduction et de la persuasion autour d'une coupe bien choisie.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Émotionnels Inutiles",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens émotionnels inutiles, tirant des leçons de leur propre parcours de détachement et de calcul.",
            },
            {
                nom: "La Parade des Serpents Malicieux dans les Cours Royales",
                description:
                    "Ces individus participent à des parades des serpents malicieux dans les cours royales, symbolisant la ruse et la tromperie au cœur du jeu politique.",
            },
            {
                nom: "Les Danses Diplomatiques avec les Puissants de Westeros",
                description:
                    "Chaque journée offre des danses diplomatiques avec les puissants de Westeros, maîtrisant l'art subtil de la manipulation et de l'alliance stratégique.",
            },
            {
                nom: "Les Épopées Poétiques du Maître des Marionnettes",
                description:
                    "Ces individus vivent des épopées poétiques du maître des marionnettes, créant des intrigues épiques pour célébrer la subversion et la montée au pouvoir.",
            },
            {
                nom: "La Quête Infinie du Sens de l'Opportunité",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de l'opportunité, cherchant à saisir chaque moment propice pour avancer leurs plans.",
            },
            {
                nom: "Les Combats Épiques avec les Lames d'Argent et de Tromperie",
                description:
                    "Chaque journée apporte des combats épiques avec les lames d'argent et de tromperie, symbolisant les défis de manier des armes aussi aiguisées que la manipulation politique.",
            },
            {
                nom: "La Méditation Profonde sur les Méandres des Conspirations",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les méandres des conspirations, explorant les subtilités des complots et des alliances secrètes.",
            },
            {
                nom: "La Quête du Sens de la Tactique Perfide",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la tactique perfide, où la ruse et la finesse sont des armes aussi importantes que la force brute.",
            },
            {
                nom: "Les Conseils Sages des Conseillers Sombres",
                description:
                    "Ces individus dispensent des conseils sages des conseillers sombres, puisant dans la sagesse des manipulateurs habiles pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Ombres avec les Nuances d'Obsidienne",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les ombres à travers les nuances d'obsidienne, symbolisant la subversion et l'intrigue dans leur parcours politique.",
            },
            {
                nom: "La Négociation Diplomatique avec les Tisserands de Mensonges",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les tisserands de mensonges, cherchant à manipuler les fils du destin.",
            },
            {
                nom: "Les Éclats de Rire Ironiques dans les Salles du Pouvoir",
                description:
                    "Inspirés par les éclats de rire ironiques dans les salles du pouvoir, ces natifs trouvent l'humour au cœur des machinations politiques les plus retorses.",
            },
        ],
    },
    {
        name: "Sandor Clegane",
        astrology: ["Protecteur(trice)", "Fidèle", "Tête brulée"],
        themes: [
            {
                nom: "La Quête Éternelle de la Solitude Impitoyable",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la solitude impitoyable, symbolisant leur recherche constante de paix dans un monde chaotique et brutal.",
            },
            {
                nom: "Les Conversations Sarcastiques avec les Chiens Errants",
                description:
                    "Chaque jour, ces individus pratiquent les conversations sarcastiques avec les chiens errants imaginaires, explorant les méandres de la vie avec un humour grinçant.",
            },
            {
                nom: "Les Débats Intérieurs du Guerrier Désillusionné",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un guerrier désillusionné, naviguant entre la violence et la quête de sens avec brutalité.",
            },
            {
                nom: "La Parade Impassible des Hommes de Main Taciturnes",
                description:
                    "Ces individus participent à des parades impassibles des hommes de main taciturnes, symbolisant la force tranquille et la fidélité dans leur quête quotidienne de survie.",
            },
            {
                nom: "Les Randonnées Solitaires dans les Terres Désolées",
                description:
                    "Chaque journée apporte des randonnées solitaires dans les terres désolées, explorant les étendues sauvages avec une détermination inflexible.",
            },
            {
                nom: "La Lutte Contre les Regards Méprisants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards méprisants, symbolisant les défis de trouver la valeur personnelle dans un monde indifférent.",
            },
            {
                nom: "La Quête du Vin Fort pour Oublier les Cauchemars",
                description:
                    "Chaque jour, ces individus partent à la quête du vin fort, adoptant la rudesse comme une arme pour affronter les démons du passé.",
            },
            {
                nom: "Les Conseils pour Éviter les Attachements Inutiles",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les attachements inutiles, tirant des leçons de leur propre expérience de détachement émotionnel.",
            },
            {
                nom: "La Parade des Loups Solitaires dans les Terres Sauvages",
                description:
                    "Ces individus participent à des parades des loups solitaires dans les terres sauvages, symbolisant la détermination et la résilience dans l'isolement.",
            },
            {
                nom: "Les Danses Impétueuses avec la Rage Intérieure",
                description:
                    "Chaque journée offre des danses impétueuses avec la rage intérieure, maîtrisant l'art de canaliser la colère pour la transformer en force.",
            },
            {
                nom: "Les Épopées Poétiques du Chevalier Solitaire",
                description:
                    "Ces individus vivent des épopées poétiques du chevalier solitaire, créant des vers épiques pour célébrer la lutte personnelle et la quête de rédemption.",
            },
            {
                nom: "La Quête Infinie du Sens de la Loyauté",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la loyauté, cherchant à trouver des liens forts dans un monde souvent dénué de fidélité.",
            },
            {
                nom: "Les Combats Épiques avec les Lances de la Désillusion",
                description:
                    "Chaque journée apporte des combats épiques avec les lances de la désillusion, symbolisant les défis de se battre avec la réalité brutale de la vie.",
            },
            {
                nom: "La Méditation Profonde sur les Traces de la Souffrance",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les traces de la souffrance, explorant les cicatrices de leur passé avec un regard résolu.",
            },
            {
                nom: "La Quête du Sens de la Liberté Indomptée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la liberté indomptée, où la volonté de vivre en dehors des contraintes guide chaque pas.",
            },
            {
                nom: "Les Conseils Sages des Vieillards Sages Errants",
                description:
                    "Ces individus dispensent des conseils sages des vieillards sages errants, puisant dans la sagesse de ceux qui ont survécu aux épreuves les plus rudes.",
            },
            {
                nom: "La Danse des Ombres avec les Nuances d'Obscurité",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les ombres à travers les nuances d'obscurité, symbolisant la force obscure et la détermination sans compromis.",
            },
            {
                nom: "La Négociation Diplomatique avec les Bêtes Sauvages",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les bêtes sauvages, cherchant à trouver un équilibre avec la nature impitoyable.",
            },
            {
                nom: "Les Éclats de Rire Sombres dans les Tavernes Lointaines",
                description:
                    "Inspirés par les éclats de rire sombres dans les tavernes lointaines, ces natifs trouvent l'humour au cœur des coins les plus reculés du royaume.",
            },
        ],
    },
    {
        name: "Khal Drogo",
        astrology: ["Aventureux(se)", "Fier(e)", "Sauvage"],
        themes: [
            {
                nom: "La Quête Éternelle de la Puissance Sauvage",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la puissance sauvage, symbolisant leur recherche constante de force et de domination dans un monde brutal.",
            },
            {
                nom: "Les Conversations Passionnées avec les Chevaux de Guerre",
                description:
                    "Chaque jour, ces individus pratiquent les conversations passionnées avec les chevaux de guerre imaginaires, explorant les liens profonds avec la nature et la férocité.",
            },
            {
                nom: "Les Débats Intérieurs du Chef de Guerre Intrépide",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un chef de guerre intrépide, jonglant entre la stratégie et l'honneur avec courage.",
            },
            {
                nom: "La Parade Majestueuse des Guerriers Imposants",
                description:
                    "Ces individus participent à des parades majestueuses des guerriers imposants, symbolisant la grandeur et la prestance dans leur quête quotidienne de conquête.",
            },
            {
                nom: "Les Randonnées Aventureuses dans les Plaines Sans Fin",
                description:
                    "Chaque journée apporte des randonnées aventureuses dans les plaines sans fin, explorant les vastes étendues avec une détermination sans limites.",
            },
            {
                nom: "La Lutte Contre les Regards Défiants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards défiant, symbolisant les défis de maintenir la fierté et la détermination face à l'adversité.",
            },
            {
                nom: "La Quête du Feu Sacré pour Brûler les Obstacles",
                description:
                    "Chaque jour, ces individus partent à la quête du feu sacré, adoptant la flamme comme une arme pour brûler les obstacles sur leur chemin.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Contraignants",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens contraignants, tirant des leçons de leur propre expérience pour rester libres comme le vent.",
            },
            {
                nom: "La Parade des Lions Féroces dans les Tribus Nomades",
                description:
                    "Ces individus participent à des parades des lions féroces dans les tribus nomades, symbolisant la force et la loyauté au cœur de la vie nomade.",
            },
            {
                nom: "Les Danses Guerrières avec les Braves Indomptables",
                description:
                    "Chaque journée offre des danses guerrières avec les braves indomptables, maîtrisant l'art de la lutte et de la camaraderie avec fougue.",
            },
            {
                nom: "Les Épopées Poétiques du Seigneur des Steppes",
                description:
                    "Ces individus vivent des épopées poétiques du seigneur des steppes, créant des chants épiques pour célébrer la bravoure et la conquête.",
            },
            {
                nom: "La Quête Infinie du Sens de la Liberté Sauvage",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la liberté sauvage, cherchant à goûter à la vie sans entraves et à l'exploration sans limites.",
            },
            {
                nom: "Les Combats Épiques avec les Armes des Ancêtres",
                description:
                    "Chaque journée apporte des combats épiques avec les armes des ancêtres, symbolisant les défis de perpétuer la tradition guerrière avec honneur.",
            },
            {
                nom: "La Méditation Profonde sous les Étoiles Infinies",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sous les étoiles infinies, explorant la connexion spirituelle avec le cosmos et la nature.",
            },
            {
                nom: "La Quête du Sens de la Fierté Indomptée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la fierté indomptée, où l'honneur et la dignité sont des valeurs sacrées.",
            },
            {
                nom: "Les Conseils Sages des Anciens Guerriers Respectés",
                description:
                    "Ces individus dispensent des conseils sages des anciens guerriers respectés, puisant dans la sagesse de ceux qui ont connu les batailles les plus féroces.",
            },
            {
                nom: "La Danse des Flammes avec les Nuances d'Orange",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les flammes à travers les nuances d'orange, symbolisant la passion ardente et la détermination inébranlable.",
            },
            {
                nom: "La Négociation Diplomatique avec les Tribus Alliées",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les tribus alliées, cherchant à forger des liens solides dans l'unité des steppes.",
            },
            {
                nom: "Les Éclats de Rire Tonitruants dans les Festins de Victoire",
                description:
                    "Inspirés par les éclats de rire tonitruants dans les festins de victoire, ces natifs trouvent l'humour au cœur des célébrations après la bataille.",
            },
        ],
    },
    {
        name: "Ygritte",
        astrology: ["Esprit libre", "Indépendant(e)", "Rebel(le)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Liberté Sauvage",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la liberté sauvage, symbolisant leur recherche constante de spontanéité et d'aventure dans un monde imprévisible.",
            },
            {
                nom: "Les Conversations Animées avec les Oiseaux Chanteurs",
                description:
                    "Chaque jour, ces individus pratiquent les conversations animées avec les oiseaux chanteurs imaginaires, explorant les joies simples de la nature avec enthousiasme.",
            },
            {
                nom: "Les Débats Intérieurs de l'Ame Libre",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une âme libre, jonglant entre l'indépendance et la connexion avec la nature.",
            },
            {
                nom: "La Parade Énergique des Explorateurs Intrépides",
                description:
                    "Ces individus participent à des parades énergiques des explorateurs intrépides, symbolisant la curiosité et le courage dans leur quête quotidienne d'aventure.",
            },
            {
                nom: "Les Randonnées Ludiques dans les Forêts Mystérieuses",
                description:
                    "Chaque journée apporte des randonnées ludiques dans les forêts mystérieuses, explorant les recoins cachés avec une joie insouciante.",
            },
            {
                nom: "La Lutte Contre les Regards Confinants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards confinants, symbolisant les défis de rester fidèle à soi-même dans un monde parfois restrictif.",
            },
            {
                nom: "La Quête du Feu Sacré pour Réchauffer les Cœurs",
                description:
                    "Chaque jour, ces individus partent à la quête du feu sacré, adoptant la chaleur humaine comme une arme pour briser les barrières sociales.",
            },
            {
                nom: "Les Conseils pour Éviter les Attachements Étouffants",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les attachements étouffants, tirant des leçons de leur propre expérience pour préserver leur indépendance.",
            },
            {
                nom: "La Parade des Loups Joueurs dans les Vallées Sauvages",
                description:
                    "Ces individus participent à des parades des loups joueurs dans les vallées sauvages, symbolisant la camaraderie et l'instinct de meute au cœur de la vie sauvage.",
            },
            {
                nom: "Les Danses Libres avec les Esprits des Montagnes",
                description:
                    "Chaque journée offre des danses libres avec les esprits des montagnes, maîtrisant l'art de la danse et de la célébration avec spontanéité.",
            },
            {
                nom: "Les Épopées Poétiques de la Rebelle Insoumise",
                description:
                    "Ces individus vivent des épopées poétiques de la rebelle insoumise, créant des chants épiques pour célébrer la force de caractère et la résistance.",
            },
            {
                nom: "La Quête Infinie du Sens de l'Amour Sauvage",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de l'amour sauvage, cherchant des relations passionnées et authentiques dans un monde souvent prévisible.",
            },
            {
                nom: "Les Combats Épiques avec les Flèches de l'Optimisme",
                description:
                    "Chaque journée apporte des combats épiques avec les flèches de l'optimisme, symbolisant les défis de rester positif et confiant malgré les adversités.",
            },
            {
                nom: "La Méditation Profonde sous les Étoiles Lumineuses",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sous les étoiles lumineuses, explorant la sérénité et la connexion cosmique avec humilité.",
            },
            {
                nom: "La Quête du Sens de la Liberté Authentique",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la liberté authentique, où la vérité intérieure guide chaque choix et action.",
            },
            {
                nom: "Les Conseils Sages des Anciens Arbres Sage",
                description:
                    "Ces individus dispensent des conseils sages des anciens arbres sages, puisant dans la sagesse de la nature pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Feuilles avec les Nuances de Vert",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les feuilles à travers les nuances de vert, symbolisant la vitalité et la croissance personnelle.",
            },
            {
                nom: "La Négociation Diplomatique avec les Esprits des Rivières",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les esprits des rivières, cherchant l'harmonie avec la nature.",
            },
            {
                nom: "Les Éclats de Rire Libérateurs dans les Campements Nomades",
                description:
                    "Inspirés par les éclats de rire libérateurs dans les campements nomades, ces natifs trouvent l'humour au cœur des joies simples de la vie sauvage.",
            },
        ],
    },
    {
        name: "Tywin Lannister",
        astrology: ["Autoritaire", "Calculateur(rice)", "Intelligent(e)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Suprématie Lannister",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la suprématie Lannister, symbolisant leur recherche constante de pouvoir et de prestige dans un monde politique impitoyable.",
            },
            {
                nom: "Les Conversations Imposantes avec les Gobelins d'Or",
                description:
                    "Chaque jour, ces individus pratiquent les conversations imposantes avec les gobelins d'or imaginaires, explorant les subtilités de l'économie et de la richesse.",
            },
            {
                nom: "Les Débats Intérieurs du Maître de la Raison Implacable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un maître de la raison implacable, jonglant entre la logique et la réalpolitik avec détermination.",
            },
            {
                nom: "La Parade Majestueuse des Stratèges Imposants",
                description:
                    "Ces individus participent à des parades majestueuses des stratèges imposants, symbolisant la grandeur et la puissance dans leur quête quotidienne de domination politique.",
            },
            {
                nom: "Les Randonnées Précises dans les Couloirs du Pouvoir",
                description:
                    "Chaque journée apporte des randonnées précises dans les couloirs du pouvoir, explorant les dédales politiques avec une stratégie méticuleuse.",
            },
            {
                nom: "La Lutte Contre les Regards Méprisants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards méprisants, symbolisant les défis de maintenir la dignité et le respect dans un monde cynique.",
            },
            {
                nom: "La Quête du Vin Rare pour Lubrifier les Transactions",
                description:
                    "Chaque jour, ces individus partent à la quête du vin rare, adoptant l'art de la négociation et de la diplomatie autour d'une bouteille bien choisie.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Émotionnels Inutiles",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens émotionnels inutiles, tirant des leçons de leur propre parcours de détachement politique.",
            },
            {
                nom: "La Parade des Lions Dorés dans les Cours Royales",
                description:
                    "Ces individus participent à des parades des lions dorés dans les cours royales, symbolisant la puissance et la richesse au cœur du jeu politique.",
            },
            {
                nom: "Les Danses Diplomatiques avec les Puissants de Westeros",
                description:
                    "Chaque journée offre des danses diplomatiques avec les puissants de Westeros, maîtrisant l'art subtil de la manipulation et de l'alliance stratégique.",
            },
            {
                nom: "Les Épopées Poétiques du Seigneur de la Maison Lannister",
                description:
                    "Ces individus vivent des épopées poétiques du seigneur de la Maison Lannister, créant des chants épiques pour célébrer la gloire et la prospérité de leur lignée.",
            },
            {
                nom: "La Quête Infinie du Sens de la Stratégie Implacable",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la stratégie implacable, cherchant à anticiper chaque mouvement pour préserver leur influence.",
            },
            {
                nom: "Les Combats Épiques avec les Épées de l'Intrigue",
                description:
                    "Chaque journée apporte des combats épiques avec les épées de l'intrigue, symbolisant les défis de manier des armes aussi tranchantes que la politique de haut niveau.",
            },
            {
                nom: "La Méditation Profonde sur les Arcanes des Alliances",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sur les arcanes des alliances, explorant les subtilités des pactes et des accords politiques.",
            },
            {
                nom: "La Quête du Sens de la Puissance Absolue",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la puissance absolue, où la domination politique est la mesure ultime du succès.",
            },
            {
                nom: "Les Conseils Sages des Conseillers Éclairés",
                description:
                    "Ces individus dispensent des conseils sages des conseillers éclairés, puisant dans la sagesse des stratèges habiles pour guider leurs actions au quotidien.",
            },
            {
                nom: "La Danse des Lions avec les Nuances d'Or et de Pouvoir",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les lions à travers les nuances d'or et de pouvoir, symbolisant la noblesse et l'influence de la Maison Lannister.",
            },
            {
                nom: "La Négociation Diplomatique avec les Tisserands de Mensonges",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les tisserands de mensonges, cherchant à manipuler les fils du destin.",
            },
            {
                nom: "Les Éclats de Rire Ironiques dans les Salles du Pouvoir",
                description:
                    "Inspirés par les éclats de rire ironiques dans les salles du pouvoir, ces natifs trouvent l'humour au cœur des jeux politiques les plus retors.",
            },
        ],
    },
    {
        name: "Oberyn Martell",
        astrology: ["Vangeur(se)", "Fier(e)", "Passionné(e)"],
        themes: [
            {
                nom: "La Quête Éternelle de la Passion Ardente",
                description:
                    "Les natifs de ce signe sont voués à une quête éternelle de la passion ardente, symbolisant leur recherche constante d'intensité et de plaisir dans un monde sensuel.",
            },
            {
                nom: "Les Conversations Flamboyantes avec les Serpents du Désert",
                description:
                    "Chaque jour, ces individus pratiquent les conversations flamboyantes avec les serpents du désert imaginaires, explorant les mystères de la vie avec une curiosité insatiable.",
            },
            {
                nom: "Les Débats Intérieurs du Maître de la Stratégie Sensuelle",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un maître de la stratégie sensuelle, jonglant entre la séduction et la ruse avec audace.",
            },
            {
                nom: "La Parade Élégante des Amants Épanouis",
                description:
                    "Ces individus participent à des parades élégantes des amants épanouis, symbolisant la beauté et la passion dans leur quête quotidienne de plaisirs exquis.",
            },
            {
                nom: "Les Randonnées Aventureuses dans les Dunes Sans Fin",
                description:
                    "Chaque journée apporte des randonnées aventureuses dans les dunes sans fin, explorant les étendues désertiques avec une détermination sans limites.",
            },
            {
                nom: "La Lutte Contre les Regards Envoûtants",
                description:
                    "Les natifs de ce thème astrologique sont appelés à lutter contre les regards envoûtants, symbolisant les défis de maintenir une aura magnétique dans un monde captivant.",
            },
            {
                nom: "La Quête du Vin Épicé pour Éveiller les Sens",
                description:
                    "Chaque jour, ces individus partent à la quête du vin épicé, adoptant les saveurs envoûtantes comme une invitation à l'éveil des sens.",
            },
            {
                nom: "Les Conseils pour Éviter les Liens Émotionnels Constrictifs",
                description:
                    "Les natifs de ce signe dispensent des conseils pour éviter les liens émotionnels constrictifs, tirant des leçons de leur propre expérience pour préserver leur indépendance.",
            },
            {
                nom: "La Parade des Lions du Désert dans les Cours Exotiques",
                description:
                    "Ces individus participent à des parades des lions du désert dans les cours exotiques, symbolisant la grâce et la force au cœur de la vie aventureuse.",
            },
            {
                nom: "Les Danses Passionnées avec les Âmes Intrépides",
                description:
                    "Chaque journée offre des danses passionnées avec les âmes intrépides, maîtrisant l'art de la connexion profonde avec ardeur.",
            },
            {
                nom: "Les Épopées Poétiques du Prince Désiré",
                description:
                    "Ces individus vivent des épopées poétiques du prince désiré, créant des chants épiques pour célébrer l'amour et la liberté.",
            },
            {
                nom: "La Quête Infinie du Sens de la Liberté Sensuelle",
                description:
                    "Chaque jour, ces natifs sont voués à une quête infinie du sens de la liberté sensuelle, cherchant à goûter à chaque expérience avec passion.",
            },
            {
                nom: "Les Combats Épiques avec les Lances de la Séduction",
                description:
                    "Chaque journée apporte des combats épiques avec les lances de la séduction, symbolisant les défis de conquérir les cœurs avec charme et audace.",
            },
            {
                nom: "La Méditation Profonde sous les Étoiles du Désert",
                description:
                    "Ces individus s'engagent chaque jour dans une méditation profonde sous les étoiles du désert, explorant la sérénité et la connexion cosmique avec humilité.",
            },
            {
                nom: "La Quête du Sens de l'Émotion Libre",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'émotion libre, où l'expression sincère des sentiments guide chaque interaction.",
            },
            {
                nom: "Les Conseils Sages des Oracle du Désert",
                description:
                    "Ces individus dispensent des conseils sages des oracles du désert, puisant dans la sagesse mystique pour guider leurs choix au quotidien.",
            },
            {
                nom: "La Danse des Serpents avec les Nuances de Rouge et de Noir",
                description:
                    "Chaque jour, les natifs de ce signe dansent avec les serpents à travers les nuances de rouge et de noir, symbolisant la séduction et la force du désert.",
            },
            {
                nom: "La Négociation Diplomatique avec les Tribus Nomades",
                description:
                    "Les personnes de ce signe excellent dans l'art délicat de la négociation diplomatique avec les tribus nomades, cherchant à créer des alliances au-delà des frontières.",
            },
            {
                nom: "Les Éclats de Rire Passionnés dans les Oasis Enchantées",
                description:
                    "Inspirés par les éclats de rire passionnés dans les oasis enchantées, ces natifs trouvent l'humour au cœur des moments les plus enchanteurs de la vie.",
            },
        ],
    },
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
}

// Function to update the UI with the selected character
function updateUI(character) {
    const imageUrl = `ressources/${character[0]}.jpg`;
    const characterName = `${character[0]}`;
    const astrology = `${character[1]}`;
    const astrologyTitre = `${character[2]}`;
    const astrologyDescription = `${character[3]}`;

    // Update the image element
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = characterName;
    characterContainer.appendChild(imageElement);

    // Update the name element
    const nameElement = document.createElement("h2");
    nameElement.textContent = characterName;
    characterNameContainer.appendChild(nameElement);

    // Update the astrology element
    const astrologyElement = document.createElement("h3");
    astrologyElement.textContent = astrology.toString().split(",").join(", ");
    const astrologyTitreElement = document.createElement("h1");
    astrologyTitreElement.textContent = astrologyTitre;
    const astrologyDescriptionElement = document.createElement("p");
    astrologyDescriptionElement.textContent = astrologyDescription;

    // Append the elements to the container
    astrologyContainer.appendChild(nameElement);
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
