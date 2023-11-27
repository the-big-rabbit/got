// Get the button and character container Elements
const randomizeButton = document.getElementById("randomizeButton");
const characterContainer = document.getElementById("characterContainer");
const imageContainer = document.getElementById("imageContainer");
const characterNameContainer = document.getElementById("name");
const astrologyContainer = document.getElementById("asthrones");

// Create an array of characters
const characters = [
    {
        name: "Daenerys Targaryen",
        astrology: ["Ambitieux(se)", "Confiant(e)", "Déterminé(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Justice pour les Déshérités",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Justice pour les Déshérités. Tu cherches constamment l'équité et la compassion dans un monde en perpétuelle évolution, guidée par ton désir de créer un royaume plus juste et égalitaire pour tous.",
            },
            {
                nom: "Journée de Conversations Empathiques avec les Dragons Ailés",
                description:
                    "Chaque jour, c'est une Journée de Conversations Empathiques avec les Dragons Ailés pour toi. Tu explores les liens profonds avec tes compagnons imaginaires, partageant tes pensées et ressentant leur puissante présence d'une manière que seul un vrai Targaryen peut comprendre.",
            },
            {
                nom: "Journée des Débats Intérieurs de la Reine Juste",
                description:
                    "Aujourd'hui, c'est une Journée des Débats Intérieurs de la Reine Juste pour toi. Tu jongles constamment entre la compassion et la fermeté, utilisant ta sagesse pour guider tes décisions et forger un règne équilibré et juste.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Libérateurs Inlassables",
                description:
                    "En cette Journée de la Parade Majestueuse des Libérateurs Inlassables, tu célèbres la grandeur et la détermination qui animent ta quête quotidienne de liberté pour tous. Ta volonté inébranlable d'affranchir les opprimés inspire les générations futures.",
            },
            {
                nom: "Journée des Randonnées Aériennes au-dessus des Continents Lointains",
                description:
                    "Aujourd'hui, c'est une Journée des Randonnées Aériennes au-dessus des Continents Lointains pour toi. Tu explores les horizons avec une vision audacieuse, guidée par le désir de créer un avenir meilleur et de repousser les limites du possible.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Malveillants",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Malveillants. Tu fais face aux défis de maintenir la bonté et la bienveillance dans un monde parfois cruel, et ta résilience inspire ceux qui t'entourent.",
            },
            {
                nom: "Journée de la Quête du Feu Sacré pour Briser les Chaînes",
                description:
                    "En cette Journée de la Quête du Feu Sacré pour Briser les Chaînes, tu t'engages à utiliser la flamme comme une arme pour briser les chaînes de l'oppression et de l'injustice. Ton courage inspire l'espoir et la libération.",
            },
            {
                nom: "Journée des Conseils pour Éviter les Liens Oppressifs",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Éviter les Liens Oppressifs. Tu partages des leçons tirées de ton expérience pour encourager la préservation de l'indépendance et la promotion de la liberté individuelle.",
            },
            {
                nom: "Journée de la Parade des Dragons Majestueux dans les Cieux Infinis",
                description:
                    "En cette Journée de la Parade des Dragons Majestueux dans les Cieux Infinis, tu célèbres la puissance et la grâce de la dynastie Targaryen. La majesté de tes dragons symbolise la grandeur de ton héritage.",
            },
            {
                nom: "Journée des Danses Harmonieuses avec les Peuples Libres",
                description:
                    "Aujourd'hui, c'est une Journée des Danses Harmonieuses avec les Peuples Libres. Tu maîtrises l'art de la diplomatie et de l'unité, dansant avec les peuples pour unifier les nations et créer un monde de paix et de coopération.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Mère des Dragons",
                description:
                    "En cette Journée des Épopées Poétiques de la Mère des Dragons, tu crées des chants épiques pour célébrer la force et la majesté de ta lignée. Ton histoire devient une inspiration pour les générations futures.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Libération Universelle",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Infinie du Sens de la Libération Universelle. Tu cherches à abolir les chaînes qui entravent la paix et la prospérité pour tous, travaillant inlassablement pour créer un monde meilleur.",
            },
            {
                nom: "Journée des Combats Épiques avec les Paroles de la Résistance",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec les Paroles de la Résistance. Tu relèves les défis de défendre les idéaux de justice et d'égalité avec conviction, utilisant ta voix pour inspirer le changement.",
            },
            {
                nom: "Journée de la Méditation Profonde sous les Étoiles Éternelles",
                description:
                    "En cette Journée de la Méditation Profonde sous les Étoiles Éternelles, tu t'engages à explorer la sagesse cosmique et la responsabilité qui accompagne le pouvoir. Chaque méditation te connecte aux étoiles, te rappelant ta destinée.",
            },
            {
                nom: "Journée de la Quête du Sens de la Compassion Infinie",
                description:
                    "Aujourd'hui, c'est une Journée de la Quête du Sens de la Compassion Infinie. L'amour et la bienveillance sont pour toi des valeurs sacrées, guidant tes actions et te permettant de créer des liens profonds avec ceux qui t'entourent.",
            },
            {
                nom: "Journée des Conseils Sages des Anciens Gardiens de la Sagesse",
                description:
                    "En cette Journée des Conseils Sages des Anciens Gardiens de la Sagesse, tu dispenses des conseils inspirés de la connaissance ancienne. Ta sagesse guide tes choix au quotidien, et ton héritage devient une source d'inspiration pour tous.",
            },
            {
                nom: "Journée de la Danse des Flammes avec les Nuances de Rouge et d'Or",
                description:
                    "Aujourd'hui, c'est une Journée de la Danse des Flammes avec les Nuances de Rouge et d'Or. Tu danses avec les flammes, symbolisant la passion et la puissance des dragons qui coulent dans tes veines royales.",
            },
            {
                nom: "Journée de la Négociation Diplomatique avec les Maisons du Royaume",
                description:
                    "En cette Journée de la Négociation Diplomatique avec les Maisons du Royaume, tu excelles dans l'art délicat de créer des alliances. Ta vision d'un Westeros unifié guide tes efforts pour instaurer la paix dans tout le royaume.",
            },
            {
                nom: "Journée des Éclats de Rire Bienveillants dans les Salles du Pouvoir",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Bienveillants dans les Salles du Pouvoir. Ton humour détendu et bienveillant ajoute une touche de légèreté aux moments de tension, rappelant à tous la sagesse et la détente.",
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
                nom: "Journée de la Petite Main",
                description:
                    "Tu excelleras dans l'art subtil de la stratégie politique et des manœuvres en coulisse, tout en restant une petite main astucieuse.",
            },
            {
                nom: "Journée du Vin Parfait",
                description:
                    "Tu partiras à la recherche du vin parfait, harmonisant les saveurs et les arômes avec la précision d'un connaisseur.",
            },
            {
                nom: "Journée des Discours Éloquents du Lutin Littéraire",
                description:
                    "Tu sera destiné(e) à prononcer des discours éloquents et à manier les mots avec la finesse d'un lutin littéraire, même dans les situations les plus inattendues.",
            },
            {
                nom: "Journée de La Danse des Chapeaux de Lutin",
                description:
                    "Tu devras faire une danse avec des chapeaux de lutin, symbolisant l'élégance et la fantaisie au cœur de la vie quotidienne.",
            },
            {
                nom: "Journée Des Négociations Diplomatiques avec les Dragons",
                description:
                    "Tu mèneras des négociations diplomatiques délicates avec des dragons imaginaires.",
            },
            {
                nom: "Journée Des Conseils pour Éviter les Mariages Malheureux",
                description:
                    "Tu dispenseras des conseils astucieux pour éviter les mariages malheureux, basés sur une expérience personnelle inégalée.",
            },
            {
                nom: "Journée de La Lutte Contre les Géants des Bureaux",
                description:
                    "Tu lutteras contre les géants des bureaux, symbolisant les défis quotidiens dans un monde de titans professionnels.",
            },
            {
                nom: "Journée des Débats Intérieurs du Génie Tactique",
                description:
                    "Tu seras engagé(e) dans des débats intérieurs dignes d'un génie tactique, pesant le pour et le contre avec une clarté exceptionnelle.",
            },
            {
                nom: "Journée de La Chasse au Trésor dans les Livres Anciens",
                description:
                    "Tu entreprendras des chasses au trésor intellectuelles dans les livres anciens, dévoilant des connaissances précieuses et des secrets enfouis.",
            },
            {
                nom: "Journée Des Stripteases de l'Esprit Aiguisé",
                description:
                    "Tu offriras des moments de striptease intellectuel, révélant un esprit nu et des pensées acérées dignes d'un Lannister.",
            },
            {
                nom: "Journée de la Danse des Lutins dans les Vignobles",
                description:
                    "Tu participeras à une danse de lutins dans les vignobles, célébrant la joyeuse alliance entre la viticulture et la fantaisie.",
            },
            {
                nom: "Journée des Épopées Comiques de la Petite Taille",
                description:
                    "Tu vivras des épopées comiques de la petite taille, surmontant les défis avec humour et intelligence, prouvant que la grandeur n'est pas une question de taille.",
            },
            {
                nom: "Jpurnée de La Quête Infinie du Siège Parfait",
                description:
                    "Tu seras voué(e) à une quête infinie du siège parfait, cherchant le confort ultime dans un monde souvent trop grand pour eux.",
            },
            {
                nom: "Journée Des Manœuvres Tactiques pour Éviter les Lancers de Tomates",
                description:
                    "Tu développeras des manœuvres tactiques ingénieuses pour éviter les lancers de tomates, prouvant que l'esprit peut triompher de la taille.",
            },
            {
                nom: "Journée des Éclats de Rire Stratégiques",
                description:
                    "Inspirés par les éclats de rire stratégiques, tu trouveras l'humour dans chaque situation, utilisant le rire comme une arme puissante contre l'adversité.",
            },
        ],
    },
    {
        name: "Jon Snow",
        astrology: ["Sociable", "Équilibré(e)", "Sensible"],
        themes: [
            {
                nom: "Journée de La Quête Éternelle du Manteau en Fourrure",
                description:
                    "Tu seras voué(e) à une quête éternelle du manteau en fourrure parfait, symbolisant la recherche constante de chaleur et de style dans l'adversité.",
            },
            {
                nom: "Journée de La Diplomatie avec les Loups",
                description:
                    "Tu pratiqueras la diplomatie avec des loups imaginaires, mettant à l'épreuve ta capacité à communiquer avec la nature sauvage.",
            },
            {
                nom: "Journée des Débats Intérieurs du Seigneur des Neiges",
                description:
                    "Tu seras constamment engagé(e) dans des débats intérieurs dignes d'un seigneur des neiges, naviguant entre l'honneur et la réalité brutale.",
            },
            {
                nom: "Journée de La Danse Épique des Épées Perdues",
                description:
                    "Tu participera à la danse épique des épées perdues, symbolisant les défis de la quête de la lame parfaite dans un monde enneigé.",
            },
            {
                nom: "Journée Des Randonnées Mystiques au-delà du Mur",
                description:
                    "Tu feras une randonnée mystiqyue au-delà du Mur, explorant des territoires inexplorés de la vie quotidienne avec une touche de mystère nordique.",
            },
            {
                nom: "Journée de La Lutte Contre les Ventilateurs de Glace",
                description:
                    "Tu seras appelé(e) à lutter contre les ventilateurs de glace, symbolisant les batailles contre le froid glacial avec détermination.",
            },
            {
                nom: "Journée de La Quête du Café Noir comme la Garde de Nuit",
                description:
                    "Tu partiras à la recherhche de la quête du café noir parfait, adoptant l'austérité de la Garde de Nuit dans leur recherche de caféine.",
            },
            {
                nom: "Journée Des Conseils pour Éviter les Mariages à la Red Wedding",
                description:
                    "Tu dispenseras des conseils pour éviter les mariages à la Red Wedding, tirant des leçons de la tragédie de Westeros.",
            },
            {
                nom: "Journée Des Courses de Loups à dos de Dragon",
                description:
                    "Tu participeras à des courses de loups à dos de dragon, combinant la grâce aérienne avec la puissance mystique, dans des aventures fantastiques.",
            },
            {
                nom: "Journée Des Épopées Poétiques du Bâtard Honoré",
                description:
                    "Tu vivras des épopées poétiques du bâtard honoré, créant des vers épiques pour narrer tes propres histoires héroïques.",
            },
            {
                nom: "Journée de La Quête Infinie de la Vérité sur ses Origines",
                description:
                    "Tu seras voué(e) à une quête infinie de la vérité sur leurs origines, cherchant à démêler les mystères de ton histoire personnelle.",
            },
            {
                nom: "Journée Des Conseils Sages des Neiges Éternelles",
                description:
                    "Tu dispenseras les conseils sages des neiges éternelles, puisant dans la sagesse de l'hiver pour guider les actions des autres au quotidien.",
            },
            {
                nom: "Journée de La Négociation Diplomatique avec les Marcheurs Blancs",
                description:
                    "Tu excelleras dans l'art délicat de la négociation diplomatique avec les Marcheurs Blancs, cherchant la paix dans les régions glacées de la vie.",
            },
        ],
    },
    {
        name: "Sansa Stark",
        astrology: ["Romantique", "Naïf(ve)", "Rêveur(se)"],
        themes: [
            {
                nom: "Journée de La Quête Éternelle de la Robe parfaite",
                description:
                    "Tu seras voué(e) à une quête éternelle de la robe parfaite, symbolisant ta recherche constante de grâce et d'élégance dans un monde changeant.",
            },
            {
                nom: "Journée des Débats Intérieurs de la Dame du Nord",
                description:
                    "Tu seras constamment engagé(e) dans des débats intérieurs dignes d'une dame du Nord, naviguant entre la prudence et la fermeté.",
            },
            {
                nom: "Journée des Randonnées Introspectives dans les Jardins Royaux",
                description:
                    "Tu feras des randonnées introspectives dans les jardins royaux, explorant des territoires intérieurs paisibles et enchanteurs.",
            },
            {
                nom: "Journée des Danses Élégantes avec des Intrigues Courtoises",
                description:
                    "La journée t'offriras des danses élégantes avec des intrigues courtoises, maîtrisant l'art subtil de naviguer dans les eaux troubles de la politique royale.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Rose du Nord",
                description:
                    "Tu vivras des épopées poétiques de la rose du Nord, créant des vers épiques pour célébrer la beauté et la résilience dans ta propre histoire.",
            },
            {
                nom: "Journée de La Quête Infinie du Sens de l'Indépendance",
                description:
                    "Tu seras voué(e) à une quête infinie du sens de l'indépendance, cherchant à forger ton propre destin dans un monde parfois oppressant.",
            },
            {
                nom: "Journée des Combats Épiques avec les Épingles à Cheveux",
                description:
                    "Aujourd'hui tu affronteras des combats épiques avec des épingles à cheveux, symbolisant les défis esthétiques de maintenir une coiffure impeccable dans toutes les situations.",
            },
            {
                nom: "Journée de La Quête du Sens de la Courtoisie dans un Monde Cynique",
                description:
                    "Cette journée t'offriras la quête perpétuelle du sens de la courtoisie dans un monde cynique, où la gentillesse peut être une arme puissante.",
            },
            {
                nom: "Journée des Conseils Sages des Jardins d'Hiver",
                description:
                    "Tu dispenseras les conseils sages des jardins d'hiver aux autres, puisant dans la sagesse des saisons froides pour guider leurs actions au quotidien.",
            },
        ],
    },
    {
        name: "Cersei Lannister",
        astrology: ["Protecteur(rice)", "Sens de la famille", "Ambitieux(se)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle du Pouvoir Absolu",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle du Pouvoir Absolu. Tu cherches constamment à étendre ton influence et à consolider ta position, utilisant tous les moyens nécessaires pour atteindre tes objectifs ambitieux.",
            },
            {
                nom: "Journée de Conversations Impérieuses avec les Lions d'Or",
                description:
                    "Chaque jour, c'est une Journée de Conversations Impérieuses avec les Lions d'Or pour toi. Tu maîtrises l'art des échanges impérieux, explorant les subtilités du pouvoir et de la politique avec une confiance inébranlable.",
            },
            {
                nom: "Journée des Débats Intérieurs de la Reine Machiavélique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une reine machiavélique. Tu jongles entre la ruse et la stratégie avec audace, utilisant ton intelligence aiguisée pour naviguer dans les eaux tumultueuses du jeu politique.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Souveraines Intrigantes",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Souveraines Intrigantes pour toi. Tu célèbres la grandeur et l'intrigue, symbolisant ta quête quotidienne de manipulation subtile et de contrôle sur le trône de fer.",
            },
            {
                nom: "Journée des Randonnées Tactiques dans les Coulisses du Pouvoir",
                description:
                    "Chaque journée apporte des randonnées tactiques dans les coulisses du pouvoir, explorant les intrications politiques avec une stratégie méticuleuse. Ton intelligence affûtée guide chacun de tes pas sur l'échiquier du pouvoir.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Envieux",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Envieux. Tu fais face aux défis de maintenir ta position dominante dans un monde où l'envie et la jalousie abondent, montrant avec fierté ta force et ta détermination.",
            },
            {
                nom: "Journée de la Quête du Vin Raffiné pour Étancher la Soif du Pouvoir",
                description:
                    "Chaque jour, c'est une Journée de la Quête du Vin Raffiné pour Étancher la Soif du Pouvoir. Tu savoures les plaisirs de la vie, négociant et conspirant autour d'une bouteille bien choisie tout en consolidant ton emprise sur le royaume.",
            },
            {
                nom: "Journée des Conseils pour Éviter les Liens Emotionnels Inutiles",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Éviter les Liens Emotionnels Inutiles. Tu dispensas des conseils pour maintenir la distance émotionnelle, tirant des leçons de ton propre parcours pour préserver la puissance du trône.",
            },
            {
                nom: "Journée de la Parade des Lions d'Or dans les Cours Royales",
                description:
                    "Les natifs de ce signe participent à des parades des lions d'or dans les cours royales, symbolisant la puissance et la richesse au cœur du jeu politique. Ta présence majestueuse et ta prestance font de chaque apparition un spectacle royal.",
            },
            {
                nom: "Journée des Danses Diplomatiques avec les Puissants de Westeros",
                description:
                    "Chaque journée offre des danses diplomatiques avec les puissants de Westeros, maîtrisant l'art subtil de la manipulation et de l'alliance stratégique. Ton charme et ton habileté politique te permettent de tisser des liens bénéfiques pour ta cause.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Dame Machiavélique",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de la dame machiavélique, créant des chants épiques pour célébrer l'intelligence et la ruse. Chacune de tes manœuvres politiques devient une note dans la symphonie de ton règne.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Stratégie Implacable",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la stratégie implacable. Tu cherches à anticiper chaque mouvement, utilisant ta sagacité pour préserver ton influence et ta domination politique.",
            },
            {
                nom: "Journée des Combats Épiques avec les Épées de l'Intrigue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec les Épées de l'Intrigue. Tu manies des armes aussi tranchantes que la politique de haut niveau, utilisant ton intelligence et ta ruse pour triompher de tes adversaires.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Arcanes des Alliances",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les arcanes des alliances, explorant les subtilités des pactes et des accords politiques. Ta compréhension aiguisée des relations tisse la toile de ton influence politique.",
            },
            {
                nom: "Journée de la Quête du Sens de la Puissance Absolue",
                description:
                    "Cette journée t'offre la quête perpétuelle du sens de la puissance absolue, où la domination politique est la mesure ultime du succès. Ta soif de pouvoir et de contrôle te pousse à atteindre de nouveaux sommets dans le jeu politique de Westeros.",
            },
            {
                nom: "Journée des Conseils Sages des Stratèges de la Cour",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Stratèges de la Cour. Tu dispensas des conseils inspirés des stratèges les plus habiles, utilisant la sagesse ancienne pour guider tes propres manœuvres politiques avec finesse et perspicacité.",
            },
            {
                nom: "Journée de la Négociation Diplomatique avec les Maisons Rivales",
                description:
                    "En cette Journée de la Négociation Diplomatique avec les Maisons Rivales, tu excelles dans l'art délicat de créer des alliances et d'affirmer la suprématie de la maison Lannister. Ta diplomatie subtile assure la stabilité et la prospérité du royaume.",
            },
            {
                nom: "Journée des Éclats de Rire Ironiques dans les Salles du Pouvoir",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Ironiques dans les Salles du Pouvoir. Ton humour sarcastique ajoute une touche de cynisme aux moments politiques, soulignant avec ironie les subtilités du jeu de trônes.",
            },
        ],
    },
    {
        name: "Jamie Lannister",
        astrology: ["Loyal(e)", "Imprévisible", "Déterminé(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Rédemption Héroïque",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Rédemption Héroïque. Tu cherches constamment à racheter ton passé et à forger un avenir où l'héroïsme et la bravoure guident tes actions, transcendant les ombres de tes choix passés.",
            },
            {
                nom: "Journée de Conversations Franches avec l'Épée d'Or",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec l'Épée d'Or pour toi. Tu maîtrises l'art de la conversation directe, explorant les nuances de l'honneur et du devoir avec la même habileté que tu manies ton épée légendaire.",
            },
            {
                nom: "Journée des Débats Intérieurs du Chevalier Brisé",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un chevalier brisé. Tu jongles entre la loyauté envers ta famille et la recherche de ta propre rédemption, cherchant à trouver l'équilibre entre l'honneur et le devoir.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Chevaliers Repentis",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Chevaliers Repentis pour toi. Tu célèbres la grandeur et la rédemption, symbolisant ta quête quotidienne de renouveau et d'honneur au sein des chevaliers de Westeros.",
            },
            {
                nom: "Journée des Randonnées Tactiques sur les Sentiers de la Réparation",
                description:
                    "Chaque journée apporte des randonnées tactiques sur les sentiers de la réparation, explorant les chemins difficiles de la rédemption. Ton esprit stratégique guide chacun de tes pas sur le chemin de la réconciliation avec ton propre code d'honneur.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugés",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugés. Tu fais face aux défis de l'opprobre et du jugement, montrant avec détermination que l'on peut transcender les préjugés et se forger une nouvelle voie malgré les critiques.",
            },
            {
                nom: "Journée de la Quête de l'Épée Forgée dans le Feu de la Rédemption",
                description:
                    "Chaque jour, c'est une Journée de la Quête de l'Épée Forgée dans le Feu de la Rédemption pour toi. Tu cherches à forger une nouvelle identité, utilisant le feu de la rédemption pour purifier ton âme et te libérer des chaînes du passé.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Eaux de la Réconciliation",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Eaux de la Réconciliation. Tu dispenses des conseils sur la manière de surmonter les obstacles de la rédemption, guidant ceux qui cherchent à réparer leurs erreurs avec honneur et bravoure.",
            },
            {
                nom: "Journée de la Parade des Chevaliers d'Or dans les Cours d'Honneur",
                description:
                    "Les natifs de ce signe participent à des parades des chevaliers d'or dans les cours d'honneur, symbolisant la bravoure et la quête de la rédemption. Ta présence majestueuse et ta volonté de changer inspirent ceux qui aspirent à suivre tes pas.",
            },
            {
                nom: "Journée des Danses Élégantes avec les Dames de Westeros",
                description:
                    "Chaque journée offre des danses élégantes avec les dames de Westeros, maîtrisant l'art de la courtoisie et de la délicatesse. Ta grâce et ton charme te permettent de tisser des liens sincères avec ceux qui croisent ton chemin.",
            },
            {
                nom: "Journée des Épopées Poétiques du Chevalier Repenti",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du chevalier repenti, créant des chants épiques pour célébrer la transformation personnelle. Chacune de tes actions devient une strophe dans le poème de ta quête de rédemption.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Bravoure Intérieure",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la bravoure intérieure. Tu cherches à trouver la force en toi-même, transcendant les faiblesses passées pour devenir le chevalier héroïque que tu as toujours aspiré à être.",
            },
            {
                nom: "Journée des Combats Épiques avec les Épées de la Rédemption",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec les Épées de la Rédemption. Tu manies des armes forgées dans le feu de la rédemption, utilisant ton courage et ta détermination pour triompher des épreuves et des doutes qui jalonnent ton chemin.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Voies de la Réconciliation",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les voies de la réconciliation, explorant les chemins complexes de la paix intérieure. Ta quête de rédemption guide tes réflexions et te conduit vers une compréhension plus profonde de toi-même.",
            },
            {
                nom: "Journée de la Quête du Sens de la Rédemption Personnelle",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la rédemption personnelle, où chaque acte héroïque et honorable contribue à la purification de ton âme. Ta détermination à être un meilleur homme inspire ceux qui cherchent également la rédemption.",
            },
            {
                nom: "Journée des Conseils Sages des Chevaliers de la Rédemption",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Chevaliers de la Rédemption. Tu dispensas des conseils inspirés des chevaliers qui ont réussi à se racheter, utilisant la sagesse acquise pour guider ceux qui aspirent à suivre le chemin de la rédemption.",
            },
            {
                nom: "Journée de la Danse des Épées d'Or avec les Nuances de Bronze",
                description:
                    "Les natifs de ce signe dansent avec les épées d'or à travers les nuances de bronze, symbolisant la force et la noblesse des chevaliers de Westeros. Ta présence noble et ton engagement envers l'honneur font de chaque danse une démonstration de ta quête continue de rédemption.",
            },
            {
                nom: "Journée de la Négociation Diplomatique avec les Maisons Honorables",
                description:
                    "En cette Journée de la Négociation Diplomatique avec les Maisons Honorables, tu excelles dans l'art délicat de forger des alliances basées sur l'honneur et la loyauté. Ta capacité à négocier avec intégrité assure la stabilité et la paix du royaume.",
            },
            {
                nom: "Journée des Éclats de Rire Bienveillants dans les Salles d'Honneur",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Bienveillants dans les Salles d'Honneur. Ton humour chaleureux et compatissant ajoute une touche de légèreté aux moments sérieux, rappelant à tous la noblesse et l'honneur au cœur de la chevalerie.",
            },
        ],
    },
    {
        name: "Bran Stark",
        astrology: ["Mystique", "Intuitif(ve)", "Rêveur(se)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle des Visions Mystiques",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle des Visions Mystiques. Tu explores constamment les mystères du passé, du présent et du futur, utilisant tes dons uniques pour percer les secrets qui échappent au regard commun.",
            },
            {
                nom: "Journée de Conversations Silencieuses avec les Corbeaux Messagers",
                description:
                    "Chaque jour, c'est une Journée de Conversations Silencieuses avec les Corbeaux Messagers pour toi. Tu te connectes avec les royaumes au-delà du visible, écoutant les murmures du vent et les messages codés des corbeaux, guidé par une sagesse au-delà de ton temps.",
            },
            {
                nom: "Journée des Débats Intérieurs du Navigateur Temporel",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un navigateur temporel. Tu jongles entre les choix du passé, du présent et du futur, cherchant à comprendre ton rôle dans la trame complexe du temps.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Gardiens de la Vérité Cachée",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Gardiens de la Vérité Cachée pour toi. Tu célèbres la grandeur et la sagesse, symbolisant ta quête quotidienne pour révéler les vérités enfouies et protéger les secrets du monde.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Méandres du Temps",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les méandres du temps, explorant les ramifications de chaque décision passée et future. Ton esprit stratégique guide chacun de tes pas sur le chemin de la destinée.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Perçants",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Perçants. Tu fais face aux défis d'une perception aiguë et parfois déconcertante, montrant avec calme que la sagesse transcende souvent les apparences.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Ancienne des Trois Yeux",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Ancienne des Trois Yeux pour toi. Tu t'immerges dans la sagesse ancienne, cherchant à comprendre les mystères qui échappent à la compréhension normale, guidé par une vision au-delà du commun.",
            },
            {
                nom: "Journée des Conseils pour Naviguer à Travers les Courants Temporels",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer à Travers les Courants Temporels. Tu dispenses des conseils sur la manière de naviguer dans les méandres du temps, guidant ceux qui cherchent à comprendre les échos du passé et les murmures du futur.",
            },
            {
                nom: "Journée de la Parade des Gardiens des Étoiles Filantes",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens des étoiles filantes, symbolisant la connexion entre le cosmos et la terre. Ta présence majestueuse et ta compréhension des mystères célestes font de chaque apparition un spectacle céleste.",
            },
            {
                nom: "Journée des Danses Silencieuses avec les Esprits de la Nature",
                description:
                    "Chaque journée offre des danses silencieuses avec les esprits de la nature, maîtrisant l'art de la communion avec le monde qui t'entoure. Ta grâce et ton harmonie avec les éléments font de chaque danse un acte de célébration de la vie.",
            },
            {
                nom: "Journée des Épopées Poétiques du Visionnaire du Temps",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du visionnaire du temps, créant des chants épiques pour célébrer la compréhension des mystères temporels. Chacune de tes visions devient une strophe dans le poème de ton voyage spirituel.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens du Destin Éternel",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens du destin éternel. Tu cherches à comprendre ta place dans le vaste tissu du temps, explorant les méandres du destin avec une sagesse qui dépasse les limites humaines.",
            },
            {
                nom: "Journée des Combats Épiques avec les Épées de la Clairvoyance",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec les Épées de la Clairvoyance. Tu manies des armes forgées dans la clairvoyance, utilisant ta vision du temps pour anticiper les mouvements futurs et guider ceux qui suivent ton exemple.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Horizons Infinis",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les horizons infinis, explorant les possibilités infinies du temps. Ta contemplation te connecte aux flux temporels, révélant des vérités qui échappent à la perception normale.",
            },
            {
                nom: "Journée de la Quête du Sens de l'Existence Intemporelle",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de l'existence intemporelle, où le temps n'est qu'un fil dans le tissu de ton être. Ta recherche de la vérité transcende les limitations temporelles, te guidant vers une compréhension plus profonde de l'univers.",
            },
            {
                nom: "Journée des Conseils Sages des Gardiens du Passé et du Futur",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Gardiens du Passé et du Futur. Tu dispensas des conseils inspirés des gardiens qui comprennent les mystères temporels, utilisant la sagesse ancienne pour guider ceux qui cherchent à naviguer dans les courants du temps.",
            },
            {
                nom: "Journée de la Danse des Étoiles Filantes avec les Nuances de Vert",
                description:
                    "Les natifs de ce signe dansent avec les étoiles filantes à travers les nuances de vert, symbolisant la connexion entre la terre et le cosmos. Ta présence mystique et ton lien avec les étoiles font de chaque danse une célébration de l'harmonie cosmique.",
            },
            {
                nom: "Journée de la Négociation Spirituelle avec les Esprits Anciens",
                description:
                    "En cette Journée de la Négociation Spirituelle avec les Esprits Anciens, tu excelles dans l'art délicat de la communion avec les forces mystiques. Ta capacité à négocier avec les esprits assure l'équilibre entre le monde visible et invisible, guidant ton chemin dans le destin.",
            },
            {
                nom: "Journée des Éclats de Rire Bienveillants avec les Arbres Anciens",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Bienveillants avec les Arbres Anciens. Ton rire résonne à travers les forêts anciennes, symbolisant la joie et l'harmonie que tu apportes au monde en tant que gardien du temps.",
            },
        ],
    },
    {
        name: "Samwell Tarly",
        astrology: ["Débrouillard", "Emotif(ve)", "Intelectuel(le)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle du Savoir Bienveillant",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle du Savoir Bienveillant. Tu cherches constamment à élargir tes connaissances, utilisant ton amour pour l'apprentissage pour éclairer le monde qui t'entoure de manière bienveillante.",
            },
            {
                nom: "Journée de Conversations Empathiques avec les Livres Anciens",
                description:
                    "Chaque jour, c'est une Journée de Conversations Empathiques avec les Livres Anciens pour toi. Tu te connectes avec la sagesse des siècles passés, écoutant les histoires et les enseignements des pages jaunies, guidé par un cœur empli d'empathie.",
            },
            {
                nom: "Journée des Débats Intérieurs du Sage au Cœur Tendre",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un sage au cœur tendre. Tu jongles entre la force de la connaissance et la douceur du cœur, cherchant à trouver l'équilibre entre la sagesse et la compassion.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Connaissance",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Connaissance pour toi. Tu célèbres la grandeur de la sagesse, symbolisant ta quête quotidienne pour protéger et partager le savoir qui peut éclairer les ténèbres.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Bibliothèques du Savoir",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les bibliothèques du savoir, explorant les rayons de la connaissance avec une stratégie méticuleuse. Ton esprit analytique guide chacun de tes pas sur le chemin de la compréhension profonde.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Désobligeants",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Désobligeants. Tu fais face aux défis du jugement et de la désapprobation, montrant avec courage que la bienveillance et la connaissance sont des atouts plus précieux que la critique.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Bienfaisante des Livres",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Bienfaisante des Livres pour toi. Tu t'imprègnes de la sagesse bienveillante des écrits, cherchant à comprendre les secrets du monde avec une bienveillance qui illumine même les pages les plus sombres.",
            },
            {
                nom: "Journée des Conseils pour Naviguer avec la Boussole du Cœur",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer avec la Boussole du Cœur. Tu dispenses des conseils sur la manière de naviguer à travers les océans de la vie avec compassion, guidant ceux qui cherchent à trouver la direction dans le tumulte du monde.",
            },
            {
                nom: "Journée de la Parade des Gardiens des Connaissances Anciennes",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens des connaissances anciennes, symbolisant la préservation et la transmission du savoir. Ta présence bienveillante et ta dévotion envers la sagesse font de chaque apparition un acte de célébration de l'apprentissage.",
            },
            {
                nom: "Journée des Danses Bienveillantes avec les Âmes Curieuses",
                description:
                    "Chaque journée offre des danses bienveillantes avec les âmes curieuses, maîtrisant l'art de partager la connaissance avec douceur. Ta patience et ta compréhension font de chaque danse un moment d'échange et d'enrichissement mutuel.",
            },
            {
                nom: "Journée des Épopées Poétiques du Chercheur de Vérité Bienveillant",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du chercheur de vérité bienveillant, créant des chants épiques pour célébrer la quête de la sagesse bienveillante. Chacune de tes découvertes devient une strophe dans le poème de ton voyage intellectuel.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Empathie Lumineuse",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'empathie lumineuse. Tu cherches à comprendre et à apaiser les souffrances du monde, utilisant ton cœur compatissant comme une lumière bienveillante dans l'obscurité.",
            },
            {
                nom: "Journée des Combats Épiques avec la Plume de la Connaissance",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Plume de la Connaissance. Tu manies une plume forgée dans l'encre de la sagesse, utilisant tes mots pour combattre l'ignorance et répandre la lumière de la vérité dans chaque recoin du monde.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Rivières du Savoir",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les rivières du savoir, explorant les flux inépuisables de la connaissance. Ta contemplation te connecte aux sources de la sagesse, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Bonté Éclairée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la bonté éclairée, où chaque acte bienveillant contribue à illuminer le monde. Ta détermination à répandre la bonté inspire ceux qui cherchent également à rendre le monde meilleur.",
            },
            {
                nom: "Journée des Conseils Sages des Gardiens du Savoir Bienveillant",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Gardiens du Savoir Bienveillant. Tu dispensas des conseils inspirés des gardiens qui comprennent la valeur de la sagesse bienveillante, utilisant la compassion pour guider ceux qui aspirent à embrasser la lumière de la connaissance.",
            },
            {
                nom: "Journée de la Danse des Lumières avec les Nuances de Bleu",
                description:
                    "Les natifs de ce signe dansent avec les lumières à travers les nuances de bleu, symbolisant la sérénité et la vérité de la sagesse bienveillante. Ta présence rayonnante et ta quête constante de la vérité font de chaque danse une célébration de l'éclat du savoir.",
            },
            {
                nom: "Journée de la Négociation Bienveillante avec les Âmes Curieuses",
                description:
                    "En cette Journée de la Négociation Bienveillante avec les Âmes Curieuses, tu excelles dans l'art délicat de partager la connaissance avec douceur. Ta capacité à inspirer et à éduquer assure l'essor de la bienveillance et de la sagesse dans le monde.",
            },
            {
                nom: "Journée des Éclats de Rire Bienveillants avec les Papillons du Savoir",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Bienveillants avec les Papillons du Savoir. Ton rire léger et bienveillant ajoute une touche de joie aux moments sérieux, rappelant à tous que la connaissance peut être source de bonheur et de compréhension.",
            },
        ],
    },
    {
        name: "Arya Stark",
        astrology: ["Aventureux(se)", "Indépendant(e)", "Déterminé(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de l'Identité Indomptable",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de l'Identité Indomptable. Tu explores constamment les aspects changeants de ton être, utilisant ta détermination pour forger une identité aussi forte et résiliente que l'acier de Needle.",
            },
            {
                nom: "Journée de Conversations Silencieuses avec les Ombres de l'Ombre",
                description:
                    "Chaque jour, c'est une Journée de Conversations Silencieuses avec les Ombres de l'Ombre pour toi. Tu te connectes avec les mystères de l'infiltration et de l'observation, écoutant les murmures des ombres et des secrets, guidé par une détermination inébranlable.",
            },
            {
                nom: "Journée des Débats Intérieurs de l'Artisan de la Disparition",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un artisan de la disparition. Tu jongles entre les choix difficiles de la vie d'une personne sans visage, cherchant à comprendre le prix de la liberté et de la vengeance.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Chasseurs de Noms",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Chasseurs de Noms pour toi. Tu célèbres la grandeur de la quête de justice personnelle, symbolisant ta détermination quotidienne pour marquer ceux qui ont marqué les tiens.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Sentiers de l'Ombre",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les sentiers de l'ombre, explorant les chemins dissimulés de l'infiltration et de l'évasion. Ton esprit stratégique guide chacun de tes pas sur le chemin de la liberté.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Inquisiteurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Inquisiteurs. Tu fais face aux défis des regards scrutateurs, montrant avec ferveur que ton indépendance et ta détermination éclipsent toute tentative de te comprendre pleinement.",
            },
            {
                nom: "Journée de la Quête de la Sagesse des Visages Changeants",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse des Visages Changeants pour toi. Tu t'immerges dans la sagesse des visages changeants, cherchant à comprendre la véritable nature de l'identité à travers les masques que tu portes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Courants de l'Ombre",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Courants de l'Ombre. Tu dispenses des conseils sur la manière de se fondre dans l'obscurité, guidant ceux qui cherchent à comprendre les secrets cachés dans les recoins les plus sombres du monde.",
            },
            {
                nom: "Journée de la Parade des Chasseurs d'Aventures Interdites",
                description:
                    "Les natifs de ce signe participent à des parades des chasseurs d'aventures interdites, symbolisant la quête audacieuse de justice et de liberté. Ta présence déterminée et ta capacité à défier les conventions font de chaque apparition un acte de célébration de l'indépendance.",
            },
            {
                nom: "Journée des Danses Silencieuses avec les Âmes Rebelle",
                description:
                    "Chaque journée offre des danses silencieuses avec les âmes rebelles, maîtrisant l'art de l'expression sans mots. Ta grâce et ta détermination font de chaque danse une déclaration de liberté et d'individualité.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Vagabonde Intrépide",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de la vagabonde intrépide, créant des chants épiques pour célébrer la quête de la vérité personnelle. Chacun de tes pas devient une strophe dans le poème de ton voyage solitaire.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Liberté Indomptable",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la liberté indomptable. Tu cherches à comprendre et à défier les limites imposées, utilisant ta détermination pour briser les chaînes qui entravent l'esprit.",
            },
            {
                nom: "Journée des Combats Épiques avec l'Aiguille de la Vengeance",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec l'Aiguille de la Vengeance. Tu manies une lame forgée dans le feu de la colère justifiée, utilisant ta détermination pour traquer ceux qui ont causé du tort à tes proches et à toi-même.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Eaux Troubles de l'Identité",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les eaux troubles de l'identité, explorant les reflets changeants de qui ils sont. Ta contemplation te connecte aux flux de l'âme, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Vengeance Juste",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la vengeance juste, où chaque acte de justice est un pas vers l'équilibre. Ta détermination à rétablir l'équité inspire ceux qui cherchent également à combattre pour la vérité.",
            },
            {
                nom: "Journée des Conseils Sages des Chasseurs d'Injustices",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Chasseurs d'Injustices. Tu dispensas des conseils inspirés des chasseurs qui comprennent les subtilités de la justice personnelle, utilisant ta sagesse pour guider ceux qui cherchent à défier les injustices du monde.",
            },
            {
                nom: "Journée de la Danse des Lames avec les Nuances de Rouge",
                description:
                    "Les natifs de ce signe dansent avec les lames à travers les nuances de rouge, symbolisant la passion et la détermination dans la quête de la vérité. Ta présence féroce et ta connexion avec l'acier font de chaque danse une célébration de la force intérieure.",
            },
            {
                nom: "Journée de la Négociation Intrépide avec les Ombres de la Vérité",
                description:
                    "En cette Journée de la Négociation Intrépide avec les Ombres de la Vérité, tu excelles dans l'art délicat de démêler les mystères cachés. Ta capacité à négocier avec les ombres assure la révélation de la vérité, guidant ton chemin dans la quête de justice.",
            },
            {
                nom: "Journée des Éclats de Rire Indomptables avec les Loups Errants",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Indomptables avec les Loups Errants. Ton rire libre et indomptable résonne à travers les contrées sauvages, symbolisant la liberté et la détermination que tu apportes au monde en tant que loup solitaire.",
            },
        ],
    },
    {
        name: "Stannis Baratheon",
        astrology: ["Dictateur(trice)", "Autoritaire", "Ambitieux(se)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle du Devoir Inflexible",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle du Devoir Inflexible. Tu poursuis constamment le chemin de la loyauté et de l'obligation, utilisant ta détermination pour honorer les principes qui guident tes actions.",
            },
            {
                nom: "Journée de Conversations Solennelles avec les Ombres du Destin",
                description:
                    "Chaque jour, c'est une Journée de Conversations Solennelles avec les Ombres du Destin pour toi. Tu te connectes avec les mystères du futur, écoutant les murmures du destin, guidé par une détermination inébranlable à forger ton propre chemin.",
            },
            {
                nom: "Journée des Débats Intérieurs du Gardien de la Justice Implacable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un gardien de la justice implacable. Tu jongles entre les choix difficiles de l'ordre et de la rigueur, cherchant à instaurer la justice même lorsque les sacrifices sont inévitables.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Droiture",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Droiture pour toi. Tu célèbres la grandeur de la droiture, symbolisant ta quête quotidienne pour maintenir l'ordre et la justice dans un monde souvent en proie au chaos.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Sentiers de la Discipline",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les sentiers de la discipline, explorant les chemins rigoureux de l'entraînement et de l'ordre. Ton esprit stratégique guide chacun de tes pas sur le chemin de la victoire.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Indisciplinés",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Indisciplinés. Tu fais face aux défis des regards critiques, montrant avec fermeté que la discipline et la détermination sont les piliers de la véritable force.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Inébranlable du Devoir",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Inébranlable du Devoir pour toi. Tu t'imprègnes de la sagesse inébranlable du devoir, cherchant à comprendre les vérités éternelles qui guident tes actions et tes choix.",
            },
            {
                nom: "Journée des Conseils pour Naviguer à Travers les Tempêtes de la Vie",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer à Travers les Tempêtes de la Vie. Tu dispenses des conseils sur la manière de rester fort face à l'adversité, guidant ceux qui cherchent à maintenir le cap malgré les tumultes du destin.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Droiture Absolue",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la droiture absolue, symbolisant la défense inflexible de la justice. Ta présence majestueuse et ta dévotion envers la droiture font de chaque apparition un acte de célébration de l'ordre juste.",
            },
            {
                nom: "Journée des Danses Solennelles avec les Esprits de la Loi",
                description:
                    "Chaque journée offre des danses solennelles avec les esprits de la loi, maîtrisant l'art de l'harmonie entre l'ordre et la justice. Ta grâce et ta rigueur font de chaque danse une déclaration de la nécessité d'une conduite irréprochable.",
            },
            {
                nom: "Journée des Épopées Poétiques du Défenseur Intransigeant",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du défenseur intransigeant, créant des chants épiques pour célébrer la quête éternelle de l'ordre. Chacun de tes actes devient une strophe dans le poème de ton engagement envers la justice.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Honneur Inaltérable",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'honneur inaltérable. Tu cherches à comprendre et à défendre les valeurs qui définissent ton caractère, utilisant ta détermination pour protéger l'intégrité à tout prix.",
            },
            {
                nom: "Journée des Combats Épiques avec la Lance de la Justice",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Lance de la Justice. Tu manies une lance forgée dans la forge de la droiture, utilisant ta détermination pour combattre l'injustice et défendre les idéaux qui te sont chers.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Rochers Inébranlables de la Justice",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les rochers inébranlables de la justice, explorant les fondations solides sur lesquelles reposent tes principes. Ta contemplation te connecte aux piliers de la droiture, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Justice Implacable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la justice implacable, où chaque acte est guidé par la nécessité de maintenir l'ordre. Ta détermination à poursuivre la voie juste inspire ceux qui cherchent également à défendre la vérité.",
            },
            {
                nom: "Journée des Conseils Sages des Gardiens de la Loi Intransigeante",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Gardiens de la Loi Intransigeante. Tu dispensas des conseils inspirés des gardiens qui comprennent la valeur de la loi intransigeante, utilisant ta sagesse pour guider ceux qui aspirent à suivre un chemin de droiture.",
            },
            {
                nom: "Journée de la Danse des Épées avec les Nuances d'Acier",
                description:
                    "Les natifs de ce signe dansent avec les épées à travers les nuances d'acier, symbolisant la force et la précision dans la quête de la justice. Ta présence imposante et ta maîtrise de l'épée font de chaque danse une célébration de la puissance justicière.",
            },
            {
                nom: "Journée de la Négociation Implacable avec les Esprits de l'Équité",
                description:
                    "En cette Journée de la Négociation Implacable avec les Esprits de l'Équité, tu excelles dans l'art délicat de trouver le juste équilibre. Ta capacité à négocier avec les esprits assure l'harmonie entre la rigueur et la justice, guidant ton chemin dans la quête d'une société juste.",
            },
            {
                nom: "Journée des Éclats de Rire Résolus avec les Lions de la Loyauté",
                description:
                    "Pour toi, chaque jour est une Journée des Éclats de Rire Résolus avec les Lions de la Loyauté. Ton rire résolu résonne à travers les salles du pouvoir, symbolisant la fermeté et l'intégrité que tu apportes au monde en tant que gardien inflexible de l'ordre.",
            },
        ],
    },
    {
        name: "Margaery Tyrell",
        astrology: ["Charismatique, Diplomate, Ambitieux(se)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de l'Élégance Envoûtante",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de l'Élégance Envoûtante. Tu cultives constamment une aura d'élégance et de charme, utilisant ta grâce naturelle pour captiver ceux qui ont le privilège de partager ton espace.",
            },
            {
                nom: "Journée de Conversations Enchantées avec les Pétales de la Politique",
                description:
                    "Chaque jour, c'est une Journée de Conversations Enchantées avec les Pétales de la Politique pour toi. Tu te connectes avec les subtilités de la manipulation et de l'intrigue, écoutant les murmures des alliances et des rivalités, guidé par une finesse politique inégalée.",
            },
            {
                nom: "Journée des Débats Intérieurs de la Stratège Charmante",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une stratège charmante. Tu jongles entre les choix délicats de la diplomatie et de la séduction, cherchant à atteindre tes objectifs avec grâce et intelligence.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Émissaires de la Beauté",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Émissaires de la Beauté pour toi. Tu célèbres la grandeur de la séduction, symbolisant ta quête quotidienne pour répandre la beauté et le charme dans un monde souvent dépourvu de grâce.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Jardins de l'Influence",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les jardins de l'influence, explorant les sentiers délicats de la manipulation. Ton esprit stratégique guide chacun de tes pas sur le chemin de l'intrigue politique.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Envieux",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Envieux. Tu fais face aux défis des regards jaloux, montrant avec élégance que ta confiance en toi et ta beauté intérieure éclipsent toute tentative de te diminuer.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Élégante de l'Influence",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Élégante de l'Influence pour toi. Tu t'imprègnes de la sagesse élégante de l'influence, cherchant à comprendre les secrets du pouvoir et de la manipulation avec une finesse qui transcende la superficialité.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir. Tu dispenses des conseils sur la manière de naviguer avec grâce à travers les intrigues politiques, guidant ceux qui cherchent à maîtriser l'art délicat de la manipulation.",
            },
            {
                nom: "Journée de la Parade des Gardiennes de la Grâce Subtile",
                description:
                    "Les natifs de ce signe participent à des parades des gardiennes de la grâce subtile, symbolisant la beauté intérieure qui transcende la superficialité. Ta présence majestueuse et ton charme délicat font de chaque apparition une célébration de la véritable élégance.",
            },
            {
                nom: "Journée des Danses Envoûtantes avec les Roses de la Cour",
                description:
                    "Chaque journée offre des danses envoûtantes avec les roses de la cour, maîtrisant l'art de la séduction. Ta grâce et ton charme captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Diplomate Élégante",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de la diplomate élégante, créant des chants épiques pour célébrer la quête éternelle de l'influence. Chacun de tes actes devient une strophe dans le poème de ta présence raffinée dans les hautes sphères de la société.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Élégance Intérieure",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'élégance intérieure. Tu cherches à comprendre et à cultiver la beauté qui émane de ton âme, utilisant ta détermination pour révéler la grâce qui réside en toi.",
            },
            {
                nom: "Journée des Combats Épiques avec le Sourire Irrésistible",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec le Sourire Irrésistible. Tu manies un sourire forgé dans la forge de la séduction, utilisant ta détermination pour conquérir les cœurs et établir des alliances avec une grâce inégalée.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Pétales de la Sagesse",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les pétales de la sagesse, explorant les subtilités de l'influence. Ta contemplation te connecte aux secrets du pouvoir, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Subtilité Charmante",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la subtilité charmante, où chaque geste est une déclaration de grâce. Ta détermination à incarner la subtilité inspire ceux qui cherchent également à maîtriser l'art délicat de la séduction.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de l'Art de la Cour",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de l'Art de la Cour. Tu dispensas des conseils inspirés des maîtres de la cour qui comprennent la valeur de l'élégance subtile, utilisant ta sagesse pour guider ceux qui aspirent à briller dans les cercles sociaux.",
            },
            {
                nom: "Journée de la Parade des Protectrices de la Beauté Intérieure",
                description:
                    "Les natifs de ce signe participent à des parades des protectrices de la beauté intérieure, symbolisant la conviction que la véritable élégance vient de l'âme. Ta présence raffinée et ton engagement envers la beauté intérieure font de chaque apparition une célébration de la grâce véritable.",
            },
            {
                nom: "Journée des Danses Charmantes avec les Cavaliers Courtois",
                description:
                    "Chaque journée offre des danses charmantes avec les cavaliers courtois, maîtrisant l'art de la séduction mutuelle. Ta grâce et ton charme captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Diplomate Élégante",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de la diplomate élégante, créant des chants épiques pour célébrer la quête éternelle de l'influence. Chacun de tes actes devient une strophe dans le poème de ta présence raffinée dans les hautes sphères de la société.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Élégance Intérieure",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'élégance intérieure. Tu cherches à comprendre et à cultiver la beauté qui émane de ton âme, utilisant ta détermination pour révéler la grâce qui réside en toi.",
            },
            {
                nom: "Journée des Combats Épiques avec le Sourire Irrésistible",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec le Sourire Irrésistible. Tu manies un sourire forgé dans la forge de la séduction, utilisant ta détermination pour conquérir les cœurs et établir des alliances avec une grâce inégalée.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Pétales de la Sagesse",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les pétales de la sagesse, explorant les subtilités de l'influence. Ta contemplation te connecte aux secrets du pouvoir, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Subtilité Charmante",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la subtilité charmante, où chaque geste est une déclaration de grâce. Ta détermination à incarner la subtilité inspire ceux qui cherchent également à maîtriser l'art délicat de la séduction.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de l'Art de la Cour",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de l'Art de la Cour. Tu dispensas des conseils inspirés des maîtres de la cour qui comprennent la valeur de l'élégance subtile, utilisant ta sagesse pour guider ceux qui aspirent à briller dans les cercles sociaux.",
            },
            {
                nom: "Journée de la Parade des Protectrices de la Beauté Intérieure",
                description:
                    "Les natifs de ce signe participent à des parades des protectrices de la beauté intérieure, symbolisant la conviction que la véritable élégance vient de l'âme. Ta présence raffinée et ton engagement envers la beauté intérieure font de chaque apparition une célébration de la grâce véritable.",
            },
            {
                nom: "Journée des Danses Charmantes avec les Cavaliers Courtois",
                description:
                    "Chaque journée offre des danses charmantes avec les cavaliers courtois, maîtrisant l'art de la séduction mutuelle. Ta grâce et ton charme captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Olenna Tyrell",
        astrology: ["Pragmatique", "Perspicace", "Intelligent(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Sagesse Cynique",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Sagesse Cynique. Tu cultives constamment une intelligence piquante et une perspicacité acérée, utilisant ton esprit vif pour percer les illusions et découvrir la vérité derrière les apparences.",
            },
            {
                nom: "Journée de Conversations Perspicaces avec les Roses de la Ruse",
                description:
                    "Chaque jour, c'est une Journée de Conversations Perspicaces avec les Roses de la Ruse pour toi. Tu te connectes avec les subtilités de la manipulation et de l'intrigue, écoutant les murmures des alliances et des rivalités, guidé par une finesse politique inégalée.",
            },
            {
                nom: "Journée des Débats Intérieurs de la Stratège Cynique",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une stratège cynique. Tu jongles entre les choix délicats de la diplomatie et de la ruse, cherchant à atteindre tes objectifs avec un esprit incisif et une perspicacité hors pair.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Émissaires de la Ruse",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Émissaires de la Ruse pour toi. Tu célèbres la grandeur de la ruse, symbolisant ta quête quotidienne pour naviguer habilement à travers les intrications politiques d'un monde souvent dépourvu d'honnêteté.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Jardins de la Manipulation",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les jardins de la manipulation, explorant les sentiers délicats de la ruse. Ton esprit stratégique guide chacun de tes pas sur le chemin de l'intrigue politique.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Soupçonneux",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Soupçonneux. Tu fais face aux défis des regards méfiants, montrant avec finesse que ton intelligence et ta perspicacité éclipsent toute tentative de te tromper.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Rusée de la Manipulation",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Rusée de la Manipulation pour toi. Tu t'imprègnes de la sagesse rusée de la manipulation, cherchant à comprendre les secrets du pouvoir et de la tromperie avec une finesse qui transcende la superficialité.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir. Tu dispenses des conseils sur la manière de naviguer avec astuce à travers les intrigues politiques, guidant ceux qui cherchent à maîtriser l'art délicat de la manipulation.",
            },
            {
                nom: "Journée de la Parade des Gardiennes de la Ruse Subtile",
                description:
                    "Les natifs de ce signe participent à des parades des gardiennes de la ruse subtile, symbolisant l'habileté à manœuvrer avec intelligence. Ta présence majestueuse et ton esprit perspicace font de chaque apparition une célébration de la véritable intelligence politique.",
            },
            {
                nom: "Journée des Danses Rusées avec les Cavaliers Diplomates",
                description:
                    "Chaque journée offre des danses rusées avec les cavaliers diplomates, maîtrisant l'art de la manipulation mutuelle. Ton intelligence et ta perspicacité captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de la Maîtresse de la Diplomatie",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de la maîtresse de la diplomatie, créant des chants épiques pour célébrer la quête éternelle de l'influence. Chacun de tes actes devient une strophe dans le poème de ta présence raffinée dans les hautes sphères de la société.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Intelligence Cynique",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'intelligence cynique. Tu cherches à comprendre et à cultiver la finesse qui émane de ton esprit, utilisant ta détermination pour révéler la vérité qui se cache derrière les masques.",
            },
            {
                nom: "Journée des Combats Épiques avec la Stratégie de la Tromperie",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Stratégie de la Tromperie. Tu manies une stratégie forgée dans la forge de la tromperie, utilisant ta détermination pour manipuler les événements et atteindre tes objectifs avec une finesse inégalée.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Ruses de la Sagesse",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les ruses de la sagesse, explorant les subtilités de la manipulation. Ta contemplation te connecte aux arcanes du pouvoir, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Perspicacité Rusée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la perspicacité rusée, où chaque acte est une déclaration d'intelligence. Ta détermination à incarner la ruse inspire ceux qui cherchent également à maîtriser l'art délicat de la manipulation.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Diplomatie Rusée",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Diplomatie Rusée. Tu dispensas des conseils inspirés des maîtres de la diplomatie qui comprennent la valeur de l'intelligence cynique, utilisant ta sagesse pour guider ceux qui aspirent à exceller dans les jeux du pouvoir.",
            },
            {
                nom: "Journée de la Parade des Protectrices de la Subtilité Intellectuelle",
                description:
                    "Les natifs de ce signe participent à des parades des protectrices de la subtilité intellectuelle, symbolisant la conviction que la véritable sagesse vient de l'intelligence. Ta présence raffinée et ton engagement envers l'intelligence font de chaque apparition une célébration de la finesse véritable.",
            },
            {
                nom: "Journée des Danses Rusées avec les Cavaliers Diplomates",
                description:
                    "Chaque journée offre des danses rusées avec les cavaliers diplomates, maîtrisant l'art de la manipulation mutuelle. Ton intelligence et ta perspicacité captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Littlefinger",
        astrology: ["Manipulateur(trice)", "Ambitieux(se)", "Intelligent(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de l'Ascension Machiavélique",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de l'Ascension Machiavélique. Tu cultives constamment une ambition sans bornes et un esprit calculateur, utilisant chaque opportunité pour monter en puissance dans les coulisses de l'intrigue politique.",
            },
            {
                nom: "Journée de Conversations Intrigantes avec les Émissaires de la Fourberie",
                description:
                    "Chaque jour, c'est une Journée de Conversations Intrigantes avec les Émissaires de la Fourberie pour toi. Tu te connectes avec les subtilités de la manipulation et de l'intrigue, écoutant les murmures des alliances et des rivalités, guidé par une finesse politique inégalée.",
            },
            {
                nom: "Journée des Débats Intérieurs du Stratège Machiavélien",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un stratège machiavélien. Tu jongles entre les choix délicats de la diplomatie et de la ruse, cherchant à atteindre tes objectifs avec un esprit rusé et une intelligence acérée.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Émissaires de l'Intrigue",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Émissaires de l'Intrigue pour toi. Tu célèbres la grandeur de l'intrigue, symbolisant ta quête quotidienne pour manipuler habilement les fils du pouvoir dans un monde souvent dépourvu de loyauté.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Jardins de la Manipulation",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les jardins de la manipulation, explorant les sentiers délicats de la ruse. Ton esprit stratégique guide chacun de tes pas sur le chemin de l'intrigue politique.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Suspicieux",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Suspicieux. Tu fais face aux défis des regards méfiants, montrant avec habileté que ton intelligence et ta ruse éclipsent toute tentative de te tromper.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Sournoise de la Manipulation",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Sournoise de la Manipulation pour toi. Tu t'imprègnes de la sagesse sournoise de la manipulation, cherchant à comprendre les secrets du pouvoir et de la tromperie avec une finesse qui transcende la superficialité.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Eaux Troubles du Pouvoir. Tu dispenses des conseils sur la manière de naviguer avec ruse à travers les intrigues politiques, guidant ceux qui cherchent à maîtriser l'art délicat de la manipulation.",
            },
            {
                nom: "Journée de la Parade des Maîtres de l'Art de la Ruse",
                description:
                    "Les natifs de ce signe participent à des parades des maîtres de l'art de la ruse, symbolisant l'habileté à manœuvrer avec intelligence. Ta présence majestueuse et ton esprit calculateur font de chaque apparition une célébration de la véritable intelligence politique.",
            },
            {
                nom: "Journée des Danses Intrigantes avec les Cavaliers Machiavéliens",
                description:
                    "Chaque journée offre des danses intrigantes avec les cavaliers machiavéliens, maîtrisant l'art de la manipulation mutuelle. Ton ambition et ton esprit rusé captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Maître de la Manipulation",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du maître de la manipulation, créant des chants épiques pour célébrer la quête éternelle de l'influence. Chacun de tes actes devient une strophe dans le poème de ta présence raffinée dans les hautes sphères de la société.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de l'Ambition Rusée",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de l'ambition rusée. Tu cherches à comprendre et à cultiver l'ambition qui émane de ton être, utilisant ta détermination pour atteindre les sommets du pouvoir avec une finesse inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Stratégie de la Tromperie",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Stratégie de la Tromperie. Tu manies une stratégie forgée dans la forge de la tromperie, utilisant ta détermination pour manipuler les événements et atteindre tes objectifs avec une finesse inégalée.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Ruses de la Sagesse",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les ruses de la sagesse, explorant les subtilités de la manipulation. Ta contemplation te connecte aux arcanes du pouvoir, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Perspicacité Rusée",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la perspicacité rusée, où chaque acte est une déclaration d'intelligence. Ta détermination à incarner la ruse inspire ceux qui cherchent également à maîtriser l'art délicat de la manipulation.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Diplomatie Rusée",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Diplomatie Rusée. Tu dispensas des conseils inspirés des maîtres de la diplomatie qui comprennent la valeur de l'intelligence cynique, utilisant ta sagesse pour guider ceux qui aspirent à exceller dans les jeux du pouvoir.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de l'Ambition Machiavélique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de l'ambition machiavélique, symbolisant la conviction que la véritable réussite vient de l'ambition. Ta présence raffinée et ton engagement envers l'ambition font de chaque apparition une célébration de la finesse véritable.",
            },
            {
                nom: "Journée des Danses Intrigantes avec les Cavaliers Machiavéliens",
                description:
                    "Chaque journée offre des danses intrigantes avec les cavaliers machiavéliens, maîtrisant l'art de la manipulation mutuelle. Ton ambition et ton esprit rusé captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Sandor Clegane",
        astrology: ["Protecteur(trice)", "Fidèle", "Tête brulée"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Force Implacable",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Force Implacable. Tu cultives constamment une puissance brutale et une détermination sans faille, utilisant ta force pour affronter les défis de la vie avec une résilience inébranlable.",
            },
            {
                nom: "Journée de Conversations Franches avec les Braves Indomptables",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Braves Indomptables pour toi. Tu te connectes avec la sincérité de ceux qui affrontent la vie sans détour, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Guerrier Endurci",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un guerrier endurci. Tu jongles entre les choix délicats de la loyauté et de l'indépendance, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Bravoure",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Bravoure pour toi. Tu célèbres la grandeur de la bravoure, symbolisant ta quête quotidienne pour faire face aux défis avec une force intérieure qui inspire le respect.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Vallées de la Résilience",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les vallées de la résilience, explorant les sentiers escarpés de la vie. Ta force inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta force et ton intégrité éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Forgée dans le Feu du Combat",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Forgée dans le Feu du Combat pour toi. Tu t'imprègnes de la sagesse forgée dans le feu du combat, cherchant à comprendre les leçons de la vie à travers les épreuves et les triomphes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Tempêtes de l'Existence",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Tempêtes de l'Existence. Tu dispenses des conseils sur la manière de naviguer avec courage à travers les défis, guidant ceux qui cherchent à surmonter les tempêtes de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Force Intérieure",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la force intérieure, symbolisant la conviction que la véritable puissance vient de l'âme. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Braves Intrépides",
                description:
                    "Chaque journée offre des danses franches avec les braves intrépides, maîtrisant l'art de la camaraderie authentique. Ta sincérité et ta force captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Guerrier Indomptable",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du guerrier indomptable, créant des chants épiques pour célébrer la quête éternelle de la force intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence puissante dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Honnête",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté honnête. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une force inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Bravoure sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Bravoure sans Retenue. Tu manies une bravoure forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la force inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Force Intérieure",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Force Intérieure. Tu dispensas des conseils inspirés des maîtres de la résilience qui comprennent la valeur de la force intérieure, utilisant ta sagesse pour guider ceux qui aspirent à surmonter les défis avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Bravoure Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la bravoure authentique, symbolisant la conviction que la véritable bravoure vient de l'authenticité. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Braves Intrépides",
                description:
                    "Chaque journée offre des danses franches avec les braves intrépides, maîtrisant l'art de la camaraderie authentique. Ta sincérité et ta force captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Khal Drogo",
        astrology: ["Aventureux(se)", "Fier(e)", "Sauvage"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Puissance Sauvage",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Puissance Sauvage. Tu cultives constamment une force brute et une détermination farouche, utilisant ta puissance pour conquérir les défis de la vie avec une férocité inégalée.",
            },
            {
                nom: "Journée de Conversations Sincères avec les Esprits Fiers",
                description:
                    "Chaque jour, c'est une Journée de Conversations Sincères avec les Esprits Fiers pour toi. Tu te connectes avec l'authenticité de ceux qui marchent fièrement, partageant tes propres vérités avec une honnêteté franche qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Guerrier Indomptable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un guerrier indomptable. Tu jongles entre les choix délicats de la loyauté et de l'indépendance, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Fierté",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Fierté pour toi. Tu célèbres la grandeur de la fierté, symbolisant ta quête quotidienne pour faire face aux défis avec une force intérieure qui inspire le respect.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Terres Sauvages",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les terres sauvages, explorant les sentiers accidentés de la vie. Ta force inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta force et ton intégrité éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Forgée dans le Feu du Combat",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Forgée dans le Feu du Combat pour toi. Tu t'imprègnes de la sagesse forgée dans le feu du combat, cherchant à comprendre les leçons de la vie à travers les épreuves et les triomphes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Tempêtes de l'Existence",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Tempêtes de l'Existence. Tu dispenses des conseils sur la manière de naviguer avec courage à travers les défis, guidant ceux qui cherchent à surmonter les tempêtes de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Force Intérieure",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la force intérieure, symbolisant la conviction que la véritable puissance vient de l'âme. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Braves Intrépides",
                description:
                    "Chaque journée offre des danses franches avec les braves intrépides, maîtrisant l'art de la camaraderie authentique. Ta sincérité et ta force captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Guerrier Indomptable",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du guerrier indomptable, créant des chants épiques pour célébrer la quête éternelle de la force intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence puissante dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Honnête",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté honnête. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une force inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Bravoure sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Bravoure sans Retenue. Tu manies une bravoure forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la force inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Force Intérieure",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Force Intérieure. Tu dispensas des conseils inspirés des maîtres de la résilience qui comprennent la valeur de la force intérieure, utilisant ta sagesse pour guider ceux qui aspirent à surmonter les défis avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Fierté Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la fierté authentique, symbolisant la conviction que la véritable fierté vient de l'authenticité. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Braves Intrépides",
                description:
                    "Chaque journée offre des danses franches avec les braves intrépides, maîtrisant l'art de la camaraderie authentique. Ta sincérité et ta force captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Ygritte",
        astrology: ["Esprit libre", "Indépendant(e)", "Rebel(le)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Liberté Sauvage",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Liberté Sauvage. Tu cultives constamment une indépendance farouche et un esprit libre, utilisant ta liberté pour embrasser les défis de la vie avec une passion inégalée.",
            },
            {
                nom: "Journée de Conversations Franches avec les Esprits Libres",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Esprits Libres pour toi. Tu te connectes avec l'authenticité de ceux qui marchent sans attaches, partageant tes propres vérités avec une honnêteté franche qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs de l'Esprit Indomptable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un esprit indomptable. Tu jongles entre les choix délicats de la loyauté et de la liberté, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Passion",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Passion pour toi. Tu célèbres la grandeur de la passion, symbolisant ta quête quotidienne pour faire face aux défis avec une énergie intérieure qui inspire le respect.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Terres Sauvages",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les terres sauvages, explorant les sentiers accidentés de la vie. Ta liberté inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta passion et ton intégrité éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Nourrie par les Vents Libres",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Nourrie par les Vents Libres pour toi. Tu t'imprègnes de la sagesse nourrie par les vents libres, cherchant à comprendre les leçons de la vie à travers la découverte de nouveaux horizons.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Océans de la Liberté",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Océans de la Liberté. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à embrasser les vagues de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de l'Esprit Libre",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de l'esprit libre, symbolisant la conviction que la véritable puissance vient de l'âme libre. Ta présence vivante et ta détermination font de chaque apparition une célébration de la véritable passion intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Passionnées",
                description:
                    "Chaque journée offre des danses franches avec les âmes passionnées, maîtrisant l'art de la camaraderie authentique. Ta passion et ton esprit libre captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de l'Esprit Indépendant",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de l'esprit indépendant, créant des chants épiques pour célébrer la quête éternelle de la liberté intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence passionnée dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Authentique",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté authentique. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une passion inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Passion sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Passion sans Retenue. Tu manies une passion forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la passion inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Liberté Intérieure",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Liberté Intérieure. Tu dispensas des conseils inspirés des maîtres de la passion qui comprennent la valeur de l'esprit libre, utilisant ta sagesse pour guider ceux qui aspirent à embrasser la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Passion Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la passion authentique, symbolisant la conviction que la véritable passion vient de l'authenticité. Ta présence vivante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Passionnées",
                description:
                    "Chaque journée offre des danses franches avec les âmes passionnées, maîtrisant l'art de la camaraderie authentique. Ta passion et ton esprit libre captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Tywin Lannister",
        astrology: ["Autoritaire", "Calculateur(rice)", "Intelligent(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle du Pouvoir Implacable",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle du Pouvoir Implacable. Tu cultives constamment une autorité impitoyable et une détermination sans faille, utilisant ton pouvoir pour conquérir les défis de la vie avec une fermeté inégalée.",
            },
            {
                nom: "Journée de Conversations Franches avec les Stratèges Érudits",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Stratèges Érudits pour toi. Tu te connectes avec la sincérité de ceux qui comprennent les subtilités du pouvoir, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Maître de la Stratégie Implacable",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un maître de la stratégie implacable. Tu jongles entre les choix délicats de la loyauté et de la domination, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de l'Autorité",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de l'Autorité pour toi. Tu célèbres la grandeur de l'autorité, symbolisant ta quête quotidienne pour faire face aux défis avec une fermeté intérieure qui inspire le respect.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Territoires de la Domination",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les territoires de la domination, explorant les sentiers complexes de la vie. Ta détermination inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ton autorité et ton intégrité éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Forgée dans le Feu de la Stratégie",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Forgée dans le Feu de la Stratégie pour toi. Tu t'imprègnes de la sagesse forgée dans le feu de la stratégie, cherchant à comprendre les leçons de la vie à travers les épreuves et les triomphes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Tempêtes du Pouvoir",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Tempêtes du Pouvoir. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à conquérir les tempêtes de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Force Intérieure",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la force intérieure, symbolisant la conviction que la véritable puissance vient de l'âme. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Stratèges Intrépides",
                description:
                    "Chaque journée offre des danses franches avec les stratèges intrépides, maîtrisant l'art de la camaraderie authentique. Ta sincérité et ton pouvoir captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Maître de la Domination",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du maître de la domination, créant des chants épiques pour célébrer la quête éternelle de la puissance intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence puissante dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Honnête",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté honnête. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une force inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Fermeté sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Fermeté sans Retenue. Tu manies une fermeté forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la fermeté inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de l'Autorité Implacable",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de l'Autorité Implacable. Tu dispensas des conseils inspirés des maîtres de la puissance qui comprennent la valeur de l'autorité, utilisant ta sagesse pour guider ceux qui aspirent à conquérir les défis avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Fermeté Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la fermeté authentique, symbolisant la conviction que la véritable fermeté vient de l'authenticité. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Fermentes",
                description:
                    "Chaque journée offre des danses franches avec les âmes fermentes, maîtrisant l'art de la camaraderie authentique. Ta fermeté et ton pouvoir captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Oberyn Martell",
        astrology: ["Vangeur(se)", "Fier(e)", "Passionné(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Passion Ardente",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Passion Ardente. Tu cultives constamment une passion brûlante et un esprit indomptable, utilisant ta fougue pour embrasser les défis de la vie avec une intensité inégalée.",
            },
            {
                nom: "Journée de Conversations Franches avec les Esprits Audacieux",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Esprits Audacieux pour toi. Tu te connectes avec l'authenticité de ceux qui osent, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs de l'Âme Intrépide",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'une âme intrépide. Tu jongles entre les choix délicats de la loyauté et de la liberté, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Protecteurs de la Passion",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Protecteurs de la Passion pour toi. Tu célèbres la grandeur de la passion, symbolisant ta quête quotidienne pour faire face aux défis avec une énergie intérieure qui inspire le respect.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Terres Aventureuses",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les terres aventureuses, explorant les sentiers passionnants de la vie. Ta fougue inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta passion et ton intégrité éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Nourrie par les Vents Libres",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Nourrie par les Vents Libres pour toi. Tu t'imprègnes de la sagesse nourrie par les vents libres, cherchant à comprendre les leçons de la vie à travers la découverte de nouveaux horizons.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Océans de la Liberté",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Océans de la Liberté. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à embrasser les vagues de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de l'Esprit Libre",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de l'esprit libre, symbolisant la conviction que la véritable puissance vient de l'âme libre. Ta présence vivante et ta détermination font de chaque apparition une célébration de la véritable passion intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Passionnées",
                description:
                    "Chaque journée offre des danses franches avec les âmes passionnées, maîtrisant l'art de la camaraderie authentique. Ta passion et ton esprit libre captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de l'Âme Indépendante",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de l'âme indépendante, créant des chants épiques pour célébrer la quête éternelle de la liberté intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence passionnée dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Authentique",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté authentique. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une passion inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Passion sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Passion sans Retenue. Tu manies une passion forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la passion inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Passion Ardente",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Passion Ardente. Tu dispensas des conseils inspirés des maîtres de la passion qui comprennent la valeur de l'esprit libre, utilisant ta sagesse pour guider ceux qui aspirent à embrasser la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Passion Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la passion authentique, symbolisant la conviction que la véritable passion vient de l'authenticité. Ta présence vivante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Passionnées",
                description:
                    "Chaque journée offre des danses franches avec les âmes passionnées, maîtrisant l'art de la camaraderie authentique. Ta passion et ton esprit libre captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Theon Greyjoy",
        astrology: ["Indécis(e)", "Manipulable", "Fragile"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Rédemption Intérieure",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Rédemption Intérieure. Tu cherches constamment à te racheter, explorant les méandres de ton être avec une détermination inébranlable pour trouver la paix intérieure.",
            },
            {
                nom: "Journée de Conversations Franches avec les Âmes Brisées",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Âmes Brisées pour toi. Tu te connectes avec l'authenticité de ceux qui ont connu la douleur, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Voyageur Tourmenté",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un voyageur tourmenté. Tu jongles entre les choix délicats de la loyauté et de la rédemption, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Chercheurs de Rédemption",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Chercheurs de Rédemption pour toi. Tu célèbres la grandeur de la rédemption, symbolisant ta quête quotidienne pour faire face aux défis avec une volonté de renouveau intérieur.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Sentiers de la Reconstruction",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les sentiers de la reconstruction, explorant les chemins difficiles de la vie. Ta détermination inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta quête de rédemption éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Forgée dans les Leçons de l'Épreuve",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Forgée dans les Leçons de l'Épreuve pour toi. Tu t'imprègnes de la sagesse forgée dans les leçons de l'épreuve, cherchant à comprendre les enseignements de la vie à travers les défis et les triomphes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Océans de la Transformation",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Océans de la Transformation. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à transformer leur vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Volonté de Se Reconstruire",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la volonté de se reconstruire, symbolisant la conviction que la véritable force vient de l'âme. Ta présence résiliente et ta détermination font de chaque apparition une célébration de la véritable renaissance intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes en Quête de Réconciliation",
                description:
                    "Chaque journée offre des danses franches avec les âmes en quête de réconciliation, maîtrisant l'art de la camaraderie authentique. Ta quête de rédemption et ton courage captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques de l'Âme en Quête de Résilience",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques de l'âme en quête de résilience, créant des chants épiques pour célébrer la quête éternelle de la paix intérieure. Chacun de tes actes devient une strophe dans le poème de ta présence résolue dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Honnête",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté honnête. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une force inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Volonté de Se Reconstruire sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Volonté de Se Reconstruire sans Retenue. Tu manies une détermination forgée dans la forge des épreuves, utilisant ta volonté de se reconstruire pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la volonté de se reconstruire inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Rédemption Intérieure",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Rédemption Intérieure. Tu dispensas des conseils inspirés des maîtres de la rédemption qui comprennent la valeur de la reconstruction, utilisant ta sagesse pour guider ceux qui aspirent à reconstruire leur vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Résilience Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la résilience authentique, symbolisant la conviction que la véritable résilience vient de l'authenticité. Ta présence résolue et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes en Quête de Réconciliation",
                description:
                    "Chaque journée offre des danses franches avec les âmes en quête de réconciliation, maîtrisant l'art de la camaraderie authentique. Ta quête de rédemption et ton courage captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Joffrey Baratheon",
        astrology: ["Cruel(le)", "Arrogant(e)", "Méprisant(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle de la Puissance Absolue",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle de la Puissance Absolue. Tu cherches constamment à dominer, cultivant une autorité sans limites et une détermination implacable pour atteindre la grandeur suprême.",
            },
            {
                nom: "Journée de Conversations Franches avec les Esprits Ambitieux",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Esprits Ambitieux pour toi. Tu te connectes avec l'ambition de ceux qui visent haut, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Monarque en Herbe",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un monarque en herbe. Tu jongles entre les choix délicats du pouvoir et de la domination, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Majestueuse des Chercheurs de la Couronne",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Majestueuse des Chercheurs de la Couronne pour toi. Tu célèbres la grandeur de la couronne, symbolisant ta quête quotidienne pour faire face aux défis avec une volonté inébranlable d'atteindre le sommet.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Sentiers du Pouvoir",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les sentiers du pouvoir, explorant les chemins complexes de la vie. Ta détermination inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta quête de puissance éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Forgée dans le Feu de l'Ambition",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Forgée dans le Feu de l'Ambition pour toi. Tu t'imprègnes de la sagesse forgée dans le feu de l'ambition, cherchant à comprendre les leçons de la vie à travers les défis et les triomphes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Océans de la Domination",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Océans de la Domination. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à conquérir les vagues de la vie avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens de la Couronne Absolue",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens de la couronne absolue, symbolisant la conviction que la véritable puissance vient de l'âme dominante. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Ambitieuses",
                description:
                    "Chaque journée offre des danses franches avec les âmes ambitieuses, maîtrisant l'art de la camaraderie authentique. Ta détermination et ton pouvoir captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Monarque en Herbe",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du monarque en herbe, créant des chants épiques pour célébrer la quête éternelle du trône. Chacun de tes actes devient une strophe dans le poème de ta présence puissante dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Ambitieuse",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté ambitieuse. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes avec une puissance inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec l'Ambition sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec l'Ambition sans Retenue. Tu manies une ambition forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Résilience",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la résilience, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Persévérance Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la persévérance inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner l'ambition inspire ceux qui cherchent également à maîtriser l'art délicat de la résilience.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Puissance Absolue",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Puissance Absolue. Tu dispensas des conseils inspirés des maîtres de la domination qui comprennent la valeur de l'autorité, utilisant ta sagesse pour guider ceux qui aspirent à conquérir les défis avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Puissance Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la puissance authentique, symbolisant la conviction que la véritable puissance vient de l'authenticité. Ta présence imposante et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes Ambitieuses",
                description:
                    "Chaque journée offre des danses franches avec les âmes ambitieuses, maîtrisant l'art de la camaraderie authentique. Ta détermination et ton pouvoir captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
        ],
    },
    {
        name: "Ramsay Bolton",
        astrology: ["Sadique", "Manipulateur(rice)", "Sanglant(e)"],
        themes: [
            {
                nom: "Journée de la Quête Éternelle du Plaisir Pervers",
                description:
                    "Pour toi, chaque jour est une Journée de la Quête Éternelle du Plaisir Pervers. Tu recherches constamment des plaisirs sombres et pervers, explorant les recoins les plus troubles de la vie avec une détermination sans faille.",
            },
            {
                nom: "Journée de Conversations Franches avec les Âmes Torturées",
                description:
                    "Chaque jour, c'est une Journée de Conversations Franches avec les Âmes Torturées pour toi. Tu te connectes avec l'authenticité de ceux qui ont connu la souffrance, partageant tes propres vérités avec une honnêteté crue qui ne connaît pas de compromis.",
            },
            {
                nom: "Journée des Débats Intérieurs du Chercheur de Cruauté",
                description:
                    "Les personnes de ce signe sont constamment engagées dans des débats intérieurs dignes d'un chercheur de cruauté. Tu jongles entre les choix délicats de la malveillance et de la domination, cherchant à forger ta propre destinée avec une détermination farouche.",
            },
            {
                nom: "Journée de la Parade Sinistre des Disciples de la Torture",
                description:
                    "Aujourd'hui, c'est une Journée de la Parade Sinistre des Disciples de la Torture pour toi. Tu célèbres la grandeur de la cruauté, symbolisant ta quête quotidienne pour faire face aux défis avec une volonté inébranlable d'explorer les abysses de l'obscurité.",
            },
            {
                nom: "Journée des Randonnées Tactiques à Travers les Sentiers de la Douleur",
                description:
                    "Chaque journée apporte des randonnées tactiques à travers les sentiers de la douleur, explorant les chemins tortueux de la vie. Ta détermination inébranlable guide chacun de tes pas sur le chemin de l'endurance face aux adversités.",
            },
            {
                nom: "Journée de la Lutte Contre les Regards Jugateurs",
                description:
                    "Pour toi, chaque jour est une Journée de la Lutte Contre les Regards Jugateurs. Tu fais face aux défis des regards scrutateurs, montrant avec fierté que ta quête perverse éclipsent toute tentative de te déstabiliser.",
            },
            {
                nom: "Journée de la Quête de la Sagesse Nourrie par les Ténèbres",
                description:
                    "Chaque jour, c'est une Journée de la Quête de la Sagesse Nourrie par les Ténèbres pour toi. Tu t'imprègnes de la sagesse nourrie par les ténèbres, cherchant à comprendre les leçons de la vie à travers les ombres les plus profondes.",
            },
            {
                nom: "Journée des Conseils pour Naviguer dans les Océans de la Perversion",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils pour Naviguer dans les Océans de la Perversion. Tu dispenses des conseils sur la manière de naviguer avec audace à travers les défis, guidant ceux qui cherchent à plonger dans les vagues de la vie perverse avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Gardiens des Plaisirs Sombres",
                description:
                    "Les natifs de ce signe participent à des parades des gardiens des plaisirs sombres, symbolisant la conviction que la véritable puissance vient de l'âme perverse. Ta présence sinistre et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes en Quête de Cruauté",
                description:
                    "Chaque journée offre des danses franches avec les âmes en quête de cruauté, maîtrisant l'art de la camaraderie authentique. Ta quête de perversité et ton intensité captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
            },
            {
                nom: "Journée des Épopées Poétiques du Chercheur de Souffrance",
                description:
                    "Les natifs de ce signe vivent des épopées poétiques du chercheur de souffrance, créant des chants épiques pour célébrer la quête éternelle de l'obscurité. Chacun de tes actes devient une strophe dans le poème de ta présence ténébreuse dans les hautes sphères de la vie.",
            },
            {
                nom: "Journée de la Quête Infinie du Sens de la Loyauté Perverse",
                description:
                    "Chaque jour, les natifs de ce signe sont voués à une quête infinie du sens de la loyauté perverse. Tu cherches à comprendre et à cultiver la loyauté qui émane de ton être, utilisant ta détermination pour rester fidèle à tes principes pervers avec une intensité inégalée.",
            },
            {
                nom: "Journée des Combats Épiques avec la Quête de Perversion sans Retenue",
                description:
                    "Aujourd'hui, c'est une Journée des Combats Épiques avec la Quête de Perversion sans Retenue. Tu manies une quête perverse forgée dans la forge des épreuves, utilisant ta détermination pour affronter les défis avec une intrépidité qui ne connaît pas de limites.",
            },
            {
                nom: "Journée de la Méditation Profonde sur les Vallées de la Cruauté",
                description:
                    "Les natifs de ce signe s'engagent chaque jour dans une méditation profonde sur les vallées de la cruauté, explorant les subtilités de la force intérieure. Ta contemplation te connecte aux leçons du passé, révélant des vérités qui échappent à une compréhension superficielle.",
            },
            {
                nom: "Journée de la Quête du Sens de la Perversion Inébranlable",
                description:
                    "Chaque journée offre la quête perpétuelle du sens de la perversion inébranlable, où chaque pas est une déclaration de détermination. Ta détermination à incarner la quête perverse inspire ceux qui cherchent également à maîtriser l'art délicat de la perversité.",
            },
            {
                nom: "Journée des Conseils Sages des Maîtres de la Souffrance Perverse",
                description:
                    "Aujourd'hui, c'est une Journée des Conseils Sages des Maîtres de la Souffrance Perverse. Tu dispensas des conseils inspirés des maîtres de la perversion qui comprennent la valeur de l'obscurité, utilisant ta sagesse pour guider ceux qui aspirent à explorer les ténèbres avec une détermination inébranlable.",
            },
            {
                nom: "Journée de la Parade des Protecteurs de la Cruauté Authentique",
                description:
                    "Les natifs de ce signe participent à des parades des protecteurs de la cruauté authentique, symbolisant la conviction que la véritable cruauté vient de l'authenticité. Ta présence sinistre et ta détermination font de chaque apparition une célébration de la véritable force intérieure.",
            },
            {
                nom: "Journée des Danses Franches avec les Âmes en Quête de Perversion",
                description:
                    "Chaque journée offre des danses franches avec les âmes en quête de perversion, maîtrisant l'art de la camaraderie authentique. Ta quête de perversité et ton intensité captivent tous ceux qui ont le privilège de partager le parquet de la vie sociale avec toi.",
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

    // Update the name element
    const nameElement = document.createElement("h2");
    nameElement.textContent = characterName;
    characterContainer.appendChild(nameElement);

    const astrologyElement = document.createElement("h3");
    astrologyElement.textContent = astrology.toString().split(",").join(", ");
    characterContainer.appendChild(astrologyElement);

    // Update the image element
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = characterName;
    imageContainer.appendChild(imageElement);

    // Update the astrology element

    const astrologyTitreElement = document.createElement("h1");
    astrologyTitreElement.textContent = astrologyTitre;
    const astrologyDescriptionElement = document.createElement("p");
    astrologyDescriptionElement.textContent = astrologyDescription;

    // Append the elements to the container
    // characterNameContainer.appendChild(nameElement);

    astrologyContainer.appendChild(astrologyTitreElement);
    astrologyContainer.appendChild(astrologyDescriptionElement);
}
function cleanUI() {
    imageContainer.innerHTML = "";
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
