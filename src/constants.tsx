import { Terminal, Cpu, Activity, Radio, Trophy, Layers, Award } from 'lucide-react';
// This line below is the one causing the error. Make sure it looks EXACTLY like this:
// This line below is the one causing the error. Make sure it looks EXACTLY like this:
import type { Experience, SkillCategory, Education, Achievement } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'intel-2024',
    role: 'SoC Functional Validation Engineer',
    company: 'Intel Corporation',
    period: 'May 2024 - Dec 2024',
    description: [
      'Performed electrical validation of multi-phase fully integrated voltage regulators for Intel Xeon Server platforms.',
      'Executed comprehensive bench characterization: output voltage ripple, efficiency, thermal shutdown, transient response.',
      'Optimized compensator performance by systematically sweeping feedback loop components, enhancing phase margin and transient response by 25%.',
      'Conducted PMAX validation simulating dynamic workloads and debugged duty cycle glitches.',
      'Developed Python-based automation for GPIB/USB instrument control.'
    ]
  },
  {
    id: 'tessolve-merged',
    role: 'Silicon Validation Engineer',
    company: 'Tessolve Semiconductors',
    period: 'May 2023 - Sep 2025',
    description: [
      'Validated EdgeQ SoC IP blocks including ADC/DAC converters and High-Speed I/O protocols (PCIe, Ethernet).',
      'Executed compliance testing, eye diagram analysis, and jitter analysis using Keysight UXR-series 70GHz oscilloscope.',
      'Performed PMIC validation for TPS7A4901/TPS7A8300 LDO devices, testing line/load regulation and PSRR.',
      'Conducted validation for USB4 (20G) re-driver, extracting S-parameters for 2-port and 4-port network configurations.',
      'Validated multiple IP blocks (ADC, Current Sensor, Temp Sensor) for Axiro F1594 RF Power Amplifier Bias Controller.',
      'Developed Python and LabVIEW automation scripts, reducing manual testing time by up to 40%.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming & Automation',
    skills: ['Python (Automation)', 'LabVIEW', 'GPIB/USB Instrument Control', 'Git', 'Scripting'],
    icon: <Terminal className="w-5 h-5" />,
    color: 'text-sky-600'
  },
  {
    category: 'Validation Domains',
    skills: ['Post-Silicon Validation', 'PMIC Characterization', 'ADC/DAC Testing', 'Voltage Regulators', 'SoC Validation'],
    icon: <Cpu className="w-5 h-5" />,
    color: 'text-sky-600'
  },
  {
    category: 'High-Speed Protocols',
    skills: ['PCIe Gen 4/5', 'USB4 (20G)', 'Ethernet', 'DDR', 'Signal Integrity', 'Eye Diagram Analysis'],
    icon: <Activity className="w-5 h-5" />,
    color: 'text-sky-600'
  },
  {
    category: 'Test Equipment',
    skills: ['Keysight UXR (70GHz)', 'M8 BERT (64Gbps)', 'VNA & Spectrum Analyzers', 'SMU', 'Real-time Scopes'],
    icon: <Radio className="w-5 h-5" />,
    color: 'text-sky-600'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Technology in Electronics Engineering',
    institution: 'BITS Pilani, Hyderabad',
    period: 'Jan 2025 - Pursuing'
  },
  {
    degree: 'Diploma in Electronics and Embedded Systems',
    institution: 'Nettur Technical Training Foundation (NTTF)',
    period: 'Oct 2020 - Nov 2023'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '1st Place - World CanSat Rocketry Competition',
    year: '2023',
    location: 'Serbia, UK',
    description: ['Designed miniature satellite measuring air pollution with 2-second telemetry and ground station control.'],
    icon: <Trophy className="w-6 h-6 text-sky-500" />
  },
  {
    title: '2nd Place - World Youth Skills Competition',
    year: '2023',
    location: 'NTTF Global',
    description: ['Awarded for technical excellence in electronics and embedded systems.'],
    icon: <Award className="w-6 h-6 text-sky-500" />
  },
  {
    title: 'NOCN Level 5 International Diploma',
    year: '2023',
    description: ['Graduated with Distinction in Electronics.'],
    icon: <Award className="w-6 h-6 text-sky-500" />
  },
  {
    title: 'Team Leader - National Quality Convention',
    year: '2023',
    location: 'India',
    description: ['Led cross-functional team to develop a compact portable power supply system.'],
    icon: <Layers className="w-6 h-6 text-sky-500" />
  }
];