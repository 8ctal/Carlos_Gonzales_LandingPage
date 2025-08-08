import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface LogoProps {
  smallVersion?: boolean;
  version?: number;
}

const Logo: React.FC<LogoProps> = ({ smallVersion = false, version = 0 }) => {
  return (
    <Link href="/" className={smallVersion ? "flex items-center justify-center" : ""}>
      <Image
        src={smallVersion ? "/images/logo/logo_horizontal-removebg-preview.png" : "/images/logo/logo_horizontal_white.png"}
        alt="logo"
        width={smallVersion && version === 1 ? 100 : 1250}
        height={smallVersion && version === 1 ? 70 : 900}
        style={{ 
          width: "auto", 
          height: "auto",
          maxWidth: smallVersion && version === 1 ? "50px" : "400px",
          objectFit: "cover"
        }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
