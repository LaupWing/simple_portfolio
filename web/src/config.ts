import { SkillsType, SocialType } from "types";

export default {
   github_endpoint: "https://api.github.com/users/",
   skills: [
      "firebase",
      "gatsby",
      "laravel",
      "nextjs",
      "react",
      "shopify",
      "solidity",
      "tailwind",
      "typescript",
      "vue",
      "wordpress"
   ] as SkillsType,
   socials: {
      dribble: "https://dribbble.com/LaupWing0",
      instagram: "",
      github: "https://github.com/LaupWing",
      linkedin: "https://www.linkedin.com/in/loc-nguyen-a33896272/"
   } as Record<SocialType, string>
}