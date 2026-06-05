// ─── NAME DATABASE (verbatim from teowaits/TwinNames — DO NOT EDIT) ──────────
const NAME_DB = {
  italy:   { label: "🇮🇹 Italy (ISTAT 2023)",    flag: "🇮🇹", name: "Italy",
    male:    ["Leonardo","Edoardo","Tommaso","Francesco","Alessandro","Mattia","Lorenzo","Gabriele","Riccardo","Andrea","Matteo","Luca","Marco","Davide","Filippo","Pietro","Giovanni","Giacomo","Nicolo","Stefano","Federico","Antonio","Emanuele","Simone","Roberto","Alberto","Raffaele","Diego","Samuele","Daniele","Cristian","Elia","Gioele","Ludovico","Damiano","Martino","Tobia","Agostino","Guglielmo","Carlo","Ciro","Brando","Flavio","Aldo","Enrico","Giulio","Ivan","Giorgio","Claudio","Massimo","Vincenzo","Salvatore","Bruno","Sergio","Angelo","Dario","Fabrizio","Gianluca","Mauro","Paolo","Piero","Renato","Romeo","Ruggero","Sandro","Silvio","Ugo","Valerio"],
    female:  ["Sofia","Aurora","Ginevra","Vittoria","Giulia","Beatrice","Ludovica","Alice","Emma","Matilde","Anna","Chiara","Martina","Sara","Elisa","Elena","Francesca","Laura","Valentina","Alessia","Federica","Silvia","Camilla","Eleonora","Giorgia","Serena","Viola","Noemi","Mia","Gaia","Chloe","Arianna","Margherita","Azzurra","Rachele","Rebecca","Irene","Letizia","Nina","Zoe","Flavia","Cristina","Rossella","Alessandra","Angela","Barbara","Cecilia","Daniela","Eva","Gemma","Ilaria","Jessica","Katia","Lisa","Monica","Nadia","Ornella","Patrizia","Roberta","Sabrina","Tiziana","Ursula","Valeria","Viviana","Wanda","Lucia"],
    neutral: ["Andrea","Luca","Alex","Nico","Remy","Robin","Sam","Sasha","Morgan","Ariel","Noel","Jean","Rene"] },

  spain:   { label: "🇪🇸 Spain (INE 2023)",      flag: "🇪🇸", name: "Spain",
    male:    ["Lucas","Mateo","Hugo","Martin","Daniel","Pablo","Alejandro","Adrian","David","Marcos","Miguel","Alvaro","Diego","Carlos","Sergio","Javier","Antonio","Manuel","Jesus","Francisco","Jose","Pedro","Juan","Oscar","Ruben","Raul","Hector","Ivan","Roberto","Rodrigo","Gonzalo","Alberto","Rafael","Agustin","Andres","Borja","Cristobal","Eduardo","Fernando","Guillermo","Jaime","Joaquin","Leonardo","Luis","Nacho","Nicolas","Oliver","Salvador","Teodoro","Valentin","Victor","Xavier","Yago","Ignacio","Lorenzo","Mario","Tomas","Ramon","Simon","Emilio","Felipe","German","Isidro"],
    female:  ["Lucia","Sofia","Maria","Martina","Paula","Valentina","Julia","Emma","Daniela","Sara","Carla","Alba","Noa","Claudia","Andrea","Elena","Isabel","Laura","Ana","Carmen","Cristina","Marta","Beatriz","Rocio","Lola","Teresa","Pilar","Rosa","Natalia","Patricia","Silvia","Alicia","Raquel","Miriam","Irene","Clara","Lidia","Nuria","Alejandra","Ainhoa","Esther","Lorena","Yolanda","Veronica","Aitana","Celia","Ines","Laia","Amelia","Blanca","Constanza","Diana","Florencia","Gloria","Helena","Jimena","Katia","Leonor","Marisol","Nadia","Olga","Penelope"],
    neutral: ["Alex","Nico","Andrea","Remi","Sasha","Morgan","Robin","Noel","Rene","Ariel","Sam","Jordan","Cam"] },

  usa:     { label: "🇺🇸 USA (SSA 2023)",         flag: "🇺🇸", name: "USA",
    male:    ["Liam","Noah","Oliver","James","Elijah","Mateo","Theodore","Henry","Lucas","William","Benjamin","Aiden","Sebastian","Jack","Ezra","Owen","Leo","Mason","Ethan","Logan","Carter","Levi","Jackson","Julian","Hudson","Grayson","Wyatt","Gabriel","Lincoln","Josiah","Eli","Jaxon","Xavier","Caleb","Asher","Ryan","Nathan","Adrian","Miles","Easton","Jace","Evan","Cole","Cooper","Nolan","Landon","Jeremiah","Axel","Aaron","Austin","Charles","Dominic","Dylan","Emmett","Felix","Gavin","Grant","Greyson","Harrison","Hunter","Ian","Isaiah","Jasper","Jordan","Kyle","Luke","Max","Nicholas","Oscar","Parker","Quinn","Reid","Sawyer","Silas","Tyler","Victor","Zane"],
    female:  ["Olivia","Emma","Charlotte","Amelia","Sophia","Mia","Isabella","Ava","Evelyn","Luna","Harper","Camila","Sofia","Eleanor","Elizabeth","Violet","Scarlett","Emily","Hazel","Lily","Gianna","Aurora","Penelope","Riley","Zoey","Nora","Hannah","Layla","Brooklyn","Natalie","Zoe","Leah","Savannah","Audrey","Bella","Maya","Valentina","Claire","Stella","Ellie","Samantha","Maria","Victoria","Willow","Kinsley","Naomi","Paisley","Nyla","Caroline","Genesis","Aaliyah","Kennedy","Sadie","Autumn","Hailey","Eliana","Ivy","Ariana","Arianna","Delilah","Jade","Kylie","Leilani","Lillian","Lucy","Mackenzie","Madelyn","Natalia","Peyton","Serenity","Skylar","Vivienne"],
    neutral: ["Jordan","Riley","Quinn","Morgan","Avery","Peyton","Reese","Finley","Rowan","Sage","River","Skyler","Emerson","Phoenix","Hayden","Jessie","Casey","Jamie","Taylor","Cameron","Bailey","Drew","Blake","Charlie","Dakota","Ellis","Frankie","Harley","Jesse","Kendall","Lee","Lynn","Micah","Parker","Reagan","Remy","Robin","Ryan","Sam","Shannon","Shawn","Sidney","Spencer","Tatum","Terry","Tracy","Tyler","Whitney","Alex","Alexis"] },

  uk:      { label: "🇬🇧 UK (ONS 2023)",          flag: "🇬🇧", name: "UK",
    male:    ["Noah","Oliver","George","Arthur","Muhammad","Leo","Harry","Oscar","Archie","Henry","Theodore","Freddie","Alfie","Charlie","Theo","Finley","Reuben","Ezra","Tommy","Elijah","Jack","Luca","Ethan","William","Hugo","Jude","Thomas","Arlo","Liam","Mason","Adam","Alexander","Dylan","Felix","Finn","Frankie","Hamza","Harrison","Hudson","Ibrahim","Isaac","Jacob","Jamie","Jasper","Jensen","Joshua","Kai","Louie","Luke","Marcus","Max","Monty","Remy","Rory","Rupert","Ryan","Samuel","Sebastian","Seth","Stanley","Tobias","Victor","Xavier","Zach","Caleb","Cole","Daniel","Elliot","Evan","Gabriel","Grayson"],
    female:  ["Olivia","Amelia","Isla","Ava","Ivy","Freya","Lily","Florence","Mia","Willow","Isabella","Sophia","Poppy","Daisy","Aurora","Grace","Sienna","Elsie","Violet","Rosie","Ella","Alice","Arabella","Aria","Bonnie","Chloe","Darcy","Eliza","Ellie","Eva","Evelyn","Evie","Felicity","Georgia","Gracie","Hannah","Harriet","Imogen","Iris","Jasmine","Jessica","Layla","Lola","Lucy","Luna","Maisie","Maya","Megan","Millie","Molly","Niamh","Nora","Phoebe","Remi","Rose","Ruby","Scarlett","Sophie","Stella","Summer","Thea","Zara","Zoe","Abigail","Amber","Beatrice","Clara","Claudia","Eleanor","Elizabeth","Emma","Faith","Holly"],
    neutral: ["Remi","Rowan","Kai","Finley","Morgan","Robin","River","Sage","Ash","Blair","Brett","Cameron","Casey","Chris","Drew","Ellis","Emery","Frankie","Hayden","Indigo","Jax","Jesse","Jude","Kit","Lake","Lark","Lee","Logan","Luca","Marlow","Max","Milan","Nico","Ocean","Parker","Quinn","Reed","Ren","Riley","Robin","Ryan","Sam","Scout","Sky","Sloane","Sol","Stone","Storm","Sully","Sunny","Tate","Waverly","Winter","Wren","Zephyr"] },

  france:  { label: "🇫🇷 France (INSEE 2023)",    flag: "🇫🇷", name: "France",
    male:    ["Gabriel","Leo","Raphael","Louis","Arthur","Lucas","Adam","Hugo","Nathan","Theo","Mathis","Enzo","Tom","Alexis","Clement","Baptiste","Maxime","Nicolas","Pierre","Thomas","Antoine","Julien","Victor","Noe","Mathieu","Romain","Tristan","Valentin","Simon","Benoit","Charles","Cyril","Damien","Edouard","Florian","Guillaume","Kevin","Laurent","Loic","Luc","Mael","Mehdi","Mickael","Quentin","Remi","Samuel","Sebastien","Stephane","Thibault","Yann","Zacharie","Alexandre","Antonin","Arnaud","Axel","Benjamin","Cedric","Corentin"],
    female:  ["Emma","Jade","Louise","Alice","Chloe","Ines","Lea","Manon","Lucie","Camille","Sarah","Lola","Zoe","Lena","Pauline","Clara","Juliette","Margot","Laura","Marie","Ambre","Amelia","Anais","Charlotte","Elisa","Elise","Eloise","Eva","Gaelle","Heloise","Jeanne","Josephine","Justine","Laurie","Laure","Lisa","Maeva","Maelys","Margaux","Marion","Mathilde","Maud","Melanie","Morgane","Nadia","Nathalie","Noemie","Oceane","Olivia","Ophelie","Romane","Rose","Roxane","Sabrina","Salome","Sandy","Soline","Stephanie","Tina","Yasmine","Lucia"],
    neutral: ["Camille","Claude","Dominique","Maxime","Morgan","Noel","Rene","Robin","Sam","Sacha","Alex","Alexis","Charlie","Dany","Jules","Kim","Luc","Nico","Pat","Remy","Sandy","Sasha","Val","Yann"] },

  germany: { label: "🇩🇪 Germany (GfdS 2023)", flag: "🇩🇪", name: "Germany",
    male:    ["Noah","Matteo","Leon","Elias","Paul","Ben","Jonas","Finn","Felix","Luca","Luis","Julian","Maximilian","Lukas","Johannes","Alexander","Niklas","Jan","David","Tobias","Sebastian","Tim","Dominic","Moritz","Fabian","Simon","Stefan","Christian","Marcel","Daniel","Patrick","Michael","Philipp","Andreas","Klaus","Thomas","Wolfgang","Gunter","Heinz","Werner","Rudolf","Horst","Frank","Bernd","Herbert","Dieter","Karl","Hans","Fritz","Otto","Ernst","Wilhelm","Friedrich","Heinrich","Bernhard","Leopold","Konrad","Gottfried","Alfred","Egon","Erwin","Gerhard","Harald","Hartmut","Helmut","Hermann","Hugo"],
    female:  ["Emilia","Mia","Sophia","Emma","Hannah","Mila","Lina","Lena","Leonie","Anna","Maria","Laura","Lea","Julia","Nina","Jana","Nele","Lisa","Marie","Sarah","Sophie","Stefanie","Sabine","Claudia","Sandra","Andrea","Petra","Monika","Martina","Christina","Katrin","Karin","Brigitte","Renate","Ursula","Ingrid","Christa","Gisela","Gerda","Hildegard","Helga","Ilse","Lieselotte","Liesel","Luise","Margarete","Mathilde","Rosemarie","Waltraud","Elfriede","Frieda","Hedwig","Klara","Lotte","Lucie","Magdalena","Marlene","Marta","Ruth","Thea"],
    neutral: ["Alex","Kim","Nico","Robin","Sasha","Sam","Chris","Kai","Jean","Morgan","Quinn","Riley","Taylor","Jordan","Casey","Charlie","Dana","Drew","Emery","Frankie","Hayden","Jesse","Lee","Leslie","Lynn","Parker","Pat","Remy","Rene","Sandy","Skylar","Sky","Sol","Sunny","Toni","Val","Wren","Yuki"] },

  sweden:  { label: "🇸🇪 Sweden (SCB 2023)",       flag: "🇸🇪", name: "Sweden",
    male:    ["William","Lucas","Liam","Noah","Oliver","Elias","Oscar","Hugo","Axel","Elliot","Alexander","Erik","Emil","Adam","Isak","Filip","Noel","Viktor","Edvin","Albin","Felix","Anton","Gustav","Arvid","Pontus","Rasmus","Simon","Marcus","Mattias","Johan","Anders","Bjorn","Carl","Claes","David","Fredrik","Goran","Gunnar","Hans","Henrik","Joakim","Jonas","Karl","Lars","Lennart","Magnus","Martin","Michael","Mikael","Nils","Patrik","Per","Peter","Robert","Rolf","Sven","Thomas","Tobias","Tommy","Ulf","Urban","Walter","Waldemar"],
    female:  ["Alice","Maja","Ella","Elsa","Astrid","Wilma","Julia","Alma","Stella","Linnea","Klara","Ebba","Freja","Ida","Elin","Sofia","Emma","Sara","Agnes","Nora","Hanna","Emilia","Saga","Lina","Olivia","Vera","Signe","Ines","Sigrid","Tuva","Solveig","Matilda","Frida","Karin","Malin","Anna","Annika","Birgitta","Christina","Eva","Gunilla","Inga","Ingrid","Kristina","Lena","Lotta","Margareta","Maria","Marie","Monika","Petra","Pia","Ulrika","Susanna","Therese","Tina","Ulla","Yvonne","Lucia"],
    neutral: ["Elliot","Kim","Robin","Sasha","Saga","Alex","Nico","Morgan","Sam","Charlie","Emre","Erin","Frankie","Hayden","Jesse","Jordan","Kai","Lee","Logan","Milan","Noel","Parker","Quinn","Reed","Remy","Riley","River","Ryan","Sandy","Scout","Skye","Sol","Sonny","Storm","Sunny","Tate","Val","Wren","Yuki","Zephyr"] },

  canada:  { label: "🇨🇦 Canada (StatCan 2023)",   flag: "🇨🇦", name: "Canada",
    male:    ["Liam","Noah","Oliver","Benjamin","Elijah","Lucas","William","Henry","Jack","James","Theodore","Leo","Owen","Ethan","Logan","Sebastian","Aiden","Jayden","Carter","Mason","Hudson","Ezra","Wyatt","Grayson","Gabriel","Asher","Julian","Luca","Mateo","Maverick","Finn","Zach","Nolan","Declan","Emmett","Gavin","Beau","Chase","Dallas","Dax","Dillon","Easton","Eli","Elliot","Evan","Flynn","Grant","Greyson","Harley","Heath","Hunter","Jackson","Jake","Jasper","Jaxon","Jensen","Jude","Justin","Kai","Kieran","Lane","Lennon","Lincoln","Luke","Marshall","Max","Miles","Milo","Nate","Nico","Orion"],
    female:  ["Olivia","Emma","Charlotte","Amelia","Sophia","Mia","Ava","Isabella","Evelyn","Harper","Lily","Luna","Ella","Scarlett","Abigail","Chloe","Zoey","Penelope","Grace","Victoria","Eleanor","Nora","Layla","Hazel","Violet","Aurora","Claire","Ellie","Stella","Natalie","Zoe","Eva","Maya","Camila","Riley","Hannah","Avery","Sofia","Aria","Alexa","Alyssa","Anna","Bella","Brooke","Delaney","Diana","Eden","Elena","Eliana","Emily","Fiona","Freya","Gianna","Hailey","Haven","Isla","Ivy","Jade","Juliet","Juliette","June","Kate","Kayla","Kendall","Kylie","Laila","Lila","Lucy","Mackenzie","Madison","Maisie","Margaret"],
    neutral: ["Quinn","Riley","Morgan","Avery","Peyton","Finley","Rowan","Sage","River","Skyler","Emerson","Phoenix","Hayden","Cameron","Bailey","Drew","Blake","Charlie","Dakota","Ellis","Frankie","Harley","Jesse","Kendall","Lee","Logan","Marlow","Max","Micah","Nico","Parker","Reagan","Remy","Robin","Ryan","Sam","Sidney","Spencer","Tatum","Taylor","Tyler","Wren","Alex","Ash","Blair","Brett","Casey","Chris","Dani","Eddie","Evan","Fran","Gale","Hollis","Indy","Jay","Jules","Kai","Kit","Lake","Lark"] },

  ireland: { label: "🇮🇪 Ireland (CSO 2023)",     flag: "🇮🇪", name: "Ireland",
    male:    ["Jack","Noah","James","Rian","Oisín","Fionn","Tadhg","Liam","Cillian","Finn","Charlie","Conor","Seán","Patrick","John","Caelan","Jude","Oliver","Darragh","Harry","Cathal","Eoin","Oscar","Tommy","Cormac","Donnacha","Michael","Aaron","Ryan","Daniel","Luke","Ben","Dylan","Shane","Ronan","Theo","Callum","Ruairí","Colm","Brendan","Diarmuid","Lorcan","Naoise","Hugh","Rory","Leo","Max","Jamie","Adam","Evan","Eoghan","Ciarán","David","Pádraig","Donal"],
    female:  ["Grace","Fiadh","Emily","Sophie","Lily","Ellie","Éabha","Caoimhe","Saoirse","Aoife","Róisín","Sadhbh","Erin","Annie","Niamh","Síofra","Lucia","Emma","Mia","Anna","Hannah","Olivia","Chloe","Charlotte","Amy","Sorcha","Sinéad","Ciara","Clodagh","Dearbhla","Eimear","Meabh","Muireann","Sienna","Sarah","Tara","Clara","Alice","Zoe","Leah","Orla","Nora","Maeve","Aisling","Imogen","Isla","Rose","Kate","Eva","Sofia","Ella","Abbie","Aoibhinn","Clíodhna","Fionnuala"],
    neutral: ["Alex","Charlie","Erin","Riley","Rory","Jamie","Morgan","Avery","Blake","Jordan","Sam","Casey","Quinn","Robin","Ash","Finley","Harley","Fia"] },

  brazil:  { label: "🇧🇷 Brazil (IBGE)",           flag: "🇧🇷", name: "Brazil",
    male:    ["Miguel","Arthur","Heitor","Davi","Lorenzo","Enzo","Gabriel","Guilherme","Matheus","Lucas","Nicolas","Samuel","Pedro","Bernardo","Victor","Caio","Rafael","Felipe","João","Leonardo","Diego","André","Bruno","Marcelo","Eduardo","Rodrigo","José","Francisco","Carlos","Paulo","Luiz","Marcos","Thiago","Vinícius","Gustavo","Ricardo","Fernando","Leandro","Alexandre","Roberto","Luciano","Renato","Fábio","Tiago","Igor","Otávio","Henrique","Emanuel","Murilo","Cauã","Ítalo","Giovani","Ravi","Théo","Bento"],
    female:  ["Alice","Sophia","Helena","Valentina","Laura","Isabella","Manuela","Júlia","Heloísa","Luísa","Lívia","Beatriz","Sofia","Giovanna","Clara","Fernanda","Camila","Larissa","Letícia","Natália","Gabriela","Rafaela","Vitória","Bruna","Amanda","Juliana","Mariana","Caroline","Aline","Maria","Ana","Francisca","Adriana","Patrícia","Sandra","Lara","Elisa","Rebeca","Isabela","Milena","Yasmin","Nathalia","Viviane","Raquel","Renata","Simone","Fabiana","Priscila","Vanessa","Luciana","Antônia","Eduarda","Lívia","Melissa","Cecília"],
    neutral: ["Alex","Ariel","Jordan","Robin","Sam","Noel","Morgan","Dani","Nico","Kim"] },

  netherlands: { label: "🇳🇱 Netherlands (SVB 2025)", flag: "🇳🇱", name: "Netherlands",
    male:    ["Noah","Liam","Luca","Sem","Mees","James","Lucas","Sam","Finn","Levi","Noud","Adam","Milan","Daan","Mats","Mason","Luuk","Guus","Bram","Olivier","Otis","Siem","Floris","Oliver","Teun","Tobias","Gijs","Morris","Benjamin","Moos","Elias","Owen","Boaz","Thomas","Joep","Julian","Jesse","Kai","Abel","Max","Hugo","Jens","Lio","Ted","Ties","Milo","David","Jan","Jake","Jack","Jip","Dean","Fedde","Jurre","Nolan","Willem","Samuel","Lars","Thijs","Tijn"],
    female:  ["Noor","Olivia","Nora","Julia","Mila","Sophie","Emma","Yara","Milou","Sara","Nina","Luna","Sofia","Tess","Lily","Zoë","Julie","Maeve","Saar","Mia","Anna","Lotte","Eva","Emily","Evi","Elin","Liv","Sarah","Lina","Maud","Sofie","Lieke","Lynn","Loïs","Nova","Isa","Livia","Lauren","Ella","Sophia","Romée","Noa","Fenna","Hannah","Ayla","Roos","Rosa","Yuna","Maya","Elena","Fleur","Jasmijn","Fien","Lara","Rosie","Isabella","June","Maria","Vera","Floor"],
    neutral: ["Robin","Charlie","Riley","Sky","Sasha","River","Beau","Rune","Lou","Teddy","Kaya","Marijn","Eden","Marley","Quinn","Sam","Mika","Jamie","Dani","Alex","Bo","Billie","Indy","Jules","Lux"] }
};

// ─── HELPERS (matching logic — verbatim) ─────────────────────────────────────
function norm(name) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function getNamesOfLength(country, gender, length) {
  const db = NAME_DB[country]; if (!db) return [];
  const pool = gender === "neutral" ? db.neutral : gender === "male" ? db.male : db.female;
  return pool.filter(n => norm(n).length === length);
}
function buildPool(countries, gender, length, universalOnly) {
  if (!countries.length) return [];
  const map = {};
  for (const c of countries) {
    for (const name of getNamesOfLength(c, gender, length)) {
      const key = norm(name);
      if (!map[key]) map[key] = { display: name, countries: [] };
      if (!map[key].countries.includes(c)) map[key].countries.push(c);
    }
  }
  let entries = Object.values(map);
  if (universalOnly && countries.length > 1)
    entries = entries.filter(e => e.countries.length === countries.length);
  return entries.sort(() => Math.random() - 0.5);
}
function pickEntry(pool, excluded) {
  return pool.find(e => !excluded.has(norm(e.display))) || null;
}
// Reroll helper (UI-only): pick a random entry different from the current one.
function pickRandom(pool, avoidNorm) {
  if (!pool.length) return null;
  const others = pool.filter(e => norm(e.display) !== avoidNorm);
  const src = others.length ? others : pool;
  return src[Math.floor(Math.random() * src.length)];
}

const COUNTRY_KEYS = Object.keys(NAME_DB);

Object.assign(window, { NAME_DB, norm, getNamesOfLength, buildPool, pickEntry, pickRandom, COUNTRY_KEYS });
