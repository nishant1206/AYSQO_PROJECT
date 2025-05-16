// HeroStats.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarRateIcon from '@mui/icons-material/StarRate';
import CountUp from 'react-countup';

const stats = [
  { icon: <PersonOutlineIcon />,   end: 300,  suffix: '+',   label: 'Projects' },
  { icon: <TrendingUpIcon />,      end: 540,              label: 'Clients'  },
  { icon: <EmojiEventsIcon />,     end: 100,  suffix: '+',   label: 'Awards'   },
  { icon: <StarRateIcon />,        end: 9.5,  decimals: 1, suffix:'/10', label: 'Rating'   },
];

const StatsSection: React.FC = () => (
  <Box className="relative bg-gradient-to-br from-indigo-600 to-blue-500 overflow-hidden py-24">
    {/* Animated Background Blobs */}
    <Box className="absolute -top-20 -left-10 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-blob" />
    <Box className="absolute top-10 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-2xl animate-blob animation-delay-2000" />

    <Container className="relative z-10 text-center">
      <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-2">
        Our Impact in Numbers
      </h2>
      <p className="text-indigo-100 mb-12">
        We’re proud of what we’ve achieved—and can’t wait to do even more.
      </p>

      <div className="flex flex-wrap justify-center">
        {stats.map((s, i) => (
          <Box
            key={s.label}
            className={`
              bg-white/20 backdrop-blur-md
              rounded-2xl p-8 m-4
              w-40 md:w-48
              transform transition-transform duration-500
              hover:-translate-y-4 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50
              ${i % 2 === 0 ? 'mt-0' : 'mt-8'}
            `}
          >
            {/* Icon Badge */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white/40 rounded-full mb-4 ring-2 ring-white/60">
              <span className="text-2xl text-white">{s.icon}</span>
            </div>

            {/* Animated Count */}
            <div className="text-white text-3xl font-bold">
              <CountUp end={s.end} duration={2} decimals={s.decimals ?? 0} suffix={s.suffix ?? ''} />
            </div>
            <div className="uppercase tracking-wider text-indigo-100 mt-1 text-sm">
              {s.label}
            </div>
          </Box>
        ))}
      </div>
    </Container>

    {/* Keyframes for Blob Animation */}
    <style>{`
      @keyframes blob {
        0%,100% { transform: translate(0,0) scale(1); }
        33%     { transform: translate(30px,-20px) scale(1.1); }
        66%     { transform: translate(-20px,30px) scale(0.9); }
      }
      .animate-blob { animation: blob 8s ease-in-out infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
    `}</style>
  </Box>
);

export default StatsSection;
