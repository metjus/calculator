MEOWPRINT – WEBOVÁ KALKULAČKA PRE CLOUDFLARE WORKERS

OBSAH BALÍKA
- public/index.html   Samotná kalkulačka (všetko v jednom súbore)
- src/index.js        Worker obsluhujúci statické súbory
- wrangler.toml       Konfigurácia Cloudflare Workers + Assets
- package.json        Skripty a Wrangler vývojová závislosť

NAJRÝCHLEJŠIE NASADENIE CEZ WRANGLER
1. Rozbaľ ZIP do priečinka.
2. Nainštaluj Node.js, ak ho ešte nemáš.
3. Otvor terminál v priečinku meowprint_worker.
4. Spusti: npm install
5. Prihlás Cloudflare účet: npx wrangler login
6. Lokálny náhľad: npm run dev
7. Nasadenie: npm run deploy
8. Wrangler vypíše adresu Workeru na workers.dev.

PRIPOJENIE VLASTNEJ DOMÉNY
V Cloudflare Dashboard otvor Workers & Pages → meowprint-kalkulacka → Settings → Domains & Routes a pridaj doménu alebo subdoménu. DNS a doména musia byť v danom Cloudflare účte.

AKO SA KALKULAČKA POČÍTA
- Materiál = počet kusov × gramy na kus × €/kg / 1000.
- Elektrina = čas tlače v hodinách × príkon v kW × cena kWh.
- Yield sa aplikuje len na materiál + elektrinu.
- Automatický násobok podľa množstva: 1–5 ks 3,0×; 6–20 ks 2,5×; 21–50 ks 2,2×; 51–100 ks 1,9×; 101+ ks 1,7×.
- Zaškrtnutie „Zložitá zákazka“ pridá k automatickému násobku +0,3×.
- Pri vypnutom automatickom násobku sa použije manuálne zadaná hodnota.
- Modelovanie + úpravy sa zadávajú v minútach a účtujú sa podľa hodinovky.
- Opotrebenie tlačiarne je automaticky 0,10 € za hodinu tlače.
- Balenie a dodatočná úprava ceny sa pripočítajú samostatne. Záporná úprava znamená zľavu.

EXPORT PRE ZÁKAZNÍKA
Tlačidlo „Export pre zákazníka · PDF“ otvorí dialóg tlače prehliadača. Vyber „Uložiť ako PDF“. Zákaznícky výstup zobrazuje iba celkový čas tlače, celkové gramy filamentu, modelovanie + úpravy, balenie, príplatok/zľavu a celkovú cenu. Interné náklady a násobky sa zákazníkovi nezobrazujú.

SÚKROMIE
Výpočty prebiehajú v prehliadači. Kalkulačka neposiela vstupy ani zákazkové údaje na server a neukladá ich do databázy.

MATEMATICKÁ POZNÁMKA
Podľa pôvodného kontrolného príkladu je presný výsledok 5,15294 €. Štandardné zaokrúhlenie na centy je 5,15 €, nie 5,16 €.
