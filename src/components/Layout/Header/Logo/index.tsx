import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface LogoProps {
  smallVersion?: boolean;
}

const Logo: React.FC<LogoProps> = ({ smallVersion = false }) => {
  return (
    <Link href="/" className={smallVersion ? "flex items-center justify-center" : ""}>
      <Image
        src="/images/logo/logo_horizontal-removebg-preview.png"
        alt="logo"
        width={smallVersion ? 40 : 1250}
        height={smallVersion ? 40 : 900}
        style={{ 
          width: "auto", 
          height: "auto",
          maxWidth: smallVersion ? "130px" : "400px",
          objectFit: "cover"
        }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
