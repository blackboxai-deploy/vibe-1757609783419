"use client";

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  variant = 'light',
  className = '' 
}: LogoProps) {
  
  // Size configurations
  const sizeConfig = {
    small: {
      image: 'w-6 h-6',
      text: 'text-lg',
      spacing: 'space-x-2'
    },
    medium: {
      image: 'w-10 h-10',
      text: 'text-2xl',
      spacing: 'space-x-3'
    },
    large: {
      image: 'w-16 h-16',
      text: 'text-4xl',
      spacing: 'space-x-4'
    }
  };

  // Your custom logo - trying direct imagehost.at URL
  const logoUrl = "https://www.imagehost.at/images/2024/12/26/JwV8H.png";
  
  // Alternative: You can use a local logo from the public folder
  // const logoUrl = "/logo.png";
  
  // Text color variants
  const textColor = variant === 'light' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    : 'text-white';

  return (
    <div className={`flex items-center ${sizeConfig[size].spacing} ${className}`}>
      {/* Logo Image */}
      <img 
        src={logoUrl}
        alt="SocialPro Logo" 
        className={`${sizeConfig[size].image} rounded-lg object-contain`}
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          (e.target as HTMLImageElement).src = "https://placehold.co/80x80/3b82f6/ffffff?text=SP";
        }}
      />
      
      {/* Company Name */}
      {showText && (
        <div className={`${sizeConfig[size].text} font-bold ${textColor}`}>
          SocialPro
        </div>
      )}
    </div>
  );
}