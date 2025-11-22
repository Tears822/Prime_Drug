// Script to convert authentication-codes.json to TypeScript format
const fs = require('fs');

console.log('📥 Importing codes to TypeScript...\n');

// Read the generated codes
const codesData = JSON.parse(fs.readFileSync('authentication-codes.json', 'utf8'));

// Build the authCodes object
let authCodesContent = `// Authentication code whitelist
// Auto-generated from authentication-codes.json
// Format: { code: string, product?: string, verified: boolean, verifiedAt?: string }

export interface AuthCode {
  code: string;
  product?: string;
  verified: boolean;
  verifiedAt?: string;
}

// All authentication codes
export const authCodes: Record<string, AuthCode> = {
`;

let totalCodes = 0;

codesData.forEach(productData => {
  productData.codes.forEach(code => {
    authCodesContent += `  "${code}": { code: "${code}", product: "${productData.product}", verified: false },\n`;
    totalCodes++;
  });
});

authCodesContent += `};

export const verifyCode = (code: string): { valid: boolean; product?: string; alreadyVerified?: boolean; verifiedAt?: string } => {
  const normalizedCode = code.toUpperCase().trim();
  const authCode = authCodes[normalizedCode];
  
  if (!authCode) {
    return { valid: false };
  }
  
  if (authCode.verified) {
    return { valid: false, alreadyVerified: true, product: authCode.product, verifiedAt: authCode.verifiedAt }; // Already verified (one-time use)
  }
  
  // Mark as verified
  authCode.verified = true;
  authCode.verifiedAt = new Date().toISOString();
  
  return { valid: true, product: authCode.product };
};

export const generateCodes = (count: number, product?: string): string[] => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Excluding confusing chars
  const codes: string[] = [];
  
  for (let i = 0; i < count; i++) {
    let code: string;
    do {
      code = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    } while (authCodes[code]); // Ensure uniqueness
    
    authCodes[code] = {
      code,
      product,
      verified: false,
    };
    codes.push(code);
  }
  
  return codes;
};
`;

// Write to the TypeScript file
fs.writeFileSync('src/data/authCodes.ts', authCodesContent);

console.log(`✅ Successfully imported ${totalCodes} codes to src/data/authCodes.ts`);
console.log('\n🔄 Please rebuild the project with: npm run build');
console.log('✨ All codes are now active in your verification system!\n');

