import {
  LuActivity,
  LuBookOpen,
  LuBoxes,
  LuBrainCircuit,
  LuChartColumn,
  LuCircle,
  LuCode,
  LuCog,
  LuCompass,
  LuContact,
  LuCpu,
  LuFactory,
  LuFlame,
  LuGlobe,
  LuHammer,
  LuLanguages,
  LuLayers,
  LuLayoutGrid,
  LuOrbit,
  LuTruck,
  LuWallet,
  LuWrench,
} from 'react-icons/lu';
import { FaDiceD6, FaGraduationCap } from 'react-icons/fa6';

/**
 * Icônes react-icons (Lucide / Font Awesome) utilisées sur le site.
 * Remplacent les anciens fichiers SVG custom par des icônes vectorielles
 * attrayantes, colorées via `currentColor` (accent du thème).
 */
const map = {
  compass: LuCompass,
  sphere: LuOrbit,
  truss: LuBoxes,
  gear: LuCog,
  cnc: LuHammer,
  signal: LuActivity,
  dice: FaDiceD6,
  neurons: LuBrainCircuit,
  finance: LuWallet,
  code: LuCode,
  'grad-cap': FaGraduationCap,
  chart: LuChartColumn,
  axle: LuWrench,
  factory: LuFactory,
  'cart-lift': LuTruck,
  grain: LuLayoutGrid,
  engine: LuCpu,
  books: LuBookOpen,
  flame: LuFlame,
  fe2: LuLayers,
  contact: LuContact,
  mobility: LuGlobe,
  languages: LuLanguages,
};

export default function Icon({ name, className = '', ...props }) {
  const Cmp = map[name] || LuCircle;
  return <Cmp className={className} {...props} />;
}
