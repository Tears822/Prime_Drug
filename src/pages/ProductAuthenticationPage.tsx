import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ShieldCheck, CheckCircle, XCircle, AlertCircle, QrCode, Camera } from "lucide-react";
import { verifyCode } from "@/data/authCodes";
import { QRScanner } from "@/components/QRScanner";

export const ProductAuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [result, setResult] = useState<{ status: "success" | "error" | "invalid" | null; message: string; product?: string }>({
    status: null,
    message: ""
  });

  // Check for code in URL (from QR scan)
  useEffect(() => {
    const urlCode = searchParams.get("code");
    if (urlCode) {
      const codeToVerify = urlCode.toUpperCase();
      setCode(codeToVerify);
      handleVerifyCode(codeToVerify);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleVerifyCode = (codeToVerify: string) => {
    if (codeToVerify.length < 6) {
      setResult({
        status: "invalid",
        message: "Please enter a valid authentication code (minimum 6 characters)"
      });
      return;
    }

    const verification = verifyCode(codeToVerify);
    
    if (verification.valid) {
      setResult({
        status: "success",
        message: verification.product 
          ? `✓ Product Verified! This is an authentic AR PHARMA product: ${verification.product}`
          : "✓ Product Verified! This is an authentic AR PHARMA product.",
        product: verification.product
      });
    } else {
      setResult({
        status: "error",
        message: "✗ Invalid Code. This product could not be verified. Please contact us if you believe this is an error."
      });
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    handleVerifyCode(code);
  };

  const handleScanSuccess = (scannedCode: string) => {
    // Extract code from URL if scanned QR contains URL
    let extractedCode = scannedCode;
    try {
      const url = new URL(scannedCode);
      const codeParam = url.searchParams.get("code");
      if (codeParam) {
        extractedCode = codeParam;
      } else if (url.pathname.includes("/verify")) {
        // If it's just the verify page URL, use manual entry
        setShowScanner(false);
        return;
      }
    } catch {
      // Not a URL, use as-is
    }
    
    setCode(extractedCode.toUpperCase());
    setShowScanner(false);
    handleVerifyCode(extractedCode.toUpperCase());
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10">
        <section className="space-y-10">
          <header className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-400">Authentication Console</span>
            <h1 className="text-4xl font-heading font-bold">Verify your AR PHARMA product in under 10 seconds.</h1>
            <p className="text-gray-600 max-w-2xl">
              The crown label conceals a serialized code paired directly with our lab’s whitelist. Scratch, enter, confirm. Counterfeits are rejected instantly.
            </p>
          </header>

          <div className="glass-panel rounded-[32px] p-10">
            <form onSubmit={handleVerify} className="space-y-6">
              <label className="block">
                <span className="text-sm uppercase tracking-[0.4em] text-gray-400">Authentication code</span>
                <input
                  type="text"
                  id="code"
                  name="code"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="EXZ56P"
                  className="mt-3 w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-5 text-3xl text-center font-mono tracking-[0.4em] text-gray-900 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 transition-all"
                />
              </label>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowScanner(true)}
                  className="flex-1 bg-white border-2 border-brand-blue text-brand-blue text-lg font-semibold py-4 rounded-2xl hover:bg-brand-blue/5 transition-colors flex items-center justify-center space-x-2"
                >
                  <Camera className="h-5 w-5" />
                  <span>Scan QR</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-brand-blue text-white text-lg font-semibold py-4 rounded-2xl hover:bg-brand-blue-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="h-5 w-5" />
                  <span>Verify</span>
                </button>
              </div>
            </form>

            {result.status && (
              <div
                className={`mt-6 p-5 rounded-2xl border-2 ${
                  result.status === "success"
                    ? "border-green-500 bg-green-50"
                    : result.status === "error"
                    ? "border-red-500 bg-red-50"
                    : "border-yellow-500 bg-yellow-50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  {result.status === "success" && <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />}
                  {result.status === "error" && <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />}
                  {result.status === "invalid" && <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />}
                  <p
                    className={`font-medium ${
                      result.status === "success"
                        ? "text-green-800"
                        : result.status === "error"
                        ? "text-red-800"
                        : "text-yellow-800"
                    }`}
                  >
                    {result.message}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {["Scratch", "Scan", "Match", "Track"].map((step, index) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gray-400">
                  Step {index + 1}
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="text-xl font-heading font-semibold mt-3">{step}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {index === 0 && "Reveal the serialized code hidden beneath the protective foil."}
                  {index === 1 && "Scan the QR crown or jump directly to this console."}
                  {index === 2 && "Enter the alphanumeric code exactly as printed."}
                  {index === 3 && "Receive timestamped confirmation with lot data."}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-1">Important notice</h3>
                <p className="text-sm text-yellow-800">
                  Missing or rejected codes indicate counterfeit risk. Report issues immediately to{" "}
                  <a href="mailto:verify@arpharma.net" className="font-semibold underline">
                    verify@arpharma.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {showScanner && (
          <QRScanner
            onScanSuccess={handleScanSuccess}
            onClose={() => setShowScanner(false)}
          />
        )}

        {/* Packaging peek */}
        <aside className="stripe-card rounded-[40px] p-8 h-fit">
          <div className="h-full flex flex-col gap-8">
            <div className="bg-white border border-gray-200 rounded-[32px] p-8 relative overflow-hidden">
              <div className="absolute inset-y-8 left-10 w-1.5 bg-gradient-to-b from-brand-blue-light to-brand-blue rounded-full" />
              <div className="absolute inset-y-8 left-16 w-1 bg-gradient-to-b from-brand-blue/20 to-brand-blue-dark/60 rounded-full" />
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Lot QA4592</p>
                <h4 className="text-3xl font-heading font-bold text-brand-blue mt-2">PRIME</h4>
                <p className="text-sm text-gray-500">Testosterone Enanthate · 250mg/ml</p>
              </div>
              <div className="mt-10 flex flex-col items-center text-center">
                <QrCode className="h-16 w-16 text-brand-blue" />
                <p className="mt-4 text-sm text-gray-500">Crown QR + scratch panel pairing</p>
              </div>
            </div>

            <div className="bg-brand-blue text-white rounded-[28px] p-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Why we verify</p>
              <p className="text-lg font-semibold leading-relaxed">
                Counterfeit labs mimic visual design but fail the whitelist. We honor athletes by making fraud obvious.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
