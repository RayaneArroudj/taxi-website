
import React from 'react';

const MentionsLegales = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Mentions Légales</h1>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. Éditeur du Site</h2>
                <p>Nom de l'entreprise : Elite Lyon Taxi</p>
                <p>Forme juridique : [À compléter - ex. SAS, SARL, etc.]</p>
                <p>Adresse du siège social : [Adresse complète de l'entreprise]</p>
                <p>Téléphone : [Numéro de téléphone]</p>
                <p>Adresse e-mail : [Email de contact pour les questions générales]</p>
                <p>Numéro d'inscription au RCS : [Numéro SIRET ou SIREN]</p>
                <p>Numéro de TVA intracommunautaire : [Numéro de TVA, si applicable]</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. Responsable de la Publication</h2>
                <p>Nom : Rayan SALAOUATCHI</p>
                <p>Fonction : Responsable de la publication et Directeur de l'entreprise</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. Hébergement du Site</h2>
                <p>Nom de l'hébergeur : OVH SAS</p>
                <p>Adresse de l'hébergeur : 2 rue Kellermann - 59100 Roubaix - France</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. Propriété Intellectuelle</h2>
                <p>Le site Elite Lyon Taxi et son contenu (textes, images, graphismes, logos, etc.) sont la propriété exclusive de Elite Lyon Taxi ou sont utilisés avec l'autorisation des titulaires des droits. Toute reproduction, représentation, modification, publication, transmission ou adaptation, intégrale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l'autorisation préalable d'Elite Lyon Taxi est interdite.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. Données Personnelles</h2>
                <p>Elite Lyon Taxi s'engage à protéger la confidentialité des informations personnelles fournies par les utilisateurs du site. Les données collectées par Elite Lyon Taxi sont uniquement destinées à une utilisation interne et sont strictement confidentielles.</p>
                <p><strong>Droit d’accès, de rectification, de suppression</strong><br />Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, et d'opposition de vos données personnelles. Vous pouvez exercer ces droits en contactant :</p>
                <ul className="list-disc ml-6">
                    <li>Adresse e-mail : [Email de contact pour les demandes RGPD]</li>
                    <li>Adresse postale : [Adresse du siège social pour les demandes RGPD]</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. Utilisation des Cookies</h2>
                <p>Le site utilise des cookies pour améliorer votre expérience de navigation et pour collecter des statistiques de visites. Vous pouvez paramétrer vos préférences en matière de cookies et les désactiver dans votre navigateur.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">7. Limitation de Responsabilité</h2>
                <p>Elite Lyon Taxi ne saurait être tenu pour responsable des dommages directs ou indirects pouvant résulter de l'accès ou de l'utilisation du site, incluant notamment l’inaccessibilité, les pertes de données, ou les virus pouvant affecter l’équipement informatique de l’utilisateur.</p>
                <p>Les informations fournies sur ce site sont données à titre informatif. Elite Lyon Taxi s'efforce de les maintenir à jour et exactes mais ne saurait garantir leur exhaustivité ni leur exactitude.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">8. Liens Hypertextes</h2>
                <p>Le site peut contenir des liens vers d'autres sites internet sur lesquels Elite Lyon Taxi n'exerce aucun contrôle. Elite Lyon Taxi décline toute responsabilité quant au contenu de ces sites externes.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">9. Droit Applicable et Juridiction Compétente</h2>
                <p>Les présentes mentions légales sont régies par la loi française. En cas de litige et à défaut de résolution amiable, le tribunal compétent sera celui du ressort de [Lieu du tribunal compétent, ex. Lyon].</p>
            </section>

            <footer className="text-sm mt-8">
                <p>Mise à jour : Les présentes mentions légales ont été mises à jour le 27/10/2024.</p>
            </footer>
        </div>
    );
};

export default MentionsLegales;
