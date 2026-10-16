// Short venue labels for publication badges (al-folio style).
// A publication can override its badge with an `abbr` field in the CMS.
const RULES: [RegExp, string][] = [
  [/transactions on intelligent vehicles/i, 'IEEE T-IV'],
  [/transactions on industrial electronics/i, 'IEEE TIE'],
  [/transactions on sustainable energy/i, 'IEEE TSTE'],
  [/transactions on industry applications/i, 'IEEE TIA'],
  [/transactions on aerospace and electronic/i, 'IEEE TAES'],
  [/transactions on circuits and systems ii|circuits & systems ii/i, 'IEEE TCAS-II'],
  [/open journal of vehicular technology/i, 'IEEE OJVT'],
  [/electric power systems research/i, 'EPSR'],
  [/international journal of hydrogen energy/i, 'IJHE'],
  [/journal of energy storage/i, 'J. Energy Storage'],
  [/^energy and ai$/i, 'Energy & AI'],
  [/^energies$/i, 'Energies'],
  [/journal of power sources/i, 'J. Power Sources'],
  [/energy conversion and management/i, 'ECM'],
  [/renewable and sustainable energy reviews/i, 'RSER'],
  [/iet electrical systems in transportation/i, 'IET EST'],
  [/^energy efficiency$/i, 'Energy Effic.'],
  [/smart grids and sustainable energy/i, 'SGSE'],
  [/^array$/i, 'Array'],
  [/journal of web semantics/i, 'J. Web Sem.'],
  [/system assurance engineering/i, 'IJSAEM'],
  [/knowledge.based and intelligent|\bKES\b/i, 'KES'],
  [/vehicle power and propulsion|\bVPPC\b/i, 'IEEE VPPC'],
  [/\bPCIM\b/i, 'PCIM'],
  [/symposium de g[ée]nie [ée]lectrique|\bSGE\b/i, 'SGE'],
  [/agents and artificial intelligence|\bICAART\b/i, 'ICAART'],
  [/\bIECON\b|industrial electronics society/i, 'IEEE IECON'],
  [/\bEPE\b|power electronics and applications/i, 'EPE ECCE'],
  [/control, decision and information|\bCoDIT\b/i, 'CoDIT'],
  [/machine learning and applications|\bICMLA\b/i, 'IEEE ICMLA'],
  [/\bPEMD\b|power electronics, machines and drives/i, 'IET PEMD'],
  [/extraction et (la )?gestion des connaissances|\bEGC\b/i, 'EGC'],
  [/ecological vehicles and renewable|\bEVER\b/i, 'IEEE EVER'],
  [/\bNEWCAS\b/i, 'IEEE NEWCAS'],
  [/\bCISTEM\b/i, 'IEEE CISTEM'],
  [/systems, signals (&|and) devices|\bSSD\b/i, 'IEEE SSD'],
  [/\bPES\b.*general meeting|PESGM|PES GM/i, 'IEEE PESGM'],
  [/\bESARS\b|\bITEC\b/i, 'IEEE ITEC'],
  [/electric vehicular technology|\bICEVT\b/i, 'IEEE ICEVT'],
  [/micro air vehicle|\bIMAV\b/i, 'IMAV'],
  [/\bELECTRIMACS\b/i, 'ELECTRIMACS'],
  [/advanced automotive battery|\bAABC\b/i, 'AABC'],
  [/computational science/i, 'ICCS'],
  [/unmanned vehicle systems/i, 'IEEE UVS'],
  [/electrical machines|\bICEM\b/i, 'IEEE ICEM'],
  [/power engineering, energy|\bPOWERENG\b/i, 'POWERENG'],
  [/advanced technology in electronic/i, 'ICATEEE'],
  [/lecture notes in computer science/i, 'LNCS'],
];

export function venueAbbr(pub: { abbr?: string; venue?: string; type?: string }, typeLabel: string): string {
  if (pub.abbr) return String(pub.abbr);
  const venue = String(pub.venue || '');
  for (const [pattern, label] of RULES) if (pattern.test(venue)) return label;
  return typeLabel;
}
