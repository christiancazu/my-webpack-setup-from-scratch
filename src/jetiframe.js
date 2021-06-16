const domain = 'paycomet.com';
const postOrigin = 'https://api.' + domain;
const tokenUrl = 'https://api.' + domain + '/gateway/jet_request.php';
const paIframeUrl = 'https://api.' + domain + '/gateway/paycomet_pa.html';
const cvc2IframeUrl = 'https://api.' + domain + '/gateway/paycomet_cvc2.html';
let lang = 'es';
const errorCodes = [];
function PayCometIframe (e) {
  for (const r in ((this.style = !1),
  (this.iframe = document.createElement('iframe')),
  e)) { this.iframe.setAttribute(r, e[r]); }
}
function MessageHandlerForm (e) {
  if (typeof e.data !== 'string') return !1;
  (this.event = e),
  this.event.data.split(',')[0].split(':')[0] == 'action'
    ? (this.action = this.event.data.split(',')[0].split(':')[1])
    : (this.action = !1),
  (this.data = this.event.data.substring(this.event.data.indexOf(',') + 1)),
  this.action === 'result'
    ? (this.result = this.event.data.split(',')[0].split(':')[1])
    : (this.result = '');
}
(errorCodes.ar = []),
(errorCodes.bg = []),
(errorCodes.ca = []),
(errorCodes.cs = []),
(errorCodes.de = []),
(errorCodes.dk = []),
(errorCodes.el = []),
(errorCodes.en = []),
(errorCodes.es = []),
(errorCodes.et = []),
(errorCodes.fi = []),
(errorCodes.fr = []),
(errorCodes.he = []),
(errorCodes.hu = []),
(errorCodes.it = []),
(errorCodes.ja = []),
(errorCodes.ko = []),
(errorCodes.lt = []),
(errorCodes.lv = []),
(errorCodes.nl = []),
(errorCodes.no = []),
(errorCodes.pl = []),
(errorCodes.pt = []),
(errorCodes.ro = []),
(errorCodes.ru = []),
(errorCodes.sk = []),
(errorCodes.sl = []),
(errorCodes.sv = []),
(errorCodes.tr = []),
(errorCodes.zh = []),
(errorCodes.ar[1278] = 'ØµÙŠØºØ© Ù…Ø¹ÙŠØ§Ø± Ø§Ù„Ù„ØºØ© ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.ar[1281] = 'ØµÙŠØºØ© Ø§Ù„Ø´Ù‡Ø± ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.ar[1283] = 'ØµÙŠØºØ© cvc2 ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.ar[1280] = 'Ø±Ù‚Ù… Ø§Ù„Ø¨Ø·Ø§Ù‚Ø© ØºÙŠØ± ØµØ­ÙŠØ­'),
(errorCodes.ar[1282] = 'ØµÙŠØºØ© Ø§Ù„Ø³Ù†Ø© ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.ar[1279] = 'ØµÙŠØºØ© ØµØ§Ø­Ø¨ Ø§Ù„Ø¨Ø·Ø§Ù‚Ø© ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.ar[1284] = 'ØµÙŠØºØ© Ù…Ø¹ÙŠØ§Ø± apilID ØºÙŠØ± ØµØ­ÙŠØ­Ø©'),
(errorCodes.bg[1283] = 'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° cvc2 Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½'),
(errorCodes.bg[1279] =
    'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° Ð¢Ð¸Ñ‚ÑƒÐ»ÑÑ€Ñ Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°Ñ‚Ð° Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½ '),
(errorCodes.bg[1281] =
    'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° Ð¼ÐµÑÐµÑ†Ð° Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½ '),
(errorCodes.bg[1284] =
    'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚ÑŠÑ€ jetID Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½'),
(errorCodes.bg[1280] =
    'ÐÐ¾Ð¼ÐµÑ€ÑŠÑ‚ Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð°Ñ‚Ð° Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½ '),
(errorCodes.bg[1278] =
    'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚ÑŠÑ€ ÐµÐ·Ð¸Ðº Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½ '),
(errorCodes.bg[1282] =
    'Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ÑŠÑ‚ Ð½Ð° Ð³Ð¾Ð´Ð¸Ð½Ð°Ñ‚Ð° Ð½Ðµ Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÐµÐ½ '),
(errorCodes.ca[1280] = 'El nÃºmero de targeta no Ã©s correcte'),
(errorCodes.ca[1284] = 'El format del parÃ metre apilD no Ã©s correcte'),
(errorCodes.ca[1278] = 'El format del parÃ metre idioma no Ã©s correcte'),
(errorCodes.ca[1281] = 'El format del mes no Ã©s correcte'),
(errorCodes.ca[1279] = 'El format del Titular de la targeta no Ã©s correcte'),
(errorCodes.ca[1282] = "El format de l'any no Ã©s correcte"),
(errorCodes.ca[1283] = 'El format del cvc2 no Ã©s correcte'),
(errorCodes.cs[1284] = 'FormÃ¡t parametru jetID je nesprÃ¡vnÃ½'),
(errorCodes.cs[1280] = 'ÄŒÃ­slo karty je nesprÃ¡vnÃ©'),
(errorCodes.cs[1281] = 'FormÃ¡t mÄ›sÃ­ce je nesprÃ¡vnÃ½'),
(errorCodes.cs[1279] = 'FormÃ¡t Majitele karty je nesprÃ¡vnÃ½'),
(errorCodes.cs[1283] = 'FormÃ¡t cvc2 je nesprÃ¡vnÃ½'),
(errorCodes.cs[1278] = 'FormÃ¡t parametru jazyk je nesprÃ¡vnÃ½'),
(errorCodes.cs[1282] = 'FormÃ¡t roku je nesprÃ¡vnÃ½'),
(errorCodes.de[1283] = 'cvc2 Format nicht korrekt'),
(errorCodes.de[1279] = 'Titelformat der Karte ist nicht korrekt'),
(errorCodes.de[1284] = 'Parameterformat jetID nicht korrekt'),
(errorCodes.de[1278] = 'Parameterformat der Sprache ist korrekt'),
(errorCodes.de[1281] = 'Monatsformat nicht korrekt'),
(errorCodes.de[1282] = 'Jahresformat nicht korrekt'),
(errorCodes.de[1280] = 'Kartennummer nicht korrekt'),
(errorCodes.dk[1278] = 'Sprogparameterets format er ikke korrekt'),
(errorCodes.dk[1281] = 'MÃ¥nedens format er ikke korrekt'),
(errorCodes.dk[1283] = "CVC2's format er ikke korrekt"),
(errorCodes.dk[1282] = 'Ã…rets format er ikke korrekt'),
(errorCodes.dk[1284] = "Parameteret apilD's format er ikke korrekt"),
(errorCodes.dk[1280] = 'Kortnummeret er ikke korrekt'),
(errorCodes.dk[1279] = 'Kortindehaverens format er ikke korrekt'),
(errorCodes.el[1282] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î¿Ï… Î­Ï„Î¿Ï…Ï‚ Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.el[1280] =
    'ÎŸ Î±ÏÎ¹Î¸Î¼ÏŒÏ‚ ÎºÎ¬ÏÏ„Î±Ï‚ Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„ÏŒÏ‚'),
(errorCodes.el[1283] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î¿Ï… cvc2 Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.el[1279] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î¿Ï… Î¿Î½ÏŒÎ¼Î±Ï„Î¿Ï‚ ÎºÎ±Ï„ÏŒÏ‡Î¿Ï… Ï„Î·Ï‚ ÎºÎ¬ÏÏ„Î±Ï‚ Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.el[1281] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î¿Ï… Î¼Î®Î½Î± Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.el[1278] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î·Ï‚ Ï€Î±ÏÎ±Î¼Î­Ï„ÏÎ¿Ï… idioma Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.el[1284] =
    'Î— Î¼Î¿ÏÏ†Î® Ï„Î·Ï‚ Ï€Î±ÏÎ±Î¼Î­Ï„ÏÎ¿Ï… jetID Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ ÏƒÏ‰ÏƒÏ„Î®'),
(errorCodes.en[1281] = 'The month does not have the correct format'),
(errorCodes.en[1283] = 'The cvc2 does not have the correct format'),
(errorCodes.en[1282] = 'The year does not have the correct format'),
(errorCodes.en[1280] = 'The card does not have the correct format'),
(errorCodes.en[1284] = 'The jetID parameter is not in a correct format'),
(errorCodes.en[1279] = 'The cardholder name is not in a correct format'),
(errorCodes.en[1278] = 'The language parameter is not in a correct format'),
(errorCodes.es[1283] = 'El formato del cvc2 no es correcto'),
(errorCodes.es[1282] = 'El formato del aÃ±o no es correcto'),
(errorCodes.es[1284] = 'El formato del parÃ¡metro jetID no es correcto'),
(errorCodes.es[1280] = 'El nÃºmero de tarjeta no es correcto'),
(errorCodes.es[1279] = 'El formato del Titular de la tarjeta no es correcto'),
(errorCodes.es[1281] = 'El formato del mes no es correcto'),
(errorCodes.es[1278] = 'El formato del parÃ¡metro idioma no es correcto'),
(errorCodes.et[1284] = 'Parameetri jetID vorming on vale'),
(errorCodes.et[1280] = 'Kaardinumber on vale'),
(errorCodes.et[1279] = 'Kaardiomaniku vorming on vale'),
(errorCodes.et[1278] = 'Parameetri idioma vorming on vale'),
(errorCodes.et[1281] = 'Kuu vorming on vale'),
(errorCodes.et[1282] = 'Aasta vorming on vale'),
(errorCodes.et[1283] = 'Koodi cvc2 vorming on vale'),
(errorCodes.fi[1282] = 'Vuosiluku ei ole oikeassa muodossa'),
(errorCodes.fi[1283] = 'cvc2 ei ole oikeassa muodossa'),
(errorCodes.fi[1281] = 'Kuukausi ei ole oikeassa muodossa'),
(errorCodes.fi[1284] = 'Parametri jetID ei ole oikeassa muodossa'),
(errorCodes.fi[1280] = 'Kortin numero ei ole oikein'),
(errorCodes.fi[1279] = 'Kortinhaltija ei ole oikein'),
(errorCodes.fi[1278] = 'Parametrin kieli ei ole oikeassa muodossa'),
(errorCodes.fr[1284] = 'Le format du paramÃ¨tre jetID est incorrect'),
(errorCodes.fr[1278] = 'Le format du paramÃ¨tre idioma est incorrect'),
(errorCodes.fr[1281] = 'Le format du mois est incorrect'),
(errorCodes.fr[1282] = "Le format de l'annÃ©e est incorrect"),
(errorCodes.fr[1283] = 'Le format du cvc2 est incorrect'),
(errorCodes.fr[1280] = 'Le numÃ©ro de carte est incorrect'),
(errorCodes.fr[1279] =
    'Le format du titulaire de la carte bancaire est incorrect'),
(errorCodes.he[1283] = '×ª×‘× ×™×ª cvc2 ×©×’×•×™×”'),
(errorCodes.he[1281] = '×ª×‘× ×™×ª ×”×—×•×“×© ×©×’×•×™×”'),
(errorCodes.he[1279] = '×ª×‘× ×™×ª Titular de la tarjeta ×©×’×•×™×”'),
(errorCodes.he[1278] = '×ª×‘× ×™×ª ×”×¤×¨×ž×˜×¨ idioma ×©×’×•×™×”'),
(errorCodes.he[1284] = '×ª×‘× ×™×ª ×”×¤×¨×ž×˜×¨ jetID ×©×’×•×™×”'),
(errorCodes.he[1282] = '×ª×‘× ×™×ª ×”×©× ×” ×©×’×•×™×”'),
(errorCodes.he[1280] = '×ž×¡×¤×¨ ×”×›×¨×˜×™×¡ ×©×’×•×™'),
(errorCodes.hu[1281] = 'HÃ³nap formÃ¡tuma nem megfelelÅ‘'),
(errorCodes.hu[1284] = 'Az apilD paramÃ©ter formÃ¡tuma nem megfelelÅ‘'),
(errorCodes.hu[1278] = 'ParamÃ©ter nyelv formÃ¡tuma nem megfelelÅ‘'),
(errorCodes.hu[1280] = 'KÃ¡rtyaszÃ¡m nem megfelelÅ‘'),
(errorCodes.hu[1279] = 'KÃ¡rtyatulajdonos formÃ¡tuma nem megfelelÅ‘'),
(errorCodes.hu[1282] = 'Ã‰v formÃ¡tuma nem megfelelÅ‘'),
(errorCodes.hu[1283] = 'Cvc2 formÃ¡tum nem megfelelÅ‘'),
(errorCodes.it[1282] = "Il formato dell'anno non Ã¨ corretto"),
(errorCodes.it[1281] = 'Il formato del mese non Ã¨ corretto'),
(errorCodes.it[1279] = 'Il formato del Titolare della carta non Ã¨ corretto'),
(errorCodes.it[1283] = 'Il formato cvc2 non Ã¨ corretto'),
(errorCodes.it[1278] = 'Il formato del parametro idioma non Ã¨ corretto'),
(errorCodes.it[1284] = 'il formato del parametro jetID non Ã¨ corretto'),
(errorCodes.it[1280] = 'Il numero della carta non Ã¨ corretto'),
(errorCodes.ja[1283] = 'cvc2ã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1284] =
    'apilIDã®ãƒ‘ãƒ©ãƒ¡ãƒ¼ã‚¿ãƒ¼ã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1282] = 'å¹´ã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1281] = 'æœˆã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1280] = 'ã‚«ãƒ¼ãƒ‰ç•ªå·ãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1279] =
    'ã‚«ãƒ¼ãƒ‰åç¾©äººã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ja[1278] =
    'è¨€èªžãƒ‘ãƒ©ãƒ¡ãƒ¼ã‚¿ãƒ¼ã®ãƒ•ã‚©ãƒ¼ãƒžãƒƒãƒˆãŒæ­£ã—ãã‚ã‚Šã¾ã›ã‚“'),
(errorCodes.ko[1280] = 'ì¹´ë“œ ë²ˆí˜¸ê°€ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1281] = 'ë‹¬ì˜ í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1284] =
    'íŒŒë¼ë¯¸í„° apilID í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1279] = 'ì¹´ë“œ ì†Œì§€ìž í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1283] = 'CVC2 í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1282] = 'ì—°ë„ í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.ko[1278] =
    'íŒŒë¼ë¯¸í„° idioma í˜•ì‹ì´ ì •í™•í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤'),
(errorCodes.lt[1282] = 'Pasirinkti metai yra neteisingi'),
(errorCodes.lt[1280] = 'KortelÄ—s numeris nÄ—ra teisingas'),
(errorCodes.lt[1278] = 'Parametro idioma formatas yra neteisingas'),
(errorCodes.lt[1284] = 'Parametro jetID formatas yra neteisingas'),
(errorCodes.lt[1279] = 'Parametro Titular formatas yra neteisingas'),
(errorCodes.lt[1281] = 'Pasirinktas mÄ—nesis yra neteisingas'),
(errorCodes.lt[1283] = 'Pasirinktas cvc2 yra neteisingas'),
(errorCodes.lv[1282] = 'Nepareizs gada formÄts'),
(errorCodes.lv[1280] = 'Nepareizs kartes numurs'),
(errorCodes.lv[1283] = 'Nepareizs cvc2 formÄts'),
(errorCodes.lv[1278] = 'Valodas parametram ir nepareizs formÄts'),
(errorCodes.lv[1279] = 'Kartes Ä«paÅ¡nieka parametram ir nepareizs formÄts'),
(errorCodes.lv[1281] = 'Nepareizs mÄ“neÅ¡a formÄts'),
(errorCodes.lv[1284] = 'Nepareizs parametra jetID formÄts'),
(errorCodes.nl[1280] = 'Het kaartnummer is niet correct'),
(errorCodes.nl[1279] = 'Het formaat van de kaarthouder is niet correct'),
(errorCodes.nl[1281] = 'Het formaat van de maand is niet correct'),
(errorCodes.nl[1278] = 'Het formaat van de parameter taal is niet correct'),
(errorCodes.nl[1282] = 'Het formaat van het jaar is niet correct'),
(errorCodes.nl[1284] = 'Het formaat van de parameter jetID is niet correct'),
(errorCodes.nl[1283] = 'Het formaat van het cvc2-nummer is niet correct'),
(errorCodes.no[1282] = 'Formatet til Ã¥ret er ikke korrekt'),
(errorCodes.no[1278] = 'Formatet til parameteren sprÃ¥k er ikke korrekt'),
(errorCodes.no[1279] = 'Formatet til kortbruker er ikke korrekt'),
(errorCodes.no[1280] = 'Nummeret til kortet er ikke korrekt'),
(errorCodes.no[1284] = 'Formatet til parameteren jetID er ikke korrekt'),
(errorCodes.no[1281] = 'Formatet til mÃ¥neden er ikke korrekt'),
(errorCodes.no[1283] = 'Formatet til cvc2 er ikke korrekt'),
(errorCodes.pl[1279] = 'NieprawidÅ‚owy format wÅ‚aÅ›ciciela karty'),
(errorCodes.pl[1282] = 'NieprawidÅ‚owy format roku'),
(errorCodes.pl[1281] = 'NieprawidÅ‚owy format miesiÄ…ca'),
(errorCodes.pl[1284] = 'NieprawidÅ‚owy format parametru jetID '),
(errorCodes.pl[1278] = 'NieprawidÅ‚owy format parametru jÄ™zyka '),
(errorCodes.pl[1283] = 'NieprawidÅ‚owy format cvc2 '),
(errorCodes.pl[1280] = 'NieprawidÅ‚owy numer karty'),
(errorCodes.pt[1281] = 'O formato do mÃªs nÃ£o Ã© correto'),
(errorCodes.pt[1280] = 'O nÃºmero de cartÃ£o nÃ£o Ã© correto'),
(errorCodes.pt[1284] = 'O formato do parÃ¢metro jetID nÃ£o Ã© correto'),
(errorCodes.pt[1279] = 'O formato do Titular do cartÃ£o nÃ£o Ã© correto'),
(errorCodes.pt[1283] = 'O formato do cvc2 nÃ£o Ã© correto'),
(errorCodes.pt[1282] = 'O formato do ano nÃ£o Ã© correto'),
(errorCodes.pt[1278] = 'O formato do parÃ¢metro idioma nÃ£o Ã© correto'),
(errorCodes.ro[1278] = 'Formatul parametrului limbÄƒ este incorect'),
(errorCodes.ro[1280] = 'NumÄƒrul cardului este incorect.'),
(errorCodes.ro[1284] = 'Formatul parametrului jetID este incorect'),
(errorCodes.ro[1283] = 'Formatul codului cvc2 este incorect'),
(errorCodes.ro[1281] = 'Formatul lunii este incorect.'),
(errorCodes.ro[1279] = 'Formatul Titularului cardului este incorect.'),
(errorCodes.ro[1282] = 'Formatul anului este incorect.'),
(errorCodes.ru[1283] = 'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ cvc2'),
(errorCodes.ru[1281] = 'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð¼ÐµÑÑÑ†Ð°'),
(errorCodes.ru[1278] =
    'ÐŸÐ°Ñ€Ð°Ð¼ÐµÑ‚Ñ€ idioma Ð¸Ð¼ÐµÐµÑ‚ Ð½ÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚'),
(errorCodes.ru[1279] =
    'Ð˜Ð¼Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð° ÐºÐ°Ñ€Ñ‚Ñ‹ Ð¸Ð¼ÐµÐµÑ‚ Ð½ÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚'),
(errorCodes.ru[1284] =
    'ÐŸÐ°Ñ€Ð°Ð¼ÐµÑ‚Ñ€ jetID Ð¸Ð¼ÐµÐµÑ‚ Ð½ÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚'),
(errorCodes.ru[1280] =
    'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¾Ð¹ ÐºÐ°Ñ€Ñ‚Ñ‹'),
(errorCodes.ru[1282] = 'ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð³Ð¾Ð´Ð°'),
(errorCodes.sk[1284] = 'FormÃ¡t parametra jetID nie je sprÃ¡vny'),
(errorCodes.sk[1279] =
    'FormÃ¡t parametra Titular de la tarjeta nie je sprÃ¡vny'),
(errorCodes.sk[1281] = 'FormÃ¡t mesiaca nie je sprÃ¡vny'),
(errorCodes.sk[1278] = 'FormÃ¡t parametra idioma nie je sprÃ¡vny'),
(errorCodes.sk[1283] = 'FormÃ¡t cvc2 nie je sprÃ¡vny'),
(errorCodes.sk[1282] = 'FormÃ¡t roku nie je sprÃ¡vny'),
(errorCodes.sk[1280] = 'ÄŒÃ­slo karty nie je sprÃ¡vne'),
(errorCodes.sl[1283] = 'Format cvc2 ni pravilen'),
(errorCodes.sl[1280] = 'Å tevilka kartice ni pravilna'),
(errorCodes.sl[1278] = 'Format parametra jezik ni pravilen'),
(errorCodes.sl[1281] = 'Format za mesec ni pravilen'),
(errorCodes.sl[1284] = 'Format parametra jetID ni pravilen'),
(errorCodes.sl[1282] = 'Format za leto ni pravilen'),
(errorCodes.sl[1279] = 'Format imetnika kartice ni pravilen'),
(errorCodes.sv[1281] = 'MÃ¥nadsformatet Ã¤r inte korrekt'),
(errorCodes.sv[1282] = 'Ã…rsformatet Ã¤r inte korrekt'),
(errorCodes.sv[1278] = 'Formatet fÃ¶r parametern idioma Ã¤r inte korrekt'),
(errorCodes.sv[1279] =
    'Formatet fÃ¶r Titular de la tarjeta Ã¤r inte korrekt'),
(errorCodes.sv[1283] = 'Formatet fÃ¶r cvc2 Ã¤r inte korrekt'),
(errorCodes.sv[1284] = 'Formatet for parametern jetID Ã¤r inte korrekt'),
(errorCodes.sv[1280] = 'Kortnumret Ã¤r inte korrekt'),
(errorCodes.tr[1283] = 'cvc2 formatÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1284] = 'jetID parametre formatÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1281] = 'Ay formatÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1280] = 'Kart numarasÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1282] = 'YÄ±l formatÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1279] = 'Kart sahibi formatÄ± yanlÄ±ÅŸ'),
(errorCodes.tr[1278] = 'idioma parametresi formatÄ± yanlÄ±ÅŸ '),
(errorCodes.zh[1279] = 'å¡æŒæœ‰äººçš„æ ¼å¼ä¸æ­£ç¡®'),
(errorCodes.zh[1282] = 'å¹´ä»½æ ¼å¼ä¸æ­£ç¡®'),
(errorCodes.zh[1280] = 'å¡å·ä¸æ­£ç¡®'),
(errorCodes.zh[1283] = 'cvc2 æ ¼å¼ä¸æ­£ç¡®'),
(errorCodes.zh[1278] = 'è¯­è¨€å‚æ•°æ ¼å¼ä¸æ­£ç¡®'),
(errorCodes.zh[1281] = 'æœˆä»½æ ¼å¼ä¸æ­£ç¡®'),
(errorCodes.zh[1284] = 'jetID å‚æ•°æ ¼å¼ä¸æ­£ç¡®'),
(PayCometIframe.prototype = {
  constructor: PayCometIframe,
  placeOnElement: function (e) {
    return (
      (this.div = document.getElementById(e)),
      this.div.appendChild(this.iframe),
      this
    );
  },
  setStyle: function (e) {
    return (this.style = e), this;
  },
  changeStyle: function () {
    return (
      this.style &&
          this.iframe.contentWindow.postMessage(
            'action:setStyle,' + this.style,
            postOrigin
          ),
      this
    );
  },
  setMask: function (e) {
    if (e > 0) {
      this.iframe.contentWindow.postMessage(
        'action:unsetMaskAndValidate',
        '*'
      );
      const r = document.getElementById('paycometPaymentForm');
      for (i = r.elements.length - 1; i >= 0; i -= 1) {
        (attribute = r.elements[i].attributes['data-paycomet']),
        r.elements[i].getAttribute('data-paycomet') == 'no-mask' &&
              r.elements[i].remove();
      }
    }
    return this;
  },
  sendValueToPanIframe: function () {
    this.iframe.contentWindow.postMessage(
      'action:sendValueToPanIframe',
      postOrigin
    );
  },
  addField: function (e, r) {
    e == 'apiID' && (e = 'jetID'),
    this.iframe.contentWindow.postMessage(
      'action:addField,' + e + ':' + r,
      postOrigin
    );
  },
  setLang: function (e) {
    this.iframe.contentWindow.postMessage('action:setLang,' + e, postOrigin);
  }
}),
(MessageHandlerForm.prototype = {
  constructor: MessageHandlerForm,
  executeAction: function () {
    return typeof this[this.action] === 'function'
      ? this[this.action]()
      : 'KO';
  },
  ready: function () {
    switch (this.data) {
      case 'cvc2':
        cvc2Iframe.changeStyle();
        break;
      case 'pan':
        panIframe.changeStyle();
        var e = 0;
        var r = document.getElementById('paycometPaymentForm');
        for (i = r.elements.length - 1; i >= 0; i -= 1) {
          (attribute = r.elements[i].attributes['data-paycomet']),
          r.elements[i].getAttribute('data-paycomet') == 'no-mask' &&
                (e = 1);
        }
        panIframe.setMask(e);
    }
  },
  setValue: function () {
    const e = this.data.split(':');
    const r = e[0];
    const o = e[1];
    return r == 'cvc2' && panIframe.addField('cvc2', o), !1;
  },
  sendValueToPanIframe: function () {
    return panIframe.addField('cvc2', this.data), !1;
  },
  handleApiResponse: function () {
    const e = JSON.parse(this.data);
    const r = document.getElementById('paycometPaymentForm');
    if (
      ((document.getElementById('paymentErrorMsg').innerHTML = ''),
      e.errorID !== 0 || e.paytpvToken === '')
    ) {
      document.getElementById('paymentErrorMsg').innerHTML = e.errorText;
      const o = r.getElementsByTagName('button');
      for (n = 0; n < o.length; n++) o[n].disabled = !1;
    } else {
      const t = document.getElementsByName('paytpvToken');
      if (t.length) {
        t[0].value = e.paytpvToken;
      } else {
        const a = document.createElement('input');
        (a.type = 'hidden'),
        (a.name = 'paytpvToken'),
        (a.value = e.paytpvToken),
        r.appendChild(a);
      }
      for (
        var s = document.getElementsByClassName('pc_ifv'), n = 0;
        n < s.length;
        n++
      ) { r.removeChild(s[n]); }
      r.submit();
    }
  },
  displayLocalValidationError: function () {
    document.getElementById('paymentErrorMsg').innerHTML = this.data;
    const e = document
      .getElementById('paycometPaymentForm')
      .getElementsByTagName('button');
    for (i = 0; i < e.length; i++) e[i].disabled = !1;
  }
}),
(window.onmessage = function (e) {
  (mHandler = new MessageHandlerForm(e)), (result = mHandler.executeAction());
}),
document.currentScript == null &&
    (disableForm(),
    showErrors(
      'Este navegador no es compatible con este sistema de pago. Por favor utilice las versiones mÃ¡s actualesde cualquiera de los siguientes navegadores: Chrome, Firefox, Edge, Safari u Opera.'
    ),
    document
      .getElementById('paycomet-pan')
      .parentNode.removeChild(document.getElementById('paycomet-pan')),
    document
      .getElementById('paycomet-cvc2')
      .parentNode.removeChild(document.getElementById('paycomet-cvc2')));
const paymentForm = document.getElementById('paycometPaymentForm');
const submitButton = paymentForm.querySelector('input[type="submit"]');
let panStyle = ((lang = getLang()), '');
let cvc2Style = '';
let originalPanInput = !1;
let originalcvc2Input = !1;
const originalInputs = document.getElementsByTagName('input');
for (i = 0; i < originalInputs.length; i++) {
  switch (originalInputs[i].getAttribute('paycomet-name')) {
    case 'pan':
      (originalPanInput = originalInputs[i]),
      (panStyle = originalInputs[i].getAttribute('paycomet-style'));
      break;
    case 'cvc2':
      (originalcvc2Input = originalInputs[i]),
      (cvc2Style = originalInputs[i].getAttribute('paycomet-style'));
  }
}
function prepareSubmit () {
  const e = document.getElementById('paycometPaymentForm');
  const r = e.getElementsByTagName('button');
  for (i = 0; i < r.length; i++) r[i].disabled = !0;
  for (panIframe.setLang(lang), i = e.elements.length - 1; i >= 0; i -= 1) {
    if (
      ((attribute = e.elements[i].attributes['data-paycomet']),
      typeof attribute !== 'undefined' &&
        attribute !== null &&
        attribute !== '')
    ) {
      const o = e.elements[i].getAttribute('data-paycomet');
      const t = e.elements[i].value;
      panIframe.addField(o, t);
    }
  }
  cvc2Iframe.sendValueToPanIframe();
}
function showErrors (e) {
  return (document.getElementById('paymentErrorMsg').innerHTML = e), !1;
}
function removeErrors () {
  document.getElementById('paymentErrorMsg').innerHTML = '';
}
function getUrlVars () {
  const t = {};
  document.currentScript.src.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (e, r, o) {
      t[r] = o;
    }
  );
  return t;
}
function getLang () {
  return document.currentScript.src.indexOf('lang') > -1
    ? getUrlVars().lang
    : document.currentScript.src.indexOf('language') > -1
      ? getUrlVars().language
      : 'es';
}
function disableForm () {
  for (
    let e = document
        .getElementById('paycometPaymentForm')
        .getElementsByTagName('*'),
      r = 0;
    r < e.length;
    r++
  ) { e[r].disabled = !0; }
}
(panIframe = new PayCometIframe({
  src: paIframeUrl,
  id: 'paycomet_ifr_panumber',
  frameborder: '0',
  scrolling: 'no',
  width: '100%',
  height: '100%'
})),
(cvc2Iframe = new PayCometIframe({
  src: cvc2IframeUrl,
  id: 'paycomet_ifr_panumber',
  frameborder: '0',
  scrolling: 'no',
  width: '100%',
  height: '100%'
})),
panIframe.placeOnElement('paycomet-pan').setStyle(panStyle),
cvc2Iframe.placeOnElement('paycomet-cvc2').setStyle(cvc2Style),
originalPanInput.parentNode.removeChild(originalPanInput),
originalcvc2Input.parentNode.removeChild(originalcvc2Input),
document
  .getElementById('paycometPaymentForm')
  .addEventListener('submit', function (e) {
    e.preventDefault(), prepareSubmit();
  });
