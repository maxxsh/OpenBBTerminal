"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),b=o,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||s;return a?r.createElement(m,n(n({ref:t},p),{},{components:a})):r.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},14254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const s={title:"fp",description:"OpenBB Terminal Function"},n="fp",i={unversionedId:"reference/crypto/nft/fp",id:"reference/crypto/nft/fp",title:"fp",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/nft/fp.md",sourceDirName:"reference/crypto/nft",slug:"/reference/crypto/nft/fp",permalink:"/terminal/reference/crypto/nft/fp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/nft/fp.md",tags:[],version:"current",frontMatter:{title:"fp",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"collections",permalink:"/terminal/reference/crypto/nft/collections"},next:{title:"stats",permalink:"/terminal/reference/crypto/nft/stats"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fp"},"fp"),(0,o.kt)("p",null,"Display floor price of a certain NFT collection. ","[Source: https://nftpricefloor.com/]"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"fp -s SLUG\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slug"),(0,o.kt)("td",{parentName:"tr",align:null},"-s  --slug"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT floor price collection slug (e.g., bored-ape-yacht-club)"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"wicked-craniums, hyperhash-art-blocks-curated, official-moar-by-joan-cornella, ecumenopolis-art-blocks-playground, supducks, neo-tokyo-identities, ether-orcs, mooncats, cryptopunks, mfers, grifters-by-xcopy, meebits, avastars, tom-sachs-rockets, akuma-origins, plasma-bears, rtfkt-mnlth, akutars, eightbitme, shinsei-galverse, gh0stly-gh0sts, ragnarok-meta, mcgoblinwtf, foxfam, joyworld-joys, milady, the-blocks-of-art-art-blocks-curated, scribbled-boundaries-art-blocks-curated, dooplicator, 27-bit-digital-art-blocks-curated, 720-minutes-art-blocks-curated, aerial-view-art-blocks-curated, autoglyphs, algobots-art-blocks-curated, apparitions-art-blocks-curated, bubble-blobby-art-blocks-curated, geometry-runners-art-blocks-curated, squiggly, singularity-art-blocks-curated, unigrids-art-blocks-curated, metahero-universe-generative, archetype-art-blocks-curated, trossets-art-blocks-curated, collectvox, veefriends, forgotten-runes-wizards-cult, cool-cats, the-vogu-collective, foustlings, algorhythms-art-blocks-curated, the-potatoz, metasaurs, bored-ape-kennel-club, renga, gener8tive-k-compositions, the-shiboshis, gen-art-membership, deadfellaz, gevols, neo-tokyo-part-3-item-caches, blitmap, bears-deluxe, jungle-freaks-by-trosley, 888-inner-circle, wolf-game, voxies, neo-tokyo-part-4-land-deeds, nimbuds-art-blocks-curated, subscapes-art-blocks-curated, chill-frogs, creepz-genesis, poap, sappy-seals, pulsquares, chimera-art-blocks-curated, Decentraland, pudgy-penguins, joy-girls-club, asm-aifa-genesis, jrny-nft-club, party-ape-billionaire-club, incognito, cyberbrokers, chain-runners, dotdotdots, wicked-ape-bone-club, etheria, proof-collective, bapetaverse-official, dynamic-slices-art-blocks-curated, shinsekaicorp, murakami-flowers, the-yakuza-cats-society, space-punks-club, veefriends-series-2, v1-cryptopunks-wrapped, supernormalbyzipcy, frammenti-art-blocks-curated, lostsamurise, adidas-virtual-gear-genesis, framergence, the-cryptodads, adidas-for-prada, alicia-freeman-designs, enlightenment, kleee02, renga-black-box, purrnelopes-country-club, haki-nft, tiny-dinos, quantum-key, arcade-land, impostors-genesis-aliens, los-muertos-world, everai-heroes-duo, factura-by-mathias-isaksen, dreams-art-blocks-curated, construction-token-art-blocks-curated, byopills, crypto-bull-society, cupcats-official, galaxy-eggs, gutter-dogs, spooky-boys-country-club, the-art-of-seasons, beeple-everydays, elevated-deconstructions-art-blocks-curated, sorare, we-are-all-going-to-die, loot, uninterested-unicorns, mekaverse, premint-collector-pass, cryptoblots-art-blocks-curated, the-association-nft, chimpers-nft, cosmic-reef-art-blocks-curated, meridian-art-blocks-playground, phototaxis-art-blocks-playground, paper-armada-art-blocks-playground, treeverse, time-pieces-build-a-better-future, doodles, genesis-art-blocks-curated, beeple-genesis-collection, jadu-jetpack, galacticapes, digidaigaku, winter-bears, cryptoskulls, decentraland_names, raidparty-fighters, adidas-originals-capsule-collection, 10ktf, asm-brains, galaxy-fight-club, curio-cards, fluf-world, the-littles-nft, dodgers-mlb-crypto, vaynersports-pass-vsp, elementals-art-blocks-curated, screens-art-blocks-curated, memories-of-qilin-art-blocks-curated, colorspace-art-blocks-curated, flux-art-blocks-curated, anticyclone-art-blocks-curated, the-humanoids, ignition-art-blocks-curated, inspirals-art-blocks-curated, lonely-alien-space-club, spectron-art-blocks-curated, synapses-art-blocks-curated, watercolor-dreams-art-blocks-curated, glitch-crystal-monsters-art-blocks-curated, pigments-art-blocks-curated, endless-nameless-art-blocks-curated, sneaky-vampire-syndicate, bastard-gan-punks-v2, damien-hirst-the-currency, coolmans-universe, creepz-reptile-armoury, rhythm-art-blocks-playground, smilesssvrs, the-alien-secret-society, space-doodles, wavelength, furballs, killergf, nina-s-super-cool-world, monaco-planet-yacht, crypto-cannabis-club, thorguards, punks-comic, tirli, karafuru, cryptocoven, wizards-dragons-game, the-doge-pound, creature-world, phase-art-blocks-curated, cryptoadz, monkey-bet-dao, divine-anarchy, fang-gang, moonbirds-oddities, onchainmonkey, superlative-secret-society, alien-insects-art-blocks-playground, cryptoon-goonz, isekai-meta, fidenza-art-blocks-curated, io-imaginary-ones, animetas, ape-gang, habbo-avatars, al-cabones, rektguy, cryptodickbutts, playboy-rabbitars-official, first-first-nfts, ether-cards-founder, goop-troop, fvck-crystal, 8liens, gutter-rats, stoner-cats, bubblegum-kids, the-official-surreals, fusion-by-hideki-tsukamoto, where-my-vans-go, kiwami-genesis, the-alien-boy, tubby-cats, lives-of-asuna, 1111-by-kevin-abosch, cryptobatz-by-ozzy-osbourne, defy-genesis-masks, polygonpunks, invisible-friends, headdao, dourdarcels, peculiar-gang, apostles-genesis, fluf-world-thingies, gutter-pigeons, world-of-women, realms-for-adventurers, generativemasks, crypto-pills-by-micha-klein, heaven-computer, cryptomories, capsule-house, timeless-characters, aww-friends, waifusion, swampverse, bored-mummy-waking-up, fragments-of-an-infinite-field-art-blocks-curated, ancient-courses-of-fictional-rivers-art-blocks-curated, shitbeast, mutant-garden-seeder, cyberkongz-genesis, collectvoxmirandus, azuki, salt-v4, satoshibles, uwucrew, neo-tokyo-outer-identities, genuine-ardvark, lightspeed-lads, otherdeed, the-n-project, the-wanderers, the-blitnauts, 0n1-force, cyberkongz-vx, adidas-originals-into-the-metaverse-phase-1-and-2, portal-art-blocks-playground, the-saudis-nft, goatz, mr-crypto-by-racksmafia, animonkeys, anonymice-breeding, song-a-day, corruption-s, boki-nft, podgans-braindrops, dino-pals-art-blocks-factory, solos, deafbeef, anonymice, gazers, sipherian-surge, phantabear, prime-ape-planet-pap, creepz-shapeshifterz, muri-haus, cryptocubes, fast-food-punks, ack-unique-editions, fomoverse, hapeprime, alienfrensnft, color-study-art-blocks-playground, the-minds-eye, drip-squad, avatar-rock-out, the-senses, derace-horses, rojom, ape-kids-club, world-of-women-galaxy, og-crystals, angry-ape-army, cryptotrunks, solvency, bored-ape-yacht-club, lazy-lions, rumble-kong-league, wonderpals, apes-in-space, yolo-holiday, the_sandbox, adidas-wagmi-united, natsukashii, mlb-champions, wearing-your-emotion, imaginatation-station, treasure-of-ophiel, spooky-season-poieeeyee, conall-in-space, crypto-unicorns, the-sevens, proof-moonbirds, eulerbeats-genesis-original, bald-tuesdays, cute-snacks, nouns, party-degenerates, rug-radio-genesis-nft, loomlocknft, skulptuur-art-blocks-curated, letswalk, entretiempos-art-blocks-curated, obits, koin-games-dev-squad, metahero-universe-core-identities, para-bellum-art-blocks-curated, ainightbirds, decentraland_wearables, revenants-by-alethea-ai, dapper-dinos-nft, meme-team, tfoust10, celestial-assembly, gettin-groovy, alien-clock-art-blocks-playground, creatures-of-the-nighties, earth-to-planet, chumbi-valley, 5-boro-bodega, genesis-braindrops, mutant-cats, avidlines, rareapepeyachtclub, royal-society-of-players, smallbros, adam-bomb-squad, fomo-dog-club, ikb-cachet-de-garantie, zombieclub-token, koala-intelligence-agency, edifice, puzzled-panther, protectors-of-the-forest, cute-cool-and-creepy, the-singularity, vortex, bored_ape_chemistry_club, bulls-on-the-block, ghostsproject, hausphases, robotos, deadheads, gutter-cat-gang, doodle-collection, beeple-spring-summer-collection, nftrees, merge, slotie-nft, crypto-stamp, deez-nuts, stepn-shoeboxes, beanz-official, ringers-art-blocks-curated, i-quit-my-job-to-be-an-artist, bent, autology, rituals, magic-of-the-woods, bodegacatceo, the-fatty-bagz, old-school-cool, stutter-void, tandizojere, the-eternal-pump, boss-beauties, impact-theory-founders-key, nifty-league-degens, clonex, pegz, fewocious-x-rtfkt, meta-legends, lil-heroes-by-edgar-plans, worldwide-webb-land, aylia, the-butterfly-garden, canetoonist, nft-worlds, chainfaces, lobsterdao, desperate-ape-wives, neo-tokyo-part-2-vault-cards, cryptoarte, creatures-without-pants, backed-goods-&-evils, growl-gang, chromie-squiggle-art-blocks-curated, parallel-alpha, qql-mint-pass, peaceful-groupies, cryptovoxels, oana193, exosama-expect-chaos, substantial-law-910, genuine-undead-nft, baby-doge-army, hoppy-doodle, drag-queens-of-big-gay-baby, automatism-art-blocks-factory, dystopunks, boonji-project, laura-dumitriu, century-art-blocks-curated, mind-the-gap-by-mountvitruvius, looki, hedz-by-matt-furie, beeple-5000-days-collection, max-pain-and-frens-by-xcopy, 0xMons, worst-twitch-ever, gambling-apes, plasticity-by-p4stoboy, sidus-nft-heroes, avire-nft, rtfkt-x-rimowa, fewoworld-paint-nft, raunchy-rancor, inft-personality-pod-by-alethea-ai, mask-world-nft, doge-pound-puppies, eando9745, game-of-thrones-nft-the-north-series-1-avatars, catharsis-by-dario-lanza, bites-of-brazil, rinascita, art-gobblers, koripo-by-rich-poole, nike-rtfkt-cryptokicks-dunk-genesis, colorglyphs, 3landers, nike-monolith, game-of-thrones-the-north-series-1-hero-box, metroverse-genesis, ledger-market-pass-genesis-edition, psychedelics-anonymous-genesis, nike-ar-hoodie-rtfkt, cool-pets-nft, wolf-game-land, crypto-chicks, kaiju-kingz, goblintownwtf, valhalla, broadside, jiometory-no-compute-art-blocks-curated, wolf-game-farmer, sys32template, cometh-spaceships-nft, fancy-bears, dubbl3bee, mimic-shhans, mutant-ape-yacht-club, fmarxy, cool-cats-football-club, metabillionaire, wolf-game-wool-pouch, akumu-dragonz, sail-o-bots-art-blocks-factory, kpr-keepers-nft, hashmasks, ethermore, porsche-911-nft, toshies-nft, feetpix-wtf, sewer-pass-nft, grailers-dao, c-01-official-collection-nft, checks-vv-edition, nessgraphics, kpr, light-years-by-dmitri-cherniak, grails-iii, qql, joyworld-joytoys, skinvial-evox-nft, opepen-edition-nft, rtfkt-capsule-space-drip-1-2, byovape, trump-nft-digital-trading-cards, byokey, rtfkt-capsule-space-drip, space-drip-forging-rtfkt-space-drip-x-nike-air-force-1, byoland, dreamscapes-by-xander-steenbrugge, 10ktf-stockroom, brain-loops-by-gene-kogan, nftiff, joyworld-joysmilies, byocraft, confluence-by-devi-parikh, blvckgenesis, friendship-bracelets-by-alexis-andre, rtfkt-egg-animus, finiliar, mutant-hound-collars, mv3-nft, kanpai-pandas, cockpunch-nft, the-memes-by-6529, 3d-invisible-friends, asemica, lil-pudgys, pudgy-rods, degentoonz-collection, jordi-molla-masks, smowl, lil-nouns, thecaptainz")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43375532/186253073-e50643be-391f-4aa4-949b-946b2d000f38.png",alt:"fp command"})),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);