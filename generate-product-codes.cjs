// Script to generate authentication codes for all products
// Run with: node generate-product-codes.cjs

const fs = require('fs');

// Product list
const products = [
  // Injectables
  { name: "Test E", category: "Injectable", codesPerProduct: 100 },
  { name: "Test C", category: "Injectable", codesPerProduct: 100 },
  { name: "Test P", category: "Injectable", codesPerProduct: 100 },
  { name: "Sustanon", category: "Injectable", codesPerProduct: 100 },
  { name: "Nandrolone Decanoate (Deca)", category: "Injectable", codesPerProduct: 100 },
  { name: "Nandrolone Phenylpropionate (NPP)", category: "Injectable", codesPerProduct: 100 },
  { name: "Boldenone", category: "Injectable", codesPerProduct: 100 },
  { name: "Dihydroboldenone", category: "Injectable", codesPerProduct: 100 },
  { name: "Drostanolone Propionate (Masteron)", category: "Injectable", codesPerProduct: 100 },
  { name: "Metenolone Enanthate (Primo)", category: "Injectable", codesPerProduct: 100 },
  { name: "Tren A", category: "Injectable", codesPerProduct: 100 },
  { name: "Tren E", category: "Injectable", codesPerProduct: 100 },
  { name: "Tren C", category: "Injectable", codesPerProduct: 100 },
  
  // Orals
  { name: "Methandienone (Dianabol)", category: "Oral", codesPerProduct: 100 },
  { name: "Methyltestosterone", category: "Oral", codesPerProduct: 50 },
  { name: "Turinabol (Tbol)", category: "Oral", codesPerProduct: 100 },
  { name: "Oxymetholone (Anadrol)", category: "Oral", codesPerProduct: 100 },
  { name: "Oxandrolone (Anavar)", category: "Oral", codesPerProduct: 100 },
  { name: "Stanozolol (Winstrol)", category: "Oral", codesPerProduct: 100 },
  { name: "Fluoxymesterone (Halotestin)", category: "Oral", codesPerProduct: 50 },
  { name: "Mesterolone (Proviron)", category: "Oral", codesPerProduct: 50 },
  { name: "Methenolone Acetate (Primobolan Oral)", category: "Oral", codesPerProduct: 50 },
  { name: "Nandrolone-derived (Oral)", category: "Oral", codesPerProduct: 50 },
  
  // Peptides
  { name: "HGH 10IU", category: "Peptide", codesPerProduct: 100 },
  { name: "CJC-1295", category: "Peptide", codesPerProduct: 50 },
  { name: "BPC-157", category: "Peptide", codesPerProduct: 100 },
  { name: "TB-500", category: "Peptide", codesPerProduct: 100 },
  { name: "Melanotan II 10mg", category: "Peptide", codesPerProduct: 50 },
  { name: "Melanotan II 20mg", category: "Peptide", codesPerProduct: 50 },
  { name: "GHRP-6", category: "Peptide", codesPerProduct: 50 },
  { name: "GHK-Cu 5mg", category: "Peptide", codesPerProduct: 50 },
  { name: "GHK-Cu 10mg", category: "Peptide", codesPerProduct: 50 },
  { name: "KPV", category: "Peptide", codesPerProduct: 50 },
  { name: "Retatrutide", category: "Peptide", codesPerProduct: 100 },
  { name: "Semax", category: "Peptide", codesPerProduct: 50 },
  { name: "IGF-1 LR3", category: "Peptide", codesPerProduct: 50 },
  { name: "HCG 5000IU", category: "Peptide", codesPerProduct: 100 },
  { name: "Ipamorelin", category: "Peptide", codesPerProduct: 50 },
  { name: "Selank", category: "Peptide", codesPerProduct: 50 },
  { name: "Tesamorelin", category: "Peptide", codesPerProduct: 50 },
  { name: "SLUPP-322", category: "Peptide", codesPerProduct: 50 },
];

// Generate a random authentication code
function generateCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Excluding confusing chars (I, O, 0, 1, L)
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// Track all generated codes to ensure uniqueness
const allCodes = new Set();

// Generate unique code
function generateUniqueCode() {
  let code;
  do {
    code = generateCode();
  } while (allCodes.has(code));
  allCodes.add(code);
  return code;
}

console.log("🔐 Prime Laboratory - Authentication Code Generator");
console.log("================================================\n");

let allCodesOutput = [];
let csvOutput = "Product Name,Category,Authentication Code\n";
let readmeOutput = `# Prime Laboratory - Authentication Codes\n\nGenerated on: ${new Date().toLocaleString()}\n\nTotal Products: ${products.length}\n\n`;

products.forEach((product, index) => {
  console.log(`Generating codes for: ${product.name} (${product.codesPerProduct} codes)...`);
  
  const productCodes = [];
  for (let i = 0; i < product.codesPerProduct; i++) {
    const code = generateUniqueCode();
    productCodes.push(code);
    csvOutput += `${product.name},${product.category},${code}\n`;
  }
  
  allCodesOutput.push({
    product: product.name,
    category: product.category,
    codes: productCodes
  });
  
  readmeOutput += `## ${product.name} (${product.category})\n`;
  readmeOutput += `Total Codes: ${product.codesPerProduct}\n`;
  readmeOutput += `Codes: ${productCodes.join(", ")}\n\n`;
});

// Save to files
console.log("\n💾 Saving files...");

// Save CSV format
fs.writeFileSync("authentication-codes.csv", csvOutput);
console.log("✅ Saved: authentication-codes.csv");

// Save JSON format
fs.writeFileSync("authentication-codes.json", JSON.stringify(allCodesOutput, null, 2));
console.log("✅ Saved: authentication-codes.json");

// Save README format
fs.writeFileSync("authentication-codes-README.md", readmeOutput);
console.log("✅ Saved: authentication-codes-README.md");

// Save organized text format by category
let textOutput = `PRIME LABORATORY - AUTHENTICATION CODES\n`;
textOutput += `Generated: ${new Date().toLocaleString()}\n`;
textOutput += `Total Unique Codes: ${allCodes.size}\n`;
textOutput += `${"=".repeat(80)}\n\n`;

["Injectable", "Oral", "Peptide"].forEach(category => {
  textOutput += `\n${"=".repeat(80)}\n`;
  textOutput += `${category.toUpperCase()} PRODUCTS\n`;
  textOutput += `${"=".repeat(80)}\n\n`;
  
  allCodesOutput.filter(p => p.category === category).forEach(item => {
    textOutput += `\n${item.product}\n`;
    textOutput += `${"-".repeat(item.product.length)}\n`;
    
    // Print codes in rows of 10
    for (let i = 0; i < item.codes.length; i += 10) {
      textOutput += item.codes.slice(i, i + 10).join("  ") + "\n";
    }
    textOutput += "\n";
  });
});

fs.writeFileSync("authentication-codes.txt", textOutput);
console.log("✅ Saved: authentication-codes.txt");

// Generate QR code URLs list
let qrUrlsOutput = `# QR Code URLs for Prime Laboratory Products\n\n`;
qrUrlsOutput += `Use these URLs to generate QR codes (e.g., on qrcode-monkey.com or qr-code-generator.com)\n\n`;
qrUrlsOutput += `Base URL: https://your-website.com/verify?code=CODE\n\n`;

allCodesOutput.forEach(product => {
  qrUrlsOutput += `\n## ${product.product}\n\n`;
  product.codes.slice(0, 10).forEach(code => {
    qrUrlsOutput += `- https://your-website.com/verify?code=${code}\n`;
  });
  qrUrlsOutput += `\n... and ${product.codes.length - 10} more codes\n\n`;
});

fs.writeFileSync("qr-code-urls.md", qrUrlsOutput);
console.log("✅ Saved: qr-code-urls.md");

console.log("\n✨ Code generation complete!");
console.log(`\nTotal unique codes generated: ${allCodes.size}`);
console.log("\nFiles created:");
console.log("  1. authentication-codes.csv - Import into Excel/Google Sheets");
console.log("  2. authentication-codes.json - For developers");
console.log("  3. authentication-codes.txt - Human-readable organized by category");
console.log("  4. authentication-codes-README.md - Markdown format");
console.log("  5. qr-code-urls.md - URLs for QR code generation");
console.log("\n📦 Next steps:");
console.log("  1. Print these codes on scratch-off labels");
console.log("  2. Generate QR codes using the URLs in qr-code-urls.md");
console.log("  3. Update src/data/authCodes.ts with the generated codes");
console.log("  4. Place QR codes + scratch labels on product packaging\n");

