// Authentication code whitelist
// In production, this would be stored in a database
// Format: { code: string, product?: string, verified: boolean, verifiedAt?: string }

export interface AuthCode {
  code: string;
  product?: string;
  verified: boolean;
  verifiedAt?: string;
}

// Sample codes - Replace with your generated codes
export const authCodes: Record<string, AuthCode> = {
  "EXZ56P": { code: "EXZ56P", product: "Test E 250MG", verified: false },
  "ABC123": { code: "ABC123", product: "Bold 200", verified: false },
  "XYZ789": { code: "XYZ789", product: "Deca 200", verified: false },
  "DEF456": { code: "DEF456", product: "Primo 100", verified: false },
  "GHI321": { code: "GHI321", product: "Anavar 10", verified: false },
};

export const verifyCode = (code: string): { valid: boolean; product?: string } => {
  const normalizedCode = code.toUpperCase().trim();
  const authCode = authCodes[normalizedCode];
  
  if (!authCode) {
    return { valid: false };
  }
  
  if (authCode.verified) {
    return { valid: false }; // Already verified (one-time use)
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

