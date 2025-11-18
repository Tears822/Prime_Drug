import { useState } from "react";
import { generateCodes } from "@/data/authCodes";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { Download, Copy, Check } from "lucide-react";

export const CodeGeneratorPage = () => {
  const [count, setCount] = useState(10);
  const [product, setProduct] = useState("");
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const codes = generateCodes(count, product || undefined);
    setGeneratedCodes(codes);
  };

  const copyAllCodes = () => {
    const codesText = generatedCodes.join("\n");
    navigator.clipboard.writeText(codesText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCodes = () => {
    const codesText = generatedCodes.join("\n");
    const blob = new Blob([codesText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ar-pharma-codes-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-heading font-bold">Authentication Code Generator</h1>
          <p className="text-gray-600">
            Generate unique authentication codes for your products. Each code can only be verified once.
          </p>
        </header>

        <div className="glass-panel rounded-[32px] p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Codes
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name (Optional)
              </label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="e.g., Test E 250MG"
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition-all"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-brand-blue text-white text-lg font-semibold py-4 rounded-2xl hover:bg-brand-blue-dark transition-colors"
          >
            Generate Codes
          </button>
        </div>

        {generatedCodes.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold">
                Generated Codes ({generatedCodes.length})
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={copyAllCodes}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy All"}
                </button>
                <button
                  onClick={downloadCodes}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {generatedCodes.map((code, index) => (
                  <div
                    key={index}
                    className="bg-brand-gray rounded-xl p-4 text-center font-mono text-lg font-semibold text-brand-blue border border-brand-blue/20"
                  >
                    {code}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">QR Code Generation</h3>
              <p className="text-sm text-blue-800 mb-4">
                Generate QR codes that link directly to the verification page. Use these on your product packaging.
              </p>
              <div className="space-y-4">
                {generatedCodes.slice(0, 5).map((code) => (
                  <div key={code} className="bg-white rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono font-semibold text-gray-900">{code}</span>
                      <span className="text-xs text-gray-500">
                        {baseUrl}/verify?code={code}
                      </span>
                    </div>
                    <QRCodeGenerator url={`${baseUrl}/verify?code=${code}`} size={150} />
                  </div>
                ))}
                {generatedCodes.length > 5 && (
                  <p className="text-sm text-blue-700 text-center">
                    ... and {generatedCodes.length - 5} more codes. Generate QR codes individually as needed.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <h3 className="font-semibold text-yellow-900 mb-2">Important Notes</h3>
          <ul className="text-sm text-yellow-800 space-y-2 list-disc list-inside">
            <li>Each code can only be verified once for security</li>
            <li>Store these codes securely - they cannot be regenerated</li>
            <li>Print QR codes on your product packaging</li>
            <li>Codes are 6 characters (alphanumeric, excluding confusing characters)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

